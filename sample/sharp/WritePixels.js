const _ = require( 'wTools' );
require( 'wFiles' );
const sharp = require( 'sharp' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    137, 80, 78, 71,
    13, 10, 26, 10,
    0, 0, 0, 13,
    73, 72, 68, 82,
    0, 0, 0, 2,
    0, 0, 0, 2,
    8, 6, 0, 0,
    0, 114, 182, 13,
    36, 0, 0, 0,
    9, 112, 72, 89,
    115, 0, 0, 14,
    194, 0, 0, 14,
    194, 1, 21, 40,
    74, 128, 0, 0,
    0, 18, 73, 68,
    65, 84, 8, 215,
    99, 248, 207, 192,
    240, 31, 12, 129,
    52, 24, 0, 0,
    73, 200, 9, 247,
    216, 15, 83, 171,
    0, 0, 0, 0,
    73, 69, 78, 68,
    174, 66, 96, 130
  ]
} )

sharp( buf )
.toFile( `${__dirname}/../../data/image/WrittenPixelsSharp.png` )
console.log( _.fileProvider.statRead( `${__dirname}/../../data/image/WrittenPixelsSharp.png` ).size );
