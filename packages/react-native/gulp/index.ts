import { series } from 'gulp';

import { transform } from '@svgr/core';
import fs from 'fs-extra';
import upperCamelCase from 'uppercamelcase';
import path from 'path';
import { clearDir } from '../../../gulp/clean-dir';

const svgDir = path.join(__dirname, '../../../svg');
const srcDir = path.join(__dirname, '../src');

const parseName = (name: string) => ({
  name,
  componentName: upperCamelCase(name),
});

const getIcons = () => {
  const isFile = (fileName: string) => fs.lstatSync(fileName).isFile();

  const list = fs.readdirSync(svgDir).map((fileName: string) => path.join(svgDir, fileName))
    .filter(isFile);

  const nameList = list.map((path: any) => path.match(/svg\/(\S*).svg/)[1]);
  return nameList;
};

const generateIconsIndex = () => {
  fs.ensureDir(srcDir);

  const initialTypeDefinitions = `import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWith?: number;
  width?: string | number;
  height?: string | number;
}

type Icon = ComponentType<Props>;
`;

  fs.writeFileSync(path.join(srcDir, 'index.js'), '', 'utf-8');
  fs.writeFileSync(
    path.join(srcDir, 'index.d.ts'),
    initialTypeDefinitions,
    'utf-8',
  );
};

const generateIconCode = async ({ name }: {name: string}) => {
  const names = parseName(name);
  const location = path.join(svgDir, `${names.name}.svg`);
  const destination = path.join(srcDir, `${names.name}.js`);
  const svgCode = fs.readFileSync(location, 'utf-8');
  const ComponentName = `${names.componentName}Icon`;

  const styleSvgCode = await transform(svgCode, {
    plugins: ['@svgr/plugin-svgo'],
    svgo: true,
    svgoConfig: {
      plugins: [
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [
              {
                color: 'rgba(0, 0, 0, 0.9)',
              },
            ],
          },
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: [
              'fill-opacity',
            ],
          },
        },
      ],
    },
  });

  const rnCode = await transform(
    styleSvgCode,
    {
      plugins: [
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
      replaceAttrValues: {
        black: 'currentColor',
      },
      native: true,
      exportType: 'named',
      namedExport: ComponentName,
      prettier: true,
      prettierConfig: {
        singleQuote: true,
        openingBraceNewLine: true,
      },
    },
    { componentName: ComponentName },
  );
  // eslint-disable-next-line no-useless-concat
  const rnComponentCode = `${rnCode}\n` + `export default ${ComponentName};
`;

  fs.writeFileSync(destination, rnComponentCode, 'utf-8');

  return { ComponentName, name: names.name };
};

const appendToIconsIndex = ({ ComponentName, name }: { ComponentName:string, name:string }) => {
  const exportStringRn = `export { ${ComponentName} } from './${name}';\r\n`;
  fs.appendFileSync(
    path.join(srcDir, 'index.js'),
    exportStringRn,
    'utf-8',
  );
  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(srcDir, 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
};

export function reactNativeTask() {
  return series(
    clearDir(['packages/-native/src']),
    (cb) => {
      generateIconsIndex();

      const icons = getIcons();

      icons.forEach((name: string) => {
        generateIconCode({ name })
          .then(({ ComponentName, name }) => {
            appendToIconsIndex({ ComponentName, name });
          });
      });
      cb();
    },
  );
}
