---
title: Hello webpack
date: "2018-02-01T10:00:03.284Z"
---

```javascript
/**
 * merlin webpack test init
 */
var webpack = require('webpack');
const path = require('path');

module.exports = {
  // 파일을 읽어들이기 시작하는 부분.
  entry: {
    app:['./src/a.js','./src/b.js']
  },
  output:{
    path: path.resolve(__dirname, 'dist'), // output으로 나올 파일이 저장될 경로..
    filename:'[name].js',
    publicPath:'/' //파일들이 위치할 서버 상의 경로..
  },
  
  module:{
    rules:[
      {
        test:/\.jsx?$/, // 정규식조건에 부합하는 파일들을 loader에 지정한 로더가 컴파일 해줍니다...
        loader: 'babel-loader',
        options:{
          presets: ['es2015', 'stage-0'],
        },
        exclude:['./node_modules']
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'] // loader로 써도 된다... css-loader로 처리한뒤 그것을 style-loader로 한번 더 처리.
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({ // 웹팩 3버젼 이하에선 uglifyjs-webpack-plugin 을 v0.4.6 사용하고 있지만 최신 v1.0.0을 사용하려면 따로 플러그인을 설치해주어야 한다. https://webpack.js.org/plugins/uglifyjs-webpack-plugin/ 참고
      sourceMap:true,
      compress:{
        warnings:true
      }
    }),
    new webpack.DefinePlugin({ // 전역 상수를 생성하고 컴파일 단계에서 치환되어서 해석된다.
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']) // 위와 같은 구문이다. definePlugin 의 process.env 설정의 단축으로 사용한다고 보면 된다. 매개변수에 object 도 지원한다. 
  ],
  resolve:{
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css']
  }
};
```

## 기본 개념

### Modules

- [modular programming](https://en.wikipedia.org/wiki/Modular_programming) 에 따르면 개발자들은 프로그램을 모듈이라고 불리우는 기능성들을 분리해서 프로그램을 만든다.

- 각각의 모듈들은 전체 프로그램에서 아주 작은 파트를 담당하며 코드확인, 디버깅 , 테스팅에 용이하다.
잘짜여진 모듈들은 solid abstraction 과 캡슐화가 잘되어있고 그로인해 모듈은 전체 어플리케이션 안에서 긴밀한 디자인을 가지고 명료한 목적을 띄고 있다.

### resolve

- resolve 옵션은 모듈들이 어떻게 해석될지를 변경하는 옵션이다. 웹팩은 합리적인 디폴트값을 지니고 있지만 그것은 변경이 가능하다.
웹팩에는 resolver라는 라이브러리가 있는데 이것은 모듈의 위치를 잡아주는데 도움을 준다. 모듈들은 require 문이나 import문으로 다른 모듈들을 불러올수 있다

```javascript
// 모듈들 내부에서 
import foo from 'path/to/module'
// or
require('path/to/module')
```

- 이때 resolver가 웹펙에 해당 모듈의 코드 위치를 매번 번들할때마다 찾아주게 된다.
웹팩은 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 를 사용해서 모듈을 번들링하는 동안 파일 경로의 문제를 해결해준다.

### Entry

- entry point 지시자는 webpack이 entry point의 내부 의존성을 파악하고 번들링의 시작점이 된다. 이 시작점을 들어간 후에 웹팩은 의존성이 있는 다른 모듈들과 라이브러리들을 인지하게 된다.

- 모든 의존성은 프로세스를 거친후에 번들이라는 불리우는 파일로 내 뱉어지게 된다. 
webpack config에서 entry라는 속성으로 설정을 할 수 있다.

```javascript
module.exports = {
    entry : './path/to/my/entry/file.js'
}
```

### Output

- output 속성은 웹펙이 번들을 내 뱉어지는 장소를 가리킨다. 
- output 필드 안에 구체적인 옵션들을 설정 할 수 있다.

```javascript
const path = require('path');

module.exports = {
    entry : './path/to/my/entry/file.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'my-first-webpack.bundle.js'
    }
}
```

- 여기서 path.resolve 는 해당 참조.
[https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths](https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths)

- 여기서 output.path 와 output.filename 은 웹팩에게 번들의 이름과 번들이 어디에 방출될 것인지를 설정하는 부분이다.


### Loaders

- Loader는 웹팩이 자바스크립트 파일 뿐만 아니라 더 많은것들을 진행 할 수 있게 만들어 줍니다. 
- 웹팩 로더는 app에 걸려있는 dependency를 포함해 모든 타입의 파일들을 모듈로 변화시킵니다.
- 로더는 test 프로퍼티와 use 프로퍼티를 지닙니다.
- test 프로퍼티는 어떤 파일 또는 파일들을 변화시킬것인지를 use 프로퍼티는 어떤 로더를 이용해서 변화시킬건지를 설정하는 부분입니다.

```javascript
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;

```

- 위에서 rules 프로퍼티는 2가지 이상의 프로퍼티들을 가질 때 사용합니다. 
- 이것은 웹팩에게 이렇게 말하는것과 같은 원리 입니다.

> "웹팩 컴파일러야 경로를 돌아다니면서 .txt파일을 만나거든 raw-loader를 사용해서 변화 시켜줘라 번들되기 전에~"



### Plugins

- loader는 확실한 타입만 변화시켜주는 반면 플러그인은 더 넓은 일에 효력을 발휘 할 수 있다. 플러그인의 영향력은 번들 최적화 및 축소 부터 환경과 유사한 변수 정의까지 다양합니다. 따라서 다양한 업무를 해결하는데 사용할 수 있습니다.

- 플러그인을 사용하려면 require()를 추가해야합니다. 여러 목적으로 여러번 사용할 수 있기에 new 를 사용해서 인스턴스를 생성해주어야 합니다.

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```



## 번들된 녀석을 파해쳐 보자

기본적으로 즉시 실행 함수를 사용하고 있다. (function(){})();
function 안에는 초기화, 모듈 캐시 및 공개멤버 설정, 모듈의 실행을 하는 함수의 정의
인자로는 각 모듈들을 배열에 담아 전달한다.

간단하게 아래와 같은 파일 구조를 지니고 있다고 가정하자.

```javascript
// a.js
import b from './b';
import {c,wtf} from './c';

console.log('a');

b();
c();

console.log(wtf);

// b.js
export default function(){console.log('b');}

// c.js
export function c(){
    console.log('c');
}
const wtf = 'wtf';
export {wtf};

```

webpack은 어떤 모양으로 번들링을 만들까???


1. 각각의 모듈을 배열에 담아 인자로 넘긴다.

참고로 아래 문법은 바벨로 돌렸을때 나오는 문법이다.
웹팩 2 부턴 바벨 없이도 import / export를 지원한다.

```javascript

    [
        // 0 번째 ( 시작점 )
        (function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(1);

        }),
        
        // 1 번째 
        (function(module, exports, __webpack_require__) {

            "use strict";
           
           // 아래 문장은 기본적으로 import 문을 바벨이 해석했을때 나올 수 있는 문장이다.
           // import b from './b';
           // 0번째 꺼 등록후 실행 하면 installModules에 export 정보를 업데이트 그후 인스톨된 모듈안에 exports를 리턴.. 이것은 곧 b.js 안에 있는 export 된 아이를 가져오는 것.
            var _b = __webpack_require__(2);
            var _b2 = _interopRequireDefault(_b);
            var _c = __webpack_require__(3);

            // 바벨이 해석한 객체인가..그렇지 않다면 default 프로퍼티 값으로 설정하자. 아래에서 default로 실행하기 때문...
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            console.log('a');

            (0, _b2.default)();

            (0, _c.c)();

            console.log(_c.wtf);
            
        }),
        // 2번째
        (function(module, exports, __webpack_require__) {
            
            // 아래 문장은 바벨이 기본적으로 export default function(){ console.log('b')} 문장을 만났을때 해석하는 문장..
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            // 이 부분은 installedModules 의 exports 에 설정되고 exports는 리턴 된다.
            exports.default = function () {
            console.log('b');
            };

         }),
        // 3번째
         (function(module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.c = c;
            function c() {
                console.log('c');
            }
            var wtf = 'wtf';
            exports.wtf = wtf;

        })
    ]

```

참고로 바벨 없이도 웹팩에서 import / export 를 해석 해준다.

공부 겸 봐두자.

아래 코드는 바벨 없이 웹팩만 돌렸을 때 나오는 코드 스타일 이다.

```javascript
[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__b__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c__ = __webpack_require__(3);
/**
 * Created by merlin.ho on 2017. 5. 31..
 */

console.log('a');

Object(__WEBPACK_IMPORTED_MODULE_0__b__["a" /* default */])();

Object(__WEBPACK_IMPORTED_MODULE_1__c__["a" /* c */])();

console.log(__WEBPACK_IMPORTED_MODULE_1__c__["b" /* wtf */]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by merlin.ho on 2017. 5. 31..
 */
/* harmony default export */ __webpack_exports__["a"] = (function(){console.log('b');});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = c;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return wtf; });
function c(){
    console.log('c');
}
const wtf = 'wtf';

/***/ })
]
```


2. 배열에 담긴 모듈들을 modules로 웹팩이 만든 함수에 넘긴다.

```javascript
(
    function(modules){ // 그 배열을 modules로 받는다.
        var installedModules = {}; // 모듈 캐싱처리를 위한 곳
        ...
    }
)([
    //위에서 만든 모듈들을 모아논 배열
])
```

3. 웹팩이 만든 함수안에는 웹팩용 \_\_webpack\_require\_\_ 함수를 만든다. 이 함수는 모듈 아이디를 받는다.

```javascript
function __webpack_require__(moduleId){
    ...
}
```

4. 기존에 캐싱되어있던 모듈이 있다면 그 모듈의 exports 를 return 시킨다.

```javascript
if(installedModules[moduleId]) {
	return installedModules[moduleId].exports;
}
```

5. 캐싱된 모듈이 없다면 새로운 모듈을 만들고 cache 안에 집어 넣는다.

```javascript
var module = installedModules[moduleId] = {
	i: moduleId,
	l: false,
	exports: {}
};
```

6. 만들어진 모듈을 실행 시킨다. call 사용

```javascript
modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

```

7. 호출이 다 이뤄졌다면 l 플래그를 true로 설정

```javascript
// Flag the module as loaded
module.l = true;
```

8. 마지막으로 해당 모듈의 exports를 리턴시킨다.

```javascript
// Return the exports of the module
return module.exports;
```

   
이 __webpack_require__ 함수도 객체이기에 여러 프로퍼티가 존재한다.

```javascript
// expose the modules object (__webpack_modules__)
__webpack_require__.m = modules;

// expose the module cache
__webpack_require__.c = installedModules;

// identity function for calling harmony imports with the correct context
__webpack_require__.i = function(value) { return value; };

// define getter function for harmony exports
// exports에 {name} 프로퍼티가 없으면 해당 {name} 으로 프로퍼티를 설정 get 설정은 해당 프로퍼티를 호출 했을때 getter 함수를 호출해서 나온 리턴값으로 얻게된다. 
// 접근자 프로퍼티 셋팅
__webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, {
            configurable: false, // 프로퍼티가 delete 통해 삭제를 할수없고 속성을 바꿀수 없다.
            enumerable: true, // for-in 루프에서 해당 프로퍼티를 반환할수 있다.
            get: getter // 접근자 프로퍼티는 getter와 setting 함수로 구성된다.
        });
    }
};

// getDefaultExport function for compatibility with non-harmony modules
// 모듈을 받아서 getter 함수를 설정하고 getter 함수에 a 프로퍼티를 설정한다.
// 모듈이 installed가 되었다면 getDefault 아니면 getMouduleExports 를 getter로 셋팅 후 'a' 프로퍼티를 생성하고 반환..
// getDefault.a 은 module['default'] 반환
// getMouduleExports.a 은 module 반환
__webpack_require__.n = function(module) {
    var getter = module && module.__esModule ?
        function getDefault() { return module['default']; } :
        function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
};

// Object.prototype.hasOwnProperty.call
__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
// __webpack_public_path__
__webpack_require__.p = "";

// Load entry module and return exports
// 실행 , 2 번째 모듈이 가지고 있는 module의 exports를 리턴
return __webpack_require__(__webpack_require__.s = 2);
```