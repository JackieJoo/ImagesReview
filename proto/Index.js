const _ = require( 'wTools' );
require( 'wFiles' );

// TO DO:
// https://github.com/dy/image-pixels
// https://github.com/dy/image-decode
// https://github.com/deanm/omggif

const { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );
const { 'Modules to write images' : wTable } = readYML( '../data/WriteImg.yml' );
const { 'Modules to convert images' : convTable } = readYML( '../data/ConvertImg.yml' );
const { 'Modules to compress images' : compTable } = readYML( '../data/CompressImg.yml' );
const { 'Modules to process images' : processTableObj } = readYML( '../data/ProcessImg.yml' );

const
  {
    'Columns\' definitions' : columnsDef,
    'Sorting Algorithm (descending order significance)' : algo,
  } = readYML( '../data/MainInfo.yml' );

const { Resources : resources } = readYML( '../data/Resources.yml' );

let header1 = '# Awesome image!\n\nCurated overview of awesome Javascript projects to read / write / convert / compress /'
let header2 = ' process images of different formats.\n'

let final = `${header1}${header2}\n${tableObjToMd( 'read', rTable )}\n${tableObjToMd( 'write', wTable )}
${tableObjToMd( 'convert', convTable )}\n${tableObjToMd( 'compress', compTable )}
${tableObjToMd( 'process', processTableObj )}\n${readMd( `${__dirname}/../doc/RW.md` )}\n\n${colsDefsToMd( columnsDef )}\n${algoToMd( algo )}\n${resourcesToMd( resources )}`;

// Writing to file
writeMd( '../README.md', final );

// CREATE README file from README.md
// _.fileProvider.fileWrite( abs( '../README' ), _.fileProvider.fileRead( {
//   filePath : abs( '../README.md' ),
// } ) );

function abs()
{
  return _.path.s.join( __dirname, ... arguments );
}

exports.abs = abs;

function readMd( path )
{
  const data = _.fileProvider.fileRead( {
    filePath : abs( path ),
  } );

  return data;
}

function readYML( yml )
{
  const data = _.fileProvider.fileRead( {
    filePath : abs( yml ),
    encoding : 'yaml',
  } );

  return data;
}

exports.readYML = readYML;

function writeMd( md, data )
{
  _.fileProvider.fileWrite( abs( md ), data );
}

function tableObjToMd( table, obj )
{
  let temp = '';

  if( table === 'read' || table === 'write' )
  {
    temp = `### Modules to ${table === 'read' ? 'read': 'write'} images\n\n| **Name** | ${table === 'read' ? '**Read**': '**Write**'} | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** |\n| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |\n`;

    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${table === 'read' ? el.Read.join( ', ' ) : el.Write.join( ', ' ) } | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } | ${el.Working} |\n`;
    } );
  }
  else if( table === 'compress' || table === 'convert' )
  {
    temp = `### Modules to ${table === 'compress' ? 'compress': 'convert'} images\n\n| **Name** | **R** | **W** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** |\n| --- | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |\n`;
    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${el.R[ 0 ] === '-'? '-': el.R.join( ', ' )} | ${el.W[ 0 ] === '-'? '-': el.W.join( ', ' )} | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } | ${el.Working} |\n`;
    } );
  }
  else if( table === 'process' )
  {
    temp ='### Modules to process images\n\n| **Name** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps**| **Working** |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n';

    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } | ${el.Working} |\n`;
    } );
  }

  return temp;
}

function colsDefsToMd( cols )
{
  let temp = '**Columns\' definitions**\n'

  cols.forEach( ( el ) =>
  {
    let [ keyVal ] = Object.entries( el );

    if( keyVal[ 0 ]==='Interface' )
    {
      temp += `* *${ keyVal[ 0 ] }*:\n`

      keyVal[ 1 ].forEach( ( el ) =>
      {
        temp += `\t* ${ el }\n`
      } );
    }
    else
    {
      temp += `* *${ keyVal[ 0 ] }* - ${ keyVal[ 1 ] }\n`
    }
  } );

  return temp;
}

function algoToMd( algo )
{
  let temp = '**Sorting Algorithm** (descending order of significance)\n'
  algo.forEach( ( el, i ) =>
  {
    temp += `${ i+1 }. ${ el }\n`
  } );

  return temp;
}

function resourcesToMd( res )
{
  let temp = '### Resources:\n\n';

  res.forEach( ( el, i ) =>
  {
    temp += `${ i + 1 }. [${ el.Name }](${ el.Link })\n`;
  } );

  return temp;
}
