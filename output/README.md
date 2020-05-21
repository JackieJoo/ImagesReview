# Awesome image!
Curated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.
### Modules to read/write/convert/compress images
| **N** | **R** | **W** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps** |
| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp) | jpg, png, webp, tiff, gif, svg | jpg, png, webp, tiff, gif, svg | open | yes | Native binding | JavaScript | - | + | 1425 |
| [**imagemin**](https://github.com/imagemin/imagemin) | jpg, png, webp, gif, svg | jpg, png, webp, gif, svg | open | yes | Pure | JavaScript | + | + | 682 |
| [**lwip**](https://github.com/EyalAr/lwip) | jpg, png, gif | jpg, png, gif | open | yes | Native binding | C | - | + | 79 |
| [**image-js**](https://github.com/image-js/image-js) | jpg, png, tiff | jpg, png, tiff | open | yes | Pure | JavaScript | + | + | 19 |
| [**imagetracerjs**](https://github.com/jankovicsandras/imagetracerjs) | jpg, png, webp, gif, bmp | jpg, png, webp, gif, bmp | open | yes | Pure | JavaScript | + | + | 5 |
| [**image-conversion**](https://github.com/WangYuLue/image-conversion) | jpg, png, gif | jpg, png, gif | open | yes | Pure | TypeScript | + | + | 2 |
| [**Compressor**](https://github.com/fengyuanchen/compressorjs) | jpg, png | jpg, png | open | yes | Pure | JavaScript | + | - | 21 |
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | jpg, png | jpg, png | open | yes | Pure | JavaScript | + | + | 5 |
| [**Capa-Image-Lib**](https://gitlab.com/Capa_Album/capa_image_lib) | jpg, png | jpg, png | open | yes | Native binding | C++ | - | + | 0 |
| [**imgsquash**](https://github.com/eashish93/imgsquash) | jpg, png | jpg, png | open | Integrated GUI | Pure | JavaScript | + | + | - |
| [**gm**](https://github.com/aheckmann/gm) | jpg, png, gif, pdf, webp | jpg, png, gif, pdf, webp | closed | yes | CUI adapter | C | - | + | 1122 |

### Modules to process images
| **N** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps**|
| --- | --- | --- | --- | --- | --- | --- | --- |
| [**Jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp) | open | yes | Pure | JavaScript | + | + | 1075 |
| [**Resemble.js**](https://github.com/rsmbl/Resemble.js) | open | yes | Pure | JavaScript | + | + | 50 |
| [**Pica**](https://github.com/nodeca/pica) | open | yes | Pure | JavaScript | + | + | 47 |
| [**image-js**](https://github.com/image-js/image-js) | open | yes | Pure | JavaScript | + | + | 19 |
| [**Smartcrop**](https://github.com/jwagner/smartcrop.js) | open | Integrated GUI | Pure | JavaScript | + | + | 19 |
| [**tui.image-editor**](https://github.com/nhn/tui.image-editor) | open | yes | Pure | JavaScript | + | + | 15 |
| [**merge-images**](https://github.com/lukechilds/merge-images) | open | yes | Pure | JavaScript | + | + | 11 |
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | open | yes | Pure | JavaScript | + | + | 5 |
| [**tui.image-editor GUI**](https://github.com/nhn/toast-ui.react-image-editor) | open | Integrated GUI | Pure | JavaScript | + | + | 2 |
| [**UPNG.js**](https://github.com/photopea/UPNG.js) | open | yes | Pure | JavaScript | + | + | 1 |
| [**MarvinJ**](https://github.com/gabrielarchanjo/marvinj) | open | yes | Pure | JavaScript | + | + | 0 |
| [**sharp**](https://github.com/lovell/sharp) | open | yes | Native binding | JavaScript | - | + | 1425 |
| [**Cropper**](https://github.com/fengyuanchen/cropperjs) | open | Integrated GUI | Pure | JavaScript | + | - | 276 |
| [**lwip**](https://github.com/EyalAr/lwip) | open | yes | Native binding | C | - | + | 79 |
| [**pngjs-image**](https://github.com/YahooArchive/pngjs-image) | open | yes | Pure | JavaScript | - | + | 27 |
| [**glfx.js**](https://github.com/evanw/glfx.js) | open | yes | Pure | JavaScript | + | - | 5 |
| [**lena.js**](https://github.com/davidsonfellipe/lena.js) | open | yes | Pure | JavaScript | + | - | 0 |
| [**web-dsp**](https://github.com/shamadee/web-dsp) | open | yes | Native-binding | C++ | + | - | 0 |
| [**Filtrr2**](https://github.com/alexmic/filtrr/tree/master/filtrr2) | open | Integrated GUI | Pure | JavaScript | + | - | - |
| [**img2css**](https://github.com/javierbyte/img2css) | open | Integrated GUI | Pure | JavaScript | + | - | - |

**Columns' definitions**
* *N,Name of the module* - undefined
* *R,Reading formats* - undefined
* *W,Writing formats* - undefined
* *Code,Is the module's source code open or closed* - undefined
* *Modular,Is it modular or integrated GUI* - undefined
* *I,Pure - Written completely in JavaScript,Native Binding -  wrapper library that bridges two programming languages. It provides glue code specifically made to allow JavaScript to use a foreign code written in C, C++, etc.,CUI adapter - wrapper library that transformes JS instructions into shell commands of another library or framework (typically written in a lower level code)* - undefined
* *PL,Programming language in which module is written* - undefined
* *B.s,Does the module support the browser* - undefined
* *N.s,Does the module support Node.js* - undefined
* *Deps,The amount of dependents of this module* - undefined