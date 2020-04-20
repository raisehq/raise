(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('react'),
        require('semantic-ui-react'),
        require('styled-components'),
        require('moment'),
        require('react-is'),
        require('chart.js'),
        require('crypto'),
        require('graphql.js')
      )
    : typeof define === 'function' && define.amd
    ? define([
        'exports',
        'react',
        'semantic-ui-react',
        'styled-components',
        'moment',
        'react-is',
        'chart.js',
        'crypto',
        'graphql.js',
      ], factory)
    : ((global = global || self),
      factory(
        (global.RaiseComponents = {}),
        global.React,
        global.semanticUIReact,
        global.styled,
        global.moment,
        global.ReactIs,
        global.Chart,
        global.crypto$1,
        global.graphql
      ));
})(this, function(
  exports,
  React,
  semanticUiReact,
  styled,
  moment,
  reactIs,
  Chart,
  crypto$1,
  graphql
) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  styled =
    styled && Object.prototype.hasOwnProperty.call(styled, 'default')
      ? styled['default']
      : styled;
  moment =
    moment && Object.prototype.hasOwnProperty.call(moment, 'default')
      ? moment['default']
      : moment;
  reactIs =
    reactIs && Object.prototype.hasOwnProperty.call(reactIs, 'default')
      ? reactIs['default']
      : reactIs;
  Chart =
    Chart && Object.prototype.hasOwnProperty.call(Chart, 'default')
      ? Chart['default']
      : Chart;
  crypto$1 =
    crypto$1 && Object.prototype.hasOwnProperty.call(crypto$1, 'default')
      ? crypto$1['default']
      : crypto$1;
  graphql =
    graphql && Object.prototype.hasOwnProperty.call(graphql, 'default')
      ? graphql['default']
      : graphql;

  const env = {
    NODE_ENV: 'production',
    REACT_APP_HOST_IMAGES: 'https://static.raise.it',
    REACT_APP_DAI_ADDRESS: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
  };

  var process = {
    __proto__: null,
    env: env,
  };

  function _extends() {
    _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf('[native code]') !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === 'function' ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== 'function') {
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      }

      if (typeof _cache !== 'undefined') {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        },
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return self;
  }

  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    strings.raw = raw;
    return strings;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(n);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o) {
    var i = 0;

    if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o)))
        return function() {
          if (i >= o.length)
            return {
              done: true,
            };
          return {
            done: false,
            value: o[i++],
          };
        };
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }

    i = o[Symbol.iterator]();
    return i.next.bind(i);
  }

  var size = {
    mobileS: '321px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1430px',
    laptopL: '1439px',
    laptopXL: '1440px',
    desktop: '2560px',
  };
  var device = {
    mobileS: '(min-width: ' + size.mobileS + ')',
    mobileM: '(min-width: ' + size.mobileM + ')',
    mobileL: '(min-width: ' + size.mobileL + ')',
    tablet: '(min-width: ' + size.tablet + ')',
    laptop: '(min-width: ' + size.laptop + ')',
    laptopM: '(min-width: ' + size.laptopM + ')',
    laptopL: '(min-width: ' + size.laptopL + ')',
    laptopXL: '(min-width: ' + size.laptopXL + ')',
    desktop: '(min-width: ' + size.desktop + ')',
    desktopL: '(min-width: ' + size.desktop + ')',
  };

  function _templateObject30() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    position: absolute;\n    top: 0;\n    right: 0;\n    color: white;\n  }\n',
    ]);

    _templateObject30 = function _templateObject30() {
      return data;
    };

    return data;
  }

  function _templateObject29() {
    var data = _taggedTemplateLiteralLoose([
      '\n  position: absolute;\n  right: 105px;\n  font-size: 9px;\n  background: black;\n  width: 18px;\n  height: 18px;\n  border-radius: 36px;\n',
    ]);

    _templateObject29 = function _templateObject29() {
      return data;
    };

    return data;
  }

  function _templateObject28() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 2px;\n  height: 35px;\n  background: #ecedee;\n  margin: 0px;\n',
    ]);

    _templateObject28 = function _templateObject28() {
      return data;
    };

    return data;
  }

  function _templateObject27() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 100%;\n  height: 1px;\n  background: #ecedee;\n  margin: 0px;\n',
    ]);

    _templateObject27 = function _templateObject27() {
      return data;
    };

    return data;
  }

  function _templateObject26() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 80px;\n  height: 20px;\n  color: #fff;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  text-align: center;\n  padding: 3px 0 3px 0;\n  font-weight: bold;\n  background: ',
      ';\n  border-radius: 30px;\n  font-size: 12px;\n  line-height: 15px;\n',
    ]);

    _templateObject26 = function _templateObject26() {
      return data;
    };

    return data;
  }

  function _templateObject25() {
    var data = _taggedTemplateLiteralLoose([
      "\n  width: 100%;\n  height: 23px;\n  background: #ecedee;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n\n  &&:before {\n    content: '';\n    position: absolute;\n    width: ",
      '%;\n    height: 100%;\n    top: 0;\n    border-radius: 4px;\n    left: 0;\n    background: ',
      ';\n  }\n',
    ]);

    _templateObject25 = function _templateObject25() {
      return data;
    };

    return data;
  }

  function _templateObject24() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  font-size: 14px;\n  top: 2px;\n  left: 5px;\n',
    ]);

    _templateObject24 = function _templateObject24() {
      return data;
    };

    return data;
  }

  function _templateObject23() {
    var data = _taggedTemplateLiteralLoose([
      "\n  width: 90%;\n  height: 10px;\n  background: #ecedee;\n  position: relative;\n  overflow: hidden;\n\n  &&:before {\n    content: '';\n    position: absolute;\n    width: ",
      '%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: ',
      ';\n  }\n',
    ]);

    _templateObject23 = function _templateObject23() {
      return data;
    };

    return data;
  }

  function _templateObject22() {
    var data = _taggedTemplateLiteralLoose([
      '\n  color: #3c4251;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 28px;\n',
    ]);

    _templateObject22 = function _templateObject22() {
      return data;
    };

    return data;
  }

  function _templateObject21() {
    var data = _taggedTemplateLiteralLoose([
      '\n  color: #5a5a5a;\n  font-size: 10px;\n  font-weight: lighter;\n  margin-bottom: 4px;\n  line-height: 14px;\n',
    ]);

    _templateObject21 = function _templateObject21() {
      return data;
    };

    return data;
  }

  function _templateObject20() {
    var data = _taggedTemplateLiteralLoose([
      '\n  margin-top: 0px;\n  margin-bottom: 5px;\n',
    ]);

    _templateObject20 = function _templateObject20() {
      return data;
    };

    return data;
  }

  function _templateObject19() {
    var data = _taggedTemplateLiteralLoose([
      '\n  color: #5a5a5a;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 21px;\n',
    ]);

    _templateObject19 = function _templateObject19() {
      return data;
    };

    return data;
  }

  function _templateObject18() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  align-self: flex-end;\n  justify-content: center;\n  align-items: center;\n',
    ]);

    _templateObject18 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17() {
    var data = _taggedTemplateLiteralLoose([
      '\n  color: #3c4251;\n  font-size: ',
      ';\n  font-weight: bold;\n  line-height: 32px;\n',
    ]);

    _templateObject17 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  color: #5a5a5a;\n  font-size: 12px;\n  font-weight: lighter;\n  line-height: 14px;\n  margin-bottom: 12px;\n  margin-top: 20px;\n',
    ]);

    _templateObject16 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15() {
    var data = _taggedTemplateLiteralLoose([
      '\n  margin-top: 20px;\n  margin-bottom: 12px;\n',
    ]);

    _templateObject15 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-size: 10px;\n  font-weight: bold;\n  margin-left: 6px;\n',
    ]);

    _templateObject14 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-size: ',
      ';\n  color: #5c5d5d;\n  text-align: center;\n',
    ]);

    _templateObject13 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12() {
    var data = _taggedTemplateLiteralLoose([
      '\n  color: ',
      ';\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n',
    ]);

    _templateObject12 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11() {
    var data = _taggedTemplateLiteralLoose([
      '\n  flex: ',
      ';\n  margin: 20px 0px 0px 0px;\n  ',
      '\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n',
    ]);

    _templateObject11 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  margin: 20px 0px;\n  justify-content: ',
      ';\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  box-sizing: border-box;\n  flex-wrap: wrap;\n',
    ]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteralLoose([
      '\n  padding: 20px;\n  position: relative;\n  height: ',
      ';\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  padding-top: ',
      ';\n  &&& > .logoWrap {\n    position: absolute;\n    top: -35px;\n    left: 14px;\n  }\n  &&& > ',
      ' {\n    position: absolute;\n    top: 10px;\n    right: 8px;\n  }\n',
    ]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteralLoose([
      '\n  max-height: 76px;\n  height: 76px;\n  color: #5a5a5a;\n  font-size: 14px;\n  display: block;\n  text-align: left;\n  line-height: 21px;\n',
    ]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteralLoose([
      '\n  color: #5a5a5a;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: left;\n',
    ]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-weight: bold;\n  color: #5a5a5a;\n  font-size: 14px;\n',
    ]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteralLoose([
      '\n  min-height: ',
      ';\n  border-radius: 6px;\n  background-color: #ffffff;\n  border: 1px solid #cfd0d4;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n\n  max-width: ',
      ' !important;\n  @media ',
      ' {\n    width: ',
      ' !important;\n  }\n  width: 100%;\n',
    ]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    width: 70px;\n    height: 70px;\n    background-color: white;\n    border-radius: 6px;\n    border: 1px solid #cfd0d4;\n\n    background-position: center;\n    background-position-x: 0;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-image: ',
      ';\n  }\n',
    ]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 100%;\n  display: block;\n',
    ]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 100%;\n  height: 130px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: ',
      ';\n  border-radius: 6px 6px 0 0;\n  border-bottom: 1px solid #cfd0d4;\n',
    ]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteralLoose([
      '\n  position: relative;\n  display: flex;\n  align-items: center;\n',
    ]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var GraphContainer = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject()
  );
  var CardImageCrop = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject2(),
    function(_ref) {
      var src = _ref.src;
      return 'url(' + src + ')';
    }
  );
  var CardHref = /*#__PURE__*/ styled.a(/*#__PURE__*/ _templateObject3());
  var CardLogo = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject4(),
    function(_ref2) {
      var src = _ref2.src;
      return 'url(' + src + ')';
    }
  );
  var HeroCard = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject5(),
    function(_ref3) {
      var size = _ref3.size;
      return size || '335px';
    },
    function(_ref4) {
      var width = _ref4.width;
      return width || '372px';
    },
    device.laptop,
    function(_ref5) {
      var width = _ref5.width;
      return width || '372px';
    }
  );
  var TimeLeft = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject6());
  var CardBorrowerTitle = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject7()
  );
  var CardDescription = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject8()
  );
  var CardContent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject9(),
    function(_ref6) {
      var size = _ref6.size;
      return size || '100%';
    },
    function(_ref7) {
      var logo = _ref7.logo;
      return logo ? '55px' : '0';
    },
    TimeLeft
  );
  var Grid = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject10(),
    function(_ref8) {
      var spaceBetween = _ref8.spaceBetween;
      return spaceBetween ? 'space-between' : 'unset';
    },
    function(_ref9) {
      var nobottom = _ref9.nobottom;
      return nobottom && 'margin-bottom: 0;';
    },
    function(_ref10) {
      var notop = _ref10.notop;
      return notop && 'margin-top: 0;';
    },
    function(_ref11) {
      var alignCenter = _ref11.alignCenter;
      return alignCenter && 'align-items: center;';
    },
    function(_ref12) {
      var alignBottom = _ref12.alignBottom;
      return alignBottom && 'align-items: flex-end;';
    },
    function(_ref13) {
      var alignTop = _ref13.alignTop;
      return alignTop && 'align-items: flex-start;';
    }
  );
  var Row = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject11(),
    function(_ref14) {
      var small = _ref14.small;
      return small ? '1 0 25%' : '1 0 32.5%';
    },
    function(_ref15) {
      var notop = _ref15.notop;
      return notop && 'margin-top: 0;';
    }
  );
  var RowContent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject12(),
    function(_ref16) {
      var contentColor = _ref16.contentColor;
      return contentColor ? contentColor : '#5a5a5a';
    }
  );
  var RowTitle = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject13(),
    function(_ref17) {
      var big = _ref17.big;
      return big ? '14px' : '10px';
    }
  );
  var GraphTitle = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject14());
  var Header = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject15());
  var HeaderTitle = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject16());
  var HeaderContent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject17(),
    function(_ref18) {
      var fontSize = _ref18.fontSize;
      return fontSize || '26px';
    }
  );
  var RoiHeader = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject18());
  var RoiContent = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject19());
  var SubHeader = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject20());
  var SubHeaderTitle = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject21()
  );
  var SubHeaderContent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject22()
  );
  var Graph = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject23(),
    function(props) {
      return (props.width * 100) / 90;
    },
    function(props) {
      return props.color;
    }
  );
  var ProgressPercent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject24()
  );
  var ProgressBar = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject25(),
    function(props) {
      return props.width;
    },
    function(props) {
      return props.color;
    }
  );
  var Badge = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject26(),
    function(_ref19) {
      var color = _ref19.color;
      return color;
    }
  );
  var Separator = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject27());
  var Vertical = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject28());
  var InfoIcon = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject29());
  var InfoIconCmp = /*#__PURE__*/ styled(semanticUiReact.Icon)(
    /*#__PURE__*/ _templateObject30()
  );

  var Right = function Right(x) {
    return {
      map: function map(f) {
        return Right(f(x));
      },
      // @ts-ignore
      fold: function fold(f, g) {
        return g(x);
      },
      inspect: function inspect() {
        return 'Right(' + x + ')';
      },
    };
  };
  var Left = function Left(x) {
    return {
      map: function map() {
        return Left(x);
      },
      fold: function fold(f) {
        return f(x);
      },
      inspect: function inspect() {
        return 'Left(' + x + ')';
      },
    };
  };
  var Either = {
    either: function either(coor) {
      return coor ? Right(true) : Left(false);
    },
  };

  var useGraphWidth = function useGraphWidth(ref, currentAmount, totalAmount) {
    var config = Either.either(ref);
    return config.fold(
      function() {
        return {
          width: 0,
          originalWidth: 0,
        };
      },
      function() {
        var width = ref.getBoundingClientRect().width - 50;
        var percent = (currentAmount / totalAmount) * 100;
        return {
          width: percent,
          originalWidth: width,
        };
      }
    );
  };

  var Context = /*#__PURE__*/ React__default.createContext({});

  var BadgeComponent = function BadgeComponent(_ref) {
    var children = _ref.children,
      color = _ref.color;
    return React__default.createElement(
      Badge,
      {
        color: color,
      },
      children
    );
  };

  var RowComponent = function RowComponent(_ref2) {
    var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? null : _ref2$title,
      content = _ref2.content,
      contentColor = _ref2.contentColor,
      small = _ref2.small,
      big = _ref2.big,
      notop = _ref2.notop;
    return React__default.createElement(
      Row,
      {
        small: small,
        big: big,
        notop: notop,
      },
      React__default.createElement(
        RowContent,
        {
          contentColor: contentColor,
        },
        content
      ),
      title &&
        React__default.createElement(
          RowTitle,
          {
            big: big,
          },
          title
        )
    );
  };

  var HeaderComponent = function HeaderComponent(_ref3) {
    var title = _ref3.title,
      amount = _ref3.amount,
      fontSize = _ref3.fontSize,
      rest = _objectWithoutPropertiesLoose(_ref3, [
        'title',
        'amount',
        'fontSize',
      ]);

    return React__default.createElement(
      Header,
      Object.assign({}, rest),
      React__default.createElement(HeaderTitle, null, title),
      React__default.createElement(
        HeaderContent,
        {
          fontSize: fontSize,
        },
        amount
      )
    );
  };

  var SubHeaderComponent = function SubHeaderComponent(_ref4) {
    var title = _ref4.title,
      amount = _ref4.amount,
      rest = _objectWithoutPropertiesLoose(_ref4, ['title', 'amount']);

    return React__default.createElement(
      SubHeader,
      Object.assign({}, rest),
      React__default.createElement(SubHeaderTitle, null, title),
      React__default.createElement(SubHeaderContent, null, amount)
    );
  };

  var RoiHeaderComponent = function RoiHeaderComponent(_ref5) {
    var roi = _ref5.roi;
    return React__default.createElement(
      RoiHeader,
      null,
      React__default.createElement(RoiContent, null, roi + 'ROI')
    );
  };

  var CardWrapper = function CardWrapper(_ref6) {
    var children = _ref6.children,
      size = _ref6.size,
      width = _ref6.width,
      props = _objectWithoutPropertiesLoose(_ref6, [
        'children',
        'size',
        'width',
      ]);

    var graph = React__default.useRef(null);

    var _React$useState = React__default.useState({
        ref: null,
      }),
      values = _React$useState[0],
      setValues = _React$useState[1];

    React__default.useEffect(function() {
      return setValues({
        ref: graph.current,
      });
    }, []);
    return React__default.createElement(
      Context.Provider,
      {
        value: values,
      },
      React__default.createElement(
        HeroCard,
        Object.assign(
          {
            className: 'heroCard',
            ref: function ref(_ref7) {
              return (graph.current = _ref7);
            },
          },
          props,
          {
            size: size,
            width: width,
          }
        ),
        children
      )
    );
  };

  var Card = CardWrapper;

  var GraphComponent = function GraphComponent(_ref8) {
    var color = _ref8.color,
      currentAmount = _ref8.currentAmount,
      totalAmount = _ref8.totalAmount;

    var _React$useContext = React__default.useContext(Context),
      ref = _React$useContext.ref;

    var config = useGraphWidth(ref, currentAmount, totalAmount);
    return React__default.createElement(
      GraphContainer,
      null,
      React__default.createElement(Graph, {
        color: color,
        width: config.width,
      }),
      React__default.createElement(
        GraphTitle,
        null,
        Math.floor(config.width),
        '%'
      )
    );
  };

  var ProgressComponent = function ProgressComponent(_ref9) {
    var color = _ref9.color,
      currentAmount = _ref9.currentAmount,
      totalAmount = _ref9.totalAmount;

    var _React$useContext2 = React__default.useContext(Context),
      ref = _React$useContext2.ref;

    var config = useGraphWidth(ref, currentAmount, totalAmount);
    return React__default.createElement(
      GraphContainer,
      null,
      React__default.createElement(ProgressBar, {
        color: color,
        width: config.width,
      }),
      React__default.createElement(
        ProgressPercent,
        null,
        Math.floor(config.width),
        '%'
      )
    );
  };

  var TooltipComponent = function TooltipComponent() {
    return React__default.createElement(semanticUiReact.Popup, {
      content: 'blablabablalbabalabl',
      key: 2434324,
      trigger: React__default.createElement(
        InfoIcon,
        null,
        React__default.createElement(InfoIconCmp, {
          name: 'info',
        })
      ),
    });
  };

  var ContentWithLogo = function ContentWithLogo(_ref10) {
    var children = _ref10.children,
      logo = _ref10.logo,
      size = _ref10.size,
      to = _ref10.to,
      className = _ref10.className,
      style = _ref10.style;
    var aProps = {
      href: undefined,
    };

    if (to) {
      aProps.href = to;
    }

    return React__default.createElement(
      CardContent,
      {
        logo: logo,
        size: size,
        className: className,
        style: style,
      },
      logo &&
        React__default.createElement(
          'a',
          Object.assign(
            {
              className: 'logoWrap',
            },
            aProps
          ),
          React__default.createElement(CardLogo, {
            src: logo,
          })
        ),
      children
    );
  };

  var CardImage = function CardImage(_ref11) {
    var src = _ref11.src,
      to = _ref11.to;

    if (to) {
      return React__default.createElement(
        CardHref,
        {
          href: to,
        },
        React__default.createElement(CardImageCrop, {
          src: src,
        })
      );
    }

    return React__default.createElement(CardImageCrop, {
      src: src,
    });
  };

  Card.BorrowerTitle = CardBorrowerTitle;
  Card.Description = CardDescription;
  Card.Image = CardImage;
  Card.Logo = CardLogo;
  Card.Content = ContentWithLogo;
  Card.Badge = BadgeComponent;
  Card.Row = RowComponent;
  Card.Grid = Grid;
  Card.Header = HeaderComponent;
  Card.SubHeader = SubHeaderComponent;
  Card.Graph = GraphComponent;
  Card.Progress = ProgressComponent;
  Card.Separator = Separator;
  Card.Vertical = Vertical;
  Card.Tooltip = TooltipComponent;
  Card.RoiHeader = RoiHeaderComponent;
  Card.TimeLeft = TimeLeft;

  function _templateObject2$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #eeb345;\n  & > ',
      ' {\n    width: 18px;\n    height: 18px;\n  }\n  & > div {\n    font-weight: bold;\n    font-size: 12px;\n  }\n',
    ]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteralLoose(['']);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var CoinImage = /*#__PURE__*/ styled(semanticUiReact.Image)(
    /*#__PURE__*/ _templateObject$1()
  );
  var CoinBox = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject2$1(),
    CoinImage
  );

  var Coin = function Coin(_ref) {
    var src = _ref.src,
      name = _ref.name;
    return React__default.createElement(
      CoinBox,
      null,
      React__default.createElement(CoinImage, {
        src: src,
      }),
      name && React__default.createElement('div', null, name)
    );
  };

  function _extends$1() {
    _extends$1 =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var is = {
    arr: Array.isArray,
    obj: function obj(a) {
      return Object.prototype.toString.call(a) === '[object Object]';
    },
    fun: function fun(a) {
      return typeof a === 'function';
    },
    str: function str(a) {
      return typeof a === 'string';
    },
    num: function num(a) {
      return typeof a === 'number';
    },
    und: function und(a) {
      return a === void 0;
    },
    nul: function nul(a) {
      return a === null;
    },
    set: function set(a) {
      return a instanceof Set;
    },
    map: function map(a) {
      return a instanceof Map;
    },
    equ: function equ(a, b) {
      if (typeof a !== typeof b) return false;
      if (is.str(a) || is.num(a)) return a === b;
      if (
        is.obj(a) &&
        is.obj(b) &&
        Object.keys(a).length + Object.keys(b).length === 0
      )
        return true;
      var i;

      for (i in a) {
        if (!(i in b)) return false;
      }

      for (i in b) {
        if (a[i] !== b[i]) return false;
      }

      return is.und(i) ? a === b : true;
    },
  };

  function merge(target, lowercase) {
    if (lowercase === void 0) {
      lowercase = true;
    }

    return function(object) {
      return (is.arr(object) ? object : Object.keys(object)).reduce(function(
        acc,
        element
      ) {
        var key = lowercase
          ? element[0].toLowerCase() + element.substring(1)
          : element;
        acc[key] = target(key);
        return acc;
      },
      target);
    };
  }

  function useForceUpdate() {
    var _useState = React.useState(false),
      f = _useState[1];

    var forceUpdate = React.useCallback(function() {
      return f(function(v) {
        return !v;
      });
    }, []);
    return forceUpdate;
  }

  function withDefault(value, defaultValue) {
    return is.und(value) || is.nul(value) ? defaultValue : value;
  }

  function toArray(a) {
    return !is.und(a) ? (is.arr(a) ? a : [a]) : [];
  }

  function callProp(obj) {
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key];
    }

    return is.fun(obj) ? obj.apply(void 0, args) : obj;
  }

  function getForwardProps(props) {
    var to = props.to,
      from = props.from,
      config = props.config,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      ref = props.ref,
      lazy = props.lazy,
      forward = _objectWithoutPropertiesLoose$1(props, [
        'to',
        'from',
        'config',
        'onStart',
        'onRest',
        'onFrame',
        'children',
        'reset',
        'reverse',
        'force',
        'immediate',
        'delay',
        'attach',
        'destroyed',
        'interpolateTo',
        'ref',
        'lazy',
      ]);

    return forward;
  }

  function interpolateTo(props) {
    var forward = getForwardProps(props);
    if (is.und(forward))
      return _extends$1(
        {
          to: forward,
        },
        props
      );
    var rest = Object.keys(props).reduce(function(a, k) {
      var _extends2;

      return !is.und(forward[k])
        ? a
        : _extends$1(
            {},
            a,
            ((_extends2 = {}), (_extends2[k] = props[k]), _extends2)
          );
    }, {});
    return _extends$1(
      {
        to: forward,
      },
      rest
    );
  }

  function handleRef(ref, forward) {
    if (forward) {
      // If it's a function, assume it's a ref callback
      if (is.fun(forward)) forward(ref);
      else if (is.obj(forward)) {
        forward.current = ref;
      }
    }

    return ref;
  }

  var Animated = /*#__PURE__*/ (function() {
    function Animated() {
      this.payload = void 0;
      this.children = [];
    }

    var _proto = Animated.prototype;

    _proto.getAnimatedValue = function getAnimatedValue() {
      return this.getValue();
    };

    _proto.getPayload = function getPayload() {
      return this.payload || this;
    };

    _proto.attach = function attach() {};

    _proto.detach = function detach() {};

    _proto.getChildren = function getChildren() {
      return this.children;
    };

    _proto.addChild = function addChild(child) {
      if (this.children.length === 0) this.attach();
      this.children.push(child);
    };

    _proto.removeChild = function removeChild(child) {
      var index = this.children.indexOf(child);
      this.children.splice(index, 1);
      if (this.children.length === 0) this.detach();
    };

    return Animated;
  })();

  var AnimatedArray = /*#__PURE__*/ (function(_Animated) {
    _inheritsLoose(AnimatedArray, _Animated);

    function AnimatedArray() {
      var _this2;

      _this2 = _Animated.apply(this, arguments) || this;
      _this2.payload = [];

      _this2.attach = function() {
        return _this2.payload.forEach(function(p) {
          return (
            p instanceof Animated && p.addChild(_assertThisInitialized(_this2))
          );
        });
      };

      _this2.detach = function() {
        return _this2.payload.forEach(function(p) {
          return (
            p instanceof Animated &&
            p.removeChild(_assertThisInitialized(_this2))
          );
        });
      };

      return _this2;
    }

    return AnimatedArray;
  })(Animated);

  var AnimatedObject = /*#__PURE__*/ (function(_Animated2) {
    _inheritsLoose(AnimatedObject, _Animated2);

    function AnimatedObject() {
      var _this3;

      _this3 = _Animated2.apply(this, arguments) || this;
      _this3.payload = {};

      _this3.attach = function() {
        return Object.values(_this3.payload).forEach(function(s) {
          return (
            s instanceof Animated && s.addChild(_assertThisInitialized(_this3))
          );
        });
      };

      _this3.detach = function() {
        return Object.values(_this3.payload).forEach(function(s) {
          return (
            s instanceof Animated &&
            s.removeChild(_assertThisInitialized(_this3))
          );
        });
      };

      return _this3;
    }

    var _proto2 = AnimatedObject.prototype;

    _proto2.getValue = function getValue(animated) {
      if (animated === void 0) {
        animated = false;
      }

      var payload = {};

      for (var key in this.payload) {
        var value = this.payload[key];
        if (animated && !(value instanceof Animated)) continue;
        payload[key] =
          value instanceof Animated
            ? value[animated ? 'getAnimatedValue' : 'getValue']()
            : value;
      }

      return payload;
    };

    _proto2.getAnimatedValue = function getAnimatedValue() {
      return this.getValue(true);
    };

    return AnimatedObject;
  })(Animated);

  var applyAnimatedValues;

  function injectApplyAnimatedValues(fn, transform) {
    applyAnimatedValues = {
      fn: fn,
      transform: transform,
    };
  }

  var colorNames;

  function injectColorNames(names) {
    colorNames = names;
  }

  var requestFrame = function requestFrame(cb) {
    return typeof window !== 'undefined'
      ? window.requestAnimationFrame(cb)
      : -1;
  };

  var interpolation;

  function injectStringInterpolator(fn) {
    interpolation = fn;
  }

  var now = function now() {
    return Date.now();
  };

  var animatedApi = function animatedApi(node) {
    return node.current;
  };

  var createAnimatedStyle;

  function injectCreateAnimatedStyle(factory) {
    createAnimatedStyle = factory;
  }
  /**
   * Wraps the `style` property with `AnimatedStyle`.
   */

  var AnimatedProps = /*#__PURE__*/ (function(_AnimatedObject) {
    _inheritsLoose(AnimatedProps, _AnimatedObject);

    function AnimatedProps(props, callback) {
      var _this4;

      _this4 = _AnimatedObject.call(this) || this;
      _this4.update = void 0;
      _this4.payload = !props.style
        ? props
        : _extends$1({}, props, {
            style: createAnimatedStyle(props.style),
          });
      _this4.update = callback;

      _this4.attach();

      return _this4;
    }

    return AnimatedProps;
  })(AnimatedObject);

  var isFunctionComponent = function isFunctionComponent(val) {
    return is.fun(val) && !(val.prototype instanceof React__default.Component);
  };

  var createAnimatedComponent = function createAnimatedComponent(Component) {
    var AnimatedComponent = React.forwardRef(function(props, ref) {
      var forceUpdate = useForceUpdate();
      var mounted = React.useRef(true);
      var propsAnimated = React.useRef(null);
      var node = React.useRef(null);
      var attachProps = React.useCallback(function(props) {
        var oldPropsAnimated = propsAnimated.current;

        var callback = function callback() {
          var didUpdate = false;

          if (node.current) {
            didUpdate = applyAnimatedValues.fn(
              node.current,
              propsAnimated.current.getAnimatedValue()
            );
          }

          if (!node.current || didUpdate === false) {
            // If no referenced node has been found, or the update target didn't have a
            // native-responder, then forceUpdate the animation ...
            forceUpdate();
          }
        };

        propsAnimated.current = new AnimatedProps(props, callback);
        oldPropsAnimated && oldPropsAnimated.detach();
      }, []);
      React.useEffect(function() {
        return function() {
          mounted.current = false;
          propsAnimated.current && propsAnimated.current.detach();
        };
      }, []);
      React.useImperativeHandle(ref, function() {
        return animatedApi(node);
      });
      attachProps(props);

      var _getValue = propsAnimated.current.getValue(),
        scrollTop = _getValue.scrollTop,
        scrollLeft = _getValue.scrollLeft,
        animatedProps = _objectWithoutPropertiesLoose$1(_getValue, [
          'scrollTop',
          'scrollLeft',
        ]); // Functions cannot have refs, see:
      // See: https://github.com/react-spring/react-spring/issues/569

      var refFn = isFunctionComponent(Component)
        ? undefined
        : function(childRef) {
            return (node.current = handleRef(childRef, ref));
          };
      return React__default.createElement(
        Component,
        _extends$1({}, animatedProps, {
          ref: refFn,
        })
      );
    });
    return AnimatedComponent;
  };

  var active = false;
  var controllers = /*#__PURE__*/ new Set();

  var update = function update() {
    if (!active) return false;
    var time = now();

    for (
      var _iterator = _createForOfIteratorHelperLoose(controllers), _step;
      !(_step = _iterator()).done;

    ) {
      var controller = _step.value;
      var isActive = false;

      for (
        var configIdx = 0;
        configIdx < controller.configs.length;
        configIdx++
      ) {
        var _config = controller.configs[configIdx];
        var endOfAnimation = void 0,
          lastTime = void 0;

        for (var valIdx = 0; valIdx < _config.animatedValues.length; valIdx++) {
          var animation = _config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

          if (animation.done) continue;
          var from = _config.fromValues[valIdx];
          var to = _config.toValues[valIdx];
          var position = animation.lastPosition;
          var isAnimated = to instanceof Animated;
          var velocity = Array.isArray(_config.initialVelocity)
            ? _config.initialVelocity[valIdx]
            : _config.initialVelocity;
          if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

          if (_config.immediate) {
            animation.setValue(to);
            animation.done = true;
            continue;
          } // Break animation when string values are involved

          if (typeof from === 'string' || typeof to === 'string') {
            animation.setValue(to);
            animation.done = true;
            continue;
          }

          if (_config.duration !== void 0) {
            /** Duration easing */
            position =
              from +
              _config.easing((time - animation.startTime) / _config.duration) *
                (to - from);
            endOfAnimation = time >= animation.startTime + _config.duration;
          } else if (_config.decay) {
            /** Decay easing */
            position =
              from +
              (velocity / (1 - 0.998)) *
                (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
            endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
            if (endOfAnimation) to = position;
          } else {
            /** Spring easing */
            lastTime =
              animation.lastTime !== void 0 ? animation.lastTime : time;
            velocity =
              animation.lastVelocity !== void 0
                ? animation.lastVelocity
                : _config.initialVelocity; // If we lost a lot of frames just jump to the end.

            if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

            var numSteps = Math.floor(time - lastTime);

            for (var i = 0; i < numSteps; ++i) {
              var force = -_config.tension * (position - to);
              var damping = -_config.friction * velocity;
              var acceleration = (force + damping) / _config.mass;
              velocity = velocity + (acceleration * 1) / 1000;
              position = position + (velocity * 1) / 1000;
            } // Conditions for stopping the spring animation

            var isOvershooting =
              _config.clamp && _config.tension !== 0
                ? from < to
                  ? position > to
                  : position < to
                : false;

            var isVelocity = Math.abs(velocity) <= _config.precision;

            var isDisplacement =
              _config.tension !== 0
                ? Math.abs(to - position) <= _config.precision
                : true;
            endOfAnimation = isOvershooting || (isVelocity && isDisplacement);
            animation.lastVelocity = velocity;
            animation.lastTime = time;
          } // Trails aren't done until their parents conclude

          if (isAnimated && !_config.toValues[valIdx].done)
            endOfAnimation = false;

          if (endOfAnimation) {
            // Ensure that we end up with a round value
            if (animation.value !== to) position = to;
            animation.done = true;
          } else isActive = true;

          animation.setValue(position);
          animation.lastPosition = position;
        } // Keep track of updated values only when necessary

        if (controller.props.onFrame)
          controller.values[_config.name] = _config.interpolation.getValue();
      } // Update callbacks in the end of the frame

      if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

      if (!isActive) {
        controllers['delete'](controller);
        controller.stop(true);
      }
    } // Loop over as long as there are controllers ...

    if (controllers.size) {
      requestFrame(update);
    } else {
      active = false;
    }

    return active;
  };

  var _start = function start(controller) {
    if (!controllers.has(controller)) controllers.add(controller);

    if (!active) {
      active = true;
      requestFrame(update);
    }
  };

  var stop = function stop(controller) {
    if (controllers.has(controller)) controllers['delete'](controller);
  };

  function createInterpolator(range, output, extrapolate) {
    if (typeof range === 'function') {
      return range;
    }

    if (Array.isArray(range)) {
      return createInterpolator({
        range: range,
        output: output,
        extrapolate: extrapolate,
      });
    }

    if (interpolation && typeof range.output[0] === 'string') {
      return interpolation(range);
    }

    var config = range;
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];
    var extrapolateLeft =
      config.extrapolateLeft || config.extrapolate || 'extend';
    var extrapolateRight =
      config.extrapolateRight || config.extrapolate || 'extend';

    var easing =
      config.easing ||
      function(t) {
        return t;
      };

    return function(input) {
      var range = findRange(input, inputRange);
      return interpolate(
        input,
        inputRange[range],
        inputRange[range + 1],
        outputRange[range],
        outputRange[range + 1],
        easing,
        extrapolateLeft,
        extrapolateRight,
        config.map
      );
    };
  }

  function interpolate(
    input,
    inputMin,
    inputMax,
    outputMin,
    outputMax,
    easing,
    extrapolateLeft,
    extrapolateRight,
    map
  ) {
    var result = map ? map(input) : input; // Extrapolate

    if (result < inputMin) {
      if (extrapolateLeft === 'identity') return result;
      else if (extrapolateLeft === 'clamp') result = inputMin;
    }

    if (result > inputMax) {
      if (extrapolateRight === 'identity') return result;
      else if (extrapolateRight === 'clamp') result = inputMax;
    }

    if (outputMin === outputMax) return outputMin;
    if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

    if (inputMin === -Infinity) result = -result;
    else if (inputMax === Infinity) result = result - inputMin;
    else result = (result - inputMin) / (inputMax - inputMin); // Easing

    result = easing(result); // Output Range

    if (outputMin === -Infinity) result = -result;
    else if (outputMax === Infinity) result = result + outputMin;
    else result = result * (outputMax - outputMin) + outputMin;
    return result;
  }

  function findRange(input, inputRange) {
    for (var i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) break;
    }

    return i - 1;
  }

  var AnimatedInterpolation = /*#__PURE__*/ (function(_AnimatedArray) {
    _inheritsLoose(AnimatedInterpolation, _AnimatedArray);

    function AnimatedInterpolation(parents, range, output, extrapolate) {
      var _this5;

      _this5 = _AnimatedArray.call(this) || this;
      _this5.calc = void 0;
      _this5.payload =
        parents instanceof AnimatedArray &&
        !(parents instanceof AnimatedInterpolation)
          ? parents.getPayload()
          : Array.isArray(parents)
          ? parents
          : [parents];
      _this5.calc = createInterpolator(range, output, extrapolate);
      return _this5;
    }

    var _proto3 = AnimatedInterpolation.prototype;

    _proto3.getValue = function getValue() {
      return this.calc.apply(
        this,
        this.payload.map(function(value) {
          return value.getValue();
        })
      );
    };

    _proto3.updateConfig = function updateConfig(range, output, extrapolate) {
      this.calc = createInterpolator(range, output, extrapolate);
    };

    _proto3.interpolate = function interpolate(range, output, extrapolate) {
      return new AnimatedInterpolation(this, range, output, extrapolate);
    };

    return AnimatedInterpolation;
  })(AnimatedArray);
  /**
   * Animated works by building a directed acyclic graph of dependencies
   * transparently when you render your Animated components.
   *
   *               new Animated.Value(0)
   *     .interpolate()        .interpolate()    new Animated.Value(1)
   *         opacity               translateY      scale
   *          style                         transform
   *         View#234                         style
   *                                         View#123
   *
   * A) Top Down phase
   * When an AnimatedValue is updated, we recursively go down through this
   * graph in order to find leaf nodes: the views that we flag as needing
   * an update.
   *
   * B) Bottom Up phase
   * When a view is flagged as needing an update, we recursively go back up
   * in order to build the new value that it needs. The reason why we need
   * this two-phases process is to deal with composite props such as
   * transform which can receive values from multiple parents.
   */

  function addAnimatedStyles(node, styles) {
    if ('update' in node) {
      styles.add(node);
    } else {
      node.getChildren().forEach(function(child) {
        return addAnimatedStyles(child, styles);
      });
    }
  }

  var AnimatedValue = /*#__PURE__*/ (function(_Animated3) {
    _inheritsLoose(AnimatedValue, _Animated3);

    function AnimatedValue(_value) {
      var _this6;

      var _this;

      _this6 = _Animated3.call(this) || this;
      _this = _assertThisInitialized(_this6);
      _this6.animatedStyles = new Set();
      _this6.value = void 0;
      _this6.startPosition = void 0;
      _this6.lastPosition = void 0;
      _this6.lastVelocity = void 0;
      _this6.startTime = void 0;
      _this6.lastTime = void 0;
      _this6.done = false;

      _this6.setValue = function(value, flush) {
        if (flush === void 0) {
          flush = true;
        }

        _this.value = value;
        if (flush) _this.flush();
      };

      _this6.value = _value;
      _this6.startPosition = _value;
      _this6.lastPosition = _value;
      return _this6;
    }

    var _proto4 = AnimatedValue.prototype;

    _proto4.flush = function flush() {
      if (this.animatedStyles.size === 0) {
        addAnimatedStyles(this, this.animatedStyles);
      }

      this.animatedStyles.forEach(function(animatedStyle) {
        return animatedStyle.update();
      });
    };

    _proto4.clearStyles = function clearStyles() {
      this.animatedStyles.clear();
    };

    _proto4.getValue = function getValue() {
      return this.value;
    };

    _proto4.interpolate = function interpolate(range, output, extrapolate) {
      return new AnimatedInterpolation(this, range, output, extrapolate);
    };

    return AnimatedValue;
  })(Animated);

  var AnimatedValueArray = /*#__PURE__*/ (function(_AnimatedArray2) {
    _inheritsLoose(AnimatedValueArray, _AnimatedArray2);

    function AnimatedValueArray(values) {
      var _this7;

      _this7 = _AnimatedArray2.call(this) || this;
      _this7.payload = values.map(function(n) {
        return new AnimatedValue(n);
      });
      return _this7;
    }

    var _proto5 = AnimatedValueArray.prototype;

    _proto5.setValue = function setValue(value, flush) {
      var _this8 = this;

      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === this.payload.length) {
          value.forEach(function(v, i) {
            return _this8.payload[i].setValue(v, flush);
          });
        }
      } else {
        this.payload.forEach(function(p) {
          return p.setValue(value, flush);
        });
      }
    };

    _proto5.getValue = function getValue() {
      return this.payload.map(function(v) {
        return v.getValue();
      });
    };

    _proto5.interpolate = function interpolate(range, output) {
      return new AnimatedInterpolation(this, range, output);
    };

    return AnimatedValueArray;
  })(AnimatedArray);

  var G = 0;

  var Controller = /*#__PURE__*/ (function() {
    function Controller() {
      var _this9 = this;

      this.id = void 0;
      this.idle = true;
      this.hasChanged = false;
      this.guid = 0;
      this.local = 0;
      this.props = {};
      this.merged = {};
      this.animations = {};
      this.interpolations = {};
      this.values = {};
      this.configs = [];
      this.listeners = [];
      this.queue = [];
      this.localQueue = void 0;

      this.getValues = function() {
        return _this9.interpolations;
      };

      this.id = G++;
    }
    /** update(props)
     *  This function filters input props and creates an array of tasks which are executed in .start()
     *  Each task is allowed to carry a delay, which means it can execute asnychroneously */

    var _proto6 = Controller.prototype;

    _proto6.update = function update(args) {
      //this._id = n + this.id
      if (!args) return this; // Extract delay and the to-prop from props

      var _ref = interpolateTo(args),
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        to = _ref.to,
        props = _objectWithoutPropertiesLoose$1(_ref, ['delay', 'to']);

      if (is.arr(to) || is.fun(to)) {
        // If config is either a function or an array queue it up as is
        this.queue.push(
          _extends$1({}, props, {
            delay: delay,
            to: to,
          })
        );
      } else if (to) {
        // Otherwise go through each key since it could be delayed individually
        var ops = {};
        Object.entries(to).forEach(function(_ref2) {
          var _to;

          var k = _ref2[0],
            v = _ref2[1]; // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props

          var entry = _extends$1(
            {
              to: ((_to = {}), (_to[k] = v), _to),
              delay: callProp(delay, k),
            },
            props
          );

          var previous = ops[entry.delay] && ops[entry.delay].to;
          ops[entry.delay] = _extends$1({}, ops[entry.delay], entry, {
            to: _extends$1({}, previous, entry.to),
          });
        });
        this.queue = Object.values(ops);
      } // Sort queue, so that async calls go last

      this.queue = this.queue.sort(function(a, b) {
        return a.delay - b.delay;
      }); // Diff the reduced props immediately (they'll contain the from-prop and some config)

      this.diff(props);
      return this;
    };
    /** start(onEnd)
     *  This function either executes a queue, if present, or starts the frameloop, which animates */

    _proto6.start = function start(onEnd) {
      var _this10 = this;

      // If a queue is present we must excecute it
      if (this.queue.length) {
        this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

        if (this.localQueue) {
          this.localQueue.forEach(function(_ref3) {
            var _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
            if (is.obj(from))
              _this10.merged = _extends$1({}, from, _this10.merged);
            if (is.obj(to)) _this10.merged = _extends$1({}, _this10.merged, to);
          });
        } // The guid helps us tracking frames, a new queue over an old one means an override
        // We discard async calls in that caseÍ

        var local = (this.local = ++this.guid);
        var queue = (this.localQueue = this.queue);
        this.queue = []; // Go through each entry and execute it

        queue.forEach(function(_ref4, index) {
          var delay = _ref4.delay,
            props = _objectWithoutPropertiesLoose$1(_ref4, ['delay']);

          var cb = function cb(finished) {
            if (
              index === queue.length - 1 &&
              local === _this10.guid &&
              finished
            ) {
              _this10.idle = true;
              if (_this10.props.onRest) _this10.props.onRest(_this10.merged);
            }

            if (onEnd) onEnd();
          }; // Entries can be delayed, ansyc or immediate

          var async = is.arr(props.to) || is.fun(props.to);

          if (delay) {
            setTimeout(function() {
              if (local === _this10.guid) {
                if (async) _this10.runAsync(props, cb);
                else _this10.diff(props).start(cb);
              }
            }, delay);
          } else if (async) _this10.runAsync(props, cb);
          else _this10.diff(props).start(cb);
        });
      } // Otherwise we kick of the frameloop
      else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();

        _start(this);
      }

      return this;
    };

    _proto6.stop = function stop(finished) {
      this.listeners.forEach(function(onEnd) {
        return onEnd(finished);
      });
      this.listeners = [];
      return this;
    };
    /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */

    _proto6.pause = function pause(finished) {
      this.stop(true);
      if (finished) stop(this);
      return this;
    };

    _proto6.runAsync = function runAsync(_ref5, onEnd) {
      var _this11 = this;

      var _this = this;

      var delay = _ref5.delay,
        props = _objectWithoutPropertiesLoose$1(_ref5, ['delay']);

      var local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
      // If the view relies on certain values "from" has to be present

      var queue = Promise.resolve(undefined);

      if (is.arr(props.to)) {
        var _loop = function _loop(i) {
          var index = i;

          var fresh = _extends$1({}, props, interpolateTo(props.to[index]));

          if (is.arr(fresh.config)) fresh.config = fresh.config[index];
          queue = queue.then(function() {
            //this.stop()
            if (local === _this11.guid)
              return new Promise(function(r) {
                return _this11.diff(fresh).start(r);
              });
          });
        };

        for (var i = 0; i < props.to.length; i++) {
          _loop(i);
        }
      } else if (is.fun(props.to)) {
        var index = 0;
        var last;
        queue = queue.then(function() {
          return props
            .to(
              // next(props)
              function(p) {
                var fresh = _extends$1({}, props, interpolateTo(p));

                if (is.arr(fresh.config)) fresh.config = fresh.config[index];
                index++; //this.stop()

                if (local === _this11.guid)
                  return (last = new Promise(function(r) {
                    return _this11.diff(fresh).start(r);
                  }));
                return;
              }, // cancel()
              function(finished) {
                if (finished === void 0) {
                  finished = true;
                }

                return _this.stop(finished);
              }
            )
            .then(function() {
              return last;
            });
        });
      }

      queue.then(onEnd);
    };

    _proto6.diff = function diff(props) {
      var _this12 = this;

      this.props = _extends$1({}, this.props, props);
      var _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

      if (reverse) {
        var _ref6 = [to, from];
        from = _ref6[0];
        to = _ref6[1];
      } // This will collect all props that were ever set, reset merged props when necessary

      this.merged = _extends$1({}, from, this.merged, to);
      this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

      var target = attach && attach(this); // Reduces input { name: value } pairs into animated values

      this.animations = Object.entries(this.merged).reduce(function(
        acc,
        _ref7
      ) {
        var name = _ref7[0],
          value = _ref7[1]; // Issue cached entries, except on reset

        var entry = acc[name] || {}; // Figure out what the value is supposed to be

        var isNumber = is.num(value);
        var isString =
          is.str(value) &&
          !value.startsWith('#') &&
          !/\d/.test(value) &&
          !colorNames[value];
        var isArray = is.arr(value);
        var isInterpolation = !isNumber && !isArray && !isString;
        var fromValue = !is.und(from[name]) ? from[name] : value;
        var toValue = isNumber || isArray ? value : isString ? value : 1;
        var toConfig = callProp(config, name);
        if (target) toValue = target.animations[name].parent;
        var parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
        var newValue = value;
        if (isInterpolation)
          newValue = interpolation({
            range: [0, 1],
            output: [value, value],
          })(1);
        var currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

        var isFirst = is.und(parent);
        var isActive =
          !isFirst &&
          entry.animatedValues.some(function(v) {
            return !v.done;
          });
        var currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
        var hasNewGoal = !is.equ(newValue, entry.previous);
        var hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
        // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

        if (
          reset ||
          (hasNewGoal && currentValueDiffersFromGoal) ||
          hasNewConfig
        ) {
          var _extends3;

          // Convert regular values into animated values, ALWAYS re-use if possible
          if (isNumber || isString)
            parent = interpolation$$1 =
              entry.parent || new AnimatedValue(fromValue);
          else if (isArray)
            parent = interpolation$$1 =
              entry.parent || new AnimatedValueArray(fromValue);
          else if (isInterpolation) {
            var prev =
              entry.interpolation &&
              entry.interpolation.calc(entry.parent.value);
            prev = prev !== void 0 && !reset ? prev : fromValue;

            if (entry.parent) {
              parent = entry.parent;
              parent.setValue(0, false);
            } else parent = new AnimatedValue(0);

            var range = {
              output: [prev, value],
            };

            if (entry.interpolation) {
              interpolation$$1 = entry.interpolation;
              entry.interpolation.updateConfig(range);
            } else interpolation$$1 = parent.interpolate(range);
          }
          toValues = toArray(target ? toValue.getPayload() : toValue);
          animatedValues = toArray(parent.getPayload());
          if (reset && !isInterpolation) parent.setValue(fromValue, false);
          _this12.hasChanged = true; // Reset animated values

          animatedValues.forEach(function(value) {
            value.startPosition = value.value;
            value.lastPosition = value.value;
            value.lastVelocity = isActive ? value.lastVelocity : undefined;
            value.lastTime = isActive ? value.lastTime : undefined;
            value.startTime = now();
            value.done = false;
            value.animatedStyles.clear();
          }); // Set immediate values

          if (callProp(immediate, name)) {
            parent.setValue(isInterpolation ? toValue : value, false);
          }

          return _extends$1(
            {},
            acc,
            ((_extends3 = {}),
            (_extends3[name] = _extends$1({}, entry, {
              name: name,
              parent: parent,
              interpolation: interpolation$$1,
              animatedValues: animatedValues,
              toValues: toValues,
              previous: newValue,
              config: toConfig,
              fromValues: toArray(parent.getValue()),
              immediate: callProp(immediate, name),
              initialVelocity: withDefault(toConfig.velocity, 0),
              clamp: withDefault(toConfig.clamp, false),
              precision: withDefault(toConfig.precision, 0.01),
              tension: withDefault(toConfig.tension, 170),
              friction: withDefault(toConfig.friction, 26),
              mass: withDefault(toConfig.mass, 1),
              duration: toConfig.duration,
              easing: withDefault(toConfig.easing, function(t) {
                return t;
              }),
              decay: toConfig.decay,
            })),
            _extends3)
          );
        } else {
          if (!currentValueDiffersFromGoal) {
            var _extends4;

            // So ... the current target value (newValue) appears to be different from the previous value,
            // which normally constitutes an update, but the actual value (currentValue) matches the target!
            // In order to resolve this without causing an animation update we silently flag the animation as done,
            // which it technically is. Interpolations also needs a config update with their target set to 1.
            if (isInterpolation) {
              parent.setValue(1, false);
              interpolation$$1.updateConfig({
                output: [newValue, newValue],
              });
            }

            parent.done = true;
            _this12.hasChanged = true;
            return _extends$1(
              {},
              acc,
              ((_extends4 = {}),
              (_extends4[name] = _extends$1({}, acc[name], {
                previous: newValue,
              })),
              _extends4)
            );
          }

          return acc;
        }
      },
      this.animations);

      if (this.hasChanged) {
        // Make animations available to frameloop
        this.configs = Object.values(this.animations);
        this.values = {};
        this.interpolations = {};

        for (var key in this.animations) {
          this.interpolations[key] = this.animations[key].interpolation;
          this.values[key] = this.animations[key].interpolation.getValue();
        }
      }

      return this;
    };

    _proto6.destroy = function destroy() {
      this.stop();
      this.props = {};
      this.merged = {};
      this.animations = {};
      this.interpolations = {};
      this.values = {};
      this.configs = [];
      this.local = 0;
    };

    return Controller;
  })();
  /** API
   * const transitions = useTransition(items, itemKeys, { ... })
   * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
   */

  var guid = 0;
  var ENTER = 'enter';
  var LEAVE = 'leave';
  var UPDATE = 'update';

  var mapKeys = function mapKeys(items, keys) {
    return (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(
      String
    );
  };

  var get = function get(props) {
    var items = props.items,
      _props$keys = props.keys,
      keys =
        _props$keys === void 0
          ? function(item) {
              return item;
            }
          : _props$keys,
      rest = _objectWithoutPropertiesLoose$1(props, ['items', 'keys']);

    items = toArray(items !== void 0 ? items : null);
    return _extends$1(
      {
        items: items,
        keys: mapKeys(items, keys),
      },
      rest
    );
  };

  function useTransition(input, keyTransform, config) {
    var props = _extends$1(
      {
        items: input,
        keys:
          keyTransform ||
          function(i) {
            return i;
          },
      },
      config
    );

    var _get = get(props),
      _get$lazy = _get.lazy,
      lazy = _get$lazy === void 0 ? false : _get$lazy,
      _get$unique = _get.unique,
      _get$reset = _get.reset,
      reset = _get$reset === void 0 ? false : _get$reset,
      enter = _get.enter,
      leave = _get.leave,
      update = _get.update,
      onDestroyed = _get.onDestroyed,
      keys = _get.keys,
      items = _get.items,
      onFrame = _get.onFrame,
      _onRest = _get.onRest,
      onStart = _get.onStart,
      ref = _get.ref,
      extra = _objectWithoutPropertiesLoose$1(_get, [
        'lazy',
        'unique',
        'reset',
        'enter',
        'leave',
        'update',
        'onDestroyed',
        'keys',
        'items',
        'onFrame',
        'onRest',
        'onStart',
        'ref',
      ]);

    var forceUpdate = useForceUpdate();
    var mounted = React.useRef(false);
    var state = React.useRef({
      mounted: false,
      first: true,
      deleted: [],
      current: {},
      transitions: [],
      prevProps: {},
      paused: !!props.ref,
      instances: !mounted.current && new Map(),
      forceUpdate: forceUpdate,
    });
    React.useImperativeHandle(props.ref, function() {
      return {
        start: function start() {
          return Promise.all(
            Array.from(state.current.instances).map(function(_ref) {
              var c = _ref[1];
              return new Promise(function(r) {
                return c.start(r);
              });
            })
          );
        },
        stop: function stop(finished) {
          return Array.from(state.current.instances).forEach(function(_ref2) {
            var c = _ref2[1];
            return c.stop(finished);
          });
        },

        get controllers() {
          return Array.from(state.current.instances).map(function(_ref3) {
            var c = _ref3[1];
            return c;
          });
        },
      };
    }); // Update state

    state.current = diffItems(state.current, props);

    if (state.current.changed) {
      // Update state
      state.current.transitions.forEach(function(transition) {
        var slot = transition.slot,
          from = transition.from,
          to = transition.to,
          config = transition.config,
          trail = transition.trail,
          key = transition.key,
          item = transition.item;
        if (!state.current.instances.has(key))
          state.current.instances.set(key, new Controller()); // update the map object

        var ctrl = state.current.instances.get(key);

        var newProps = _extends$1({}, extra, {
          to: to,
          from: from,
          config: config,
          ref: ref,
          onRest: function onRest(values) {
            if (state.current.mounted) {
              if (transition.destroyed) {
                // If no ref is given delete destroyed items immediately
                if (!ref && !lazy) cleanUp(state, key);
                if (onDestroyed) onDestroyed(item);
              } // A transition comes to rest once all its springs conclude

              var curInstances = Array.from(state.current.instances);

              var _active = curInstances.some(function(_ref4) {
                var c = _ref4[1];
                return !c.idle;
              });

              if (!_active && (ref || lazy) && state.current.deleted.length > 0)
                cleanUp(state);
              if (_onRest) _onRest(item, slot, values);
            }
          },
          onStart:
            onStart &&
            function() {
              return onStart(item, slot);
            },
          onFrame:
            onFrame &&
            function(values) {
              return onFrame(item, slot, values);
            },
          delay: trail,
          reset: reset && slot === ENTER, // Update controller
        });

        ctrl.update(newProps);
        if (!state.current.paused) ctrl.start();
      });
    }

    React.useEffect(function() {
      state.current.mounted = mounted.current = true;
      return function() {
        state.current.mounted = mounted.current = false;
        Array.from(state.current.instances).map(function(_ref5) {
          var c = _ref5[1];
          return c.destroy();
        });
        state.current.instances.clear();
      };
    }, []);
    return state.current.transitions.map(function(_ref6) {
      var item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
      return {
        item: item,
        key: key,
        state: slot,
        props: state.current.instances.get(key).getValues(),
      };
    });
  }

  function cleanUp(state, filterKey) {
    var deleted = state.current.deleted;

    var _loop2 = function _loop2() {
      var _ref7 = _step2.value;
      var key = _ref7.key;

      var filter = function filter(t) {
        return t.key !== key;
      };

      if (is.und(filterKey) || filterKey === key) {
        state.current.instances['delete'](key);
        state.current.transitions = state.current.transitions.filter(filter);
        state.current.deleted = state.current.deleted.filter(filter);
      }
    };

    for (
      var _iterator2 = _createForOfIteratorHelperLoose(deleted), _step2;
      !(_step2 = _iterator2()).done;

    ) {
      _loop2();
    }

    state.current.forceUpdate();
  }

  function diffItems(_ref8, props) {
    var first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = _objectWithoutPropertiesLoose$1(_ref8, ['first', 'prevProps']);

    var _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

    var _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

    var current = _extends$1({}, state.current);

    var deleted = [].concat(state.deleted); // Compare next keys with current keys

    var currentKeys = Object.keys(current);
    var currentSet = new Set(currentKeys);
    var nextSet = new Set(keys);
    var added = keys.filter(function(item) {
      return !currentSet.has(item);
    });
    var removed = state.transitions
      .filter(function(item) {
        return !item.destroyed && !nextSet.has(item.originalKey);
      })
      .map(function(i) {
        return i.originalKey;
      });
    var updated = keys.filter(function(item) {
      return currentSet.has(item);
    });
    var delay = -trail;

    while (order.length) {
      var changeType = order.shift();

      switch (changeType) {
        case ENTER: {
          added.forEach(function(key, index) {
            // In unique mode, remove fading out transitions if their key comes in again
            if (
              unique &&
              deleted.find(function(d) {
                return d.originalKey === key;
              })
            )
              deleted = deleted.filter(function(t) {
                return t.originalKey !== key;
              });
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot: slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item: item,
              trail: (delay = delay + trail),
              config: callProp(config, item, slot),
              from: callProp(
                first ? (initial !== void 0 ? initial || {} : from) : from,
                item
              ),
              to: callProp(enter, item),
            };
          });
          break;
        }

        case LEAVE: {
          removed.forEach(function(key) {
            var keyIndex = _keys.indexOf(key);

            var item = _items[keyIndex];
            var slot = LEAVE;
            deleted.unshift(
              _extends$1({}, current[key], {
                slot: slot,
                destroyed: true,
                left: _keys[Math.max(0, keyIndex - 1)],
                right: _keys[Math.min(_keys.length, keyIndex + 1)],
                trail: (delay = delay + trail),
                config: callProp(config, item, slot),
                to: callProp(leave, item),
              })
            );
            delete current[key];
          });
          break;
        }

        case UPDATE: {
          updated.forEach(function(key) {
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = UPDATE;
            current[key] = _extends$1({}, current[key], {
              item: item,
              slot: slot,
              trail: (delay = delay + trail),
              config: callProp(config, item, slot),
              to: callProp(update, item),
            });
          });
          break;
        }
      }
    }

    var out = keys.map(function(key) {
      return current[key];
    }); // This tries to restore order for deleted items by finding their last known siblings
    // only using the left sibling to keep order placement consistent for all deleted items

    deleted.forEach(function(_ref9) {
      var left = _ref9.left,
        right = _ref9.right,
        item = _objectWithoutPropertiesLoose$1(_ref9, ['left', 'right']);

      var pos; // Was it the element on the left, if yes, move there ...

      if (
        (pos = out.findIndex(function(t) {
          return t.originalKey === left;
        })) !== -1
      )
        pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [].concat(out.slice(0, pos), [item], out.slice(pos));
    });
    return _extends$1({}, state, {
      changed: added.length || removed.length || updated.length,
      first: first && added.length === 0,
      transitions: out,
      current: current,
      deleted: deleted,
      prevProps: props,
    });
  }

  var AnimatedStyle = /*#__PURE__*/ (function(_AnimatedObject2) {
    _inheritsLoose(AnimatedStyle, _AnimatedObject2);

    function AnimatedStyle(style) {
      var _this13;

      if (style === void 0) {
        style = {};
      }

      _this13 = _AnimatedObject2.call(this) || this;

      if (style.transform && !(style.transform instanceof Animated)) {
        style = applyAnimatedValues.transform(style);
      }

      _this13.payload = style;
      return _this13;
    }

    return AnimatedStyle;
  })(AnimatedObject); // http://www.w3.org/TR/css3-color/#svg-color

  var colors = {
    transparent: 0x00000000,
    aliceblue: 0xf0f8ffff,
    antiquewhite: 0xfaebd7ff,
    aqua: 0x00ffffff,
    aquamarine: 0x7fffd4ff,
    azure: 0xf0ffffff,
    beige: 0xf5f5dcff,
    bisque: 0xffe4c4ff,
    black: 0x000000ff,
    blanchedalmond: 0xffebcdff,
    blue: 0x0000ffff,
    blueviolet: 0x8a2be2ff,
    brown: 0xa52a2aff,
    burlywood: 0xdeb887ff,
    burntsienna: 0xea7e5dff,
    cadetblue: 0x5f9ea0ff,
    chartreuse: 0x7fff00ff,
    chocolate: 0xd2691eff,
    coral: 0xff7f50ff,
    cornflowerblue: 0x6495edff,
    cornsilk: 0xfff8dcff,
    crimson: 0xdc143cff,
    cyan: 0x00ffffff,
    darkblue: 0x00008bff,
    darkcyan: 0x008b8bff,
    darkgoldenrod: 0xb8860bff,
    darkgray: 0xa9a9a9ff,
    darkgreen: 0x006400ff,
    darkgrey: 0xa9a9a9ff,
    darkkhaki: 0xbdb76bff,
    darkmagenta: 0x8b008bff,
    darkolivegreen: 0x556b2fff,
    darkorange: 0xff8c00ff,
    darkorchid: 0x9932ccff,
    darkred: 0x8b0000ff,
    darksalmon: 0xe9967aff,
    darkseagreen: 0x8fbc8fff,
    darkslateblue: 0x483d8bff,
    darkslategray: 0x2f4f4fff,
    darkslategrey: 0x2f4f4fff,
    darkturquoise: 0x00ced1ff,
    darkviolet: 0x9400d3ff,
    deeppink: 0xff1493ff,
    deepskyblue: 0x00bfffff,
    dimgray: 0x696969ff,
    dimgrey: 0x696969ff,
    dodgerblue: 0x1e90ffff,
    firebrick: 0xb22222ff,
    floralwhite: 0xfffaf0ff,
    forestgreen: 0x228b22ff,
    fuchsia: 0xff00ffff,
    gainsboro: 0xdcdcdcff,
    ghostwhite: 0xf8f8ffff,
    gold: 0xffd700ff,
    goldenrod: 0xdaa520ff,
    gray: 0x808080ff,
    green: 0x008000ff,
    greenyellow: 0xadff2fff,
    grey: 0x808080ff,
    honeydew: 0xf0fff0ff,
    hotpink: 0xff69b4ff,
    indianred: 0xcd5c5cff,
    indigo: 0x4b0082ff,
    ivory: 0xfffff0ff,
    khaki: 0xf0e68cff,
    lavender: 0xe6e6faff,
    lavenderblush: 0xfff0f5ff,
    lawngreen: 0x7cfc00ff,
    lemonchiffon: 0xfffacdff,
    lightblue: 0xadd8e6ff,
    lightcoral: 0xf08080ff,
    lightcyan: 0xe0ffffff,
    lightgoldenrodyellow: 0xfafad2ff,
    lightgray: 0xd3d3d3ff,
    lightgreen: 0x90ee90ff,
    lightgrey: 0xd3d3d3ff,
    lightpink: 0xffb6c1ff,
    lightsalmon: 0xffa07aff,
    lightseagreen: 0x20b2aaff,
    lightskyblue: 0x87cefaff,
    lightslategray: 0x778899ff,
    lightslategrey: 0x778899ff,
    lightsteelblue: 0xb0c4deff,
    lightyellow: 0xffffe0ff,
    lime: 0x00ff00ff,
    limegreen: 0x32cd32ff,
    linen: 0xfaf0e6ff,
    magenta: 0xff00ffff,
    maroon: 0x800000ff,
    mediumaquamarine: 0x66cdaaff,
    mediumblue: 0x0000cdff,
    mediumorchid: 0xba55d3ff,
    mediumpurple: 0x9370dbff,
    mediumseagreen: 0x3cb371ff,
    mediumslateblue: 0x7b68eeff,
    mediumspringgreen: 0x00fa9aff,
    mediumturquoise: 0x48d1ccff,
    mediumvioletred: 0xc71585ff,
    midnightblue: 0x191970ff,
    mintcream: 0xf5fffaff,
    mistyrose: 0xffe4e1ff,
    moccasin: 0xffe4b5ff,
    navajowhite: 0xffdeadff,
    navy: 0x000080ff,
    oldlace: 0xfdf5e6ff,
    olive: 0x808000ff,
    olivedrab: 0x6b8e23ff,
    orange: 0xffa500ff,
    orangered: 0xff4500ff,
    orchid: 0xda70d6ff,
    palegoldenrod: 0xeee8aaff,
    palegreen: 0x98fb98ff,
    paleturquoise: 0xafeeeeff,
    palevioletred: 0xdb7093ff,
    papayawhip: 0xffefd5ff,
    peachpuff: 0xffdab9ff,
    peru: 0xcd853fff,
    pink: 0xffc0cbff,
    plum: 0xdda0ddff,
    powderblue: 0xb0e0e6ff,
    purple: 0x800080ff,
    rebeccapurple: 0x663399ff,
    red: 0xff0000ff,
    rosybrown: 0xbc8f8fff,
    royalblue: 0x4169e1ff,
    saddlebrown: 0x8b4513ff,
    salmon: 0xfa8072ff,
    sandybrown: 0xf4a460ff,
    seagreen: 0x2e8b57ff,
    seashell: 0xfff5eeff,
    sienna: 0xa0522dff,
    silver: 0xc0c0c0ff,
    skyblue: 0x87ceebff,
    slateblue: 0x6a5acdff,
    slategray: 0x708090ff,
    slategrey: 0x708090ff,
    snow: 0xfffafaff,
    springgreen: 0x00ff7fff,
    steelblue: 0x4682b4ff,
    tan: 0xd2b48cff,
    teal: 0x008080ff,
    thistle: 0xd8bfd8ff,
    tomato: 0xff6347ff,
    turquoise: 0x40e0d0ff,
    violet: 0xee82eeff,
    wheat: 0xf5deb3ff,
    white: 0xffffffff,
    whitesmoke: 0xf5f5f5ff,
    yellow: 0xffff00ff,
    yellowgreen: 0x9acd32ff,
  }; // const INTEGER = '[-+]?\\d+';

  var NUMBER = '[-+]?\\d*\\.?\\d+';
  var PERCENTAGE = NUMBER + '%';

  function call() {
    for (
      var _len = arguments.length, parts = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      parts[_key] = arguments[_key];
    }

    return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
  }

  var rgb = /*#__PURE__*/ new RegExp(
    'rgb' + /*#__PURE__*/ call(NUMBER, NUMBER, NUMBER)
  );
  var rgba = /*#__PURE__*/ new RegExp(
    'rgba' + /*#__PURE__*/ call(NUMBER, NUMBER, NUMBER, NUMBER)
  );
  var hsl = /*#__PURE__*/ new RegExp(
    'hsl' + /*#__PURE__*/ call(NUMBER, PERCENTAGE, PERCENTAGE)
  );
  var hsla = /*#__PURE__*/ new RegExp(
    'hsla' + /*#__PURE__*/ call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)
  );
  var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
  var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
  var hex6 = /^#([0-9a-fA-F]{6})$/;
  var hex8 = /^#([0-9a-fA-F]{8})$/;
  /*
  https://github.com/react-community/normalize-css-color

  BSD 3-Clause License

  Copyright (c) 2016, React Community
  All rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

  * Neither the name of the copyright holder nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
  FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
  SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
  CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
  OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */

  function normalizeColor(color) {
    var match;

    if (typeof color === 'number') {
      return color >>> 0 === color && color >= 0 && color <= 0xffffffff
        ? color
        : null;
    } // Ordered based on occurrences on Facebook codebase

    if ((match = hex6.exec(color))) return parseInt(match[1] + 'ff', 16) >>> 0;
    if (colors.hasOwnProperty(color)) return colors[color];

    if ((match = rgb.exec(color))) {
      return (
        ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
          0x000000ff) >>> // a
        0
      );
    }

    if ((match = rgba.exec(color))) {
      return (
        ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
          parse1(match[4])) >>> // a
        0
      );
    }

    if ((match = hex3.exec(color))) {
      return (
        parseInt(
          match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
            'ff', // a
          16
        ) >>> 0
      );
    } // https://drafts.csswg.org/css-color-4/#hex-notation

    if ((match = hex8.exec(color))) return parseInt(match[1], 16) >>> 0;

    if ((match = hex4.exec(color))) {
      return (
        parseInt(
          match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
            match[4] +
            match[4], // a
          16
        ) >>> 0
      );
    }

    if ((match = hsl.exec(color))) {
      return (
        (hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
          0x000000ff) >>> // a
        0
      );
    }

    if ((match = hsla.exec(color))) {
      return (
        (hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
          parse1(match[4])) >>> // a
        0
      );
    }

    return null;
  }

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  function hslToRgb(h, s, l) {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    var r = hue2rgb(p, q, h + 1 / 3);
    var g = hue2rgb(p, q, h);
    var b = hue2rgb(p, q, h - 1 / 3);
    return (
      (Math.round(r * 255) << 24) |
      (Math.round(g * 255) << 16) |
      (Math.round(b * 255) << 8)
    );
  }

  function parse255(str) {
    var _int = parseInt(str, 10);

    if (_int < 0) return 0;
    if (_int > 255) return 255;
    return _int;
  }

  function parse360(str) {
    var _int2 = parseFloat(str);

    return (((_int2 % 360) + 360) % 360) / 360;
  }

  function parse1(str) {
    var num = parseFloat(str);
    if (num < 0) return 0;
    if (num > 1) return 255;
    return Math.round(num * 255);
  }

  function parsePercentage(str) {
    // parseFloat conveniently ignores the final %
    var _int3 = parseFloat(str);

    if (_int3 < 0) return 0;
    if (_int3 > 100) return 1;
    return _int3 / 100;
  }

  function colorToRgba(input) {
    var int32Color = normalizeColor(input);
    if (int32Color === null) return input;
    int32Color = int32Color || 0;
    var r = (int32Color & 0xff000000) >>> 24;
    var g = (int32Color & 0x00ff0000) >>> 16;
    var b = (int32Color & 0x0000ff00) >>> 8;
    var a = (int32Color & 0x000000ff) / 255;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  } // Problem: https://github.com/animatedjs/animated/pull/102
  // Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662

  var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
  // Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

  var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

  var colorNamesRegex = /*#__PURE__*/ new RegExp(
    '(' + /*#__PURE__*/ Object.keys(colors).join('|') + ')',
    'g'
  );
  /**
   * Supports string shapes by extracting numbers so new values can be computed,
   * and recombines those values into new strings of the same shape.  Supports
   * things like:
   *
   *   rgba(123, 42, 99, 0.36)           // colors
   *   -45deg                            // values with units
   *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
   */

  var createStringInterpolator = function createStringInterpolator(config) {
    // Replace colors with rgba
    var outputRange = config.output
      .map(function(rangeValue) {
        return rangeValue.replace(colorRegex, colorToRgba);
      })
      .map(function(rangeValue) {
        return rangeValue.replace(colorNamesRegex, colorToRgba);
      });
    var outputRanges = outputRange[0].match(stringShapeRegex).map(function() {
      return [];
    });
    outputRange.forEach(function(value) {
      value.match(stringShapeRegex).forEach(function(number, i) {
        return outputRanges[i].push(+number);
      });
    });
    var interpolations = outputRange[0]
      .match(stringShapeRegex)
      .map(function(_value, i) {
        return createInterpolator(
          _extends$1({}, config, {
            output: outputRanges[i],
          })
        );
      });
    return function(input) {
      var i = 0;
      return (
        outputRange[0] // 'rgba(0, 100, 200, 0)'
          // ->
          // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
          .replace(stringShapeRegex, function() {
            return interpolations[i++](input);
          }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
          // round the opacity (4th column).
          .replace(
            /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
            function(_, p1, p2, p3, p4) {
              return (
                'rgba(' +
                Math.round(p1) +
                ', ' +
                Math.round(p2) +
                ', ' +
                Math.round(p3) +
                ', ' +
                p4 +
                ')'
              );
            }
          )
      );
    };
  };

  var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true,
  };

  var prefixKey = function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  };

  var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
  isUnitlessNumber = /*#__PURE__*/ Object.keys(isUnitlessNumber).reduce(
    function(acc, prop) {
      prefixes.forEach(function(prefix) {
        return (acc[prefixKey(prefix, prop)] = acc[prop]);
      });
      return acc;
    },
    isUnitlessNumber
  );

  function dangerousStyleValue(name, value, isCustomProperty) {
    if (value == null || typeof value === 'boolean' || value === '') return '';
    if (
      !isCustomProperty &&
      typeof value === 'number' &&
      value !== 0 &&
      !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
    )
      return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

    return ('' + value).trim();
  }

  var attributeCache = {};
  injectCreateAnimatedStyle(function(style) {
    return new AnimatedStyle(style);
  });
  injectStringInterpolator(createStringInterpolator);
  injectColorNames(colors);
  injectApplyAnimatedValues(
    function(instance, props) {
      if (instance.nodeType && instance.setAttribute !== undefined) {
        var style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose$1(props, [
            'style',
            'children',
            'scrollTop',
            'scrollLeft',
          ]);

        var filter =
          instance.nodeName === 'filter' ||
          (instance.parentNode && instance.parentNode.nodeName === 'filter');
        if (scrollTop !== void 0) instance.scrollTop = scrollTop;
        if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

        if (children !== void 0) instance.textContent = children; // Set styles ...

        for (var styleName in style) {
          if (!style.hasOwnProperty(styleName)) continue;
          var isCustomProperty = styleName.indexOf('--') === 0;
          var styleValue = dangerousStyleValue(
            styleName,
            style[styleName],
            isCustomProperty
          );
          if (styleName === 'float') styleName = 'cssFloat';
          if (isCustomProperty)
            instance.style.setProperty(styleName, styleValue);
          else instance.style[styleName] = styleValue;
        } // Set attributes ...

        for (var name in attributes) {
          // Attributes are written in dash case
          var dashCase = filter
            ? name
            : attributeCache[name] ||
              (attributeCache[name] = name.replace(/([A-Z])/g, function(n) {
                return '-' + n.toLowerCase();
              }));
          if (typeof instance.getAttribute(dashCase) !== 'undefined')
            instance.setAttribute(dashCase, attributes[name]);
        }

        return;
      } else return false;
    },
    function(style) {
      return style;
    }
  );
  var domElements = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr', // SVG
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]; // Extend animated with all the available THREE elements

  var apply = /*#__PURE__*/ merge(createAnimatedComponent, false);
  var extendedAnimated = /*#__PURE__*/ apply(domElements);

  function _templateObject8$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: 65px;\n  padding: 0 10px;\n  cursor: pointer;\n',
    ]);

    _templateObject8$1 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  flex: 1;\n',
    ]);

    _templateObject7$1 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 35px 0;\n  flex: 2;\n  &&& > span {\n    padding-left: 50px;\n  }\n',
    ]);

    _templateObject6$1 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  padding: 0px 20px 20px 20px;\n  ',
      ':first-child {\n    margin-bottom: 0px;\n  }\n',
    ]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  padding: 40px 20px 0px 20px;\n',
    ]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  min-height: 470px;\n  max-width: 372px;\n  width: 100%;\n',
    ]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var InvestCardBody = /*#__PURE__*/ styled(CardWrapper)(
    /*#__PURE__*/ _templateObject$2()
  );
  var CardContent$1 = /*#__PURE__*/ styled(Card.Content)(
    /*#__PURE__*/ _templateObject2$2()
  );
  var CardBottom = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject3$1(),
    Card.Grid
  );
  var Title = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject6$1());
  var Header$1 = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject7$1());
  var IconContainer = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject8$1()
  );

  var bind = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };

  /*global toString:true*/

  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }

  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return (
      val !== null &&
      !isUndefined(val) &&
      val.constructor !== null &&
      !isUndefined(val.constructor) &&
      typeof val.constructor.isBuffer === 'function' &&
      val.constructor.isBuffer(val)
    );
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }

  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return typeof FormData !== 'undefined' && val instanceof FormData;
  }

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }

  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }

  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }

  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }

  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }

  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }

  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }

  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return (
      typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams
    );
  }

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (
      typeof navigator !== 'undefined' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
    ) {
      return false;
    }
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge$1(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = merge$1(result[key], val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function deepMerge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === 'object') {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  var utils = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge$1,
    deepMerge: deepMerge,
    extend: extend,
    trim: trim,
  };

  function encode(val) {
    return encodeURIComponent(val)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  var buildURL = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }

    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];

      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });

      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  function InterceptorManager() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected,
    });
    return this.handlers.length - 1;
  };

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  var InterceptorManager_1 = InterceptorManager;

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  var transformData = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });

    return data;
  };

  var isCancel = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };

  var normalizeHeaderName = function normalizeHeaderName(
    headers,
    normalizedName
  ) {
    utils.forEach(headers, function processHeader(value, name) {
      if (
        name !== normalizedName &&
        name.toUpperCase() === normalizedName.toUpperCase()
      ) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };

  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  var enhanceError = function enhanceError(
    error,
    config,
    code,
    request,
    response
  ) {
    error.config = config;
    if (code) {
      error.code = code;
    }

    error.request = request;
    error.response = response;
    error.isAxiosError = true;

    error.toJSON = function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code,
      };
    };
    return error;
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  var createError = function createError(
    message,
    config,
    code,
    request,
    response
  ) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  var settle = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(
        createError(
          'Request failed with status code ' + response.status,
          response.config,
          null,
          response.request,
          response
        )
      );
    }
  };

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  var isAbsoluteURL = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  var combineURLs = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  var buildFullPath = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };

  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ];

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) {
      return parsed;
    }

    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));

      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });

    return parsed;
  };

  var isURLSameOrigin = utils.isStandardBrowserEnv()
    ? // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;

        /**
         * Parse a URL to discover it's components
         *
         * @param {String} url The URL to be parsed
         * @returns {Object}
         */
        function resolveURL(url) {
          var href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href);

          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol
              ? urlParsingNode.protocol.replace(/:$/, '')
              : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search
              ? urlParsingNode.search.replace(/^\?/, '')
              : '',
            hash: urlParsingNode.hash
              ? urlParsingNode.hash.replace(/^#/, '')
              : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname:
              urlParsingNode.pathname.charAt(0) === '/'
                ? urlParsingNode.pathname
                : '/' + urlParsingNode.pathname,
          };
        }

        originURL = resolveURL(window.location.href);

        /**
         * Determine if a URL shares the same origin as the current location
         *
         * @param {String} requestURL The URL to test
         * @returns {boolean} True if URL shares the same origin, otherwise false
         */
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL)
            ? resolveURL(requestURL)
            : requestURL;
          return (
            parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host
          );
        };
      })()
    : // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })();

  var cookies = utils.isStandardBrowserEnv()
    ? // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },

          read: function read(name) {
            var match = document.cookie.match(
              new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')
            );
            return match ? decodeURIComponent(match[3]) : null;
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          },
        };
      })()
    : // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() {
            return null;
          },
          remove: function remove() {},
        };
      })();

  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;

      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }

      var request = new XMLHttpRequest();

      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        requestHeaders.Authorization =
          'Basic ' + btoa(username + ':' + password);
      }

      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(
        config.method.toUpperCase(),
        buildURL(fullPath, config.params, config.paramsSerializer),
        true
      );

      // Set the request timeout in MS
      request.timeout = config.timeout;

      // Listen for ready state
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (
          request.status === 0 &&
          !(request.responseURL && request.responseURL.indexOf('file:') === 0)
        ) {
          return;
        }

        // Prepare the response
        var responseHeaders =
          'getAllResponseHeaders' in request
            ? parseHeaders(request.getAllResponseHeaders())
            : null;
        var responseData =
          !config.responseType || config.responseType === 'text'
            ? request.responseText
            : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request,
        };

        settle(resolve, reject, response);

        // Clean up request
        request = null;
      };

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(createError('Request aborted', config, 'ECONNABORTED', request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage =
          'timeout of ' + config.timeout + 'ms exceeded';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(
          createError(timeoutErrorMessage, config, 'ECONNABORTED', request)
        );

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        var cookies$1 = cookies;

        // Add xsrf header
        var xsrfValue =
          (config.withCredentials || isURLSameOrigin(fullPath)) &&
          config.xsrfCookieName
            ? cookies$1.read(config.xsrfCookieName)
            : undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (
            typeof requestData === 'undefined' &&
            key.toLowerCase() === 'content-type'
          ) {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }

      // Add withCredentials to request if needed
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }

      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }

          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }

      if (requestData === undefined) {
        requestData = null;
      }

      // Send the request
      request.send(requestData);
    });
  };

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  function setContentTypeIfUnset(headers, value) {
    if (
      !utils.isUndefined(headers) &&
      utils.isUndefined(headers['Content-Type'])
    ) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = xhr;
    } else if (
      typeof process !== 'undefined' &&
      Object.prototype.toString.call(process) === '[object process]'
    ) {
      // For node use HTTP adapter
      adapter = xhr;
    }
    return adapter;
  }

  var defaults = {
    adapter: getDefaultAdapter(),

    transformRequest: [
      function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');
        if (
          utils.isFormData(data) ||
          utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(
            headers,
            'application/x-www-form-urlencoded;charset=utf-8'
          );
          return data.toString();
        }
        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
          return JSON.stringify(data);
        }
        return data;
      },
    ],

    transformResponse: [
      function transformResponse(data) {
        /*eslint no-param-reassign:0*/
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) {
            /* Ignore */
          }
        }
        return data;
      },
    ],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,

    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
  };

  defaults.headers = {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  };

  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(
    method
  ) {
    defaults.headers[method] = {};
  });

  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(
    method
  ) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });

  var defaults_1 = defaults;

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  var dispatchRequest = function dispatchRequest(config) {
    throwIfCancellationRequested(config);

    // Ensure headers exist
    config.headers = config.headers || {};

    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );

    // Flatten headers
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );

    utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );

    var adapter = config.adapter || defaults_1.adapter;

    return adapter(config).then(
      function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );

        return response;
      },
      function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      }
    );
  };

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  var mergeConfig = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};

    var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
    var defaultToConfig2Keys = [
      'baseURL',
      'url',
      'transformRequest',
      'transformResponse',
      'paramsSerializer',
      'timeout',
      'withCredentials',
      'adapter',
      'responseType',
      'xsrfCookieName',
      'xsrfHeaderName',
      'onUploadProgress',
      'onDownloadProgress',
      'maxContentLength',
      'validateStatus',
      'maxRedirects',
      'httpAgent',
      'httpsAgent',
      'cancelToken',
      'socketPath',
    ];

    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      }
    });

    utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
      if (utils.isObject(config2[prop])) {
        config[prop] = utils.deepMerge(config1[prop], config2[prop]);
      } else if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (utils.isObject(config1[prop])) {
        config[prop] = utils.deepMerge(config1[prop]);
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });

    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });

    var axiosKeys = valueFromConfig2Keys
      .concat(mergeDeepPropertiesKeys)
      .concat(defaultToConfig2Keys);

    var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

    utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });

    return config;
  };

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_1(),
      response: new InterceptorManager_1(),
    };
  }

  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }

    config = mergeConfig(this.defaults, config);

    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }

    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);

    this.interceptors.request.forEach(function unshiftRequestInterceptors(
      interceptor
    ) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    this.interceptors.response.forEach(function pushResponseInterceptors(
      interceptor
    ) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(
      /^\?/,
      ''
    );
  };

  // Provide aliases for supported request methods
  utils.forEach(
    ['delete', 'get', 'head', 'options'],
    function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(
          utils.merge(config || {}, {
            method: method,
            url: url,
          })
        );
      };
    }
  );

  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(
    method
  ) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(
        utils.merge(config || {}, {
          method: method,
          url: url,
          data: data,
        })
      );
    };
  });

  var Axios_1 = Axios;

  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel(message) {
    this.message = message;
  }

  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };

  Cancel.prototype.__CANCEL__ = true;

  var Cancel_1 = Cancel;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new Cancel_1(message);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel,
    };
  };

  var CancelToken_1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  var spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios_1(defaultConfig);
    var instance = bind(Axios_1.prototype.request, context);

    // Copy axios.prototype to instance
    utils.extend(instance, Axios_1.prototype, context);

    // Copy context to instance
    utils.extend(instance, context);

    return instance;
  }

  // Create the default instance to be exported
  var axios = createInstance(defaults_1);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios_1;

  // Factory for creating new instances
  axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
  };

  // Expose Cancel & CancelToken
  axios.Cancel = Cancel_1;
  axios.CancelToken = CancelToken_1;
  axios.isCancel = isCancel;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;

  var axios_1 = axios;

  // Allow use of default import syntax in TypeScript
  var default_1 = axios;
  axios_1.default = default_1;

  var axios$1 = axios_1;

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118

      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
        test3[letter] = letter;
      });

      if (
        Object.keys(Object.assign({}, test3)).join('') !==
        'abcdefghijklmnopqrst'
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = /*#__PURE__*/ shouldUseNative()
    ? Object.assign
    : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);

            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function printWarning() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = /*#__PURE__*/ Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */

  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') +
                  ': ' +
                  location +
                  ' type `' +
                  typeSpecName +
                  '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' +
                  typeof typeSpecs[typeSpecName] +
                  '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret$1
            );
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') +
                ': type specification of ' +
                location +
                ' `' +
                typeSpecName +
                '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' +
                typeof error +
                '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
            );
          }

          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning(
              'Failed ' +
                location +
                ' type: ' +
                error.message +
                (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }
  /**
   * Resets warning cache when testing.
   *
   * @private
   */

  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = /*#__PURE__*/ Function.call.bind(Object.prototype.hasOwnProperty);

  var printWarning$1 = function printWarning() {};

  {
    printWarning$1 = function printWarning(text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function factoryWithTypeCheckers(
    isValidElement,
    throwOnDirectAccess
  ) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */

    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);

      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>'; // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */

    /*eslint-disable no-self-compare*/

    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */

    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    } // Make `instanceof Error` still work for returned errors.

    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }

      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;

            if (
              !manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                  'function for the `' +
                  propFullName +
                  '` prop on `' +
                  componentName +
                  '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                  'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }

        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                'The ' +
                  location +
                  ' `' +
                  propFullName +
                  '` is marked as required ' +
                  ('in `' + componentName + '`, but its value is `null`.')
              );
            }

            return new PropTypeError(
              'The ' +
                location +
                ' `' +
                propFullName +
                '` is marked as required in ' +
                ('`' + componentName + '`, but its value is `undefined`.')
            );
          }

          return null;
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          );
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                preciseType +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('`' + expectedType + '`.')
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside arrayOf.'
          );
        }

        var propValue = props[propName];

        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an array.')
          );
        }

        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + '[' + i + ']',
            ReactPropTypesSecret_1
          );

          if (error instanceof Error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];

        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement.')
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];

        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement type.')
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                actualClassName +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('instance of `' + expectedClassName + '`.')
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' +
                arguments.length +
                ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning$1(
              'Invalid argument supplied to oneOf, expected an array.'
            );
          }
        }

        return emptyFunctionThatReturnsNull;
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];

        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(
          key,
          value
        ) {
          var type = getPreciseType(value);

          if (type === 'symbol') {
            return String(value);
          }

          return value;
        });
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` of value `' +
            String(propValue) +
            '` ' +
            ('supplied to `' +
              componentName +
              '`, expected one of ' +
              valuesString +
              '.')
        );
      }

      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside objectOf.'
          );
        }

        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an object.')
          );
        }

        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret_1
            );

            if (error instanceof Error) {
              return error;
            }
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1(
          'Invalid argument supplied to oneOfType, expected an instance of array.'
        );
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' +
              getPostfixForTypeWarning(checker) +
              ' at index ' +
              i +
              '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];

          if (
            checker(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret_1
            ) == null
          ) {
            return null;
          }
        }

        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` supplied to ' +
            ('`' + componentName + '`.')
        );
      }

      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`, expected a ReactNode.')
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          );
        }

        for (var key in shapeTypes) {
          var checker = shapeTypes[key];

          if (!checker) {
            continue;
          }

          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          );

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          );
        } // We need to check all keys in case some are required but missing from
        // props.

        var allKeys = objectAssign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (!checker) {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` key `' +
                key +
                '` supplied to `' +
                componentName +
                '`.' +
                '\nBad object: ' +
                JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }

          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          );

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;

        case 'boolean':
          return !propValue;

        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }

          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);

          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;

            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;

                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;

        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      } // falsy value can't be a Symbol

      if (!propValue) {
        return false;
      } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'

      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      } // Fallback for non-spec compliant Symbols which are polyfilled.

      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    } // Equivalent of `typeof` but with special handling for array and regexp.

    function getPropType(propValue) {
      var propType = typeof propValue;

      if (Array.isArray(propValue)) {
        return 'array';
      }

      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }

      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }

      return propType;
    } // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.

    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }

      var propType = getPropType(propValue);

      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }

      return propType;
    } // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"

    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);

      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;

        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;

        default:
          return type;
      }
    } // Returns class name of the object, if any.

    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }

      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = /*#__PURE__*/ createCommonjsModule(function(module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod

      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(
        ReactIs.isElement,
        throwOnDirectAccess
      );
    }
  });

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }

  /** Used for built-in method references. */

  var arrayProto = Array.prototype;
  /** Built-in value references. */

  var splice = arrayProto.splice;
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */

  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `ListCache`.

  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */

  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
      result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */

  var freeSelf =
    typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || /*#__PURE__*/ Function('return this')();

  /** Built-in value references. */

  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  /** `Object#toString` result references. */

  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag$1 && symToStringTag$1 in Object(value)
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$1(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */

  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction$1(value) {
    if (!isObject$1(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.

    var tag = baseGetTag(value);
    return (
      tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
    );
  }

  /** Used to detect overreaching core-js shims. */

  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */

  var maskSrcKey = /*#__PURE__*/ (function() {
    var uid = /*#__PURE__*/ /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
    );
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */

  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString$1 = funcProto$1.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  /** Used to detect if a method is native. */

  var reIsNative = /*#__PURE__*/ RegExp(
    '^' +
      /*#__PURE__*/ funcToString$1
        .call(hasOwnProperty$2)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */

  function baseIsNative(value) {
    if (!isObject$1(value) || isMasked(value)) {
      return false;
    }

    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */

  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /* Built-in method references that are verified to be native. */

  var Map$1 = /*#__PURE__*/ getNative(root, 'Map');

  /* Built-in method references that are verified to be native. */

  var nativeCreate = /*#__PURE__*/ getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */

  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  /** Used for built-in method references. */

  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function hashGet(key) {
    var data = this.__data__;

    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */

  var objectProto$4 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate
      ? data[key] !== undefined
      : hasOwnProperty$4.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */

  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `Hash`.

  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */

  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map$1 || ListCache)(),
      string: new Hash(),
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' ||
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean'
      ? value !== '__proto__'
      : value === null;
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */

  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */

  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `MapCache`.

  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Used as the size to enable large array optimizations. */

  var LARGE_ARRAY_SIZE = 200;
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */

  function stackSet(key, value) {
    var data = this.__data__;

    if (data instanceof ListCache) {
      var pairs = data.__data__;

      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }

      data = this.__data__ = new MapCache(pairs);
    }

    data.set(key, value);
    this.size = data.size;
    return this;
  }

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Stack(entries) {
    var data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  } // Add methods to `Stack`.

  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */

  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);

    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */

  function SetCache(values) {
    var index = -1,
      length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();

    while (++index < length) {
      this.add(values[index]);
    }
  } // Add methods to `SetCache`.

  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */

  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    } // Assume cyclic values are equal.

    var stacked = stack.get(array);

    if (stacked && stack.get(other)) {
      return stacked == other;
    }

    var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
    stack.set(array, other);
    stack.set(other, array); // Ignore non-index properties.

    while (++index < arrLength) {
      var arrValue = array[index],
        othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }

      if (compared !== undefined) {
        if (compared) {
          continue;
        }

        result = false;
        break;
      } // Recursively compare arrays (susceptible to call stack limits).

      if (seen) {
        if (
          !arraySome(other, function(othValue, othIndex) {
            if (
              !cacheHas(seen, othIndex) &&
              (arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack))
            ) {
              return seen.push(othIndex);
            }
          })
        ) {
          result = false;
          break;
        }
      } else if (
        !(
          arrValue === othValue ||
          equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )
      ) {
        result = false;
        break;
      }
    }

    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /** Built-in value references. */

  var Uint8Array = root.Uint8Array;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
      result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
      result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;
  /** `Object#toString` result references. */

  var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */

  function equalByTag(
    object,
    other,
    tag,
    bitmask,
    customizer,
    equalFunc,
    stack
  ) {
    switch (tag) {
      case dataViewTag:
        if (
          object.byteLength != other.byteLength ||
          object.byteOffset != other.byteOffset
        ) {
          return false;
        }

        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if (
          object.byteLength != other.byteLength ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))
        ) {
          return false;
        }

        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == other + '';

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        } // Assume cyclic values are equal.

        var stacked = stack.get(object);

        if (stacked) {
          return stacked == other;
        }

        bitmask |= COMPARE_UNORDERED_FLAG$1; // Recursively compare objects (susceptible to call stack limits).

        stack.set(object, other);
        var result = equalArrays(
          convert(object),
          convert(other),
          bitmask,
          customizer,
          equalFunc,
          stack
        );
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }

    return false;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray$1 = Array.isArray;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /** Used for built-in method references. */

  var objectProto$5 = Object.prototype;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbols = !nativeGetSymbols
    ? stubArray
    : function(object) {
        if (object == null) {
          return [];
        }

        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /** Used for built-in method references. */

  var objectProto$6 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments = /*#__PURE__*/ baseIsArguments(
    /*#__PURE__*/ (function() {
      return arguments;
    })()
  )
    ? baseIsArguments
    : function(value) {
        return (
          isObjectLike(value) &&
          hasOwnProperty$5.call(value, 'callee') &&
          !propertyIsEnumerable$1.call(value, 'callee')
        );
      };

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /** Detect free variable `exports`. */

  var freeExports =
    typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule =
    freeExports &&
    typeof module == 'object' &&
    module &&
    !module.nodeType &&
    module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer$1 = nativeIsBuffer || stubFalse;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    );
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength(value) {
    return (
      typeof value == 'number' &&
      value > -1 &&
      value % 1 == 0 &&
      value <= MAX_SAFE_INTEGER$1
    );
  }

  /** `Object#toString` result references. */

  var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag = '[object WeakMap]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
    int8Tag
  ] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
    uint8Tag
  ] = typedArrayTags[uint8ClampedTag] = typedArrayTags[
    uint16Tag
  ] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[
    arrayBufferTag$1
  ] = typedArrayTags[boolTag$1] = typedArrayTags[
    dataViewTag$1
  ] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[
    funcTag$1
  ] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] = typedArrayTags[
    objectTag
  ] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$1] = typedArrayTags[
    stringTag$1
  ] = typedArrayTags[weakMapTag] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return (
      isObjectLike(value) &&
      isLength(value.length) &&
      !!typedArrayTags[baseGetTag(value)]
    );
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /** Detect free variable `exports`. */

  var freeExports$1 =
    typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule$1 =
    freeExports$1 &&
    typeof module == 'object' &&
    module &&
    !module.nodeType &&
    module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports$1 && freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = /*#__PURE__*/ (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types =
        freeModule$1 &&
        freeModule$1.require &&
        /*#__PURE__*/ freeModule$1.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.

      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  })();

  /* Node.js helper references. */

  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray = nodeIsTypedArray
    ? /*#__PURE__*/ baseUnary(nodeIsTypedArray)
    : baseIsTypedArray;

  /** Used for built-in method references. */

  var objectProto$7 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray$1(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

    for (var key in value) {
      if (
        (inherited || hasOwnProperty$6.call(value, key)) &&
        !(
          skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
          (isBuff && (key == 'offset' || key == 'parent')) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          (isType &&
            (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) || // Skip index properties.
            isIndex(key, length))
        )
      ) {
        result.push(key);
      }
    }

    return result;
  }

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;
    return value === proto;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeKeys = /*#__PURE__*/ overArg(Object.keys, Object);

  /** Used for built-in method references. */

  var objectProto$9 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction$1(value);
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */

  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$2 = 1;
  /** Used for built-in method references. */

  var objectProto$a = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */

  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }

    var index = objLength;

    while (index--) {
      var key = objProps[index];

      if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
        return false;
      }
    } // Assume cyclic values are equal.

    var stacked = stack.get(object);

    if (stacked && stack.get(other)) {
      return stacked == other;
    }

    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;

    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
        othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      } // Recursively compare objects (susceptible to call stack limits).

      if (
        !(compared === undefined
          ? objValue === othValue ||
            equalFunc(objValue, othValue, bitmask, customizer, stack)
          : compared)
      ) {
        result = false;
        break;
      }

      skipCtor || (skipCtor = key == 'constructor');
    }

    if (result && !skipCtor) {
      var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

      if (
        objCtor != othCtor &&
        'constructor' in object &&
        'constructor' in other &&
        !(
          typeof objCtor == 'function' &&
          objCtor instanceof objCtor &&
          typeof othCtor == 'function' &&
          othCtor instanceof othCtor
        )
      ) {
        result = false;
      }
    }

    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /* Built-in method references that are verified to be native. */

  var DataView = /*#__PURE__*/ getNative(root, 'DataView');

  /* Built-in method references that are verified to be native. */

  var Promise$1 = /*#__PURE__*/ getNative(root, 'Promise');

  /* Built-in method references that are verified to be native. */

  var Set$1 = /*#__PURE__*/ getNative(root, 'Set');

  /* Built-in method references that are verified to be native. */

  var WeakMap = /*#__PURE__*/ getNative(root, 'WeakMap');

  /** `Object#toString` result references. */

  var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = /*#__PURE__*/ toSource(DataView),
    mapCtorString = /*#__PURE__*/ toSource(Map$1),
    promiseCtorString = /*#__PURE__*/ toSource(Promise$1),
    setCtorString = /*#__PURE__*/ toSource(Set$1),
    weakMapCtorString = /*#__PURE__*/ toSource(WeakMap);
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

  if (
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$1 && getTag(new Map$1()) != mapTag$2) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag(new Set$1()) != setTag$2) ||
    (WeakMap && getTag(new WeakMap()) != weakMapTag$1)
  ) {
    getTag = function getTag(value) {
      var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;

          case mapCtorString:
            return mapTag$2;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag$2;

          case weakMapCtorString:
            return weakMapTag$1;
        }
      }

      return result;
    };
  }

  var getTag$1 = getTag;

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$3 = 1;
  /** `Object#toString` result references. */

  var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';
  /** Used for built-in method references. */

  var objectProto$b = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */

  function baseIsEqualDeep(
    object,
    other,
    bitmask,
    customizer,
    equalFunc,
    stack
  ) {
    var objIsArr = isArray$1(object),
      othIsArr = isArray$1(other),
      objTag = objIsArr ? arrayTag$1 : getTag$1(object),
      othTag = othIsArr ? arrayTag$1 : getTag$1(other);
    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;
    var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

    if (isSameTag && isBuffer$1(object)) {
      if (!isBuffer$1(other)) {
        return false;
      }

      objIsArr = true;
      objIsObj = false;
    }

    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object)
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(
            object,
            other,
            objTag,
            bitmask,
            customizer,
            equalFunc,
            stack
          );
    }

    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped =
          objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(
          objUnwrapped,
          othUnwrapped,
          bitmask,
          customizer,
          stack
        );
      }
    }

    if (!isSameTag) {
      return false;
    }

    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */

  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }

    if (
      value == null ||
      other == null ||
      (!isObjectLike(value) && !isObjectLike(other))
    ) {
      return value !== value && other !== other;
    }

    return baseIsEqualDeep(
      value,
      other,
      bitmask,
      customizer,
      baseIsEqual,
      stack
    );
  }

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */

  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }

  var defineProperty = /*#__PURE__*/ (function() {
    try {
      var func = /*#__PURE__*/ getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  })();

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */

  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
      length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }

    return accumulator;
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */

  var baseFor = /*#__PURE__*/ createBaseFor();

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */

  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }

      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }

      var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }

      return collection;
    };
  }

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */

  var baseEach = /*#__PURE__*/ createBaseEach(baseForOwn);

  /**
   * Aggregates elements of `collection` on `accumulator` with keys transformed
   * by `iteratee` and values set by `setter`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */

  function baseAggregator(collection, setter, iteratee, accumulator) {
    baseEach(collection, function(value, key, collection) {
      setter(accumulator, value, iteratee(value), collection);
    });
    return accumulator;
  }

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;
  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */

  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }

    object = Object(object);

    while (index--) {
      var data = matchData[index];

      if (
        noCustomizer && data[2]
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
      ) {
        return false;
      }
    }

    while (++index < length) {
      data = matchData[index];
      var key = data[0],
        objValue = object[key],
        srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack();

        if (customizer) {
          var result = customizer(
            objValue,
            srcValue,
            key,
            object,
            source,
            stack
          );
        }

        if (
          !(result === undefined
            ? baseIsEqual(
                srcValue,
                objValue,
                COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2,
                customizer,
                stack
              )
            : result)
        ) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */

  function isStrictComparable(value) {
    return value === value && !isObject$1(value);
  }

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */

  function getMatchData(object) {
    var result = keys(object),
      length = result.length;

    while (length--) {
      var key = result[length],
        value = object[key];
      result[length] = [key, value, isStrictComparable(value)];
    }

    return result;
  }

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }

      return (
        object[key] === srcValue &&
        (srcValue !== undefined || key in Object(object))
      );
    };
  }

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */

  function baseMatches(source) {
    var matchData = getMatchData(source);

    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }

    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  /** `Object#toString` result references. */

  var symbolTag$1 = '[object Symbol]';
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */

  function isSymbol(value) {
    return (
      typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag$1)
    );
  }

  /** Used to match property names within property paths. */

  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */

  function isKey(value, object) {
    if (isArray$1(value)) {
      return false;
    }

    var type = typeof value;

    if (
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean' ||
      value == null ||
      isSymbol(value)
    ) {
      return true;
    }

    return (
      reIsPlainProp.test(value) ||
      !reIsDeepProp.test(value) ||
      (object != null && value in Object(object))
    );
  }

  /** Error message constants. */

  var FUNC_ERROR_TEXT = 'Expected a function';
  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */

  function memoize(func, resolver) {
    if (
      typeof func != 'function' ||
      (resolver != null && typeof resolver != 'function')
    ) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    var memoized = function memoized() {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }

      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };

    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  } // Expose `MapCache`.

  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */

  var MAX_MEMOIZE_SIZE = 500;
  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */

  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }

      return key;
    });
    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */

  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  /** Used to match backslashes in property paths. */

  var reEscapeChar = /\\(\\)?/g;
  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */

  var stringToPath = /*#__PURE__*/ memoizeCapped(function(string) {
    var result = [];

    if (
      string.charCodeAt(0) === 46
      /* . */
    ) {
      result.push('');
    }

    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(
        quote ? subString.replace(reEscapeChar, '$1') : number || match
      );
    });
    return result;
  });

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }

  /** Used as references for various `Number` constants. */

  var INFINITY = 1 / 0;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */

  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isArray$1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }

    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */

  function toString$1(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */

  function castPath(value, object) {
    if (isArray$1(value)) {
      return value;
    }

    return isKey(value, object) ? [value] : stringToPath(toString$1(value));
  }

  /** Used as references for various `Number` constants. */

  var INFINITY$1 = 1 / 0;
  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */

  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */

  function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0,
      length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }

    return index && index == length ? object : undefined;
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */

  function get$1(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */

  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1,
      length = path.length,
      result = false;

    while (++index < length) {
      var key = toKey(path[index]);

      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }

      object = object[key];
    }

    if (result || ++index != length) {
      return result;
    }

    length = object == null ? 0 : object.length;
    return (
      !!length &&
      isLength(length) &&
      isIndex(key, length) &&
      (isArray$1(object) || isArguments(object))
    );
  }

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */

  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;
  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */

  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }

    return function(object) {
      var objValue = get$1(object, path);
      return objValue === undefined && objValue === srcValue
        ? hasIn(object, path)
        : baseIsEqual(
            srcValue,
            objValue,
            COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3
          );
    };
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */

  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */

  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */

  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }

    if (value == null) {
      return identity;
    }

    if (typeof value == 'object') {
      return isArray$1(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }

    return property(value);
  }

  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */

  function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
      var func = isArray$1(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};
      return func(collection, setter, baseIteratee(iteratee), accumulator);
    };
  }

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of `collection` thru `iteratee`. The corresponding value of
   * each key is the last element responsible for generating the key. The
   * iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * var array = [
   *   { 'dir': 'left', 'code': 97 },
   *   { 'dir': 'right', 'code': 100 }
   * ];
   *
   * _.keyBy(array, function(o) {
   *   return String.fromCharCode(o.code);
   * });
   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
   *
   * _.keyBy(array, 'dir');
   * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
   */

  var keyBy = /*#__PURE__*/ createAggregator(function(result, value, key) {
    baseAssignValue(result, key, value);
  });

  var _extends$2 =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      );
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }
  var NODE_ENV = typeof process !== 'undefined' && env && 'development';

  var ChartComponent = /*#__PURE__*/ (function(_React$Component) {
    _inherits(ChartComponent, _React$Component);

    function ChartComponent() {
      _classCallCheck(this, ChartComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this));

      _this.handleOnClick = function(event) {
        var instance = _this.chartInstance;
        var _this$props = _this.props,
          getDatasetAtEvent = _this$props.getDatasetAtEvent,
          getElementAtEvent = _this$props.getElementAtEvent,
          getElementsAtEvent = _this$props.getElementsAtEvent,
          onElementsClick = _this$props.onElementsClick;
        getDatasetAtEvent &&
          getDatasetAtEvent(instance.getDatasetAtEvent(event), event);
        getElementAtEvent &&
          getElementAtEvent(instance.getElementAtEvent(event), event);
        getElementsAtEvent &&
          getElementsAtEvent(instance.getElementsAtEvent(event), event);
        onElementsClick &&
          onElementsClick(instance.getElementsAtEvent(event), event); // Backward compatibility
      };

      _this.ref = function(element) {
        _this.element = element;
      };

      _this.chartInstance = undefined;
      return _this;
    }

    ChartComponent.prototype.componentDidMount = function componentDidMount() {
      this.renderChart();
    };

    ChartComponent.prototype.componentDidUpdate = function componentDidUpdate() {
      if (this.props.redraw) {
        this.destroyChart();
        this.renderChart();
        return;
      }

      this.updateChart();
    };

    ChartComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(
      nextProps
    ) {
      var _props = this.props,
        redraw = _props.redraw,
        type = _props.type,
        options = _props.options,
        plugins = _props.plugins,
        legend = _props.legend,
        height = _props.height,
        width = _props.width;

      if (nextProps.redraw === true) {
        return true;
      }

      if (height !== nextProps.height || width !== nextProps.width) {
        return true;
      }

      if (type !== nextProps.type) {
        return true;
      }

      if (!isEqual(legend, nextProps.legend)) {
        return true;
      }

      if (!isEqual(options, nextProps.options)) {
        return true;
      }

      var nextData = this.transformDataProp(nextProps);

      if (!isEqual(this.shadowDataProp, nextData)) {
        return true;
      }

      return !isEqual(plugins, nextProps.plugins);
    };

    ChartComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.destroyChart();
    };

    ChartComponent.prototype.transformDataProp = function transformDataProp(
      props
    ) {
      var data = props.data;

      if (typeof data == 'function') {
        var node = this.element;
        return data(node);
      } else {
        return data;
      }
    }; // Chart.js directly mutates the data.dataset objects by adding _meta proprerty
    // this makes impossible to compare the current and next data changes
    // therefore we memoize the data prop while sending a fake to Chart.js for mutation.
    // see https://github.com/chartjs/Chart.js/blob/master/src/core/core.controller.js#L615-L617

    ChartComponent.prototype.memoizeDataProps = function memoizeDataProps() {
      if (!this.props.data) {
        return;
      }

      var data = this.transformDataProp(this.props);
      this.shadowDataProp = _extends$2({}, data, {
        datasets:
          data.datasets &&
          data.datasets.map(function(set) {
            return _extends$2({}, set);
          }),
      });
      this.saveCurrentDatasets(); // to remove the dataset metadata from this chart when the chart is destroyed

      return data;
    };

    ChartComponent.prototype.checkDatasets = function checkDatasets(datasets) {
      var isDev = NODE_ENV !== 'production' && NODE_ENV !== 'prod';
      var usingCustomKeyProvider =
        this.props.datasetKeyProvider !== ChartComponent.getLabelAsKey;
      var multipleDatasets = datasets.length > 1;

      if (isDev && multipleDatasets && !usingCustomKeyProvider) {
        var shouldWarn = false;
        datasets.forEach(function(dataset) {
          if (!dataset.label) {
            shouldWarn = true;
          }
        });

        if (shouldWarn) {
          console.error(
            '[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.'
          );
        }
      }
    };

    ChartComponent.prototype.getCurrentDatasets = function getCurrentDatasets() {
      return (
        (this.chartInstance &&
          this.chartInstance.config.data &&
          this.chartInstance.config.data.datasets) ||
        []
      );
    };

    ChartComponent.prototype.saveCurrentDatasets = function saveCurrentDatasets() {
      var _this2 = this;

      this.datasets = this.datasets || {};
      var currentDatasets = this.getCurrentDatasets();
      currentDatasets.forEach(function(d) {
        _this2.datasets[_this2.props.datasetKeyProvider(d)] = d;
      });
    };

    ChartComponent.prototype.updateChart = function updateChart() {
      var _this3 = this;

      var options = this.props.options;
      var data = this.memoizeDataProps(this.props);
      if (!this.chartInstance) return;

      if (options) {
        this.chartInstance.options = Chart.helpers.configMerge(
          this.chartInstance.options,
          options
        );
      } // Pipe datasets to chart instance datasets enabling
      // seamless transitions

      var currentDatasets = this.getCurrentDatasets();
      var nextDatasets = data.datasets || [];
      this.checkDatasets(currentDatasets);
      var currentDatasetsIndexed = keyBy(
        currentDatasets,
        this.props.datasetKeyProvider
      ); // We can safely replace the dataset array, as long as we retain the _meta property
      // on each dataset.

      this.chartInstance.config.data.datasets = nextDatasets.map(function(
        next
      ) {
        var current =
          currentDatasetsIndexed[_this3.props.datasetKeyProvider(next)];

        if (current && current.type === next.type && next.data) {
          // Be robust to no data. Relevant for other update mechanisms as in chartjs-plugin-streaming.
          // The data array must be edited in place. As chart.js adds listeners to it.
          current.data.splice(next.data.length);
          next.data.forEach(function(point, pid) {
            current.data[pid] = next.data[pid];
          });

          var _data = next.data,
            otherProps = _objectWithoutProperties(next, ['data']); // Merge properties. Notice a weakness here. If a property is removed
          // from next, it will be retained by current and never disappears.
          // Workaround is to set value to null or undefined in next.

          return _extends$2({}, current, otherProps);
        } else {
          return next;
        }
      });

      var datasets = data.datasets,
        rest = _objectWithoutProperties(data, ['datasets']);

      this.chartInstance.config.data = _extends$2(
        {},
        this.chartInstance.config.data,
        rest
      );
      this.chartInstance.update();
    };

    ChartComponent.prototype.renderChart = function renderChart() {
      var _props2 = this.props,
        options = _props2.options,
        legend = _props2.legend,
        type = _props2.type,
        plugins = _props2.plugins;
      var node = this.element;
      var data = this.memoizeDataProps();

      if (
        typeof legend !== 'undefined' &&
        !isEqual(ChartComponent.defaultProps.legend, legend)
      ) {
        options.legend = legend;
      }

      this.chartInstance = new Chart(node, {
        type: type,
        data: data,
        options: options,
        plugins: plugins,
      });
    };

    ChartComponent.prototype.destroyChart = function destroyChart() {
      if (!this.chartInstance) {
        return;
      } // Put all of the datasets that have existed in the chart back on the chart
      // so that the metadata associated with this chart get destroyed.
      // This allows the datasets to be used in another chart. This can happen,
      // for example, in a tabbed UI where the chart gets created each time the
      // tab gets switched to the chart and uses the same data).

      this.saveCurrentDatasets();
      var datasets = Object.values(this.datasets);
      this.chartInstance.config.data.datasets = datasets;
      this.chartInstance.destroy();
    };

    ChartComponent.prototype.render = function render() {
      var _props3 = this.props,
        height = _props3.height,
        width = _props3.width,
        id = _props3.id;
      return React__default.createElement('canvas', {
        ref: this.ref,
        height: height,
        width: width,
        id: id,
        onClick: this.handleOnClick,
      });
    };

    return ChartComponent;
  })(React__default.Component);

  ChartComponent.getLabelAsKey = function(d) {
    return d.label;
  };

  ChartComponent.propTypes = {
    data: /*#__PURE__*/ propTypes.oneOfType([propTypes.object, propTypes.func])
      .isRequired,
    getDatasetAtEvent: propTypes.func,
    getElementAtEvent: propTypes.func,
    getElementsAtEvent: propTypes.func,
    height: propTypes.number,
    legend: propTypes.object,
    onElementsClick: propTypes.func,
    options: propTypes.object,
    plugins: /*#__PURE__*/ propTypes.arrayOf(propTypes.object),
    redraw: propTypes.bool,
    type: function type(props, propName, componentName) {
      if (!Chart.controllers[props[propName]]) {
        return new Error(
          'Invalid chart type `' +
            props[propName] +
            '` supplied to' +
            ' `' +
            componentName +
            '`.'
        );
      }
    },
    width: propTypes.number,
    datasetKeyProvider: propTypes.func,
  };
  ChartComponent.defaultProps = {
    legend: {
      display: true,
      position: 'bottom',
    },
    type: 'doughnut',
    height: 150,
    width: 300,
    redraw: false,
    options: {},
    datasetKeyProvider: ChartComponent.getLabelAsKey,
  };
  var Doughnut = /*#__PURE__*/ (function(_React$Component2) {
    _inherits(Doughnut, _React$Component2);

    function Doughnut() {
      _classCallCheck(this, Doughnut);

      return _possibleConstructorReturn(
        this,
        _React$Component2.apply(this, arguments)
      );
    }

    Doughnut.prototype.render = function render() {
      var _this5 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref) {
            return (_this5.chartInstance = _ref && _ref.chartInstance);
          },
          type: 'doughnut',
        })
      );
    };

    return Doughnut;
  })(React__default.Component);
  var Pie = /*#__PURE__*/ (function(_React$Component3) {
    _inherits(Pie, _React$Component3);

    function Pie() {
      _classCallCheck(this, Pie);

      return _possibleConstructorReturn(
        this,
        _React$Component3.apply(this, arguments)
      );
    }

    Pie.prototype.render = function render() {
      var _this7 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref2) {
            return (_this7.chartInstance = _ref2 && _ref2.chartInstance);
          },
          type: 'pie',
        })
      );
    };

    return Pie;
  })(React__default.Component);
  var Line = /*#__PURE__*/ (function(_React$Component4) {
    _inherits(Line, _React$Component4);

    function Line() {
      _classCallCheck(this, Line);

      return _possibleConstructorReturn(
        this,
        _React$Component4.apply(this, arguments)
      );
    }

    Line.prototype.render = function render() {
      var _this9 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref3) {
            return (_this9.chartInstance = _ref3 && _ref3.chartInstance);
          },
          type: 'line',
        })
      );
    };

    return Line;
  })(React__default.Component);
  var Bar = /*#__PURE__*/ (function(_React$Component5) {
    _inherits(Bar, _React$Component5);

    function Bar() {
      _classCallCheck(this, Bar);

      return _possibleConstructorReturn(
        this,
        _React$Component5.apply(this, arguments)
      );
    }

    Bar.prototype.render = function render() {
      var _this11 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref4) {
            return (_this11.chartInstance = _ref4 && _ref4.chartInstance);
          },
          type: 'bar',
        })
      );
    };

    return Bar;
  })(React__default.Component);
  var HorizontalBar = /*#__PURE__*/ (function(_React$Component6) {
    _inherits(HorizontalBar, _React$Component6);

    function HorizontalBar() {
      _classCallCheck(this, HorizontalBar);

      return _possibleConstructorReturn(
        this,
        _React$Component6.apply(this, arguments)
      );
    }

    HorizontalBar.prototype.render = function render() {
      var _this13 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref5) {
            return (_this13.chartInstance = _ref5 && _ref5.chartInstance);
          },
          type: 'horizontalBar',
        })
      );
    };

    return HorizontalBar;
  })(React__default.Component);
  var Radar = /*#__PURE__*/ (function(_React$Component7) {
    _inherits(Radar, _React$Component7);

    function Radar() {
      _classCallCheck(this, Radar);

      return _possibleConstructorReturn(
        this,
        _React$Component7.apply(this, arguments)
      );
    }

    Radar.prototype.render = function render() {
      var _this15 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref6) {
            return (_this15.chartInstance = _ref6 && _ref6.chartInstance);
          },
          type: 'radar',
        })
      );
    };

    return Radar;
  })(React__default.Component);
  var Polar = /*#__PURE__*/ (function(_React$Component8) {
    _inherits(Polar, _React$Component8);

    function Polar() {
      _classCallCheck(this, Polar);

      return _possibleConstructorReturn(
        this,
        _React$Component8.apply(this, arguments)
      );
    }

    Polar.prototype.render = function render() {
      var _this17 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref7) {
            return (_this17.chartInstance = _ref7 && _ref7.chartInstance);
          },
          type: 'polarArea',
        })
      );
    };

    return Polar;
  })(React__default.Component);
  var Bubble = /*#__PURE__*/ (function(_React$Component9) {
    _inherits(Bubble, _React$Component9);

    function Bubble() {
      _classCallCheck(this, Bubble);

      return _possibleConstructorReturn(
        this,
        _React$Component9.apply(this, arguments)
      );
    }

    Bubble.prototype.render = function render() {
      var _this19 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref8) {
            return (_this19.chartInstance = _ref8 && _ref8.chartInstance);
          },
          type: 'bubble',
        })
      );
    };

    return Bubble;
  })(React__default.Component);
  var Scatter = /*#__PURE__*/ (function(_React$Component10) {
    _inherits(Scatter, _React$Component10);

    function Scatter() {
      _classCallCheck(this, Scatter);

      return _possibleConstructorReturn(
        this,
        _React$Component10.apply(this, arguments)
      );
    }

    Scatter.prototype.render = function render() {
      var _this21 = this;

      return React__default.createElement(
        ChartComponent,
        _extends$2({}, this.props, {
          ref: function ref(_ref9) {
            return (_this21.chartInstance = _ref9 && _ref9.chartInstance);
          },
          type: 'scatter',
        })
      );
    };

    return Scatter;
  })(React__default.Component);
  var defaults$1 = Chart.defaults;

  /*
   *      bignumber.js v9.0.0
   *      A JavaScript library for arbitrary-precision arithmetic.
   *      https://github.com/MikeMcl/bignumber.js
   *      Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
   *      MIT Licensed.
   *
   *      BigNumber.prototype methods     |  BigNumber methods
   *                                      |
   *      absoluteValue            abs    |  clone
   *      comparedTo                      |  config               set
   *      decimalPlaces            dp     |      DECIMAL_PLACES
   *      dividedBy                div    |      ROUNDING_MODE
   *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
   *      exponentiatedBy          pow    |      RANGE
   *      integerValue                    |      CRYPTO
   *      isEqualTo                eq     |      MODULO_MODE
   *      isFinite                        |      POW_PRECISION
   *      isGreaterThan            gt     |      FORMAT
   *      isGreaterThanOrEqualTo   gte    |      ALPHABET
   *      isInteger                       |  isBigNumber
   *      isLessThan               lt     |  maximum              max
   *      isLessThanOrEqualTo      lte    |  minimum              min
   *      isNaN                           |  random
   *      isNegative                      |  sum
   *      isPositive                      |
   *      isZero                          |
   *      minus                           |
   *      modulo                   mod    |
   *      multipliedBy             times  |
   *      negated                         |
   *      plus                            |
   *      precision                sd     |
   *      shiftedBy                       |
   *      squareRoot               sqrt   |
   *      toExponential                   |
   *      toFixed                         |
   *      toFormat                        |
   *      toFraction                      |
   *      toJSON                          |
   *      toNumber                        |
   *      toPrecision                     |
   *      toString                        |
   *      valueOf                         |
   *
   */
  var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,
    bignumberError = '[BigNumber Error] ',
    tooManyDigits =
      bignumberError + 'Number primitive has more than 15 significant digits: ',
    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER$2 = 0x1fffffffffffff,
    // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [
      1,
      10,
      100,
      1e3,
      1e4,
      1e5,
      1e6,
      1e7,
      1e8,
      1e9,
      1e10,
      1e11,
      1e12,
      1e13,
    ],
    SQRT_BASE = 1e7,
    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1e9; // 0 to MAX_INT32

  /*
   * Create and return a BigNumber constructor.
   */

  function clone(configObject) {
    var div,
      convertBase,
      parseNumeric,
      P = (BigNumber.prototype = {
        constructor: BigNumber,
        toString: null,
        valueOf: null,
      }),
      ONE = new BigNumber(1),
      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.
      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,
      // 0 to MAX
      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,
      // 0 to 8
      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,
      // 0 to -MAX
      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,
      // 0 to MAX
      // RANGE : [MIN_EXP, MAX_EXP]
      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,
      // -1 to -MAX
      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,
      // 1 to MAX
      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,
      // true or false
      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,
      // 0 to 9
      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,
      // 0 to MAX
      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',
        // non-breaking space
        suffix: '',
      },
      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz'; //------------------------------------------------------------------------------------------
    // CONSTRUCTOR

    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */

    function BigNumber(v, b) {
      var alphabet,
        c,
        caseChanged,
        e,
        i,
        isNum,
        len,
        str,
        x = this; // Enable constructor call without `new`.

      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {
        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [(x.e = 0)];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {
          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? ((v = -v), -1) : 1; // Fast path for integers, where n < 2147483648 (2**31).

          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++) {}

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {
          if (!isNumeric.test((str = String(v))))
            return parseNumeric(x, str, isNum);
          x.s = str.charCodeAt(0) == 45 ? ((str = str.slice(1)), -1) : 1;
        } // Decimal point?

        if ((e = str.indexOf('.')) > -1) str = str.replace('.', ''); // Exponential form?

        if ((i = str.search(/e/i)) > 0) {
          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {
          // Integer.
          e = str.length;
        }
      } else {
        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base'); // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.

        if (b == 10) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if ((isNum = typeof v == 'number')) {
          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
          x.s = 1 / v < 0 ? ((str = str.slice(1)), -1) : 1; // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'

          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error(tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? ((str = str.slice(1)), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0; // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.

        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf((c = str.charAt(i))) < 0) {
            if (c == '.') {
              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {
              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (
                (str == str.toUpperCase() && (str = str.toLowerCase())) ||
                (str == str.toLowerCase() && (str = str.toUpperCase()))
              ) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        } // Prevent later check for length on converted number.

        isNum = false;
        str = convertBase(str, b, 10, x.s); // Decimal point?

        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      } // Determine leading zeros.

      for (i = 0; str.charCodeAt(i) === 48; i++) {} // Determine trailing zeros.

      for (len = str.length; str.charCodeAt(--len) === 48; ) {}

      if ((str = str.slice(i, ++len))) {
        len -= i; // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'

        if (
          isNum &&
          BigNumber.DEBUG &&
          len > 15 &&
          (v > MAX_SAFE_INTEGER$2 || v !== mathfloor(v))
        ) {
          throw Error(tooManyDigits + x.s * v);
        } // Overflow?

        if ((e = e - i - 1) > MAX_EXP) {
          // Infinity.
          x.c = x.e = null; // Underflow?
        } else if (e < MIN_EXP) {
          // Zero.
          x.c = [(x.e = 0)];
        } else {
          x.e = e;
          x.c = []; // Transform base
          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.

          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE; // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len; ) {
              x.c.push(+str.slice(i, (i += LOG_BASE)));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0') {}

          x.c.push(+str);
        }
      } else {
        // Zero.
        x.c = [(x.e = 0)];
      }
    } // CONSTRUCTOR PROPERTIES

    BigNumber.clone = clone;
    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;
    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                     not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */

    BigNumber.config = BigNumber.set = function(obj) {
      var p, v;

      if (obj != null) {
        if (typeof obj == 'object') {
          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty((p = 'DECIMAL_PLACES'))) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          } // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'

          if (obj.hasOwnProperty((p = 'ROUNDING_MODE'))) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          } // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'

          if (obj.hasOwnProperty((p = 'EXPONENTIAL_AT'))) {
            v = obj[p];

            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          } // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'

          if (obj.hasOwnProperty((p = 'RANGE'))) {
            v = obj[p];

            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);

              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error(bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          } // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'

          if (obj.hasOwnProperty((p = 'CRYPTO'))) {
            v = obj[p];

            if (v === !!v) {
              if (v) {
                if (
                  typeof crypto != 'undefined' &&
                  crypto &&
                  (crypto.getRandomValues || crypto.randomBytes)
                ) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error(bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error(bignumberError + p + ' not true or false: ' + v);
            }
          } // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'

          if (obj.hasOwnProperty((p = 'MODULO_MODE'))) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          } // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'

          if (obj.hasOwnProperty((p = 'POW_PRECISION'))) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          } // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'

          if (obj.hasOwnProperty((p = 'FORMAT'))) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error(bignumberError + p + ' not an object: ' + v);
          } // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'

          if (obj.hasOwnProperty((p = 'ALPHABET'))) {
            v = obj[p]; // Disallow if only one character,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.

            if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
              ALPHABET = v;
            } else {
              throw Error(bignumberError + p + ' invalid: ' + v);
            }
          }
        } else {
          // '[BigNumber Error] Object expected: {v}'
          throw Error(bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET,
      };
    };
    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */

    BigNumber.isBigNumber = function(v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;
      var i,
        n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {
        if (
          (s === 1 || s === -1) &&
          e >= -MAX &&
          e <= MAX &&
          e === mathfloor(e)
        ) {
          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          } // Calculate number of digits that c[0] should have, based on the exponent.

          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE; // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {

          if (String(c[0]).length == i) {
            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            } // Last element cannot be zero, unless it is the only element.

            if (n !== 0) return true;
          }
        } // Infinity/NaN
      } else if (
        c === null &&
        e === null &&
        (s === null || s === 1 || s === -1)
      ) {
        return true;
      }

      throw Error(bignumberError + 'Invalid BigNumber: ' + v);
    };
    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */

    BigNumber.maximum = BigNumber.max = function() {
      return maxOrMin(arguments, P.lt);
    };
    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */

    BigNumber.minimum = BigNumber.min = function() {
      return maxOrMin(arguments, P.gt);
    };
    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */

    BigNumber.random = (function() {
      var pow2_53 = 0x20000000000000; // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.

      var random53bitInt =
        (Math.random() * pow2_53) & 0x1fffff
          ? function() {
              return mathfloor(Math.random() * pow2_53);
            }
          : function() {
              return (
                ((Math.random() * 0x40000000) | 0) * 0x800000 +
                ((Math.random() * 0x800000) | 0)
              );
            };
      return function(dp) {
        var a,
          b,
          e,
          k,
          v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);
        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);
        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {
          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {
            a = crypto.getRandomValues(new Uint32Array((k *= 2)));

            for (; i < k; ) {
              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11); // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251

              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {
                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }

            i = k / 2; // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {
            // buffer
            a = crypto.randomBytes((k *= 7));

            for (; i < k; ) {
              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v =
                (a[i] & 31) * 0x1000000000000 +
                a[i + 1] * 0x10000000000 +
                a[i + 2] * 0x100000000 +
                a[i + 3] * 0x1000000 +
                (a[i + 4] << 16) +
                (a[i + 5] << 8) +
                a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }

            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error(bignumberError + 'crypto unavailable');
          }
        } // Use Math.random.

        if (!CRYPTO) {
          for (; i < k; ) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE; // Convert trailing digits to zeros according to dp.

        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        } // Remove trailing elements which are zero.

        for (; c[i] === 0; c.pop(), i--) {} // Zero?

        if (i < 0) {
          c = [(e = 0)];
        } else {
          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE) {} // Count the digits of the first element of c to determine leading zeros, and...

          for (i = 1, v = c[0]; v >= 10; v /= 10, i++) {} // adjust the exponent accordingly.

          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();
    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */

    BigNumber.sum = function() {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);

      for (; i < args.length; ) {
        sum = sum.plus(args[i++]);
      }

      return sum;
    }; // PRIVATE FUNCTIONS
    // Called by BigNumber and BigNumber.prototype.toString.

    convertBase = (function() {
      var decimal = '0123456789';
      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */

      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len; ) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) {}

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {
            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += (arr[j] / baseOut) | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      } // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.

      return function(str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet,
          d,
          e,
          k,
          r,
          x,
          xc,
          y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE; // Non-integer.

        if (i >= 0) {
          k = POW_PRECISION; // Unlimited precision.

          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k; // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(
            toFixedPoint(coeffToString(x.c), x.e, '0'),
            10,
            baseOut,
            decimal
          );
          y.e = y.c.length;
        } // Convert the number as integer.

        xc = toBaseOut(
          str,
          baseIn,
          baseOut,
          callerIsToString
            ? ((alphabet = ALPHABET), decimal)
            : ((alphabet = decimal), ALPHABET)
        ); // xc now represents str as an integer and converted to baseOut. e is the exponent.

        e = k = xc.length; // Remove trailing zeros.

        for (; xc[--k] == 0; xc.pop()) {} // Zero?

        if (!xc[0]) return alphabet.charAt(0); // Does str represent an integer? If so, no need for the division.

        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e; // The sign is needed for correct rounding.

          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        } // xc now represents str converted to baseOut.
        // THe index of the rounding digit.

        d = e + dp + 1; // The rounding digit: the digit to the right of the digit that may be rounded up.

        i = xc[d]; // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;
        r =
          rm < 4
            ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
            : i > k ||
              (i == k &&
                (rm == 4 ||
                  r ||
                  (rm == 6 && xc[d - 1] & 1) ||
                  rm == (x.s < 0 ? 8 : 7))); // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.

        if (d < 1 || !xc[0]) {
          // 1^-dp or 0
          str = r
            ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0))
            : alphabet.charAt(0);
        } else {
          // Truncate xc to the required number of decimal places.
          xc.length = d; // Round up?

          if (r) {
            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut; ) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          } // Determine trailing zeros.

          for (k = xc.length; !xc[--k]; ) {} // E.g. [4, 11, 15] becomes 4bf.

          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++])) {} // Add leading zeros, decimal point and trailing zeros as required.

          str = toFixedPoint(str, e, alphabet.charAt(0));
        } // The caller will add the sign.

        return str;
      };
    })(); // Perform division in the specified base. Called by div and convertBase.

    div = (function() {
      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m,
          temp,
          xlo,
          xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = (k / SQRT_BASE) | 0;

        for (x = x.slice(); i--; ) {
          xlo = x[i] % SQRT_BASE;
          xhi = (x[i] / SQRT_BASE) | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + (m % SQRT_BASE) * SQRT_BASE + carry;
          carry = ((temp / base) | 0) + ((m / SQRT_BASE) | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);
        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {
          for (i = cmp = 0; i < aL; i++) {
            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0; // Subtract b from a.

        for (; aL--; ) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        } // Remove leading zeros.

        for (; !a[0] && a.length > 1; a.splice(0, 1)) {}
      } // x: dividend, y: divisor.

      return function(x, y, dp, rm, base) {
        var cmp,
          e,
          i,
          more,
          n,
          prod,
          prodL,
          q,
          qc,
          rem,
          remL,
          rem0,
          xi,
          xL,
          yc0,
          yL,
          yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c; // Either NaN, Infinity or 0?

        if (!xc || !xc[0] || !yc || !yc[0]) {
          return new BigNumber( // Return NaN if either NaN, or both Infinity or 0.
            !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc)
              ? NaN // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
              : (xc && xc[0] == 0) || !yc
              ? s * 0
              : s / 0
          );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = (s / LOG_BASE) | 0;
        } // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.

        for (i = 0; yc[i] == (xc[i] || 0); i++) {}

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2; // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1)); // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {

          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length; // Add zeros to make remainder as long as divisor.

          for (; remL < yL; rem[remL++] = 0) {}

          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++; // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0; // Compare divisor and remainder.

            cmp = compare(yc, rem, yL, remL); // If divisor < remainder.

            if (cmp < 0) {
              // Calculate trial digit, n.
              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0); // n is how many times the divisor goes into the current remainder.

              n = mathfloor(rem0 / yc0); //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {
                // n may be > base only when base is 3.
                if (n >= base) n = base - 1; // product = divisor * trial digit.

                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length; // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.

                while (compare(prod, rem, prodL, remL) == 1) {
                  n--; // Subtract divisor from product.

                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {
                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {
                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                } // product = divisor

                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod); // Subtract product from remainder.

              subtract(rem, prod, remL, base);
              remL = rem.length; // If product was < remainder.

              if (cmp == -1) {
                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++; // Subtract divisor from remainder.

                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0
            // Add the next digit, n, to the result array.

            qc[i++] = n; // Update the remainder.

            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null; // Leading zero?

          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {
          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) {}

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more); // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();
    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */

    function format(n, i, rm, id) {
      var c0, e, ne, len, str;
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      if (!n.c) return n.toString();
      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str =
          id == 1 || (id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS))
            ? toExponential(str, ne)
            : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm); // n.e may have changed if the value was rounded up.

        e = n.e;
        str = coeffToString(n.c);
        len = str.length; // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.
        // Exponential notation.

        if (id == 1 || (id == 2 && (i <= e || e <= TO_EXP_NEG))) {
          // Append zeros?
          for (; len < i; str += '0', len++) {}

          str = toExponential(str, e); // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0'); // Append zeros?

          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0') {}
          } else {
            i += e - len;

            if (i > 0) {
              if (e + 1 == len) str += '.';

              for (; i--; str += '0') {}
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    } // Handle BigNumber.max and BigNumber.min.

    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]); // If any number is NaN, return NaN.

        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }
    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */

    function normalise(n, c, e) {
      var i = 1,
        j = c.length; // Remove trailing zeros.

      for (; !c[--j]; c.pop()) {} // Calculate the base 10 exponent. First get the number of digits of c[0].

      for (j = c[0]; j >= 10; j /= 10, i++) {} // Overflow?

      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
        // Infinity.
        n.c = n.e = null; // Underflow?
      } else if (e < MIN_EXP) {
        // Zero.
        n.c = [(n.e = 0)];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    } // Handle values that fail the validity test in BigNumber.

    parseNumeric = (function() {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
      return function(x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, ''); // No exception on ±Infinity or NaN.

        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {
            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function(m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b; // E.g. '1.' to '1', '.1' to '0.1'

              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          } // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'

          if (BigNumber.DEBUG) {
            throw Error(
              bignumberError +
                'Not a' +
                (b ? ' base ' + b : '') +
                ' number: ' +
                str
            );
          } // NaN

          x.s = null;
        }

        x.c = x.e = null;
      };
    })();
    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */

    function round(x, sd, rm, r) {
      var d,
        i,
        j,
        k,
        n,
        ni,
        rd,
        xc = x.c,
        pows10 = POWS_TEN; // if x is not Infinity or NaN...

      if (xc) {
        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {
          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) {}

          i = sd - d; // If the rounding digit is in the first element of xc...

          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[(ni = 0)]; // Get the rounding digit at index j of n.

            rd = (n / pows10[d - j - 1]) % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {
              if (r) {
                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0)) {}

                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni]; // Get the number of digits of n.

              for (d = 1; k >= 10; k /= 10, d++) {} // Get the index of rd within n.

              i %= LOG_BASE; // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.

              j = i - LOG_BASE + d; // Get the rounding digit at index j of n.

              rd = j < 0 ? 0 : (n / pows10[d - j - 1]) % 10 | 0;
            }
          }

          r =
            r ||
            sd < 0 || // Are there any non-zero digits after the rounding digit?
            // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
            // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
            xc[ni + 1] != null ||
            (j < 0 ? n : n % pows10[d - j - 1]);
          r =
            rm < 4
              ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : rd > 5 ||
                (rd == 5 &&
                  (rm == 4 ||
                    r ||
                    (rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
                      (i > 0 ? (j > 0 ? n / pows10[d - j] : 0) : xc[ni - 1]) %
                        10 &
                        1) ||
                    rm == (x.s < 0 ? 8 : 7)));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {
              // Convert sd to decimal places.
              sd -= x.e + 1; // 1, 0.1, 0.01, 0.001, 0.0001 etc.

              xc[0] = pows10[(LOG_BASE - (sd % LOG_BASE)) % LOG_BASE];
              x.e = -sd || 0;
            } else {
              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          } // Remove excess digits.

          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i]; // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.

            xc[ni] = j > 0 ? mathfloor((n / pows10[d - j]) % pows10[j]) * k : 0;
          } // Round up?

          if (r) {
            for (;;) {
              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {
                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) {}

                j = xc[0] += k;

                for (k = 1; j >= 10; j /= 10, k++) {} // if i != k the length has increased.

                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          } // Remove trailing zeros.

          for (i = xc.length; xc[--i] === 0; xc.pop()) {}
        } // Overflow? Infinity.

        if (x.e > MAX_EXP) {
          x.c = x.e = null; // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [(x.e = 0)];
        }
      }

      return x;
    }

    function valueOf(n) {
      var str,
        e = n.e;
      if (e === null) return n.toString();
      str = coeffToString(n.c);
      str =
        e <= TO_EXP_NEG || e >= TO_EXP_POS
          ? toExponential(str, e)
          : toFixedPoint(str, e, '0');
      return n.s < 0 ? '-' + str : str;
    } // PROTOTYPE/INSTANCE METHODS

    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */

    P.absoluteValue = P.abs = function() {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };
    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */

    P.comparedTo = function(y, b) {
      return compare(this, new BigNumber(y, b));
    };
    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */

    P.decimalPlaces = P.dp = function(dp, rm) {
      var c,
        n,
        v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);
        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE; // Subtract the number of trailing zeros of the last number.

      if ((v = c[v])) for (; v % 10 == 0; v /= 10, n--) {}
      if (n < 0) n = 0;
      return n;
    };
    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */

    P.dividedBy = P.div = function(y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };
    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */

    P.dividedToIntegerBy = P.idiv = function(y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };
    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */

    P.exponentiatedBy = P.pow = function(n, m) {
      var half,
        isModExp,
        i,
        k,
        more,
        nIsBig,
        nIsNeg,
        nIsOdd,
        y,
        x = this;
      n = new BigNumber(n); // Allow NaN and ±Infinity, but not other non-integers.

      if (n.c && !n.isInteger()) {
        throw Error(bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m); // Exponent of MAX_SAFE_INTEGER is 15.

      nIsBig = n.e > 14; // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.

      if (
        !x.c ||
        !x.c[0] ||
        (x.c[0] == 1 && !x.e && x.c.length == 1) ||
        !n.c ||
        !n.c[0]
      ) {
        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(
          Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n))
        );
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {
        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
        isModExp = !nIsNeg && x.isInteger() && m.isInteger();
        if (isModExp) x = x.mod(m); // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
        // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (
        n.e > 9 &&
        (x.e > 0 ||
          x.e < -1 ||
          (x.e == 0 // [1, 240000000]
            ? x.c[0] > 1 || (nIsBig && x.c[1] >= 24e7) // [80000000000000]  [99999750000000]
            : x.c[0] < 8e13 || (nIsBig && x.c[0] <= 9999975e7)))
      ) {
        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0; // If x >= 1, k = ±Infinity.

        if (x.e > -1) k = 1 / k; // If n is negative return ±0, else return ±Infinity.

        return new BigNumber(nIsNeg ? 1 / k : k);
      } else if (POW_PRECISION) {
        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE); // Performs 54 loop iterations for n of 9007199254740991.

      for (;;) {
        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);
      return m
        ? y.mod(m)
        : k
        ? round(y, POW_PRECISION, ROUNDING_MODE, more)
        : y;
    };
    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */

    P.integerValue = function(rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };
    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */

    P.isEqualTo = P.eq = function(y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };
    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */

    P.isFinite = function() {
      return !!this.c;
    };
    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */

    P.isGreaterThan = P.gt = function(y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };
    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */

    P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
    };
    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */

    P.isInteger = function() {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };
    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */

    P.isLessThan = P.lt = function(y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };
    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */

    P.isLessThanOrEqualTo = P.lte = function(y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };
    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */

    P.isNaN = function() {
      return !this.s;
    };
    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */

    P.isNegative = function() {
      return this.s < 0;
    };
    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */

    P.isPositive = function() {
      return this.s > 0;
    };
    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */

    P.isZero = function() {
      return !!this.c && this.c[0] == 0;
    };
    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */

    P.minus = function(y, b) {
      var i,
        j,
        t,
        xLTy,
        x = this,
        a = x.s;
      y = new BigNumber(y, b);
      b = y.s; // Either NaN?

      if (!a || !b) return new BigNumber(NaN); // Signs differ?

      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {
        // Either Infinity?
        if (!xc || !yc)
          return xc ? ((y.s = -b), y) : new BigNumber(yc ? x : NaN); // Either zero?

        if (!xc[0] || !yc[0]) {
          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0]
            ? ((y.s = -b), y)
            : new BigNumber(
                xc[0]
                  ? x // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                  : ROUNDING_MODE == 3
                  ? -0
                  : 0
              );
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice(); // Determine which is the bigger number.

      if ((a = xe - ye)) {
        if ((xLTy = a < 0)) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse(); // Prepend zeros to equalise exponents.

        for (b = a; b--; t.push(0)) {}

        t.reverse();
      } else {
        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {
          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      } // x < y? Point xc to the array of the bigger number.

      if (xLTy) (t = xc), (xc = yc), (yc = t), (y.s = -y.s);
      b = (j = yc.length) - (i = xc.length); // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.

      if (b > 0) for (; b--; xc[i++] = 0) {}
      b = BASE - 1; // Subtract yc from xc.

      for (; j > a; ) {
        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b) {}

          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      } // Remove leading zeros and adjust exponent accordingly.

      for (; xc[0] == 0; xc.splice(0, 1), --ye) {} // Zero?

      if (!xc[0]) {
        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [(y.e = 0)];
        return y;
      } // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.

      return normalise(y, xc, ye);
    };
    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */

    P.modulo = P.mod = function(y, b) {
      var q,
        s,
        x = this;
      y = new BigNumber(y, b); // Return NaN if x is Infinity or NaN, or y is NaN or zero.

      if (!x.c || !y.s || (y.c && !y.c[0])) {
        return new BigNumber(NaN); // Return x if y is Infinity or x is zero.
      } else if (!y.c || (x.c && !x.c[0])) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {
        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y)); // To match JavaScript %, ensure sign of zero is sign of dividend.

      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
      return y;
    };
    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */

    P.multipliedBy = P.times = function(y, b) {
      var c,
        e,
        i,
        j,
        k,
        m,
        xcL,
        xlo,
        xhi,
        ycL,
        ylo,
        yhi,
        zc,
        base,
        sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c; // Either NaN, ±Infinity or ±0?

      if (!xc || !yc || !xc[0] || !yc[0]) {
        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || (xc && !xc[0] && !yc) || (yc && !yc[0] && !xc)) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s; // Return ±Infinity if either is ±Infinity.

          if (!xc || !yc) {
            y.c = y.e = null; // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length; // Ensure xc points to longer array and xcL to its length.

      if (xcL < ycL)
        (zc = xc), (xc = yc), (yc = zc), (i = xcL), (xcL = ycL), (ycL = i); // Initialise the result array with zeros.

      for (i = xcL + ycL, zc = []; i--; zc.push(0)) {}

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0; ) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = (yc[i] / sqrtBase) | 0;

        for (k = xcL, j = i + k; j > i; ) {
          xlo = xc[--k] % sqrtBase;
          xhi = (xc[k] / sqrtBase) | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + (m % sqrtBase) * sqrtBase + zc[j] + c;
          c = ((xlo / base) | 0) + ((m / sqrtBase) | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };
    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */

    P.negated = function() {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };
    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */

    P.plus = function(y, b) {
      var t,
        x = this,
        a = x.s;
      y = new BigNumber(y, b);
      b = y.s; // Either NaN?

      if (!a || !b) return new BigNumber(NaN); // Signs differ?

      if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {
        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0); // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.

        if (!xc[0] || !yc[0])
          return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice(); // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.

      if ((a = xe - ye)) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();

        for (; a--; t.push(0)) {}

        t.reverse();
      }

      a = xc.length;
      b = yc.length; // Point xc to the longer array, and b to the shorter length.

      if (a - b < 0) (t = yc), (yc = xc), (xc = t), (b = a); // Only start adding at yc.length - 1 as the further digits of xc can be ignored.

      for (a = 0; b; ) {
        a = ((xc[--b] = xc[b] + yc[b] + a) / BASE) | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      } // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible

      return normalise(y, xc, ye);
    };
    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */

    P.precision = P.sd = function(sd, rm) {
      var c,
        n,
        v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);
        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if ((v = c[v])) {
        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--) {} // Add the number of digits of the first element.

        for (v = c[0]; v >= 10; v /= 10, n++) {}
      }

      if (sd && x.e + 1 > n) n = x.e + 1;
      return n;
    };
    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */

    P.shiftedBy = function(k) {
      intCheck(k, -MAX_SAFE_INTEGER$2, MAX_SAFE_INTEGER$2);
      return this.times('1e' + k);
    };
    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */

    P.squareRoot = P.sqrt = function() {
      var m,
        n,
        r,
        rep,
        t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5'); // Negative/NaN/Infinity/zero?

      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(
          !s || (s < 0 && (!c || c[0])) ? NaN : c ? x : 1 / 0
        );
      } // Initial estimate.

      s = Math.sqrt(+valueOf(x)); // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.

      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '1e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      } // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.

      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0; // Newton-Raphson iteration.

        for (;;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (
            coeffToString(t.c).slice(0, s) ===
            (n = coeffToString(r.c)).slice(0, s)
          ) {
            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1); // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.

            if (n == '9999' || (!rep && n == '4999')) {
              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {
              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || (!+n.slice(1) && n.charAt(0) == '5')) {
                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };
    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */

    P.toExponential = function(dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }

      return format(this, dp, rm, 1);
    };
    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */

    P.toFixed = function(dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }

      return format(this, dp, rm);
    };
    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */

    P.toFormat = function(dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error(bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;
        if (g2) (i = g1), (g1 = g2), (g2 = i), (len -= i);

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);

          for (; i < len; i += g1) {
            intPart += groupSeparator + intDigits.substr(i, g1);
          }

          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
          ? intPart +
            (format.decimalSeparator || '') +
            ((g2 = +format.fractionGroupSize)
              ? fractionPart.replace(
                  new RegExp('\\d{' + g2 + '}\\B', 'g'),
                  '$&' + (format.fractionGroupSeparator || '')
                )
              : fractionPart)
          : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };
    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */

    P.toFraction = function(md) {
      var d,
        d0,
        d1,
        d2,
        e,
        exp,
        n,
        n0,
        n1,
        q,
        r,
        s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md); // Throw if md is less than one or is not an integer, unless it is Infinity.

        if ((!n.isInteger() && (n.c || n.s !== 1)) || n.lt(ONE)) {
          throw Error(
            bignumberError +
              'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') +
              valueOf(n)
          );
        }
      }

      if (!xc) return new BigNumber(x);
      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc); // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.

      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;
      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s); // n0 = d1 = 0

      n0.c[0] = 0;

      for (;;) {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times((d2 = n1)));
        n0 = d2;
        d = n.minus(q.times((d2 = d)));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2; // Determine which fraction is closer to x, n0/d0 or n1/d1

      r =
        div(n1, d1, e, ROUNDING_MODE)
          .minus(x)
          .abs()
          .comparedTo(
            div(n0, d0, e, ROUNDING_MODE)
              .minus(x)
              .abs()
          ) < 1
          ? [n1, d1]
          : [n0, d0];
      MAX_EXP = exp;
      return r;
    };
    /*
     * Return the value of this BigNumber converted to a number primitive.
     */

    P.toNumber = function() {
      return +valueOf(this);
    };
    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */

    P.toPrecision = function(sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };
    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */

    P.toString = function(b) {
      var str,
        n = this,
        s = n.s,
        e = n.e; // Infinity or NaN?

      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str =
            e <= TO_EXP_NEG || e >= TO_EXP_POS
              ? toExponential(coeffToString(n.c), e)
              : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(
            toFixedPoint(coeffToString(n.c), e, '0'),
            10,
            b,
            s,
            true
          );
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };
    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */

    P.valueOf = P.toJSON = function() {
      return valueOf(this);
    };

    P._isBigNumber = true;
    P[Symbol.toStringTag] = 'BigNumber'; // Node.js v10.12.0+

    P[Symbol['for']('nodejs.util.inspect.custom')] = P.valueOf;
    if (configObject != null) BigNumber.set(configObject);
    return BigNumber;
  } // PRIVATE HELPER FUNCTIONS
  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.

  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  } // Return a coefficient array as a string of base 10 digits.

  function coeffToString(a) {
    var s,
      z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j; ) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;

      for (; z--; s = '0' + s) {}

      r += s;
    } // Determine trailing zeros.

    for (j = r.length; r.charCodeAt(--j) === 48; ) {}

    return r.slice(0, j + 1 || 1);
  } // Compare the value of BigNumbers x and y.

  function compare(x, y) {
    var a,
      b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e; // Either NaN?

    if (!i || !j) return null;
    a = xc && !xc[0];
    b = yc && !yc[0]; // Either zero?

    if (a || b) return a ? (b ? 0 : -j) : i; // Signs differ?

    if (i != j) return i;
    a = i < 0;
    b = k == l; // Either Infinity?

    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1; // Compare exponents.

    if (!b) return (k > l) ^ a ? 1 : -1;
    j = (k = xc.length) < (l = yc.length) ? k : l; // Compare digit by digit.

    for (i = 0; i < j; i++) {
      if (xc[i] != yc[i]) return (xc[i] > yc[i]) ^ a ? 1 : -1;
    } // Compare lengths.

    return k == l ? 0 : (k > l) ^ a ? 1 : -1;
  }
  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */

  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error(
        bignumberError +
          (name || 'Argument') +
          (typeof n == 'number'
            ? n < min || n > max
              ? ' out of range: '
              : ' not an integer: '
            : ' not a primitive number: ') +
          String(n)
      );
    }
  } // Assumes finite n.

  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }

  function toExponential(str, e) {
    return (
      (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
      (e < 0 ? 'e' : 'e+') +
      e
    );
  }

  function toFixedPoint(str, e, z) {
    var len, zs; // Negative exponent?

    if (e < 0) {
      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z) {}

      str = zs + str; // Positive exponent
    } else {
      len = str.length; // Append zeros.

      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z) {}

        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  } // EXPORT

  var BigNumber = /*#__PURE__*/ clone();

  var fromDecimal = function fromDecimal(decimal, factor) {
    if (factor === void 0) {
      factor = 18;
    }

    return new BigNumber(decimal)
      .div(new BigNumber('10').pow(new BigNumber(factor.toString())))
      .toString();
  };

  function useEffectAsync(effect, destroy, inputs) {
    var hasDestroy = typeof destroy === 'function';
    React.useEffect(
      function() {
        var result;
        var mounted = true;
        var maybePromise = effect(function() {
          return mounted;
        });
        Promise.resolve(maybePromise).then(function(value) {
          result = value;
        });
        return function() {
          mounted = false;

          if (hasDestroy) {
            destroy(result);
          }
        };
      },
      hasDestroy ? inputs : destroy
    );
  }

  var addDays = function addDays(datetime, days) {
    var date = new Date(datetime.getTime());
    date.setDate(date.getDate() + days);
    return date;
  };

  var getDates = function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = new Date(startDate.getTime());

    while (currentDate <= stopDate) {
      dateArray.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return dateArray;
  };
  var getClosestIndexByDate = function getClosestIndexByDate(
    dateList,
    targetDate
  ) {
    var tempDiff = dateList.map(function(d) {
      return Math.abs(moment(d).diff(moment(targetDate)));
    });
    var index = tempDiff.indexOf(Math.min.apply(Math, tempDiff));
    return index;
  };
  var getAverage = function getAverage(arr) {
    return (
      arr.reduce(function(p, c) {
        return p + c;
      }, 0) / arr.length
    );
  };

  var numeral = /*#__PURE__*/ createCommonjsModule(function(module) {
    /*! @preserve
     * numeral.js
     * version : 2.0.6
     * author : Adam Draper
     * license : MIT
     * http://adamwdraper.github.com/Numeral-js/
     */
    (function(global, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        global.numeral = factory();
      }
    })(commonjsGlobal, function() {
      /************************************
          Variables
      ************************************/
      var _numeral,
        _,
        VERSION = '2.0.6',
        formats = {},
        locales = {},
        defaults = {
          currentLocale: 'en',
          zeroFormat: null,
          nullFormat: null,
          defaultFormat: '0,0',
          scalePercentBy100: true,
        },
        options = {
          currentLocale: defaults.currentLocale,
          zeroFormat: defaults.zeroFormat,
          nullFormat: defaults.nullFormat,
          defaultFormat: defaults.defaultFormat,
          scalePercentBy100: defaults.scalePercentBy100,
        };
      /************************************
          Constructors
      ************************************/
      // Numeral prototype object

      function Numeral(input, number) {
        this._input = input;
        this._value = number;
      }

      _numeral = function numeral(input) {
        var value, kind, unformatFunction, regexp;

        if (_numeral.isNumeral(input)) {
          value = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
          value = 0;
        } else if (input === null || _.isNaN(input)) {
          value = null;
        } else if (typeof input === 'string') {
          if (options.zeroFormat && input === options.zeroFormat) {
            value = 0;
          } else if (
            (options.nullFormat && input === options.nullFormat) ||
            !input.replace(/[^0-9]+/g, '').length
          ) {
            value = null;
          } else {
            for (kind in formats) {
              regexp =
                typeof formats[kind].regexps.unformat === 'function'
                  ? formats[kind].regexps.unformat()
                  : formats[kind].regexps.unformat;

              if (regexp && input.match(regexp)) {
                unformatFunction = formats[kind].unformat;
                break;
              }
            }

            unformatFunction = unformatFunction || _numeral._.stringToNumber;
            value = unformatFunction(input);
          }
        } else {
          value = Number(input) || null;
        }

        return new Numeral(input, value);
      }; // version number

      _numeral.version = VERSION; // compare numeral object

      _numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
      }; // helper functions

      _numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function numberToFormat(
          value,
          format,
          roundingFunction
        ) {
          var locale = locales[_numeral.options.currentLocale],
            negP = false,
            optDec = false,
            leadingCount = 0,
            abbr = '',
            trillion = 1000000000000,
            billion = 1000000000,
            million = 1000000,
            thousand = 1000,
            decimal = '',
            neg = false,
            abbrForce,
            // force abbreviation
            abs,
            _int,
            precision,
            signed,
            thousands,
            output; // make sure we never format a null value

          value = value || 0;
          abs = Math.abs(value); // see if we should use parentheses for negative number or if we should prefix with a sign
          // if both are present we default to parentheses

          if (_numeral._.includes(format, '(')) {
            negP = true;
            format = format.replace(/[\(|\)]/g, '');
          } else if (
            _numeral._.includes(format, '+') ||
            _numeral._.includes(format, '-')
          ) {
            signed = _numeral._.includes(format, '+')
              ? format.indexOf('+')
              : value < 0
              ? format.indexOf('-')
              : -1;
            format = format.replace(/[\+|\-]/g, '');
          } // see if abbreviation is wanted

          if (_numeral._.includes(format, 'a')) {
            abbrForce = format.match(/a(k|m|b|t)?/);
            abbrForce = abbrForce ? abbrForce[1] : false; // check for space before abbreviation

            if (_numeral._.includes(format, ' a')) {
              abbr = ' ';
            }

            format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

            if ((abs >= trillion && !abbrForce) || abbrForce === 't') {
              // trillion
              abbr += locale.abbreviations.trillion;
              value = value / trillion;
            } else if (
              (abs < trillion && abs >= billion && !abbrForce) ||
              abbrForce === 'b'
            ) {
              // billion
              abbr += locale.abbreviations.billion;
              value = value / billion;
            } else if (
              (abs < billion && abs >= million && !abbrForce) ||
              abbrForce === 'm'
            ) {
              // million
              abbr += locale.abbreviations.million;
              value = value / million;
            } else if (
              (abs < million && abs >= thousand && !abbrForce) ||
              abbrForce === 'k'
            ) {
              // thousand
              abbr += locale.abbreviations.thousand;
              value = value / thousand;
            }
          } // check for optional decimals

          if (_numeral._.includes(format, '[.]')) {
            optDec = true;
            format = format.replace('[.]', '.');
          } // break number and format

          _int = value.toString().split('.')[0];
          precision = format.split('.')[1];
          thousands = format.indexOf(',');
          leadingCount = (
            format
              .split('.')[0]
              .split(',')[0]
              .match(/0/g) || []
          ).length;

          if (precision) {
            if (_numeral._.includes(precision, '[')) {
              precision = precision.replace(']', '');
              precision = precision.split('[');
              decimal = _numeral._.toFixed(
                value,
                precision[0].length + precision[1].length,
                roundingFunction,
                precision[1].length
              );
            } else {
              decimal = _numeral._.toFixed(
                value,
                precision.length,
                roundingFunction
              );
            }

            _int = decimal.split('.')[0];

            if (_numeral._.includes(decimal, '.')) {
              decimal = locale.delimiters.decimal + decimal.split('.')[1];
            } else {
              decimal = '';
            }

            if (optDec && Number(decimal.slice(1)) === 0) {
              decimal = '';
            }
          } else {
            _int = _numeral._.toFixed(value, 0, roundingFunction);
          } // check abbreviation again after rounding

          if (
            abbr &&
            !abbrForce &&
            Number(_int) >= 1000 &&
            abbr !== locale.abbreviations.trillion
          ) {
            _int = String(Number(_int) / 1000);

            switch (abbr) {
              case locale.abbreviations.thousand:
                abbr = locale.abbreviations.million;
                break;

              case locale.abbreviations.million:
                abbr = locale.abbreviations.billion;
                break;

              case locale.abbreviations.billion:
                abbr = locale.abbreviations.trillion;
                break;
            }
          } // format number

          if (_numeral._.includes(_int, '-')) {
            _int = _int.slice(1);
            neg = true;
          }

          if (_int.length < leadingCount) {
            for (var i = leadingCount - _int.length; i > 0; i--) {
              _int = '0' + _int;
            }
          }

          if (thousands > -1) {
            _int = _int
              .toString()
              .replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                '$1' + locale.delimiters.thousands
              );
          }

          if (format.indexOf('.') === 0) {
            _int = '';
          }

          output = _int + decimal + (abbr ? abbr : '');

          if (negP) {
            output =
              (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
          } else {
            if (signed >= 0) {
              output =
                signed === 0
                  ? (neg ? '-' : '+') + output
                  : output + (neg ? '-' : '+');
            } else if (neg) {
              output = '-' + output;
            }
          }

          return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber: function stringToNumber(string) {
          var locale = locales[options.currentLocale],
            stringOriginal = string,
            abbreviations = {
              thousand: 3,
              million: 6,
              billion: 9,
              trillion: 12,
            },
            abbreviation,
            value,
            regexp;

          if (options.zeroFormat && string === options.zeroFormat) {
            value = 0;
          } else if (
            (options.nullFormat && string === options.nullFormat) ||
            !string.replace(/[^0-9]+/g, '').length
          ) {
            value = null;
          } else {
            value = 1;

            if (locale.delimiters.decimal !== '.') {
              string = string
                .replace(/\./g, '')
                .replace(locale.delimiters.decimal, '.');
            }

            for (abbreviation in abbreviations) {
              regexp = new RegExp(
                '[^a-zA-Z]' +
                  locale.abbreviations[abbreviation] +
                  '(?:\\)|(\\' +
                  locale.currency.symbol +
                  ')?(?:\\))?)?$'
              );

              if (stringOriginal.match(regexp)) {
                value *= Math.pow(10, abbreviations[abbreviation]);
                break;
              }
            } // check for negative number

            value *=
              (string.split('-').length +
                Math.min(
                  string.split('(').length - 1,
                  string.split(')').length - 1
                )) %
              2
                ? 1
                : -1; // remove non numbers

            string = string.replace(/[^0-9\.]+/g, '');
            value *= Number(string);
          }

          return value;
        },
        isNaN: (function(_isNaN) {
          function isNaN(_x) {
            return _isNaN.apply(this, arguments);
          }

          isNaN.toString = function() {
            return _isNaN.toString();
          };

          return isNaN;
        })(function(value) {
          return typeof value === 'number' && isNaN(value);
        }),
        includes: function includes(string, search) {
          return string.indexOf(search) !== -1;
        },
        insert: function insert(string, subString, start) {
          return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function reduce(
          array,
          callback
          /*, initialValue*/
        ) {
          if (this === null) {
            throw new TypeError(
              'Array.prototype.reduce called on null or undefined'
            );
          }

          if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
          }

          var t = Object(array),
            len = t.length >>> 0,
            k = 0,
            value;

          if (arguments.length === 3) {
            value = arguments[2];
          } else {
            while (k < len && !(k in t)) {
              k++;
            }

            if (k >= len) {
              throw new TypeError(
                'Reduce of empty array with no initial value'
              );
            }

            value = t[k++];
          }

          for (; k < len; k++) {
            if (k in t) {
              value = callback(value, t[k], k, t);
            }
          }

          return value;
        },

        /**
         * Computes the multiplier necessary to make x >= 1,
         * effectively eliminating miscalculations caused by
         * finite precision.
         */
        multiplier: function multiplier(x) {
          var parts = x.toString().split('.');
          return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },

        /**
         * Given a variable number of arguments, returns the maximum
         * multiplier that must be used to normalize an operation involving
         * all of them.
         */
        correctionFactor: function correctionFactor() {
          var args = Array.prototype.slice.call(arguments);
          return args.reduce(function(accum, next) {
            var mn = _.multiplier(next);

            return accum > mn ? accum : mn;
          }, 1);
        },

        /**
         * Implementation of toFixed() that treats floats more like decimals
         *
         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
         * problems for accounting- and finance-related software.
         */
        toFixed: function toFixed(
          value,
          maxDecimals,
          roundingFunction,
          optionals
        ) {
          var splitValue = value.toString().split('.'),
            minDecimals = maxDecimals - (optionals || 0),
            boundedPrecision,
            optionalsRegExp,
            power,
            output; // Use the smallest precision value possible to avoid errors from floating point representation

          if (splitValue.length === 2) {
            boundedPrecision = Math.min(
              Math.max(splitValue[1].length, minDecimals),
              maxDecimals
            );
          } else {
            boundedPrecision = minDecimals;
          }

          power = Math.pow(10, boundedPrecision); // Multiply up by precision, round accurately, then divide and use native toFixed():

          output = (
            roundingFunction(value + 'e+' + boundedPrecision) / power
          ).toFixed(boundedPrecision);

          if (optionals > maxDecimals - boundedPrecision) {
            optionalsRegExp = new RegExp(
              '\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$'
            );
            output = output.replace(optionalsRegExp, '');
          }

          return output;
        },
      }; // avaliable options

      _numeral.options = options; // avaliable formats

      _numeral.formats = formats; // avaliable formats

      _numeral.locales = locales; // This function sets the current locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.

      _numeral.locale = function(key) {
        if (key) {
          options.currentLocale = key.toLowerCase();
        }

        return options.currentLocale;
      }; // This function provides access to the loaded locale data.  If
      // no arguments are passed in, it will simply return the current
      // global locale object.

      _numeral.localeData = function(key) {
        if (!key) {
          return locales[options.currentLocale];
        }

        key = key.toLowerCase();

        if (!locales[key]) {
          throw new Error('Unknown locale : ' + key);
        }

        return locales[key];
      };

      _numeral.reset = function() {
        for (var property in defaults) {
          options[property] = defaults[property];
        }
      };

      _numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof format === 'string' ? format : null;
      };

      _numeral.nullFormat = function(format) {
        options.nullFormat = typeof format === 'string' ? format : null;
      };

      _numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof format === 'string' ? format : '0.0';
      };

      _numeral.register = function(type, name, format) {
        name = name.toLowerCase();

        if (this[type + 's'][name]) {
          throw new TypeError(name + ' ' + type + ' already registered.');
        }

        this[type + 's'][name] = format;
        return format;
      };

      _numeral.validate = function(val, culture) {
        var _decimalSep,
          _thousandSep,
          _currSymbol,
          _valArray,
          _abbrObj,
          _thousandRegEx,
          localeData,
          temp; //coerce val to string

        if (typeof val !== 'string') {
          val += '';

          if (console.warn) {
            console.warn(
              'Numeral.js: Value is not string. It has been co-erced to: ',
              val
            );
          }
        } //trim whitespaces from either sides

        val = val.trim(); //if val is just digits return true

        if (!!val.match(/^\d+$/)) {
          return true;
        } //if val is empty return false

        if (val === '') {
          return false;
        } //get the decimal and thousands separator from numeral.localeData

        try {
          //check if the culture is understood by numeral. if not, default it to current locale
          localeData = _numeral.localeData(culture);
        } catch (e) {
          localeData = _numeral.localeData(_numeral.locale());
        } //setup the delimiters and currency symbol based on culture/locale

        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;

        if (localeData.delimiters.thousands === '.') {
          _thousandSep = '\\.';
        } else {
          _thousandSep = localeData.delimiters.thousands;
        } // validating currency symbol

        temp = val.match(/^[^\d]+/);

        if (temp !== null) {
          val = val.substr(1);

          if (temp[0] !== _currSymbol) {
            return false;
          }
        } //validating abbreviation symbol

        temp = val.match(/[^\d]+$/);

        if (temp !== null) {
          val = val.slice(0, -1);

          if (
            temp[0] !== _abbrObj.thousand &&
            temp[0] !== _abbrObj.million &&
            temp[0] !== _abbrObj.billion &&
            temp[0] !== _abbrObj.trillion
          ) {
            return false;
          }
        }

        _thousandRegEx = new RegExp(_thousandSep + '{2}');

        if (!val.match(/[^\d.,]/g)) {
          _valArray = val.split(_decimalSep);

          if (_valArray.length > 2) {
            return false;
          } else {
            if (_valArray.length < 2) {
              return (
                !!_valArray[0].match(/^\d+.*\d$/) &&
                !_valArray[0].match(_thousandRegEx)
              );
            } else {
              if (_valArray[0].length === 1) {
                return (
                  !!_valArray[0].match(/^\d+$/) &&
                  !_valArray[0].match(_thousandRegEx) &&
                  !!_valArray[1].match(/^\d+$/)
                );
              } else {
                return (
                  !!_valArray[0].match(/^\d+.*\d$/) &&
                  !_valArray[0].match(_thousandRegEx) &&
                  !!_valArray[1].match(/^\d+$/)
                );
              }
            }
          }
        }

        return false;
      };
      /************************************
          Numeral Prototype
      ************************************/

      _numeral.fn = Numeral.prototype = {
        clone: function clone() {
          return _numeral(this);
        },
        format: function format(inputString, roundingFunction) {
          var value = this._value,
            format = inputString || options.defaultFormat,
            kind,
            output,
            formatFunction; // make sure we have a roundingFunction

          roundingFunction = roundingFunction || Math.round; // format based on value

          if (value === 0 && options.zeroFormat !== null) {
            output = options.zeroFormat;
          } else if (value === null && options.nullFormat !== null) {
            output = options.nullFormat;
          } else {
            for (kind in formats) {
              if (format.match(formats[kind].regexps.format)) {
                formatFunction = formats[kind].format;
                break;
              }
            }

            formatFunction = formatFunction || _numeral._.numberToFormat;
            output = formatFunction(value, format, roundingFunction);
          }

          return output;
        },
        value: function value() {
          return this._value;
        },
        input: function input() {
          return this._input;
        },
        set: function set(value) {
          this._value = Number(value);
          return this;
        },
        add: function add(value) {
          var corrFactor = _.correctionFactor.call(null, this._value, value);

          function cback(accum, curr, currI, O) {
            return accum + Math.round(corrFactor * curr);
          }

          this._value = _.reduce([this._value, value], cback, 0) / corrFactor;
          return this;
        },
        subtract: function subtract(value) {
          var corrFactor = _.correctionFactor.call(null, this._value, value);

          function cback(accum, curr, currI, O) {
            return accum - Math.round(corrFactor * curr);
          }

          this._value =
            _.reduce([value], cback, Math.round(this._value * corrFactor)) /
            corrFactor;
          return this;
        },
        multiply: function multiply(value) {
          function cback(accum, curr, currI, O) {
            var corrFactor = _.correctionFactor(accum, curr);

            return (
              (Math.round(accum * corrFactor) * Math.round(curr * corrFactor)) /
              Math.round(corrFactor * corrFactor)
            );
          }

          this._value = _.reduce([this._value, value], cback, 1);
          return this;
        },
        divide: function divide(value) {
          function cback(accum, curr, currI, O) {
            var corrFactor = _.correctionFactor(accum, curr);

            return (
              Math.round(accum * corrFactor) / Math.round(curr * corrFactor)
            );
          }

          this._value = _.reduce([this._value, value], cback);
          return this;
        },
        difference: function difference(value) {
          return Math.abs(
            _numeral(this._value)
              .subtract(value)
              .value()
          );
        },
      };
      /************************************
          Default Locale && Format
      ************************************/

      _numeral.register('locale', 'en', {
        delimiters: {
          thousands: ',',
          decimal: '.',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: function ordinal(number) {
          var b = number % 10;
          return ~~((number % 100) / 10) === 1
            ? 'th'
            : b === 1
            ? 'st'
            : b === 2
            ? 'nd'
            : b === 3
            ? 'rd'
            : 'th';
        },
        currency: {
          symbol: '$',
        },
      });

      (function() {
        _numeral.register('format', 'bps', {
          regexps: {
            format: /(BPS)/,
            unformat: /(BPS)/,
          },
          format: function format(value, _format, roundingFunction) {
            var space = _numeral._.includes(_format, ' BPS') ? ' ' : '',
              output;
            value = value * 10000; // check for space before BPS

            _format = _format.replace(/\s?BPS/, '');
            output = _numeral._.numberToFormat(
              value,
              _format,
              roundingFunction
            );

            if (_numeral._.includes(output, ')')) {
              output = output.split('');
              output.splice(-1, 0, space + 'BPS');
              output = output.join('');
            } else {
              output = output + space + 'BPS';
            }

            return output;
          },
          unformat: function unformat(string) {
            return +(_numeral._.stringToNumber(string) * 0.0001).toFixed(15);
          },
        });
      })();

      (function() {
        var decimal = {
            base: 1000,
            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          },
          binary = {
            base: 1024,
            suffixes: [
              'B',
              'KiB',
              'MiB',
              'GiB',
              'TiB',
              'PiB',
              'EiB',
              'ZiB',
              'YiB',
            ],
          };
        var allSuffixes = decimal.suffixes.concat(
          binary.suffixes.filter(function(item) {
            return decimal.suffixes.indexOf(item) < 0;
          })
        );
        var unformatRegex = allSuffixes.join('|'); // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)

        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

        _numeral.register('format', 'bytes', {
          regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex),
          },
          format: function format(value, _format2, roundingFunction) {
            var output,
              bytes = _numeral._.includes(_format2, 'ib') ? binary : decimal,
              suffix =
                _numeral._.includes(_format2, ' b') ||
                _numeral._.includes(_format2, ' ib')
                  ? ' '
                  : '',
              power,
              min,
              max; // check for space before

            _format2 = _format2.replace(/\s?i?b/, '');

            for (power = 0; power <= bytes.suffixes.length; power++) {
              min = Math.pow(bytes.base, power);
              max = Math.pow(bytes.base, power + 1);

              if (
                value === null ||
                value === 0 ||
                (value >= min && value < max)
              ) {
                suffix += bytes.suffixes[power];

                if (min > 0) {
                  value = value / min;
                }

                break;
              }
            }

            output = _numeral._.numberToFormat(
              value,
              _format2,
              roundingFunction
            );
            return output + suffix;
          },
          unformat: function unformat(string) {
            var value = _numeral._.stringToNumber(string),
              power,
              bytesMultiplier;

            if (value) {
              for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                if (_numeral._.includes(string, decimal.suffixes[power])) {
                  bytesMultiplier = Math.pow(decimal.base, power);
                  break;
                }

                if (_numeral._.includes(string, binary.suffixes[power])) {
                  bytesMultiplier = Math.pow(binary.base, power);
                  break;
                }
              }

              value *= bytesMultiplier || 1;
            }

            return value;
          },
        });
      })();

      (function() {
        _numeral.register('format', 'currency', {
          regexps: {
            format: /(\$)/,
          },
          format: function format(value, _format3, roundingFunction) {
            var locale = _numeral.locales[_numeral.options.currentLocale],
              symbols = {
                before: _format3.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                after: _format3.match(/([\+|\-|\)|\s|\$]*)$/)[0],
              },
              output,
              symbol,
              i; // strip format of spaces and $

            _format3 = _format3.replace(/\s?\$\s?/, ''); // format the number

            output = _numeral._.numberToFormat(
              value,
              _format3,
              roundingFunction
            ); // update the before and after based on value

            if (value >= 0) {
              symbols.before = symbols.before.replace(/[\-\(]/, '');
              symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (
              value < 0 &&
              !_numeral._.includes(symbols.before, '-') &&
              !_numeral._.includes(symbols.before, '(')
            ) {
              symbols.before = '-' + symbols.before;
            } // loop through each before symbol

            for (i = 0; i < symbols.before.length; i++) {
              symbol = symbols.before[i];

              switch (symbol) {
                case '$':
                  output = _numeral._.insert(output, locale.currency.symbol, i);
                  break;

                case ' ':
                  output = _numeral._.insert(
                    output,
                    ' ',
                    i + locale.currency.symbol.length - 1
                  );
                  break;
              }
            } // loop through each after symbol

            for (i = symbols.after.length - 1; i >= 0; i--) {
              symbol = symbols.after[i];

              switch (symbol) {
                case '$':
                  output =
                    i === symbols.after.length - 1
                      ? output + locale.currency.symbol
                      : _numeral._.insert(
                          output,
                          locale.currency.symbol,
                          -(symbols.after.length - (1 + i))
                        );
                  break;

                case ' ':
                  output =
                    i === symbols.after.length - 1
                      ? output + ' '
                      : _numeral._.insert(
                          output,
                          ' ',
                          -(
                            symbols.after.length -
                            (1 + i) +
                            locale.currency.symbol.length -
                            1
                          )
                        );
                  break;
              }
            }

            return output;
          },
        });
      })();

      (function() {
        _numeral.register('format', 'exponential', {
          regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/,
          },
          format: function format(value, _format4, roundingFunction) {
            var output,
              exponential =
                typeof value === 'number' && !_numeral._.isNaN(value)
                  ? value.toExponential()
                  : '0e+0',
              parts = exponential.split('e');
            _format4 = _format4.replace(/e[\+|\-]{1}0/, '');
            output = _numeral._.numberToFormat(
              Number(parts[0]),
              _format4,
              roundingFunction
            );
            return output + 'e' + parts[1];
          },
          unformat: function unformat(string) {
            var parts = _numeral._.includes(string, 'e+')
                ? string.split('e+')
                : string.split('e-'),
              value = Number(parts[0]),
              power = Number(parts[1]);
            power = _numeral._.includes(string, 'e-') ? (power *= -1) : power;

            function cback(accum, curr, currI, O) {
              var corrFactor = _numeral._.correctionFactor(accum, curr),
                num =
                  (accum * corrFactor * (curr * corrFactor)) /
                  (corrFactor * corrFactor);

              return num;
            }

            return _numeral._.reduce([value, Math.pow(10, power)], cback, 1);
          },
        });
      })();

      (function() {
        _numeral.register('format', 'ordinal', {
          regexps: {
            format: /(o)/,
          },
          format: function format(value, _format5, roundingFunction) {
            var locale = _numeral.locales[_numeral.options.currentLocale],
              output,
              ordinal = _numeral._.includes(_format5, ' o') ? ' ' : ''; // check for space before

            _format5 = _format5.replace(/\s?o/, '');
            ordinal += locale.ordinal(value);
            output = _numeral._.numberToFormat(
              value,
              _format5,
              roundingFunction
            );
            return output + ordinal;
          },
        });
      })();

      (function() {
        _numeral.register('format', 'percentage', {
          regexps: {
            format: /(%)/,
            unformat: /(%)/,
          },
          format: function format(value, _format6, roundingFunction) {
            var space = _numeral._.includes(_format6, ' %') ? ' ' : '',
              output;

            if (_numeral.options.scalePercentBy100) {
              value = value * 100;
            } // check for space before %

            _format6 = _format6.replace(/\s?\%/, '');
            output = _numeral._.numberToFormat(
              value,
              _format6,
              roundingFunction
            );

            if (_numeral._.includes(output, ')')) {
              output = output.split('');
              output.splice(-1, 0, space + '%');
              output = output.join('');
            } else {
              output = output + space + '%';
            }

            return output;
          },
          unformat: function unformat(string) {
            var number = _numeral._.stringToNumber(string);

            if (_numeral.options.scalePercentBy100) {
              return number * 0.01;
            }

            return number;
          },
        });
      })();

      (function() {
        _numeral.register('format', 'time', {
          regexps: {
            format: /(:)/,
            unformat: /(:)/,
          },
          format: function format(value, _format7, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
              minutes = Math.floor((value - hours * 60 * 60) / 60),
              seconds = Math.round(value - hours * 60 * 60 - minutes * 60);
            return (
              hours +
              ':' +
              (minutes < 10 ? '0' + minutes : minutes) +
              ':' +
              (seconds < 10 ? '0' + seconds : seconds)
            );
          },
          unformat: function unformat(string) {
            var timeArray = string.split(':'),
              seconds = 0; // turn hours and minutes into seconds and add them all up

            if (timeArray.length === 3) {
              // hours
              seconds = seconds + Number(timeArray[0]) * 60 * 60; // minutes

              seconds = seconds + Number(timeArray[1]) * 60; // seconds

              seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
              // minutes
              seconds = seconds + Number(timeArray[0]) * 60; // seconds

              seconds = seconds + Number(timeArray[1]);
            }

            return Number(seconds);
          },
        });
      })();

      return _numeral;
    });
  });

  /** Start of number formatting */

  var numeralFormat = '0,0.00';

  if (!numeral['locales']['hero']) {
    numeral.register('locale', 'hero', {
      delimiters: {
        thousands: '.',
        decimal: ',',
      },
      abbreviations: {
        thousand: 'k',
        million: 'mm',
        billion: 'b',
        trillion: 't',
      },
      ordinal: function ordinal(number) {
        var b = number % 10;
        return b === 1 || b === 3
          ? 'er'
          : b === 2
          ? 'do'
          : b === 7 || b === 0
          ? 'mo'
          : b === 8
          ? 'vo'
          : b === 9
          ? 'no'
          : 'to';
      },
      currency: {
        symbol: '€',
      },
    });
  }

  numeral.locale('hero');
  numeral.defaultFormat(numeralFormat);

  var chartBackground = {
    beforeDraw: function beforeDraw(chart, _easing) {
      if (
        chart.config.options.chartArea &&
        chart.config.options.chartArea.backgroundColor
      ) {
        var ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;
        ctx.save();
        ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
        ctx.fillRect(
          chartArea.left,
          chartArea.top,
          chartArea.right - chartArea.left,
          chartArea.bottom - chartArea.top
        );
        ctx.restore();
      }
    },
  };
  var todayVerticalLine = {
    afterDatasetsDraw: function afterDatasetsDraw(chart, _easing) {
      var meta = chart.getDatasetMeta(0);
      var x = meta.data[chart.options.lineAtIndex[0]]._model.x;
      var todayX;
      var todayOverX = 25;

      if (
        chart.options.lineAtIndex[0] + 1 <=
        chart.data.datasets[0].data.length / 2
      ) {
        todayX = x + todayOverX;
      } else {
        todayX = x - todayOverX;
      }

      var topY = chart.scales['y-axis-0'].top;
      var bottomY = chart.scales['y-axis-0'].bottom; // draw line

      chart.ctx.save();
      chart.ctx.beginPath();
      chart.ctx.moveTo(x, topY);
      chart.ctx.lineTo(x, bottomY);
      chart.ctx.lineWidth = 1;
      chart.ctx.strokeStyle = '#ADADAD'; // write TODAY

      chart.ctx.textAlign = 'center';
      chart.ctx.fillStyle = '#7797AA';
      chart.ctx.fillText('Today', todayX, topY + 20);
      chart.ctx.stroke();
      chart.ctx.restore();
    },
  };

  var DAI_ADDRESS = env.REACT_APP_DAI_ADDRESS;
  var IMAGES_PATH = env.REACT_APP_HOST_IMAGES + '/images/';
  var ERC20_LOGOS = {
    DAI: IMAGES_PATH + 'coins/coin-dai.svg',
    PAX: IMAGES_PATH + 'coins/coin-pax.svg',
    USDT: IMAGES_PATH + 'coins/coin-theter.svg',
    TUSD: IMAGES_PATH + 'coins/coin-trueusd.svg',
    USDC: IMAGES_PATH + 'coins/coin-usdc.svg',
  };
  var COMPANY_LOGOS = {
    Compound: IMAGES_PATH + 'companies/compound-logo.png',
    Maker: IMAGES_PATH + 'companies/maker.svg',
    Raise: IMAGES_PATH + 'isotype.png',
    dYdX: IMAGES_PATH + 'companies/dydx-vector-logo.png',
    Fulcrum: IMAGES_PATH + 'companies/bZx-Logo.jpg',
  };

  var datasetToGraph = function datasetToGraph(
    dataset,
    rgb,
    label,
    fill,
    borderWidth,
    dashed,
    pointHover,
    pointRadius
  ) {
    return {
      label: label,
      fill: fill,
      lineTension: 0.4,
      backgroundColor: 'rgba(' + rgb + ',0.4)',
      borderColor: 'rgba(' + rgb + ',1)',
      borderCapStyle: 'butt',
      borderDash: !dashed ? [] : [10, 5],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(' + rgb + ',1)',
      pointBackgroundColor: 'rgba(' + rgb + ',1)',
      pointBorderWidth: 0,
      pointRadius: 0,
      pointHoverRadius: pointRadius,
      borderWidth: !borderWidth ? 1 : borderWidth,
      pointHoverBackgroundColor: pointHover.length
        ? pointHover.map(function(x) {
            return x > 0 ? 'rgba(' + rgb + ',1)' : 'rgba(' + rgb + ',0)';
          })
        : 'rgba(' + rgb + ',1)',
      pointHoverBorderColor: pointHover.length
        ? pointHover.map(function(x) {
            return x > 0 ? 'rgba(' + rgb + ',1)' : 'rgba(' + rgb + ',0)';
          })
        : 'rgba(' + rgb + ',1)',
      pointHoverBorderWidth: pointHover.length ? pointHover : 2,
      pointHitRadius: 10,
      data: [].concat(dataset),
    };
  };

  var options = {
    fullCompoundDataset: [0],
    legend: {
      display: false,
      position: 'top',
      labels: {
        boxWidth: 22,
        fontSize: 12,
        padding: 5,
      },
    },
    chartArea: {
      backgroundColor: 'rgba(248,248,248,1)',
    },
    lineAtIndex: [0],
    onHover: function onHover() {},
    layout: {
      padding: {
        left: 5,
        right: 5,
      },
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      enabled: false,
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
          display: false,
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
            min: 0,
            max: 21,
            stepSize: 1,
          },
          display: false,
        },
      ],
    },
  };

  var getRaiseDataset = function getRaiseDataset(
    dates,
    auctionStart,
    auctionEnd,
    maxInterest,
    minInterest
  ) {
    return dates.map(function(d) {
      return (
        ((maxInterest - minInterest) *
          Math.abs(d.valueOf() - auctionStart.valueOf())) /
          Math.abs(auctionEnd.valueOf() - auctionStart.valueOf()) +
        minInterest
      );
    });
  };

  var APRGraph = function APRGraph(_ref) {
    var maxInterestRate = _ref.maxInterestRate,
      minInterestRate = _ref.minInterestRate,
      auctionStartTimestamp = _ref.auctionStartTimestamp,
      auctionEndTimestamp = _ref.auctionEndTimestamp,
      currentAPR = _ref.currentAPR,
      onOpenGraph = _ref.onOpenGraph;

    var _useState = React.useState([0]),
      compoundDataset = _useState[0],
      setCompoundDataset = _useState[1];

    var _useState2 = React.useState([0]),
      fullCompoundDataset = _useState2[0],
      setFullCompoundDataset = _useState2[1];

    var _useState3 = React.useState(['0%', '0%']),
      _useState3$ = _useState3[0],
      currentLoanInterest = _useState3$[0],
      compoundInterest = _useState3$[1],
      setInterest = _useState3[1];

    var _useState4 = React.useState(new Date()),
      selectedDate = _useState4[0],
      setSelectedDate = _useState4[1];

    var medianCompoundRate = getAverage(fullCompoundDataset);
    var medianCompoundRateNumeral = numeral(medianCompoundRate / 100).format(
      '0.00%'
    );
    var maxInterest = Number(fromDecimal(maxInterestRate.toString())) * 12;
    var minInterest = minInterestRate
      ? Number(fromDecimal(minInterestRate.toString())) * 12
      : 0;
    var dateStart = new Date(auctionStartTimestamp * 1000);
    var dateEnd = new Date(auctionEndTimestamp * 1000);
    var dateNow = new Date();
    var arrayDays = getDates(dateStart, dateEnd);
    var nowIndex = getClosestIndexByDate(arrayDays, dateNow);
    var raiseDataset = getRaiseDataset(
      arrayDays,
      dateStart,
      dateEnd,
      maxInterest,
      minInterest
    );
    var raiseGraphData = datasetToGraph(
      raiseDataset,
      '0, 218, 158',
      'Raise',
      false,
      3,
      false,
      [],
      5
    );
    var compoundGraphData = datasetToGraph(
      compoundDataset,
      '119,151,170',
      'Compound',
      true,
      1,
      false,
      [],
      3
    );
    var avgGraphData = datasetToGraph(
      Array(arrayDays.length).fill(medianCompoundRate),
      '119,151,170',
      'Compound 30 day avg',
      false,
      2,
      true,
      [],
      3
    );
    var graphData = {
      labels: arrayDays,
      datasets: [raiseGraphData, compoundGraphData, avgGraphData],
    };
    useEffectAsync(function() {
      try {
        Chart.pluginService.register(todayVerticalLine);
        Chart.pluginService.register(chartBackground);
        /**
         * Compound DAI rate api call, latest 30 day
         */

        return Promise.resolve(
          axios$1.get(
            'https://api.compound.finance/api/v2/market_history/graph',
            {
              params: {
                asset: DAI_ADDRESS,
                min_block_timestamp: moment()
                  .subtract(arrayDays.length, 'day')
                  .unix(),
                max_block_timestamp: moment().unix(),
                num_buckets: arrayDays.length,
              },
            }
          )
        ).then(function(response) {
          if (
            response.status === 200 &&
            response.data.supply_rates &&
            response.data.supply_rates.length
          ) {
            var supplyRates = response.data.supply_rates;
            var length = supplyRates.length;
            var estDataset = supplyRates.map(function(_ref2) {
              var rate = _ref2.rate;
              return rate * 100;
            });
            var currentDataset = estDataset.slice(length - nowIndex - 1);
            setFullCompoundDataset(estDataset);
            setCompoundDataset(currentDataset);
            setInterest([
              currentAPR,
              numeral(currentDataset[nowIndex] / 100).format('0.00%'),
            ]);
          }
        });
      } catch (e) {
        return Promise.reject(e);
      }
    }, []);
    options.lineAtIndex = [nowIndex];

    var updateHover = function updateHover(_event, datapoint) {
      // Return current index to be able to show tooltip outside canvas
      if (!datapoint.length) {
        setSelectedDate(dateNow);
        setInterest([
          currentAPR,
          numeral(compoundDataset[nowIndex] / 100).format('0.00%'),
        ]);
        return;
      } // Return current index to be able to show tooltip outside canvas

      if (datapoint.length) {
        var index = datapoint[0]._index;
        setSelectedDate(arrayDays[index]);
        var currentAPRGraph =
          index === nowIndex
            ? currentAPR
            : numeral(raiseDataset[index] / 100).format('0.00%');
        setInterest([
          currentAPRGraph,
          index > nowIndex
            ? medianCompoundRateNumeral
            : numeral(compoundDataset[index] / 100).format('0.00%'),
        ]);
      }
    };

    options.onHover = updateHover;
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        Header$1,
        null,
        React__default.createElement(
          Title,
          null,
          React__default.createElement('span', null, 'Compare APRs')
        ),
        React__default.createElement(
          IconContainer,
          null,
          React__default.createElement(semanticUiReact.Icon, {
            name: 'close',
            size: 'large',
            onClick: onOpenGraph,
          })
        )
      ),
      React__default.createElement(
        Card.Grid,
        null,
        React__default.createElement(Card.Row, {
          notop: true,
          big: true,
          content: moment(selectedDate).format('LL'),
        }),
        React__default.createElement(Card.Vertical, null),
        React__default.createElement(Card.Row, {
          notop: true,
          big: true,
          title: 'Raise',
          content: currentLoanInterest,
          contentColor: raiseGraphData.borderColor,
        }),
        React__default.createElement(Card.Vertical, null),
        React__default.createElement(Card.Row, {
          notop: true,
          big: true,
          title: 'Compound',
          content: compoundInterest,
          contentColor: compoundGraphData.borderColor,
        })
      ),
      React__default.createElement(Line, {
        data: graphData,
        options: options,
        height: 245,
      })
    );
  };

  function _templateObject$3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 22px;\n  &&& > div:first-child {\n    margin-left: 5px;\n  }\n  &&& > span:last-child {\n    margin-left: 9px;\n    color: #5a5a5a;\n    font-size: 14px;\n    font-weight: bold;\n  }\n',
    ]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var AmountComponent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject$3()
  );

  var REACT_APP_HOST_IMAGES = 'https://static.raise.it';

  var Amount = function Amount(_ref) {
    var principal = _ref.principal,
      roi = _ref.roi,
      coinIcon = _ref.coinIcon;
    return React__default.createElement(
      AmountComponent,
      null,
      principal,
      React__default.createElement(Coin, {
        src: REACT_APP_HOST_IMAGES + '/images/coins/' + coinIcon,
      }),
      roi && React__default.createElement('span', null, roi, ' ROI')
    );
  };

  function _templateObject4$1() {
    var data = _taggedTemplateLiteralLoose(['\n  background: #ffffff;\n']);

    _templateObject4$1 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding-right: 10px;\n  width: 30%;\n  height: auto;\n  color: #b1b3b9;\n  cursor: pointer;\n',
    ]);

    _templateObject3$2 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 151px;\n  height: 56px;\n  background-image: ',
      ';\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 40%;\n',
    ]);

    _templateObject2$3 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$4() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: stretch;\n  border-bottom: 1px solid #c5c7cb;\n  padding: 10px 0;\n\n  margin-top: 8px;\n',
    ]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var TopSection = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject$4());
  var Logo = /*#__PURE__*/ styled.a(
    /*#__PURE__*/ _templateObject2$3(),
    function(_ref) {
      var src = _ref.src;
      return 'url(' + src + ')';
    }
  );
  var MenuSpots = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject3$2());
  var Container = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject4$1());

  var CardTopSection = function CardTopSection(props) {
    var href = props.href,
      src = props.src,
      onOpenGraph = props.onOpenGraph;
    return React__default.createElement(
      Container,
      null,
      React__default.createElement(
        TopSection,
        null,
        React__default.createElement(Logo, {
          src: src,
          href: href,
        }),
        React__default.createElement(
          MenuSpots,
          null,
          React__default.createElement(semanticUiReact.Icon, {
            name: 'ellipsis vertical',
            size: 'large',
            onClick: onOpenGraph,
          })
        )
      )
    );
  };

  var InvestInfo = function InvestInfo(props) {
    var companyName = props.companyName,
      shortDescription = props.shortDescription,
      logo = props.logo,
      slug = props.slug,
      currentAmount = props.currentAmount,
      totalAmount = props.totalAmount,
      maxAmount = props.maxAmount,
      times = props.times,
      principal = props.principal,
      link = props.link,
      coinIcon = props.coinIcon,
      onOpenGraph = props.onOpenGraph;
    var auctionTimeLeft = times.auctionTimeLeft + ' left';
    var aProps = {
      href: undefined,
    };
    var toProps = {
      to: undefined,
    };

    if (link) {
      aProps.href = slug;
      toProps.to = slug;
    }

    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(CardTopSection, {
        src: logo,
        onOpenGraph: onOpenGraph,
        href: aProps.href,
      }),
      React__default.createElement(
        CardContent$1,
        Object.assign({}, toProps, {
          topRight: auctionTimeLeft,
        }),
        React__default.createElement(
          'a',
          Object.assign({}, aProps),
          React__default.createElement(Card.BorrowerTitle, null, companyName),
          React__default.createElement(Card.Description, null, shortDescription)
        ),
        React__default.createElement(
          Card.Grid,
          {
            spaceBetween: true,
            alignBottom: true,
            nobottom: true,
          },
          React__default.createElement(Card.Header, {
            title: 'Raised so far',
            amount: React__default.createElement(Amount, {
              principal: principal,
              coinIcon: coinIcon,
            }),
          }),
          React__default.createElement(Card.Header, {
            title: 'Target',
            amount: React__default.createElement(Amount, {
              principal: maxAmount,
              coinIcon: coinIcon,
            }),
          })
        ),
        React__default.createElement(Card.Progress, {
          color: '#eb3f93',
          currentAmount: currentAmount,
          totalAmount: totalAmount,
        })
      )
    );
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var _assign = function __assign() {
    _assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

    return _assign.apply(this, arguments);
  };

  function __rest(s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  }

  var uid = function uid() {
    return Math.random()
      .toString(36)
      .substring(2);
  };

  var Svg = function Svg(_a) {
    var rtl = _a.rtl,
      speed = _a.speed,
      interval = _a.interval,
      style = _a.style,
      width = _a.width,
      height = _a.height,
      baseUrl = _a.baseUrl,
      gradientRatio = _a.gradientRatio,
      animate = _a.animate,
      ariaLabel = _a.ariaLabel,
      children = _a.children,
      className = _a.className,
      uniquekey = _a.uniquekey,
      primaryColor = _a.primaryColor,
      primaryOpacity = _a.primaryOpacity,
      secondaryColor = _a.secondaryColor,
      secondaryOpacity = _a.secondaryOpacity,
      preserveAspectRatio = _a.preserveAspectRatio,
      props = __rest(_a, [
        'rtl',
        'speed',
        'interval',
        'style',
        'width',
        'height',
        'baseUrl',
        'gradientRatio',
        'animate',
        'ariaLabel',
        'children',
        'className',
        'uniquekey',
        'primaryColor',
        'primaryOpacity',
        'secondaryColor',
        'secondaryOpacity',
        'preserveAspectRatio',
      ]);

    var idClip = uniquekey ? uniquekey + '-idClip' : uid();
    var idGradient = uniquekey ? uniquekey + '-idGradient' : uid();
    var rtlStyle = rtl
      ? {
          transform: 'scaleX(-1)',
        }
      : {};
    var keyTimes = '0; ' + interval + '; 1';
    var dur = speed + 's';
    return React.createElement(
      'svg',
      _assign(
        {
          role: 'img',
          style: _assign(_assign({}, style), rtlStyle),
          className: className,
          'aria-label': ariaLabel ? ariaLabel : null,
          viewBox: '0 0 ' + width + ' ' + height,
          preserveAspectRatio: preserveAspectRatio,
        },
        props
      ),
      ariaLabel ? React.createElement('title', null, ariaLabel) : null,
      React.createElement('rect', {
        x: '0',
        y: '0',
        width: width,
        height: height,
        clipPath: 'url(' + baseUrl + '#' + idClip + ')',
        style: {
          fill: 'url(' + baseUrl + '#' + idGradient + ')',
        },
      }),
      React.createElement(
        'defs',
        null,
        React.createElement(
          'clipPath',
          {
            id: idClip,
          },
          children
        ),
        React.createElement(
          'linearGradient',
          {
            id: idGradient,
          },
          React.createElement(
            'stop',
            {
              offset: '0%',
              stopColor: primaryColor,
              stopOpacity: primaryOpacity,
            },
            animate &&
              React.createElement('animate', {
                attributeName: 'offset',
                values: -gradientRatio + '; ' + -gradientRatio + '; 1',
                keyTimes: keyTimes,
                dur: dur,
                repeatCount: 'indefinite',
              })
          ),
          React.createElement(
            'stop',
            {
              offset: '50%',
              stopColor: secondaryColor,
              stopOpacity: secondaryOpacity,
            },
            animate &&
              React.createElement('animate', {
                attributeName: 'offset',
                values:
                  -gradientRatio / 2 +
                  '; ' +
                  -gradientRatio / 2 +
                  '; ' +
                  (1 + gradientRatio / 2),
                keyTimes: keyTimes,
                dur: dur,
                repeatCount: 'indefinite',
              })
          ),
          React.createElement(
            'stop',
            {
              offset: '100%',
              stopColor: primaryColor,
              stopOpacity: primaryOpacity,
            },
            animate &&
              React.createElement('animate', {
                attributeName: 'offset',
                values: '0; 0; ' + (1 + gradientRatio),
                keyTimes: keyTimes,
                dur: dur,
                repeatCount: 'indefinite',
              })
          )
        )
      )
    );
  };

  var defaultProps = {
    animate: true,
    ariaLabel: 'Loading interface...',
    baseUrl: '',
    gradientRatio: 2,
    height: 130,
    interval: 0.25,
    preserveAspectRatio: 'none',
    primaryColor: '#f0f0f0',
    primaryOpacity: 1,
    rtl: false,
    secondaryColor: '#e0e0e0',
    secondaryOpacity: 1,
    speed: 2,
    style: {},
    width: 400,
  };

  var InitialComponent = function InitialComponent(props) {
    return React.createElement('rect', {
      x: '0',
      y: '0',
      rx: '5',
      ry: '5',
      width: props.width,
      height: props.height,
    });
  };

  var ContentLoader = function ContentLoader(props) {
    var mergedProps = _assign(_assign({}, defaultProps), props);

    return React.createElement(
      Svg,
      _assign({}, mergedProps),
      props.children ||
        React.createElement(InitialComponent, _assign({}, mergedProps))
    );
  };

  function _templateObject$5() {
    var data = _taggedTemplateLiteralLoose([
      '\n  max-width: 372px;\n  width: 100%;\n  height: 470px;\n  margin: 0px !important;\n  padding: 0px !important;\n',
    ]);

    _templateObject$5 = function _templateObject() {
      return data;
    };

    return data;
  }
  var CardSegment = /*#__PURE__*/ styled(semanticUiReact.Segment)(
    /*#__PURE__*/ _templateObject$5()
  );

  var CardPlaceholder = function CardPlaceholder() {
    return React__default.createElement(
      CardSegment,
      {
        raised: true,
      },
      React__default.createElement(
        ContentLoader,
        {
          height: 490,
          width: 372,
          speed: 1,
          primaryColor: '#fef4f9',
          secondaryColor: '#faf1f1',
        },
        React__default.createElement('rect', {
          x: '0',
          y: '0',
          rx: '5',
          ry: '5',
          width: '372',
          height: '124',
        }),
        React__default.createElement('rect', {
          x: '10',
          y: '180',
          rx: '3',
          ry: '3',
          width: '350',
          height: '10',
        }),
        React__default.createElement('rect', {
          x: '10',
          y: '200',
          rx: '3',
          ry: '3',
          width: '340',
          height: '10',
        }),
        React__default.createElement('rect', {
          x: '10',
          y: '220',
          rx: '3',
          ry: '3',
          width: '345',
          height: '10',
        }),
        React__default.createElement('rect', {
          x: '10',
          y: '240',
          rx: '3',
          ry: '3',
          width: '201',
          height: '10',
        }),
        React__default.createElement('rect', {
          x: '10',
          y: '410',
          rx: '3',
          ry: '3',
          width: '350',
          height: '50',
        })
      )
    );
  };

  var InvestCardView = function InvestCardView(props) {
    var companyName = props.companyName,
      children = props.children,
      className = props.className,
      currentAPR = props.currentAPR,
      times = props.times,
      investorCount = props.investorCount;

    var _useState = React.useState(0),
      viewGraph = _useState[0],
      setGraphView = _useState[1];

    var onOpenGraph = function onOpenGraph() {
      setGraphView(viewGraph ? 0 : 1);
    };

    var AuctionGraph = React__default.createElement(
      APRGraph,
      Object.assign(
        {
          onOpenGraph: onOpenGraph,
        },
        props
      )
    );
    var domList = [
      {
        key: 0,
        component: React__default.createElement(
          InvestInfo,
          Object.assign(
            {
              onOpenGraph: onOpenGraph,
            },
            props
          )
        ),
      },
      {
        key: 1,
        component: AuctionGraph,
      },
    ];

    var _useState2 = React.useState(viewGraph),
      previousTab = _useState2[0],
      setPreviousTab = _useState2[1];

    var transitions = useTransition(
      domList[viewGraph],
      function(i) {
        return i.key;
      },
      {
        unique: true,
        from: function from() {
          return {
            transform:
              'translate3d(0,' + (viewGraph - previousTab) * 100 + '%, 0)',
            position: 'static',
          };
        },
        enter: {
          transform: 'translate3d(0%,0,0)',
          position: 'static',
        },
        leave: function leave() {
          return {
            transform:
              'translate3d(0,' + (previousTab - viewGraph) * 100 + '%,0)',
            position: 'absolute',
          };
        },
      }
    );

    if (!companyName) {
      return React__default.createElement(CardPlaceholder, null);
    }

    if (viewGraph !== previousTab) setPreviousTab(viewGraph);
    return React__default.createElement(
      InvestCardBody,
      {
        style: {
          overflow: 'hidden',
        },
        className: className,
      },
      React__default.createElement(
        'div',
        {
          style: {
            overflow: 'hidden',
            height: '100%',
            zIndex: 3,
            position: 'relative',
          },
        },
        transitions.map(function(_ref) {
          var item = _ref.item,
            key = _ref.key,
            props = _ref.props;
          return React__default.createElement(
            extendedAnimated.div,
            {
              style: props,
              key: key,
            },
            item.component
          );
        }),
        React__default.createElement(
          Card.Grid,
          {
            alignCenter: true,
          },
          React__default.createElement(Card.Row, {
            notop: true,
            small: true,
            title: 'Current APR',
            content: currentAPR,
          }),
          React__default.createElement(Card.Vertical, null),
          React__default.createElement(Card.Row, {
            notop: true,
            small: true,
            title: 'Investors',
            content: investorCount,
          }),
          React__default.createElement(Card.Vertical, null),
          React__default.createElement(Card.Row, {
            notop: true,
            small: true,
            title: 'Days Left',
            content: times.auctionTimeLeft,
          }),
          React__default.createElement(Card.Row, {
            small: true,
            title: 'Loan Term',
            content: times.loanTerm,
          })
        )
      ),
      React__default.createElement(CardBottom, null, children)
    );
  };

  var PAD_VALUE = /*#__PURE__*/ Symbol('PadValueType');

  var _ = /*#__PURE__*/ Symbol('UnderscoreType');

  var ANY = _;
  var HEAD = /*#__PURE__*/ Symbol('HeadType');
  var TAIL = /*#__PURE__*/ Symbol('TailType');
  var REST = TAIL;

  function isValue(x) {
    if (x === null || x === undefined) return true;
    var t = typeof x;
    return t === 'number' || t === 'string' || t === 'boolean';
  }

  function isObject$2(x) {
    return x instanceof Object && !Array.isArray(x) && !isValue(x);
  }

  function run(action, x) {
    if (isValue(action)) {
      return action;
    } else if (action instanceof Function) {
      return action.apply(null, x);
    } else {
      throw new MatchError(
        'Unsupported action type ' +
          typeof action +
          ' of action ' +
          action +
          '.'
      );
    }
  }

  function matchValue(patt, value) {
    if (patt === '_') {
      // Behaves like UnderscoreType
      return [true, [value]];
    } else if (patt === PAD_VALUE) {
      return [false, []];
    } else if (patt === String) {
      var bool = typeof value === 'string' || value instanceof String;
      if (bool) return [bool, [value]];
      else return [false, []];
    } else if (patt === Number) {
      var _bool = typeof value === 'number' || value instanceof Number;

      if (_bool) return [_bool, [value]];
      else return [false, []];
    } else if (patt === Array) {
      if (value instanceof Array) {
        return [true, [value]];
      } else return [false, []];
    } else if (Array.isArray(patt)) {
      return matchArray(patt, value);
    } else if (patt === Function) {
      // console.log(`[${patt}] === Function`);
      try {
        if (value instanceof patt) return [true, [value]];
        return [false, []];
      } catch (err) {}
    } else if (isValue(patt)) {
      return [patt === value, []];
    } else if (patt instanceof Function) {
      // console.log(`[${patt}] instanceof Function`);
      var ret = patt(value);
      if (ret === true) return [true, [value]];
      else return [false, []];
    } else if (patt === _) {
      return [true, [value]];
    } else if (isObject$2(patt)) {
      return matchDict(patt, value);
    } else {
      throw new MatchError(
        'Pattern ' + patt + ' has unsupported type ' + typeof patt + '.'
      );
    }

    return [false, []];
  }

  function matchArray(patt, value) {
    if (!(patt instanceof Array) || !(value instanceof Array)) {
      return [false, []];
    }

    var totalExtracted = [];
    var pairs = zipLongest(patt, value);

    for (var i = 0; i < pairs.length; i++) {
      var _pairs$i = pairs[i],
        pi = _pairs$i[0],
        vi = _pairs$i[1];

      if (pi === TAIL) {
        if (!onlyPadValuesFollow(pairs, i + 1)) {
          throw new MatchError(
            'TAIL/REST must be the last element of a pattern.'
          );
        } else {
          totalExtracted = totalExtracted.concat([value.slice(i)]);
          break;
        }
      } else {
        var _matchValue = matchValue(pi, vi),
          matched = _matchValue[0],
          extracted = _matchValue[1];

        if (!matched) {
          return [false, []];
        } else totalExtracted = totalExtracted.concat(extracted);
      }
    }

    return [true, totalExtracted];
  }

  function keysSet(x) {
    var set = {};

    for (var key in x) {
      set[key] = true;
    }

    return set;
  }

  function matchDict(patt, value) {
    if (!isObject$2(patt) || !isObject$2(value)) {
      return [false, []];
    }

    var totalExtracted = [];
    var stillUsablePatternKeys = keysSet(patt);
    var stillUsableValueKeys = keysSet(value);

    for (var pkey in patt) {
      if (!(pkey in stillUsablePatternKeys)) continue;
      var pval = patt[pkey];
      var matchedLeftAndRight = false;

      for (var vkey in value) {
        if (!(vkey in stillUsableValueKeys)) continue;
        if (!(pkey in stillUsablePatternKeys)) continue;
        var vval = value[vkey];

        var _matchValue2 = matchValue(pkey, vkey),
          keyMatched = _matchValue2[0],
          keyExtracted = _matchValue2[1];

        if (keyMatched) {
          var _matchValue3 = matchValue(pval, vval),
            valMatched = _matchValue3[0],
            valExtracted = _matchValue3[1];

          if (valMatched) {
            delete stillUsablePatternKeys[pkey];
            delete stillUsableValueKeys[vkey];
            totalExtracted = totalExtracted.concat(keyExtracted, valExtracted);
            matchedLeftAndRight = true;
          }
        }
      }

      if (!matchedLeftAndRight) return [false, []];
    }

    return [true, totalExtracted];
  }

  function pairwise(args) {
    var res = [];

    for (var i = 0; i < args.length; i += 2) {
      res.push([args[i], args[i + 1]]);
    }

    return res;
  }

  function onlyPadValuesFollow(pairs, i) {
    for (; i < pairs.length; i++) {
      if (pairs[i][0] !== PAD_VALUE) {
        return false;
      }
    }

    return true;
  }

  function matchPairs(x) {
    for (
      var _len = arguments.length,
        pairs = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      pairs[_key - 1] = arguments[_key];
    }

    if (
      !pairs.every(function(p) {
        return p.length && p.length === 2;
      })
    ) {
      throw new MatchError(
        'Even number of pattern-action pairs. Every pattern should have an action.'
      );
    }

    for (var i = 0; i < pairs.length; i++) {
      var _pairs$i2 = pairs[i],
        patt = _pairs$i2[0],
        action = _pairs$i2[1];

      var _matchValue4 = matchValue(patt, x),
        matched = _matchValue4[0],
        extracted = _matchValue4[1];

      if (matched) {
        return run(action, extracted);
      }
    }

    throw new MatchError('No _ provided, case ' + x + ' not handled.');
  }

  function match(x) {
    var args = Array.prototype.slice.call(arguments).slice(1);

    if (args.length % 2 !== 0) {
      throw new MatchError(
        'Even number of pattern-action pairs. Every pattern should have an action.'
      );
    }

    var pairs = pairwise(args);
    return matchPairs.apply(void 0, [x].concat(pairs));
  }

  function matchAll(rows) {
    var total = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var pairs = Array.prototype.slice.call(arguments).slice(1);
      var res = match.apply(null, [row].concat(pairs));
      total.push(res);
    }

    return total;
  }

  function zipLongest(a, b) {
    var maxLen = Math.max(a.length, b.length);
    var res = [];

    for (var i = 0; i < maxLen; i++) {
      var ai = a[i] !== undefined ? a[i] : PAD_VALUE;
      var bi = b[i] !== undefined ? b[i] : PAD_VALUE;
      res.push([ai, bi]);
    }

    return res;
  }

  var MatchError = /*#__PURE__*/ (function(_Error) {
    _inheritsLoose(MatchError, _Error);

    function MatchError(message) {
      var _this;

      _this = _Error.call(this, message) || this;
      _this.name = 'MatchError';
      return _this;
    }

    return MatchError;
  })(/*#__PURE__*/ _wrapNativeSuper(Error));

  var pampy = {
    matchValue: matchValue,
    matchArray: matchArray,
    matchDict: matchDict,
    match: match,
    matchAll: matchAll,
    matchPairs: matchPairs,
    zipLongest: zipLongest,
    PAD_VALUE: PAD_VALUE,
    _: _,
    ANY: ANY,
    HEAD: HEAD,
    TAIL: TAIL,
    REST: REST,
  };
  var pampy_4 = pampy.match;
  var pampy_10 = pampy.ANY;

  var LoanState;

  (function(LoanState) {
    LoanState[(LoanState['CREATED'] = 0)] = 'CREATED';
    LoanState[(LoanState['FAILED_TO_FUND'] = 1)] = 'FAILED_TO_FUND';
    LoanState[(LoanState['ACTIVE'] = 2)] = 'ACTIVE';
    LoanState[(LoanState['DEFAULTED'] = 3)] = 'DEFAULTED';
    LoanState[(LoanState['REPAID'] = 4)] = 'REPAID';
    LoanState[(LoanState['CLOSED'] = 5)] = 'CLOSED';
    LoanState[(LoanState['FROZEN'] = 6)] = 'FROZEN'; // when admin unlocks withdrawals
  })(LoanState || (LoanState = {}));

  var secondUnits = {
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  var stringUnixToDate = function stringUnixToDate(stringUnix) {
    return new Date(Number(stringUnix) * 1000);
  };

  var isAuctionExpired = function isAuctionExpired(_ref) {
    var auctionEndTimestamp = _ref.auctionEndTimestamp;
    return new Date() > stringUnixToDate(auctionEndTimestamp);
  };
  var roundedTime = function roundedTime(seconds, secondUnit) {
    return Math.round(seconds / secondUnit);
  };
  var getDesiredTime = function getDesiredTime(seconds, type) {
    return pampy_4(
      seconds,
      function(s) {
        return s >= secondUnits.day;
      },
      function(s) {
        return roundedTime(s, secondUnits.day) + ' days';
      },
      function(s) {
        return s >= secondUnits.hour;
      },
      function(s) {
        return roundedTime(s, secondUnits.hour) + ' hours';
      },
      function(s) {
        return s >= secondUnits.minute;
      },
      function(s) {
        return roundedTime(s, secondUnits.minute) + ' minutes';
      },
      function(s) {
        return s > 0 && s < secondUnits.minute;
      },
      function() {
        return '<1 minute';
      },
      pampy_10,
      function() {
        return type === 'loan' ? 'Expired' : 'Auction ended';
      }
    );
  };
  var defaultZero = /*#__PURE__*/ numeral(0).format();
  var calculatefromDecimal = function calculatefromDecimal(number, decimals) {
    if (decimals === void 0) {
      decimals = 18;
    }

    return number
      ? numeral(Number(fromDecimal(number.toString(), decimals))).format(
          numeralFormat
        )
      : defaultZero;
  };
  var calculateTimes = function calculateTimes(auction) {
    try {
      var loanTerm = getDesiredTime(Number(auction.termLength));
      var today = new Date().getTime() / 1000;
      var auctionTimeLeft = getDesiredTime(
        Number(auction.auctionEndTimestamp) - today
      );
      var loanTermLeft = getDesiredTime(
        Number(auction.termEndTimestamp) - today,
        'loan'
      );
      return {
        loanTerm: loanTerm,
        auctionTimeLeft: auctionTimeLeft,
        loanTermLeft: loanTermLeft,
      };
    } catch (error) {
      console.error('[LOANUTILS][CalculatefromDecimal]', error);
      return error;
    }
  };
  var calculateInterest = function calculateInterest(auction) {
    var nowTimestamp = Date.now() / 1000;
    var maxInterestRate =
      Number(fromDecimal(auction.maxInterestRate.toString())) / 100;
    var minInterestRate = auction.minInterestRate
      ? Number(fromDecimal(auction.minInterestRate.toString())) / 100
      : 0;
    var interest = 0;

    if (auction.state === LoanState.CREATED && !isAuctionExpired(auction)) {
      interest =
        (maxInterestRate - minInterestRate) *
          ((nowTimestamp - auction.auctionStartTimestamp) /
            (auction.auctionEndTimestamp - auction.auctionStartTimestamp)) +
        minInterestRate;
    } else if (
      auction.state === LoanState.ACTIVE ||
      auction.state === LoanState.REPAID
    ) {
      interest = maxInterestRate;
    } else {
      interest = maxInterestRate;
    }

    return interest;
  };
  var calculateROI = function calculateROI(auction) {
    var roi =
      (Number(fromDecimal(auction.interestRate.toString())) *
        (auction.termLength / 30 / 24 / 60 / 60)) /
      100;
    return roi;
  };
  var calculateTotalInterest = function calculateTotalInterest(auction) {
    var interest =
      Number(fromDecimal(auction.interestRate.toString())) *
      (auction.termLength / 30 / 24 / 60 / 60 / 100);
    return interest;
  };
  var calculateTotalInterestAmount = function calculateTotalInterestAmount(
    auction
  ) {
    var interest =
      Number(fromDecimal(auction.interestRate.toString())) *
      (auction.termLength / 30 / 24 / 60 / 60 / 100);
    var principal = Number(fromDecimal(auction.principal));
    return principal * interest;
  };
  var calculateAPR = function calculateAPR(auction) {
    var interest = Number(fromDecimal(auction.interestRate.toString())) / 100;
    var apr = interest * 12;
    return apr;
  };
  var calculateInvestmentReturn = function calculateInvestmentReturn(
    auction,
    decimals
  ) {
    if (decimals === void 0) {
      decimals = 18;
    }

    var lenderAmount = Number(fromDecimal(auction.lenderAmount, decimals));
    var lenderRoiAmount = lenderAmount + lenderAmount * calculateROI(auction);
    return lenderRoiAmount;
  };
  var getCalculations = function getCalculations(auction, decimals) {
    var _auction$netBalance;

    if (decimals === void 0) {
      decimals = 18;
    }

    var maxAmount = calculatefromDecimal(auction.maxAmount, decimals);
    var maxAmountNum = Number(fromDecimal(auction.maxAmount, decimals));
    var operatorFee = calculatefromDecimal(auction.operatorFee);
    var operatorFeeNum =
      Number(fromDecimal(auction.operatorFee.toString())) / 100;
    var principal = calculatefromDecimal(auction.principal, decimals);
    var principalNum = Number(fromDecimal(auction.principal, decimals));
    var borrowerDebt = Number(
      fromDecimal(auction.borrowerDebt, decimals)
    ).toLocaleString('es-ES');
    var maxSystemFees = numeral(maxAmountNum * operatorFeeNum).format();
    var systemFees = '-' + numeral(principalNum * operatorFeeNum).format();
    var netBalance = numeral(
      Number(
        fromDecimal(
          ((_auction$netBalance = auction.netBalance) == null
            ? void 0
            : _auction$netBalance.toString()) || '0',
          decimals
        )
      )
    ).format();
    var calculatedInterest = calculateInterest(auction);
    var expectedROI =
      calculatedInterest * (Number(auction.termLength) / 2628000);
    var interest = numeral(calculatedInterest).format('0.00%');
    var currentAPR = numeral(calculatedInterest * 12).format('0.00%');
    var currentAmount = numeral(principal).value();
    var totalAmount = numeral(maxAmount).value();
    var maxAPR = numeral(
      (Number(fromDecimal(auction.maxInterestRate.toString())) / 100) * 12
    ).format('0.00%');
    var expectedRoiFormated = numeral(expectedROI).format('0.00%');
    var lenderAmount;
    var lenderRoiAmount;
    var roi;
    var finalAPR;
    var totalInterest;
    var totalInterestAmount;

    if (auction.interestRate) {
      finalAPR = numeral(calculateAPR(auction)).format('0.00%');
      roi = numeral(calculateROI(auction)).format('0.00%');
      totalInterest = numeral(calculateTotalInterest(auction)).format('0.00%');
      totalInterestAmount = numeral(
        calculateTotalInterestAmount(auction)
      ).format();
    }

    if (auction.lenderAmount) {
      lenderAmount = numeral(
        Number(fromDecimal(auction.lenderAmount, decimals))
      ).format();
      var lenderRoiAmountCalc = calculateInvestmentReturn(auction, decimals);
      lenderRoiAmount = numeral(lenderRoiAmountCalc).format();
    }

    var _calculateTimes = calculateTimes(auction),
      loanTerm = _calculateTimes.loanTerm,
      auctionTimeLeft = _calculateTimes.auctionTimeLeft,
      loanTermLeft = _calculateTimes.loanTermLeft;

    var newCalcs = {
      times: {
        loanTerm: loanTerm,
        auctionTimeLeft: auctionTimeLeft,
        loanTermLeft: loanTermLeft,
      },
      borrowerDebt: borrowerDebt,
      interest: interest,
      maxAmount: maxAmount,
      maxAmountNum: maxAmountNum,
      netBalance: netBalance,
      operatorFee: operatorFee,
      principal: principal,
      principalNum: principalNum,
      systemFees: systemFees,
      maxSystemFees: maxSystemFees,
      currentAmount: currentAmount,
      totalAmount: totalAmount,
      maxAPR: maxAPR,
      roi: roi,
      totalInterest: totalInterest,
      totalInterestAmount: totalInterestAmount,
      currentAPR: currentAPR,
      finalAPR: finalAPR,
      calculatedInterest: calculatedInterest,
      expectedROI: expectedROI,
      lenderAmount: lenderAmount,
      lenderRoiAmount: lenderRoiAmount,
      expectedRoiFormated: expectedRoiFormated,
    };
    return newCalcs;
  };

  var InvestCard = function InvestCard(props) {
    var auction = props.auction,
      className = props.className,
      children = props.children,
      borrower = props.borrower,
      coinIcon = props.coinIcon,
      _props$decimals = props.decimals,
      decimals = _props$decimals === void 0 ? 18 : _props$decimals;
    var link = !!props.link;
    var calculations = getCalculations(auction, decimals);

    var investProps = _extends({}, auction, {}, borrower, {}, calculations, {
      link: link,
      coinIcon: coinIcon,
    });

    return React__default.createElement(
      InvestCardView,
      Object.assign({}, investProps, {
        className: className,
      }),
      children
    );
  };

  function _templateObject19$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  .content {\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n\n  .visuals {\n    flex: 0 1 100%;\n    background: #f7fdff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .process {\n    flex: 0 1 100%;\n    background: #fff;\n    padding: 50px;\n    box-sizing: border-box;\n  }\n\n  .error.field {\n    .ui.search {\n      background-color: #fff6f6;\n      border-color: #e0b4b4;\n      box-shadow: none;\n      color: #9f3a38 !important;\n    }\n  }\n',
    ]);

    _templateObject19$1 = function _templateObject19() {
      return data;
    };

    return data;
  }

  function _templateObject18$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 50px;\n  align-items: center;\n',
    ]);

    _templateObject18$1 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17$1() {
    var data = _taggedTemplateLiteralLoose(['']);

    _templateObject17$1 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: block;\n  width: 100px;\n  height: auto;\n',
    ]);

    _templateObject16$1 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    width: ',
      ';\n\n    @media (max-width: ',
      ') {\n      width: 100%;\n    }\n  }\n',
    ]);

    _templateObject15$1 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  padding: 15%;\n\n  @media (max-width: ',
      ') {\n    flex: 0 1 20%;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 1%;\n  }\n',
    ]);

    _templateObject14$1 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-size: 23px;\n  line-height: 36px;\n  opacity: 0.59;\n  color: #3c4251;\n  font-family: Lato;\n  height: 72px;\n  max-width: 290px;\n  width: 100%;\n  margin: 5%;\n\n  @media (max-width: ',
      ') {\n    display: none;\n  }\n',
    ]);

    _templateObject13$1 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-size: 50px;\n  font-family: Lato;\n  line-height: 60px;\n  color: #3c4251;\n  font-weight: bold;\n  max-width: 260px;\n  width: 100%;\n  margin: 5%;\n\n  @media (max-width: ',
      ') {\n    font-size: 25px;\n    font-family: Lato;\n    line-height: 15px;\n    height: auto;\n    width: auto;\n    text-align: center;\n  }\n',
    ]);

    _templateObject12$1 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  max-width: 100%;\n\n  @media (max-width: ',
      ') {\n    display: none;\n  }\n',
    ]);

    _templateObject11$1 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10$1() {
    var data = _taggedTemplateLiteralLoose(['']);

    _templateObject10$1 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  padding: 5%;\n  border-left: 1px solid #dfe3e9;\n  flex: 50%;\n\n  @media (max-width: ',
      ') {\n    flex: 60%;\n    border-left: none;\n  }\n',
    ]);

    _templateObject9$1 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 50%;\n',
    ]);

    _templateObject8$2 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n\n  @media (max-width: ',
      ') {\n    flex-wrap: wrap;\n    height: 100%;\n  }\n',
    ]);

    _templateObject7$2 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 100px;\n  border-bottom: 1px solid #dfe3e9;\n  margin: 0 5px 0 5px;\n\n  div img {\n    padding: 12%;\n  }\n\n  @media (max-width: ',
      ') {\n    border-bottom: none;\n  }\n',
    ]);

    _templateObject6$2 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$1() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  align-items: stretch;\n',
    ]);

    _templateObject5$1 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&&& {\n    display: flex;\n    flex-direction: column;\n    min-height: 770px;\n    @media (max-width: 500px) {\n      border-radius: 0;\n      margin: 0;\n      padding: 0;\n      overflow: auto;\n      min-height: unset;\n    }\n  }\n',
    ]);

    _templateObject4$2 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  overflow: hidden !important;\n\n  @media (max-width: 500px) {\n    overflow-y: auto !important;\n    &&&&&&.ui.modal {\n      border-radius: 0;\n      width: 100%;\n      position: absolute;\n      top: 0;\n    }\n    &&&&&&.ui.dimmer {\n      padding: 0%;\n    }\n    &&&&&&.ui.scrolling.modal {\n      margin: 0;\n    }\n    height: 100%;\n    box-shadow: none;\n    margin: 0;\n  }\n',
    ]);

    _templateObject3$3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$4() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    background: none;\n    color: #fff;\n    border: none;\n\n    color: rgba(255, 255, 255, 0.7);\n\n    i {\n      font-size: 15px;\n      color: black;\n    }\n\n    &:hover,\n    &:focus {\n      background: none;\n      color: #fff;\n    }\n  }\n',
    ]);

    _templateObject2$4 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$6() {
    var data = _taggedTemplateLiteralLoose(['']);

    _templateObject$6 = function _templateObject() {
      return data;
    };

    return data;
  }
  var size$1 = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    signUp: '860px',
    desktop: '950px',
  };
  var commonModal = {
    borderRadius: '4px',
    boxShadow: '0 10px 26px 0 rgba(6, 52, 40, 0.1)',
    margin: '0 !important',
    padding: '0 !important',
  };
  var OnboardingCloseIcon = /*#__PURE__*/ styled(semanticUiReact.Icon)(
    /*#__PURE__*/ _templateObject$6()
  );
  var OnboardingCloseButton = /*#__PURE__*/ styled(semanticUiReact.Button)(
    /*#__PURE__*/ _templateObject2$4()
  );
  var OnboardingModal = /*#__PURE__*/ styled(semanticUiReact.Modal)(
    /*#__PURE__*/ _templateObject3$3()
  );
  var OnboardingModalContent = /*#__PURE__*/ styled(
    semanticUiReact.Modal.Content
  )(/*#__PURE__*/ _templateObject4$2());
  var OnboardingHeaderItemWrapper = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject5$1()
  );
  var OnboardingHeader = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject6$2(),
    size$1.mobileL
  );
  var OnboardingContentWrapper = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject7$2(),
    size$1.mobileL
  );
  var OnboardingImageWrapper = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject8$2()
  );
  var OnboardingFormContent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject9$1(),
    size$1.mobileL
  );
  var OnboardingBloomContent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject10$1()
  );
  var OnboardingImage = /*#__PURE__*/ styled.img(
    /*#__PURE__*/ _templateObject11$1(),
    size$1.mobileL
  );
  var OnboardingTitle = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject12$1(),
    size$1.mobileL
  );
  var OnboardingSubTitle = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject13$1(),
    size$1.mobileL
  );
  var OnboardingTitleWrapper = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject14$1(),
    size$1.mobileL
  );
  var OnboardingSimpleModal = /*#__PURE__*/ styled(semanticUiReact.Modal)(
    /*#__PURE__*/ _templateObject15$1(),
    size$1.mobileL,
    size$1.mobileL
  );
  var ConfirmLogo = /*#__PURE__*/ styled.img(
    /*#__PURE__*/ _templateObject16$1()
  );
  var ConfirmCros = /*#__PURE__*/ styled(semanticUiReact.Icon)(
    /*#__PURE__*/ _templateObject17$1()
  );
  var ConfirmHeaderWrapper = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject18$1()
  );
  var OnboardingWrapper = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject19$1()
  );

  var BigSimpleModal = function BigSimpleModal(_ref) {
    var children = _ref.children,
      blur = _ref.blur,
      mountNode = _ref.mountNode,
      open = _ref.open,
      onClose = _ref.onClose,
      closeButton = _ref.closeButton;
    var dimmer = blur
      ? {
          dimmer: 'blurring',
        }
      : null;
    return React__default.createElement(
      OnboardingModal,
      Object.assign({}, dimmer, {
        open: open,
        mountNode: mountNode,
      }),
      React__default.createElement(
        OnboardingModalContent,
        null,
        React__default.createElement(
          OnboardingHeader,
          null,
          React__default.createElement(
            OnboardingHeaderItemWrapper,
            null,
            React__default.createElement('img', {
              src: IMAGES_PATH + 'logo.svg',
            })
          ),
          React__default.createElement(
            OnboardingHeaderItemWrapper,
            null,
            closeButton &&
              React__default.createElement(OnboardingCloseIcon, {
                link: true,
                onClick: onClose,
                name: 'close',
                size: 'large',
              })
          )
        ),
        React__default.createElement(OnboardingContentWrapper, null, children)
      )
    );
  };

  var PanelWithImage = function PanelWithImage(_ref) {
    var children = _ref.children,
      blur = _ref.blur,
      mountNode = _ref.mountNode,
      open = _ref.open,
      onClose = _ref.onClose,
      closeButton = _ref.closeButton;
    var dimmer = blur
      ? {
          dimmer: 'blurring',
        }
      : null;
    return React__default.createElement(
      OnboardingModal,
      Object.assign({}, dimmer, {
        open: open,
        mountNode: mountNode,
      }),
      React__default.createElement(
        OnboardingModalContent,
        null,
        React__default.createElement(
          OnboardingHeader,
          null,
          React__default.createElement(
            OnboardingHeaderItemWrapper,
            null,
            React__default.createElement('img', {
              src: IMAGES_PATH + 'logo.svg',
            })
          ),
          React__default.createElement(
            OnboardingHeaderItemWrapper,
            null,
            closeButton &&
              React__default.createElement(OnboardingCloseButton, {
                onClick: onClose,
                icon: 'cancel',
              })
          )
        ),
        React__default.createElement(OnboardingBloomContent, null, children)
      )
    );
  };

  var PanelWithImage$1 = function PanelWithImage(_ref) {
    var children = _ref.children,
      title = _ref.title,
      blur = _ref.blur,
      mountNode = _ref.mountNode,
      open = _ref.open,
      onClose = _ref.onClose,
      closeButton = _ref.closeButton;
    var dimmer = blur
      ? {
          dimmer: 'blurring',
        }
      : null;
    return React__default.createElement(
      OnboardingModal,
      Object.assign({}, dimmer, {
        open: open,
        mountNode: mountNode ? mountNode : undefined,
      }),
      React__default.createElement(
        OnboardingModalContent,
        {
          id: 'process',
        },
        React__default.createElement(
          OnboardingHeader,
          null,
          React__default.createElement(
            OnboardingHeaderItemWrapper,
            null,
            React__default.createElement('img', {
              src: IMAGES_PATH + 'logo.svg',
            })
          ),
          React__default.createElement(
            OnboardingHeaderItemWrapper,
            null,
            closeButton &&
              React__default.createElement(OnboardingCloseIcon, {
                link: true,
                onClick: onClose,
                name: 'close',
                size: 'large',
              })
          )
        ),
        React__default.createElement(
          OnboardingContentWrapper,
          null,
          React__default.createElement(
            OnboardingImageWrapper,
            null,
            React__default.createElement(
              OnboardingTitleWrapper,
              null,
              React__default.createElement(OnboardingTitle, null, title),
              React__default.createElement(
                OnboardingSubTitle,
                null,
                'The only marketplace that makes your money grow'
              )
            ),
            React__default.createElement(OnboardingImage, {
              className: 'visual',
              src: IMAGES_PATH + 'img_signin_raise.png',
            })
          ),
          React__default.createElement(OnboardingFormContent, null, children)
        )
      )
    );
  };

  var SimpleModal = function SimpleModal(_ref) {
    var localClose = _ref.localClose,
      children = _ref.children,
      blur = _ref.blur,
      mountNode = _ref.mountNode,
      open = _ref.open,
      onClose = _ref.onClose,
      closeButton = _ref.closeButton;
    var dimmer = blur
      ? {
          dimmer: 'blurring',
        }
      : null;
    return React__default.createElement(
      OnboardingSimpleModal,
      Object.assign({}, dimmer, {
        style: commonModal,
        open: open,
        mountNode: mountNode,
      }),
      React__default.createElement(
        OnboardingWrapper,
        null,
        React__default.createElement(
          'div',
          {
            className: 'process',
          },
          React__default.createElement(
            ConfirmHeaderWrapper,
            null,
            React__default.createElement(ConfirmLogo, {
              src: IMAGES_PATH + 'logo.svg',
            }),
            (closeButton || localClose) &&
              React__default.createElement(ConfirmCros, {
                link: true,
                onClick: onClose,
                name: 'close',
                size: 'large',
              })
          ),
          children
        )
      )
    );
  };

  function _templateObject8$3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 109px;\n  height: 14px;\n\n  font-family: Lato;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: #000000;\n',
    ]);

    _templateObject8$3 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7$3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  margin-bottom: 6px;\n  width: 100%;\n  height: 8px;\n  margin-top: 20px;\n  position: absolute;\n  z-index: 999;\n  background: rgba(235, 63, 147, 0.3);\n  opacity: 10%;\n  border-radius: 100px;\n',
    ]);

    _templateObject7$3 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  margin-bottom: 6px;\n  width: ',
      ';\n  height: 8px;\n\n  background: rgb(235, 63, 147);\n  border-radius: 100px;\n  z-index: 1000;\n',
    ]);

    _templateObject6$3 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$2() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-family: Lato;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 14px;\n\n  color: #000000;\n  margin-bottom: 6px;\n',
    ]);

    _templateObject5$2 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$3() {
    var data = _taggedTemplateLiteralLoose([
      '\n  width: 36px;\n  height: 34.81px;\n',
    ]);

    _templateObject4$3 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$4() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-left: 24px;\n  max-width: 384px;\n  width: 100%;\n  position: relative;\n',
    ]);

    _templateObject3$4 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$5() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  opacity: ',
      ';\n  align-items: center;\n  margin: 16px 0 16px 0px;\n  position: relative;\n',
    ]);

    _templateObject2$5 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$7() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 0 24px;\n  width: 100%;\n  max-width: 444px;\n',
    ]);

    _templateObject$7 = function _templateObject() {
      return data;
    };

    return data;
  }
  var ResumeContainer = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject$7()
  );
  var CompanyContainer = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject2$5(),
    function(props) {
      return !props.comingSoon ? '30%;' : '';
    }
  );
  var CompanyInfo = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject3$4()
  );
  var CompanyIcon = /*#__PURE__*/ styled.img(
    /*#__PURE__*/ _templateObject4$3()
  );
  var Percentage = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject5$2());
  var PercentageBar = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject6$3(),
    function(props) {
      return props.newWidth ? props.newWidth + '%' : '0%';
    }
  );
  var PercentageBarBack = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject7$3()
  );
  var CompanyName = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject8$3()
  );

  var companyRes = function companyRes(topPercentage) {
    return function(company, index) {
      var width = 100;
      var newWidth = (width * company.supplyRate) / topPercentage;
      return React__default.createElement(
        CompanyContainer,
        {
          key: index,
          comingSoon: company.enabled,
        },
        React__default.createElement(CompanyIcon, {
          src: ERC20_LOGOS[company.logoUrl] || company.logoUrl,
        }),
        React__default.createElement(
          CompanyInfo,
          null,
          React__default.createElement(
            Percentage,
            null,
            (company.enabled
              ? Number(company.supplyRate * 100).toFixed(2)
              : 0) + '%'
          ),
          React__default.createElement(PercentageBarBack, {
            newWidth: width,
          }),
          React__default.createElement(PercentageBar, {
            newWidth: company.enabled ? newWidth : 0,
          }),
          React__default.createElement(CompanyName, null, company.name)
        )
      );
    };
  };

  var printResumes = function printResumes(companies) {
    if (!companies.length) {
      return null;
    }

    var sortedCompanies = companies
      .filter(function(x) {
        return !!x && x.supplyRate >= 0;
      })
      .sort(function(companyA, companyB) {
        if (!companyA.enabled) {
          return 1;
        }

        return companyB.supplyRate - companyA.supplyRate;
      });
    return sortedCompanies.map(companyRes(sortedCompanies[0].supplyRate));
  };

  var LoanComparatorChart = function LoanComparatorChart(_ref) {
    var companies = _ref.companies;
    return React__default.createElement(
      ResumeContainer,
      null,
      printResumes(companies)
    );
  };

  (function(AccountType) {
    AccountType[(AccountType['Borrower'] = 1)] = 'Borrower';
    AccountType[(AccountType['Lender'] = 2)] = 'Lender';
  })(exports.AccountType || (exports.AccountType = {}));

  var _iteratorSymbol =
    /*#__PURE__*/ typeof Symbol !== 'undefined'
      ? Symbol.iterator ||
        (Symbol.iterator = /*#__PURE__*/ Symbol('Symbol.iterator'))
      : '@@iterator'; // Asynchronously iterate through an object's values
  var _asyncIteratorSymbol =
    /*#__PURE__*/ typeof Symbol !== 'undefined'
      ? Symbol.asyncIterator ||
        (Symbol.asyncIterator = /*#__PURE__*/ Symbol('Symbol.asyncIterator'))
      : '@@asyncIterator'; // Asynchronously iterate on a value using it's async iterator if present, or its synchronous iterator if missing

  function _catch(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }

    if (result && result.then) {
      return result.then(void 0, recover);
    }

    return result;
  } // Asynchronously await a promise and pass the result to a finally continuation

  var request = function request(apiKey) {
    return (
      'https://public.defipulse.com/api/GetRates' +
      (apiKey ? '?api-key=' + apiKey : '')
    );
  };

  var useDefiPulse = function useDefiPulse(apiKey) {
    var _useState = React.useState([]),
      lendingRates = _useState[0],
      setLendingRates = _useState[1];

    useEffectAsync(function() {
      try {
        var _temp2 = _catch(
          function() {
            return Promise.resolve(axios$1.get(request(apiKey))).then(function(
              _ref
            ) {
              var data = _ref.data;
              setLendingRates(data);
            });
          },
          function() {}
        );

        return Promise.resolve(
          _temp2 && _temp2.then ? _temp2.then(function() {}) : void 0
        );
      } catch (e) {
        return Promise.reject(e);
      }
    }, []);
    return lendingRates;
  };

  var stringUnixToDate$1 = function stringUnixToDate(stringUnix) {
    return new Date(Number(stringUnix) * 1000);
  };

  var isAuctionExpired$1 = function isAuctionExpired(_ref) {
    var auctionEndTimestamp = _ref.auctionEndTimestamp;
    return new Date() > stringUnixToDate$1(auctionEndTimestamp);
  };
  var calculateInterest$1 = function calculateInterest(auction) {
    var nowTimestamp = Date.now() / 1000;
    var maxInterestRate =
      Number(fromDecimal(auction.maxInterestRate.toString())) / 100;
    var minInterestRate = auction.minInterestRate
      ? Number(fromDecimal(auction.minInterestRate.toString())) / 100
      : 0;
    var interest = 0;

    if (auction.state === 0 && !isAuctionExpired$1(auction)) {
      interest =
        (maxInterestRate - minInterestRate) *
          ((nowTimestamp - auction.auctionStartTimestamp) /
            (auction.auctionEndTimestamp - auction.auctionStartTimestamp)) +
        minInterestRate;
    } else if (auction.state === 2 || auction.state === 4) {
      interest = maxInterestRate;
    } else {
      interest = maxInterestRate;
    }

    return interest * 12;
  };

  var raiseGraph = /*#__PURE__*/ graphql(
    'https://api.thegraph.com/subgraphs/name/raisehq/raise',
    {
      asJSON: true,
    }
  );
  var raiseLoansQuery =
    'query($currentUnix: Int) {\n\tloans( where: { state: 0, auctionEndTimestamp_gt: $currentUnix } ) {\n        state\n        operatorFee\n        interestRate\n        principal\n        termLength\n        minInterestRate\n        maxInterestRate\n        auctionStartTimestamp\n        auctionEndTimestamp\n        id\n\t}\n}';

  var average = function average(arr) {
    return (
      arr.reduce(function(p, c) {
        return p + c;
      }, 0) / arr.length
    );
  };

  var getRaiseData = function getRaiseData() {
    try {
      return Promise.resolve(
        raiseGraph(raiseLoansQuery)({
          currentUnix: Math.trunc(new Date().getTime() / 1000),
        })
      ).then(function(raise) {
        var raiseResponse = {
          supplyRate: average(
            raise.loans.map(function(auction) {
              return calculateInterest$1(auction);
            })
          ).toString(),
          name: 'Raise',
          image: 'raise',
          logoUrl: COMPANY_LOGOS.Raise,
          tvl: raise.loans.reduce(function(total, _ref) {
            var principal = _ref.principal;
            return (
              total + Number(fromDecimal(principal.toString().replace('.', '')))
            );
          }, 0),
          term: 'short-term',
          custodial: false,
          collateralized: false,
          enabled: true,
          description:
            'Raise is a loan marketplace that connects individuals with investment opportunities primarily in emerging countries.',
        };
        return raiseResponse;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var useRaiseData = function useRaiseData() {
    var _useState = React.useState(null),
      raiseCompany = _useState[0],
      setRaiseCompany = _useState[1];

    useEffectAsync(function() {
      try {
        var _temp2 = _catch(
          function() {
            return Promise.resolve(getRaiseData()).then(function(data) {
              setRaiseCompany(data);
            });
          },
          function() {}
        );

        return Promise.resolve(
          _temp2 && _temp2.then ? _temp2.then(function() {}) : void 0
        );
      } catch (e) {
        return Promise.reject(e);
      }
    }, []);
    return raiseCompany;
  };

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function baseMap(collection, iteratee) {
    var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  /**
   * Creates an array of values by running each element in `collection` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * _.map([4, 8], square);
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */

  function map(collection, iteratee) {
    var func = isArray$1(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee(iteratee));
  }

  var defiPulseToCompany = function defiPulseToCompany(defiPulseData) {
    if (defiPulseData.length) {
      // DAI is hardcoded to get DAI profits from other companies
      var daiData = defiPulseData.find(function(_ref) {
        var name = _ref.token.name;
        return name === 'DAI';
      });

      if (daiData) {
        var convertToCompanies = map(daiData.rates, function(_ref2) {
          var name = _ref2.name,
            rate = _ref2.lend.rate;
          return {
            name: name,
            supplyRate: Number(Number(rate).toFixed(2)) / 100,
            enabled: true,
            logoUrl: COMPANY_LOGOS[name] || null,
          };
        });
        return [].concat(convertToCompanies);
      }
    }

    return [];
  };

  var useCompaniesScrapper = function useCompaniesScrapper() {
    var _useState = React.useState([]),
      companies = _useState[0],
      setCompanies = _useState[1];

    var defiPulseData = useDefiPulse(null);
    var raiseCompany = useRaiseData();
    React.useEffect(
      function() {
        if (defiPulseData.length && raiseCompany && !companies.length) {
          var defiPulseCompanies = defiPulseToCompany(defiPulseData);
          setCompanies([raiseCompany].concat(defiPulseCompanies));
        }
      },
      [defiPulseData, raiseCompany]
    );
    return companies;
  };

  var globalTheme = {
    buttonPatterns: {
      primary: {
        default: {
          backgroundColor: '#EB3F93',
          textColor: '#FFFFFF',
          borderColor: '#EB3F93',
        },
        hover: {
          backgroundColor: '#EF65A9',
          textColor: '#FFFFFF',
          borderColor: '#EF65A9',
          boxShadow: '0px 8px 15px rgba(60, 66, 81, 0.25)',
        },
        onClick: {
          backgroundColor: '#B40065',
          textColor: '#FFFFFF',
          borderColor: '#B40065',
        },
        disable: {
          backgroundColor: '#FBD9E9',
          textColor: '#FFFFFF',
          borderColor: '#FBD9E9',
        },
      },
      secondary: {
        default: {
          backgroundColor: '#00DA9E',
          textColor: '#FFFFFF',
          borderColor: '#00DA9E',
        },
        hover: {
          backgroundColor: '#33E1B',
          textColor: '#FFFFFF',
          borderColor: '#33E1B',
          boxShadow: '0px 8px 15px rgba(60, 66, 81, 0.25)',
        },
        onClick: {
          backgroundColor: '#00A76F',
          textColor: '#FFFFFF',
          borderColor: '#00A76F',
        },
        disable: {
          backgroundColor: '#CCF8EC',
          textColor: '#FFFFFF',
          borderColor: '#CCF8EC',
        },
      },
      tertiary: {
        default: {
          backgroundColor: '#FFFFFF',
          textColor: '#3C4251',
          borderColor: '#B1B3B9',
        },
        hover: {
          backgroundColor: '#FFFFFF',
          textColor: '#EB3F93',
          borderColor: '#FFFFFF',
          boxShadow: '0px 8px 15px rgba(60, 66, 81, 0.25)',
        },
        onClick: {
          backgroundColor: '#ECEDEE',
          textColor: '#EB3F93',
          borderColor: '#B1B3B9',
        },
        disable: {
          backgroundColor: '#ECEDEE',
          textColor: '#FFFFFF',
          borderColor: '#ECEDEE',
        },
      },
      quaternary: {
        default: {
          backgroundColor: '#FFFFFF',
          textColor: '#EB3F93',
          borderColor: '#EB3F93',
        },
        hover: {
          backgroundColor: '#FFFFFF',
          textColor: '#EB3F93',
          borderColor: '#FFFFFF',
          boxShadow: '0px 8px 15px rgba(60, 66, 81, 0.25)',
        },
        onClick: {
          backgroundColor: '#FDECF5',
          textColor: '#EB3F93',
          borderColor: '#EB3F93',
        },
        disable: {
          backgroundColor: '#ECEDEE',
          textColor: '#FFFFFF',
          borderColor: '#ECEDEE',
        },
      },
      quinary: {
        default: {
          backgroundColor: '#FFFFFF',
          textColor: '#00DA9E',
          borderColor: '#00DA9E',
        },
        hover: {
          backgroundColor: '#FFFFFF',
          textColor: '#00DA9E',
          borderColor: '#FFFFFF',
          boxShadow: '0px 8px 15px rgba(60, 66, 81, 0.25)',
        },
        onClick: {
          backgroundColor: '#E6FCF6',
          textColor: '#00DA9E',
          borderColor: '#00DA9E',
        },
        disable: {
          backgroundColor: '#ECEDEE',
          textColor: '#FFFFFF',
          borderColor: '#ECEDEE',
        },
      },
    },
    buttonSizes: {
      large: {
        height: '72px',
        width: '240px',
        padding: '24px 64px',
        fontSize: '20px',
        lineHeight: '24px',
      },
      standard: {
        height: '48px',
        width: '147px',
        padding: '13px 32px',
        fontSize: '16px',
        lineHeight: '19px',
      },
      small: {
        height: '40px',
        width: '116px',
        padding: '11px 16px',
        fontSize: '16px',
        lineHeight: '19px',
      },
    },
    buttonWithLogoSizes: {
      large: {
        height: '72px',
        width: '240px',
        padding: '16px24px',
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
  };

  function _templateObject$8() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    background: ',
      ';\n    border: 1px solid;\n    border-color: ',
      ';\n    color: ',
      ';\n\n    border-radius: 3px;\n\n    padding: ',
      ';\n    height: ',
      ';\n    width: ',
      ';\n    font-size: ',
      ';\n    line-height: ',
      ';\n\n    font-family: Lato;\n    font-style: normal;\n    font-weight: bold;\n    text-align: center;\n\n    &&&:hover {\n      background: ',
      ';\n      border: ',
      ';\n      box-shadow: ',
      ';\n    }\n\n    &&&:focus {\n      background: ',
      ';\n      border: 1px solid;\n      box-shadow: none;\n      border-color: ',
      ';\n    }\n  }\n',
    ]);

    _templateObject$8 = function _templateObject() {
      return data;
    };

    return data;
  }
  var ButtonStyled = /*#__PURE__*/ styled(semanticUiReact.Button)(
    /*#__PURE__*/ _templateObject$8(),
    function(_ref) {
      var disabled = _ref.disabled,
        type = _ref.type;
      return disabled
        ? globalTheme.buttonPatterns[type].disable.backgroundColor
        : globalTheme.buttonPatterns[type]['default'].backgroundColor;
    },
    function(_ref2) {
      var disabled = _ref2.disabled,
        type = _ref2.type;
      return disabled
        ? globalTheme.buttonPatterns[type].disable.borderColor
        : globalTheme.buttonPatterns[type]['default'].borderColor;
    },
    function(_ref3) {
      var disabled = _ref3.disabled,
        type = _ref3.type;
      return disabled
        ? globalTheme.buttonPatterns[type].disable.textColor
        : globalTheme.buttonPatterns[type]['default'].textColor;
    },
    function(props) {
      return globalTheme.buttonSizes[props.size].padding;
    },
    function(props) {
      return globalTheme.buttonSizes[props.size].height;
    },
    function(props) {
      return props.fullWidth
        ? '100%'
        : globalTheme.buttonSizes[props.size].width;
    },
    function(props) {
      return globalTheme.buttonSizes[props.size].fontSize;
    },
    function(props) {
      return globalTheme.buttonSizes[props.size].lineHeight;
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].hover.backgroundColor;
    },
    function(props) {
      return (
        '1px solid ' + globalTheme.buttonPatterns[props.type].hover.borderColor
      );
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].hover.boxShadow;
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].onClick.backgroundColor;
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].onClick.borderColor;
    }
  );

  var Button = function Button(_ref) {
    var text = _ref.text,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function() {} : _ref$onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      idAttr = _ref.idAttr,
      className = _ref.className,
      type = _ref.type,
      size = _ref.size,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      rest = _objectWithoutPropertiesLoose(_ref, [
        'text',
        'onClick',
        'disabled',
        'idAttr',
        'className',
        'type',
        'size',
        'fullWidth',
      ]);

    return React__default.createElement(
      ButtonStyled,
      Object.assign(
        {
          onClick: onClick,
          disabled: disabled,
          id: idAttr,
          className: className,
          type: type,
          size: size,
          fullWidth: fullWidth,
        },
        rest
      ),
      text
    );
  };

  function _templateObject2$6() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  span {\n    margin-right: 5px;\n  }\n',
    ]);

    _templateObject2$6 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$9() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    border-radius: 3px;\n    font-family: Lato;\n    font-style: normal;\n    font-weight: bold;\n    text-align: center;\n    background: white;\n    color: #6067f1;\n    border: 1px solid #6067f1;\n\n    padding: ',
      ';\n    height: ',
      ';\n    width: ',
      ';\n    font-size: ',
      ';\n    line-height: ',
      ';\n\n    &&&:hover {\n      background: #ffffff;\n      border: 1px solid #ffffff;\n      box-shadow: 0 8px 15px rgba(60, 66, 81, 0.25);\n    }\n\n    &&&:focus {\n      background: #dcddf7;\n      border: 1px solid;\n      box-shadow: none;\n      border-color: #6067f1;\n    }\n  }\n',
    ]);

    _templateObject$9 = function _templateObject() {
      return data;
    };

    return data;
  }
  var ButtonStyled$1 = /*#__PURE__*/ styled(semanticUiReact.Button)(
    /*#__PURE__*/ _templateObject$9(),
    function(props) {
      return globalTheme.buttonSizes[props.size].padding;
    },
    function(props) {
      return globalTheme.buttonSizes[props.size].height;
    },
    function(props) {
      return props.fullWidth
        ? '100%'
        : globalTheme.buttonSizes[props.size].width;
    },
    function(props) {
      return globalTheme.buttonSizes[props.size].fontSize;
    },
    function(props) {
      return globalTheme.buttonSizes[props.size].lineHeight;
    }
  );
  var ButtonContent = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject2$6()
  );

  var BloomButton = function BloomButton(_ref) {
    var text = _ref.text,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      idAttr = _ref.idAttr,
      className = _ref.className,
      size = _ref.size,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      rest = _objectWithoutPropertiesLoose(_ref, [
        'text',
        'onClick',
        'disabled',
        'idAttr',
        'className',
        'size',
        'fullWidth',
      ]);

    return React__default.createElement(
      ButtonStyled$1,
      Object.assign(
        {
          onClick: onClick,
          disabled: disabled,
          id: idAttr,
          className: className,
          size: size,
          fullWidth: fullWidth,
        },
        rest
      ),
      React__default.createElement(
        ButtonContent,
        null,
        React__default.createElement('span', null, text),
        React__default.createElement(semanticUiReact.Image, {
          src: env.REACT_APP_HOST_IMAGES + '/images/signup_bloom.png',
          size: 'tiny',
        })
      )
    );
  };

  function _templateObject3$5() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  min-width: 205px;\n  &&& span {\n    padding-left: 10px;\n  }\n  &&& > img {\n    max-width: 40px;\n  }\n',
    ]);

    _templateObject3$5 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$7() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  &&& > img {\n    max-width: 20px;\n  }\n',
    ]);

    _templateObject2$7 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$a() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    background: ',
      ';\n    border: 1px solid;\n    border-color: ',
      ';\n    color: ',
      ';\n\n    border-radius: 3px;\n\n    padding: ',
      ';\n    height: ',
      ';\n    width: ',
      ';\n    font-size: ',
      ';\n    line-height: ',
      ';\n\n    font-family: Lato;\n    font-style: normal;\n    font-weight: bold;\n    text-align: center;\n\n    &&&:hover {\n      background: ',
      ';\n      border: ',
      ';\n      box-shadow: ',
      ';\n    }\n\n    &&&:focus {\n      background: ',
      ';\n      border: 1px solid;\n      box-shadow: none;\n      border-color: ',
      ';\n    }\n  }\n',
    ]);

    _templateObject$a = function _templateObject() {
      return data;
    };

    return data;
  }
  var ButtonStyled$2 = /*#__PURE__*/ styled(semanticUiReact.Button)(
    /*#__PURE__*/ _templateObject$a(),
    function(_ref) {
      var disabled = _ref.disabled,
        type = _ref.type;
      return disabled
        ? globalTheme.buttonPatterns[type].disable.backgroundColor
        : globalTheme.buttonPatterns[type]['default'].backgroundColor;
    },
    function(_ref2) {
      var disabled = _ref2.disabled,
        type = _ref2.type;
      return disabled
        ? globalTheme.buttonPatterns[type].disable.borderColor
        : globalTheme.buttonPatterns[type]['default'].borderColor;
    },
    function(_ref3) {
      var disabled = _ref3.disabled,
        type = _ref3.type;
      return disabled
        ? globalTheme.buttonPatterns[type].disable.textColor
        : globalTheme.buttonPatterns[type]['default'].textColor;
    },
    function(props) {
      return globalTheme.buttonWithLogoSizes[props.size].padding;
    },
    function(props) {
      return globalTheme.buttonWithLogoSizes[props.size].height;
    },
    function(props) {
      return props.fullWidth
        ? '100%'
        : globalTheme.buttonWithLogoSizes[props.size].width;
    },
    function(props) {
      return globalTheme.buttonWithLogoSizes[props.size].fontSize;
    },
    function(props) {
      return globalTheme.buttonWithLogoSizes[props.size].lineHeight;
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].hover.backgroundColor;
    },
    function(props) {
      return (
        '1px solid ' + globalTheme.buttonPatterns[props.type].hover.borderColor
      );
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].hover.boxShadow;
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].onClick.backgroundColor;
    },
    function(props) {
      return globalTheme.buttonPatterns[props.type].onClick.borderColor;
    }
  );
  var ButtonContent$1 = /*#__PURE__*/ styled.div(
    /*#__PURE__*/ _templateObject2$7()
  );
  var LeftSide = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject3$5());

  var ButtonLink = function ButtonLink(_ref) {
    var text = _ref.text,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      idAttr = _ref.idAttr,
      className = _ref.className,
      type = _ref.type,
      size = _ref.size,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      icon = _ref.icon,
      logo = _ref.logo,
      rest = _objectWithoutPropertiesLoose(_ref, [
        'text',
        'onClick',
        'disabled',
        'idAttr',
        'className',
        'type',
        'size',
        'fullWidth',
        'icon',
        'logo',
      ]);

    return React__default.createElement(
      ButtonStyled$2,
      Object.assign(
        {
          onClick: onClick,
          disabled: disabled,
          id: idAttr,
          className: className,
          type: type,
          size: size,
          fullWidth: fullWidth,
        },
        rest
      ),
      React__default.createElement(
        ButtonContent$1,
        null,
        React__default.createElement(
          LeftSide,
          null,
          React__default.createElement(semanticUiReact.Image, {
            src: env.REACT_APP_HOST_IMAGES + '/images/' + logo,
            size: 'tiny',
          }),
          React__default.createElement('span', null, text)
        ),
        React__default.createElement(semanticUiReact.Image, {
          src: env.REACT_APP_HOST_IMAGES + '/images/' + icon,
          size: 'tiny',
        })
      )
    );
  };

  function _templateObject3$6() {
    var data = _taggedTemplateLiteralLoose([
      '\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  &&& > .ui.image {\n    width: 16px;\n    margin: 2px;\n  }\n',
    ]);

    _templateObject3$6 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$8() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    ',
      ' {\n      border-top: 1px solid #c5c7cb;\n      border-right: 1px solid #c5c7cb;\n      border-bottom: 1px solid #c5c7cb;\n\n      &:first-child {\n        border-left: 1px solid #c5c7cb;\n      }\n    }\n  }\n',
    ]);

    _templateObject2$8 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$b() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    height: 48px;\n    min-width: 48px;\n    background-color: #fff;\n    box-sizing: border-box;\n    text-align: center;\n\n    font-family: Lato;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 138.27%;\n    color: #000000;\n\n    &:hover {\n      background: #ecedee;\n      cursor: pointer;\n    }\n    &.selected,\n    &:active {\n      background: #eb3f93;\n      color: #fff;\n    }\n  }\n',
    ]);

    _templateObject$b = function _templateObject() {
      return data;
    };

    return data;
  }
  var ButtonStyled$3 = /*#__PURE__*/ styled(semanticUiReact.Button)(
    /*#__PURE__*/ _templateObject$b()
  );
  var ButtonStyledGroup = /*#__PURE__*/ styled(semanticUiReact.Button.Group)(
    /*#__PURE__*/ _templateObject2$8(),
    ButtonStyled$3
  );
  var ButtonContent$2 = /*#__PURE__*/ styled.span(
    /*#__PURE__*/ _templateObject3$6()
  );

  var GroupButton = function GroupButton(_ref) {
    var options = _ref.options,
      _ref$withIcon = _ref.withIcon,
      withIcon = _ref$withIcon === void 0 ? false : _ref$withIcon,
      onClick = _ref.onClick,
      selectedIndex = _ref.selectedIndex;
    return React__default.createElement(
      ButtonStyledGroup,
      null,
      options.map(function(item) {
        return React__default.createElement(
          ButtonStyled$3,
          {
            icon: true,
            key: item.key,
            onClick: onClick(item.value),
            className: item.key === selectedIndex.toString() && 'selected',
          },
          React__default.createElement(
            ButtonContent$2,
            null,
            withIcon &&
              React__default.createElement(semanticUiReact.Image, {
                src: env.REACT_APP_HOST_IMAGES + '/images/coins/' + item.icon,
              }),
            item.text
          )
        );
      })
    );
  };

  function _templateObject2$9() {
    var data = _taggedTemplateLiteralLoose([
      '\n  font-family: Lato;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n',
    ]);

    _templateObject2$9 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$c() {
    var data = _taggedTemplateLiteralLoose([
      '\n  &&& {\n    &&&.ui.checkbox label {\n      font-family: Lato;\n      font-style: normal;\n      font-weight: normal;\n      font-size: ',
      ';\n      line-height: ',
      ';\n      color: #8a8e97;\n    }\n\n    .box:after,\n    .box:before,\n    label:after,\n    label:before {\n      transform: ',
      ';\n      transform-origin: left;\n      top: ',
      ';\n    }\n    &&&.ui.checkbox input:focus ~ .box:before,\n    &&&.ui.checkbox input:focus ~ label:before {\n      border: 1px solid #c5c7cb;\n      box-sizing: border-box;\n    }\n    &&& label::after {\n      color: #eb3f93;\n      top: -2px;\n      font-weight: normal;\n    }\n    &&& label::before:hover {\n      border: 1px solid #8a8e97;\n    }\n  }\n',
    ]);

    _templateObject$c = function _templateObject() {
      return data;
    };

    return data;
  }
  var CheckboxStyled = /*#__PURE__*/ styled(semanticUiReact.Checkbox)(
    /*#__PURE__*/ _templateObject$c(),
    function(_ref) {
      var size = _ref.size;
      return size === 'small' ? '12px' : '16px';
    },
    function(_ref2) {
      var size = _ref2.size;
      return size === 'small' ? '16px' : '24px';
    },
    function(_ref3) {
      var size = _ref3.size;
      return size === 'small' ? 'inherit' : 'scale(1.28571429)';
    },
    function(_ref4) {
      var size = _ref4.size;
      return size === 'small' ? '-1px' : '3px';
    }
  );
  var CheckboxLabel = /*#__PURE__*/ styled.label(
    /*#__PURE__*/ _templateObject2$9()
  );

  var CheckboxControl = function CheckboxControl(_ref) {
    var label = _ref.label,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'big' : _ref$size,
      rest = _objectWithoutPropertiesLoose(_ref, ['label', 'size']);

    return React__default.createElement(
      CheckboxStyled,
      Object.assign(
        {
          label: React__default.createElement(CheckboxLabel, null, label),
          size: size,
        },
        rest
      )
    );
  };

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends$3() {
    _extends$3 =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends$3.apply(this, arguments);
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true,
      },
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }

  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf$1(o);
  }

  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

    return _setPrototypeOf$1(o, p);
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return self;
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (typeof call === 'object' || typeof call === 'function')) {
      return call;
    }

    return _assertThisInitialized$1(self);
  }

  function createCommonjsModule$1(fn, module) {
    return (
      (module = {
        exports: {},
      }),
      fn(module, module.exports),
      module.exports
    );
  }
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1$1 = ReactPropTypesSecret$2;

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      if (secret === ReactPropTypesSecret_1$1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }

    shim.isRequired = shim;

    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes$1 = /*#__PURE__*/ createCommonjsModule$1(function(module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
  }); // basic noop function

  function noop() {}

  function returnTrue() {
    return true;
  }

  function charIsNumber(_char) {
    return !!(_char || '').match(/\d/);
  }

  function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
  }

  function getThousandsGroupRegex(thousandsGroupStyle) {
    switch (thousandsGroupStyle) {
      case 'lakh':
        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;

      case 'wan':
        return /(\d)(?=(\d{4})+(?!\d))/g;

      case 'thousand':
      default:
        return /(\d)(?=(\d{3})+(?!\d))/g;
    }
  }

  function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
    var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
    var index = str.search(/[1-9]/);
    index = index === -1 ? str.length : index;
    return (
      str.substring(0, index) +
      str
        .substring(index, str.length)
        .replace(thousandsGroupRegex, '$1' + thousandSeparator)
    );
  } //spilt a float number into different parts beforeDecimal, afterDecimal, and negation

  function splitDecimal(numStr) {
    var allowNegative =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var hasNagation = numStr[0] === '-';
    var addNegation = hasNagation && allowNegative;
    numStr = numStr.replace('-', '');
    var parts = numStr.split('.');
    var beforeDecimal = parts[0];
    var afterDecimal = parts[1] || '';
    return {
      beforeDecimal: beforeDecimal,
      afterDecimal: afterDecimal,
      hasNagation: hasNagation,
      addNegation: addNegation,
    };
  }

  function fixLeadingZero(numStr) {
    if (!numStr) return numStr;
    var isNegative = numStr[0] === '-';
    if (isNegative) numStr = numStr.substring(1, numStr.length);
    var parts = numStr.split('.');
    var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
    var afterDecimal = parts[1] || '';
    return ''
      .concat(isNegative ? '-' : '')
      .concat(beforeDecimal)
      .concat(afterDecimal ? '.'.concat(afterDecimal) : '');
  }
  /**
   * limit decimal numbers to given scale
   * Not used .fixedTo because that will break with big numbers
   */

  function limitToScale(numStr, scale, fixedDecimalScale) {
    var str = '';
    var filler = fixedDecimalScale ? '0' : '';

    for (var i = 0; i <= scale - 1; i++) {
      str += numStr[i] || filler;
    }

    return str;
  }
  /**
   * This method is required to round prop value to given scale.
   * Not used .round or .fixedTo because that will break with big numbers
   */

  function roundToPrecision(numStr, scale, fixedDecimalScale) {
    //if number is empty don't do anything return empty string
    if (['', '-'].indexOf(numStr) !== -1) return numStr;
    var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;

    var _splitDecimal = splitDecimal(numStr),
      beforeDecimal = _splitDecimal.beforeDecimal,
      afterDecimal = _splitDecimal.afterDecimal,
      hasNagation = _splitDecimal.hasNagation;

    var roundedDecimalParts = parseFloat('0.'.concat(afterDecimal || '0'))
      .toFixed(scale)
      .split('.');
    var intPart = beforeDecimal
      .split('')
      .reverse()
      .reduce(function(roundedStr, current, idx) {
        if (roundedStr.length > idx) {
          return (
            (Number(roundedStr[0]) + Number(current)).toString() +
            roundedStr.substring(1, roundedStr.length)
          );
        }

        return current + roundedStr;
      }, roundedDecimalParts[0]);
    var decimalPart = limitToScale(
      roundedDecimalParts[1] || '',
      Math.min(scale, afterDecimal.length),
      fixedDecimalScale
    );
    var negation = hasNagation ? '-' : '';
    var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
    return ''
      .concat(negation)
      .concat(intPart)
      .concat(decimalSeparator)
      .concat(decimalPart);
  }

  function omit(obj, keyMaps) {
    var filteredObj = {};
    Object.keys(obj).forEach(function(key) {
      if (!keyMaps[key]) filteredObj[key] = obj[key];
    });
    return filteredObj;
  }
  /** set the caret positon in an input field **/

  function setCaretPosition(el, caretPos) {
    el.value = el.value; // ^ this is used to not only get "focus", but
    // to make sure we don't have it everything -selected-
    // (it causes an issue in chrome, and having it doesn't hurt any other browser)

    if (el !== null) {
      if (el.createTextRange) {
        var range = el.createTextRange();
        range.move('character', caretPos);
        range.select();
        return true;
      } // (el.selectionStart === 0 added for Firefox bug)

      if (el.selectionStart || el.selectionStart === 0) {
        el.focus();
        el.setSelectionRange(caretPos, caretPos);
        return true;
      } // fail city, fortunately this never happens (as far as I've tested) :)

      el.focus();
      return false;
    }
  }
  /**
    Given previous value and newValue it returns the index
    start - end to which values have changed.
    This function makes assumption about only consecutive
    characters are changed which is correct assumption for caret input.
  */

  function findChangedIndex(prevValue, newValue) {
    var i = 0,
      j = 0;
    var prevLength = prevValue.length;
    var newLength = newValue.length;

    while (prevValue[i] === newValue[i] && i < prevLength) {
      i++;
    } //check what has been changed from last

    while (
      prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
      newLength - j > i &&
      prevLength - j > i
    ) {
      j++;
    }

    return {
      start: i,
      end: prevLength - j,
    };
  }
  /*
    Returns a number whose value is limited to the given range
  */

  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  function getCurrentCaretPosition(el) {
    /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
    return Math.max(el.selectionStart, el.selectionEnd);
  }

  var propTypes$1$1 = {
    thousandSeparator: /*#__PURE__*/ propTypes$1.oneOfType([
      propTypes$1.string,
      /*#__PURE__*/ propTypes$1.oneOf([true]),
    ]),
    decimalSeparator: propTypes$1.string,
    allowedDecimalSeparators: /*#__PURE__*/ propTypes$1.arrayOf(
      propTypes$1.string
    ),
    thousandsGroupStyle: /*#__PURE__*/ propTypes$1.oneOf([
      'thousand',
      'lakh',
      'wan',
    ]),
    decimalScale: propTypes$1.number,
    fixedDecimalScale: propTypes$1.bool,
    displayType: /*#__PURE__*/ propTypes$1.oneOf(['input', 'text']),
    prefix: propTypes$1.string,
    suffix: propTypes$1.string,
    format: /*#__PURE__*/ propTypes$1.oneOfType([
      propTypes$1.string,
      propTypes$1.func,
    ]),
    removeFormatting: propTypes$1.func,
    mask: /*#__PURE__*/ propTypes$1.oneOfType([
      propTypes$1.string,
      /*#__PURE__*/ propTypes$1.arrayOf(propTypes$1.string),
    ]),
    value: /*#__PURE__*/ propTypes$1.oneOfType([
      propTypes$1.number,
      propTypes$1.string,
    ]),
    defaultValue: /*#__PURE__*/ propTypes$1.oneOfType([
      propTypes$1.number,
      propTypes$1.string,
    ]),
    isNumericString: propTypes$1.bool,
    customInput: propTypes$1.elementType,
    allowNegative: propTypes$1.bool,
    allowEmptyFormatting: propTypes$1.bool,
    allowLeadingZeros: propTypes$1.bool,
    onValueChange: propTypes$1.func,
    onKeyDown: propTypes$1.func,
    onMouseUp: propTypes$1.func,
    onChange: propTypes$1.func,
    onFocus: propTypes$1.func,
    onBlur: propTypes$1.func,
    type: /*#__PURE__*/ propTypes$1.oneOf(['text', 'tel', 'password']),
    isAllowed: propTypes$1.func,
    renderText: propTypes$1.func,
    getInputRef: /*#__PURE__*/ propTypes$1.oneOfType([
      propTypes$1.func,
      /*#__PURE__*/
      // for legacy refs
      propTypes$1.shape({
        current: propTypes$1.any,
      }),
    ]),
  };
  var defaultProps$1 = {
    displayType: 'input',
    decimalSeparator: '.',
    thousandsGroupStyle: 'thousand',
    fixedDecimalScale: false,
    prefix: '',
    suffix: '',
    allowNegative: true,
    allowEmptyFormatting: false,
    allowLeadingZeros: false,
    isNumericString: false,
    type: 'text',
    onValueChange: noop,
    onChange: noop,
    onKeyDown: noop,
    onMouseUp: noop,
    onFocus: noop,
    onBlur: noop,
    isAllowed: returnTrue,
  };

  var NumberFormat = /*#__PURE__*/ (function(_React$Component) {
    _inherits$1(NumberFormat, _React$Component);

    function NumberFormat(props) {
      var _this;

      _classCallCheck$1(this, NumberFormat);

      _this = _possibleConstructorReturn$1(
        this,
        _getPrototypeOf$1(NumberFormat).call(this, props)
      );
      var defaultValue = props.defaultValue; //validate props

      _this.validateProps();

      var formattedValue = _this.formatValueProp(defaultValue);

      _this.state = {
        value: formattedValue,
        numAsString: _this.removeFormatting(formattedValue),
      };
      _this.selectionBeforeInput = {
        selectionStart: 0,
        selectionEnd: 0,
      };
      _this.onChange = _this.onChange.bind(_assertThisInitialized$1(_this));
      _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized$1(_this));
      _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized$1(_this));
      _this.onFocus = _this.onFocus.bind(_assertThisInitialized$1(_this));
      _this.onBlur = _this.onBlur.bind(_assertThisInitialized$1(_this));
      return _this;
    }

    _createClass(NumberFormat, [
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          this.updateValueIfRequired(prevProps);
        },
      },
      {
        key: 'updateValueIfRequired',
        value: function updateValueIfRequired(prevProps) {
          var props = this.props,
            state = this.state,
            focusedElm = this.focusedElm;
          var stateValue = state.value,
            _state$numAsString = state.numAsString,
            lastNumStr =
              _state$numAsString === void 0 ? '' : _state$numAsString; // If only state changed no need to do any thing

          if (prevProps !== props) {
            //validate props
            this.validateProps();
            var lastValueWithNewFormat = this.formatNumString(lastNumStr);
            var formattedValue =
              props.value === undefined
                ? lastValueWithNewFormat
                : this.formatValueProp();
            var numAsString = this.removeFormatting(formattedValue);
            var floatValue = parseFloat(numAsString);
            var lastFloatValue = parseFloat(lastNumStr);

            if (
              //while typing set state only when float value changes
              ((!isNaN(floatValue) || !isNaN(lastFloatValue)) &&
                floatValue !== lastFloatValue) || //can also set state when float value is same and the format props changes
              lastValueWithNewFormat !== stateValue || //set state always when not in focus and formatted value is changed
              (focusedElm === null && formattedValue !== stateValue)
            ) {
              this.updateValue({
                formattedValue: formattedValue,
                numAsString: numAsString,
                input: focusedElm,
              });
            }
          }
        },
        /** Misc methods **/
      },
      {
        key: 'getFloatString',
        value: function getFloatString() {
          var num =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : '';
          var decimalScale = this.props.decimalScale;

          var _this$getSeparators = this.getSeparators(),
            decimalSeparator = _this$getSeparators.decimalSeparator;

          var numRegex = this.getNumberRegex(true); //remove negation for regex check

          var hasNegation = num[0] === '-';
          if (hasNegation) num = num.replace('-', ''); //if decimal scale is zero remove decimal and number after decimalSeparator

          if (decimalSeparator && decimalScale === 0) {
            num = num.split(decimalSeparator)[0];
          }

          num = (num.match(numRegex) || [])
            .join('')
            .replace(decimalSeparator, '.'); //remove extra decimals

          var firstDecimalIndex = num.indexOf('.');

          if (firstDecimalIndex !== -1) {
            num = ''
              .concat(num.substring(0, firstDecimalIndex), '.')
              .concat(
                num
                  .substring(firstDecimalIndex + 1, num.length)
                  .replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), '')
              );
          } //add negation back

          if (hasNegation) num = '-' + num;
          return num;
        }, //returned regex assumes decimalSeparator is as per prop
      },
      {
        key: 'getNumberRegex',
        value: function getNumberRegex(g, ignoreDecimalSeparator) {
          var _this$props = this.props,
            format = _this$props.format,
            decimalScale = _this$props.decimalScale;

          var _this$getSeparators2 = this.getSeparators(),
            decimalSeparator = _this$getSeparators2.decimalSeparator;

          return new RegExp(
            '\\d' +
              (decimalSeparator &&
              decimalScale !== 0 &&
              !ignoreDecimalSeparator &&
              !format
                ? '|' + escapeRegExp(decimalSeparator)
                : ''),
            g ? 'g' : undefined
          );
        },
      },
      {
        key: 'getSeparators',
        value: function getSeparators() {
          var decimalSeparator = this.props.decimalSeparator;
          var _this$props2 = this.props,
            thousandSeparator = _this$props2.thousandSeparator,
            allowedDecimalSeparators = _this$props2.allowedDecimalSeparators;

          if (thousandSeparator === true) {
            thousandSeparator = ',';
          }

          if (!allowedDecimalSeparators) {
            allowedDecimalSeparators = [decimalSeparator, '.'];
          }

          return {
            decimalSeparator: decimalSeparator,
            thousandSeparator: thousandSeparator,
            allowedDecimalSeparators: allowedDecimalSeparators,
          };
        },
      },
      {
        key: 'getMaskAtIndex',
        value: function getMaskAtIndex(index) {
          var _this$props$mask = this.props.mask,
            mask = _this$props$mask === void 0 ? ' ' : _this$props$mask;

          if (typeof mask === 'string') {
            return mask;
          }

          return mask[index] || ' ';
        },
      },
      {
        key: 'getValueObject',
        value: function getValueObject(formattedValue, numAsString) {
          var floatValue = parseFloat(numAsString);
          return {
            formattedValue: formattedValue,
            value: numAsString,
            floatValue: isNaN(floatValue) ? undefined : floatValue,
          };
        },
      },
      {
        key: 'validateProps',
        value: function validateProps() {
          var mask = this.props.mask; //validate decimalSeparator and thousandSeparator

          var _this$getSeparators3 = this.getSeparators(),
            decimalSeparator = _this$getSeparators3.decimalSeparator,
            thousandSeparator = _this$getSeparators3.thousandSeparator;

          if (decimalSeparator === thousandSeparator) {
            throw new Error(
              "\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "
                .concat(
                  thousandSeparator,
                  ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '
                )
                .concat(
                  decimalSeparator,
                  ' (default value for decimalSeparator is .)\n       '
                )
            );
          } //validate mask

          if (mask) {
            var maskAsStr = mask === 'string' ? mask : mask.toString();

            if (maskAsStr.match(/\d/g)) {
              throw new Error(
                '\n          Mask '.concat(
                  mask,
                  ' should not contain numeric character;\n        '
                )
              );
            }
          }
        },
        /** Misc methods end **/

        /** caret specific methods **/
      },
      {
        key: 'setPatchedCaretPosition',
        value: function setPatchedCaretPosition(el, caretPos, currentValue) {
          /* setting caret position within timeout of 0ms is required for mobile chrome,
        otherwise browser resets the caret position after we set it
        We are also setting it without timeout so that in normal browser we don't see the flickering */
          setCaretPosition(el, caretPos);
          setTimeout(function() {
            if (el.value === currentValue) setCaretPosition(el, caretPos);
          }, 0);
        },
        /* This keeps the caret within typing area so people can't type in between prefix or suffix */
      },
      {
        key: 'correctCaretPosition',
        value: function correctCaretPosition(value, caretPos, direction) {
          var _this$props3 = this.props,
            prefix = _this$props3.prefix,
            suffix = _this$props3.suffix,
            format = _this$props3.format; //if value is empty return 0

          if (value === '') return 0; //caret position should be between 0 and value length

          caretPos = clamp(caretPos, 0, value.length); //in case of format as number limit between prefix and suffix

          if (!format) {
            var hasNegation = value[0] === '-';
            return clamp(
              caretPos,
              prefix.length + (hasNegation ? 1 : 0),
              value.length - suffix.length
            );
          } //in case if custom format method don't do anything

          if (typeof format === 'function') return caretPos;
          /* in case format is string find the closest # position from the caret position */
          //in case the caretPos have input value on it don't do anything

          if (format[caretPos] === '#' && charIsNumber(value[caretPos]))
            return caretPos; //if caretPos is just after input value don't do anything

          if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1]))
            return caretPos; //find the nearest caret position

          var firstHashPosition = format.indexOf('#');
          var lastHashPosition = format.lastIndexOf('#'); //limit the cursor between the first # position and the last # position

          caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);
          var nextPos = format.substring(caretPos, format.length).indexOf('#');
          var caretLeftBound = caretPos;
          var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos); //get the position where the last number is present

          while (
            caretLeftBound > firstHashPosition &&
            (format[caretLeftBound] !== '#' ||
              !charIsNumber(value[caretLeftBound]))
          ) {
            caretLeftBound -= 1;
          }

          var goToLeft =
            !charIsNumber(value[caretRightBound]) ||
            (direction === 'left' && caretPos !== firstHashPosition) ||
            caretPos - caretLeftBound < caretRightBound - caretPos;

          if (goToLeft) {
            //check if number should be taken after the bound or after it
            //if number preceding a valid number keep it after
            return charIsNumber(value[caretLeftBound])
              ? caretLeftBound + 1
              : caretLeftBound;
          }

          return caretRightBound;
        },
      },
      {
        key: 'getCaretPosition',
        value: function getCaretPosition(inputValue, formattedValue, caretPos) {
          var format = this.props.format;
          var stateValue = this.state.value;
          var numRegex = this.getNumberRegex(true);
          var inputNumber = (inputValue.match(numRegex) || []).join('');
          var formattedNumber = (formattedValue.match(numRegex) || []).join('');
          var j, i;
          j = 0;

          for (i = 0; i < caretPos; i++) {
            var currentInputChar = inputValue[i] || '';
            var currentFormatChar = formattedValue[j] || ''; //no need to increase new cursor position if formatted value does not have those characters
            //case inputValue = 1a23 and formattedValue =  123

            if (
              !currentInputChar.match(numRegex) &&
              currentInputChar !== currentFormatChar
            )
              continue; //When we are striping out leading zeros maintain the new cursor position
            //Case inputValue = 00023 and formattedValue = 23;

            if (
              currentInputChar === '0' &&
              currentFormatChar.match(numRegex) &&
              currentFormatChar !== '0' &&
              inputNumber.length !== formattedNumber.length
            )
              continue; //we are not using currentFormatChar because j can change here

            while (
              currentInputChar !== formattedValue[j] &&
              j < formattedValue.length
            ) {
              j++;
            }

            j++;
          }

          if (typeof format === 'string' && !stateValue) {
            //set it to the maximum value so it goes after the last number
            j = formattedValue.length;
          } //correct caret position if its outside of editable area

          j = this.correctCaretPosition(formattedValue, j);
          return j;
        },
        /** caret specific methods ends **/

        /** methods to remove formattting **/
      },
      {
        key: 'removePrefixAndSuffix',
        value: function removePrefixAndSuffix(val) {
          var _this$props4 = this.props,
            format = _this$props4.format,
            prefix = _this$props4.prefix,
            suffix = _this$props4.suffix; //remove prefix and suffix

          if (!format && val) {
            var isNegative = val[0] === '-'; //remove negation sign

            if (isNegative) val = val.substring(1, val.length); //remove prefix

            val =
              prefix && val.indexOf(prefix) === 0
                ? val.substring(prefix.length, val.length)
                : val; //remove suffix

            var suffixLastIndex = val.lastIndexOf(suffix);
            val =
              suffix &&
              suffixLastIndex !== -1 &&
              suffixLastIndex === val.length - suffix.length
                ? val.substring(0, suffixLastIndex)
                : val; //add negation sign back

            if (isNegative) val = '-' + val;
          }

          return val;
        },
      },
      {
        key: 'removePatternFormatting',
        value: function removePatternFormatting(val) {
          var format = this.props.format;
          var formatArray = format.split('#').filter(function(str) {
            return str !== '';
          });
          var start = 0;
          var numStr = '';

          for (var i = 0, ln = formatArray.length; i <= ln; i++) {
            var part = formatArray[i] || ''; //if i is the last fragment take the index of end of the value
            //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##

            var index = i === ln ? val.length : val.indexOf(part, start);
            /* in any case if we don't find the pattern part in the value assume the val as numeric string
          This will be also in case if user has started typing, in any other case it will not be -1
          unless wrong prop value is provided */

            if (index === -1) {
              numStr = val;
              break;
            } else {
              numStr += val.substring(start, index);
              start = index + part.length;
            }
          }

          return (numStr.match(/\d/g) || []).join('');
        },
      },
      {
        key: 'removeFormatting',
        value: function removeFormatting(val) {
          var _this$props5 = this.props,
            format = _this$props5.format,
            removeFormatting = _this$props5.removeFormatting;
          if (!val) return val;

          if (!format) {
            val = this.removePrefixAndSuffix(val);
            val = this.getFloatString(val);
          } else if (typeof format === 'string') {
            val = this.removePatternFormatting(val);
          } else if (typeof removeFormatting === 'function') {
            //condition need to be handled if format method is provide,
            val = removeFormatting(val);
          } else {
            val = (val.match(/\d/g) || []).join('');
          }

          return val;
        },
        /** methods to remove formattting end **/

        /*** format specific methods start ***/

        /**
         * Format when # based string is provided
         * @param  {string} numStr Numeric String
         * @return {string}        formatted Value
         */
      },
      {
        key: 'formatWithPattern',
        value: function formatWithPattern(numStr) {
          var format = this.props.format;
          var hashCount = 0;
          var formattedNumberAry = format.split('');

          for (var i = 0, ln = format.length; i < ln; i++) {
            if (format[i] === '#') {
              formattedNumberAry[i] =
                numStr[hashCount] || this.getMaskAtIndex(hashCount);
              hashCount += 1;
            }
          }

          return formattedNumberAry.join('');
        },
        /**
         * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
         * @return {string} formatted Value
         */
      },
      {
        key: 'formatAsNumber',
        value: function formatAsNumber(numStr) {
          var _this$props6 = this.props,
            decimalScale = _this$props6.decimalScale,
            fixedDecimalScale = _this$props6.fixedDecimalScale,
            prefix = _this$props6.prefix,
            suffix = _this$props6.suffix,
            allowNegative = _this$props6.allowNegative,
            thousandsGroupStyle = _this$props6.thousandsGroupStyle;

          var _this$getSeparators4 = this.getSeparators(),
            thousandSeparator = _this$getSeparators4.thousandSeparator,
            decimalSeparator = _this$getSeparators4.decimalSeparator;

          var hasDecimalSeparator =
            numStr.indexOf('.') !== -1 || (decimalScale && fixedDecimalScale);

          var _splitDecimal = splitDecimal(numStr, allowNegative),
            beforeDecimal = _splitDecimal.beforeDecimal,
            afterDecimal = _splitDecimal.afterDecimal,
            addNegation = _splitDecimal.addNegation; // eslint-disable-line prefer-const
          //apply decimal precision if its defined

          if (decimalScale !== undefined)
            afterDecimal = limitToScale(
              afterDecimal,
              decimalScale,
              fixedDecimalScale
            );

          if (thousandSeparator) {
            beforeDecimal = applyThousandSeparator(
              beforeDecimal,
              thousandSeparator,
              thousandsGroupStyle
            );
          } //add prefix and suffix

          if (prefix) beforeDecimal = prefix + beforeDecimal;
          if (suffix) afterDecimal = afterDecimal + suffix; //restore negation sign

          if (addNegation) beforeDecimal = '-' + beforeDecimal;
          numStr =
            beforeDecimal +
            ((hasDecimalSeparator && decimalSeparator) || '') +
            afterDecimal;
          return numStr;
        },
      },
      {
        key: 'formatNumString',
        value: function formatNumString() {
          var numStr =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : '';
          var _this$props7 = this.props,
            format = _this$props7.format,
            allowEmptyFormatting = _this$props7.allowEmptyFormatting;
          var formattedValue = numStr;

          if (numStr === '' && !allowEmptyFormatting) {
            formattedValue = '';
          } else if (numStr === '-' && !format) {
            formattedValue = '-';
          } else if (typeof format === 'string') {
            formattedValue = this.formatWithPattern(formattedValue);
          } else if (typeof format === 'function') {
            formattedValue = format(formattedValue);
          } else {
            formattedValue = this.formatAsNumber(formattedValue);
          }

          return formattedValue;
        },
      },
      {
        key: 'formatValueProp',
        value: function formatValueProp(defaultValue) {
          var _this$props8 = this.props,
            format = _this$props8.format,
            decimalScale = _this$props8.decimalScale,
            fixedDecimalScale = _this$props8.fixedDecimalScale,
            allowEmptyFormatting = _this$props8.allowEmptyFormatting;
          var _this$props9 = this.props,
            _this$props9$value = _this$props9.value,
            value =
              _this$props9$value === void 0 ? defaultValue : _this$props9$value,
            isNumericString = _this$props9.isNumericString;
          var isNonNumericFalsy = !value && value !== 0;

          if (isNonNumericFalsy && allowEmptyFormatting) {
            value = '';
          } // if value is not defined return empty string

          if (isNonNumericFalsy && !allowEmptyFormatting) return '';

          if (typeof value === 'number') {
            value = value.toString();
            isNumericString = true;
          } //change infinity value to empty string

          if (value === 'Infinity' && isNumericString) {
            value = '';
          } //round the number based on decimalScale
          //format only if non formatted value is provided

          if (isNumericString && !format && typeof decimalScale === 'number') {
            value = roundToPrecision(value, decimalScale, fixedDecimalScale);
          }

          var formattedValue = isNumericString
            ? this.formatNumString(value)
            : this.formatInput(value);
          return formattedValue;
        },
      },
      {
        key: 'formatNegation',
        value: function formatNegation() {
          var value =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : '';
          var allowNegative = this.props.allowNegative;
          var negationRegex = new RegExp('(-)');
          var doubleNegationRegex = new RegExp('(-)(.)*(-)'); // Check number has '-' value

          var hasNegation = negationRegex.test(value); // Check number has 2 or more '-' values

          var removeNegation = doubleNegationRegex.test(value); //remove negation

          value = value.replace(/-/g, '');

          if (hasNegation && !removeNegation && allowNegative) {
            value = '-' + value;
          }

          return value;
        },
      },
      {
        key: 'formatInput',
        value: function formatInput() {
          var value =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : '';
          var format = this.props.format; //format negation only if we are formatting as number

          if (!format) {
            value = this.removePrefixAndSuffix(value);
            value = this.formatNegation(value);
          } //remove formatting from number

          value = this.removeFormatting(value);
          return this.formatNumString(value);
        },
        /*** format specific methods end ***/
      },
      {
        key: 'isCharacterAFormat',
        value: function isCharacterAFormat(caretPos, value) {
          var _this$props10 = this.props,
            format = _this$props10.format,
            prefix = _this$props10.prefix,
            suffix = _this$props10.suffix,
            decimalScale = _this$props10.decimalScale,
            fixedDecimalScale = _this$props10.fixedDecimalScale;

          var _this$getSeparators5 = this.getSeparators(),
            decimalSeparator = _this$getSeparators5.decimalSeparator; //check within format pattern

          if (typeof format === 'string' && format[caretPos] !== '#')
            return true; //check in number format

          if (
            !format &&
            (caretPos < prefix.length ||
              caretPos >= value.length - suffix.length ||
              (decimalScale &&
                fixedDecimalScale &&
                value[caretPos] === decimalSeparator))
          ) {
            return true;
          }

          return false;
        },
      },
      {
        key: 'checkIfFormatGotDeleted',
        value: function checkIfFormatGotDeleted(start, end, value) {
          for (var i = start; i < end; i++) {
            if (this.isCharacterAFormat(i, value)) return true;
          }

          return false;
        },
        /**
         * This will check if any formatting got removed by the delete or backspace and reset the value
         * It will also work as fallback if android chome keyDown handler does not work
         **/
      },
      {
        key: 'correctInputValue',
        value: function correctInputValue(caretPos, lastValue, value) {
          var _this$props11 = this.props,
            format = _this$props11.format,
            allowNegative = _this$props11.allowNegative,
            prefix = _this$props11.prefix,
            suffix = _this$props11.suffix,
            decimalScale = _this$props11.decimalScale;

          var _this$getSeparators6 = this.getSeparators(),
            allowedDecimalSeparators =
              _this$getSeparators6.allowedDecimalSeparators,
            decimalSeparator = _this$getSeparators6.decimalSeparator;

          var lastNumStr = this.state.numAsString || '';
          var _this$selectionBefore = this.selectionBeforeInput,
            selectionStart = _this$selectionBefore.selectionStart,
            selectionEnd = _this$selectionBefore.selectionEnd;

          var _findChangedIndex = findChangedIndex(lastValue, value),
            start = _findChangedIndex.start,
            end = _findChangedIndex.end;
          /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */

          if (
            !format &&
            start === end &&
            allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1
          ) {
            var separator = decimalScale === 0 ? '' : decimalSeparator;
            return (
              value.substr(0, selectionStart) +
              separator +
              value.substr(selectionStart + 1, value.length)
            );
          }
          /* don't do anyhting if something got added,
         or if value is empty string (when whole input is cleared)
         or whole input is replace with a number
        */

          var leftBound = !!format ? 0 : prefix.length;
          var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

          if (
            value.length > lastValue.length ||
            !value.length ||
            start === end ||
            (selectionStart === 0 && selectionEnd === lastValue.length) ||
            (selectionStart === leftBound && selectionEnd === rightBound)
          ) {
            return value;
          } //if format got deleted reset the value to last value

          if (this.checkIfFormatGotDeleted(start, end, lastValue)) {
            value = lastValue;
          } //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
          //clear all numbers in such case while keeping the - sign

          if (!format) {
            var numericString = this.removeFormatting(value);

            var _splitDecimal2 = splitDecimal(numericString, allowNegative),
              beforeDecimal = _splitDecimal2.beforeDecimal,
              afterDecimal = _splitDecimal2.afterDecimal,
              addNegation = _splitDecimal2.addNegation; // eslint-disable-line prefer-const
            //clear only if something got deleted

            var isBeforeDecimalPoint =
              caretPos < value.indexOf(decimalSeparator) + 1;

            if (
              numericString.length < lastNumStr.length &&
              isBeforeDecimalPoint &&
              beforeDecimal === '' &&
              !parseFloat(afterDecimal)
            ) {
              return addNegation ? '-' : '';
            }
          }

          return value;
        },
        /** Update value and caret position */
      },
      {
        key: 'updateValue',
        value: function updateValue(params) {
          var formattedValue = params.formattedValue,
            input = params.input,
            _params$setCaretPosit = params.setCaretPosition,
            setCaretPosition =
              _params$setCaretPosit === void 0 ? true : _params$setCaretPosit;
          var numAsString = params.numAsString,
            caretPos = params.caretPos;
          var onValueChange = this.props.onValueChange;
          var lastValue = this.state.value;

          if (input) {
            //set caret position, and value imperatively when element is provided
            if (setCaretPosition) {
              //calculate caret position if not defined
              if (!caretPos) {
                var inputValue = params.inputValue || input.value;
                var currentCaretPosition = getCurrentCaretPosition(input);
                /**
                 * set the value imperatively, this is required for IE fix
                 * This is also required as if new caret position is beyond the previous value.
                 * Caret position will not be set correctly
                 */

                input.value = formattedValue; //get the caret position

                caretPos = this.getCaretPosition(
                  inputValue,
                  formattedValue,
                  currentCaretPosition
                );
              } //set caret position

              this.setPatchedCaretPosition(input, caretPos, formattedValue);
            } else {
              /**
               * if we are not setting caret position set the value imperatively.
               * This is required on onBlur method
               */
              input.value = formattedValue;
            }
          } //calculate numeric string if not passed

          if (numAsString === undefined) {
            numAsString = this.removeFormatting(formattedValue);
          } //update state if value is changed

          if (formattedValue !== lastValue) {
            this.setState({
              value: formattedValue,
              numAsString: numAsString,
            }); // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287

            onValueChange(this.getValueObject(formattedValue, numAsString));
          }
        },
      },
      {
        key: 'onChange',
        value: function onChange(e) {
          var el = e.target;
          var inputValue = el.value;
          var state = this.state,
            props = this.props;
          var isAllowed = props.isAllowed;
          var lastValue = state.value || '';
          var currentCaretPosition = getCurrentCaretPosition(el);
          inputValue = this.correctInputValue(
            currentCaretPosition,
            lastValue,
            inputValue
          );
          var formattedValue = this.formatInput(inputValue) || '';
          var numAsString = this.removeFormatting(formattedValue);
          var valueObj = this.getValueObject(formattedValue, numAsString);

          if (!isAllowed(valueObj)) {
            formattedValue = lastValue;
          }

          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            inputValue: inputValue,
            input: el,
          });
          props.onChange(e);
        },
      },
      {
        key: 'onBlur',
        value: function onBlur(e) {
          var props = this.props,
            state = this.state;
          var format = props.format,
            onBlur = props.onBlur,
            allowLeadingZeros = props.allowLeadingZeros;
          var numAsString = state.numAsString;
          var lastValue = state.value;
          this.focusedElm = null;

          if (this.focusTimeout) {
            clearTimeout(this.focusTimeout);
          }

          if (!format) {
            // if the numAsString is not a valid number reset it to empty
            if (isNaN(parseFloat(numAsString))) {
              numAsString = '';
            }

            if (!allowLeadingZeros) {
              numAsString = fixLeadingZero(numAsString);
            }

            var formattedValue = this.formatNumString(numAsString); //change the state

            if (formattedValue !== lastValue) {
              // the event needs to be persisted because its properties can be accessed in an asynchronous way
              this.updateValue({
                formattedValue: formattedValue,
                numAsString: numAsString,
                input: e.target,
                setCaretPosition: false,
              });
              onBlur(e);
              return;
            }
          }

          onBlur(e);
        },
      },
      {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
          var el = e.target;
          var key = e.key;
          var selectionStart = el.selectionStart,
            selectionEnd = el.selectionEnd,
            _el$value = el.value,
            value = _el$value === void 0 ? '' : _el$value;
          var expectedCaretPosition;
          var _this$props12 = this.props,
            decimalScale = _this$props12.decimalScale,
            fixedDecimalScale = _this$props12.fixedDecimalScale,
            prefix = _this$props12.prefix,
            suffix = _this$props12.suffix,
            format = _this$props12.format,
            onKeyDown = _this$props12.onKeyDown;
          var ignoreDecimalSeparator =
            decimalScale !== undefined && fixedDecimalScale;
          var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
          var negativeRegex = new RegExp('-');
          var isPatternFormat = typeof format === 'string';
          this.selectionBeforeInput = {
            selectionStart: selectionStart,
            selectionEnd: selectionEnd,
          }; //Handle backspace and delete against non numerical/decimal characters or arrow keys

          if (key === 'ArrowLeft' || key === 'Backspace') {
            expectedCaretPosition = selectionStart - 1;
          } else if (key === 'ArrowRight') {
            expectedCaretPosition = selectionStart + 1;
          } else if (key === 'Delete') {
            expectedCaretPosition = selectionStart;
          } //if expectedCaretPosition is not set it means we don't want to Handle keyDown
          //also if multiple characters are selected don't handle

          if (
            expectedCaretPosition === undefined ||
            selectionStart !== selectionEnd
          ) {
            onKeyDown(e);
            return;
          }

          var newCaretPosition = expectedCaretPosition;
          var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
          var rightBound = isPatternFormat
            ? format.lastIndexOf('#') + 1
            : value.length - suffix.length;

          if (key === 'ArrowLeft' || key === 'ArrowRight') {
            var direction = key === 'ArrowLeft' ? 'left' : 'right';
            newCaretPosition = this.correctCaretPosition(
              value,
              expectedCaretPosition,
              direction
            );
          } else if (
            key === 'Delete' &&
            !numRegex.test(value[expectedCaretPosition]) &&
            !negativeRegex.test(value[expectedCaretPosition])
          ) {
            while (
              !numRegex.test(value[newCaretPosition]) &&
              newCaretPosition < rightBound
            ) {
              newCaretPosition++;
            }
          } else if (
            key === 'Backspace' &&
            !numRegex.test(value[expectedCaretPosition])
          ) {
            /* NOTE: This is special case when backspace is pressed on a
          negative value while the cursor position is after prefix. We can't handle it on onChange because
          we will not have any information of keyPress
          */
            if (
              selectionStart <= leftBound + 1 &&
              value[0] === '-' &&
              typeof format === 'undefined'
            ) {
              var newValue = value.substring(1);
              this.updateValue({
                formattedValue: newValue,
                caretPos: newCaretPosition,
                input: el,
              });
            } else if (!negativeRegex.test(value[expectedCaretPosition])) {
              while (
                !numRegex.test(value[newCaretPosition - 1]) &&
                newCaretPosition > leftBound
              ) {
                newCaretPosition--;
              }

              newCaretPosition = this.correctCaretPosition(
                value,
                newCaretPosition,
                'left'
              );
            }
          }

          if (
            newCaretPosition !== expectedCaretPosition ||
            expectedCaretPosition < leftBound ||
            expectedCaretPosition > rightBound
          ) {
            e.preventDefault();
            this.setPatchedCaretPosition(el, newCaretPosition, value);
          }
          /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
                Remove this when you find different solution */

          if (e.isUnitTestRun) {
            this.setPatchedCaretPosition(el, newCaretPosition, value);
          }

          onKeyDown(e);
        },
        /** required to handle the caret position when click anywhere within the input **/
      },
      {
        key: 'onMouseUp',
        value: function onMouseUp(e) {
          var el = e.target;
          /**
           * NOTE: we have to give default value for value as in case when custom input is provided
           * value can come as undefined when nothing is provided on value prop.
           */

          var selectionStart = el.selectionStart,
            selectionEnd = el.selectionEnd,
            _el$value2 = el.value,
            value = _el$value2 === void 0 ? '' : _el$value2;

          if (selectionStart === selectionEnd) {
            var caretPosition = this.correctCaretPosition(
              value,
              selectionStart
            );

            if (caretPosition !== selectionStart) {
              this.setPatchedCaretPosition(el, caretPosition, value);
            }
          }

          this.props.onMouseUp(e);
        },
      },
      {
        key: 'onFocus',
        value: function onFocus(e) {
          var _this2 = this; // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
          // (onFocus event target selectionStart is always 0 before setTimeout)

          e.persist();
          this.focusedElm = e.target;
          this.focusTimeout = setTimeout(function() {
            var el = e.target;
            var selectionStart = el.selectionStart,
              selectionEnd = el.selectionEnd,
              _el$value3 = el.value,
              value = _el$value3 === void 0 ? '' : _el$value3;

            var caretPosition = _this2.correctCaretPosition(
              value,
              selectionStart
            ); //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)

            if (
              caretPosition !== selectionStart &&
              !(selectionStart === 0 && selectionEnd === value.length)
            ) {
              _this2.setPatchedCaretPosition(el, caretPosition, value);
            }

            _this2.props.onFocus(e);
          }, 0);
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props13 = this.props,
            type = _this$props13.type,
            displayType = _this$props13.displayType,
            customInput = _this$props13.customInput,
            renderText = _this$props13.renderText,
            getInputRef = _this$props13.getInputRef;
          var value = this.state.value;
          var otherProps = omit(this.props, propTypes$1$1);

          var inputProps = _extends$3(
            {
              inputMode: 'numeric',
            },
            otherProps,
            {
              type: type,
              value: value,
              onChange: this.onChange,
              onKeyDown: this.onKeyDown,
              onMouseUp: this.onMouseUp,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
            }
          );

          if (displayType === 'text') {
            return renderText
              ? renderText(value) || null
              : React__default.createElement(
                  'span',
                  _extends$3({}, otherProps, {
                    ref: getInputRef,
                  }),
                  value
                );
          } else if (customInput) {
            var CustomInput = customInput;
            return React__default.createElement(
              CustomInput,
              _extends$3({}, inputProps, {
                ref: getInputRef,
              })
            );
          }

          return React__default.createElement(
            'input',
            _extends$3({}, inputProps, {
              ref: getInputRef,
            })
          );
        },
      },
    ]);

    return NumberFormat;
  })(React__default.Component);

  NumberFormat.propTypes = propTypes$1$1;
  NumberFormat.defaultProps = defaultProps$1;

  function _templateObject$d() {
    var data = _taggedTemplateLiteralLoose([
      '\n  border: ',
      ';\n  background: #ffffff;\n  box-sizing: border-box;\n  border-radius: 3px;\n  height: 48px;\n  width: 260px;\n\n  :hover {\n    border: 1px solid #8a8e97;\n  }\n\n  :active {\n    border: 1px solid #eb3f93;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  :focus {\n    border: 1px solid #eb3f93;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  /* Overrides Semantic-ui behavior */\n  &&&.ui.input input {\n    border: none;\n  }\n',
    ]);

    _templateObject$d = function _templateObject() {
      return data;
    };

    return data;
  }
  var InputFieldStyled = /*#__PURE__*/ styled(semanticUiReact.Input)(
    /*#__PURE__*/ _templateObject$d(),
    function(_ref) {
      var disabled = _ref.disabled;
      return disabled ? '1px solid #D8D9DC' : '1px solid #c5c7cb';
    }
  );

  var InputNumber = function InputNumber(props) {
    var decimalScale = 2;
    var thousandSeparator = '.';
    var decimalSeparator = ',';
    var numeralSize = numeral(props.value).length;
    return React__default.createElement(
      NumberFormat,
      Object.assign(
        {
          className: 'input-number',
          allowEmptyFormatting: false,
          fixedDecimalScale: true,
          decimalScale: decimalScale,
          thousandSeparator: thousandSeparator,
          decimalSeparator: decimalSeparator,
          size: numeralSize,
          customInput: InputFieldStyled,
        },
        props
      )
    );
  };

  var InputText = function InputText(_ref) {
    var _ref$placeholder = _ref.placeholder,
      placeholder =
        _ref$placeholder === void 0 ? 'Type here' : _ref$placeholder,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    return React__default.createElement(InputFieldStyled, {
      placeholder: placeholder,
      disabled: disabled,
    });
  };

  function _templateObject$e() {
    var data = _taggedTemplateLiteralLoose([
      '\n  background: #ffffff;\n  border: 1px solid #cfd0d4;\n  box-sizing: border-box;\n  border-radius: 4px;\n  height: 48px;\n\n  &&&.ui.selection.dropdown,\n  &&&.ui.selection.visible.dropdown > .text {\n    font-family: Lato;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 21px;\n    color: #5a5a5a;\n  }\n\n  &&&.ui.selection.dropdown > .dropdown.icon {\n    top: 32%;\n  }\n\n  :hover {\n    border: 1px solid #8a8e97;\n    i.icon.dropdown::before {\n      color: #8a8e97;\n    }\n  }\n\n  :active,\n  :focus,\n  &&&.selection:active,\n  &&&.selection:focus {\n    border: 1px solid #eb3f93;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n\n    i.icon.dropdown::before {\n      color: #eb3f93;\n    }\n  }\n\n  &&&.ui.selection.active.dropdown {\n    border: 1px solid #eb3f93;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n    i.icon.dropdown::before {\n      color: #eb3f93;\n    }\n  }\n  &&&.ui.selection.active.dropdown .menu {\n    border: 1px solid #eb3f93;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n    i.icon.dropdown::before {\n      color: #eb3f93;\n    }\n  }\n',
    ]);

    _templateObject$e = function _templateObject() {
      return data;
    };

    return data;
  }
  var SelectControlStyled = /*#__PURE__*/ styled(semanticUiReact.Select)(
    /*#__PURE__*/ _templateObject$e()
  );

  var SelectControl = function SelectControl(props) {
    return React__default.createElement(
      SelectControlStyled,
      Object.assign({}, props)
    );
  };

  exports.BigSimpleModal = BigSimpleModal;
  exports.BloomButton = BloomButton;
  exports.Button = Button;
  exports.ButtonLink = ButtonLink;
  exports.Card = Card;
  exports.CardPlaceholder = CardPlaceholder;
  exports.CheckboxControl = CheckboxControl;
  exports.Coin = Coin;
  exports.GroupButton = GroupButton;
  exports.InputNumber = InputNumber;
  exports.InputText = InputText;
  exports.InvestCard = InvestCard;
  exports.InvestCardView = InvestCardView;
  exports.LoanComparatorChart = LoanComparatorChart;
  exports.Panel = PanelWithImage;
  exports.PanelWithImage = PanelWithImage$1;
  exports.SelectControl = SelectControl;
  exports.Simple = SimpleModal;
  exports.useCompaniesScrapper = useCompaniesScrapper;
  exports.useDefiPulse = useDefiPulse;
});
//# sourceMappingURL=raisecomponents.umd.development.js.map
