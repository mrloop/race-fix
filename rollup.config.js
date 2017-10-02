import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-html';
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'race-fix',
    },
    plugins: [
      html({
        include: 'fixtures/*.html'
      }),
      babel({
        exclude: ['fixtures/**']
      })
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// the `targets` option which can specify `dest` and `format`)
	{
		input: 'index.js',
		external: ['uri-js', 'es6-promise'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
    plugins: [
      html({
        include: 'fixtures/*.html'
      }),
      babel({
        exclude: ['fixtures/**']
      })
    ]
	}
];
