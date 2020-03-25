(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('semantic-ui-react'), require('styled-components'), require('moment'), require('react-is'), require('chart.js'), require('crypto'), require('graphql.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'semantic-ui-react', 'styled-components', 'moment', 'react-is', 'chart.js', 'crypto', 'graphql.js'], factory) :
  (global = global || self, factory(global.RaiseComponents = {}, global.React, global.semanticUIReact, global.styled, global.moment, global.ReactIs, global.Chart, global.crypto, global.graphql));
}(this, (function (exports, React, semanticUiReact, styled, moment, reactIs, Chart, crypto, graphql) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  styled = styled && Object.prototype.hasOwnProperty.call(styled, 'default') ? styled['default'] : styled;
  moment = moment && Object.prototype.hasOwnProperty.call(moment, 'default') ? moment['default'] : moment;
  reactIs = reactIs && Object.prototype.hasOwnProperty.call(reactIs, 'default') ? reactIs['default'] : reactIs;
  Chart = Chart && Object.prototype.hasOwnProperty.call(Chart, 'default') ? Chart['default'] : Chart;
  crypto = crypto && Object.prototype.hasOwnProperty.call(crypto, 'default') ? crypto['default'] : crypto;
  graphql = graphql && Object.prototype.hasOwnProperty.call(graphql, 'default') ? graphql['default'] : graphql;

  const env = {"NODE_ENV":"production","REACT_APP_HOST_IMAGES":"https://static.raise.it","REACT_APP_DAI_ADDRESS":"0x5d3a536e4d6dbd6114cc1ead35777bab948e3643"};

  var process = {
    __proto__: null,
    env: env
  };

  function _extends() {
    _extends = Object.assign || function (target) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
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
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
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
          configurable: true
        }
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
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
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

  var size = {
    mobileS: '321px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1430px',
    laptopL: '1439px',
    laptopXL: '1440px',
    desktop: '2560px'
  };
  var device = {
    mobileS: "(min-width: " + size.mobileS + ")",
    mobileM: "(min-width: " + size.mobileM + ")",
    mobileL: "(min-width: " + size.mobileL + ")",
    tablet: "(min-width: " + size.tablet + ")",
    laptop: "(min-width: " + size.laptop + ")",
    laptopM: "(min-width: " + size.laptopM + ")",
    laptopL: "(min-width: " + size.laptopL + ")",
    laptopXL: "(min-width: " + size.laptopXL + ")",
    desktop: "(min-width: " + size.desktop + ")",
    desktopL: "(min-width: " + size.desktop + ")"
  };

  function _templateObject30() {
    var data = _taggedTemplateLiteralLoose(["\n  &&& {\n    position: absolute;\n    top: 0;\n    right: 0;\n    color: white;\n  }\n"]);

    _templateObject30 = function _templateObject30() {
      return data;
    };

    return data;
  }

  function _templateObject29() {
    var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  right: 105px;\n  font-size: 9px;\n  background: black;\n  width: 18px;\n  height: 18px;\n  border-radius: 36px;\n"]);

    _templateObject29 = function _templateObject29() {
      return data;
    };

    return data;
  }

  function _templateObject28() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 2px;\n  height: 35px;\n  background: #ecedee;\n  margin: 0px;\n"]);

    _templateObject28 = function _templateObject28() {
      return data;
    };

    return data;
  }

  function _templateObject27() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 1px;\n  background: #ecedee;\n  margin: 0px;\n"]);

    _templateObject27 = function _templateObject27() {
      return data;
    };

    return data;
  }

  function _templateObject26() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 80px;\n  height: 20px;\n  color: #fff;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  text-align: center;\n  padding: 3px 0 3px 0;\n  font-weight: bold;\n  background: ", ";\n  border-radius: 30px;\n  font-size: 12px;\n  line-height: 15px;\n"]);

    _templateObject26 = function _templateObject26() {
      return data;
    };

    return data;
  }

  function _templateObject25() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 23px;\n  background: #ecedee;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n\n  &&:before {\n    content: '';\n    position: absolute;\n    width: ", "%;\n    height: 100%;\n    top: 0;\n    border-radius: 4px;\n    left: 0;\n    background: ", ";\n  }\n"]);

    _templateObject25 = function _templateObject25() {
      return data;
    };

    return data;
  }

  function _templateObject24() {
    var data = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  font-size: 14px;\n  top: 2px;\n  left: 5px;\n"]);

    _templateObject24 = function _templateObject24() {
      return data;
    };

    return data;
  }

  function _templateObject23() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 90%;\n  height: 10px;\n  background: #ecedee;\n  position: relative;\n  overflow: hidden;\n\n  &&:before {\n    content: '';\n    position: absolute;\n    width: ", "%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: ", ";\n  }\n"]);

    _templateObject23 = function _templateObject23() {
      return data;
    };

    return data;
  }

  function _templateObject22() {
    var data = _taggedTemplateLiteralLoose(["\n  color: #3c4251;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 28px;\n"]);

    _templateObject22 = function _templateObject22() {
      return data;
    };

    return data;
  }

  function _templateObject21() {
    var data = _taggedTemplateLiteralLoose(["\n  color: #5a5a5a;\n  font-size: 10px;\n  font-weight: lighter;\n  margin-bottom: 4px;\n  line-height: 14px;\n"]);

    _templateObject21 = function _templateObject21() {
      return data;
    };

    return data;
  }

  function _templateObject20() {
    var data = _taggedTemplateLiteralLoose(["\n  margin-top: 0px;\n  margin-bottom: 5px;\n"]);

    _templateObject20 = function _templateObject20() {
      return data;
    };

    return data;
  }

  function _templateObject19() {
    var data = _taggedTemplateLiteralLoose(["\n  color: #5a5a5a;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 21px;\n"]);

    _templateObject19 = function _templateObject19() {
      return data;
    };

    return data;
  }

  function _templateObject18() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  align-self: flex-end;\n  justify-content: center;\n  align-items: center;\n"]);

    _templateObject18 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17() {
    var data = _taggedTemplateLiteralLoose(["\n  color: #3c4251;\n  font-size: ", ";\n  font-weight: bold;\n  line-height: 32px;\n"]);

    _templateObject17 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  color: #5a5a5a;\n  font-size: 12px;\n  font-weight: lighter;\n  line-height: 14px;\n  margin-bottom: 12px;\n  margin-top: 20px;\n"]);

    _templateObject16 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15() {
    var data = _taggedTemplateLiteralLoose(["\n  margin-top: 20px;\n  margin-bottom: 12px;\n"]);

    _templateObject15 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14() {
    var data = _taggedTemplateLiteralLoose(["\n  font-size: 10px;\n  font-weight: bold;\n  margin-left: 6px;\n"]);

    _templateObject14 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13() {
    var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: #5c5d5d;\n  text-align: center;\n"]);

    _templateObject13 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12() {
    var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n"]);

    _templateObject12 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11() {
    var data = _taggedTemplateLiteralLoose(["\n  flex: ", ";\n  margin: 20px 0px 0px 0px;\n  ", "\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

    _templateObject11 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin: 20px 0px;\n  justify-content: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  flex-wrap: wrap;\n"]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteralLoose(["\n  padding: 20px;\n  position: relative;\n  height: ", ";\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  padding-top: ", ";\n  &&& > .logoWrap {\n    position: absolute;\n    top: -35px;\n    left: 14px;\n\n  }\n  &&& > ", " {\n    position: absolute;\n    top: 10px;\n    right: 8px;\n  }\n"]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteralLoose(["\n  max-height: 76px;\n  height: 76px;\n  color: #5a5a5a;\n  font-size: 14px;\n  display: block;\n  text-align: left;\n  line-height: 21px;\n"]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteralLoose(["\n  color: #5a5a5a;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: left;\n"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  color: #5a5a5a;\n  font-size: 14px;\n"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteralLoose(["\n  min-height: ", ";\n  border-radius: 6px;\n  background-color: #ffffff;\n  border: 1px solid #cfd0d4;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n\n  max-width: ", " !important;\n  @media ", " {\n    width: ", " !important;\n  }\n  width: 100%;\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteralLoose(["\n  &&& {\n    width: 70px;\n    height: 70px;\n    background-color: white;\n    border-radius: 6px;\n    border: 1px solid #cfd0d4;\n  \n    background-position: center;\n    background-position-x: 0;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-image: ", ";\n  }\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: block;\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 124px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: ", ";\n  border-radius: 6px 6px 0 0;\n  border-bottom: 1px solid #cfd0d4;\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var GraphContainer = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject());
  var CardImageCrop = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject2(), function (_ref) {
    var src = _ref.src;
    return "url(" + src + ")";
  });
  var CardHref = /*#__PURE__*/styled.a( /*#__PURE__*/_templateObject3());
  var CardLogo = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject4(), function (_ref2) {
    var src = _ref2.src;
    return "url(" + src + ")";
  });
  var HeroCard = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject5(), function (_ref3) {
    var size = _ref3.size;
    return size || '335px';
  }, function (_ref4) {
    var width = _ref4.width;
    return width || '372px';
  }, device.laptop, function (_ref5) {
    var width = _ref5.width;
    return width || '372px';
  });
  var TimeLeft = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject6());
  var CardBorrowerTitle = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject7());
  var CardDescription = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject8());
  var CardContent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject9(), function (_ref6) {
    var size = _ref6.size;
    return size || '100%';
  }, function (_ref7) {
    var logo = _ref7.logo;
    return logo ? '55px' : '0';
  }, TimeLeft);
  var Grid = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject10(), function (_ref8) {
    var spaceBetween = _ref8.spaceBetween;
    return spaceBetween ? 'space-between' : 'unset';
  }, function (_ref9) {
    var nobottom = _ref9.nobottom;
    return nobottom && 'margin-bottom: 0;';
  }, function (_ref10) {
    var notop = _ref10.notop;
    return notop && 'margin-top: 0;';
  }, function (_ref11) {
    var alignCenter = _ref11.alignCenter;
    return alignCenter && 'align-items: center;';
  }, function (_ref12) {
    var alignBottom = _ref12.alignBottom;
    return alignBottom && 'align-items: flex-end;';
  }, function (_ref13) {
    var alignTop = _ref13.alignTop;
    return alignTop && 'align-items: flex-start;';
  });
  var Row = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject11(), function (_ref14) {
    var small = _ref14.small;
    return small ? '1 0 25%' : '1 0 32.5%';
  }, function (_ref15) {
    var notop = _ref15.notop;
    return notop && 'margin-top: 0;';
  });
  var RowContent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject12(), function (_ref16) {
    var contentColor = _ref16.contentColor;
    return contentColor ? contentColor : '#5a5a5a';
  });
  var RowTitle = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject13(), function (_ref17) {
    var big = _ref17.big;
    return big ? '14px' : '10px';
  });
  var GraphTitle = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject14());
  var Header = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject15());
  var HeaderTitle = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject16());
  var HeaderContent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject17(), function (_ref18) {
    var fontSize = _ref18.fontSize;
    return fontSize || '26px';
  });
  var RoiHeader = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject18());
  var RoiContent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject19());
  var SubHeader = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject20());
  var SubHeaderTitle = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject21());
  var SubHeaderContent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject22());
  var Graph = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject23(), function (props) {
    return props.width * 100 / 90;
  }, function (props) {
    return props.color;
  });
  var ProgressPercent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject24());
  var ProgressBar = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject25(), function (props) {
    return props.width;
  }, function (props) {
    return props.color;
  });
  var Badge = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject26(), function (_ref19) {
    var color = _ref19.color;
    return color;
  });
  var Separator = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject27());
  var Vertical = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject28());
  var InfoIcon = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject29());
  var InfoIconCmp = /*#__PURE__*/styled(semanticUiReact.Icon)( /*#__PURE__*/_templateObject30());

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
        return "Right(" + x + ")";
      }
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
        return "Left(" + x + ")";
      }
    };
  };
  var Either = {
    either: function either(coor) {
      return coor ? Right(true) : Left(false);
    }
  };

  var useGraphWidth = function useGraphWidth(ref, currentAmount, totalAmount) {
    var config = Either.either(ref);
    return config.fold(function () {
      return {
        width: 0,
        originalWidth: 0
      };
    }, function () {
      var width = ref.getBoundingClientRect().width - 50;
      var percent = currentAmount / totalAmount * 100;
      return {
        width: percent,
        originalWidth: width
      };
    });
  };

  var Context = /*#__PURE__*/React__default.createContext({});

  var BadgeComponent = function BadgeComponent(_ref) {
    var children = _ref.children,
        color = _ref.color;
    return React__default.createElement(Badge, {
      color: color
    }, children);
  };

  var RowComponent = function RowComponent(_ref2) {
    var title = _ref2.title,
        content = _ref2.content,
        contentColor = _ref2.contentColor,
        small = _ref2.small,
        big = _ref2.big,
        notop = _ref2.notop;
    return React__default.createElement(Row, {
      small: small,
      big: big,
      notop: notop
    }, React__default.createElement(RowContent, {
      contentColor: contentColor
    }, content), React__default.createElement(RowTitle, {
      big: big
    }, title));
  };

  var HeaderComponent = function HeaderComponent(_ref3) {
    var title = _ref3.title,
        amount = _ref3.amount,
        fontSize = _ref3.fontSize,
        rest = _objectWithoutPropertiesLoose(_ref3, ["title", "amount", "fontSize"]);

    return React__default.createElement(Header, Object.assign({}, rest), React__default.createElement(HeaderTitle, null, title), React__default.createElement(HeaderContent, {
      fontSize: fontSize
    }, amount));
  };

  var SubHeaderComponent = function SubHeaderComponent(_ref4) {
    var title = _ref4.title,
        amount = _ref4.amount,
        rest = _objectWithoutPropertiesLoose(_ref4, ["title", "amount"]);

    return React__default.createElement(SubHeader, Object.assign({}, rest), React__default.createElement(SubHeaderTitle, null, title), React__default.createElement(SubHeaderContent, null, amount));
  };

  var RoiHeaderComponent = function RoiHeaderComponent(_ref5) {
    var roi = _ref5.roi;
    return React__default.createElement(RoiHeader, null, React__default.createElement(RoiContent, null, roi + "ROI"));
  };

  var CardWrapper = function CardWrapper(_ref6) {
    var children = _ref6.children,
        size = _ref6.size,
        width = _ref6.width,
        props = _objectWithoutPropertiesLoose(_ref6, ["children", "size", "width"]);

    var graph = React__default.useRef(null);

    var _React$useState = React__default.useState({
      ref: null
    }),
        values = _React$useState[0],
        setValues = _React$useState[1];

    React__default.useEffect(function () {
      return setValues({
        ref: graph.current
      });
    }, []);
    return React__default.createElement(Context.Provider, {
      value: values
    }, React__default.createElement(HeroCard, Object.assign({
      className: "heroCard",
      ref: function ref(_ref7) {
        return graph.current = _ref7;
      }
    }, props, {
      size: size,
      width: width
    }), children));
  };

  var Card = CardWrapper;

  var GraphComponent = function GraphComponent(_ref8) {
    var color = _ref8.color,
        currentAmount = _ref8.currentAmount,
        totalAmount = _ref8.totalAmount;

    var _React$useContext = React__default.useContext(Context),
        ref = _React$useContext.ref;

    var config = useGraphWidth(ref, currentAmount, totalAmount);
    return React__default.createElement(GraphContainer, null, React__default.createElement(Graph, {
      color: color,
      width: config.width
    }), React__default.createElement(GraphTitle, null, Math.floor(config.width), "%"));
  };

  var ProgressComponent = function ProgressComponent(_ref9) {
    var color = _ref9.color,
        currentAmount = _ref9.currentAmount,
        totalAmount = _ref9.totalAmount;

    var _React$useContext2 = React__default.useContext(Context),
        ref = _React$useContext2.ref;

    var config = useGraphWidth(ref, currentAmount, totalAmount);
    return React__default.createElement(GraphContainer, null, React__default.createElement(ProgressBar, {
      color: color,
      width: config.width
    }), React__default.createElement(ProgressPercent, null, Math.floor(config.width), "%"));
  };

  var TooltipComponent = function TooltipComponent() {
    return React__default.createElement(semanticUiReact.Popup, {
      content: "blablabablalbabalabl",
      key: 2434324,
      trigger: React__default.createElement(InfoIcon, null, React__default.createElement(InfoIconCmp, {
        name: "info"
      }))
    });
  };

  var ContentWithLogo = function ContentWithLogo(_ref10) {
    var children = _ref10.children,
        logo = _ref10.logo,
        topRight = _ref10.topRight,
        size = _ref10.size,
        to = _ref10.to,
        className = _ref10.className,
        style = _ref10.style;
    var aProps = {
      href: undefined
    };

    if (to) {
      aProps.href = to;
    }

    return React__default.createElement(CardContent, {
      logo: logo,
      size: size,
      className: className,
      style: style
    }, logo && React__default.createElement("a", Object.assign({
      className: "logoWrap"
    }, aProps), React__default.createElement(CardLogo, {
      src: logo
    })), topRight && React__default.createElement(TimeLeft, null, topRight), children);
  };

  var CardImage = function CardImage(_ref11) {
    var src = _ref11.src,
        to = _ref11.to;

    if (to) {
      return React__default.createElement(CardHref, {
        href: to
      }, React__default.createElement(CardImageCrop, {
        src: src
      }));
    }

    return React__default.createElement(CardImageCrop, {
      src: src
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
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #eeb345;\n  & > ", " {\n    width: 18px;\n    height: 18px;\n  }\n  & > div {\n    font-weight: bold;\n    font-size: 12px;\n  }\n"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteralLoose([""]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var CoinImage = /*#__PURE__*/styled(semanticUiReact.Image)( /*#__PURE__*/_templateObject$1());
  var CoinBox = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject2$1(), CoinImage);

  var Coin = function Coin(_ref) {
    var src = _ref.src,
        name = _ref.name;
    return React__default.createElement(CoinBox, null, React__default.createElement(CoinImage, {
      src: src
    }), name && React__default.createElement("div", null, name));
  };

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
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
      if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
      var i;

      for (i in a) {
        if (!(i in b)) return false;
      }

      for (i in b) {
        if (a[i] !== b[i]) return false;
      }

      return is.und(i) ? a === b : true;
    }
  };

  function merge(target, lowercase) {
    if (lowercase === void 0) {
      lowercase = true;
    }

    return function (object) {
      return (is.arr(object) ? object : Object.keys(object)).reduce(function (acc, element) {
        var key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
        acc[key] = target(key);
        return acc;
      }, target);
    };
  }

  function useForceUpdate() {
    var _useState = React.useState(false),
        f = _useState[1];

    var forceUpdate = React.useCallback(function () {
      return f(function (v) {
        return !v;
      });
    }, []);
    return forceUpdate;
  }

  function withDefault(value, defaultValue) {
    return is.und(value) || is.nul(value) ? defaultValue : value;
  }

  function toArray(a) {
    return !is.und(a) ? is.arr(a) ? a : [a] : [];
  }

  function callProp(obj) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return is.fun(obj) ? obj.apply(void 0, args) : obj;
  }

  function getForwardProps(props) {
    var forward = _objectWithoutPropertiesLoose$1(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

    return forward;
  }

  function interpolateTo(props) {
    var forward = getForwardProps(props);
    if (is.und(forward)) return _extends$1({
      to: forward
    }, props);
    var rest = Object.keys(props).reduce(function (a, k) {
      var _extends2;

      return !is.und(forward[k]) ? a : _extends$1({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
    }, {});
    return _extends$1({
      to: forward
    }, rest);
  }

  function handleRef(ref, forward) {
    if (forward) {
      // If it's a function, assume it's a ref callback
      if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
        forward.current = ref;
      }
    }

    return ref;
  }

  var Animated = /*#__PURE__*/function () {
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
  }();

  var AnimatedArray = /*#__PURE__*/function (_Animated) {
    _inheritsLoose(AnimatedArray, _Animated);

    function AnimatedArray() {
      var _this2;

      _this2 = _Animated.apply(this, arguments) || this;
      _this2.payload = [];

      _this2.attach = function () {
        return _this2.payload.forEach(function (p) {
          return p instanceof Animated && p.addChild(_assertThisInitialized(_this2));
        });
      };

      _this2.detach = function () {
        return _this2.payload.forEach(function (p) {
          return p instanceof Animated && p.removeChild(_assertThisInitialized(_this2));
        });
      };

      return _this2;
    }

    return AnimatedArray;
  }(Animated);

  var AnimatedObject = /*#__PURE__*/function (_Animated2) {
    _inheritsLoose(AnimatedObject, _Animated2);

    function AnimatedObject() {
      var _this3;

      _this3 = _Animated2.apply(this, arguments) || this;
      _this3.payload = {};

      _this3.attach = function () {
        return Object.values(_this3.payload).forEach(function (s) {
          return s instanceof Animated && s.addChild(_assertThisInitialized(_this3));
        });
      };

      _this3.detach = function () {
        return Object.values(_this3.payload).forEach(function (s) {
          return s instanceof Animated && s.removeChild(_assertThisInitialized(_this3));
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
        payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
      }

      return payload;
    };

    _proto2.getAnimatedValue = function getAnimatedValue() {
      return this.getValue(true);
    };

    return AnimatedObject;
  }(Animated);

  var applyAnimatedValues;

  function injectApplyAnimatedValues(fn, transform) {
    applyAnimatedValues = {
      fn: fn,
      transform: transform
    };
  }

  var colorNames;

  function injectColorNames(names) {
    colorNames = names;
  }

  var requestFrame = function requestFrame(cb) {
    return typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
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

  var AnimatedProps = /*#__PURE__*/function (_AnimatedObject) {
    _inheritsLoose(AnimatedProps, _AnimatedObject);

    function AnimatedProps(props, callback) {
      var _this4;

      _this4 = _AnimatedObject.call(this) || this;
      _this4.update = void 0;
      _this4.payload = !props.style ? props : _extends$1({}, props, {
        style: createAnimatedStyle(props.style)
      });
      _this4.update = callback;

      _this4.attach();

      return _this4;
    }

    return AnimatedProps;
  }(AnimatedObject);

  var isFunctionComponent = function isFunctionComponent(val) {
    return is.fun(val) && !(val.prototype instanceof React__default.Component);
  };

  var createAnimatedComponent = function createAnimatedComponent(Component) {
    var AnimatedComponent = React.forwardRef(function (props, ref) {
      var forceUpdate = useForceUpdate();
      var mounted = React.useRef(true);
      var propsAnimated = React.useRef(null);
      var node = React.useRef(null);
      var attachProps = React.useCallback(function (props) {
        var oldPropsAnimated = propsAnimated.current;

        var callback = function callback() {
          var didUpdate = false;

          if (node.current) {
            didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
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
      React.useEffect(function () {
        return function () {
          mounted.current = false;
          propsAnimated.current && propsAnimated.current.detach();
        };
      }, []);
      React.useImperativeHandle(ref, function () {
        return animatedApi(node);
      });
      attachProps(props);

      var _getValue = propsAnimated.current.getValue(),
          animatedProps = _objectWithoutPropertiesLoose$1(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
      // See: https://github.com/react-spring/react-spring/issues/569


      var refFn = isFunctionComponent(Component) ? undefined : function (childRef) {
        return node.current = handleRef(childRef, ref);
      };
      return React__default.createElement(Component, _extends$1({}, animatedProps, {
        ref: refFn
      }));
    });
    return AnimatedComponent;
  };

  var active = false;
  var controllers = /*#__PURE__*/new Set();

  var update = function update() {
    if (!active) return false;
    var time = now();

    for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref10;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref10 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref10 = _i.value;
      }

      var controller = _ref10;
      var isActive = false;

      for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
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
          var velocity = Array.isArray(_config.initialVelocity) ? _config.initialVelocity[valIdx] : _config.initialVelocity;
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
            position = from + _config.easing((time - animation.startTime) / _config.duration) * (to - from);
            endOfAnimation = time >= animation.startTime + _config.duration;
          } else if (_config.decay) {
            /** Decay easing */
            position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
            endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
            if (endOfAnimation) to = position;
          } else {
            /** Spring easing */
            lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
            velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : _config.initialVelocity; // If we lost a lot of frames just jump to the end.

            if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

            var numSteps = Math.floor(time - lastTime);

            for (var i = 0; i < numSteps; ++i) {
              var force = -_config.tension * (position - to);
              var damping = -_config.friction * velocity;
              var acceleration = (force + damping) / _config.mass;
              velocity = velocity + acceleration * 1 / 1000;
              position = position + velocity * 1 / 1000;
            } // Conditions for stopping the spring animation


            var isOvershooting = _config.clamp && _config.tension !== 0 ? from < to ? position > to : position < to : false;

            var isVelocity = Math.abs(velocity) <= _config.precision;

            var isDisplacement = _config.tension !== 0 ? Math.abs(to - position) <= _config.precision : true;
            endOfAnimation = isOvershooting || isVelocity && isDisplacement;
            animation.lastVelocity = velocity;
            animation.lastTime = time;
          } // Trails aren't done until their parents conclude


          if (isAnimated && !_config.toValues[valIdx].done) endOfAnimation = false;

          if (endOfAnimation) {
            // Ensure that we end up with a round value
            if (animation.value !== to) position = to;
            animation.done = true;
          } else isActive = true;

          animation.setValue(position);
          animation.lastPosition = position;
        } // Keep track of updated values only when necessary


        if (controller.props.onFrame) controller.values[_config.name] = _config.interpolation.getValue();
      } // Update callbacks in the end of the frame


      if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

      if (!isActive) {
        controllers["delete"](controller);
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
    if (controllers.has(controller)) controllers["delete"](controller);
  };

  function createInterpolator(range, output, extrapolate) {
    if (typeof range === 'function') {
      return range;
    }

    if (Array.isArray(range)) {
      return createInterpolator({
        range: range,
        output: output,
        extrapolate: extrapolate
      });
    }

    if (interpolation && typeof range.output[0] === 'string') {
      return interpolation(range);
    }

    var config = range;
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];
    var extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
    var extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

    var easing = config.easing || function (t) {
      return t;
    };

    return function (input) {
      var range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
    };
  }

  function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
    var result = map ? map(input) : input; // Extrapolate

    if (result < inputMin) {
      if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
    }

    if (result > inputMax) {
      if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
    }

    if (outputMin === outputMax) return outputMin;
    if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

    if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

    result = easing(result); // Output Range

    if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
    return result;
  }

  function findRange(input, inputRange) {
    for (var i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) break;
    }

    return i - 1;
  }

  var AnimatedInterpolation = /*#__PURE__*/function (_AnimatedArray) {
    _inheritsLoose(AnimatedInterpolation, _AnimatedArray);

    function AnimatedInterpolation(parents, range, output, extrapolate) {
      var _this5;

      _this5 = _AnimatedArray.call(this) || this;
      _this5.calc = void 0;
      _this5.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
      _this5.calc = createInterpolator(range, output, extrapolate);
      return _this5;
    }

    var _proto3 = AnimatedInterpolation.prototype;

    _proto3.getValue = function getValue() {
      return this.calc.apply(this, this.payload.map(function (value) {
        return value.getValue();
      }));
    };

    _proto3.updateConfig = function updateConfig(range, output, extrapolate) {
      this.calc = createInterpolator(range, output, extrapolate);
    };

    _proto3.interpolate = function interpolate(range, output, extrapolate) {
      return new AnimatedInterpolation(this, range, output, extrapolate);
    };

    return AnimatedInterpolation;
  }(AnimatedArray);
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
      node.getChildren().forEach(function (child) {
        return addAnimatedStyles(child, styles);
      });
    }
  }

  var AnimatedValue = /*#__PURE__*/function (_Animated3) {
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

      _this6.setValue = function (value, flush) {
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

      this.animatedStyles.forEach(function (animatedStyle) {
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
  }(Animated);

  var AnimatedValueArray = /*#__PURE__*/function (_AnimatedArray2) {
    _inheritsLoose(AnimatedValueArray, _AnimatedArray2);

    function AnimatedValueArray(values) {
      var _this7;

      _this7 = _AnimatedArray2.call(this) || this;
      _this7.payload = values.map(function (n) {
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
          value.forEach(function (v, i) {
            return _this8.payload[i].setValue(v, flush);
          });
        }
      } else {
        this.payload.forEach(function (p) {
          return p.setValue(value, flush);
        });
      }
    };

    _proto5.getValue = function getValue() {
      return this.payload.map(function (v) {
        return v.getValue();
      });
    };

    _proto5.interpolate = function interpolate(range, output) {
      return new AnimatedInterpolation(this, range, output);
    };

    return AnimatedValueArray;
  }(AnimatedArray);

  var G = 0;

  var Controller = /*#__PURE__*/function () {
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

      this.getValues = function () {
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
          props = _objectWithoutPropertiesLoose$1(_ref, ["delay", "to"]);

      if (is.arr(to) || is.fun(to)) {
        // If config is either a function or an array queue it up as is
        this.queue.push(_extends$1({}, props, {
          delay: delay,
          to: to
        }));
      } else if (to) {
        // Otherwise go through each key since it could be delayed individually
        var ops = {};
        Object.entries(to).forEach(function (_ref2) {
          var _to;

          var k = _ref2[0],
              v = _ref2[1]; // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props

          var entry = _extends$1({
            to: (_to = {}, _to[k] = v, _to),
            delay: callProp(delay, k)
          }, props);

          var previous = ops[entry.delay] && ops[entry.delay].to;
          ops[entry.delay] = _extends$1({}, ops[entry.delay], entry, {
            to: _extends$1({}, previous, entry.to)
          });
        });
        this.queue = Object.values(ops);
      } // Sort queue, so that async calls go last


      this.queue = this.queue.sort(function (a, b) {
        return a.delay - b.delay;
      }); // Diff the reduced props immediately (they'll contain the from-prop and some config)

      this.diff(props);
      return this;
    }
    /** start(onEnd)
     *  This function either executes a queue, if present, or starts the frameloop, which animates */
    ;

    _proto6.start = function start(onEnd) {
      var _this10 = this;

      // If a queue is present we must excecute it
      if (this.queue.length) {
        this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

        if (this.localQueue) {
          this.localQueue.forEach(function (_ref3) {
            var _ref3$from = _ref3.from,
                from = _ref3$from === void 0 ? {} : _ref3$from,
                _ref3$to = _ref3.to,
                to = _ref3$to === void 0 ? {} : _ref3$to;
            if (is.obj(from)) _this10.merged = _extends$1({}, from, _this10.merged);
            if (is.obj(to)) _this10.merged = _extends$1({}, _this10.merged, to);
          });
        } // The guid helps us tracking frames, a new queue over an old one means an override
        // We discard async calls in that caseÍ


        var local = this.local = ++this.guid;
        var queue = this.localQueue = this.queue;
        this.queue = []; // Go through each entry and execute it

        queue.forEach(function (_ref4, index) {
          var delay = _ref4.delay,
              props = _objectWithoutPropertiesLoose$1(_ref4, ["delay"]);

          var cb = function cb(finished) {
            if (index === queue.length - 1 && local === _this10.guid && finished) {
              _this10.idle = true;
              if (_this10.props.onRest) _this10.props.onRest(_this10.merged);
            }

            if (onEnd) onEnd();
          }; // Entries can be delayed, ansyc or immediate


          var async = is.arr(props.to) || is.fun(props.to);

          if (delay) {
            setTimeout(function () {
              if (local === _this10.guid) {
                if (async) _this10.runAsync(props, cb);else _this10.diff(props).start(cb);
              }
            }, delay);
          } else if (async) _this10.runAsync(props, cb);else _this10.diff(props).start(cb);
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
      this.listeners.forEach(function (onEnd) {
        return onEnd(finished);
      });
      this.listeners = [];
      return this;
    }
    /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
    ;

    _proto6.pause = function pause(finished) {
      this.stop(true);
      if (finished) stop(this);
      return this;
    };

    _proto6.runAsync = function runAsync(_ref5, onEnd) {
      var _this11 = this;

      var _this = this;

      var props = _objectWithoutPropertiesLoose$1(_ref5, ["delay"]);

      var local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
      // If the view relies on certain values "from" has to be present

      var queue = Promise.resolve(undefined);

      if (is.arr(props.to)) {
        var _loop = function _loop(i) {
          var index = i;

          var fresh = _extends$1({}, props, interpolateTo(props.to[index]));

          if (is.arr(fresh.config)) fresh.config = fresh.config[index];
          queue = queue.then(function () {
            //this.stop()
            if (local === _this11.guid) return new Promise(function (r) {
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
        queue = queue.then(function () {
          return props.to( // next(props)
          function (p) {
            var fresh = _extends$1({}, props, interpolateTo(p));

            if (is.arr(fresh.config)) fresh.config = fresh.config[index];
            index++; //this.stop()

            if (local === _this11.guid) return last = new Promise(function (r) {
              return _this11.diff(fresh).start(r);
            });
            return;
          }, // cancel()
          function (finished) {
            if (finished === void 0) {
              finished = true;
            }

            return _this.stop(finished);
          }).then(function () {
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

      this.animations = Object.entries(this.merged).reduce(function (acc, _ref7) {
        var name = _ref7[0],
            value = _ref7[1]; // Issue cached entries, except on reset

        var entry = acc[name] || {}; // Figure out what the value is supposed to be

        var isNumber = is.num(value);
        var isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
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
        if (isInterpolation) newValue = interpolation({
          range: [0, 1],
          output: [value, value]
        })(1);
        var currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

        var isFirst = is.und(parent);
        var isActive = !isFirst && entry.animatedValues.some(function (v) {
          return !v.done;
        });
        var currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
        var hasNewGoal = !is.equ(newValue, entry.previous);
        var hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
        // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

        if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
          var _extends3;

          // Convert regular values into animated values, ALWAYS re-use if possible
          if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
            var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
            prev = prev !== void 0 && !reset ? prev : fromValue;

            if (entry.parent) {
              parent = entry.parent;
              parent.setValue(0, false);
            } else parent = new AnimatedValue(0);

            var range = {
              output: [prev, value]
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

          animatedValues.forEach(function (value) {
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

          return _extends$1({}, acc, (_extends3 = {}, _extends3[name] = _extends$1({}, entry, {
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
            easing: withDefault(toConfig.easing, function (t) {
              return t;
            }),
            decay: toConfig.decay
          }), _extends3));
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
                output: [newValue, newValue]
              });
            }

            parent.done = true;
            _this12.hasChanged = true;
            return _extends$1({}, acc, (_extends4 = {}, _extends4[name] = _extends$1({}, acc[name], {
              previous: newValue
            }), _extends4));
          }

          return acc;
        }
      }, this.animations);

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
  }();
  /** API
   * const transitions = useTransition(items, itemKeys, { ... })
   * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
   */


  var guid = 0;
  var ENTER = 'enter';
  var LEAVE = 'leave';
  var UPDATE = 'update';

  var mapKeys = function mapKeys(items, keys) {
    return (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);
  };

  var get = function get(props) {
    var items = props.items,
        _props$keys = props.keys,
        keys = _props$keys === void 0 ? function (item) {
      return item;
    } : _props$keys,
        rest = _objectWithoutPropertiesLoose$1(props, ["items", "keys"]);

    items = toArray(items !== void 0 ? items : null);
    return _extends$1({
      items: items,
      keys: mapKeys(items, keys)
    }, rest);
  };

  function useTransition(input, keyTransform, config) {
    var props = _extends$1({
      items: input,
      keys: keyTransform || function (i) {
        return i;
      }
    }, config);

    var _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        onDestroyed = _get.onDestroyed,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = _objectWithoutPropertiesLoose$1(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

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
      forceUpdate: forceUpdate
    });
    React.useImperativeHandle(props.ref, function () {
      return {
        start: function start() {
          return Promise.all(Array.from(state.current.instances).map(function (_ref) {
            var c = _ref[1];
            return new Promise(function (r) {
              return c.start(r);
            });
          }));
        },
        stop: function stop(finished) {
          return Array.from(state.current.instances).forEach(function (_ref2) {
            var c = _ref2[1];
            return c.stop(finished);
          });
        },

        get controllers() {
          return Array.from(state.current.instances).map(function (_ref3) {
            var c = _ref3[1];
            return c;
          });
        }

      };
    }); // Update state

    state.current = diffItems(state.current, props);

    if (state.current.changed) {
      // Update state
      state.current.transitions.forEach(function (transition) {
        var slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
        if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

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

              var _active = curInstances.some(function (_ref4) {
                var c = _ref4[1];
                return !c.idle;
              });

              if (!_active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
              if (_onRest) _onRest(item, slot, values);
            }
          },
          onStart: onStart && function () {
            return onStart(item, slot);
          },
          onFrame: onFrame && function (values) {
            return onFrame(item, slot, values);
          },
          delay: trail,
          reset: reset && slot === ENTER // Update controller

        });

        ctrl.update(newProps);
        if (!state.current.paused) ctrl.start();
      });
    }

    React.useEffect(function () {
      state.current.mounted = mounted.current = true;
      return function () {
        state.current.mounted = mounted.current = false;
        Array.from(state.current.instances).map(function (_ref5) {
          var c = _ref5[1];
          return c.destroy();
        });
        state.current.instances.clear();
      };
    }, []);
    return state.current.transitions.map(function (_ref6) {
      var item = _ref6.item,
          slot = _ref6.slot,
          key = _ref6.key;
      return {
        item: item,
        key: key,
        state: slot,
        props: state.current.instances.get(key).getValues()
      };
    });
  }

  function cleanUp(state, filterKey) {
    var deleted = state.current.deleted;

    var _loop2 = function _loop2() {
      if (_isArray2) {
        if (_i2 >= _iterator2.length) return "break";
        _ref11 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) return "break";
        _ref11 = _i2.value;
      }

      var _ref7 = _ref11;
      var key = _ref7.key;

      var filter = function filter(t) {
        return t.key !== key;
      };

      if (is.und(filterKey) || filterKey === key) {
        state.current.instances["delete"](key);
        state.current.transitions = state.current.transitions.filter(filter);
        state.current.deleted = state.current.deleted.filter(filter);
      }
    };

    for (var _iterator2 = deleted, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref11;

      var _ret = _loop2();

      if (_ret === "break") break;
    }

    state.current.forceUpdate();
  }

  function diffItems(_ref8, props) {
    var first = _ref8.first,
        prevProps = _ref8.prevProps,
        state = _objectWithoutPropertiesLoose$1(_ref8, ["first", "prevProps"]);

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
    var added = keys.filter(function (item) {
      return !currentSet.has(item);
    });
    var removed = state.transitions.filter(function (item) {
      return !item.destroyed && !nextSet.has(item.originalKey);
    }).map(function (i) {
      return i.originalKey;
    });
    var updated = keys.filter(function (item) {
      return currentSet.has(item);
    });
    var delay = -trail;

    while (order.length) {
      var changeType = order.shift();

      switch (changeType) {
        case ENTER:
          {
            added.forEach(function (key, index) {
              // In unique mode, remove fading out transitions if their key comes in again
              if (unique && deleted.find(function (d) {
                return d.originalKey === key;
              })) deleted = deleted.filter(function (t) {
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
                trail: delay = delay + trail,
                config: callProp(config, item, slot),
                from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
                to: callProp(enter, item)
              };
            });
            break;
          }

        case LEAVE:
          {
            removed.forEach(function (key) {
              var keyIndex = _keys.indexOf(key);

              var item = _items[keyIndex];
              var slot = LEAVE;
              deleted.unshift(_extends$1({}, current[key], {
                slot: slot,
                destroyed: true,
                left: _keys[Math.max(0, keyIndex - 1)],
                right: _keys[Math.min(_keys.length, keyIndex + 1)],
                trail: delay = delay + trail,
                config: callProp(config, item, slot),
                to: callProp(leave, item)
              }));
              delete current[key];
            });
            break;
          }

        case UPDATE:
          {
            updated.forEach(function (key) {
              var keyIndex = keys.indexOf(key);
              var item = items[keyIndex];
              var slot = UPDATE;
              current[key] = _extends$1({}, current[key], {
                item: item,
                slot: slot,
                trail: delay = delay + trail,
                config: callProp(config, item, slot),
                to: callProp(update, item)
              });
            });
            break;
          }
      }
    }

    var out = keys.map(function (key) {
      return current[key];
    }); // This tries to restore order for deleted items by finding their last known siblings
    // only using the left sibling to keep order placement consistent for all deleted items

    deleted.forEach(function (_ref9) {
      var left = _ref9.left,
          item = _objectWithoutPropertiesLoose$1(_ref9, ["left", "right"]);

      var pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(function (t) {
        return t.originalKey === left;
      })) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [].concat(out.slice(0, pos), [item], out.slice(pos));
    });
    return _extends$1({}, state, {
      changed: added.length || removed.length || updated.length,
      first: first && added.length === 0,
      transitions: out,
      current: current,
      deleted: deleted,
      prevProps: props
    });
  }

  var AnimatedStyle = /*#__PURE__*/function (_AnimatedObject2) {
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
  }(AnimatedObject); // http://www.w3.org/TR/css3-color/#svg-color


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
    yellowgreen: 0x9acd32ff
  }; // const INTEGER = '[-+]?\\d+';

  var NUMBER = '[-+]?\\d*\\.?\\d+';
  var PERCENTAGE = NUMBER + '%';

  function call() {
    for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
      parts[_key] = arguments[_key];
    }

    return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
  }

  var rgb = /*#__PURE__*/new RegExp('rgb' + /*#__PURE__*/call(NUMBER, NUMBER, NUMBER));
  var rgba = /*#__PURE__*/new RegExp('rgba' + /*#__PURE__*/call(NUMBER, NUMBER, NUMBER, NUMBER));
  var hsl = /*#__PURE__*/new RegExp('hsl' + /*#__PURE__*/call(NUMBER, PERCENTAGE, PERCENTAGE));
  var hsla = /*#__PURE__*/new RegExp('hsla' + /*#__PURE__*/call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
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
      return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
    } // Ordered based on occurrences on Facebook codebase


    if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
    if (colors.hasOwnProperty(color)) return colors[color];

    if (match = rgb.exec(color)) {
      return (parse255(match[1]) << 24 | // r
      parse255(match[2]) << 16 | // g
      parse255(match[3]) << 8 | // b
      0x000000ff) >>> // a
      0;
    }

    if (match = rgba.exec(color)) {
      return (parse255(match[1]) << 24 | // r
      parse255(match[2]) << 16 | // g
      parse255(match[3]) << 8 | // b
      parse1(match[4])) >>> // a
      0;
    }

    if (match = hex3.exec(color)) {
      return parseInt(match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      'ff', // a
      16) >>> 0;
    } // https://drafts.csswg.org/css-color-4/#hex-notation


    if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

    if (match = hex4.exec(color)) {
      return parseInt(match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4], // a
      16) >>> 0;
    }

    if (match = hsl.exec(color)) {
      return (hslToRgb(parse360(match[1]), // h
      parsePercentage(match[2]), // s
      parsePercentage(match[3]) // l
      ) | 0x000000ff) >>> // a
      0;
    }

    if (match = hsla.exec(color)) {
      return (hslToRgb(parse360(match[1]), // h
      parsePercentage(match[2]), // s
      parsePercentage(match[3]) // l
      ) | parse1(match[4])) >>> // a
      0;
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
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
  }

  function parse255(str) {
    var _int = parseInt(str, 10);

    if (_int < 0) return 0;
    if (_int > 255) return 255;
    return _int;
  }

  function parse360(str) {
    var _int2 = parseFloat(str);

    return (_int2 % 360 + 360) % 360 / 360;
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
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  } // Problem: https://github.com/animatedjs/animated/pull/102
  // Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


  var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
  // Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

  var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

  var colorNamesRegex = /*#__PURE__*/new RegExp("(" + /*#__PURE__*/Object.keys(colors).join('|') + ")", 'g');
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
    var outputRange = config.output.map(function (rangeValue) {
      return rangeValue.replace(colorRegex, colorToRgba);
    }).map(function (rangeValue) {
      return rangeValue.replace(colorNamesRegex, colorToRgba);
    });
    var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
      return [];
    });
    outputRange.forEach(function (value) {
      value.match(stringShapeRegex).forEach(function (number, i) {
        return outputRanges[i].push(+number);
      });
    });
    var interpolations = outputRange[0].match(stringShapeRegex).map(function (_value, i) {
      return createInterpolator(_extends$1({}, config, {
        output: outputRanges[i]
      }));
    });
    return function (input) {
      var i = 0;
      return outputRange[0] // 'rgba(0, 100, 200, 0)'
      // ->
      // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
      .replace(stringShapeRegex, function () {
        return interpolations[i++](input);
      }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
      // round the opacity (4th column).
      .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
        return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
      });
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
    strokeWidth: true
  };

  var prefixKey = function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  };

  var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
  isUnitlessNumber = /*#__PURE__*/Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
    prefixes.forEach(function (prefix) {
      return acc[prefixKey(prefix, prop)] = acc[prop];
    });
    return acc;
  }, isUnitlessNumber);

  function dangerousStyleValue(name, value, isCustomProperty) {
    if (value == null || typeof value === 'boolean' || value === '') return '';
    if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

    return ('' + value).trim();
  }

  var attributeCache = {};
  injectCreateAnimatedStyle(function (style) {
    return new AnimatedStyle(style);
  });
  injectStringInterpolator(createStringInterpolator);
  injectColorNames(colors);
  injectApplyAnimatedValues(function (instance, props) {
    if (instance.nodeType && instance.setAttribute !== undefined) {
      var style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose$1(props, ["style", "children", "scrollTop", "scrollLeft"]);

      var filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
      if (scrollTop !== void 0) instance.scrollTop = scrollTop;
      if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

      if (children !== void 0) instance.textContent = children; // Set styles ...

      for (var styleName in style) {
        if (!style.hasOwnProperty(styleName)) continue;
        var isCustomProperty = styleName.indexOf('--') === 0;
        var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
        if (styleName === 'float') styleName = 'cssFloat';
        if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
      } // Set attributes ...


      for (var name in attributes) {
        // Attributes are written in dash case
        var dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
          return '-' + n.toLowerCase();
        }));
        if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
      }

      return;
    } else return false;
  }, function (style) {
    return style;
  });
  var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
  'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan']; // Extend animated with all the available THREE elements

  var apply = /*#__PURE__*/merge(createAnimatedComponent, false);
  var extendedAnimated = /*#__PURE__*/apply(domElements);

  function _templateObject5$1() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 56.293px;\n  height: 27.2px;\n  display: flex;\n  align-items: center;\n"]);

    _templateObject5$1 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$1() {
    var data = _taggedTemplateLiteralLoose(["\n  &&& {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    & > i:first-child {\n      margin-right: 10px;\n    }\n  }\n"]);

    _templateObject4$1 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteralLoose(["\n  padding: 0px 20px 20px 20px;\n  ", ":first-child {\n    margin-bottom: 0px;\n  }\n"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteralLoose(["\n  padding: 40px 20px 0px 20px;\n"]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteralLoose(["\n  min-height: 470px;\n  max-width: 372px;\n  width: 100%;\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var InvestCardBody = /*#__PURE__*/styled(CardWrapper)( /*#__PURE__*/_templateObject$2());
  var CardContent$1 = /*#__PURE__*/styled(Card.Content)( /*#__PURE__*/_templateObject2$2());
  var CardBottom = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject3$1(), Card.Grid);
  var GraphButton = /*#__PURE__*/styled(semanticUiReact.Button)( /*#__PURE__*/_templateObject4$1());
  var SpacedDiv = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject5$1());

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
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
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
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
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
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
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
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                             navigator.product === 'NativeScript' ||
                                             navigator.product === 'NS')) {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
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
    trim: trim
  };

  function encode(val) {
    return encodeURIComponent(val).
      replace(/%40/gi, '@').
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
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
      rejected: rejected
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

  var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
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
  var enhanceError = function enhanceError(error, config, code, request, response) {
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
        code: this.code
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
  var createError = function createError(message, config, code, request, response) {
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
      reject(createError(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
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
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
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

    if (!headers) { return parsed; }

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

  var isURLSameOrigin = (
    utils.isStandardBrowserEnv() ?

    // Standard browser envs have full support of the APIs needed to test
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
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
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
          var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
        };
      })() :

    // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })()
  );

  var cookies = (
    utils.isStandardBrowserEnv() ?

    // Standard browser envs support document.cookie
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
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :

    // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })()
  );

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
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }

      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

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
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }

        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
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
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
          request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        var cookies$1 = cookies;

        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
          cookies$1.read(config.xsrfCookieName) :
          undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
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
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = xhr;
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = xhr;
    }
    return adapter;
  }

  var defaults = {
    adapter: getDefaultAdapter(),

    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) ||
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
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],

    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],

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
    }
  };

  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };

  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });

  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
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

    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );

      return response;
    }, function onAdapterRejection(reason) {
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
    });
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
      'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
      'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
      'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
      'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
      'httpsAgent', 'cancelToken', 'socketPath'
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

    var otherKeys = Object
      .keys(config2)
      .filter(function filterAxiosKeys(key) {
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
      response: new InterceptorManager_1()
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

    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  };

  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });

  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
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
      cancel: cancel
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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
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

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = /*#__PURE__*/shouldUseNative() ? Object.assign : function (target, source) {
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
    var has = /*#__PURE__*/Function.call.bind(Object.prototype.hasOwnProperty);

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


  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
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
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }

          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
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


  checkPropTypes.resetWarningCache = function () {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = /*#__PURE__*/Function.call.bind(Object.prototype.hasOwnProperty);

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

  var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
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
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

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
      exact: createStrictShapeTypeChecker
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

      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if ( typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;

            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }

        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }

            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }

          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }

        var propValue = props[propName];

        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }

        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }

        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);

          if (type === 'symbol') {
            return String(value);
          }

          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }

        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }

        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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
         printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== 'function') {
          printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];

          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }

        for (var key in shapeTypes) {
          var checker = shapeTypes[key];

          if (!checker) {
            continue;
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        } // We need to check all keys in case some are required but missing from
        // props.


        var allKeys = objectAssign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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

  var propTypes = /*#__PURE__*/createCommonjsModule(function (module) {
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
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
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
    return value === other || value !== value && other !== other;
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
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || /*#__PURE__*/Function('return this')();

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

    return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
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
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */

  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */

  var maskSrcKey = /*#__PURE__*/function () {
    var uid = /*#__PURE__*/ /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
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

  var reIsNative = /*#__PURE__*/RegExp('^' + /*#__PURE__*/funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
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

  var Map$1 = /*#__PURE__*/getNative(root, 'Map');

  /* Built-in method references that are verified to be native. */

  var nativeCreate = /*#__PURE__*/getNative(Object, 'create');

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
    return nativeCreate ? data[key] !== undefined : hasOwnProperty$4.call(data, key);
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
      'hash': new Hash(),
      'map': new (Map$1 || ListCache)(),
      'string': new Hash()
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
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
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
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
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
    var data = this.__data__ = new ListCache(entries);
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
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }

      if (compared !== undefined) {
        if (compared) {
          continue;
        }

        result = false;
        break;
      } // Recursively compare arrays (susceptible to call stack limits).


      if (seen) {
        if (!arraySome(other, function (othValue, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }

    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /** Built-in value references. */

  var Uint8Array$1 = root.Uint8Array;

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
    map.forEach(function (value, key) {
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
    set.forEach(function (value) {
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

  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }

        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
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
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
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

  var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
    if (object == null) {
      return [];
    }

    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function (symbol) {
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

  var isArguments = /*#__PURE__*/baseIsArguments( /*#__PURE__*/function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
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

  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer$1 = moduleExports ? root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;
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
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
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
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
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
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  /** Detect free variable `exports`. */

  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports$1 && freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = /*#__PURE__*/function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && /*#__PURE__*/freeModule$1.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

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

  var isTypedArray = nodeIsTypedArray ? /*#__PURE__*/baseUnary(nodeIsTypedArray) : baseIsTypedArray;

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
      if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      isIndex(key, length)))) {
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
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$8;
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
    return function (arg) {
      return func(transform(arg));
    };
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeKeys = /*#__PURE__*/overArg(Object.keys, Object);

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
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      } // Recursively compare objects (susceptible to call stack limits).


      if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }

      skipCtor || (skipCtor = key == 'constructor');
    }

    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

      if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }

    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /* Built-in method references that are verified to be native. */

  var DataView = /*#__PURE__*/getNative(root, 'DataView');

  /* Built-in method references that are verified to be native. */

  var Promise$1 = /*#__PURE__*/getNative(root, 'Promise');

  /* Built-in method references that are verified to be native. */

  var Set$1 = /*#__PURE__*/getNative(root, 'Set');

  /* Built-in method references that are verified to be native. */

  var WeakMap = /*#__PURE__*/getNative(root, 'WeakMap');

  /** `Object#toString` result references. */

  var mapTag$2 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$2 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = /*#__PURE__*/toSource(DataView),
      mapCtorString = /*#__PURE__*/toSource(Map$1),
      promiseCtorString = /*#__PURE__*/toSource(Promise$1),
      setCtorString = /*#__PURE__*/toSource(Set$1),
      weakMapCtorString = /*#__PURE__*/toSource(WeakMap);
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag(new Map$1()) != mapTag$2 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$2 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
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

  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
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
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }

    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
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

    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }

    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
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

  var defineProperty = /*#__PURE__*/function () {
    try {
      var func = /*#__PURE__*/getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();

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
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
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
    return function (object, iteratee, keysFunc) {
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

  var baseFor = /*#__PURE__*/createBaseFor();

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
    return function (collection, iteratee) {
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

  var baseEach = /*#__PURE__*/createBaseEach(baseForOwn);

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
    baseEach(collection, function (value, key, collection) {
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

      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
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
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }

        if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
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
    return function (object) {
      if (object == null) {
        return false;
      }

      return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
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

    return function (object) {
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
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
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

    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }

    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
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
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
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
    var result = memoize(func, function (key) {
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

  var stringToPath = /*#__PURE__*/memoizeCapped(function (string) {
    var result = [];

    if (string.charCodeAt(0) === 46
    /* . */
    ) {
        result.push('');
      }

    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
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
    return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
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

    return function (object) {
      var objValue = get$1(object, path);
      return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
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
    return function (object) {
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
    return function (object) {
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
      return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
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
    return function (collection, iteratee) {
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

  var keyBy = /*#__PURE__*/createAggregator(function (result, value, key) {
    baseAssignValue(result, key, value);
  });

  var _extends$2 = Object.assign || function (target) {
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
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var NODE_ENV = typeof process !== 'undefined' && env && "development";

  var ChartComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(ChartComponent, _React$Component);

    function ChartComponent() {
      _classCallCheck(this, ChartComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this));

      _this.handleOnClick = function (event) {
        var instance = _this.chartInstance;
        var _this$props = _this.props,
            getDatasetAtEvent = _this$props.getDatasetAtEvent,
            getElementAtEvent = _this$props.getElementAtEvent,
            getElementsAtEvent = _this$props.getElementsAtEvent,
            onElementsClick = _this$props.onElementsClick;
        getDatasetAtEvent && getDatasetAtEvent(instance.getDatasetAtEvent(event), event);
        getElementAtEvent && getElementAtEvent(instance.getElementAtEvent(event), event);
        getElementsAtEvent && getElementsAtEvent(instance.getElementsAtEvent(event), event);
        onElementsClick && onElementsClick(instance.getElementsAtEvent(event), event); // Backward compatibility
      };

      _this.ref = function (element) {
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

    ChartComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      var _props = this.props,
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

    ChartComponent.prototype.transformDataProp = function transformDataProp(props) {
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
        datasets: data.datasets && data.datasets.map(function (set) {
          return _extends$2({}, set);
        })
      });
      this.saveCurrentDatasets(); // to remove the dataset metadata from this chart when the chart is destroyed

      return data;
    };

    ChartComponent.prototype.checkDatasets = function checkDatasets(datasets) {
      var isDev = NODE_ENV !== 'production' && NODE_ENV !== 'prod';
      var usingCustomKeyProvider = this.props.datasetKeyProvider !== ChartComponent.getLabelAsKey;
      var multipleDatasets = datasets.length > 1;

      if (isDev && multipleDatasets && !usingCustomKeyProvider) {
        var shouldWarn = false;
        datasets.forEach(function (dataset) {
          if (!dataset.label) {
            shouldWarn = true;
          }
        });

        if (shouldWarn) {
          console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.');
        }
      }
    };

    ChartComponent.prototype.getCurrentDatasets = function getCurrentDatasets() {
      return this.chartInstance && this.chartInstance.config.data && this.chartInstance.config.data.datasets || [];
    };

    ChartComponent.prototype.saveCurrentDatasets = function saveCurrentDatasets() {
      var _this2 = this;

      this.datasets = this.datasets || {};
      var currentDatasets = this.getCurrentDatasets();
      currentDatasets.forEach(function (d) {
        _this2.datasets[_this2.props.datasetKeyProvider(d)] = d;
      });
    };

    ChartComponent.prototype.updateChart = function updateChart() {
      var _this3 = this;

      var options = this.props.options;
      var data = this.memoizeDataProps(this.props);
      if (!this.chartInstance) return;

      if (options) {
        this.chartInstance.options = Chart.helpers.configMerge(this.chartInstance.options, options);
      } // Pipe datasets to chart instance datasets enabling
      // seamless transitions


      var currentDatasets = this.getCurrentDatasets();
      var nextDatasets = data.datasets || [];
      this.checkDatasets(currentDatasets);
      var currentDatasetsIndexed = keyBy(currentDatasets, this.props.datasetKeyProvider); // We can safely replace the dataset array, as long as we retain the _meta property
      // on each dataset.

      this.chartInstance.config.data.datasets = nextDatasets.map(function (next) {
        var current = currentDatasetsIndexed[_this3.props.datasetKeyProvider(next)];

        if (current && current.type === next.type && next.data) {
          // Be robust to no data. Relevant for other update mechanisms as in chartjs-plugin-streaming.
          // The data array must be edited in place. As chart.js adds listeners to it.
          current.data.splice(next.data.length);
          next.data.forEach(function (point, pid) {
            current.data[pid] = next.data[pid];
          });

          var otherProps = _objectWithoutProperties(next, ['data']); // Merge properties. Notice a weakness here. If a property is removed
          // from next, it will be retained by current and never disappears.
          // Workaround is to set value to null or undefined in next.


          return _extends$2({}, current, otherProps);
        } else {
          return next;
        }
      });

      var rest = _objectWithoutProperties(data, ['datasets']);

      this.chartInstance.config.data = _extends$2({}, this.chartInstance.config.data, rest);
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

      if (typeof legend !== 'undefined' && !isEqual(ChartComponent.defaultProps.legend, legend)) {
        options.legend = legend;
      }

      this.chartInstance = new Chart(node, {
        type: type,
        data: data,
        options: options,
        plugins: plugins
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
        onClick: this.handleOnClick
      });
    };

    return ChartComponent;
  }(React__default.Component);

  ChartComponent.getLabelAsKey = function (d) {
    return d.label;
  };

  ChartComponent.propTypes = {
    data: /*#__PURE__*/propTypes.oneOfType([propTypes.object, propTypes.func]).isRequired,
    getDatasetAtEvent: propTypes.func,
    getElementAtEvent: propTypes.func,
    getElementsAtEvent: propTypes.func,
    height: propTypes.number,
    legend: propTypes.object,
    onElementsClick: propTypes.func,
    options: propTypes.object,
    plugins: /*#__PURE__*/propTypes.arrayOf(propTypes.object),
    redraw: propTypes.bool,
    type: function type(props, propName, componentName) {
      if (!Chart.controllers[props[propName]]) {
        return new Error('Invalid chart type `' + props[propName] + '` supplied to' + ' `' + componentName + '`.');
      }
    },
    width: propTypes.number,
    datasetKeyProvider: propTypes.func
  };
  ChartComponent.defaultProps = {
    legend: {
      display: true,
      position: 'bottom'
    },
    type: 'doughnut',
    height: 150,
    width: 300,
    redraw: false,
    options: {},
    datasetKeyProvider: ChartComponent.getLabelAsKey
  };
  var Line = /*#__PURE__*/function (_React$Component4) {
    _inherits(Line, _React$Component4);

    function Line() {
      _classCallCheck(this, Line);

      return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
    }

    Line.prototype.render = function render() {
      var _this9 = this;

      return React__default.createElement(ChartComponent, _extends$2({}, this.props, {
        ref: function ref(_ref3) {
          return _this9.chartInstance = _ref3 && _ref3.chartInstance;
        },
        type: 'line'
      }));
    };

    return Line;
  }(React__default.Component);

  var underscore = /*#__PURE__*/createCommonjsModule(function (module, exports) {
    //     Underscore.js 1.9.1
    //     http://underscorejs.org
    //     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.
    (function () {
      // Baseline setup
      // --------------
      // Establish the root object, `window` (`self`) in the browser, `global`
      // on the server, or `this` in some virtual machines. We use `self`
      // instead of `window` for `WebWorker` support.
      var root = typeof self == 'object' && self.self === self && self || typeof commonjsGlobal == 'object' && commonjsGlobal.global === commonjsGlobal && commonjsGlobal || this || {}; // Save the previous value of the `_` variable.

      var previousUnderscore = root._; // Save bytes in the minified (but not gzipped) version:

      var ArrayProto = Array.prototype,
          ObjProto = Object.prototype;
      var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null; // Create quick reference variables for speed access to core prototypes.

      var push = ArrayProto.push,
          slice = ArrayProto.slice,
          toString = ObjProto.toString,
          hasOwnProperty = ObjProto.hasOwnProperty; // All **ECMAScript 5** native function implementations that we hope to use
      // are declared here.

      var nativeIsArray = Array.isArray,
          nativeKeys = Object.keys,
          nativeCreate = Object.create; // Naked function reference for surrogate-prototype-swapping.

      var Ctor = function Ctor() {}; // Create a safe reference to the Underscore object for use below.


      var _ = function _(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
      }; // Export the Underscore object for **Node.js**, with
      // backwards-compatibility for their old module API. If we're in
      // the browser, add `_` as a global object.
      // (`nodeType` is checked to ensure that `module`
      // and `exports` are not HTML elements.)


      if ( !exports.nodeType) {
        if ( !module.nodeType && module.exports) {
          exports = module.exports = _;
        }

        exports._ = _;
      } else {
        root._ = _;
      } // Current version.


      _.VERSION = '1.9.1'; // Internal function that returns an efficient (for current engines) version
      // of the passed-in callback, to be repeatedly applied in other Underscore
      // functions.

      var optimizeCb = function optimizeCb(func, context, argCount) {
        if (context === void 0) return func;

        switch (argCount == null ? 3 : argCount) {
          case 1:
            return function (value) {
              return func.call(context, value);
            };
          // The 2-argument case is omitted because we’re not using it.

          case 3:
            return function (value, index, collection) {
              return func.call(context, value, index, collection);
            };

          case 4:
            return function (accumulator, value, index, collection) {
              return func.call(context, accumulator, value, index, collection);
            };
        }

        return function () {
          return func.apply(context, arguments);
        };
      };

      var builtinIteratee; // An internal function to generate callbacks that can be applied to each
      // element in a collection, returning the desired result — either `identity`,
      // an arbitrary callback, a property matcher, or a property accessor.

      var cb = function cb(value, context, argCount) {
        if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
        if (value == null) return _.identity;
        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
        if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
        return _.property(value);
      }; // External wrapper for our callback generator. Users may customize
      // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
      // This abstraction hides the internal-only argCount argument.


      _.iteratee = builtinIteratee = function builtinIteratee(value, context) {
        return cb(value, context, Infinity);
      }; // Some functions take a variable number of arguments, or a few expected
      // arguments at the beginning and then a variable number of values to operate
      // on. This helper accumulates all remaining arguments past the function’s
      // argument length (or an explicit `startIndex`), into an array that becomes
      // the last argument. Similar to ES6’s "rest parameter".


      var restArguments = function restArguments(func, startIndex) {
        startIndex = startIndex == null ? func.length - 1 : +startIndex;
        return function () {
          var length = Math.max(arguments.length - startIndex, 0),
              rest = Array(length),
              index = 0;

          for (; index < length; index++) {
            rest[index] = arguments[index + startIndex];
          }

          switch (startIndex) {
            case 0:
              return func.call(this, rest);

            case 1:
              return func.call(this, arguments[0], rest);

            case 2:
              return func.call(this, arguments[0], arguments[1], rest);
          }

          var args = Array(startIndex + 1);

          for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index];
          }

          args[startIndex] = rest;
          return func.apply(this, args);
        };
      }; // An internal function for creating a new object that inherits from another.


      var baseCreate = function baseCreate(prototype) {
        if (!_.isObject(prototype)) return {};
        if (nativeCreate) return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor();
        Ctor.prototype = null;
        return result;
      };

      var shallowProperty = function shallowProperty(key) {
        return function (obj) {
          return obj == null ? void 0 : obj[key];
        };
      };

      var has = function has(obj, path) {
        return obj != null && hasOwnProperty.call(obj, path);
      };

      var deepGet = function deepGet(obj, path) {
        var length = path.length;

        for (var i = 0; i < length; i++) {
          if (obj == null) return void 0;
          obj = obj[path[i]];
        }

        return length ? obj : void 0;
      }; // Helper for collection methods to determine whether a collection
      // should be iterated as an array or as an object.
      // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
      // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094


      var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
      var getLength = shallowProperty('length');

      var isArrayLike = function isArrayLike(collection) {
        var length = getLength(collection);
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
      }; // Collection Functions
      // --------------------
      // The cornerstone, an `each` implementation, aka `forEach`.
      // Handles raw objects in addition to array-likes. Treats all
      // sparse array-likes as if they were dense.


      _.each = _.forEach = function (obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;

        if (isArrayLike(obj)) {
          for (i = 0, length = obj.length; i < length; i++) {
            iteratee(obj[i], i, obj);
          }
        } else {
          var keys = _.keys(obj);

          for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
          }
        }

        return obj;
      }; // Return the results of applying the iteratee to each element.


      _.map = _.collect = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);

        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            results = Array(length);

        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          results[index] = iteratee(obj[currentKey], currentKey, obj);
        }

        return results;
      }; // Create a reducing function iterating left or right.


      var createReduce = function createReduce(dir) {
        // Wrap code that reassigns argument variables in a separate function than
        // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
        var reducer = function reducer(obj, iteratee, memo, initial) {
          var keys = !isArrayLike(obj) && _.keys(obj),
              length = (keys || obj).length,
              index = dir > 0 ? 0 : length - 1;

          if (!initial) {
            memo = obj[keys ? keys[index] : index];
            index += dir;
          }

          for (; index >= 0 && index < length; index += dir) {
            var currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
          }

          return memo;
        };

        return function (obj, iteratee, memo, context) {
          var initial = arguments.length >= 3;
          return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
        };
      }; // **Reduce** builds up a single result from a list of values, aka `inject`,
      // or `foldl`.


      _.reduce = _.foldl = _.inject = createReduce(1); // The right-associative version of reduce, also known as `foldr`.

      _.reduceRight = _.foldr = createReduce(-1); // Return the first value which passes a truth test. Aliased as `detect`.

      _.find = _.detect = function (obj, predicate, context) {
        var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
        var key = keyFinder(obj, predicate, context);
        if (key !== void 0 && key !== -1) return obj[key];
      }; // Return all the elements that pass a truth test.
      // Aliased as `select`.


      _.filter = _.select = function (obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);

        _.each(obj, function (value, index, list) {
          if (predicate(value, index, list)) results.push(value);
        });

        return results;
      }; // Return all the elements for which a truth test fails.


      _.reject = function (obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context);
      }; // Determine whether all of the elements match a truth test.
      // Aliased as `all`.


      _.every = _.all = function (obj, predicate, context) {
        predicate = cb(predicate, context);

        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;

        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }

        return true;
      }; // Determine if at least one element in the object matches a truth test.
      // Aliased as `any`.


      _.some = _.any = function (obj, predicate, context) {
        predicate = cb(predicate, context);

        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;

        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          if (predicate(obj[currentKey], currentKey, obj)) return true;
        }

        return false;
      }; // Determine if the array or object contains a given item (using `===`).
      // Aliased as `includes` and `include`.


      _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
        if (!isArrayLike(obj)) obj = _.values(obj);
        if (typeof fromIndex != 'number' || guard) fromIndex = 0;
        return _.indexOf(obj, item, fromIndex) >= 0;
      }; // Invoke a method (with arguments) on every item in a collection.


      _.invoke = restArguments(function (obj, path, args) {
        var contextPath, func;

        if (_.isFunction(path)) {
          func = path;
        } else if (_.isArray(path)) {
          contextPath = path.slice(0, -1);
          path = path[path.length - 1];
        }

        return _.map(obj, function (context) {
          var method = func;

          if (!method) {
            if (contextPath && contextPath.length) {
              context = deepGet(context, contextPath);
            }

            if (context == null) return void 0;
            method = context[path];
          }

          return method == null ? method : method.apply(context, args);
        });
      }); // Convenience version of a common use case of `map`: fetching a property.

      _.pluck = function (obj, key) {
        return _.map(obj, _.property(key));
      }; // Convenience version of a common use case of `filter`: selecting only objects
      // containing specific `key:value` pairs.


      _.where = function (obj, attrs) {
        return _.filter(obj, _.matcher(attrs));
      }; // Convenience version of a common use case of `find`: getting the first object
      // containing specific `key:value` pairs.


      _.findWhere = function (obj, attrs) {
        return _.find(obj, _.matcher(attrs));
      }; // Return the maximum element (or element-based computation).


      _.max = function (obj, iteratee, context) {
        var result = -Infinity,
            lastComputed = -Infinity,
            value,
            computed;

        if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
          obj = isArrayLike(obj) ? obj : _.values(obj);

          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];

            if (value != null && value > result) {
              result = value;
            }
          }
        } else {
          iteratee = cb(iteratee, context);

          _.each(obj, function (v, index, list) {
            computed = iteratee(v, index, list);

            if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
              result = v;
              lastComputed = computed;
            }
          });
        }

        return result;
      }; // Return the minimum element (or element-based computation).


      _.min = function (obj, iteratee, context) {
        var result = Infinity,
            lastComputed = Infinity,
            value,
            computed;

        if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
          obj = isArrayLike(obj) ? obj : _.values(obj);

          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];

            if (value != null && value < result) {
              result = value;
            }
          }
        } else {
          iteratee = cb(iteratee, context);

          _.each(obj, function (v, index, list) {
            computed = iteratee(v, index, list);

            if (computed < lastComputed || computed === Infinity && result === Infinity) {
              result = v;
              lastComputed = computed;
            }
          });
        }

        return result;
      }; // Shuffle a collection.


      _.shuffle = function (obj) {
        return _.sample(obj, Infinity);
      }; // Sample **n** random values from a collection using the modern version of the
      // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
      // If **n** is not specified, returns a single random element.
      // The internal `guard` argument allows it to work with `map`.


      _.sample = function (obj, n, guard) {
        if (n == null || guard) {
          if (!isArrayLike(obj)) obj = _.values(obj);
          return obj[_.random(obj.length - 1)];
        }

        var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
        var length = getLength(sample);
        n = Math.max(Math.min(n, length), 0);
        var last = length - 1;

        for (var index = 0; index < n; index++) {
          var rand = _.random(index, last);

          var temp = sample[index];
          sample[index] = sample[rand];
          sample[rand] = temp;
        }

        return sample.slice(0, n);
      }; // Sort the object's values by a criterion produced by an iteratee.


      _.sortBy = function (obj, iteratee, context) {
        var index = 0;
        iteratee = cb(iteratee, context);
        return _.pluck(_.map(obj, function (value, key, list) {
          return {
            value: value,
            index: index++,
            criteria: iteratee(value, key, list)
          };
        }).sort(function (left, right) {
          var a = left.criteria;
          var b = right.criteria;

          if (a !== b) {
            if (a > b || a === void 0) return 1;
            if (a < b || b === void 0) return -1;
          }

          return left.index - right.index;
        }), 'value');
      }; // An internal function used for aggregate "group by" operations.


      var group = function group(behavior, partition) {
        return function (obj, iteratee, context) {
          var result = partition ? [[], []] : {};
          iteratee = cb(iteratee, context);

          _.each(obj, function (value, index) {
            var key = iteratee(value, index, obj);
            behavior(result, value, key);
          });

          return result;
        };
      }; // Groups the object's values by a criterion. Pass either a string attribute
      // to group by, or a function that returns the criterion.


      _.groupBy = group(function (result, value, key) {
        if (has(result, key)) result[key].push(value);else result[key] = [value];
      }); // Indexes the object's values by a criterion, similar to `groupBy`, but for
      // when you know that your index values will be unique.

      _.indexBy = group(function (result, value, key) {
        result[key] = value;
      }); // Counts instances of an object that group by a certain criterion. Pass
      // either a string attribute to count by, or a function that returns the
      // criterion.

      _.countBy = group(function (result, value, key) {
        if (has(result, key)) result[key]++;else result[key] = 1;
      });
      var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g; // Safely create a real, live array from anything iterable.

      _.toArray = function (obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);

        if (_.isString(obj)) {
          // Keep surrogate pair characters together
          return obj.match(reStrSymbol);
        }

        if (isArrayLike(obj)) return _.map(obj, _.identity);
        return _.values(obj);
      }; // Return the number of elements in an object.


      _.size = function (obj) {
        if (obj == null) return 0;
        return isArrayLike(obj) ? obj.length : _.keys(obj).length;
      }; // Split a collection into two arrays: one whose elements all satisfy the given
      // predicate, and one whose elements all do not satisfy the predicate.


      _.partition = group(function (result, value, pass) {
        result[pass ? 0 : 1].push(value);
      }, true); // Array Functions
      // ---------------
      // Get the first element of an array. Passing **n** will return the first N
      // values in the array. Aliased as `head` and `take`. The **guard** check
      // allows it to work with `_.map`.

      _.first = _.head = _.take = function (array, n, guard) {
        if (array == null || array.length < 1) return n == null ? void 0 : [];
        if (n == null || guard) return array[0];
        return _.initial(array, array.length - n);
      }; // Returns everything but the last entry of the array. Especially useful on
      // the arguments object. Passing **n** will return all the values in
      // the array, excluding the last N.


      _.initial = function (array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
      }; // Get the last element of an array. Passing **n** will return the last N
      // values in the array.


      _.last = function (array, n, guard) {
        if (array == null || array.length < 1) return n == null ? void 0 : [];
        if (n == null || guard) return array[array.length - 1];
        return _.rest(array, Math.max(0, array.length - n));
      }; // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
      // Especially useful on the arguments object. Passing an **n** will return
      // the rest N values in the array.


      _.rest = _.tail = _.drop = function (array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
      }; // Trim out all falsy values from an array.


      _.compact = function (array) {
        return _.filter(array, Boolean);
      }; // Internal implementation of a recursive `flatten` function.


      var flatten = function flatten(input, shallow, strict, output) {
        output = output || [];
        var idx = output.length;

        for (var i = 0, length = getLength(input); i < length; i++) {
          var value = input[i];

          if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
            // Flatten current level of array or arguments object.
            if (shallow) {
              var j = 0,
                  len = value.length;

              while (j < len) {
                output[idx++] = value[j++];
              }
            } else {
              flatten(value, shallow, strict, output);
              idx = output.length;
            }
          } else if (!strict) {
            output[idx++] = value;
          }
        }

        return output;
      }; // Flatten out an array, either recursively (by default), or just one level.


      _.flatten = function (array, shallow) {
        return flatten(array, shallow, false);
      }; // Return a version of the array that does not contain the specified value(s).


      _.without = restArguments(function (array, otherArrays) {
        return _.difference(array, otherArrays);
      }); // Produce a duplicate-free version of the array. If the array has already
      // been sorted, you have the option of using a faster algorithm.
      // The faster algorithm will not work with an iteratee if the iteratee
      // is not a one-to-one function, so providing an iteratee will disable
      // the faster algorithm.
      // Aliased as `unique`.

      _.uniq = _.unique = function (array, isSorted, iteratee, context) {
        if (!_.isBoolean(isSorted)) {
          context = iteratee;
          iteratee = isSorted;
          isSorted = false;
        }

        if (iteratee != null) iteratee = cb(iteratee, context);
        var result = [];
        var seen = [];

        for (var i = 0, length = getLength(array); i < length; i++) {
          var value = array[i],
              computed = iteratee ? iteratee(value, i, array) : value;

          if (isSorted && !iteratee) {
            if (!i || seen !== computed) result.push(value);
            seen = computed;
          } else if (iteratee) {
            if (!_.contains(seen, computed)) {
              seen.push(computed);
              result.push(value);
            }
          } else if (!_.contains(result, value)) {
            result.push(value);
          }
        }

        return result;
      }; // Produce an array that contains the union: each distinct element from all of
      // the passed-in arrays.


      _.union = restArguments(function (arrays) {
        return _.uniq(flatten(arrays, true, true));
      }); // Produce an array that contains every item shared between all the
      // passed-in arrays.

      _.intersection = function (array) {
        var result = [];
        var argsLength = arguments.length;

        for (var i = 0, length = getLength(array); i < length; i++) {
          var item = array[i];
          if (_.contains(result, item)) continue;
          var j;

          for (j = 1; j < argsLength; j++) {
            if (!_.contains(arguments[j], item)) break;
          }

          if (j === argsLength) result.push(item);
        }

        return result;
      }; // Take the difference between one array and a number of other arrays.
      // Only the elements present in just the first array will remain.


      _.difference = restArguments(function (array, rest) {
        rest = flatten(rest, true, true);
        return _.filter(array, function (value) {
          return !_.contains(rest, value);
        });
      }); // Complement of _.zip. Unzip accepts an array of arrays and groups
      // each array's elements on shared indices.

      _.unzip = function (array) {
        var length = array && _.max(array, getLength).length || 0;
        var result = Array(length);

        for (var index = 0; index < length; index++) {
          result[index] = _.pluck(array, index);
        }

        return result;
      }; // Zip together multiple lists into a single array -- elements that share
      // an index go together.


      _.zip = restArguments(_.unzip); // Converts lists into objects. Pass either a single array of `[key, value]`
      // pairs, or two parallel arrays of the same length -- one of keys, and one of
      // the corresponding values. Passing by pairs is the reverse of _.pairs.

      _.object = function (list, values) {
        var result = {};

        for (var i = 0, length = getLength(list); i < length; i++) {
          if (values) {
            result[list[i]] = values[i];
          } else {
            result[list[i][0]] = list[i][1];
          }
        }

        return result;
      }; // Generator function to create the findIndex and findLastIndex functions.


      var createPredicateIndexFinder = function createPredicateIndexFinder(dir) {
        return function (array, predicate, context) {
          predicate = cb(predicate, context);
          var length = getLength(array);
          var index = dir > 0 ? 0 : length - 1;

          for (; index >= 0 && index < length; index += dir) {
            if (predicate(array[index], index, array)) return index;
          }

          return -1;
        };
      }; // Returns the first index on an array-like that passes a predicate test.


      _.findIndex = createPredicateIndexFinder(1);
      _.findLastIndex = createPredicateIndexFinder(-1); // Use a comparator function to figure out the smallest index at which
      // an object should be inserted so as to maintain order. Uses binary search.

      _.sortedIndex = function (array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0,
            high = getLength(array);

        while (low < high) {
          var mid = Math.floor((low + high) / 2);
          if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
        }

        return low;
      }; // Generator function to create the indexOf and lastIndexOf functions.


      var createIndexFinder = function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function (array, item, idx) {
          var i = 0,
              length = getLength(array);

          if (typeof idx == 'number') {
            if (dir > 0) {
              i = idx >= 0 ? idx : Math.max(idx + length, i);
            } else {
              length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
            }
          } else if (sortedIndex && idx && length) {
            idx = sortedIndex(array, item);
            return array[idx] === item ? idx : -1;
          }

          if (item !== item) {
            idx = predicateFind(slice.call(array, i, length), _.isNaN);
            return idx >= 0 ? idx + i : -1;
          }

          for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
            if (array[idx] === item) return idx;
          }

          return -1;
        };
      }; // Return the position of the first occurrence of an item in an array,
      // or -1 if the item is not included in the array.
      // If the array is large and already in sort order, pass `true`
      // for **isSorted** to use binary search.


      _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
      _.lastIndexOf = createIndexFinder(-1, _.findLastIndex); // Generate an integer Array containing an arithmetic progression. A port of
      // the native Python `range()` function. See
      // [the Python documentation](http://docs.python.org/library/functions.html#range).

      _.range = function (start, stop, step) {
        if (stop == null) {
          stop = start || 0;
          start = 0;
        }

        if (!step) {
          step = stop < start ? -1 : 1;
        }

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx < length; idx++, start += step) {
          range[idx] = start;
        }

        return range;
      }; // Chunk a single array into multiple arrays, each containing `count` or fewer
      // items.


      _.chunk = function (array, count) {
        if (count == null || count < 1) return [];
        var result = [];
        var i = 0,
            length = array.length;

        while (i < length) {
          result.push(slice.call(array, i, i += count));
        }

        return result;
      }; // Function (ahem) Functions
      // ------------------
      // Determines whether to execute a function as a constructor
      // or a normal function with the provided arguments.


      var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
      }; // Create a function bound to a given object (assigning `this`, and arguments,
      // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
      // available.


      _.bind = restArguments(function (func, context, args) {
        if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
        var bound = restArguments(function (callArgs) {
          return executeBound(func, bound, context, this, args.concat(callArgs));
        });
        return bound;
      }); // Partially apply a function by creating a version that has had some of its
      // arguments pre-filled, without changing its dynamic `this` context. _ acts
      // as a placeholder by default, allowing any combination of arguments to be
      // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.

      _.partial = restArguments(function (func, boundArgs) {
        var placeholder = _.partial.placeholder;

        var bound = function bound() {
          var position = 0,
              length = boundArgs.length;
          var args = Array(length);

          for (var i = 0; i < length; i++) {
            args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
          }

          while (position < arguments.length) {
            args.push(arguments[position++]);
          }

          return executeBound(func, bound, this, this, args);
        };

        return bound;
      });
      _.partial.placeholder = _; // Bind a number of an object's methods to that object. Remaining arguments
      // are the method names to be bound. Useful for ensuring that all callbacks
      // defined on an object belong to it.

      _.bindAll = restArguments(function (obj, keys) {
        keys = flatten(keys, false, false);
        var index = keys.length;
        if (index < 1) throw new Error('bindAll must be passed function names');

        while (index--) {
          var key = keys[index];
          obj[key] = _.bind(obj[key], obj);
        }
      }); // Memoize an expensive function by storing its results.

      _.memoize = function (func, hasher) {
        var memoize = function memoize(key) {
          var cache = memoize.cache;
          var address = '' + (hasher ? hasher.apply(this, arguments) : key);
          if (!has(cache, address)) cache[address] = func.apply(this, arguments);
          return cache[address];
        };

        memoize.cache = {};
        return memoize;
      }; // Delays a function for the given number of milliseconds, and then calls
      // it with the arguments supplied.


      _.delay = restArguments(function (func, wait, args) {
        return setTimeout(function () {
          return func.apply(null, args);
        }, wait);
      }); // Defers a function, scheduling it to run after the current call stack has
      // cleared.

      _.defer = _.partial(_.delay, _, 1); // Returns a function, that, when invoked, will only be triggered at most once
      // during a given window of time. Normally, the throttled function will run
      // as much as it can, without ever going more than once per `wait` duration;
      // but if you'd like to disable the execution on the leading edge, pass
      // `{leading: false}`. To disable execution on the trailing edge, ditto.

      _.throttle = function (func, wait, options) {
        var timeout, context, args, result;
        var previous = 0;
        if (!options) options = {};

        var later = function later() {
          previous = options.leading === false ? 0 : _.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        };

        var throttled = function throttled() {
          var now = _.now();

          if (!previous && options.leading === false) previous = now;
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;

          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }

            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }

          return result;
        };

        throttled.cancel = function () {
          clearTimeout(timeout);
          previous = 0;
          timeout = context = args = null;
        };

        return throttled;
      }; // Returns a function, that, as long as it continues to be invoked, will not
      // be triggered. The function will be called after it stops being called for
      // N milliseconds. If `immediate` is passed, trigger the function on the
      // leading edge, instead of the trailing.


      _.debounce = function (func, wait, immediate) {
        var timeout, result;

        var later = function later(context, args) {
          timeout = null;
          if (args) result = func.apply(context, args);
        };

        var debounced = restArguments(function (args) {
          if (timeout) clearTimeout(timeout);

          if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(this, args);
          } else {
            timeout = _.delay(later, wait, this, args);
          }

          return result;
        });

        debounced.cancel = function () {
          clearTimeout(timeout);
          timeout = null;
        };

        return debounced;
      }; // Returns the first function passed as an argument to the second,
      // allowing you to adjust arguments, run code before and after, and
      // conditionally execute the original function.


      _.wrap = function (func, wrapper) {
        return _.partial(wrapper, func);
      }; // Returns a negated version of the passed-in predicate.


      _.negate = function (predicate) {
        return function () {
          return !predicate.apply(this, arguments);
        };
      }; // Returns a function that is the composition of a list of functions, each
      // consuming the return value of the function that follows.


      _.compose = function () {
        var args = arguments;
        var start = args.length - 1;
        return function () {
          var i = start;
          var result = args[start].apply(this, arguments);

          while (i--) {
            result = args[i].call(this, result);
          }

          return result;
        };
      }; // Returns a function that will only be executed on and after the Nth call.


      _.after = function (times, func) {
        return function () {
          if (--times < 1) {
            return func.apply(this, arguments);
          }
        };
      }; // Returns a function that will only be executed up to (but not including) the Nth call.


      _.before = function (times, func) {
        var memo;
        return function () {
          if (--times > 0) {
            memo = func.apply(this, arguments);
          }

          if (times <= 1) func = null;
          return memo;
        };
      }; // Returns a function that will be executed at most one time, no matter how
      // often you call it. Useful for lazy initialization.


      _.once = _.partial(_.before, 2);
      _.restArguments = restArguments; // Object Functions
      // ----------------
      // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.

      var hasEnumBug = !{
        toString: null
      }.propertyIsEnumerable('toString');
      var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

      var collectNonEnumProps = function collectNonEnumProps(obj, keys) {
        var nonEnumIdx = nonEnumerableProps.length;
        var constructor = obj.constructor;
        var proto = _.isFunction(constructor) && constructor.prototype || ObjProto; // Constructor is a special case.

        var prop = 'constructor';
        if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

        while (nonEnumIdx--) {
          prop = nonEnumerableProps[nonEnumIdx];

          if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
            keys.push(prop);
          }
        }
      }; // Retrieve the names of an object's own properties.
      // Delegates to **ECMAScript 5**'s native `Object.keys`.


      _.keys = function (obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];

        for (var key in obj) {
          if (has(obj, key)) keys.push(key);
        } // Ahem, IE < 9.


        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
      }; // Retrieve all the property names of an object.


      _.allKeys = function (obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];

        for (var key in obj) {
          keys.push(key);
        } // Ahem, IE < 9.


        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
      }; // Retrieve the values of an object's properties.


      _.values = function (obj) {
        var keys = _.keys(obj);

        var length = keys.length;
        var values = Array(length);

        for (var i = 0; i < length; i++) {
          values[i] = obj[keys[i]];
        }

        return values;
      }; // Returns the results of applying the iteratee to each element of the object.
      // In contrast to _.map it returns an object.


      _.mapObject = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);

        var keys = _.keys(obj),
            length = keys.length,
            results = {};

        for (var index = 0; index < length; index++) {
          var currentKey = keys[index];
          results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
        }

        return results;
      }; // Convert an object into a list of `[key, value]` pairs.
      // The opposite of _.object.


      _.pairs = function (obj) {
        var keys = _.keys(obj);

        var length = keys.length;
        var pairs = Array(length);

        for (var i = 0; i < length; i++) {
          pairs[i] = [keys[i], obj[keys[i]]];
        }

        return pairs;
      }; // Invert the keys and values of an object. The values must be serializable.


      _.invert = function (obj) {
        var result = {};

        var keys = _.keys(obj);

        for (var i = 0, length = keys.length; i < length; i++) {
          result[obj[keys[i]]] = keys[i];
        }

        return result;
      }; // Return a sorted list of the function names available on the object.
      // Aliased as `methods`.


      _.functions = _.methods = function (obj) {
        var names = [];

        for (var key in obj) {
          if (_.isFunction(obj[key])) names.push(key);
        }

        return names.sort();
      }; // An internal function for creating assigner functions.


      var createAssigner = function createAssigner(keysFunc, defaults) {
        return function (obj) {
          var length = arguments.length;
          if (defaults) obj = Object(obj);
          if (length < 2 || obj == null) return obj;

          for (var index = 1; index < length; index++) {
            var source = arguments[index],
                keys = keysFunc(source),
                l = keys.length;

            for (var i = 0; i < l; i++) {
              var key = keys[i];
              if (!defaults || obj[key] === void 0) obj[key] = source[key];
            }
          }

          return obj;
        };
      }; // Extend a given object with all the properties in passed-in object(s).


      _.extend = createAssigner(_.allKeys); // Assigns a given object with all the own properties in the passed-in object(s).
      // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

      _.extendOwn = _.assign = createAssigner(_.keys); // Returns the first key on an object that passes a predicate test.

      _.findKey = function (obj, predicate, context) {
        predicate = cb(predicate, context);

        var keys = _.keys(obj),
            key;

        for (var i = 0, length = keys.length; i < length; i++) {
          key = keys[i];
          if (predicate(obj[key], key, obj)) return key;
        }
      }; // Internal pick helper function to determine if `obj` has key `key`.


      var keyInObj = function keyInObj(value, key, obj) {
        return key in obj;
      }; // Return a copy of the object only containing the whitelisted properties.


      _.pick = restArguments(function (obj, keys) {
        var result = {},
            iteratee = keys[0];
        if (obj == null) return result;

        if (_.isFunction(iteratee)) {
          if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
          keys = _.allKeys(obj);
        } else {
          iteratee = keyInObj;
          keys = flatten(keys, false, false);
          obj = Object(obj);
        }

        for (var i = 0, length = keys.length; i < length; i++) {
          var key = keys[i];
          var value = obj[key];
          if (iteratee(value, key, obj)) result[key] = value;
        }

        return result;
      }); // Return a copy of the object without the blacklisted properties.

      _.omit = restArguments(function (obj, keys) {
        var iteratee = keys[0],
            context;

        if (_.isFunction(iteratee)) {
          iteratee = _.negate(iteratee);
          if (keys.length > 1) context = keys[1];
        } else {
          keys = _.map(flatten(keys, false, false), String);

          iteratee = function iteratee(value, key) {
            return !_.contains(keys, key);
          };
        }

        return _.pick(obj, iteratee, context);
      }); // Fill in a given object with default properties.

      _.defaults = createAssigner(_.allKeys, true); // Creates an object that inherits from the given prototype object.
      // If additional properties are provided then they will be added to the
      // created object.

      _.create = function (prototype, props) {
        var result = baseCreate(prototype);
        if (props) _.extendOwn(result, props);
        return result;
      }; // Create a (shallow-cloned) duplicate of an object.


      _.clone = function (obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
      }; // Invokes interceptor with the obj, and then returns obj.
      // The primary purpose of this method is to "tap into" a method chain, in
      // order to perform operations on intermediate results within the chain.


      _.tap = function (obj, interceptor) {
        interceptor(obj);
        return obj;
      }; // Returns whether an object has a given set of `key:value` pairs.


      _.isMatch = function (object, attrs) {
        var keys = _.keys(attrs),
            length = keys.length;

        if (object == null) return !length;
        var obj = Object(object);

        for (var i = 0; i < length; i++) {
          var key = keys[i];
          if (attrs[key] !== obj[key] || !(key in obj)) return false;
        }

        return true;
      }; // Internal recursive comparison function for `isEqual`.


      var eq, deepEq;

      eq = function eq(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

        if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

        if (a !== a) return b !== b; // Exhaust primitive checks

        var type = typeof a;
        if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
        return deepEq(a, b, aStack, bStack);
      }; // Internal recursive comparison function for `isEqual`.


      deepEq = function deepEq(a, b, aStack, bStack) {
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped; // Compare `[[Class]]` names.

        var className = toString.call(a);
        if (className !== toString.call(b)) return false;

        switch (className) {
          // Strings, numbers, regular expressions, dates, and booleans are compared by value.
          case '[object RegExp]': // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

          case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return '' + a === '' + b;

          case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

            return +a === 0 ? 1 / +a === 1 / b : +a === +b;

          case '[object Date]':
          case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;

          case '[object Symbol]':
            return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
        }

        var areArrays = className === '[object Array]';

        if (!areArrays) {
          if (typeof a != 'object' || typeof b != 'object') return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
          // from different frames are.

          var aCtor = a.constructor,
              bCtor = b.constructor;

          if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
            return false;
          }
        } // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        // Initializing stack of traversed objects.
        // It's done here since we only need them for objects and arrays comparison.


        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;

        while (length--) {
          // Linear search. Performance is inversely proportional to the number of
          // unique nested structures.
          if (aStack[length] === a) return bStack[length] === b;
        } // Add the first object to the stack of traversed objects.


        aStack.push(a);
        bStack.push(b); // Recursively compare objects and arrays.

        if (areArrays) {
          // Compare array lengths to determine if a deep comparison is necessary.
          length = a.length;
          if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

          while (length--) {
            if (!eq(a[length], b[length], aStack, bStack)) return false;
          }
        } else {
          // Deep compare objects.
          var keys = _.keys(a),
              key;

          length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

          if (_.keys(b).length !== length) return false;

          while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
          }
        } // Remove the first object from the stack of traversed objects.


        aStack.pop();
        bStack.pop();
        return true;
      }; // Perform a deep comparison to check if two objects are equal.


      _.isEqual = function (a, b) {
        return eq(a, b);
      }; // Is a given array, string, or object empty?
      // An "empty" object has no enumerable own-properties.


      _.isEmpty = function (obj) {
        if (obj == null) return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
        return _.keys(obj).length === 0;
      }; // Is a given value a DOM element?


      _.isElement = function (obj) {
        return !!(obj && obj.nodeType === 1);
      }; // Is a given value an array?
      // Delegates to ECMA5's native Array.isArray


      _.isArray = nativeIsArray || function (obj) {
        return toString.call(obj) === '[object Array]';
      }; // Is a given variable an object?


      _.isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
      }; // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.


      _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function (name) {
        _['is' + name] = function (obj) {
          return toString.call(obj) === '[object ' + name + ']';
        };
      }); // Define a fallback version of the method in browsers (ahem, IE < 9), where
      // there isn't any inspectable "Arguments" type.


      if (!_.isArguments(arguments)) {
        _.isArguments = function (obj) {
          return has(obj, 'callee');
        };
      } // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
      // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).


      var nodelist = root.document && root.document.childNodes;

      if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
        _.isFunction = function (obj) {
          return typeof obj == 'function' || false;
        };
      } // Is a given object a finite number?


      _.isFinite = function (obj) {
        return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
      }; // Is the given value `NaN`?


      _.isNaN = function (obj) {
        return _.isNumber(obj) && isNaN(obj);
      }; // Is a given value a boolean?


      _.isBoolean = function (obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
      }; // Is a given value equal to null?


      _.isNull = function (obj) {
        return obj === null;
      }; // Is a given variable undefined?


      _.isUndefined = function (obj) {
        return obj === void 0;
      }; // Shortcut function for checking if an object has a given property directly
      // on itself (in other words, not on a prototype).


      _.has = function (obj, path) {
        if (!_.isArray(path)) {
          return has(obj, path);
        }

        var length = path.length;

        for (var i = 0; i < length; i++) {
          var key = path[i];

          if (obj == null || !hasOwnProperty.call(obj, key)) {
            return false;
          }

          obj = obj[key];
        }

        return !!length;
      }; // Utility Functions
      // -----------------
      // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
      // previous owner. Returns a reference to the Underscore object.


      _.noConflict = function () {
        root._ = previousUnderscore;
        return this;
      }; // Keep the identity function around for default iteratees.


      _.identity = function (value) {
        return value;
      }; // Predicate-generating functions. Often useful outside of Underscore.


      _.constant = function (value) {
        return function () {
          return value;
        };
      };

      _.noop = function () {}; // Creates a function that, when passed an object, will traverse that object’s
      // properties down the given `path`, specified as an array of keys or indexes.


      _.property = function (path) {
        if (!_.isArray(path)) {
          return shallowProperty(path);
        }

        return function (obj) {
          return deepGet(obj, path);
        };
      }; // Generates a function for a given object that returns a given property.


      _.propertyOf = function (obj) {
        if (obj == null) {
          return function () {};
        }

        return function (path) {
          return !_.isArray(path) ? obj[path] : deepGet(obj, path);
        };
      }; // Returns a predicate for checking whether an object has a given set of
      // `key:value` pairs.


      _.matcher = _.matches = function (attrs) {
        attrs = _.extendOwn({}, attrs);
        return function (obj) {
          return _.isMatch(obj, attrs);
        };
      }; // Run a function **n** times.


      _.times = function (n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);

        for (var i = 0; i < n; i++) {
          accum[i] = iteratee(i);
        }

        return accum;
      }; // Return a random integer between min and max (inclusive).


      _.random = function (min, max) {
        if (max == null) {
          max = min;
          min = 0;
        }

        return min + Math.floor(Math.random() * (max - min + 1));
      }; // A (possibly faster) way to get the current timestamp as an integer.


      _.now = Date.now || function () {
        return new Date().getTime();
      }; // List of HTML entities for escaping.


      var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
      };

      var unescapeMap = _.invert(escapeMap); // Functions for escaping and unescaping strings to/from HTML interpolation.


      var createEscaper = function createEscaper(map) {
        var escaper = function escaper(match) {
          return map[match];
        }; // Regexes for identifying a key that needs to be escaped.


        var source = '(?:' + _.keys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function (string) {
          string = string == null ? '' : '' + string;
          return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
      };

      _.escape = createEscaper(escapeMap);
      _.unescape = createEscaper(unescapeMap); // Traverses the children of `obj` along `path`. If a child is a function, it
      // is invoked with its parent as context. Returns the value of the final
      // child, or `fallback` if any child is undefined.

      _.result = function (obj, path, fallback) {
        if (!_.isArray(path)) path = [path];
        var length = path.length;

        if (!length) {
          return _.isFunction(fallback) ? fallback.call(obj) : fallback;
        }

        for (var i = 0; i < length; i++) {
          var prop = obj == null ? void 0 : obj[path[i]];

          if (prop === void 0) {
            prop = fallback;
            i = length; // Ensure we don't continue iterating.
          }

          obj = _.isFunction(prop) ? prop.call(obj) : prop;
        }

        return obj;
      }; // Generate a unique integer id (unique within the entire client session).
      // Useful for temporary DOM ids.


      var idCounter = 0;

      _.uniqueId = function (prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
      }; // By default, Underscore uses ERB-style template delimiters, change the
      // following template settings to use alternative delimiters.


      _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      }; // When customizing `templateSettings`, if you don't want to define an
      // interpolation, evaluation or escaping regex, we need one that is
      // guaranteed not to match.

      var noMatch = /(.)^/; // Certain characters need to be escaped so that they can be put into a
      // string literal.

      var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        "\u2028": 'u2028',
        "\u2029": 'u2029'
      };
      var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

      var escapeChar = function escapeChar(match) {
        return '\\' + escapes[match];
      }; // JavaScript micro-templating, similar to John Resig's implementation.
      // Underscore templating handles arbitrary delimiters, preserves whitespace,
      // and correctly escapes quotes within interpolated code.
      // NB: `oldSettings` only exists for backwards compatibility.


      _.template = function (text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings); // Combine delimiters into one regular expression via alternation.

        var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g'); // Compile the template source, escaping string literals appropriately.

        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
          source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
          index = offset + match.length;

          if (escape) {
            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
          } else if (interpolate) {
            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
          } else if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='";
          } // Adobe VMs need the match returned to produce the correct offset.


          return match;
        });
        source += "';\n"; // If a variable is not specified, place data values in local scope.

        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
        var render;

        try {
          render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
          e.source = source;
          throw e;
        }

        var template = function template(data) {
          return render.call(this, data, _);
        }; // Provide the compiled source as a convenience for precompilation.


        var argument = settings.variable || 'obj';
        template.source = 'function(' + argument + '){\n' + source + '}';
        return template;
      }; // Add a "chain" function. Start chaining a wrapped Underscore object.


      _.chain = function (obj) {
        var instance = _(obj);

        instance._chain = true;
        return instance;
      }; // OOP
      // ---------------
      // If Underscore is called as a function, it returns a wrapped object that
      // can be used OO-style. This wrapper holds altered versions of all the
      // underscore functions. Wrapped objects may be chained.
      // Helper function to continue chaining intermediate results.


      var chainResult = function chainResult(instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
      }; // Add your own custom functions to the Underscore object.


      _.mixin = function (obj) {
        _.each(_.functions(obj), function (name) {
          var func = _[name] = obj[name];

          _.prototype[name] = function () {
            var args = [this._wrapped];
            push.apply(args, arguments);
            return chainResult(this, func.apply(_, args));
          };
        });

        return _;
      }; // Add all of the Underscore functions to the wrapper object.


      _.mixin(_); // Add all mutator Array functions to the wrapper.


      _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
        var method = ArrayProto[name];

        _.prototype[name] = function () {
          var obj = this._wrapped;
          method.apply(obj, arguments);
          if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
          return chainResult(this, obj);
        };
      }); // Add all accessor Array functions to the wrapper.


      _.each(['concat', 'join', 'slice'], function (name) {
        var method = ArrayProto[name];

        _.prototype[name] = function () {
          return chainResult(this, method.apply(this._wrapped, arguments));
        };
      }); // Extracts the result from a wrapped and chained object.


      _.prototype.value = function () {
        return this._wrapped;
      }; // Provide unwrapping proxy for some methods used in engine operations
      // such as arithmetic and JSON stringification.


      _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

      _.prototype.toString = function () {
        return String(this._wrapped);
      }; // AMD registration happens at the end for compatibility with AMD loaders
    })();
  });

  var bn = /*#__PURE__*/createCommonjsModule(function (module) {
    (function (module, exports) {

      function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
      } // Could use `inherits` module, but don't want to move from single file
      // architecture yet.


      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;

        var TempCtor = function TempCtor() {};

        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      } // BN


      function BN(number, base, endian) {
        if (BN.isBN(number)) {
          return number;
        }

        this.negative = 0;
        this.words = null;
        this.length = 0; // Reduction context

        this.red = null;

        if (number !== null) {
          if (base === 'le' || base === 'be') {
            endian = base;
            base = 10;
          }

          this._init(number || 0, base || 10, endian || 'be');
        }
      }

      if (typeof module === 'object') {
        module.exports = BN;
      } else {
        exports.BN = BN;
      }

      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer;

      try {
        Buffer = commonjsRequire('buf' + 'fer').Buffer;
      } catch (e) {}

      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }

        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };

      BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
      };

      BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
      };

      BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') {
          return this._initNumber(number, base, endian);
        }

        if (typeof number === 'object') {
          return this._initArray(number, base, endian);
        }

        if (base === 'hex') {
          base = 16;
        }

        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;

        if (number[0] === '-') {
          start++;
        }

        if (base === 16) {
          this._parseHex(number, start);
        } else {
          this._parseBase(number, base, start);
        }

        if (number[0] === '-') {
          this.negative = 1;
        }

        this.strip();
        if (endian !== 'le') return;

        this._initArray(this.toArray(), base, endian);
      };

      BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }

        if (number < 0x4000000) {
          this.words = [number & 0x3ffffff];
          this.length = 1;
        } else if (number < 0x10000000000000) {
          this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
          this.length = 2;
        } else {
          assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

          this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
          this.length = 3;
        }

        if (endian !== 'le') return; // Reverse the bytes

        this._initArray(this.toArray(), base, endian);
      };

      BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');

        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }

        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }

        var j, w;
        var off = 0;

        if (endian === 'be') {
          for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;

            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        } else if (endian === 'le') {
          for (i = 0, j = 0; i < number.length; i += 3) {
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;

            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        }

        return this.strip();
      };

      function parseHex(str, start, end) {
        var r = 0;
        var len = Math.min(str.length, end);

        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r <<= 4; // 'a' - 'f'

          if (c >= 49 && c <= 54) {
            r |= c - 49 + 0xa; // 'A' - 'F'
          } else if (c >= 17 && c <= 22) {
            r |= c - 17 + 0xa; // '0' - '9'
          } else {
            r |= c & 0xf;
          }
        }

        return r;
      }

      BN.prototype._parseHex = function _parseHex(number, start) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }

        var j, w; // Scan 24-bit chunks and add them to the number

        var off = 0;

        for (i = number.length - 6, j = 0; i >= start; i -= 6) {
          w = parseHex(number, i, i + 6);
          this.words[j] |= w << off & 0x3ffffff; // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb

          this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }

        if (i + 6 !== start) {
          w = parseHex(number, start, i + 6);
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
        }

        this.strip();
      };

      function parseBase(str, start, end, mul) {
        var r = 0;
        var len = Math.min(str.length, end);

        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r *= mul; // 'a'

          if (c >= 49) {
            r += c - 49 + 0xa; // 'A'
          } else if (c >= 17) {
            r += c - 17 + 0xa; // '0' - '9'
          } else {
            r += c;
          }
        }

        return r;
      }

      BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [0];
        this.length = 1; // Find length of limb in base

        for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
          limbLen++;
        }

        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;

        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number, i, i + limbLen, base);
          this.imuln(limbPow);

          if (this.words[0] + word < 0x4000000) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }

        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number, i, number.length, base);

          for (i = 0; i < mod; i++) {
            pow *= base;
          }

          this.imuln(pow);

          if (this.words[0] + word < 0x4000000) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
      };

      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }

        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };

      BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
      };

      BN.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }

        return this;
      }; // Remove leading `0` from `this`


      BN.prototype.strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }

        return this._normSign();
      };

      BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }

        return this;
      };

      BN.prototype.inspect = function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      /*
       var zeros = [];
      var groupSizes = [];
      var groupBases = [];
       var s = '';
      var i = -1;
      while (++i < BN.wordSize) {
        zeros[i] = s;
        s += '0';
      }
      groupSizes[0] = 0;
      groupSizes[1] = 0;
      groupBases[0] = 0;
      groupBases[1] = 0;
      var base = 2 - 1;
      while (++base < 36 + 1) {
        var groupSize = 0;
        var groupBase = 1;
        while (groupBase < (1 << BN.wordSize) / base) {
          groupBase *= base;
          groupSize += 1;
        }
        groupSizes[base] = groupSize;
        groupBases[base] = groupBase;
      }
       */


      var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
      var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

      BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;

        if (base === 16 || base === 'hex') {
          out = '';
          var off = 0;
          var carry = 0;

          for (var i = 0; i < this.length; i++) {
            var w = this.words[i];
            var word = ((w << off | carry) & 0xffffff).toString(16);
            carry = w >>> 24 - off & 0xffffff;

            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }

            off += 2;

            if (off >= 26) {
              off -= 26;
              i--;
            }
          }

          if (carry !== 0) {
            out = carry.toString(16) + out;
          }

          while (out.length % padding !== 0) {
            out = '0' + out;
          }

          if (this.negative !== 0) {
            out = '-' + out;
          }

          return out;
        }

        if (base === (base | 0) && base >= 2 && base <= 36) {
          // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
          var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

          var groupBase = groupBases[base];
          out = '';
          var c = this.clone();
          c.negative = 0;

          while (!c.isZero()) {
            var r = c.modn(groupBase).toString(base);
            c = c.idivn(groupBase);

            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }

          if (this.isZero()) {
            out = '0' + out;
          }

          while (out.length % padding !== 0) {
            out = '0' + out;
          }

          if (this.negative !== 0) {
            out = '-' + out;
          }

          return out;
        }

        assert(false, 'Base should be between 2 and 36');
      };

      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];

        if (this.length === 2) {
          ret += this.words[1] * 0x4000000;
        } else if (this.length === 3 && this.words[2] === 0x01) {
          // NOTE: at this stage it is known that the top bit is set
          ret += 0x10000000000000 + this.words[1] * 0x4000000;
        } else if (this.length > 2) {
          assert(false, 'Number can only safely store up to 53 bits');
        }

        return this.negative !== 0 ? -ret : ret;
      };

      BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
      };

      BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer !== 'undefined');
        return this.toArrayLike(Buffer, endian, length);
      };

      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };

      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        this.strip();
        var littleEndian = endian === 'le';
        var res = new ArrayType(reqLength);
        var b, i;
        var q = this.clone();

        if (!littleEndian) {
          // Assume big-endian
          for (i = 0; i < reqLength - byteLength; i++) {
            res[i] = 0;
          }

          for (i = 0; !q.isZero(); i++) {
            b = q.andln(0xff);
            q.iushrn(8);
            res[reqLength - i - 1] = b;
          }
        } else {
          for (i = 0; !q.isZero(); i++) {
            b = q.andln(0xff);
            q.iushrn(8);
            res[i] = b;
          }

          for (; i < reqLength; i++) {
            res[i] = 0;
          }
        }

        return res;
      };

      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w) {
          return 32 - Math.clz32(w);
        };
      } else {
        BN.prototype._countBits = function _countBits(w) {
          var t = w;
          var r = 0;

          if (t >= 0x1000) {
            r += 13;
            t >>>= 13;
          }

          if (t >= 0x40) {
            r += 7;
            t >>>= 7;
          }

          if (t >= 0x8) {
            r += 4;
            t >>>= 4;
          }

          if (t >= 0x02) {
            r += 2;
            t >>>= 2;
          }

          return r + t;
        };
      }

      BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;

        if ((t & 0x1fff) === 0) {
          r += 13;
          t >>>= 13;
        }

        if ((t & 0x7f) === 0) {
          r += 7;
          t >>>= 7;
        }

        if ((t & 0xf) === 0) {
          r += 4;
          t >>>= 4;
        }

        if ((t & 0x3) === 0) {
          r += 2;
          t >>>= 2;
        }

        if ((t & 0x1) === 0) {
          r++;
        }

        return r;
      }; // Return number of used bits in a BN


      BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];

        var hi = this._countBits(w);

        return (this.length - 1) * 26 + hi;
      };

      function toBitArray(num) {
        var w = new Array(num.bitLength());

        for (var bit = 0; bit < w.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }

        return w;
      } // Number of trailing zero bits


      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;

        for (var i = 0; i < this.length; i++) {
          var b = this._zeroBits(this.words[i]);

          r += b;
          if (b !== 26) break;
        }

        return r;
      };

      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };

      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }

        return this.clone();
      };

      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }

        return this.clone();
      };

      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      }; // Return negative clone of `this`


      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };

      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }

        return this;
      }; // Or `num` with `this` in-place


      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }

        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }

        return this.strip();
      };

      BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
      }; // Or `num` with `this`


      BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
      };

      BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
      }; // And `num` with `this` in-place


      BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;

        if (this.length > num.length) {
          b = num;
        } else {
          b = this;
        }

        for (var i = 0; i < b.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }

        this.length = b.length;
        return this.strip();
      };

      BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
      }; // And `num` with `this`


      BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
      };

      BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
      }; // Xor `num` with `this` in-place


      BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;

        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        for (var i = 0; i < b.length; i++) {
          this.words[i] = a.words[i] ^ b.words[i];
        }

        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        this.length = a.length;
        return this.strip();
      };

      BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
      }; // Xor `num` with `this`


      BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
      };

      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      }; // Not ``this`` with ``width`` bitwidth


      BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26; // Extend the buffer with leading zeroes

        this._expand(bytesNeeded);

        if (bitsLeft > 0) {
          bytesNeeded--;
        } // Handle complete words


        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 0x3ffffff;
        } // Handle the residue


        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
        } // And remove leading zeroes


        return this.strip();
      };

      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      }; // Set `bit` of `this`


      BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;

        this._expand(off + 1);

        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }

        return this.strip();
      }; // Add `num` to `this` in-place


      BN.prototype.iadd = function iadd(num) {
        var r; // negative + positive

        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign(); // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        } // a.length > b.length


        var a, b;

        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        var carry = 0;

        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
          this.words[i] = r & 0x3ffffff;
          carry = r >>> 26;
        }

        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 0x3ffffff;
          carry = r >>> 26;
        }

        this.length = a.length;

        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++; // Copy the rest of the words
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        return this;
      }; // Add `num` to `this`


      BN.prototype.add = function add(num) {
        var res;

        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }

        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
      }; // Subtract `num` from `this` in-place


      BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign(); // -this - num = -(this + num)
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        } // At this point both numbers are positive


        var cmp = this.cmp(num); // Optimization - zeroify

        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        } // a > b


        var a, b;

        if (cmp > 0) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        var carry = 0;

        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 0x3ffffff;
        }

        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 0x3ffffff;
        } // Copy rest of the words


        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        this.length = Math.max(this.length, i);

        if (a !== this) {
          this.negative = 1;
        }

        return this.strip();
      }; // Subtract `num` from `this`


      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };

      function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        var carry = r / 0x4000000 | 0;
        out.words[0] = lo;

        for (var k = 1; k < len; k++) {
          // Sum all words with the same `i + j = k` and accumulate `ncarry`,
          // note that ncarry could be >= 0x3ffffff
          var ncarry = carry >>> 26;
          var rword = carry & 0x3ffffff;
          var maxJ = Math.min(k, num.length - 1);

          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j | 0;
            a = self.words[i] | 0;
            b = num.words[j] | 0;
            r = a * b + rword;
            ncarry += r / 0x4000000 | 0;
            rword = r & 0x3ffffff;
          }

          out.words[k] = rword | 0;
          carry = ncarry | 0;
        }

        if (carry !== 0) {
          out.words[k] = carry | 0;
        } else {
          out.length--;
        }

        return out.strip();
      } // TODO(indutny): it may be reasonable to omit it for users who don't need
      // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
      // multiplication (like elliptic secp256k1).


      var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 0x1fff;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 0x1fff;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 0x1fff;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 0x1fff;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 0x1fff;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 0x1fff;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 0x1fff;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 0x1fff;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 0x1fff;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 0x1fff;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 0x1fff;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 0x1fff;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 0x1fff;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 0x1fff;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 0x1fff;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 0x1fff;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 0x1fff;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 0x1fff;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 0x1fff;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 0x1fff;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */

        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 0x3ffffff;
        /* k = 1 */

        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 0x3ffffff;
        /* k = 2 */

        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 0x3ffffff;
        /* k = 3 */

        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 0x3ffffff;
        /* k = 4 */

        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 0x3ffffff;
        /* k = 5 */

        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 0x3ffffff;
        /* k = 6 */

        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 0x3ffffff;
        /* k = 7 */

        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 0x3ffffff;
        /* k = 8 */

        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 0x3ffffff;
        /* k = 9 */

        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 0x3ffffff;
        /* k = 10 */

        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 0x3ffffff;
        /* k = 11 */

        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 0x3ffffff;
        /* k = 12 */

        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 0x3ffffff;
        /* k = 13 */

        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 0x3ffffff;
        /* k = 14 */

        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 0x3ffffff;
        /* k = 15 */

        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 0x3ffffff;
        /* k = 16 */

        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 0x3ffffff;
        /* k = 17 */

        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 0x3ffffff;
        /* k = 18 */

        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 0x3ffffff;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;

        if (c !== 0) {
          o[19] = c;
          out.length++;
        }

        return out;
      }; // Polyfill comb


      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }

      function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;

        for (var k = 0; k < out.length - 1; k++) {
          // Sum all words with the same `i + j = k` and accumulate `ncarry`,
          // note that ncarry could be >= 0x3ffffff
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 0x3ffffff;
          var maxJ = Math.min(k, num.length - 1);

          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j;
            var a = self.words[i] | 0;
            var b = num.words[j] | 0;
            var r = a * b;
            var lo = r & 0x3ffffff;
            ncarry = ncarry + (r / 0x4000000 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 0x3ffffff;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 0x3ffffff;
          }

          out.words[k] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }

        if (carry !== 0) {
          out.words[k] = carry;
        } else {
          out.length--;
        }

        return out.strip();
      }

      function jumboMulTo(self, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self, num, out);
      }

      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;

        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }

        return res;
      }; // Cooley-Tukey algorithm for FFT
      // slightly revisited to rely on looping instead of recursion


      function FFTM(x, y) {
        this.x = x;
        this.y = y;
      }

      FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;

        for (var i = 0; i < N; i++) {
          t[i] = this.revBin(i, l, N);
        }

        return t;
      }; // Returns binary-reversed representation of `x`


      FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;

        for (var i = 0; i < l; i++) {
          rb |= (x & 1) << l - i - 1;
          x >>= 1;
        }

        return rb;
      }; // Performs "tweedling" phase, therefore 'emulating'
      // behaviour of the recursive algorithm


      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for (var i = 0; i < N; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      };

      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);

        for (var s = 1; s < N; s <<= 1) {
          var l = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l);
          var itwdf = Math.sin(2 * Math.PI / l);

          for (var p = 0; p < N; p += l) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;

            for (var j = 0; j < s; j++) {
              var re = rtws[p + j];
              var ie = itws[p + j];
              var ro = rtws[p + j + s];
              var io = itws[p + j + s];
              var rx = rtwdf_ * ro - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro;
              ro = rx;
              rtws[p + j] = re + ro;
              itws[p + j] = ie + io;
              rtws[p + j + s] = re - ro;
              itws[p + j + s] = ie - io;
              /* jshint maxdepth : false */

              if (j !== l) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };

      FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;

        for (N = N / 2 | 0; N; N = N >>> 1) {
          i++;
        }

        return 1 << i + 1 + odd;
      };

      FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;

        for (var i = 0; i < N / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N - i - 1];
          rws[N - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N - i - 1];
          iws[N - i - 1] = -t;
        }
      };

      FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;

        for (var i = 0; i < N / 2; i++) {
          var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
          ws[i] = w & 0x3ffffff;

          if (w < 0x4000000) {
            carry = 0;
          } else {
            carry = w / 0x4000000 | 0;
          }
        }

        return ws;
      };

      FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;

        for (var i = 0; i < len; i++) {
          carry = carry + (ws[i] | 0);
          rws[2 * i] = carry & 0x1fff;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 0x1fff;
          carry = carry >>> 13;
        } // Pad with zeroes


        for (i = 2 * len; i < N; ++i) {
          rws[i] = 0;
        }

        assert(carry === 0);
        assert((carry & ~0x1fff) === 0);
      };

      FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);

        for (var i = 0; i < N; i++) {
          ph[i] = 0;
        }

        return ph;
      };

      FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);

        var _ = this.stub(N);

        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);

        for (var i = 0; i < N; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }

        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out.strip();
      }; // Multiply `this` by `num`


      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      }; // Multiply employing FFT


      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      }; // In-place Multiplication


      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };

      BN.prototype.imuln = function imuln(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000); // Carry

        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = (this.words[i] | 0) * num;
          var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
          carry >>= 26;
          carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

          carry += lo >>> 26;
          this.words[i] = lo & 0x3ffffff;
        }

        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }

        return this;
      };

      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      }; // `this` * `this`


      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      }; // `this` * `this` in-place


      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      }; // Math.pow(`this`, `num`)


      BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1); // Skip leading zeroes

        var res = this;

        for (var i = 0; i < w.length; i++, res = res.sqr()) {
          if (w[i] !== 0) break;
        }

        if (++i < w.length) {
          for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
            if (w[i] === 0) continue;
            res = res.mul(q);
          }
        }

        return res;
      }; // Shift-left in-place


      BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
        var i;

        if (r !== 0) {
          var carry = 0;

          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }

          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }

        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }

          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }

          this.length += s;
        }

        return this.strip();
      };

      BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
      }; // Shift-right in-place
      // NOTE: `hint` is a lowest bit before trailing zeroes
      // NOTE: if `extended` is present - it will be filled with destroyed bits


      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;

        if (hint) {
          h = (hint - hint % 26) / 26;
        } else {
          h = 0;
        }

        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h); // Extended mode, copy masked part

        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }

          maskedWords.length = s;
        }

        if (s === 0) ; else if (this.length > s) {
          this.length -= s;

          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }

        var carry = 0;

        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask;
        } // Push carried bits as a mask


        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }

        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }

        return this.strip();
      };

      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      }; // Shift-left


      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };

      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      }; // Shift-right


      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };

      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      }; // Test if n bit is set


      BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r; // Fast case: bit is much higher than all existing words

        if (this.length <= s) return false; // Check bit and return

        var w = this.words[s];
        return !!(w & q);
      }; // Return only lowers bits of number (in-place)


      BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');

        if (this.length <= s) {
          return this;
        }

        if (r !== 0) {
          s++;
        }

        this.length = Math.min(s, this.length);

        if (r !== 0) {
          var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
          this.words[this.length - 1] &= mask;
        }

        return this.strip();
      }; // Return only lowers bits of number


      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      }; // Add plain number `num` to `this`


      BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.isubn(-num); // Possible sign change

        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) < num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }

          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        } // Add without checks


        return this._iaddn(num);
      };

      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num; // Carry

        for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
          this.words[i] -= 0x4000000;

          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }

        this.length = Math.max(this.length, i + 1);
        return this;
      }; // Subtract plain number `num` from `this`


      BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.iaddn(-num);

        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }

        this.words[0] -= num;

        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          // Carry
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 0x4000000;
            this.words[i + 1] -= 1;
          }
        }

        return this.strip();
      };

      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };

      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };

      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };

      BN.prototype.abs = function abs() {
        return this.clone().iabs();
      };

      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;

        this._expand(len);

        var w;
        var carry = 0;

        for (i = 0; i < num.length; i++) {
          w = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w -= right & 0x3ffffff;
          carry = (w >> 26) - (right / 0x4000000 | 0);
          this.words[i + shift] = w & 0x3ffffff;
        }

        for (; i < this.length - shift; i++) {
          w = (this.words[i + shift] | 0) + carry;
          carry = w >> 26;
          this.words[i + shift] = w & 0x3ffffff;
        }

        if (carry === 0) return this.strip(); // Subtraction overflow

        assert(carry === -1);
        carry = 0;

        for (i = 0; i < this.length; i++) {
          w = -(this.words[i] | 0) + carry;
          carry = w >> 26;
          this.words[i] = w & 0x3ffffff;
        }

        this.negative = 1;
        return this.strip();
      };

      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num; // Normalize

        var bhi = b.words[b.length - 1] | 0;

        var bhiBits = this._countBits(bhi);

        shift = 26 - bhiBits;

        if (shift !== 0) {
          b = b.ushln(shift);
          a.iushln(shift);
          bhi = b.words[b.length - 1] | 0;
        } // Initialize quotient


        var m = a.length - b.length;
        var q;

        if (mode !== 'mod') {
          q = new BN(null);
          q.length = m + 1;
          q.words = new Array(q.length);

          for (var i = 0; i < q.length; i++) {
            q.words[i] = 0;
          }
        }

        var diff = a.clone()._ishlnsubmul(b, 1, m);

        if (diff.negative === 0) {
          a = diff;

          if (q) {
            q.words[m] = 1;
          }
        }

        for (var j = m - 1; j >= 0; j--) {
          var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
          // (0x7ffffff)

          qj = Math.min(qj / bhi | 0, 0x3ffffff);

          a._ishlnsubmul(b, qj, j);

          while (a.negative !== 0) {
            qj--;
            a.negative = 0;

            a._ishlnsubmul(b, 1, j);

            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }

          if (q) {
            q.words[j] = qj;
          }
        }

        if (q) {
          q.strip();
        }

        a.strip(); // Denormalize

        if (mode !== 'div' && shift !== 0) {
          a.iushrn(shift);
        }

        return {
          div: q || null,
          mod: a
        };
      }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
      //       to `div` to request div only, or be absent to
      //       request both div & mod
      //       2) `positive` is true if unsigned mod is requested


      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());

        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }

        var div, mod, res;

        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);

          if (mode !== 'mod') {
            div = res.div.neg();
          }

          if (mode !== 'div') {
            mod = res.mod.neg();

            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }

          return {
            div: div,
            mod: mod
          };
        }

        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);

          if (mode !== 'mod') {
            div = res.div.neg();
          }

          return {
            div: div,
            mod: res.mod
          };
        }

        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);

          if (mode !== 'div') {
            mod = res.mod.neg();

            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }

          return {
            div: res.div,
            mod: mod
          };
        } // Both numbers are positive at this point
        // Strip both numbers to approximate shift value


        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        } // Very short reduction


        if (num.length === 1) {
          if (mode === 'div') {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }

          if (mode === 'mod') {
            return {
              div: null,
              mod: new BN(this.modn(num.words[0]))
            };
          }

          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modn(num.words[0]))
          };
        }

        return this._wordDiv(num, mode);
      }; // Find `this` / `num`


      BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
      }; // Find `this` % `num`


      BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
      };

      BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
      }; // Find Round(`this` / `num`)


      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num); // Fast case - exact division

        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half); // Round down

        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };

      BN.prototype.modn = function modn(num) {
        assert(num <= 0x3ffffff);
        var p = (1 << 26) % num;
        var acc = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p * acc + (this.words[i] | 0)) % num;
        }

        return acc;
      }; // In-place division by number


      BN.prototype.idivn = function idivn(num) {
        assert(num <= 0x3ffffff);
        var carry = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          var w = (this.words[i] | 0) + carry * 0x4000000;
          this.words[i] = w / num | 0;
          carry = w % num;
        }

        return this.strip();
      };

      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };

      BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();

        if (x.negative !== 0) {
          x = x.umod(p);
        } else {
          x = x.clone();
        } // A * x + B * y = x


        var A = new BN(1);
        var B = new BN(0); // C * x + D * y = y

        var C = new BN(0);
        var D = new BN(1);
        var g = 0;

        while (x.isEven() && y.isEven()) {
          x.iushrn(1);
          y.iushrn(1);
          ++g;
        }

        var yp = y.clone();
        var xp = x.clone();

        while (!x.isZero()) {
          for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
          }

          if (i > 0) {
            x.iushrn(i);

            while (i-- > 0) {
              if (A.isOdd() || B.isOdd()) {
                A.iadd(yp);
                B.isub(xp);
              }

              A.iushrn(1);
              B.iushrn(1);
            }
          }

          for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
          }

          if (j > 0) {
            y.iushrn(j);

            while (j-- > 0) {
              if (C.isOdd() || D.isOdd()) {
                C.iadd(yp);
                D.isub(xp);
              }

              C.iushrn(1);
              D.iushrn(1);
            }
          }

          if (x.cmp(y) >= 0) {
            x.isub(y);
            A.isub(C);
            B.isub(D);
          } else {
            y.isub(x);
            C.isub(A);
            D.isub(B);
          }
        }

        return {
          a: C,
          b: D,
          gcd: y.iushln(g)
        };
      }; // This is reduced incarnation of the binary EEA
      // above, designated to invert members of the
      // _prime_ fields F(p) at a maximal speed


      BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();

        if (a.negative !== 0) {
          a = a.umod(p);
        } else {
          a = a.clone();
        }

        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();

        while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
          }

          if (i > 0) {
            a.iushrn(i);

            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }

              x1.iushrn(1);
            }
          }

          for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
          }

          if (j > 0) {
            b.iushrn(j);

            while (j-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }

              x2.iushrn(1);
            }
          }

          if (a.cmp(b) >= 0) {
            a.isub(b);
            x1.isub(x2);
          } else {
            b.isub(a);
            x2.isub(x1);
          }
        }

        var res;

        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }

        if (res.cmpn(0) < 0) {
          res.iadd(p);
        }

        return res;
      };

      BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0; // Remove common factor of two

        for (var shift = 0; a.isEven() && b.isEven(); shift++) {
          a.iushrn(1);
          b.iushrn(1);
        }

        do {
          while (a.isEven()) {
            a.iushrn(1);
          }

          while (b.isEven()) {
            b.iushrn(1);
          }

          var r = a.cmp(b);

          if (r < 0) {
            // Swap `a` and `b` to make `a` always bigger than `b`
            var t = a;
            a = b;
            b = t;
          } else if (r === 0 || b.cmpn(1) === 0) {
            break;
          }

          a.isub(b);
        } while (true);

        return b.iushln(shift);
      }; // Invert number in the field F(num)


      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };

      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };

      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      }; // And first word and num


      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      }; // Increment at the bit position in-line


      BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r; // Fast case: bit is much higher than all existing words

        if (this.length <= s) {
          this._expand(s + 1);

          this.words[s] |= q;
          return this;
        } // Add bit and propagate, if needed


        var carry = q;

        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w = this.words[i] | 0;
          w += carry;
          carry = w >>> 26;
          w &= 0x3ffffff;
          this.words[i] = w;
        }

        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }

        return this;
      };

      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };

      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this.strip();
        var res;

        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }

          assert(num <= 0x3ffffff, 'Number is too big');
          var w = this.words[0] | 0;
          res = w === num ? 0 : w < num ? -1 : 1;
        }

        if (this.negative !== 0) return -res | 0;
        return res;
      }; // Compare two numbers and return:
      // 1 - if `this` > `num`
      // 0 - if `this` == `num`
      // -1 - if `this` < `num`


      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
      }; // Unsigned comparison


      BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b = num.words[i] | 0;
          if (a === b) continue;

          if (a < b) {
            res = -1;
          } else if (a > b) {
            res = 1;
          }

          break;
        }

        return res;
      };

      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };

      BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
      };

      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };

      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };

      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };

      BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
      };

      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };

      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };

      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };

      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      }; //
      // A reduce context, could be using montgomery or something better, depending
      // on the `m` itself.
      //


      BN.red = function red(num) {
        return new Red(num);
      };

      BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
      };

      BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
      };

      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };

      BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
      };

      BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
      };

      BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
      };

      BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
      };

      BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
      };

      BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
      };

      BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');

        this.red._verify2(this, num);

        return this.red.mul(this, num);
      };

      BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');

        this.red._verify2(this, num);

        return this.red.imul(this, num);
      };

      BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');

        this.red._verify1(this);

        return this.red.sqr(this);
      };

      BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');

        this.red._verify1(this);

        return this.red.isqr(this);
      }; // Square root over p


      BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');

        this.red._verify1(this);

        return this.red.sqrt(this);
      };

      BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');

        this.red._verify1(this);

        return this.red.invm(this);
      }; // Return negative clone of `this` % `red modulo`


      BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');

        this.red._verify1(this);

        return this.red.neg(this);
      };

      BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');

        this.red._verify1(this);

        return this.red.pow(this, num);
      }; // Prime numbers with efficient reduction


      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      }; // Pseudo-Mersenne prime

      function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }

      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };

      MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;

        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);

        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          r.strip();
        }

        return r;
      };

      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };

      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };

      function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }

      inherits(K256, MPrime);

      K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 0x3fffff;
        var outLen = Math.min(input.length, 9);

        for (var i = 0; i < outLen; i++) {
          output.words[i] = input.words[i];
        }

        output.length = outLen;

        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        } // Shift by 9 limbs


        var prev = input.words[9];
        output.words[output.length++] = prev & mask;

        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }

        prev >>>= 22;
        input.words[i - 10] = prev;

        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };

      K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

        var lo = 0;

        for (var i = 0; i < num.length; i++) {
          var w = num.words[i] | 0;
          lo += w * 0x3d1;
          num.words[i] = lo & 0x3ffffff;
          lo = w * 0x40 + (lo / 0x4000000 | 0);
        } // Fast length reduction


        if (num.words[num.length - 1] === 0) {
          num.length--;

          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }

        return num;
      };

      function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }

      inherits(P224, MPrime);

      function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }

      inherits(P192, MPrime);

      function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }

      inherits(P25519, MPrime);

      P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;

        for (var i = 0; i < num.length; i++) {
          var hi = (num.words[i] | 0) * 0x13 + carry;
          var lo = hi & 0x3ffffff;
          hi >>>= 26;
          num.words[i] = lo;
          carry = hi;
        }

        if (carry !== 0) {
          num.words[num.length++] = carry;
        }

        return num;
      }; // Exported mostly for testing purposes, use plain name instead


      BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;

        if (name === 'k256') {
          prime = new K256();
        } else if (name === 'p224') {
          prime = new P224();
        } else if (name === 'p192') {
          prime = new P192();
        } else if (name === 'p25519') {
          prime = new P25519();
        } else {
          throw new Error('Unknown prime ' + name);
        }

        primes[name] = prime;
        return prime;
      }; //
      // Base reduction engine
      //


      function Red(m) {
        if (typeof m === 'string') {
          var prime = BN._prime(m);

          this.m = prime.p;
          this.prime = prime;
        } else {
          assert(m.gtn(1), 'modulus must be greater than 1');
          this.m = m;
          this.prime = null;
        }
      }

      Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
      };

      Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
      };

      Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
      };

      Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }

        return this.m.sub(a)._forceRed(this);
      };

      Red.prototype.add = function add(a, b) {
        this._verify2(a, b);

        var res = a.add(b);

        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }

        return res._forceRed(this);
      };

      Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);

        var res = a.iadd(b);

        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }

        return res;
      };

      Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);

        var res = a.sub(b);

        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);

        var res = a.isub(b);

        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }

        return res;
      };

      Red.prototype.shl = function shl(a, num) {
        this._verify1(a);

        return this.imod(a.ushln(num));
      };

      Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);

        return this.imod(a.imul(b));
      };

      Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);

        return this.imod(a.mul(b));
      };

      Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
      };

      Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
      };

      Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1); // Fast case

        if (mod3 === 3) {
          var pow = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a, pow);
        } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)


        var q = this.m.subn(1);
        var s = 0;

        while (!q.isZero() && q.andln(1) === 0) {
          s++;
          q.iushrn(1);
        }

        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg(); // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.

        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);

        while (this.pow(z, lpow).cmp(nOne) !== 0) {
          z.redIAdd(nOne);
        }

        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;

        while (t.cmp(one) !== 0) {
          var tmp = t;

          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }

          assert(i < m);
          var b = this.pow(c, new BN(1).iushln(m - i - 1));
          r = r.redMul(b);
          c = b.redSqr();
          t = t.redMul(c);
          m = i;
        }

        return r;
      };

      Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);

        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };

      Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;

        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }

        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;

        if (start === 0) {
          start = 26;
        }

        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];

          for (var j = start - 1; j >= 0; j--) {
            var bit = word >> j & 1;

            if (res !== wnd[0]) {
              res = this.sqr(res);
            }

            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }

            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }

          start = 26;
        }

        return res;
      };

      Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      };

      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      }; //
      // Montgomery method engine
      //


      BN.mont = function mont(num) {
        return new Mont(num);
      };

      function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();

        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }

        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }

      inherits(Mont, Red);

      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };

      Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      };

      Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }

        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;

        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;

        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })( module, commonjsGlobal);
  });

  var bn$1 = /*#__PURE__*/createCommonjsModule(function (module) {
    (function (module, exports) {

      function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
      } // Could use `inherits` module, but don't want to move from single file
      // architecture yet.


      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;

        var TempCtor = function TempCtor() {};

        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      } // BN


      function BN(number, base, endian) {
        if (BN.isBN(number)) {
          return number;
        }

        this.negative = 0;
        this.words = null;
        this.length = 0; // Reduction context

        this.red = null;

        if (number !== null) {
          if (base === 'le' || base === 'be') {
            endian = base;
            base = 10;
          }

          this._init(number || 0, base || 10, endian || 'be');
        }
      }

      if (typeof module === 'object') {
        module.exports = BN;
      } else {
        exports.BN = BN;
      }

      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer;

      try {
        Buffer = commonjsRequire('buf' + 'fer').Buffer;
      } catch (e) {}

      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }

        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };

      BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
      };

      BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
      };

      BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') {
          return this._initNumber(number, base, endian);
        }

        if (typeof number === 'object') {
          return this._initArray(number, base, endian);
        }

        if (base === 'hex') {
          base = 16;
        }

        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;

        if (number[0] === '-') {
          start++;
        }

        if (base === 16) {
          this._parseHex(number, start);
        } else {
          this._parseBase(number, base, start);
        }

        if (number[0] === '-') {
          this.negative = 1;
        }

        this.strip();
        if (endian !== 'le') return;

        this._initArray(this.toArray(), base, endian);
      };

      BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }

        if (number < 0x4000000) {
          this.words = [number & 0x3ffffff];
          this.length = 1;
        } else if (number < 0x10000000000000) {
          this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
          this.length = 2;
        } else {
          assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

          this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
          this.length = 3;
        }

        if (endian !== 'le') return; // Reverse the bytes

        this._initArray(this.toArray(), base, endian);
      };

      BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');

        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }

        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }

        var j, w;
        var off = 0;

        if (endian === 'be') {
          for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;

            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        } else if (endian === 'le') {
          for (i = 0, j = 0; i < number.length; i += 3) {
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;

            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        }

        return this.strip();
      };

      function parseHex(str, start, end) {
        var r = 0;
        var len = Math.min(str.length, end);

        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r <<= 4; // 'a' - 'f'

          if (c >= 49 && c <= 54) {
            r |= c - 49 + 0xa; // 'A' - 'F'
          } else if (c >= 17 && c <= 22) {
            r |= c - 17 + 0xa; // '0' - '9'
          } else {
            r |= c & 0xf;
          }
        }

        return r;
      }

      BN.prototype._parseHex = function _parseHex(number, start) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }

        var j, w; // Scan 24-bit chunks and add them to the number

        var off = 0;

        for (i = number.length - 6, j = 0; i >= start; i -= 6) {
          w = parseHex(number, i, i + 6);
          this.words[j] |= w << off & 0x3ffffff; // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb

          this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }

        if (i + 6 !== start) {
          w = parseHex(number, start, i + 6);
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
        }

        this.strip();
      };

      function parseBase(str, start, end, mul) {
        var r = 0;
        var len = Math.min(str.length, end);

        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r *= mul; // 'a'

          if (c >= 49) {
            r += c - 49 + 0xa; // 'A'
          } else if (c >= 17) {
            r += c - 17 + 0xa; // '0' - '9'
          } else {
            r += c;
          }
        }

        return r;
      }

      BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [0];
        this.length = 1; // Find length of limb in base

        for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
          limbLen++;
        }

        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;

        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number, i, i + limbLen, base);
          this.imuln(limbPow);

          if (this.words[0] + word < 0x4000000) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }

        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number, i, number.length, base);

          for (i = 0; i < mod; i++) {
            pow *= base;
          }

          this.imuln(pow);

          if (this.words[0] + word < 0x4000000) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
      };

      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }

        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };

      BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
      };

      BN.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }

        return this;
      }; // Remove leading `0` from `this`


      BN.prototype.strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }

        return this._normSign();
      };

      BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }

        return this;
      };

      BN.prototype.inspect = function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      /*
       var zeros = [];
      var groupSizes = [];
      var groupBases = [];
       var s = '';
      var i = -1;
      while (++i < BN.wordSize) {
        zeros[i] = s;
        s += '0';
      }
      groupSizes[0] = 0;
      groupSizes[1] = 0;
      groupBases[0] = 0;
      groupBases[1] = 0;
      var base = 2 - 1;
      while (++base < 36 + 1) {
        var groupSize = 0;
        var groupBase = 1;
        while (groupBase < (1 << BN.wordSize) / base) {
          groupBase *= base;
          groupSize += 1;
        }
        groupSizes[base] = groupSize;
        groupBases[base] = groupBase;
      }
       */


      var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
      var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

      BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;

        if (base === 16 || base === 'hex') {
          out = '';
          var off = 0;
          var carry = 0;

          for (var i = 0; i < this.length; i++) {
            var w = this.words[i];
            var word = ((w << off | carry) & 0xffffff).toString(16);
            carry = w >>> 24 - off & 0xffffff;

            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }

            off += 2;

            if (off >= 26) {
              off -= 26;
              i--;
            }
          }

          if (carry !== 0) {
            out = carry.toString(16) + out;
          }

          while (out.length % padding !== 0) {
            out = '0' + out;
          }

          if (this.negative !== 0) {
            out = '-' + out;
          }

          return out;
        }

        if (base === (base | 0) && base >= 2 && base <= 36) {
          // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
          var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

          var groupBase = groupBases[base];
          out = '';
          var c = this.clone();
          c.negative = 0;

          while (!c.isZero()) {
            var r = c.modn(groupBase).toString(base);
            c = c.idivn(groupBase);

            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }

          if (this.isZero()) {
            out = '0' + out;
          }

          while (out.length % padding !== 0) {
            out = '0' + out;
          }

          if (this.negative !== 0) {
            out = '-' + out;
          }

          return out;
        }

        assert(false, 'Base should be between 2 and 36');
      };

      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];

        if (this.length === 2) {
          ret += this.words[1] * 0x4000000;
        } else if (this.length === 3 && this.words[2] === 0x01) {
          // NOTE: at this stage it is known that the top bit is set
          ret += 0x10000000000000 + this.words[1] * 0x4000000;
        } else if (this.length > 2) {
          assert(false, 'Number can only safely store up to 53 bits');
        }

        return this.negative !== 0 ? -ret : ret;
      };

      BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
      };

      BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer !== 'undefined');
        return this.toArrayLike(Buffer, endian, length);
      };

      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };

      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        this.strip();
        var littleEndian = endian === 'le';
        var res = new ArrayType(reqLength);
        var b, i;
        var q = this.clone();

        if (!littleEndian) {
          // Assume big-endian
          for (i = 0; i < reqLength - byteLength; i++) {
            res[i] = 0;
          }

          for (i = 0; !q.isZero(); i++) {
            b = q.andln(0xff);
            q.iushrn(8);
            res[reqLength - i - 1] = b;
          }
        } else {
          for (i = 0; !q.isZero(); i++) {
            b = q.andln(0xff);
            q.iushrn(8);
            res[i] = b;
          }

          for (; i < reqLength; i++) {
            res[i] = 0;
          }
        }

        return res;
      };

      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w) {
          return 32 - Math.clz32(w);
        };
      } else {
        BN.prototype._countBits = function _countBits(w) {
          var t = w;
          var r = 0;

          if (t >= 0x1000) {
            r += 13;
            t >>>= 13;
          }

          if (t >= 0x40) {
            r += 7;
            t >>>= 7;
          }

          if (t >= 0x8) {
            r += 4;
            t >>>= 4;
          }

          if (t >= 0x02) {
            r += 2;
            t >>>= 2;
          }

          return r + t;
        };
      }

      BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;

        if ((t & 0x1fff) === 0) {
          r += 13;
          t >>>= 13;
        }

        if ((t & 0x7f) === 0) {
          r += 7;
          t >>>= 7;
        }

        if ((t & 0xf) === 0) {
          r += 4;
          t >>>= 4;
        }

        if ((t & 0x3) === 0) {
          r += 2;
          t >>>= 2;
        }

        if ((t & 0x1) === 0) {
          r++;
        }

        return r;
      }; // Return number of used bits in a BN


      BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];

        var hi = this._countBits(w);

        return (this.length - 1) * 26 + hi;
      };

      function toBitArray(num) {
        var w = new Array(num.bitLength());

        for (var bit = 0; bit < w.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }

        return w;
      } // Number of trailing zero bits


      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;

        for (var i = 0; i < this.length; i++) {
          var b = this._zeroBits(this.words[i]);

          r += b;
          if (b !== 26) break;
        }

        return r;
      };

      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };

      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }

        return this.clone();
      };

      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }

        return this.clone();
      };

      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      }; // Return negative clone of `this`


      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };

      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }

        return this;
      }; // Or `num` with `this` in-place


      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }

        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }

        return this.strip();
      };

      BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
      }; // Or `num` with `this`


      BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
      };

      BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
      }; // And `num` with `this` in-place


      BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;

        if (this.length > num.length) {
          b = num;
        } else {
          b = this;
        }

        for (var i = 0; i < b.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }

        this.length = b.length;
        return this.strip();
      };

      BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
      }; // And `num` with `this`


      BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
      };

      BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
      }; // Xor `num` with `this` in-place


      BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;

        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        for (var i = 0; i < b.length; i++) {
          this.words[i] = a.words[i] ^ b.words[i];
        }

        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        this.length = a.length;
        return this.strip();
      };

      BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
      }; // Xor `num` with `this`


      BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
      };

      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      }; // Not ``this`` with ``width`` bitwidth


      BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26; // Extend the buffer with leading zeroes

        this._expand(bytesNeeded);

        if (bitsLeft > 0) {
          bytesNeeded--;
        } // Handle complete words


        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 0x3ffffff;
        } // Handle the residue


        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
        } // And remove leading zeroes


        return this.strip();
      };

      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      }; // Set `bit` of `this`


      BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;

        this._expand(off + 1);

        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }

        return this.strip();
      }; // Add `num` to `this` in-place


      BN.prototype.iadd = function iadd(num) {
        var r; // negative + positive

        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign(); // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        } // a.length > b.length


        var a, b;

        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        var carry = 0;

        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
          this.words[i] = r & 0x3ffffff;
          carry = r >>> 26;
        }

        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 0x3ffffff;
          carry = r >>> 26;
        }

        this.length = a.length;

        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++; // Copy the rest of the words
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        return this;
      }; // Add `num` to `this`


      BN.prototype.add = function add(num) {
        var res;

        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }

        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
      }; // Subtract `num` from `this` in-place


      BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign(); // -this - num = -(this + num)
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        } // At this point both numbers are positive


        var cmp = this.cmp(num); // Optimization - zeroify

        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        } // a > b


        var a, b;

        if (cmp > 0) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        var carry = 0;

        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 0x3ffffff;
        }

        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 0x3ffffff;
        } // Copy rest of the words


        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        this.length = Math.max(this.length, i);

        if (a !== this) {
          this.negative = 1;
        }

        return this.strip();
      }; // Subtract `num` from `this`


      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };

      function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        var carry = r / 0x4000000 | 0;
        out.words[0] = lo;

        for (var k = 1; k < len; k++) {
          // Sum all words with the same `i + j = k` and accumulate `ncarry`,
          // note that ncarry could be >= 0x3ffffff
          var ncarry = carry >>> 26;
          var rword = carry & 0x3ffffff;
          var maxJ = Math.min(k, num.length - 1);

          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j | 0;
            a = self.words[i] | 0;
            b = num.words[j] | 0;
            r = a * b + rword;
            ncarry += r / 0x4000000 | 0;
            rword = r & 0x3ffffff;
          }

          out.words[k] = rword | 0;
          carry = ncarry | 0;
        }

        if (carry !== 0) {
          out.words[k] = carry | 0;
        } else {
          out.length--;
        }

        return out.strip();
      } // TODO(indutny): it may be reasonable to omit it for users who don't need
      // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
      // multiplication (like elliptic secp256k1).


      var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 0x1fff;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 0x1fff;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 0x1fff;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 0x1fff;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 0x1fff;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 0x1fff;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 0x1fff;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 0x1fff;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 0x1fff;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 0x1fff;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 0x1fff;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 0x1fff;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 0x1fff;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 0x1fff;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 0x1fff;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 0x1fff;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 0x1fff;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 0x1fff;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 0x1fff;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 0x1fff;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */

        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 0x3ffffff;
        /* k = 1 */

        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 0x3ffffff;
        /* k = 2 */

        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 0x3ffffff;
        /* k = 3 */

        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 0x3ffffff;
        /* k = 4 */

        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 0x3ffffff;
        /* k = 5 */

        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 0x3ffffff;
        /* k = 6 */

        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 0x3ffffff;
        /* k = 7 */

        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 0x3ffffff;
        /* k = 8 */

        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 0x3ffffff;
        /* k = 9 */

        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 0x3ffffff;
        /* k = 10 */

        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 0x3ffffff;
        /* k = 11 */

        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 0x3ffffff;
        /* k = 12 */

        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 0x3ffffff;
        /* k = 13 */

        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 0x3ffffff;
        /* k = 14 */

        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 0x3ffffff;
        /* k = 15 */

        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 0x3ffffff;
        /* k = 16 */

        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 0x3ffffff;
        /* k = 17 */

        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 0x3ffffff;
        /* k = 18 */

        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 0x3ffffff;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;

        if (c !== 0) {
          o[19] = c;
          out.length++;
        }

        return out;
      }; // Polyfill comb


      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }

      function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;

        for (var k = 0; k < out.length - 1; k++) {
          // Sum all words with the same `i + j = k` and accumulate `ncarry`,
          // note that ncarry could be >= 0x3ffffff
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 0x3ffffff;
          var maxJ = Math.min(k, num.length - 1);

          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j;
            var a = self.words[i] | 0;
            var b = num.words[j] | 0;
            var r = a * b;
            var lo = r & 0x3ffffff;
            ncarry = ncarry + (r / 0x4000000 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 0x3ffffff;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 0x3ffffff;
          }

          out.words[k] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }

        if (carry !== 0) {
          out.words[k] = carry;
        } else {
          out.length--;
        }

        return out.strip();
      }

      function jumboMulTo(self, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self, num, out);
      }

      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;

        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }

        return res;
      }; // Cooley-Tukey algorithm for FFT
      // slightly revisited to rely on looping instead of recursion


      function FFTM(x, y) {
        this.x = x;
        this.y = y;
      }

      FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;

        for (var i = 0; i < N; i++) {
          t[i] = this.revBin(i, l, N);
        }

        return t;
      }; // Returns binary-reversed representation of `x`


      FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;

        for (var i = 0; i < l; i++) {
          rb |= (x & 1) << l - i - 1;
          x >>= 1;
        }

        return rb;
      }; // Performs "tweedling" phase, therefore 'emulating'
      // behaviour of the recursive algorithm


      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for (var i = 0; i < N; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      };

      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);

        for (var s = 1; s < N; s <<= 1) {
          var l = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l);
          var itwdf = Math.sin(2 * Math.PI / l);

          for (var p = 0; p < N; p += l) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;

            for (var j = 0; j < s; j++) {
              var re = rtws[p + j];
              var ie = itws[p + j];
              var ro = rtws[p + j + s];
              var io = itws[p + j + s];
              var rx = rtwdf_ * ro - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro;
              ro = rx;
              rtws[p + j] = re + ro;
              itws[p + j] = ie + io;
              rtws[p + j + s] = re - ro;
              itws[p + j + s] = ie - io;
              /* jshint maxdepth : false */

              if (j !== l) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };

      FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;

        for (N = N / 2 | 0; N; N = N >>> 1) {
          i++;
        }

        return 1 << i + 1 + odd;
      };

      FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;

        for (var i = 0; i < N / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N - i - 1];
          rws[N - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N - i - 1];
          iws[N - i - 1] = -t;
        }
      };

      FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;

        for (var i = 0; i < N / 2; i++) {
          var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
          ws[i] = w & 0x3ffffff;

          if (w < 0x4000000) {
            carry = 0;
          } else {
            carry = w / 0x4000000 | 0;
          }
        }

        return ws;
      };

      FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;

        for (var i = 0; i < len; i++) {
          carry = carry + (ws[i] | 0);
          rws[2 * i] = carry & 0x1fff;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 0x1fff;
          carry = carry >>> 13;
        } // Pad with zeroes


        for (i = 2 * len; i < N; ++i) {
          rws[i] = 0;
        }

        assert(carry === 0);
        assert((carry & ~0x1fff) === 0);
      };

      FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);

        for (var i = 0; i < N; i++) {
          ph[i] = 0;
        }

        return ph;
      };

      FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);

        var _ = this.stub(N);

        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);

        for (var i = 0; i < N; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }

        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out.strip();
      }; // Multiply `this` by `num`


      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      }; // Multiply employing FFT


      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      }; // In-place Multiplication


      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };

      BN.prototype.imuln = function imuln(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000); // Carry

        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = (this.words[i] | 0) * num;
          var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
          carry >>= 26;
          carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

          carry += lo >>> 26;
          this.words[i] = lo & 0x3ffffff;
        }

        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }

        return this;
      };

      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      }; // `this` * `this`


      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      }; // `this` * `this` in-place


      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      }; // Math.pow(`this`, `num`)


      BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1); // Skip leading zeroes

        var res = this;

        for (var i = 0; i < w.length; i++, res = res.sqr()) {
          if (w[i] !== 0) break;
        }

        if (++i < w.length) {
          for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
            if (w[i] === 0) continue;
            res = res.mul(q);
          }
        }

        return res;
      }; // Shift-left in-place


      BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
        var i;

        if (r !== 0) {
          var carry = 0;

          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }

          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }

        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }

          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }

          this.length += s;
        }

        return this.strip();
      };

      BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
      }; // Shift-right in-place
      // NOTE: `hint` is a lowest bit before trailing zeroes
      // NOTE: if `extended` is present - it will be filled with destroyed bits


      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;

        if (hint) {
          h = (hint - hint % 26) / 26;
        } else {
          h = 0;
        }

        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h); // Extended mode, copy masked part

        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }

          maskedWords.length = s;
        }

        if (s === 0) ; else if (this.length > s) {
          this.length -= s;

          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }

        var carry = 0;

        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask;
        } // Push carried bits as a mask


        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }

        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }

        return this.strip();
      };

      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      }; // Shift-left


      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };

      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      }; // Shift-right


      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };

      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      }; // Test if n bit is set


      BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r; // Fast case: bit is much higher than all existing words

        if (this.length <= s) return false; // Check bit and return

        var w = this.words[s];
        return !!(w & q);
      }; // Return only lowers bits of number (in-place)


      BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');

        if (this.length <= s) {
          return this;
        }

        if (r !== 0) {
          s++;
        }

        this.length = Math.min(s, this.length);

        if (r !== 0) {
          var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
          this.words[this.length - 1] &= mask;
        }

        return this.strip();
      }; // Return only lowers bits of number


      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      }; // Add plain number `num` to `this`


      BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.isubn(-num); // Possible sign change

        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) < num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }

          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        } // Add without checks


        return this._iaddn(num);
      };

      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num; // Carry

        for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
          this.words[i] -= 0x4000000;

          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }

        this.length = Math.max(this.length, i + 1);
        return this;
      }; // Subtract plain number `num` from `this`


      BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.iaddn(-num);

        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }

        this.words[0] -= num;

        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          // Carry
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 0x4000000;
            this.words[i + 1] -= 1;
          }
        }

        return this.strip();
      };

      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };

      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };

      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };

      BN.prototype.abs = function abs() {
        return this.clone().iabs();
      };

      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;

        this._expand(len);

        var w;
        var carry = 0;

        for (i = 0; i < num.length; i++) {
          w = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w -= right & 0x3ffffff;
          carry = (w >> 26) - (right / 0x4000000 | 0);
          this.words[i + shift] = w & 0x3ffffff;
        }

        for (; i < this.length - shift; i++) {
          w = (this.words[i + shift] | 0) + carry;
          carry = w >> 26;
          this.words[i + shift] = w & 0x3ffffff;
        }

        if (carry === 0) return this.strip(); // Subtraction overflow

        assert(carry === -1);
        carry = 0;

        for (i = 0; i < this.length; i++) {
          w = -(this.words[i] | 0) + carry;
          carry = w >> 26;
          this.words[i] = w & 0x3ffffff;
        }

        this.negative = 1;
        return this.strip();
      };

      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num; // Normalize

        var bhi = b.words[b.length - 1] | 0;

        var bhiBits = this._countBits(bhi);

        shift = 26 - bhiBits;

        if (shift !== 0) {
          b = b.ushln(shift);
          a.iushln(shift);
          bhi = b.words[b.length - 1] | 0;
        } // Initialize quotient


        var m = a.length - b.length;
        var q;

        if (mode !== 'mod') {
          q = new BN(null);
          q.length = m + 1;
          q.words = new Array(q.length);

          for (var i = 0; i < q.length; i++) {
            q.words[i] = 0;
          }
        }

        var diff = a.clone()._ishlnsubmul(b, 1, m);

        if (diff.negative === 0) {
          a = diff;

          if (q) {
            q.words[m] = 1;
          }
        }

        for (var j = m - 1; j >= 0; j--) {
          var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
          // (0x7ffffff)

          qj = Math.min(qj / bhi | 0, 0x3ffffff);

          a._ishlnsubmul(b, qj, j);

          while (a.negative !== 0) {
            qj--;
            a.negative = 0;

            a._ishlnsubmul(b, 1, j);

            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }

          if (q) {
            q.words[j] = qj;
          }
        }

        if (q) {
          q.strip();
        }

        a.strip(); // Denormalize

        if (mode !== 'div' && shift !== 0) {
          a.iushrn(shift);
        }

        return {
          div: q || null,
          mod: a
        };
      }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
      //       to `div` to request div only, or be absent to
      //       request both div & mod
      //       2) `positive` is true if unsigned mod is requested


      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());

        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }

        var div, mod, res;

        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);

          if (mode !== 'mod') {
            div = res.div.neg();
          }

          if (mode !== 'div') {
            mod = res.mod.neg();

            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }

          return {
            div: div,
            mod: mod
          };
        }

        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);

          if (mode !== 'mod') {
            div = res.div.neg();
          }

          return {
            div: div,
            mod: res.mod
          };
        }

        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);

          if (mode !== 'div') {
            mod = res.mod.neg();

            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }

          return {
            div: res.div,
            mod: mod
          };
        } // Both numbers are positive at this point
        // Strip both numbers to approximate shift value


        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        } // Very short reduction


        if (num.length === 1) {
          if (mode === 'div') {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }

          if (mode === 'mod') {
            return {
              div: null,
              mod: new BN(this.modn(num.words[0]))
            };
          }

          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modn(num.words[0]))
          };
        }

        return this._wordDiv(num, mode);
      }; // Find `this` / `num`


      BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
      }; // Find `this` % `num`


      BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
      };

      BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
      }; // Find Round(`this` / `num`)


      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num); // Fast case - exact division

        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half); // Round down

        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };

      BN.prototype.modn = function modn(num) {
        assert(num <= 0x3ffffff);
        var p = (1 << 26) % num;
        var acc = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p * acc + (this.words[i] | 0)) % num;
        }

        return acc;
      }; // In-place division by number


      BN.prototype.idivn = function idivn(num) {
        assert(num <= 0x3ffffff);
        var carry = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          var w = (this.words[i] | 0) + carry * 0x4000000;
          this.words[i] = w / num | 0;
          carry = w % num;
        }

        return this.strip();
      };

      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };

      BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();

        if (x.negative !== 0) {
          x = x.umod(p);
        } else {
          x = x.clone();
        } // A * x + B * y = x


        var A = new BN(1);
        var B = new BN(0); // C * x + D * y = y

        var C = new BN(0);
        var D = new BN(1);
        var g = 0;

        while (x.isEven() && y.isEven()) {
          x.iushrn(1);
          y.iushrn(1);
          ++g;
        }

        var yp = y.clone();
        var xp = x.clone();

        while (!x.isZero()) {
          for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
          }

          if (i > 0) {
            x.iushrn(i);

            while (i-- > 0) {
              if (A.isOdd() || B.isOdd()) {
                A.iadd(yp);
                B.isub(xp);
              }

              A.iushrn(1);
              B.iushrn(1);
            }
          }

          for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
          }

          if (j > 0) {
            y.iushrn(j);

            while (j-- > 0) {
              if (C.isOdd() || D.isOdd()) {
                C.iadd(yp);
                D.isub(xp);
              }

              C.iushrn(1);
              D.iushrn(1);
            }
          }

          if (x.cmp(y) >= 0) {
            x.isub(y);
            A.isub(C);
            B.isub(D);
          } else {
            y.isub(x);
            C.isub(A);
            D.isub(B);
          }
        }

        return {
          a: C,
          b: D,
          gcd: y.iushln(g)
        };
      }; // This is reduced incarnation of the binary EEA
      // above, designated to invert members of the
      // _prime_ fields F(p) at a maximal speed


      BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();

        if (a.negative !== 0) {
          a = a.umod(p);
        } else {
          a = a.clone();
        }

        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();

        while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
          }

          if (i > 0) {
            a.iushrn(i);

            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }

              x1.iushrn(1);
            }
          }

          for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
          }

          if (j > 0) {
            b.iushrn(j);

            while (j-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }

              x2.iushrn(1);
            }
          }

          if (a.cmp(b) >= 0) {
            a.isub(b);
            x1.isub(x2);
          } else {
            b.isub(a);
            x2.isub(x1);
          }
        }

        var res;

        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }

        if (res.cmpn(0) < 0) {
          res.iadd(p);
        }

        return res;
      };

      BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0; // Remove common factor of two

        for (var shift = 0; a.isEven() && b.isEven(); shift++) {
          a.iushrn(1);
          b.iushrn(1);
        }

        do {
          while (a.isEven()) {
            a.iushrn(1);
          }

          while (b.isEven()) {
            b.iushrn(1);
          }

          var r = a.cmp(b);

          if (r < 0) {
            // Swap `a` and `b` to make `a` always bigger than `b`
            var t = a;
            a = b;
            b = t;
          } else if (r === 0 || b.cmpn(1) === 0) {
            break;
          }

          a.isub(b);
        } while (true);

        return b.iushln(shift);
      }; // Invert number in the field F(num)


      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };

      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };

      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      }; // And first word and num


      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      }; // Increment at the bit position in-line


      BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r; // Fast case: bit is much higher than all existing words

        if (this.length <= s) {
          this._expand(s + 1);

          this.words[s] |= q;
          return this;
        } // Add bit and propagate, if needed


        var carry = q;

        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w = this.words[i] | 0;
          w += carry;
          carry = w >>> 26;
          w &= 0x3ffffff;
          this.words[i] = w;
        }

        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }

        return this;
      };

      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };

      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this.strip();
        var res;

        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }

          assert(num <= 0x3ffffff, 'Number is too big');
          var w = this.words[0] | 0;
          res = w === num ? 0 : w < num ? -1 : 1;
        }

        if (this.negative !== 0) return -res | 0;
        return res;
      }; // Compare two numbers and return:
      // 1 - if `this` > `num`
      // 0 - if `this` == `num`
      // -1 - if `this` < `num`


      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
      }; // Unsigned comparison


      BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b = num.words[i] | 0;
          if (a === b) continue;

          if (a < b) {
            res = -1;
          } else if (a > b) {
            res = 1;
          }

          break;
        }

        return res;
      };

      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };

      BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
      };

      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };

      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };

      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };

      BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
      };

      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };

      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };

      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };

      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      }; //
      // A reduce context, could be using montgomery or something better, depending
      // on the `m` itself.
      //


      BN.red = function red(num) {
        return new Red(num);
      };

      BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
      };

      BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
      };

      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };

      BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
      };

      BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
      };

      BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
      };

      BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
      };

      BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
      };

      BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
      };

      BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');

        this.red._verify2(this, num);

        return this.red.mul(this, num);
      };

      BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');

        this.red._verify2(this, num);

        return this.red.imul(this, num);
      };

      BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');

        this.red._verify1(this);

        return this.red.sqr(this);
      };

      BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');

        this.red._verify1(this);

        return this.red.isqr(this);
      }; // Square root over p


      BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');

        this.red._verify1(this);

        return this.red.sqrt(this);
      };

      BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');

        this.red._verify1(this);

        return this.red.invm(this);
      }; // Return negative clone of `this` % `red modulo`


      BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');

        this.red._verify1(this);

        return this.red.neg(this);
      };

      BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');

        this.red._verify1(this);

        return this.red.pow(this, num);
      }; // Prime numbers with efficient reduction


      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      }; // Pseudo-Mersenne prime

      function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }

      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };

      MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;

        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);

        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          r.strip();
        }

        return r;
      };

      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };

      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };

      function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }

      inherits(K256, MPrime);

      K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 0x3fffff;
        var outLen = Math.min(input.length, 9);

        for (var i = 0; i < outLen; i++) {
          output.words[i] = input.words[i];
        }

        output.length = outLen;

        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        } // Shift by 9 limbs


        var prev = input.words[9];
        output.words[output.length++] = prev & mask;

        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }

        prev >>>= 22;
        input.words[i - 10] = prev;

        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };

      K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

        var lo = 0;

        for (var i = 0; i < num.length; i++) {
          var w = num.words[i] | 0;
          lo += w * 0x3d1;
          num.words[i] = lo & 0x3ffffff;
          lo = w * 0x40 + (lo / 0x4000000 | 0);
        } // Fast length reduction


        if (num.words[num.length - 1] === 0) {
          num.length--;

          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }

        return num;
      };

      function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }

      inherits(P224, MPrime);

      function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }

      inherits(P192, MPrime);

      function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }

      inherits(P25519, MPrime);

      P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;

        for (var i = 0; i < num.length; i++) {
          var hi = (num.words[i] | 0) * 0x13 + carry;
          var lo = hi & 0x3ffffff;
          hi >>>= 26;
          num.words[i] = lo;
          carry = hi;
        }

        if (carry !== 0) {
          num.words[num.length++] = carry;
        }

        return num;
      }; // Exported mostly for testing purposes, use plain name instead


      BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;

        if (name === 'k256') {
          prime = new K256();
        } else if (name === 'p224') {
          prime = new P224();
        } else if (name === 'p192') {
          prime = new P192();
        } else if (name === 'p25519') {
          prime = new P25519();
        } else {
          throw new Error('Unknown prime ' + name);
        }

        primes[name] = prime;
        return prime;
      }; //
      // Base reduction engine
      //


      function Red(m) {
        if (typeof m === 'string') {
          var prime = BN._prime(m);

          this.m = prime.p;
          this.prime = prime;
        } else {
          assert(m.gtn(1), 'modulus must be greater than 1');
          this.m = m;
          this.prime = null;
        }
      }

      Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
      };

      Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
      };

      Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
      };

      Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }

        return this.m.sub(a)._forceRed(this);
      };

      Red.prototype.add = function add(a, b) {
        this._verify2(a, b);

        var res = a.add(b);

        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }

        return res._forceRed(this);
      };

      Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);

        var res = a.iadd(b);

        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }

        return res;
      };

      Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);

        var res = a.sub(b);

        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);

        var res = a.isub(b);

        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }

        return res;
      };

      Red.prototype.shl = function shl(a, num) {
        this._verify1(a);

        return this.imod(a.ushln(num));
      };

      Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);

        return this.imod(a.imul(b));
      };

      Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);

        return this.imod(a.mul(b));
      };

      Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
      };

      Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
      };

      Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1); // Fast case

        if (mod3 === 3) {
          var pow = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a, pow);
        } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)


        var q = this.m.subn(1);
        var s = 0;

        while (!q.isZero() && q.andln(1) === 0) {
          s++;
          q.iushrn(1);
        }

        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg(); // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.

        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);

        while (this.pow(z, lpow).cmp(nOne) !== 0) {
          z.redIAdd(nOne);
        }

        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;

        while (t.cmp(one) !== 0) {
          var tmp = t;

          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }

          assert(i < m);
          var b = this.pow(c, new BN(1).iushln(m - i - 1));
          r = r.redMul(b);
          c = b.redSqr();
          t = t.redMul(c);
          m = i;
        }

        return r;
      };

      Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);

        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };

      Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;

        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }

        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;

        if (start === 0) {
          start = 26;
        }

        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];

          for (var j = start - 1; j >= 0; j--) {
            var bit = word >> j & 1;

            if (res !== wnd[0]) {
              res = this.sqr(res);
            }

            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }

            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }

          start = 26;
        }

        return res;
      };

      Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      };

      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      }; //
      // Montgomery method engine
      //


      BN.mont = function mont(num) {
        return new Mont(num);
      };

      function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();

        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }

        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }

      inherits(Mont, Red);

      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };

      Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      };

      Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }

        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;

        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;

        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })( module, commonjsGlobal);
  });

  /**
   * Returns a `Boolean` on whether or not the a `String` starts with '0x'
   * @param {String} str the string input value
   * @return {Boolean} a boolean if it is or is not hex prefixed
   * @throws if the str input is not a string
   */
  var src = function isHexPrefixed(str) {
    if (typeof str !== 'string') {
      throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof str + ", while checking isHexPrefixed.");
    }

    return str.slice(0, 2) === '0x';
  };

  /**
   * Removes '0x' from a given `String` is present
   * @param {String} str the string value
   * @return {String|Optional} a string by pass if necessary
   */

  var src$1 = function stripHexPrefix(str) {
    if (typeof str !== 'string') {
      return str;
    }

    return src(str) ? str.slice(2) : str;
  };

  /**
   * Returns a BN object, converts a number value to a BN
   * @param {String|Number|Object} `arg` input a string number, hex string number, number, BigNumber or BN object
   * @return {Object} `output` BN object of the number
   * @throws if the argument is not an array, object that isn't a bignumber, not a string number or number
   */

  var src$2 = function numberToBN(arg) {
    if (typeof arg === 'string' || typeof arg === 'number') {
      var multiplier = new bn$1(1); // eslint-disable-line

      var formattedString = String(arg).toLowerCase().trim();
      var isHexPrefixed = formattedString.substr(0, 2) === '0x' || formattedString.substr(0, 3) === '-0x';
      var stringArg = src$1(formattedString); // eslint-disable-line

      if (stringArg.substr(0, 1) === '-') {
        stringArg = src$1(stringArg.slice(1));
        multiplier = new bn$1(-1, 10);
      }

      stringArg = stringArg === '' ? '0' : stringArg;

      if (!stringArg.match(/^-?[0-9]+$/) && stringArg.match(/^[0-9A-Fa-f]+$/) || stringArg.match(/^[a-fA-F]+$/) || isHexPrefixed === true && stringArg.match(/^[0-9A-Fa-f]+$/)) {
        return new bn$1(stringArg, 16).mul(multiplier);
      }

      if ((stringArg.match(/^-?[0-9]+$/) || stringArg === '') && isHexPrefixed === false) {
        return new bn$1(stringArg, 10).mul(multiplier);
      }
    } else if (typeof arg === 'object' && arg.toString && !arg.pop && !arg.push) {
      if (arg.toString(10).match(/^-?[0-9]+$/) && (arg.mul || arg.dividedToIntegerBy)) {
        return new bn$1(arg.toString(10), 10);
      }
    }

    throw new Error('[number-to-bn] while converting number ' + JSON.stringify(arg) + ' to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported.');
  };

  var zero = /*#__PURE__*/new bn(0);
  var negative1 = /*#__PURE__*/new bn(-1); // complete ethereum unit map

  var unitMap = {
    'noether': '0',
    // eslint-disable-line
    'wei': '1',
    // eslint-disable-line
    'kwei': '1000',
    // eslint-disable-line
    'Kwei': '1000',
    // eslint-disable-line
    'babbage': '1000',
    // eslint-disable-line
    'femtoether': '1000',
    // eslint-disable-line
    'mwei': '1000000',
    // eslint-disable-line
    'Mwei': '1000000',
    // eslint-disable-line
    'lovelace': '1000000',
    // eslint-disable-line
    'picoether': '1000000',
    // eslint-disable-line
    'gwei': '1000000000',
    // eslint-disable-line
    'Gwei': '1000000000',
    // eslint-disable-line
    'shannon': '1000000000',
    // eslint-disable-line
    'nanoether': '1000000000',
    // eslint-disable-line
    'nano': '1000000000',
    // eslint-disable-line
    'szabo': '1000000000000',
    // eslint-disable-line
    'microether': '1000000000000',
    // eslint-disable-line
    'micro': '1000000000000',
    // eslint-disable-line
    'finney': '1000000000000000',
    // eslint-disable-line
    'milliether': '1000000000000000',
    // eslint-disable-line
    'milli': '1000000000000000',
    // eslint-disable-line
    'ether': '1000000000000000000',
    // eslint-disable-line
    'kether': '1000000000000000000000',
    // eslint-disable-line
    'grand': '1000000000000000000000',
    // eslint-disable-line
    'mether': '1000000000000000000000000',
    // eslint-disable-line
    'gether': '1000000000000000000000000000',
    // eslint-disable-line
    'tether': '1000000000000000000000000000000'
  };
  /**
   * Returns value of unit in Wei
   *
   * @method getValueOfUnit
   * @param {String} unit the unit to convert to, default ether
   * @returns {BigNumber} value of the unit (in Wei)
   * @throws error if the unit is not correct:w
   */

  function getValueOfUnit(unitInput) {
    var unit = unitInput ? unitInput.toLowerCase() : 'ether';
    var unitValue = unitMap[unit]; // eslint-disable-line

    if (typeof unitValue !== 'string') {
      throw new Error('[ethjs-unit] the unit provided ' + unitInput + ' doesn\'t exists, please use the one of the following units ' + JSON.stringify(unitMap, null, 2));
    }

    return new bn(unitValue, 10);
  }

  function numberToString(arg) {
    if (typeof arg === 'string') {
      if (!arg.match(/^-?[0-9.]+$/)) {
        throw new Error('while converting number to string, invalid number value \'' + arg + '\', should be a number matching (^-?[0-9.]+).');
      }

      return arg;
    } else if (typeof arg === 'number') {
      return String(arg);
    } else if (typeof arg === 'object' && arg.toString && (arg.toTwos || arg.dividedToIntegerBy)) {
      if (arg.toPrecision) {
        return String(arg.toPrecision());
      } else {
        // eslint-disable-line
        return arg.toString(10);
      }
    }

    throw new Error('while converting number to string, invalid number value \'' + arg + '\' type ' + typeof arg + '.');
  }

  function fromWei(weiInput, unit, optionsInput) {
    var wei = src$2(weiInput); // eslint-disable-line

    var negative = wei.lt(zero); // eslint-disable-line

    var base = getValueOfUnit(unit);
    var baseLength = unitMap[unit].length - 1 || 1;
    var options = optionsInput || {};

    if (negative) {
      wei = wei.mul(negative1);
    }

    var fraction = wei.mod(base).toString(10); // eslint-disable-line

    while (fraction.length < baseLength) {
      fraction = '0' + fraction;
    }

    if (!options.pad) {
      fraction = fraction.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    }

    var whole = wei.div(base).toString(10); // eslint-disable-line

    if (options.commify) {
      whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var value = '' + whole + (fraction == '0' ? '' : '.' + fraction); // eslint-disable-line

    if (negative) {
      value = '-' + value;
    }

    return value;
  }

  function toWei(etherInput, unit) {
    var ether = numberToString(etherInput); // eslint-disable-line

    var base = getValueOfUnit(unit);
    var baseLength = unitMap[unit].length - 1 || 1; // Is it negative?

    var negative = ether.substring(0, 1) === '-'; // eslint-disable-line

    if (negative) {
      ether = ether.substring(1);
    }

    if (ether === '.') {
      throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei, invalid value');
    } // Split it into a whole and fractional part


    var comps = ether.split('.'); // eslint-disable-line

    if (comps.length > 2) {
      throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei,  too many decimal points');
    }

    var whole = comps[0],
        fraction = comps[1]; // eslint-disable-line

    if (!whole) {
      whole = '0';
    }

    if (!fraction) {
      fraction = '0';
    }

    if (fraction.length > baseLength) {
      throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei, too many decimal places');
    }

    while (fraction.length < baseLength) {
      fraction += '0';
    }

    whole = new bn(whole);
    fraction = new bn(fraction);
    var wei = whole.mul(base).add(fraction); // eslint-disable-line

    if (negative) {
      wei = wei.mul(negative1);
    }

    return new bn(wei.toString(10), 10);
  }

  var lib = {
    unitMap: unitMap,
    numberToString: numberToString,
    getValueOfUnit: getValueOfUnit,
    fromWei: fromWei,
    toWei: toWei
  };

  var _nodeResolve_empty = {};

  var _nodeResolve_empty$1 = {
    __proto__: null,
    'default': _nodeResolve_empty
  };

  var require$$0 = getCjsExportFromNamespace(_nodeResolve_empty$1);

  var bn$2 = /*#__PURE__*/createCommonjsModule(function (module) {
    (function (module, exports) {

      function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
      } // Could use `inherits` module, but don't want to move from single file
      // architecture yet.


      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;

        var TempCtor = function TempCtor() {};

        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      } // BN


      function BN(number, base, endian) {
        if (BN.isBN(number)) {
          return number;
        }

        this.negative = 0;
        this.words = null;
        this.length = 0; // Reduction context

        this.red = null;

        if (number !== null) {
          if (base === 'le' || base === 'be') {
            endian = base;
            base = 10;
          }

          this._init(number || 0, base || 10, endian || 'be');
        }
      }

      if (typeof module === 'object') {
        module.exports = BN;
      } else {
        exports.BN = BN;
      }

      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer;

      try {
        Buffer = require$$0.Buffer;
      } catch (e) {}

      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }

        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };

      BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
      };

      BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
      };

      BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') {
          return this._initNumber(number, base, endian);
        }

        if (typeof number === 'object') {
          return this._initArray(number, base, endian);
        }

        if (base === 'hex') {
          base = 16;
        }

        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;

        if (number[0] === '-') {
          start++;
        }

        if (base === 16) {
          this._parseHex(number, start);
        } else {
          this._parseBase(number, base, start);
        }

        if (number[0] === '-') {
          this.negative = 1;
        }

        this.strip();
        if (endian !== 'le') return;

        this._initArray(this.toArray(), base, endian);
      };

      BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }

        if (number < 0x4000000) {
          this.words = [number & 0x3ffffff];
          this.length = 1;
        } else if (number < 0x10000000000000) {
          this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
          this.length = 2;
        } else {
          assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

          this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
          this.length = 3;
        }

        if (endian !== 'le') return; // Reverse the bytes

        this._initArray(this.toArray(), base, endian);
      };

      BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');

        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }

        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }

        var j, w;
        var off = 0;

        if (endian === 'be') {
          for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;

            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        } else if (endian === 'le') {
          for (i = 0, j = 0; i < number.length; i += 3) {
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;

            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        }

        return this.strip();
      };

      function parseHex(str, start, end) {
        var r = 0;
        var len = Math.min(str.length, end);

        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r <<= 4; // 'a' - 'f'

          if (c >= 49 && c <= 54) {
            r |= c - 49 + 0xa; // 'A' - 'F'
          } else if (c >= 17 && c <= 22) {
            r |= c - 17 + 0xa; // '0' - '9'
          } else {
            r |= c & 0xf;
          }
        }

        return r;
      }

      BN.prototype._parseHex = function _parseHex(number, start) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }

        var j, w; // Scan 24-bit chunks and add them to the number

        var off = 0;

        for (i = number.length - 6, j = 0; i >= start; i -= 6) {
          w = parseHex(number, i, i + 6);
          this.words[j] |= w << off & 0x3ffffff; // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb

          this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }

        if (i + 6 !== start) {
          w = parseHex(number, start, i + 6);
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
        }

        this.strip();
      };

      function parseBase(str, start, end, mul) {
        var r = 0;
        var len = Math.min(str.length, end);

        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r *= mul; // 'a'

          if (c >= 49) {
            r += c - 49 + 0xa; // 'A'
          } else if (c >= 17) {
            r += c - 17 + 0xa; // '0' - '9'
          } else {
            r += c;
          }
        }

        return r;
      }

      BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [0];
        this.length = 1; // Find length of limb in base

        for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
          limbLen++;
        }

        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;

        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number, i, i + limbLen, base);
          this.imuln(limbPow);

          if (this.words[0] + word < 0x4000000) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }

        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number, i, number.length, base);

          for (i = 0; i < mod; i++) {
            pow *= base;
          }

          this.imuln(pow);

          if (this.words[0] + word < 0x4000000) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
      };

      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);

        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }

        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };

      BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
      };

      BN.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }

        return this;
      }; // Remove leading `0` from `this`


      BN.prototype.strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }

        return this._normSign();
      };

      BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }

        return this;
      };

      BN.prototype.inspect = function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      /*
       var zeros = [];
      var groupSizes = [];
      var groupBases = [];
       var s = '';
      var i = -1;
      while (++i < BN.wordSize) {
        zeros[i] = s;
        s += '0';
      }
      groupSizes[0] = 0;
      groupSizes[1] = 0;
      groupBases[0] = 0;
      groupBases[1] = 0;
      var base = 2 - 1;
      while (++base < 36 + 1) {
        var groupSize = 0;
        var groupBase = 1;
        while (groupBase < (1 << BN.wordSize) / base) {
          groupBase *= base;
          groupSize += 1;
        }
        groupSizes[base] = groupSize;
        groupBases[base] = groupBase;
      }
       */


      var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
      var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

      BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;

        if (base === 16 || base === 'hex') {
          out = '';
          var off = 0;
          var carry = 0;

          for (var i = 0; i < this.length; i++) {
            var w = this.words[i];
            var word = ((w << off | carry) & 0xffffff).toString(16);
            carry = w >>> 24 - off & 0xffffff;

            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }

            off += 2;

            if (off >= 26) {
              off -= 26;
              i--;
            }
          }

          if (carry !== 0) {
            out = carry.toString(16) + out;
          }

          while (out.length % padding !== 0) {
            out = '0' + out;
          }

          if (this.negative !== 0) {
            out = '-' + out;
          }

          return out;
        }

        if (base === (base | 0) && base >= 2 && base <= 36) {
          // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
          var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

          var groupBase = groupBases[base];
          out = '';
          var c = this.clone();
          c.negative = 0;

          while (!c.isZero()) {
            var r = c.modn(groupBase).toString(base);
            c = c.idivn(groupBase);

            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }

          if (this.isZero()) {
            out = '0' + out;
          }

          while (out.length % padding !== 0) {
            out = '0' + out;
          }

          if (this.negative !== 0) {
            out = '-' + out;
          }

          return out;
        }

        assert(false, 'Base should be between 2 and 36');
      };

      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];

        if (this.length === 2) {
          ret += this.words[1] * 0x4000000;
        } else if (this.length === 3 && this.words[2] === 0x01) {
          // NOTE: at this stage it is known that the top bit is set
          ret += 0x10000000000000 + this.words[1] * 0x4000000;
        } else if (this.length > 2) {
          assert(false, 'Number can only safely store up to 53 bits');
        }

        return this.negative !== 0 ? -ret : ret;
      };

      BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
      };

      BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer !== 'undefined');
        return this.toArrayLike(Buffer, endian, length);
      };

      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };

      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        this.strip();
        var littleEndian = endian === 'le';
        var res = new ArrayType(reqLength);
        var b, i;
        var q = this.clone();

        if (!littleEndian) {
          // Assume big-endian
          for (i = 0; i < reqLength - byteLength; i++) {
            res[i] = 0;
          }

          for (i = 0; !q.isZero(); i++) {
            b = q.andln(0xff);
            q.iushrn(8);
            res[reqLength - i - 1] = b;
          }
        } else {
          for (i = 0; !q.isZero(); i++) {
            b = q.andln(0xff);
            q.iushrn(8);
            res[i] = b;
          }

          for (; i < reqLength; i++) {
            res[i] = 0;
          }
        }

        return res;
      };

      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w) {
          return 32 - Math.clz32(w);
        };
      } else {
        BN.prototype._countBits = function _countBits(w) {
          var t = w;
          var r = 0;

          if (t >= 0x1000) {
            r += 13;
            t >>>= 13;
          }

          if (t >= 0x40) {
            r += 7;
            t >>>= 7;
          }

          if (t >= 0x8) {
            r += 4;
            t >>>= 4;
          }

          if (t >= 0x02) {
            r += 2;
            t >>>= 2;
          }

          return r + t;
        };
      }

      BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;

        if ((t & 0x1fff) === 0) {
          r += 13;
          t >>>= 13;
        }

        if ((t & 0x7f) === 0) {
          r += 7;
          t >>>= 7;
        }

        if ((t & 0xf) === 0) {
          r += 4;
          t >>>= 4;
        }

        if ((t & 0x3) === 0) {
          r += 2;
          t >>>= 2;
        }

        if ((t & 0x1) === 0) {
          r++;
        }

        return r;
      }; // Return number of used bits in a BN


      BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];

        var hi = this._countBits(w);

        return (this.length - 1) * 26 + hi;
      };

      function toBitArray(num) {
        var w = new Array(num.bitLength());

        for (var bit = 0; bit < w.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }

        return w;
      } // Number of trailing zero bits


      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;

        for (var i = 0; i < this.length; i++) {
          var b = this._zeroBits(this.words[i]);

          r += b;
          if (b !== 26) break;
        }

        return r;
      };

      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };

      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }

        return this.clone();
      };

      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }

        return this.clone();
      };

      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      }; // Return negative clone of `this`


      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };

      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }

        return this;
      }; // Or `num` with `this` in-place


      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }

        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }

        return this.strip();
      };

      BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
      }; // Or `num` with `this`


      BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
      };

      BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
      }; // And `num` with `this` in-place


      BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;

        if (this.length > num.length) {
          b = num;
        } else {
          b = this;
        }

        for (var i = 0; i < b.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }

        this.length = b.length;
        return this.strip();
      };

      BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
      }; // And `num` with `this`


      BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
      };

      BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
      }; // Xor `num` with `this` in-place


      BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;

        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        for (var i = 0; i < b.length; i++) {
          this.words[i] = a.words[i] ^ b.words[i];
        }

        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        this.length = a.length;
        return this.strip();
      };

      BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
      }; // Xor `num` with `this`


      BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
      };

      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      }; // Not ``this`` with ``width`` bitwidth


      BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26; // Extend the buffer with leading zeroes

        this._expand(bytesNeeded);

        if (bitsLeft > 0) {
          bytesNeeded--;
        } // Handle complete words


        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 0x3ffffff;
        } // Handle the residue


        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
        } // And remove leading zeroes


        return this.strip();
      };

      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      }; // Set `bit` of `this`


      BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;

        this._expand(off + 1);

        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }

        return this.strip();
      }; // Add `num` to `this` in-place


      BN.prototype.iadd = function iadd(num) {
        var r; // negative + positive

        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign(); // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        } // a.length > b.length


        var a, b;

        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        var carry = 0;

        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
          this.words[i] = r & 0x3ffffff;
          carry = r >>> 26;
        }

        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 0x3ffffff;
          carry = r >>> 26;
        }

        this.length = a.length;

        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++; // Copy the rest of the words
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        return this;
      }; // Add `num` to `this`


      BN.prototype.add = function add(num) {
        var res;

        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }

        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
      }; // Subtract `num` from `this` in-place


      BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign(); // -this - num = -(this + num)
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        } // At this point both numbers are positive


        var cmp = this.cmp(num); // Optimization - zeroify

        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        } // a > b


        var a, b;

        if (cmp > 0) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }

        var carry = 0;

        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 0x3ffffff;
        }

        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 0x3ffffff;
        } // Copy rest of the words


        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }

        this.length = Math.max(this.length, i);

        if (a !== this) {
          this.negative = 1;
        }

        return this.strip();
      }; // Subtract `num` from `this`


      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };

      function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        var carry = r / 0x4000000 | 0;
        out.words[0] = lo;

        for (var k = 1; k < len; k++) {
          // Sum all words with the same `i + j = k` and accumulate `ncarry`,
          // note that ncarry could be >= 0x3ffffff
          var ncarry = carry >>> 26;
          var rword = carry & 0x3ffffff;
          var maxJ = Math.min(k, num.length - 1);

          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j | 0;
            a = self.words[i] | 0;
            b = num.words[j] | 0;
            r = a * b + rword;
            ncarry += r / 0x4000000 | 0;
            rword = r & 0x3ffffff;
          }

          out.words[k] = rword | 0;
          carry = ncarry | 0;
        }

        if (carry !== 0) {
          out.words[k] = carry | 0;
        } else {
          out.length--;
        }

        return out.strip();
      } // TODO(indutny): it may be reasonable to omit it for users who don't need
      // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
      // multiplication (like elliptic secp256k1).


      var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 0x1fff;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 0x1fff;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 0x1fff;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 0x1fff;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 0x1fff;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 0x1fff;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 0x1fff;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 0x1fff;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 0x1fff;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 0x1fff;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 0x1fff;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 0x1fff;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 0x1fff;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 0x1fff;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 0x1fff;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 0x1fff;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 0x1fff;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 0x1fff;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 0x1fff;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 0x1fff;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */

        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 0x3ffffff;
        /* k = 1 */

        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 0x3ffffff;
        /* k = 2 */

        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 0x3ffffff;
        /* k = 3 */

        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 0x3ffffff;
        /* k = 4 */

        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 0x3ffffff;
        /* k = 5 */

        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 0x3ffffff;
        /* k = 6 */

        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 0x3ffffff;
        /* k = 7 */

        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 0x3ffffff;
        /* k = 8 */

        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 0x3ffffff;
        /* k = 9 */

        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 0x3ffffff;
        /* k = 10 */

        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 0x3ffffff;
        /* k = 11 */

        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 0x3ffffff;
        /* k = 12 */

        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 0x3ffffff;
        /* k = 13 */

        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 0x3ffffff;
        /* k = 14 */

        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 0x3ffffff;
        /* k = 15 */

        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 0x3ffffff;
        /* k = 16 */

        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 0x3ffffff;
        /* k = 17 */

        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 0x3ffffff;
        /* k = 18 */

        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 0x3ffffff;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;

        if (c !== 0) {
          o[19] = c;
          out.length++;
        }

        return out;
      }; // Polyfill comb


      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }

      function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;

        for (var k = 0; k < out.length - 1; k++) {
          // Sum all words with the same `i + j = k` and accumulate `ncarry`,
          // note that ncarry could be >= 0x3ffffff
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 0x3ffffff;
          var maxJ = Math.min(k, num.length - 1);

          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j;
            var a = self.words[i] | 0;
            var b = num.words[j] | 0;
            var r = a * b;
            var lo = r & 0x3ffffff;
            ncarry = ncarry + (r / 0x4000000 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 0x3ffffff;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 0x3ffffff;
          }

          out.words[k] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }

        if (carry !== 0) {
          out.words[k] = carry;
        } else {
          out.length--;
        }

        return out.strip();
      }

      function jumboMulTo(self, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self, num, out);
      }

      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;

        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }

        return res;
      }; // Cooley-Tukey algorithm for FFT
      // slightly revisited to rely on looping instead of recursion


      function FFTM(x, y) {
        this.x = x;
        this.y = y;
      }

      FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;

        for (var i = 0; i < N; i++) {
          t[i] = this.revBin(i, l, N);
        }

        return t;
      }; // Returns binary-reversed representation of `x`


      FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;

        for (var i = 0; i < l; i++) {
          rb |= (x & 1) << l - i - 1;
          x >>= 1;
        }

        return rb;
      }; // Performs "tweedling" phase, therefore 'emulating'
      // behaviour of the recursive algorithm


      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for (var i = 0; i < N; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      };

      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);

        for (var s = 1; s < N; s <<= 1) {
          var l = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l);
          var itwdf = Math.sin(2 * Math.PI / l);

          for (var p = 0; p < N; p += l) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;

            for (var j = 0; j < s; j++) {
              var re = rtws[p + j];
              var ie = itws[p + j];
              var ro = rtws[p + j + s];
              var io = itws[p + j + s];
              var rx = rtwdf_ * ro - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro;
              ro = rx;
              rtws[p + j] = re + ro;
              itws[p + j] = ie + io;
              rtws[p + j + s] = re - ro;
              itws[p + j + s] = ie - io;
              /* jshint maxdepth : false */

              if (j !== l) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };

      FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;

        for (N = N / 2 | 0; N; N = N >>> 1) {
          i++;
        }

        return 1 << i + 1 + odd;
      };

      FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;

        for (var i = 0; i < N / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N - i - 1];
          rws[N - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N - i - 1];
          iws[N - i - 1] = -t;
        }
      };

      FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;

        for (var i = 0; i < N / 2; i++) {
          var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
          ws[i] = w & 0x3ffffff;

          if (w < 0x4000000) {
            carry = 0;
          } else {
            carry = w / 0x4000000 | 0;
          }
        }

        return ws;
      };

      FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;

        for (var i = 0; i < len; i++) {
          carry = carry + (ws[i] | 0);
          rws[2 * i] = carry & 0x1fff;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 0x1fff;
          carry = carry >>> 13;
        } // Pad with zeroes


        for (i = 2 * len; i < N; ++i) {
          rws[i] = 0;
        }

        assert(carry === 0);
        assert((carry & ~0x1fff) === 0);
      };

      FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);

        for (var i = 0; i < N; i++) {
          ph[i] = 0;
        }

        return ph;
      };

      FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);

        var _ = this.stub(N);

        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);

        for (var i = 0; i < N; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }

        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out.strip();
      }; // Multiply `this` by `num`


      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      }; // Multiply employing FFT


      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      }; // In-place Multiplication


      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };

      BN.prototype.imuln = function imuln(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000); // Carry

        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = (this.words[i] | 0) * num;
          var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
          carry >>= 26;
          carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

          carry += lo >>> 26;
          this.words[i] = lo & 0x3ffffff;
        }

        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }

        return this;
      };

      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      }; // `this` * `this`


      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      }; // `this` * `this` in-place


      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      }; // Math.pow(`this`, `num`)


      BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1); // Skip leading zeroes

        var res = this;

        for (var i = 0; i < w.length; i++, res = res.sqr()) {
          if (w[i] !== 0) break;
        }

        if (++i < w.length) {
          for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
            if (w[i] === 0) continue;
            res = res.mul(q);
          }
        }

        return res;
      }; // Shift-left in-place


      BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
        var i;

        if (r !== 0) {
          var carry = 0;

          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }

          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }

        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }

          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }

          this.length += s;
        }

        return this.strip();
      };

      BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
      }; // Shift-right in-place
      // NOTE: `hint` is a lowest bit before trailing zeroes
      // NOTE: if `extended` is present - it will be filled with destroyed bits


      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;

        if (hint) {
          h = (hint - hint % 26) / 26;
        } else {
          h = 0;
        }

        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h); // Extended mode, copy masked part

        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }

          maskedWords.length = s;
        }

        if (s === 0) ; else if (this.length > s) {
          this.length -= s;

          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }

        var carry = 0;

        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask;
        } // Push carried bits as a mask


        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }

        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }

        return this.strip();
      };

      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      }; // Shift-left


      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };

      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      }; // Shift-right


      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };

      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      }; // Test if n bit is set


      BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r; // Fast case: bit is much higher than all existing words

        if (this.length <= s) return false; // Check bit and return

        var w = this.words[s];
        return !!(w & q);
      }; // Return only lowers bits of number (in-place)


      BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');

        if (this.length <= s) {
          return this;
        }

        if (r !== 0) {
          s++;
        }

        this.length = Math.min(s, this.length);

        if (r !== 0) {
          var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
          this.words[this.length - 1] &= mask;
        }

        return this.strip();
      }; // Return only lowers bits of number


      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      }; // Add plain number `num` to `this`


      BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.isubn(-num); // Possible sign change

        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) < num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }

          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        } // Add without checks


        return this._iaddn(num);
      };

      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num; // Carry

        for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
          this.words[i] -= 0x4000000;

          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }

        this.length = Math.max(this.length, i + 1);
        return this;
      }; // Subtract plain number `num` from `this`


      BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.iaddn(-num);

        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }

        this.words[0] -= num;

        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          // Carry
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 0x4000000;
            this.words[i + 1] -= 1;
          }
        }

        return this.strip();
      };

      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };

      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };

      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };

      BN.prototype.abs = function abs() {
        return this.clone().iabs();
      };

      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;

        this._expand(len);

        var w;
        var carry = 0;

        for (i = 0; i < num.length; i++) {
          w = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w -= right & 0x3ffffff;
          carry = (w >> 26) - (right / 0x4000000 | 0);
          this.words[i + shift] = w & 0x3ffffff;
        }

        for (; i < this.length - shift; i++) {
          w = (this.words[i + shift] | 0) + carry;
          carry = w >> 26;
          this.words[i + shift] = w & 0x3ffffff;
        }

        if (carry === 0) return this.strip(); // Subtraction overflow

        assert(carry === -1);
        carry = 0;

        for (i = 0; i < this.length; i++) {
          w = -(this.words[i] | 0) + carry;
          carry = w >> 26;
          this.words[i] = w & 0x3ffffff;
        }

        this.negative = 1;
        return this.strip();
      };

      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num; // Normalize

        var bhi = b.words[b.length - 1] | 0;

        var bhiBits = this._countBits(bhi);

        shift = 26 - bhiBits;

        if (shift !== 0) {
          b = b.ushln(shift);
          a.iushln(shift);
          bhi = b.words[b.length - 1] | 0;
        } // Initialize quotient


        var m = a.length - b.length;
        var q;

        if (mode !== 'mod') {
          q = new BN(null);
          q.length = m + 1;
          q.words = new Array(q.length);

          for (var i = 0; i < q.length; i++) {
            q.words[i] = 0;
          }
        }

        var diff = a.clone()._ishlnsubmul(b, 1, m);

        if (diff.negative === 0) {
          a = diff;

          if (q) {
            q.words[m] = 1;
          }
        }

        for (var j = m - 1; j >= 0; j--) {
          var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
          // (0x7ffffff)

          qj = Math.min(qj / bhi | 0, 0x3ffffff);

          a._ishlnsubmul(b, qj, j);

          while (a.negative !== 0) {
            qj--;
            a.negative = 0;

            a._ishlnsubmul(b, 1, j);

            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }

          if (q) {
            q.words[j] = qj;
          }
        }

        if (q) {
          q.strip();
        }

        a.strip(); // Denormalize

        if (mode !== 'div' && shift !== 0) {
          a.iushrn(shift);
        }

        return {
          div: q || null,
          mod: a
        };
      }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
      //       to `div` to request div only, or be absent to
      //       request both div & mod
      //       2) `positive` is true if unsigned mod is requested


      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());

        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }

        var div, mod, res;

        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);

          if (mode !== 'mod') {
            div = res.div.neg();
          }

          if (mode !== 'div') {
            mod = res.mod.neg();

            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }

          return {
            div: div,
            mod: mod
          };
        }

        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);

          if (mode !== 'mod') {
            div = res.div.neg();
          }

          return {
            div: div,
            mod: res.mod
          };
        }

        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);

          if (mode !== 'div') {
            mod = res.mod.neg();

            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }

          return {
            div: res.div,
            mod: mod
          };
        } // Both numbers are positive at this point
        // Strip both numbers to approximate shift value


        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        } // Very short reduction


        if (num.length === 1) {
          if (mode === 'div') {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }

          if (mode === 'mod') {
            return {
              div: null,
              mod: new BN(this.modn(num.words[0]))
            };
          }

          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modn(num.words[0]))
          };
        }

        return this._wordDiv(num, mode);
      }; // Find `this` / `num`


      BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
      }; // Find `this` % `num`


      BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
      };

      BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
      }; // Find Round(`this` / `num`)


      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num); // Fast case - exact division

        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half); // Round down

        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };

      BN.prototype.modn = function modn(num) {
        assert(num <= 0x3ffffff);
        var p = (1 << 26) % num;
        var acc = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p * acc + (this.words[i] | 0)) % num;
        }

        return acc;
      }; // In-place division by number


      BN.prototype.idivn = function idivn(num) {
        assert(num <= 0x3ffffff);
        var carry = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          var w = (this.words[i] | 0) + carry * 0x4000000;
          this.words[i] = w / num | 0;
          carry = w % num;
        }

        return this.strip();
      };

      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };

      BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();

        if (x.negative !== 0) {
          x = x.umod(p);
        } else {
          x = x.clone();
        } // A * x + B * y = x


        var A = new BN(1);
        var B = new BN(0); // C * x + D * y = y

        var C = new BN(0);
        var D = new BN(1);
        var g = 0;

        while (x.isEven() && y.isEven()) {
          x.iushrn(1);
          y.iushrn(1);
          ++g;
        }

        var yp = y.clone();
        var xp = x.clone();

        while (!x.isZero()) {
          for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
          }

          if (i > 0) {
            x.iushrn(i);

            while (i-- > 0) {
              if (A.isOdd() || B.isOdd()) {
                A.iadd(yp);
                B.isub(xp);
              }

              A.iushrn(1);
              B.iushrn(1);
            }
          }

          for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
          }

          if (j > 0) {
            y.iushrn(j);

            while (j-- > 0) {
              if (C.isOdd() || D.isOdd()) {
                C.iadd(yp);
                D.isub(xp);
              }

              C.iushrn(1);
              D.iushrn(1);
            }
          }

          if (x.cmp(y) >= 0) {
            x.isub(y);
            A.isub(C);
            B.isub(D);
          } else {
            y.isub(x);
            C.isub(A);
            D.isub(B);
          }
        }

        return {
          a: C,
          b: D,
          gcd: y.iushln(g)
        };
      }; // This is reduced incarnation of the binary EEA
      // above, designated to invert members of the
      // _prime_ fields F(p) at a maximal speed


      BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();

        if (a.negative !== 0) {
          a = a.umod(p);
        } else {
          a = a.clone();
        }

        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();

        while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
          }

          if (i > 0) {
            a.iushrn(i);

            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }

              x1.iushrn(1);
            }
          }

          for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
          }

          if (j > 0) {
            b.iushrn(j);

            while (j-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }

              x2.iushrn(1);
            }
          }

          if (a.cmp(b) >= 0) {
            a.isub(b);
            x1.isub(x2);
          } else {
            b.isub(a);
            x2.isub(x1);
          }
        }

        var res;

        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }

        if (res.cmpn(0) < 0) {
          res.iadd(p);
        }

        return res;
      };

      BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0; // Remove common factor of two

        for (var shift = 0; a.isEven() && b.isEven(); shift++) {
          a.iushrn(1);
          b.iushrn(1);
        }

        do {
          while (a.isEven()) {
            a.iushrn(1);
          }

          while (b.isEven()) {
            b.iushrn(1);
          }

          var r = a.cmp(b);

          if (r < 0) {
            // Swap `a` and `b` to make `a` always bigger than `b`
            var t = a;
            a = b;
            b = t;
          } else if (r === 0 || b.cmpn(1) === 0) {
            break;
          }

          a.isub(b);
        } while (true);

        return b.iushln(shift);
      }; // Invert number in the field F(num)


      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };

      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };

      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      }; // And first word and num


      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      }; // Increment at the bit position in-line


      BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r; // Fast case: bit is much higher than all existing words

        if (this.length <= s) {
          this._expand(s + 1);

          this.words[s] |= q;
          return this;
        } // Add bit and propagate, if needed


        var carry = q;

        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w = this.words[i] | 0;
          w += carry;
          carry = w >>> 26;
          w &= 0x3ffffff;
          this.words[i] = w;
        }

        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }

        return this;
      };

      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };

      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this.strip();
        var res;

        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }

          assert(num <= 0x3ffffff, 'Number is too big');
          var w = this.words[0] | 0;
          res = w === num ? 0 : w < num ? -1 : 1;
        }

        if (this.negative !== 0) return -res | 0;
        return res;
      }; // Compare two numbers and return:
      // 1 - if `this` > `num`
      // 0 - if `this` == `num`
      // -1 - if `this` < `num`


      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
      }; // Unsigned comparison


      BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;

        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b = num.words[i] | 0;
          if (a === b) continue;

          if (a < b) {
            res = -1;
          } else if (a > b) {
            res = 1;
          }

          break;
        }

        return res;
      };

      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };

      BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
      };

      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };

      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };

      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };

      BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
      };

      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };

      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };

      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };

      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      }; //
      // A reduce context, could be using montgomery or something better, depending
      // on the `m` itself.
      //


      BN.red = function red(num) {
        return new Red(num);
      };

      BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
      };

      BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
      };

      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };

      BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
      };

      BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
      };

      BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
      };

      BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
      };

      BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
      };

      BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
      };

      BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');

        this.red._verify2(this, num);

        return this.red.mul(this, num);
      };

      BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');

        this.red._verify2(this, num);

        return this.red.imul(this, num);
      };

      BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');

        this.red._verify1(this);

        return this.red.sqr(this);
      };

      BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');

        this.red._verify1(this);

        return this.red.isqr(this);
      }; // Square root over p


      BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');

        this.red._verify1(this);

        return this.red.sqrt(this);
      };

      BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');

        this.red._verify1(this);

        return this.red.invm(this);
      }; // Return negative clone of `this` % `red modulo`


      BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');

        this.red._verify1(this);

        return this.red.neg(this);
      };

      BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');

        this.red._verify1(this);

        return this.red.pow(this, num);
      }; // Prime numbers with efficient reduction


      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      }; // Pseudo-Mersenne prime

      function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }

      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };

      MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;

        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);

        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          r.strip();
        }

        return r;
      };

      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };

      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };

      function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }

      inherits(K256, MPrime);

      K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 0x3fffff;
        var outLen = Math.min(input.length, 9);

        for (var i = 0; i < outLen; i++) {
          output.words[i] = input.words[i];
        }

        output.length = outLen;

        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        } // Shift by 9 limbs


        var prev = input.words[9];
        output.words[output.length++] = prev & mask;

        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }

        prev >>>= 22;
        input.words[i - 10] = prev;

        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };

      K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

        var lo = 0;

        for (var i = 0; i < num.length; i++) {
          var w = num.words[i] | 0;
          lo += w * 0x3d1;
          num.words[i] = lo & 0x3ffffff;
          lo = w * 0x40 + (lo / 0x4000000 | 0);
        } // Fast length reduction


        if (num.words[num.length - 1] === 0) {
          num.length--;

          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }

        return num;
      };

      function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }

      inherits(P224, MPrime);

      function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }

      inherits(P192, MPrime);

      function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }

      inherits(P25519, MPrime);

      P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;

        for (var i = 0; i < num.length; i++) {
          var hi = (num.words[i] | 0) * 0x13 + carry;
          var lo = hi & 0x3ffffff;
          hi >>>= 26;
          num.words[i] = lo;
          carry = hi;
        }

        if (carry !== 0) {
          num.words[num.length++] = carry;
        }

        return num;
      }; // Exported mostly for testing purposes, use plain name instead


      BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;

        if (name === 'k256') {
          prime = new K256();
        } else if (name === 'p224') {
          prime = new P224();
        } else if (name === 'p192') {
          prime = new P192();
        } else if (name === 'p25519') {
          prime = new P25519();
        } else {
          throw new Error('Unknown prime ' + name);
        }

        primes[name] = prime;
        return prime;
      }; //
      // Base reduction engine
      //


      function Red(m) {
        if (typeof m === 'string') {
          var prime = BN._prime(m);

          this.m = prime.p;
          this.prime = prime;
        } else {
          assert(m.gtn(1), 'modulus must be greater than 1');
          this.m = m;
          this.prime = null;
        }
      }

      Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
      };

      Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
      };

      Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
      };

      Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }

        return this.m.sub(a)._forceRed(this);
      };

      Red.prototype.add = function add(a, b) {
        this._verify2(a, b);

        var res = a.add(b);

        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }

        return res._forceRed(this);
      };

      Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);

        var res = a.iadd(b);

        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }

        return res;
      };

      Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);

        var res = a.sub(b);

        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);

        var res = a.isub(b);

        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }

        return res;
      };

      Red.prototype.shl = function shl(a, num) {
        this._verify1(a);

        return this.imod(a.ushln(num));
      };

      Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);

        return this.imod(a.imul(b));
      };

      Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);

        return this.imod(a.mul(b));
      };

      Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
      };

      Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
      };

      Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1); // Fast case

        if (mod3 === 3) {
          var pow = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a, pow);
        } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)


        var q = this.m.subn(1);
        var s = 0;

        while (!q.isZero() && q.andln(1) === 0) {
          s++;
          q.iushrn(1);
        }

        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg(); // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.

        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);

        while (this.pow(z, lpow).cmp(nOne) !== 0) {
          z.redIAdd(nOne);
        }

        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;

        while (t.cmp(one) !== 0) {
          var tmp = t;

          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }

          assert(i < m);
          var b = this.pow(c, new BN(1).iushln(m - i - 1));
          r = r.redMul(b);
          c = b.redSqr();
          t = t.redMul(c);
          m = i;
        }

        return r;
      };

      Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);

        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };

      Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;

        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }

        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;

        if (start === 0) {
          start = 26;
        }

        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];

          for (var j = start - 1; j >= 0; j--) {
            var bit = word >> j & 1;

            if (res !== wnd[0]) {
              res = this.sqr(res);
            }

            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }

            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }

          start = 26;
        }

        return res;
      };

      Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      };

      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      }; //
      // Montgomery method engine
      //


      BN.mont = function mont(num) {
        return new Mont(num);
      };

      function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();

        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }

        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }

      inherits(Mont, Red);

      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };

      Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      };

      Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }

        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;

        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;

        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }

        return res._forceRed(this);
      };

      Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })( module, commonjsGlobal);
  });

  var utf8 = /*#__PURE__*/createCommonjsModule(function (module, exports) {

    (function (root) {
      var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        var value;
        var extra;

        while (counter < length) {
          value = string.charCodeAt(counter++);

          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);

            if ((extra & 0xFC00) == 0xDC00) {
              // low surrogate
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // unmatched surrogate; only append this code unit, in case the next
              // code unit is the high surrogate of a surrogate pair
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }

        return output;
      } // Taken from https://mths.be/punycode


      function ucs2encode(array) {
        var length = array.length;
        var index = -1;
        var value;
        var output = '';

        while (++index < length) {
          value = array[index];

          if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
          }

          output += stringFromCharCode(value);
        }

        return output;
      }

      function checkScalarValue(codePoint) {
        if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
          throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
        }
      }
      /*--------------------------------------------------------------------------*/


      function createByte(codePoint, shift) {
        return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
      }

      function encodeCodePoint(codePoint) {
        if ((codePoint & 0xFFFFFF80) == 0) {
          // 1-byte sequence
          return stringFromCharCode(codePoint);
        }

        var symbol = '';

        if ((codePoint & 0xFFFFF800) == 0) {
          // 2-byte sequence
          symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
        } else if ((codePoint & 0xFFFF0000) == 0) {
          // 3-byte sequence
          checkScalarValue(codePoint);
          symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
          symbol += createByte(codePoint, 6);
        } else if ((codePoint & 0xFFE00000) == 0) {
          // 4-byte sequence
          symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
          symbol += createByte(codePoint, 12);
          symbol += createByte(codePoint, 6);
        }

        symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
        return symbol;
      }

      function utf8encode(string) {
        var codePoints = ucs2decode(string);
        var length = codePoints.length;
        var index = -1;
        var codePoint;
        var byteString = '';

        while (++index < length) {
          codePoint = codePoints[index];
          byteString += encodeCodePoint(codePoint);
        }

        return byteString;
      }
      /*--------------------------------------------------------------------------*/


      function readContinuationByte() {
        if (byteIndex >= byteCount) {
          throw Error('Invalid byte index');
        }

        var continuationByte = byteArray[byteIndex] & 0xFF;
        byteIndex++;

        if ((continuationByte & 0xC0) == 0x80) {
          return continuationByte & 0x3F;
        } // If we end up here, it’s not a continuation byte


        throw Error('Invalid continuation byte');
      }

      function decodeSymbol() {
        var byte1;
        var byte2;
        var byte3;
        var byte4;
        var codePoint;

        if (byteIndex > byteCount) {
          throw Error('Invalid byte index');
        }

        if (byteIndex == byteCount) {
          return false;
        } // Read first byte


        byte1 = byteArray[byteIndex] & 0xFF;
        byteIndex++; // 1-byte sequence (no continuation bytes)

        if ((byte1 & 0x80) == 0) {
          return byte1;
        } // 2-byte sequence


        if ((byte1 & 0xE0) == 0xC0) {
          byte2 = readContinuationByte();
          codePoint = (byte1 & 0x1F) << 6 | byte2;

          if (codePoint >= 0x80) {
            return codePoint;
          } else {
            throw Error('Invalid continuation byte');
          }
        } // 3-byte sequence (may include unpaired surrogates)


        if ((byte1 & 0xF0) == 0xE0) {
          byte2 = readContinuationByte();
          byte3 = readContinuationByte();
          codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

          if (codePoint >= 0x0800) {
            checkScalarValue(codePoint);
            return codePoint;
          } else {
            throw Error('Invalid continuation byte');
          }
        } // 4-byte sequence


        if ((byte1 & 0xF8) == 0xF0) {
          byte2 = readContinuationByte();
          byte3 = readContinuationByte();
          byte4 = readContinuationByte();
          codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

          if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
            return codePoint;
          }
        }

        throw Error('Invalid UTF-8 detected');
      }

      var byteArray;
      var byteCount;
      var byteIndex;

      function utf8decode(byteString) {
        byteArray = ucs2decode(byteString);
        byteCount = byteArray.length;
        byteIndex = 0;
        var codePoints = [];
        var tmp;

        while ((tmp = decodeSymbol()) !== false) {
          codePoints.push(tmp);
        }

        return ucs2encode(codePoints);
      }
      /*--------------------------------------------------------------------------*/


      root.version = '3.0.0';
      root.encode = utf8encode;
      root.decode = utf8decode;
    })( exports);
  });

  // This was ported from https://github.com/emn178/js-sha3, with some minor
  // modifications and pruning. It is licensed under MIT:
  //
  // Copyright 2015-2016 Chen, Yi-Cyuan
  //  
  // Permission is hereby granted, free of charge, to any person obtaining
  // a copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to
  // permit persons to whom the Software is furnished to do so, subject to
  // the following conditions:
  // 
  // The above copyright notice and this permission notice shall be
  // included in all copies or substantial portions of the Software.
  // 
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  // EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  // NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  // LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  // OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  var HEX_CHARS = /*#__PURE__*/'0123456789abcdef'.split('');
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];

  var Keccak = function Keccak(bits) {
    return {
      blocks: [],
      reset: true,
      block: 0,
      start: 0,
      blockCount: 1600 - (bits << 1) >> 5,
      outputBlocks: bits >> 5,
      s: function (s) {
        return [].concat(s, s, s, s, s);
      }([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
  };

  var update$1 = function update(state, message) {
    var length = message.length,
        blocks = state.blocks,
        byteCount = state.blockCount << 2,
        blockCount = state.blockCount,
        outputBlocks = state.outputBlocks,
        s = state.s,
        index = 0,
        i,
        code; // update

    while (index < length) {
      if (state.reset) {
        state.reset = false;
        blocks[0] = state.block;

        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }

      if (typeof message !== "string") {
        for (i = state.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = state.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);

          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
            blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          }
        }
      }

      state.lastByteIndex = i;

      if (i >= byteCount) {
        state.start = i - byteCount;
        state.block = blocks[blockCount];

        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }

        f(s);
        state.reset = true;
      } else {
        state.start = i;
      }
    } // finalize


    i = state.lastByteIndex;
    blocks[i >> 2] |= KECCAK_PADDING[i & 3];

    if (state.lastByteIndex === byteCount) {
      blocks[0] = blocks[blockCount];

      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }

    blocks[blockCount - 1] |= 0x80000000;

    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }

    f(s); // toString

    var hex = '',
        i = 0,
        j = 0,
        block;

    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F] + HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F] + HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F] + HEX_CHARS[block >> 28 & 0x0F] + HEX_CHARS[block >> 24 & 0x0F];
      }

      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }

    return "0x" + hex;
  };

  var f = function f(s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
      h = c8 ^ (c2 << 1 | c3 >>> 31);
      l = c9 ^ (c3 << 1 | c2 >>> 31);
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ (c4 << 1 | c5 >>> 31);
      l = c1 ^ (c5 << 1 | c4 >>> 31);
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ (c6 << 1 | c7 >>> 31);
      l = c3 ^ (c7 << 1 | c6 >>> 31);
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ (c8 << 1 | c9 >>> 31);
      l = c5 ^ (c9 << 1 | c8 >>> 31);
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ (c0 << 1 | c1 >>> 31);
      l = c7 ^ (c1 << 1 | c0 >>> 31);
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;
      b0 = s[0];
      b1 = s[1];
      b32 = s[11] << 4 | s[10] >>> 28;
      b33 = s[10] << 4 | s[11] >>> 28;
      b14 = s[20] << 3 | s[21] >>> 29;
      b15 = s[21] << 3 | s[20] >>> 29;
      b46 = s[31] << 9 | s[30] >>> 23;
      b47 = s[30] << 9 | s[31] >>> 23;
      b28 = s[40] << 18 | s[41] >>> 14;
      b29 = s[41] << 18 | s[40] >>> 14;
      b20 = s[2] << 1 | s[3] >>> 31;
      b21 = s[3] << 1 | s[2] >>> 31;
      b2 = s[13] << 12 | s[12] >>> 20;
      b3 = s[12] << 12 | s[13] >>> 20;
      b34 = s[22] << 10 | s[23] >>> 22;
      b35 = s[23] << 10 | s[22] >>> 22;
      b16 = s[33] << 13 | s[32] >>> 19;
      b17 = s[32] << 13 | s[33] >>> 19;
      b48 = s[42] << 2 | s[43] >>> 30;
      b49 = s[43] << 2 | s[42] >>> 30;
      b40 = s[5] << 30 | s[4] >>> 2;
      b41 = s[4] << 30 | s[5] >>> 2;
      b22 = s[14] << 6 | s[15] >>> 26;
      b23 = s[15] << 6 | s[14] >>> 26;
      b4 = s[25] << 11 | s[24] >>> 21;
      b5 = s[24] << 11 | s[25] >>> 21;
      b36 = s[34] << 15 | s[35] >>> 17;
      b37 = s[35] << 15 | s[34] >>> 17;
      b18 = s[45] << 29 | s[44] >>> 3;
      b19 = s[44] << 29 | s[45] >>> 3;
      b10 = s[6] << 28 | s[7] >>> 4;
      b11 = s[7] << 28 | s[6] >>> 4;
      b42 = s[17] << 23 | s[16] >>> 9;
      b43 = s[16] << 23 | s[17] >>> 9;
      b24 = s[26] << 25 | s[27] >>> 7;
      b25 = s[27] << 25 | s[26] >>> 7;
      b6 = s[36] << 21 | s[37] >>> 11;
      b7 = s[37] << 21 | s[36] >>> 11;
      b38 = s[47] << 24 | s[46] >>> 8;
      b39 = s[46] << 24 | s[47] >>> 8;
      b30 = s[8] << 27 | s[9] >>> 5;
      b31 = s[9] << 27 | s[8] >>> 5;
      b12 = s[18] << 20 | s[19] >>> 12;
      b13 = s[19] << 20 | s[18] >>> 12;
      b44 = s[29] << 7 | s[28] >>> 25;
      b45 = s[28] << 7 | s[29] >>> 25;
      b26 = s[38] << 8 | s[39] >>> 24;
      b27 = s[39] << 8 | s[38] >>> 24;
      b8 = s[48] << 14 | s[49] >>> 18;
      b9 = s[49] << 14 | s[48] >>> 18;
      s[0] = b0 ^ ~b2 & b4;
      s[1] = b1 ^ ~b3 & b5;
      s[10] = b10 ^ ~b12 & b14;
      s[11] = b11 ^ ~b13 & b15;
      s[20] = b20 ^ ~b22 & b24;
      s[21] = b21 ^ ~b23 & b25;
      s[30] = b30 ^ ~b32 & b34;
      s[31] = b31 ^ ~b33 & b35;
      s[40] = b40 ^ ~b42 & b44;
      s[41] = b41 ^ ~b43 & b45;
      s[2] = b2 ^ ~b4 & b6;
      s[3] = b3 ^ ~b5 & b7;
      s[12] = b12 ^ ~b14 & b16;
      s[13] = b13 ^ ~b15 & b17;
      s[22] = b22 ^ ~b24 & b26;
      s[23] = b23 ^ ~b25 & b27;
      s[32] = b32 ^ ~b34 & b36;
      s[33] = b33 ^ ~b35 & b37;
      s[42] = b42 ^ ~b44 & b46;
      s[43] = b43 ^ ~b45 & b47;
      s[4] = b4 ^ ~b6 & b8;
      s[5] = b5 ^ ~b7 & b9;
      s[14] = b14 ^ ~b16 & b18;
      s[15] = b15 ^ ~b17 & b19;
      s[24] = b24 ^ ~b26 & b28;
      s[25] = b25 ^ ~b27 & b29;
      s[34] = b34 ^ ~b36 & b38;
      s[35] = b35 ^ ~b37 & b39;
      s[44] = b44 ^ ~b46 & b48;
      s[45] = b45 ^ ~b47 & b49;
      s[6] = b6 ^ ~b8 & b0;
      s[7] = b7 ^ ~b9 & b1;
      s[16] = b16 ^ ~b18 & b10;
      s[17] = b17 ^ ~b19 & b11;
      s[26] = b26 ^ ~b28 & b20;
      s[27] = b27 ^ ~b29 & b21;
      s[36] = b36 ^ ~b38 & b30;
      s[37] = b37 ^ ~b39 & b31;
      s[46] = b46 ^ ~b48 & b40;
      s[47] = b47 ^ ~b49 & b41;
      s[8] = b8 ^ ~b0 & b2;
      s[9] = b9 ^ ~b1 & b3;
      s[18] = b18 ^ ~b10 & b12;
      s[19] = b19 ^ ~b11 & b13;
      s[28] = b28 ^ ~b20 & b22;
      s[29] = b29 ^ ~b21 & b23;
      s[38] = b38 ^ ~b30 & b32;
      s[39] = b39 ^ ~b31 & b33;
      s[48] = b48 ^ ~b40 & b42;
      s[49] = b49 ^ ~b41 & b43;
      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  var keccak = function keccak(bits) {
    return function (str) {
      var msg;

      if (str.slice(0, 2) === "0x") {
        msg = [];

        for (var i = 2, l = str.length; i < l; i += 2) {
          msg.push(parseInt(str.slice(i, i + 2), 16));
        }
      } else {
        msg = str;
      }

      return update$1(Keccak(bits), msg);
    };
  };

  var hash = {
    keccak256: /*#__PURE__*/keccak(256),
    keccak512: /*#__PURE__*/keccak(512),
    keccak256s: /*#__PURE__*/keccak(256),
    keccak512s: /*#__PURE__*/keccak(512)
  };

  var sha3 = /*#__PURE__*/createCommonjsModule(function (module) {
    /**
     * [js-sha3]{@link https://github.com/emn178/js-sha3}
     *
     * @version 0.8.0
     * @author Chen, Yi-Cyuan [emn178@gmail.com]
     * @copyright Chen, Yi-Cyuan 2015-2018
     * @license MIT
     */

    /*jslint bitwise: true */
    (function () {

      var INPUT_ERROR = 'input is invalid type';
      var FINALIZE_ERROR = 'finalize already called';
      var WINDOW = typeof window === 'object';
      var root = WINDOW ? window : {};

      if (root.JS_SHA3_NO_WINDOW) {
        WINDOW = false;
      }

      var WEB_WORKER = !WINDOW && typeof self === 'object';
      var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && undefined && undefined;

      if (NODE_JS) {
        root = commonjsGlobal;
      } else if (WEB_WORKER) {
        root = self;
      }

      var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && 'object' === 'object' && module.exports;
      var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
      var HEX_CHARS = '0123456789abcdef'.split('');
      var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
      var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
      var KECCAK_PADDING = [1, 256, 65536, 16777216];
      var PADDING = [6, 1536, 393216, 100663296];
      var SHIFT = [0, 8, 16, 24];
      var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
      var BITS = [224, 256, 384, 512];
      var SHAKE_BITS = [128, 256];
      var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
      var CSHAKE_BYTEPAD = {
        '128': 168,
        '256': 136
      };

      if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function (obj) {
          return Object.prototype.toString.call(obj) === '[object Array]';
        };
      }

      if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function (obj) {
          return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }

      var createOutputMethod = function createOutputMethod(bits, padding, outputType) {
        return function (message) {
          return new Keccak(bits, padding, bits).update(message)[outputType]();
        };
      };

      var createShakeOutputMethod = function createShakeOutputMethod(bits, padding, outputType) {
        return function (message, outputBits) {
          return new Keccak(bits, padding, outputBits).update(message)[outputType]();
        };
      };

      var createCshakeOutputMethod = function createCshakeOutputMethod(bits, padding, outputType) {
        return function (message, outputBits, n, s) {
          return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
        };
      };

      var createKmacOutputMethod = function createKmacOutputMethod(bits, padding, outputType) {
        return function (key, message, outputBits, s) {
          return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
        };
      };

      var createOutputMethods = function createOutputMethods(method, createMethod, bits, padding) {
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createMethod(bits, padding, type);
        }

        return method;
      };

      var createMethod = function createMethod(bits, padding) {
        var method = createOutputMethod(bits, padding, 'hex');

        method.create = function () {
          return new Keccak(bits, padding, bits);
        };

        method.update = function (message) {
          return method.create().update(message);
        };

        return createOutputMethods(method, createOutputMethod, bits, padding);
      };

      var createShakeMethod = function createShakeMethod(bits, padding) {
        var method = createShakeOutputMethod(bits, padding, 'hex');

        method.create = function (outputBits) {
          return new Keccak(bits, padding, outputBits);
        };

        method.update = function (message, outputBits) {
          return method.create(outputBits).update(message);
        };

        return createOutputMethods(method, createShakeOutputMethod, bits, padding);
      };

      var createCshakeMethod = function createCshakeMethod(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createCshakeOutputMethod(bits, padding, 'hex');

        method.create = function (outputBits, n, s) {
          if (!n && !s) {
            return methods['shake' + bits].create(outputBits);
          } else {
            return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
          }
        };

        method.update = function (message, outputBits, n, s) {
          return method.create(outputBits, n, s).update(message);
        };

        return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
      };

      var createKmacMethod = function createKmacMethod(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createKmacOutputMethod(bits, padding, 'hex');

        method.create = function (key, outputBits, s) {
          return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
        };

        method.update = function (key, message, outputBits, s) {
          return method.create(key, outputBits, s).update(message);
        };

        return createOutputMethods(method, createKmacOutputMethod, bits, padding);
      };

      var algorithms = [{
        name: 'keccak',
        padding: KECCAK_PADDING,
        bits: BITS,
        createMethod: createMethod
      }, {
        name: 'sha3',
        padding: PADDING,
        bits: BITS,
        createMethod: createMethod
      }, {
        name: 'shake',
        padding: SHAKE_PADDING,
        bits: SHAKE_BITS,
        createMethod: createShakeMethod
      }, {
        name: 'cshake',
        padding: CSHAKE_PADDING,
        bits: SHAKE_BITS,
        createMethod: createCshakeMethod
      }, {
        name: 'kmac',
        padding: CSHAKE_PADDING,
        bits: SHAKE_BITS,
        createMethod: createKmacMethod
      }];
      var methods = {},
          methodNames = [];

      for (var i = 0; i < algorithms.length; ++i) {
        var algorithm = algorithms[i];
        var bits = algorithm.bits;

        for (var j = 0; j < bits.length; ++j) {
          var methodName = algorithm.name + '_' + bits[j];
          methodNames.push(methodName);
          methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);

          if (algorithm.name !== 'sha3') {
            var newMethodName = algorithm.name + bits[j];
            methodNames.push(newMethodName);
            methods[newMethodName] = methods[methodName];
          }
        }
      }

      function Keccak(bits, padding, outputBits) {
        this.blocks = [];
        this.s = [];
        this.padding = padding;
        this.outputBits = outputBits;
        this.reset = true;
        this.finalized = false;
        this.block = 0;
        this.start = 0;
        this.blockCount = 1600 - (bits << 1) >> 5;
        this.byteCount = this.blockCount << 2;
        this.outputBlocks = outputBits >> 5;
        this.extraBytes = (outputBits & 31) >> 3;

        for (var i = 0; i < 50; ++i) {
          this.s[i] = 0;
        }
      }

      Keccak.prototype.update = function (message) {
        if (this.finalized) {
          throw new Error(FINALIZE_ERROR);
        }

        var notString,
            type = typeof message;

        if (type !== 'string') {
          if (type === 'object') {
            if (message === null) {
              throw new Error(INPUT_ERROR);
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw new Error(INPUT_ERROR);
              }
            }
          } else {
            throw new Error(INPUT_ERROR);
          }

          notString = true;
        }

        var blocks = this.blocks,
            byteCount = this.byteCount,
            length = message.length,
            blockCount = this.blockCount,
            index = 0,
            s = this.s,
            i,
            code;

        while (index < length) {
          if (this.reset) {
            this.reset = false;
            blocks[0] = this.block;

            for (i = 1; i < blockCount + 1; ++i) {
              blocks[i] = 0;
            }
          }

          if (notString) {
            for (i = this.start; index < length && i < byteCount; ++index) {
              blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index < length && i < byteCount; ++index) {
              code = message.charCodeAt(index);

              if (code < 0x80) {
                blocks[i >> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 0x800) {
                blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
                blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
              } else if (code < 0xd800 || code >= 0xe000) {
                blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
                blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
              } else {
                code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
                blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
                blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
              }
            }
          }

          this.lastByteIndex = i;

          if (i >= byteCount) {
            this.start = i - byteCount;
            this.block = blocks[blockCount];

            for (i = 0; i < blockCount; ++i) {
              s[i] ^= blocks[i];
            }

            f(s);
            this.reset = true;
          } else {
            this.start = i;
          }
        }

        return this;
      };

      Keccak.prototype.encode = function (x, right) {
        var o = x & 255,
            n = 1;
        var bytes = [o];
        x = x >> 8;
        o = x & 255;

        while (o > 0) {
          bytes.unshift(o);
          x = x >> 8;
          o = x & 255;
          ++n;
        }

        if (right) {
          bytes.push(n);
        } else {
          bytes.unshift(n);
        }

        this.update(bytes);
        return bytes.length;
      };

      Keccak.prototype.encodeString = function (str) {
        var notString,
            type = typeof str;

        if (type !== 'string') {
          if (type === 'object') {
            if (str === null) {
              throw new Error(INPUT_ERROR);
            } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
              str = new Uint8Array(str);
            } else if (!Array.isArray(str)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                throw new Error(INPUT_ERROR);
              }
            }
          } else {
            throw new Error(INPUT_ERROR);
          }

          notString = true;
        }

        var bytes = 0,
            length = str.length;

        if (notString) {
          bytes = length;
        } else {
          for (var i = 0; i < str.length; ++i) {
            var code = str.charCodeAt(i);

            if (code < 0x80) {
              bytes += 1;
            } else if (code < 0x800) {
              bytes += 2;
            } else if (code < 0xd800 || code >= 0xe000) {
              bytes += 3;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | str.charCodeAt(++i) & 0x3ff);
              bytes += 4;
            }
          }
        }

        bytes += this.encode(bytes * 8);
        this.update(str);
        return bytes;
      };

      Keccak.prototype.bytepad = function (strs, w) {
        var bytes = this.encode(w);

        for (var i = 0; i < strs.length; ++i) {
          bytes += this.encodeString(strs[i]);
        }

        var paddingBytes = w - bytes % w;
        var zeros = [];
        zeros.length = paddingBytes;
        this.update(zeros);
        return this;
      };

      Keccak.prototype.finalize = function () {
        if (this.finalized) {
          return;
        }

        this.finalized = true;
        var blocks = this.blocks,
            i = this.lastByteIndex,
            blockCount = this.blockCount,
            s = this.s;
        blocks[i >> 2] |= this.padding[i & 3];

        if (this.lastByteIndex === this.byteCount) {
          blocks[0] = blocks[blockCount];

          for (i = 1; i < blockCount + 1; ++i) {
            blocks[i] = 0;
          }
        }

        blocks[blockCount - 1] |= 0x80000000;

        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }

        f(s);
      };

      Keccak.prototype.toString = Keccak.prototype.hex = function () {
        this.finalize();
        var blockCount = this.blockCount,
            s = this.s,
            outputBlocks = this.outputBlocks,
            extraBytes = this.extraBytes,
            i = 0,
            j = 0;
        var hex = '',
            block;

        while (j < outputBlocks) {
          for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
            block = s[i];
            hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F] + HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F] + HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F] + HEX_CHARS[block >> 28 & 0x0F] + HEX_CHARS[block >> 24 & 0x0F];
          }

          if (j % blockCount === 0) {
            f(s);
            i = 0;
          }
        }

        if (extraBytes) {
          block = s[i];
          hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F];

          if (extraBytes > 1) {
            hex += HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F];
          }

          if (extraBytes > 2) {
            hex += HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F];
          }
        }

        return hex;
      };

      Keccak.prototype.arrayBuffer = function () {
        this.finalize();
        var blockCount = this.blockCount,
            s = this.s,
            outputBlocks = this.outputBlocks,
            extraBytes = this.extraBytes,
            i = 0,
            j = 0;
        var bytes = this.outputBits >> 3;
        var buffer;

        if (extraBytes) {
          buffer = new ArrayBuffer(outputBlocks + 1 << 2);
        } else {
          buffer = new ArrayBuffer(bytes);
        }

        var array = new Uint32Array(buffer);

        while (j < outputBlocks) {
          for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
            array[j] = s[i];
          }

          if (j % blockCount === 0) {
            f(s);
          }
        }

        if (extraBytes) {
          array[i] = s[i];
          buffer = buffer.slice(0, bytes);
        }

        return buffer;
      };

      Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

      Keccak.prototype.digest = Keccak.prototype.array = function () {
        this.finalize();
        var blockCount = this.blockCount,
            s = this.s,
            outputBlocks = this.outputBlocks,
            extraBytes = this.extraBytes,
            i = 0,
            j = 0;
        var array = [],
            offset,
            block;

        while (j < outputBlocks) {
          for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
            offset = j << 2;
            block = s[i];
            array[offset] = block & 0xFF;
            array[offset + 1] = block >> 8 & 0xFF;
            array[offset + 2] = block >> 16 & 0xFF;
            array[offset + 3] = block >> 24 & 0xFF;
          }

          if (j % blockCount === 0) {
            f(s);
          }
        }

        if (extraBytes) {
          offset = j << 2;
          block = s[i];
          array[offset] = block & 0xFF;

          if (extraBytes > 1) {
            array[offset + 1] = block >> 8 & 0xFF;
          }

          if (extraBytes > 2) {
            array[offset + 2] = block >> 16 & 0xFF;
          }
        }

        return array;
      };

      function Kmac(bits, padding, outputBits) {
        Keccak.call(this, bits, padding, outputBits);
      }

      Kmac.prototype = new Keccak();

      Kmac.prototype.finalize = function () {
        this.encode(this.outputBits, true);
        return Keccak.prototype.finalize.call(this);
      };

      var f = function f(s) {
        var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

        for (n = 0; n < 48; n += 2) {
          c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
          c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
          c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
          c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
          c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
          c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
          c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
          c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
          c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
          c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
          h = c8 ^ (c2 << 1 | c3 >>> 31);
          l = c9 ^ (c3 << 1 | c2 >>> 31);
          s[0] ^= h;
          s[1] ^= l;
          s[10] ^= h;
          s[11] ^= l;
          s[20] ^= h;
          s[21] ^= l;
          s[30] ^= h;
          s[31] ^= l;
          s[40] ^= h;
          s[41] ^= l;
          h = c0 ^ (c4 << 1 | c5 >>> 31);
          l = c1 ^ (c5 << 1 | c4 >>> 31);
          s[2] ^= h;
          s[3] ^= l;
          s[12] ^= h;
          s[13] ^= l;
          s[22] ^= h;
          s[23] ^= l;
          s[32] ^= h;
          s[33] ^= l;
          s[42] ^= h;
          s[43] ^= l;
          h = c2 ^ (c6 << 1 | c7 >>> 31);
          l = c3 ^ (c7 << 1 | c6 >>> 31);
          s[4] ^= h;
          s[5] ^= l;
          s[14] ^= h;
          s[15] ^= l;
          s[24] ^= h;
          s[25] ^= l;
          s[34] ^= h;
          s[35] ^= l;
          s[44] ^= h;
          s[45] ^= l;
          h = c4 ^ (c8 << 1 | c9 >>> 31);
          l = c5 ^ (c9 << 1 | c8 >>> 31);
          s[6] ^= h;
          s[7] ^= l;
          s[16] ^= h;
          s[17] ^= l;
          s[26] ^= h;
          s[27] ^= l;
          s[36] ^= h;
          s[37] ^= l;
          s[46] ^= h;
          s[47] ^= l;
          h = c6 ^ (c0 << 1 | c1 >>> 31);
          l = c7 ^ (c1 << 1 | c0 >>> 31);
          s[8] ^= h;
          s[9] ^= l;
          s[18] ^= h;
          s[19] ^= l;
          s[28] ^= h;
          s[29] ^= l;
          s[38] ^= h;
          s[39] ^= l;
          s[48] ^= h;
          s[49] ^= l;
          b0 = s[0];
          b1 = s[1];
          b32 = s[11] << 4 | s[10] >>> 28;
          b33 = s[10] << 4 | s[11] >>> 28;
          b14 = s[20] << 3 | s[21] >>> 29;
          b15 = s[21] << 3 | s[20] >>> 29;
          b46 = s[31] << 9 | s[30] >>> 23;
          b47 = s[30] << 9 | s[31] >>> 23;
          b28 = s[40] << 18 | s[41] >>> 14;
          b29 = s[41] << 18 | s[40] >>> 14;
          b20 = s[2] << 1 | s[3] >>> 31;
          b21 = s[3] << 1 | s[2] >>> 31;
          b2 = s[13] << 12 | s[12] >>> 20;
          b3 = s[12] << 12 | s[13] >>> 20;
          b34 = s[22] << 10 | s[23] >>> 22;
          b35 = s[23] << 10 | s[22] >>> 22;
          b16 = s[33] << 13 | s[32] >>> 19;
          b17 = s[32] << 13 | s[33] >>> 19;
          b48 = s[42] << 2 | s[43] >>> 30;
          b49 = s[43] << 2 | s[42] >>> 30;
          b40 = s[5] << 30 | s[4] >>> 2;
          b41 = s[4] << 30 | s[5] >>> 2;
          b22 = s[14] << 6 | s[15] >>> 26;
          b23 = s[15] << 6 | s[14] >>> 26;
          b4 = s[25] << 11 | s[24] >>> 21;
          b5 = s[24] << 11 | s[25] >>> 21;
          b36 = s[34] << 15 | s[35] >>> 17;
          b37 = s[35] << 15 | s[34] >>> 17;
          b18 = s[45] << 29 | s[44] >>> 3;
          b19 = s[44] << 29 | s[45] >>> 3;
          b10 = s[6] << 28 | s[7] >>> 4;
          b11 = s[7] << 28 | s[6] >>> 4;
          b42 = s[17] << 23 | s[16] >>> 9;
          b43 = s[16] << 23 | s[17] >>> 9;
          b24 = s[26] << 25 | s[27] >>> 7;
          b25 = s[27] << 25 | s[26] >>> 7;
          b6 = s[36] << 21 | s[37] >>> 11;
          b7 = s[37] << 21 | s[36] >>> 11;
          b38 = s[47] << 24 | s[46] >>> 8;
          b39 = s[46] << 24 | s[47] >>> 8;
          b30 = s[8] << 27 | s[9] >>> 5;
          b31 = s[9] << 27 | s[8] >>> 5;
          b12 = s[18] << 20 | s[19] >>> 12;
          b13 = s[19] << 20 | s[18] >>> 12;
          b44 = s[29] << 7 | s[28] >>> 25;
          b45 = s[28] << 7 | s[29] >>> 25;
          b26 = s[38] << 8 | s[39] >>> 24;
          b27 = s[39] << 8 | s[38] >>> 24;
          b8 = s[48] << 14 | s[49] >>> 18;
          b9 = s[49] << 14 | s[48] >>> 18;
          s[0] = b0 ^ ~b2 & b4;
          s[1] = b1 ^ ~b3 & b5;
          s[10] = b10 ^ ~b12 & b14;
          s[11] = b11 ^ ~b13 & b15;
          s[20] = b20 ^ ~b22 & b24;
          s[21] = b21 ^ ~b23 & b25;
          s[30] = b30 ^ ~b32 & b34;
          s[31] = b31 ^ ~b33 & b35;
          s[40] = b40 ^ ~b42 & b44;
          s[41] = b41 ^ ~b43 & b45;
          s[2] = b2 ^ ~b4 & b6;
          s[3] = b3 ^ ~b5 & b7;
          s[12] = b12 ^ ~b14 & b16;
          s[13] = b13 ^ ~b15 & b17;
          s[22] = b22 ^ ~b24 & b26;
          s[23] = b23 ^ ~b25 & b27;
          s[32] = b32 ^ ~b34 & b36;
          s[33] = b33 ^ ~b35 & b37;
          s[42] = b42 ^ ~b44 & b46;
          s[43] = b43 ^ ~b45 & b47;
          s[4] = b4 ^ ~b6 & b8;
          s[5] = b5 ^ ~b7 & b9;
          s[14] = b14 ^ ~b16 & b18;
          s[15] = b15 ^ ~b17 & b19;
          s[24] = b24 ^ ~b26 & b28;
          s[25] = b25 ^ ~b27 & b29;
          s[34] = b34 ^ ~b36 & b38;
          s[35] = b35 ^ ~b37 & b39;
          s[44] = b44 ^ ~b46 & b48;
          s[45] = b45 ^ ~b47 & b49;
          s[6] = b6 ^ ~b8 & b0;
          s[7] = b7 ^ ~b9 & b1;
          s[16] = b16 ^ ~b18 & b10;
          s[17] = b17 ^ ~b19 & b11;
          s[26] = b26 ^ ~b28 & b20;
          s[27] = b27 ^ ~b29 & b21;
          s[36] = b36 ^ ~b38 & b30;
          s[37] = b37 ^ ~b39 & b31;
          s[46] = b46 ^ ~b48 & b40;
          s[47] = b47 ^ ~b49 & b41;
          s[8] = b8 ^ ~b0 & b2;
          s[9] = b9 ^ ~b1 & b3;
          s[18] = b18 ^ ~b10 & b12;
          s[19] = b19 ^ ~b11 & b13;
          s[28] = b28 ^ ~b20 & b22;
          s[29] = b29 ^ ~b21 & b23;
          s[38] = b38 ^ ~b30 & b32;
          s[39] = b39 ^ ~b31 & b33;
          s[48] = b48 ^ ~b40 & b42;
          s[49] = b49 ^ ~b41 & b43;
          s[0] ^= RC[n];
          s[1] ^= RC[n + 1];
        }
      };

      if (COMMON_JS) {
        module.exports = methods;
      } else {
        for (i = 0; i < methodNames.length; ++i) {
          root[methodNames[i]] = methods[methodNames[i]];
        }
      }
    })();
  });

  var utils$1 = /*#__PURE__*/createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Keccak256 hash
     * @param data The data
     */

    function keccak256(data) {
      return '0x' + sha3.keccak_256(toByteArray(data));
    }

    exports.keccak256 = keccak256;
    /**
     * Adding padding to string on the left
     * @param value The value
     * @param chars The chars
     */

    exports.padLeft = function (value, chars) {
      var hasPrefix = /^0x/i.test(value) || typeof value === 'number';
      value = value.toString().replace(/^0x/i, '');
      var padding = chars - value.length + 1 >= 0 ? chars - value.length + 1 : 0;
      return (hasPrefix ? '0x' : '') + new Array(padding).join('0') + value;
    };
    /**
     * Convert bytes to hex
     * @param bytes The bytes
     */


    function bytesToHex(bytes) {
      var hex = [];

      for (var i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xf).toString(16));
      }

      return "0x" + hex.join('').replace(/^0+/, '');
    }

    exports.bytesToHex = bytesToHex;
    /**
     * To byte array
     * @param value The value
     */

    function toByteArray(value) {
      if (value == null) {
        throw new Error('cannot convert null value to array');
      }

      if (typeof value === 'string') {
        var match = value.match(/^(0x)?[0-9a-fA-F]*$/);

        if (!match) {
          throw new Error('invalid hexidecimal string');
        }

        if (match[1] !== '0x') {
          throw new Error('hex string must have 0x prefix');
        }

        value = value.substring(2);

        if (value.length % 2) {
          value = '0' + value;
        }

        var result = [];

        for (var i = 0; i < value.length; i += 2) {
          result.push(parseInt(value.substr(i, 2), 16));
        }

        return addSlice(new Uint8Array(result));
      }

      if (isByteArray(value)) {
        return addSlice(new Uint8Array(value));
      }

      throw new Error('invalid arrayify value');
    }

    exports.toByteArray = toByteArray;
    /**
     * Is byte array
     * @param value The value
     */

    function isByteArray(value) {
      if (!value || parseInt(String(value.length)) != value.length || typeof value === 'string') {
        return false;
      }

      for (var i = 0; i < value.length; i++) {
        var v = value[i];

        if (v < 0 || v >= 256 || parseInt(String(v)) != v) {
          return false;
        }
      }

      return true;
    }
    /**
     * Add slice to array
     * @param array The array
     */


    function addSlice(array) {
      if (array.slice) {
        return array;
      }

      array.slice = function () {
        var args = Array.prototype.slice.call(arguments);
        return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));
      };

      return array;
    }
  });

  var dist = /*#__PURE__*/createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Returns true if the bloom is a valid bloom
     * @param bloom The bloom
     */

    function isBloom(bloom) {
      if (typeof bloom !== 'string') {
        return false;
      }

      if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
        return false;
      }

      if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
        return true;
      }

      return false;
    }

    exports.isBloom = isBloom;
    /**
     * Returns true if the value is part of the given bloom
     * note: false positives are possible.
     * @param bloom encoded bloom
     * @param value The value
     */

    function isInBloom(bloom, value) {
      if (typeof value === 'object' && value.constructor === Uint8Array) {
        value = utils$1.bytesToHex(value);
      }

      var hash = utils$1.keccak256(value).replace('0x', '');

      for (var i = 0; i < 12; i += 4) {
        // calculate bit position in bloom filter that must be active
        var bitpos = (parseInt(hash.substr(i, 2), 16) << 8) + parseInt(hash.substr(i + 2, 2), 16) & 2047; // test if bitpos in bloom is active

        var code = codePointToInt(bloom.charCodeAt(bloom.length - 1 - Math.floor(bitpos / 4)));
        var offset = 1 << bitpos % 4;

        if ((code & offset) !== offset) {
          return false;
        }
      }

      return true;
    }

    exports.isInBloom = isInBloom;
    /**
     * Code points to int
     * @param codePoint The code point
     */

    function codePointToInt(codePoint) {
      if (codePoint >= 48 && codePoint <= 57) {
        /* ['0'..'9'] -> [0..9] */
        return codePoint - 48;
      }

      if (codePoint >= 65 && codePoint <= 70) {
        /* ['A'..'F'] -> [10..15] */
        return codePoint - 55;
      }

      if (codePoint >= 97 && codePoint <= 102) {
        /* ['a'..'f'] -> [10..15] */
        return codePoint - 87;
      }

      throw new Error('invalid bloom');
    }
    /**
     * Returns true if the ethereum users address is part of the given bloom.
     * note: false positives are possible.
     * @param bloom encoded bloom
     * @param address the address to test
     */


    function isUserEthereumAddressInBloom(bloom, ethereumAddress) {
      if (!isBloom(bloom)) {
        throw new Error('Invalid bloom given');
      }

      if (!isAddress(ethereumAddress)) {
        throw new Error("Invalid ethereum address given: \"" + ethereumAddress + "\"");
      } // you have to pad the ethereum address to 32 bytes
      // else the bloom filter does not work
      // this is only if your matching the USERS
      // ethereum address. Contract address do not need this
      // hence why we have 2 methods
      // (0x is not in the 2nd parameter of padleft so 64 chars is fine)


      var address = utils$1.padLeft(ethereumAddress, 64);
      return isInBloom(bloom, address);
    }

    exports.isUserEthereumAddressInBloom = isUserEthereumAddressInBloom;
    /**
     * Returns true if the contract address is part of the given bloom.
     * note: false positives are possible.
     * @param bloom encoded bloom
     * @param contractAddress the contract address to test
     */

    function isContractAddressInBloom(bloom, contractAddress) {
      if (!isBloom(bloom)) {
        throw new Error('Invalid bloom given');
      }

      if (!isAddress(contractAddress)) {
        throw new Error("Invalid contract address given: \"" + contractAddress + "\"");
      }

      return isInBloom(bloom, contractAddress);
    }

    exports.isContractAddressInBloom = isContractAddressInBloom;
    /**
     * Returns true if the topic is part of the given bloom.
     * note: false positives are possible.
     * @param bloom encoded bloom
     * @param topic the topic encoded hex
     */

    function isTopicInBloom(bloom, topic) {
      if (!isBloom(bloom)) {
        throw new Error('Invalid bloom given');
      }

      if (!isTopic(topic)) {
        throw new Error('Invalid topic');
      }

      return isInBloom(bloom, topic);
    }

    exports.isTopicInBloom = isTopicInBloom;
    /**
     * Checks if its a valid topic
     * @param topic encoded hex topic
     */

    function isTopic(topic) {
      if (typeof topic !== 'string') {
        return false;
      }

      if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
        return false;
      } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
        return true;
      }

      return false;
    }

    exports.isTopic = isTopic;
    /**
     * Is valid address
     * @param address The address
     */

    function isAddress(address) {
      if (typeof address !== 'string') {
        return false;
      }

      if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        return true;
      }

      if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        return true;
      }

      return false;
    }

    exports.isAddress = isAddress;
  });

  /*
   This file is part of web3.js.

   web3.js is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   web3.js is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public License
   along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
   */

  /**
   * @file utils.js
   * @author Fabian Vogelsteller <fabian@ethereum.org>
   * @date 2017
   */

  /**
   * Returns true if object is BN, otherwise false
   *
   * @method isBN
   * @param {Object} object
   * @return {Boolean}
   */

  var isBN = function isBN(object) {
    return bn$2.isBN(object);
  };
  /**
   * Returns true if object is BigNumber, otherwise false
   *
   * @method isBigNumber
   * @param {Object} object
   * @return {Boolean}
   */


  var isBigNumber = function isBigNumber(object) {
    return object && object.constructor && object.constructor.name === 'BigNumber';
  };
  /**
   * Takes an input and transforms it into an BN
   *
   * @method toBN
   * @param {Number|String|BN} number, string, HEX string or BN
   * @return {BN} BN
   */


  var toBN = function toBN(number) {
    try {
      return src$2.apply(null, arguments);
    } catch (e) {
      throw new Error(e + ' Given value: "' + number + '"');
    }
  };
  /**
   * Takes and input transforms it into BN and if it is negative value, into two's complement
   *
   * @method toTwosComplement
   * @param {Number|String|BN} number
   * @return {String}
   */


  var toTwosComplement = function toTwosComplement(number) {
    return '0x' + toBN(number).toTwos(256).toString(16, 64);
  };
  /**
   * Checks if the given string is an address
   *
   * @method isAddress
   * @param {String} address the given HEX address
   * @return {Boolean}
   */


  var isAddress = function isAddress(address) {
    // check if it has the basic requirements of an address
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      return false; // If it's ALL lowercase or ALL upppercase
    } else if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
      return true; // Otherwise check each case
    } else {
      return checkAddressChecksum(address);
    }
  };
  /**
   * Checks if the given string is a checksummed address
   *
   * @method checkAddressChecksum
   * @param {String} address the given HEX address
   * @return {Boolean}
   */


  var checkAddressChecksum = function checkAddressChecksum(address) {
    // Check each case
    address = address.replace(/^0x/i, '');
    var addressHash = sha3$1(address.toLowerCase()).replace(/^0x/i, '');

    for (var i = 0; i < 40; i++) {
      // the nth letter should be uppercase if the nth digit of casemap is 1
      if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
        return false;
      }
    }

    return true;
  };
  /**
   * Should be called to pad string to expected length
   *
   * @method leftPad
   * @param {String} string to be padded
   * @param {Number} chars that result string should have
   * @param {String} sign, by default 0
   * @returns {String} right aligned string
   */


  var leftPad = function leftPad(string, chars, sign) {
    var hasPrefix = /^0x/i.test(string) || typeof string === 'number';
    string = string.toString(16).replace(/^0x/i, '');
    var padding = chars - string.length + 1 >= 0 ? chars - string.length + 1 : 0;
    return (hasPrefix ? '0x' : '') + new Array(padding).join(sign ? sign : "0") + string;
  };
  /**
   * Should be called to pad string to expected length
   *
   * @method rightPad
   * @param {String} string to be padded
   * @param {Number} chars that result string should have
   * @param {String} sign, by default 0
   * @returns {String} right aligned string
   */


  var rightPad = function rightPad(string, chars, sign) {
    var hasPrefix = /^0x/i.test(string) || typeof string === 'number';
    string = string.toString(16).replace(/^0x/i, '');
    var padding = chars - string.length + 1 >= 0 ? chars - string.length + 1 : 0;
    return (hasPrefix ? '0x' : '') + string + new Array(padding).join(sign ? sign : "0");
  };
  /**
   * Should be called to get hex representation (prefixed by 0x) of utf8 string
   *
   * @method utf8ToHex
   * @param {String} str
   * @returns {String} hex representation of input string
   */


  var utf8ToHex = function utf8ToHex(str) {
    str = utf8.encode(str);
    var hex = ""; // remove \u0000 padding from either side

    str = str.replace(/^(?:\u0000)*/, '');
    str = str.split("").reverse().join("");
    str = str.replace(/^(?:\u0000)*/, '');
    str = str.split("").reverse().join("");

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i); // if (code !== 0) {

      var n = code.toString(16);
      hex += n.length < 2 ? '0' + n : n; // }
    }

    return "0x" + hex;
  };
  /**
   * Should be called to get utf8 from it's hex representation
   *
   * @method hexToUtf8
   * @param {String} hex
   * @returns {String} ascii string representation of hex value
   */


  var hexToUtf8 = function hexToUtf8(hex) {
    if (!isHexStrict(hex)) throw new Error('The parameter "' + hex + '" must be a valid HEX string.');
    var str = "";
    var code = 0;
    hex = hex.replace(/^0x/i, ''); // remove 00 padding from either side

    hex = hex.replace(/^(?:00)*/, '');
    hex = hex.split("").reverse().join("");
    hex = hex.replace(/^(?:00)*/, '');
    hex = hex.split("").reverse().join("");
    var l = hex.length;

    for (var i = 0; i < l; i += 2) {
      code = parseInt(hex.substr(i, 2), 16); // if (code !== 0) {

      str += String.fromCharCode(code); // }
    }

    return utf8.decode(str);
  };
  /**
   * Converts value to it's number representation
   *
   * @method hexToNumber
   * @param {String|Number|BN} value
   * @return {String}
   */


  var hexToNumber = function hexToNumber(value) {
    if (!value) {
      return value;
    }

    if (underscore.isString(value) && !isHexStrict(value)) {
      throw new Error('Given value "' + value + '" is not a valid hex string.');
    }

    return toBN(value).toNumber();
  };
  /**
   * Converts value to it's decimal representation in string
   *
   * @method hexToNumberString
   * @param {String|Number|BN} value
   * @return {String}
   */


  var hexToNumberString = function hexToNumberString(value) {
    if (!value) return value;

    if (underscore.isString(value) && !isHexStrict(value)) {
      throw new Error('Given value "' + value + '" is not a valid hex string.');
    }

    return toBN(value).toString(10);
  };
  /**
   * Converts value to it's hex representation
   *
   * @method numberToHex
   * @param {String|Number|BN} value
   * @return {String}
   */


  var numberToHex = function numberToHex(value) {
    if (underscore.isNull(value) || underscore.isUndefined(value)) {
      return value;
    }

    if (!isFinite(value) && !isHexStrict(value)) {
      throw new Error('Given input "' + value + '" is not a number.');
    }

    var number = toBN(value);
    var result = number.toString(16);
    return number.lt(new bn$2(0)) ? '-0x' + result.substr(1) : '0x' + result;
  };
  /**
   * Convert a byte array to a hex string
   *
   * Note: Implementation from crypto-js
   *
   * @method bytesToHex
   * @param {Array} bytes
   * @return {String} the hex string
   */


  var bytesToHex = function bytesToHex(bytes) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
      /* jshint ignore:start */
      hex.push((bytes[i] >>> 4).toString(16));
      hex.push((bytes[i] & 0xF).toString(16));
      /* jshint ignore:end */
    }

    return '0x' + hex.join("");
  };
  /**
   * Convert a hex string to a byte array
   *
   * Note: Implementation from crypto-js
   *
   * @method hexToBytes
   * @param {string} hex
   * @return {Array} the byte array
   */


  var hexToBytes = function hexToBytes(hex) {
    hex = hex.toString(16);

    if (!isHexStrict(hex)) {
      throw new Error('Given value "' + hex + '" is not a valid hex string.');
    }

    hex = hex.replace(/^0x/i, '');

    for (var bytes = [], c = 0; c < hex.length; c += 2) {
      bytes.push(parseInt(hex.substr(c, 2), 16));
    }

    return bytes;
  };
  /**
   * Auto converts any given value into it's hex representation.
   *
   * And even stringifys objects before.
   *
   * @method toHex
   * @param {String|Number|BN|Object|Buffer} value
   * @param {Boolean} returnType
   * @return {String}
   */


  var toHex = function toHex(value, returnType) {
    /*jshint maxcomplexity: false */
    if (isAddress(value)) {
      return returnType ? 'address' : '0x' + value.toLowerCase().replace(/^0x/i, '');
    }

    if (underscore.isBoolean(value)) {
      return returnType ? 'bool' : value ? '0x01' : '0x00';
    }

    if (Buffer.isBuffer(value)) {
      return '0x' + value.toString('hex');
    }

    if (underscore.isObject(value) && !isBigNumber(value) && !isBN(value)) {
      return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
    } // if its a negative number, pass it through numberToHex


    if (underscore.isString(value)) {
      if (value.indexOf('-0x') === 0 || value.indexOf('-0X') === 0) {
        return returnType ? 'int256' : numberToHex(value);
      } else if (value.indexOf('0x') === 0 || value.indexOf('0X') === 0) {
        return returnType ? 'bytes' : value;
      } else if (!isFinite(value)) {
        return returnType ? 'string' : utf8ToHex(value);
      }
    }

    return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex(value);
  };
  /**
   * Check if string is HEX, requires a 0x in front
   *
   * @method isHexStrict
   * @param {String} hex to be checked
   * @returns {Boolean}
   */


  var isHexStrict = function isHexStrict(hex) {
    return (underscore.isString(hex) || underscore.isNumber(hex)) && /^(-)?0x[0-9a-f]*$/i.test(hex);
  };
  /**
   * Check if string is HEX
   *
   * @method isHex
   * @param {String} hex to be checked
   * @returns {Boolean}
   */


  var isHex = function isHex(hex) {
    return (underscore.isString(hex) || underscore.isNumber(hex)) && /^(-0x|0x)?[0-9a-f]*$/i.test(hex);
  };
  /**
   * Returns true if given string is a valid Ethereum block header bloom.
   *
   * @method isBloom
   * @param {String} bloom encoded bloom filter
   * @return {Boolean}
   */


  var isBloom = function isBloom(bloom) {
    return dist.isBloom(bloom);
  };
  /**
   * Returns true if the ethereum users address is part of the given bloom 
   * note: false positives are possible.
   *
   * @method isUserEthereumAddressInBloom
   * @param {String} ethereumAddress encoded bloom filter
   * @param {String} bloom ethereum addresss
   * @return {Boolean}
   */


  var isUserEthereumAddressInBloom = function isUserEthereumAddressInBloom(bloom, ethereumAddress) {
    return dist.isUserEthereumAddressInBloom(bloom, ethereumAddress);
  };
  /**
   * Returns true if the contract address is part of the given bloom 
   * note: false positives are possible.
   *
   * @method isUserEthereumAddressInBloom
   * @param {String} bloom encoded bloom filter
   * @param {String} contractAddress contract addresss
   * @return {Boolean}
   */


  var isContractAddressInBloom = function isContractAddressInBloom(bloom, contractAddress) {
    return dist.isContractAddressInBloom(bloom, contractAddress);
  };
  /**
   * Returns true if given string is a valid log topic.
   *
   * @method isTopic
   * @param {String} topic encoded topic
   * @return {Boolean}
   */


  var isTopic = function isTopic(topic) {
    return dist.isTopic(topic);
  };
  /**
   * Returns true if the topic is part of the given bloom
   * note: false positives are possible.
   *
   * @method isTopicInBloom
   * @param {String} bloom encoded bloom filter
   * @param {String} topic encoded topic
   * @return {Boolean}
   */


  var isTopicInBloom = function isTopicInBloom(bloom, topic) {
    return dist.isTopicInBloom(bloom, topic);
  };
  /**
   * Returns true if the value is part of the given bloom
   * note: false positives are possible.
   *
   * @method isInBloom
   * @param {String} bloom encoded bloom filter
   * @param {String | Uint8Array} topic encoded value
   * @return {Boolean}
   */


  var isInBloom = function isInBloom(bloom, topic) {
    return dist.isInBloom(bloom, topic);
  };
  /**
   * Hashes values to a sha3 hash using keccak 256
   *
   * To hash a HEX string the hex must have 0x in front.
   *
   * @method sha3
   * @return {String} the sha3 string
   */


  var SHA3_NULL_S = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';

  var sha3$1 = function sha3(value) {
    if (isBN(value)) {
      value = value.toString();
    }

    if (isHexStrict(value) && /^0x/i.test(value.toString())) {
      value = hexToBytes(value);
    }

    var returnValue = hash.keccak256(value); // jshint ignore:line

    if (returnValue === SHA3_NULL_S) {
      return null;
    } else {
      return returnValue;
    }
  }; // expose the under the hood keccak256


  sha3$1._Hash = hash;
  /**
   * @method sha3Raw
   *
   * @param value
   *
   * @returns {string}
   */

  var sha3Raw = function sha3Raw(value) {
    value = sha3$1(value);

    if (value === null) {
      return SHA3_NULL_S;
    }

    return value;
  };

  var utils$2 = {
    BN: bn$2,
    isBN: isBN,
    isBigNumber: isBigNumber,
    toBN: toBN,
    isAddress: isAddress,
    isBloom: isBloom,
    isUserEthereumAddressInBloom: isUserEthereumAddressInBloom,
    isContractAddressInBloom: isContractAddressInBloom,
    isTopic: isTopic,
    isTopicInBloom: isTopicInBloom,
    isInBloom: isInBloom,
    checkAddressChecksum: checkAddressChecksum,
    utf8ToHex: utf8ToHex,
    hexToUtf8: hexToUtf8,
    hexToNumber: hexToNumber,
    hexToNumberString: hexToNumberString,
    numberToHex: numberToHex,
    toHex: toHex,
    hexToBytes: hexToBytes,
    bytesToHex: bytesToHex,
    isHex: isHex,
    isHexStrict: isHexStrict,
    leftPad: leftPad,
    rightPad: rightPad,
    toTwosComplement: toTwosComplement,
    sha3: sha3$1,
    sha3Raw: sha3Raw
  };

  /*
   This file is part of web3.js.

   web3.js is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   web3.js is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public License
   along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
   */

  /**
   * @file soliditySha3.js
   * @author Fabian Vogelsteller <fabian@ethereum.org>
   * @date 2017
   */

  var _elementaryName = function _elementaryName(name) {
    /*jshint maxcomplexity:false */
    if (name.startsWith('int[')) {
      return 'int256' + name.slice(3);
    } else if (name === 'int') {
      return 'int256';
    } else if (name.startsWith('uint[')) {
      return 'uint256' + name.slice(4);
    } else if (name === 'uint') {
      return 'uint256';
    } else if (name.startsWith('fixed[')) {
      return 'fixed128x128' + name.slice(5);
    } else if (name === 'fixed') {
      return 'fixed128x128';
    } else if (name.startsWith('ufixed[')) {
      return 'ufixed128x128' + name.slice(6);
    } else if (name === 'ufixed') {
      return 'ufixed128x128';
    }

    return name;
  }; // Parse N from type<N>


  var _parseTypeN = function _parseTypeN(type) {
    var typesize = /^\D+(\d+).*$/.exec(type);
    return typesize ? parseInt(typesize[1], 10) : null;
  }; // Parse N from type[<N>]


  var _parseTypeNArray = function _parseTypeNArray(type) {
    var arraySize = /^\D+\d*\[(\d+)\]$/.exec(type);
    return arraySize ? parseInt(arraySize[1], 10) : null;
  };

  var _parseNumber = function _parseNumber(arg) {
    var type = typeof arg;

    if (type === 'string') {
      if (utils$2.isHexStrict(arg)) {
        return new bn$2(arg.replace(/0x/i, ''), 16);
      } else {
        return new bn$2(arg, 10);
      }
    } else if (type === 'number') {
      return new bn$2(arg);
    } else if (utils$2.isBigNumber(arg)) {
      return new bn$2(arg.toString(10));
    } else if (utils$2.isBN(arg)) {
      return arg;
    } else {
      throw new Error(arg + ' is not a number');
    }
  };

  var _solidityPack = function _solidityPack(type, value, arraySize) {
    /*jshint maxcomplexity:false */
    var size, num;
    type = _elementaryName(type);

    if (type === 'bytes') {
      if (value.replace(/^0x/i, '').length % 2 !== 0) {
        throw new Error('Invalid bytes characters ' + value.length);
      }

      return value;
    } else if (type === 'string') {
      return utils$2.utf8ToHex(value);
    } else if (type === 'bool') {
      return value ? '01' : '00';
    } else if (type.startsWith('address')) {
      if (arraySize) {
        size = 64;
      } else {
        size = 40;
      }

      if (!utils$2.isAddress(value)) {
        throw new Error(value + ' is not a valid address, or the checksum is invalid.');
      }

      return utils$2.leftPad(value.toLowerCase(), size);
    }

    size = _parseTypeN(type);

    if (type.startsWith('bytes')) {
      if (!size) {
        throw new Error('bytes[] not yet supported in solidity');
      } // must be 32 byte slices when in an array


      if (arraySize) {
        size = 32;
      }

      if (size < 1 || size > 32 || size < value.replace(/^0x/i, '').length / 2) {
        throw new Error('Invalid bytes' + size + ' for ' + value);
      }

      return utils$2.rightPad(value, size * 2);
    } else if (type.startsWith('uint')) {
      if (size % 8 || size < 8 || size > 256) {
        throw new Error('Invalid uint' + size + ' size');
      }

      num = _parseNumber(value);

      if (num.bitLength() > size) {
        throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
      }

      if (num.lt(new bn$2(0))) {
        throw new Error('Supplied uint ' + num.toString() + ' is negative');
      }

      return size ? utils$2.leftPad(num.toString('hex'), size / 8 * 2) : num;
    } else if (type.startsWith('int')) {
      if (size % 8 || size < 8 || size > 256) {
        throw new Error('Invalid int' + size + ' size');
      }

      num = _parseNumber(value);

      if (num.bitLength() > size) {
        throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
      }

      if (num.lt(new bn$2(0))) {
        return num.toTwos(size).toString('hex');
      } else {
        return size ? utils$2.leftPad(num.toString('hex'), size / 8 * 2) : num;
      }
    } else {
      // FIXME: support all other types
      throw new Error('Unsupported or invalid type: ' + type);
    }
  };

  var _processSoliditySha3Args = function _processSoliditySha3Args(arg) {
    /*jshint maxcomplexity:false */
    if (underscore.isArray(arg)) {
      throw new Error('Autodetection of array types is not supported.');
    }

    var type,
        value = '';
    var hexArg, arraySize; // if type is given

    if (underscore.isObject(arg) && (arg.hasOwnProperty('v') || arg.hasOwnProperty('t') || arg.hasOwnProperty('value') || arg.hasOwnProperty('type'))) {
      type = arg.hasOwnProperty('t') ? arg.t : arg.type;
      value = arg.hasOwnProperty('v') ? arg.v : arg.value; // otherwise try to guess the type
    } else {
      type = utils$2.toHex(arg, true);
      value = utils$2.toHex(arg);

      if (!type.startsWith('int') && !type.startsWith('uint')) {
        type = 'bytes';
      }
    }

    if ((type.startsWith('int') || type.startsWith('uint')) && typeof value === 'string' && !/^(-)?0x/i.test(value)) {
      value = new bn$2(value);
    } // get the array size


    if (underscore.isArray(value)) {
      arraySize = _parseTypeNArray(type);

      if (arraySize && value.length !== arraySize) {
        throw new Error(type + ' is not matching the given array ' + JSON.stringify(value));
      } else {
        arraySize = value.length;
      }
    }

    if (underscore.isArray(value)) {
      hexArg = value.map(function (val) {
        return _solidityPack(type, val, arraySize).toString('hex').replace('0x', '');
      });
      return hexArg.join('');
    } else {
      hexArg = _solidityPack(type, value, arraySize);
      return hexArg.toString('hex').replace('0x', '');
    }
  };
  /**
   * Hashes solidity values to a sha3 hash using keccak 256
   *
   * @method soliditySha3
   * @return {Object} the sha3
   */


  var soliditySha3 = function soliditySha3() {
    /*jshint maxcomplexity:false */
    var args = Array.prototype.slice.call(arguments);

    var hexArgs = underscore.map(args, _processSoliditySha3Args); // console.log(args, hexArgs);
    // console.log('0x'+ hexArgs.join(''));


    return utils$2.sha3('0x' + hexArgs.join(''));
  };
  /**
   * Hashes solidity values to a sha3 hash using keccak 256 but does return the hash of value `null` instead of `null`
   *
   * @method soliditySha3Raw
   * @return {Object} the sha3
   */


  var soliditySha3Raw = function soliditySha3Raw() {
    return utils$2.sha3Raw('0x' + underscore.map(Array.prototype.slice.call(arguments), _processSoliditySha3Args).join(''));
  };

  var soliditySha3_1 = {
    soliditySha3: soliditySha3,
    soliditySha3Raw: soliditySha3Raw
  };

  var randombytes = crypto.randomBytes;

  /*
   This file is part of web3.js.

   web3.js is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   web3.js is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public License
   along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
   */

  /**
   * @file utils.js
   * @author Marek Kotewicz <marek@parity.io>
   * @author Fabian Vogelsteller <fabian@ethereum.org>
   * @date 2017
   */

  /**
   * Fires an error in an event emitter and callback and returns the eventemitter
   *
   * @method _fireError
   * @param {Object} error a string, a error, or an object with {message, data}
   * @param {Object} emitter
   * @param {Function} reject
   * @param {Function} callback
   * @param {any} optionalData
   * @return {Object} the emitter
   */

  var _fireError = function _fireError(error, emitter, reject, callback, optionalData) {
    /*jshint maxcomplexity: 10 */
    // add data if given
    if (underscore.isObject(error) && !(error instanceof Error) && error.data) {
      if (underscore.isObject(error.data) || underscore.isArray(error.data)) {
        error.data = JSON.stringify(error.data, null, 2);
      }

      error = error.message + "\n" + error.data;
    }

    if (underscore.isString(error)) {
      error = new Error(error);
    }

    if (underscore.isFunction(callback)) {
      callback(error, optionalData);
    }

    if (underscore.isFunction(reject)) {
      // suppress uncatched error if an error listener is present
      // OR suppress uncatched error if an callback listener is present
      if (emitter && underscore.isFunction(emitter.listeners) && emitter.listeners('error').length || underscore.isFunction(callback)) {
        emitter["catch"](function () {});
      } // reject later, to be able to return emitter


      setTimeout(function () {
        reject(error);
      }, 1);
    }

    if (emitter && underscore.isFunction(emitter.emit)) {
      // emit later, to be able to return emitter
      setTimeout(function () {
        emitter.emit('error', error, optionalData);
        emitter.removeAllListeners();
      }, 1);
    }

    return emitter;
  };
  /**
   * Should be used to create full function/event name from json abi
   *
   * @method _jsonInterfaceMethodToString
   * @param {Object} json
   * @return {String} full function/event name
   */


  var _jsonInterfaceMethodToString = function _jsonInterfaceMethodToString(json) {
    if (underscore.isObject(json) && json.name && json.name.indexOf('(') !== -1) {
      return json.name;
    }

    return json.name + '(' + _flattenTypes(false, json.inputs).join(',') + ')';
  };
  /**
   * Should be used to flatten json abi inputs/outputs into an array of type-representing-strings
   *
   * @method _flattenTypes
   * @param {bool} includeTuple
   * @param {Object} puts
   * @return {Array} parameters as strings
   */


  var _flattenTypes = function _flattenTypes(includeTuple, puts) {
    // console.log("entered _flattenTypes. inputs/outputs: " + puts)
    var types = [];
    puts.forEach(function (param) {
      if (typeof param.components === 'object') {
        if (param.type.substring(0, 5) !== 'tuple') {
          throw new Error('components found but type is not tuple; report on GitHub');
        }

        var suffix = '';
        var arrayBracket = param.type.indexOf('[');

        if (arrayBracket >= 0) {
          suffix = param.type.substring(arrayBracket);
        }

        var result = _flattenTypes(includeTuple, param.components); // console.log("result should have things: " + result)


        if (underscore.isArray(result) && includeTuple) {
          // console.log("include tuple word, and its an array. joining...: " + result.types)
          types.push('tuple(' + result.join(',') + ')' + suffix);
        } else if (!includeTuple) {
          // console.log("don't include tuple, but its an array. joining...: " + result)
          types.push('(' + result.join(',') + ')' + suffix);
        } else {
          // console.log("its a single type within a tuple: " + result.types)
          types.push('(' + result + ')');
        }
      } else {
        // console.log("its a type and not directly in a tuple: " + param.type)
        types.push(param.type);
      }
    });
    return types;
  };
  /**
   * Returns a random hex string by the given bytes size
   *
   * @param {Number} size
   * @returns {string}
   */


  var randomHex = function randomHex(size) {
    return '0x' + randombytes(size).toString('hex');
  };
  /**
   * Should be called to get ascii from it's hex representation
   *
   * @method hexToAscii
   * @param {String} hex
   * @returns {String} ascii string representation of hex value
   */


  var hexToAscii = function hexToAscii(hex) {
    if (!utils$2.isHexStrict(hex)) throw new Error('The parameter must be a valid HEX string.');
    var str = "";
    var i = 0,
        l = hex.length;

    if (hex.substring(0, 2) === '0x') {
      i = 2;
    }

    for (; i < l; i += 2) {
      var code = parseInt(hex.substr(i, 2), 16);
      str += String.fromCharCode(code);
    }

    return str;
  };
  /**
   * Should be called to get hex representation (prefixed by 0x) of ascii string
   *
   * @method asciiToHex
   * @param {String} str
   * @returns {String} hex representation of input string
   */


  var asciiToHex = function asciiToHex(str) {
    if (!str) return "0x00";
    var hex = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      var n = code.toString(16);
      hex += n.length < 2 ? '0' + n : n;
    }

    return "0x" + hex;
  };
  /**
   * Returns value of unit in Wei
   *
   * @method getUnitValue
   * @param {String} unit the unit to convert to, default ether
   * @returns {BN} value of the unit (in Wei)
   * @throws error if the unit is not correct:w
   */


  var getUnitValue = function getUnitValue(unit) {
    unit = unit ? unit.toLowerCase() : 'ether';

    if (!lib.unitMap[unit]) {
      throw new Error('This unit "' + unit + '" doesn\'t exist, please use the one of the following units' + JSON.stringify(lib.unitMap, null, 2));
    }

    return unit;
  };
  /**
   * Takes a number of wei and converts it to any other ether unit.
   *
   * Possible units are:
   *   SI Short   SI Full        Effigy       Other
   * - kwei       femtoether     babbage
   * - mwei       picoether      lovelace
   * - gwei       nanoether      shannon      nano
   * - --         microether     szabo        micro
   * - --         milliether     finney       milli
   * - ether      --             --
   * - kether                    --           grand
   * - mether
   * - gether
   * - tether
   *
   * @method fromWei
   * @param {Number|String} number can be a number, number string or a HEX of a decimal
   * @param {String} unit the unit to convert to, default ether
   * @return {String|Object} When given a BN object it returns one as well, otherwise a number
   */


  var fromWei$1 = function fromWei(number, unit) {
    unit = getUnitValue(unit);

    if (!utils$2.isBN(number) && !underscore.isString(number)) {
      throw new Error('Please pass numbers as strings or BN objects to avoid precision errors.');
    }

    return utils$2.isBN(number) ? lib.fromWei(number, unit) : lib.fromWei(number, unit).toString(10);
  };
  /**
   * Takes a number of a unit and converts it to wei.
   *
   * Possible units are:
   *   SI Short   SI Full        Effigy       Other
   * - kwei       femtoether     babbage
   * - mwei       picoether      lovelace
   * - gwei       nanoether      shannon      nano
   * - --         microether     szabo        micro
   * - --         microether     szabo        micro
   * - --         milliether     finney       milli
   * - ether      --             --
   * - kether                    --           grand
   * - mether
   * - gether
   * - tether
   *
   * @method toWei
   * @param {Number|String|BN} number can be a number, number string or a HEX of a decimal
   * @param {String} unit the unit to convert from, default ether
   * @return {String|Object} When given a BN object it returns one as well, otherwise a number
   */


  var toWei$1 = function toWei(number, unit) {
    unit = getUnitValue(unit);

    if (!utils$2.isBN(number) && !underscore.isString(number)) {
      throw new Error('Please pass numbers as strings or BN objects to avoid precision errors.');
    }

    return utils$2.isBN(number) ? lib.toWei(number, unit) : lib.toWei(number, unit).toString(10);
  };
  /**
   * Converts to a checksum address
   *
   * @method toChecksumAddress
   * @param {String} address the given HEX address
   * @return {String}
   */


  var toChecksumAddress = function toChecksumAddress(address) {
    if (typeof address === 'undefined') return '';
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) throw new Error('Given address "' + address + '" is not a valid Ethereum address.');
    address = address.toLowerCase().replace(/^0x/i, '');
    var addressHash = utils$2.sha3(address).replace(/^0x/i, '');
    var checksumAddress = '0x';

    for (var i = 0; i < address.length; i++) {
      // If ith character is 9 to f then make it uppercase
      if (parseInt(addressHash[i], 16) > 7) {
        checksumAddress += address[i].toUpperCase();
      } else {
        checksumAddress += address[i];
      }
    }

    return checksumAddress;
  };

  var src$3 = {
    _fireError: _fireError,
    _jsonInterfaceMethodToString: _jsonInterfaceMethodToString,
    _flattenTypes: _flattenTypes,
    // extractDisplayName: extractDisplayName,
    // extractTypeName: extractTypeName,
    randomHex: randomHex,
    _: underscore,
    BN: utils$2.BN,
    isBN: utils$2.isBN,
    isBigNumber: utils$2.isBigNumber,
    isHex: utils$2.isHex,
    isHexStrict: utils$2.isHexStrict,
    sha3: utils$2.sha3,
    sha3Raw: utils$2.sha3Raw,
    keccak256: utils$2.sha3,
    soliditySha3: soliditySha3_1.soliditySha3,
    soliditySha3Raw: soliditySha3_1.soliditySha3Raw,
    isAddress: utils$2.isAddress,
    checkAddressChecksum: utils$2.checkAddressChecksum,
    toChecksumAddress: toChecksumAddress,
    toHex: utils$2.toHex,
    toBN: utils$2.toBN,
    bytesToHex: utils$2.bytesToHex,
    hexToBytes: utils$2.hexToBytes,
    hexToNumberString: utils$2.hexToNumberString,
    hexToNumber: utils$2.hexToNumber,
    toDecimal: utils$2.hexToNumber,
    // alias
    numberToHex: utils$2.numberToHex,
    fromDecimal: utils$2.numberToHex,
    // alias
    hexToUtf8: utils$2.hexToUtf8,
    hexToString: utils$2.hexToUtf8,
    toUtf8: utils$2.hexToUtf8,
    utf8ToHex: utils$2.utf8ToHex,
    stringToHex: utils$2.utf8ToHex,
    fromUtf8: utils$2.utf8ToHex,
    hexToAscii: hexToAscii,
    toAscii: hexToAscii,
    asciiToHex: asciiToHex,
    fromAscii: asciiToHex,
    unitMap: lib.unitMap,
    toWei: toWei$1,
    fromWei: fromWei$1,
    padLeft: utils$2.leftPad,
    leftPad: utils$2.leftPad,
    padRight: utils$2.rightPad,
    rightPad: utils$2.rightPad,
    toTwosComplement: utils$2.toTwosComplement,
    isBloom: utils$2.isBloom,
    isUserEthereumAddressInBloom: utils$2.isUserEthereumAddressInBloom,
    isContractAddressInBloom: utils$2.isContractAddressInBloom,
    isTopic: utils$2.isTopic,
    isTopicInBloom: utils$2.isTopicInBloom,
    isInBloom: utils$2.isInBloom
  };
  var src_40 = src$3.fromWei;

  function useEffectAsync(effect, destroy, inputs) {
    var hasDestroy = typeof destroy === 'function';
    React.useEffect(function () {
      var result;
      var mounted = true;
      var maybePromise = effect(function () {
        return mounted;
      });
      Promise.resolve(maybePromise).then(function (value) {
        result = value;
      });
      return function () {
        mounted = false;

        if (hasDestroy) {
          destroy(result);
        }
      };
    }, hasDestroy ? inputs : destroy);
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
  var getClosestIndexByDate = function getClosestIndexByDate(dateList, targetDate) {
    var tempDiff = dateList.map(function (d) {
      return Math.abs(moment(d).diff(moment(targetDate)));
    });
    var index = tempDiff.indexOf(Math.min.apply(Math, tempDiff));
    return index;
  };
  var getAverage = function getAverage(arr) {
    return arr.reduce(function (p, c) {
      return p + c;
    }, 0) / arr.length;
  };

  var numeral = /*#__PURE__*/createCommonjsModule(function (module) {
    /*! @preserve
     * numeral.js
     * version : 2.0.6
     * author : Adam Draper
     * license : MIT
     * http://adamwdraper.github.com/Numeral-js/
     */
    (function (global, factory) {
      if ( module.exports) {
        module.exports = factory();
      } else {
        global.numeral = factory();
      }
    })(commonjsGlobal, function () {
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
        scalePercentBy100: true
      },
          options = {
        currentLocale: defaults.currentLocale,
        zeroFormat: defaults.zeroFormat,
        nullFormat: defaults.nullFormat,
        defaultFormat: defaults.defaultFormat,
        scalePercentBy100: defaults.scalePercentBy100
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
          } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
            value = null;
          } else {
            for (kind in formats) {
              regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;

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

      _numeral.isNumeral = function (obj) {
        return obj instanceof Numeral;
      }; // helper functions


      _numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function numberToFormat(value, format, roundingFunction) {
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
          } else if (_numeral._.includes(format, '+') || _numeral._.includes(format, '-')) {
            signed = _numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
            format = format.replace(/[\+|\-]/g, '');
          } // see if abbreviation is wanted


          if (_numeral._.includes(format, 'a')) {
            abbrForce = format.match(/a(k|m|b|t)?/);
            abbrForce = abbrForce ? abbrForce[1] : false; // check for space before abbreviation

            if (_numeral._.includes(format, ' a')) {
              abbr = ' ';
            }

            format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

            if (abs >= trillion && !abbrForce || abbrForce === 't') {
              // trillion
              abbr += locale.abbreviations.trillion;
              value = value / trillion;
            } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
              // billion
              abbr += locale.abbreviations.billion;
              value = value / billion;
            } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
              // million
              abbr += locale.abbreviations.million;
              value = value / million;
            } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
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
          leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

          if (precision) {
            if (_numeral._.includes(precision, '[')) {
              precision = precision.replace(']', '');
              precision = precision.split('[');
              decimal = _numeral._.toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
            } else {
              decimal = _numeral._.toFixed(value, precision.length, roundingFunction);
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


          if (abbr && !abbrForce && Number(_int) >= 1000 && abbr !== locale.abbreviations.trillion) {
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
            _int = _int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
          }

          if (format.indexOf('.') === 0) {
            _int = '';
          }

          output = _int + decimal + (abbr ? abbr : '');

          if (negP) {
            output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
          } else {
            if (signed >= 0) {
              output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
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
            trillion: 12
          },
              abbreviation,
              value,
              regexp;

          if (options.zeroFormat && string === options.zeroFormat) {
            value = 0;
          } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
            value = null;
          } else {
            value = 1;

            if (locale.delimiters.decimal !== '.') {
              string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
            }

            for (abbreviation in abbreviations) {
              regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');

              if (stringOriginal.match(regexp)) {
                value *= Math.pow(10, abbreviations[abbreviation]);
                break;
              }
            } // check for negative number


            value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1; // remove non numbers

            string = string.replace(/[^0-9\.]+/g, '');
            value *= Number(string);
          }

          return value;
        },
        isNaN: function (_isNaN) {
          function isNaN(_x) {
            return _isNaN.apply(this, arguments);
          }

          isNaN.toString = function () {
            return _isNaN.toString();
          };

          return isNaN;
        }(function (value) {
          return typeof value === 'number' && isNaN(value);
        }),
        includes: function includes(string, search) {
          return string.indexOf(search) !== -1;
        },
        insert: function insert(string, subString, start) {
          return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function reduce(array, callback
        /*, initialValue*/
        ) {
          if (this === null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
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
              throw new TypeError('Reduce of empty array with no initial value');
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
          return args.reduce(function (accum, next) {
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
        toFixed: function toFixed(value, maxDecimals, roundingFunction, optionals) {
          var splitValue = value.toString().split('.'),
              minDecimals = maxDecimals - (optionals || 0),
              boundedPrecision,
              optionalsRegExp,
              power,
              output; // Use the smallest precision value possible to avoid errors from floating point representation

          if (splitValue.length === 2) {
            boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
          } else {
            boundedPrecision = minDecimals;
          }

          power = Math.pow(10, boundedPrecision); // Multiply up by precision, round accurately, then divide and use native toFixed():

          output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

          if (optionals > maxDecimals - boundedPrecision) {
            optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
            output = output.replace(optionalsRegExp, '');
          }

          return output;
        }
      }; // avaliable options

      _numeral.options = options; // avaliable formats

      _numeral.formats = formats; // avaliable formats

      _numeral.locales = locales; // This function sets the current locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.

      _numeral.locale = function (key) {
        if (key) {
          options.currentLocale = key.toLowerCase();
        }

        return options.currentLocale;
      }; // This function provides access to the loaded locale data.  If
      // no arguments are passed in, it will simply return the current
      // global locale object.


      _numeral.localeData = function (key) {
        if (!key) {
          return locales[options.currentLocale];
        }

        key = key.toLowerCase();

        if (!locales[key]) {
          throw new Error('Unknown locale : ' + key);
        }

        return locales[key];
      };

      _numeral.reset = function () {
        for (var property in defaults) {
          options[property] = defaults[property];
        }
      };

      _numeral.zeroFormat = function (format) {
        options.zeroFormat = typeof format === 'string' ? format : null;
      };

      _numeral.nullFormat = function (format) {
        options.nullFormat = typeof format === 'string' ? format : null;
      };

      _numeral.defaultFormat = function (format) {
        options.defaultFormat = typeof format === 'string' ? format : '0.0';
      };

      _numeral.register = function (type, name, format) {
        name = name.toLowerCase();

        if (this[type + 's'][name]) {
          throw new TypeError(name + ' ' + type + ' already registered.');
        }

        this[type + 's'][name] = format;
        return format;
      };

      _numeral.validate = function (val, culture) {
        var _decimalSep, _thousandSep, _currSymbol, _valArray, _abbrObj, _thousandRegEx, localeData, temp; //coerce val to string


        if (typeof val !== 'string') {
          val += '';

          if (console.warn) {
            console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
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

          if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
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
              return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx);
            } else {
              if (_valArray[0].length === 1) {
                return !!_valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
              } else {
                return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
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

          this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;
          return this;
        },
        multiply: function multiply(value) {
          function cback(accum, curr, currI, O) {
            var corrFactor = _.correctionFactor(accum, curr);

            return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
          }

          this._value = _.reduce([this._value, value], cback, 1);
          return this;
        },
        divide: function divide(value) {
          function cback(accum, curr, currI, O) {
            var corrFactor = _.correctionFactor(accum, curr);

            return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
          }

          this._value = _.reduce([this._value, value], cback);
          return this;
        },
        difference: function difference(value) {
          return Math.abs(_numeral(this._value).subtract(value).value());
        }
      };
      /************************************
          Default Locale && Format
      ************************************/

      _numeral.register('locale', 'en', {
        delimiters: {
          thousands: ',',
          decimal: '.'
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't'
        },
        ordinal: function ordinal(number) {
          var b = number % 10;
          return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        },
        currency: {
          symbol: '$'
        }
      });

      (function () {
        _numeral.register('format', 'bps', {
          regexps: {
            format: /(BPS)/,
            unformat: /(BPS)/
          },
          format: function format(value, _format, roundingFunction) {
            var space = _numeral._.includes(_format, ' BPS') ? ' ' : '',
                output;
            value = value * 10000; // check for space before BPS

            _format = _format.replace(/\s?BPS/, '');
            output = _numeral._.numberToFormat(value, _format, roundingFunction);

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
          }
        });
      })();

      (function () {
        var decimal = {
          base: 1000,
          suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
            binary = {
          base: 1024,
          suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };
        var allSuffixes = decimal.suffixes.concat(binary.suffixes.filter(function (item) {
          return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join('|'); // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)

        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

        _numeral.register('format', 'bytes', {
          regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
          },
          format: function format(value, _format2, roundingFunction) {
            var output,
                bytes = _numeral._.includes(_format2, 'ib') ? binary : decimal,
                suffix = _numeral._.includes(_format2, ' b') || _numeral._.includes(_format2, ' ib') ? ' ' : '',
                power,
                min,
                max; // check for space before

            _format2 = _format2.replace(/\s?i?b/, '');

            for (power = 0; power <= bytes.suffixes.length; power++) {
              min = Math.pow(bytes.base, power);
              max = Math.pow(bytes.base, power + 1);

              if (value === null || value === 0 || value >= min && value < max) {
                suffix += bytes.suffixes[power];

                if (min > 0) {
                  value = value / min;
                }

                break;
              }
            }

            output = _numeral._.numberToFormat(value, _format2, roundingFunction);
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
          }
        });
      })();

      (function () {
        _numeral.register('format', 'currency', {
          regexps: {
            format: /(\$)/
          },
          format: function format(value, _format3, roundingFunction) {
            var locale = _numeral.locales[_numeral.options.currentLocale],
                symbols = {
              before: _format3.match(/^([\+|\-|\(|\s|\$]*)/)[0],
              after: _format3.match(/([\+|\-|\)|\s|\$]*)$/)[0]
            },
                output,
                symbol,
                i; // strip format of spaces and $

            _format3 = _format3.replace(/\s?\$\s?/, ''); // format the number

            output = _numeral._.numberToFormat(value, _format3, roundingFunction); // update the before and after based on value

            if (value >= 0) {
              symbols.before = symbols.before.replace(/[\-\(]/, '');
              symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (value < 0 && !_numeral._.includes(symbols.before, '-') && !_numeral._.includes(symbols.before, '(')) {
              symbols.before = '-' + symbols.before;
            } // loop through each before symbol


            for (i = 0; i < symbols.before.length; i++) {
              symbol = symbols.before[i];

              switch (symbol) {
                case '$':
                  output = _numeral._.insert(output, locale.currency.symbol, i);
                  break;

                case ' ':
                  output = _numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
                  break;
              }
            } // loop through each after symbol


            for (i = symbols.after.length - 1; i >= 0; i--) {
              symbol = symbols.after[i];

              switch (symbol) {
                case '$':
                  output = i === symbols.after.length - 1 ? output + locale.currency.symbol : _numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
                  break;

                case ' ':
                  output = i === symbols.after.length - 1 ? output + ' ' : _numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
                  break;
              }
            }

            return output;
          }
        });
      })();

      (function () {
        _numeral.register('format', 'exponential', {
          regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
          },
          format: function format(value, _format4, roundingFunction) {
            var output,
                exponential = typeof value === 'number' && !_numeral._.isNaN(value) ? value.toExponential() : '0e+0',
                parts = exponential.split('e');
            _format4 = _format4.replace(/e[\+|\-]{1}0/, '');
            output = _numeral._.numberToFormat(Number(parts[0]), _format4, roundingFunction);
            return output + 'e' + parts[1];
          },
          unformat: function unformat(string) {
            var parts = _numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
                value = Number(parts[0]),
                power = Number(parts[1]);
            power = _numeral._.includes(string, 'e-') ? power *= -1 : power;

            function cback(accum, curr, currI, O) {
              var corrFactor = _numeral._.correctionFactor(accum, curr),
                  num = accum * corrFactor * (curr * corrFactor) / (corrFactor * corrFactor);

              return num;
            }

            return _numeral._.reduce([value, Math.pow(10, power)], cback, 1);
          }
        });
      })();

      (function () {
        _numeral.register('format', 'ordinal', {
          regexps: {
            format: /(o)/
          },
          format: function format(value, _format5, roundingFunction) {
            var locale = _numeral.locales[_numeral.options.currentLocale],
                output,
                ordinal = _numeral._.includes(_format5, ' o') ? ' ' : ''; // check for space before

            _format5 = _format5.replace(/\s?o/, '');
            ordinal += locale.ordinal(value);
            output = _numeral._.numberToFormat(value, _format5, roundingFunction);
            return output + ordinal;
          }
        });
      })();

      (function () {
        _numeral.register('format', 'percentage', {
          regexps: {
            format: /(%)/,
            unformat: /(%)/
          },
          format: function format(value, _format6, roundingFunction) {
            var space = _numeral._.includes(_format6, ' %') ? ' ' : '',
                output;

            if (_numeral.options.scalePercentBy100) {
              value = value * 100;
            } // check for space before %


            _format6 = _format6.replace(/\s?\%/, '');
            output = _numeral._.numberToFormat(value, _format6, roundingFunction);

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
          }
        });
      })();

      (function () {
        _numeral.register('format', 'time', {
          regexps: {
            format: /(:)/,
            unformat: /(:)/
          },
          format: function format(value, _format7, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
                minutes = Math.floor((value - hours * 60 * 60) / 60),
                seconds = Math.round(value - hours * 60 * 60 - minutes * 60);
            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
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
          }
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
        decimal: ','
      },
      abbreviations: {
        thousand: 'k',
        million: 'mm',
        billion: 'b',
        trillion: 't'
      },
      ordinal: function ordinal(number) {
        var b = number % 10;
        return b === 1 || b === 3 ? 'er' : b === 2 ? 'do' : b === 7 || b === 0 ? 'mo' : b === 8 ? 'vo' : b === 9 ? 'no' : 'to';
      },
      currency: {
        symbol: '€'
      }
    });
  }

  numeral.locale('hero');
  numeral.defaultFormat(numeralFormat);

  var chartBackground = {
    beforeDraw: function beforeDraw(chart, _easing) {
      if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
        var ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;
        ctx.save();
        ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        ctx.restore();
      }
    }
  };
  var todayVerticalLine = {
    afterDatasetsDraw: function afterDatasetsDraw(chart, _easing) {
      var meta = chart.getDatasetMeta(0);
      var x = meta.data[chart.options.lineAtIndex[0]]._model.x;
      var todayX;
      var todayOverX = 25;

      if (chart.options.lineAtIndex[0] + 1 <= chart.data.datasets[0].data.length / 2) {
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
    }
  };

  var DAI_ADDRESS = env.REACT_APP_DAI_ADDRESS;
  var IMAGES_PATH = env.REACT_APP_HOST_IMAGES + "/images/";
  var ERC20_LOGOS = {
    DAI: IMAGES_PATH + "coins/coin-dai.svg",
    PAX: IMAGES_PATH + "coins/coin-pax.svg",
    USDT: IMAGES_PATH + "coins/coin-theter.svg",
    TUSD: IMAGES_PATH + "coins/coin-trueusd.svg",
    USDC: IMAGES_PATH + "coins/coin-usdc.svg"
  };
  var COMPANY_LOGOS = {
    Compound: IMAGES_PATH + "companies/compound-logo.png",
    Maker: IMAGES_PATH + "companies/maker.svg",
    Raise: IMAGES_PATH + "isotype.png",
    dYdX: IMAGES_PATH + "companies/dydx-vector-logo.png",
    Fulcrum: IMAGES_PATH + "companies/bZx-Logo.jpg"
  };

  var datasetToGraph = function datasetToGraph(dataset, rgb, label, fill, borderWidth, dashed, pointHover, pointRadius) {
    return {
      label: label,
      fill: fill,
      lineTension: 0.4,
      backgroundColor: "rgba(" + rgb + ",0.4)",
      borderColor: "rgba(" + rgb + ",1)",
      borderCapStyle: 'butt',
      borderDash: !dashed ? [] : [10, 5],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(" + rgb + ",1)",
      pointBackgroundColor: "rgba(" + rgb + ",1)",
      pointBorderWidth: 0,
      pointRadius: 0,
      pointHoverRadius: pointRadius,
      borderWidth: !borderWidth ? 1 : borderWidth,
      pointHoverBackgroundColor: pointHover.length ? pointHover.map(function (x) {
        return x > 0 ? "rgba(" + rgb + ",1)" : "rgba(" + rgb + ",0)";
      }) : "rgba(" + rgb + ",1)",
      pointHoverBorderColor: pointHover.length ? pointHover.map(function (x) {
        return x > 0 ? "rgba(" + rgb + ",1)" : "rgba(" + rgb + ",0)";
      }) : "rgba(" + rgb + ",1)",
      pointHoverBorderWidth: pointHover.length ? pointHover : 2,
      pointHitRadius: 10,
      data: [].concat(dataset)
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
        padding: 5
      }
    },
    chartArea: {
      backgroundColor: 'rgba(248,248,248,1)'
    },
    lineAtIndex: [0],
    onHover: function onHover() {},
    layout: {
      padding: {
        left: 5,
        right: 5
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      enabled: false
    },
    hover: {
      mode: 'index',
      intersect: false
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false
        },
        display: false
      }],
      yAxes: [{
        ticks: {
          display: false,
          min: 0,
          max: 21,
          stepSize: 1
        },
        display: false
      }]
    }
  };

  var getRaiseDataset = function getRaiseDataset(dates, auctionStart, auctionEnd, maxInterest, minInterest) {
    return dates.map(function (d) {
      return (maxInterest - minInterest) * Math.abs(d.valueOf() - auctionStart.valueOf()) / Math.abs(auctionEnd.valueOf() - auctionStart.valueOf()) + minInterest;
    });
  };

  var APRGraph = function APRGraph(_ref) {
    var maxInterestRate = _ref.maxInterestRate,
        minInterestRate = _ref.minInterestRate,
        auctionStartTimestamp = _ref.auctionStartTimestamp,
        auctionEndTimestamp = _ref.auctionEndTimestamp,
        currentAPR = _ref.currentAPR;

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
    var medianCompoundRateNumeral = numeral(medianCompoundRate / 100).format('0.00%');
    var maxInterest = Number(src_40(maxInterestRate.toString())) * 12;
    var minInterest = minInterestRate ? Number(src_40(minInterestRate.toString())) * 12 : 0;
    var dateStart = new Date(auctionStartTimestamp * 1000);
    var dateEnd = new Date(auctionEndTimestamp * 1000);
    var dateNow = new Date();
    var arrayDays = getDates(dateStart, dateEnd);
    var nowIndex = getClosestIndexByDate(arrayDays, dateNow);
    var raiseDataset = getRaiseDataset(arrayDays, dateStart, dateEnd, maxInterest, minInterest);
    var raiseGraphData = datasetToGraph(raiseDataset, '235,63,147', 'Raise', false, 3, false, [], 5);
    var compoundGraphData = datasetToGraph(compoundDataset, '119,151,170', 'Compound', true, 1, false, [], 3);
    var avgGraphData = datasetToGraph(Array(arrayDays.length).fill(medianCompoundRate), '119,151,170', 'Compound 30 day avg', false, 2, true, [], 3);
    var graphData = {
      labels: arrayDays,
      datasets: [raiseGraphData, compoundGraphData, avgGraphData]
    };
    useEffectAsync(function () {
      try {
        Chart.pluginService.register(todayVerticalLine);
        Chart.pluginService.register(chartBackground);
        /**
         * Compound DAI rate api call, latest 30 day
         */

        return Promise.resolve(axios$1.get('https://api.compound.finance/api/v2/market_history/graph', {
          params: {
            asset: DAI_ADDRESS,
            min_block_timestamp: moment().subtract(arrayDays.length, 'day').unix(),
            max_block_timestamp: moment().unix(),
            num_buckets: arrayDays.length
          }
        })).then(function (response) {
          if (response.status === 200 && response.data.supply_rates && response.data.supply_rates.length) {
            var supplyRates = response.data.supply_rates;
            var length = supplyRates.length;
            var estDataset = supplyRates.map(function (_ref2) {
              var rate = _ref2.rate;
              return rate * 100;
            });
            var currentDataset = estDataset.slice(length - nowIndex - 1);
            setFullCompoundDataset(estDataset);
            setCompoundDataset(currentDataset);
            setInterest([currentAPR, numeral(currentDataset[nowIndex] / 100).format('0.00%')]);
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
        setInterest([currentAPR, numeral(compoundDataset[nowIndex] / 100).format('0.00%')]);
        return;
      } // Return current index to be able to show tooltip outside canvas


      if (datapoint.length) {
        var index = datapoint[0]._index;
        setSelectedDate(arrayDays[index]);
        var currentAPRGraph = index === nowIndex ? currentAPR : numeral(raiseDataset[index] / 100).format('0.00%');
        setInterest([currentAPRGraph, index > nowIndex ? medianCompoundRateNumeral : numeral(compoundDataset[index] / 100).format('0.00%')]);
      }
    };

    options.onHover = updateHover;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(Card.Grid, null, React__default.createElement(Card.Row, {
      notop: true,
      big: true,
      title: "Date",
      content: selectedDate.toLocaleDateString('es')
    }), React__default.createElement(Card.Vertical, null), React__default.createElement(Card.Row, {
      notop: true,
      big: true,
      title: "Raise",
      content: currentLoanInterest,
      contentColor: raiseGraphData.borderColor
    }), React__default.createElement(Card.Vertical, null), React__default.createElement(Card.Row, {
      notop: true,
      big: true,
      title: "Compound",
      content: compoundInterest,
      contentColor: compoundGraphData.borderColor
    })), React__default.createElement(Line, {
      data: graphData,
      options: options,
      height: 245
    }));
  };

  function _templateObject$3() {
    var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 22px;\n  &&& > div:first-child {\n    margin-left: 5px;\n  }\n  &&& > span:last-child {\n    margin-left: 9px;\n    color: #5a5a5a;\n    font-size: 14px;\n    font-weight: bold;\n  }\n"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var AmountComponent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject$3());

  var REACT_APP_HOST_IMAGES = 'https://static.raise.it';

  var Amount = function Amount(_ref) {
    var principal = _ref.principal,
        roi = _ref.roi;
    return React__default.createElement(AmountComponent, null, principal, React__default.createElement(Coin, {
      src: REACT_APP_HOST_IMAGES + "/images/ico_dai.png"
    }), roi && React__default.createElement("span", null, roi, " ROI"));
  };

  var InvestInfo = function InvestInfo(props) {
    var companyName = props.companyName,
        shortDescription = props.shortDescription,
        background = props.background,
        logo = props.logo,
        slug = props.slug,
        currentAmount = props.currentAmount,
        totalAmount = props.totalAmount,
        maxAmount = props.maxAmount,
        times = props.times,
        principal = props.principal,
        link = props.link;
    var auctionTimeLeft = times.auctionTimeLeft + " left";
    var aProps = {
      href: undefined
    };
    var toProps = {
      to: undefined
    };

    if (link) {
      aProps.href = slug;
      toProps.to = slug;
    }

    return React__default.createElement(React__default.Fragment, null, React__default.createElement(Card.Image, Object.assign({}, toProps, {
      src: background
    })), React__default.createElement(CardContent$1, Object.assign({}, toProps, {
      topRight: auctionTimeLeft,
      logo: logo
    }), React__default.createElement("a", Object.assign({}, aProps), React__default.createElement(Card.BorrowerTitle, null, companyName), React__default.createElement(Card.Description, null, shortDescription)), React__default.createElement(Card.Grid, {
      spaceBetween: true,
      alignBottom: true,
      nobottom: true
    }, React__default.createElement(Card.Header, {
      title: "Raised so far",
      amount: React__default.createElement(Amount, {
        principal: principal
      })
    }), React__default.createElement(Card.Header, {
      title: "Target",
      amount: React__default.createElement(Amount, {
        principal: maxAmount
      })
    })), React__default.createElement(Card.Progress, {
      color: "#eb3f93",
      currentAmount: currentAmount,
      totalAmount: totalAmount
    })));
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
    _assign = Object.assign || function __assign(t) {
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
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }

  var uid = function uid() {
    return Math.random().toString(36).substring(2);
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
        props = __rest(_a, ["rtl", "speed", "interval", "style", "width", "height", "baseUrl", "gradientRatio", "animate", "ariaLabel", "children", "className", "uniquekey", "primaryColor", "primaryOpacity", "secondaryColor", "secondaryOpacity", "preserveAspectRatio"]);

    var idClip = uniquekey ? uniquekey + "-idClip" : uid();
    var idGradient = uniquekey ? uniquekey + "-idGradient" : uid();
    var rtlStyle = rtl ? {
      transform: 'scaleX(-1)'
    } : {};
    var keyTimes = "0; " + interval + "; 1";
    var dur = speed + "s";
    return React.createElement("svg", _assign({
      role: "img",
      style: _assign(_assign({}, style), rtlStyle),
      className: className,
      "aria-label": ariaLabel ? ariaLabel : null,
      viewBox: "0 0 " + width + " " + height,
      preserveAspectRatio: preserveAspectRatio
    }, props), ariaLabel ? React.createElement("title", null, ariaLabel) : null, React.createElement("rect", {
      x: "0",
      y: "0",
      width: width,
      height: height,
      clipPath: "url(" + baseUrl + "#" + idClip + ")",
      style: {
        fill: "url(" + baseUrl + "#" + idGradient + ")"
      }
    }), React.createElement("defs", null, React.createElement("clipPath", {
      id: idClip
    }, children), React.createElement("linearGradient", {
      id: idGradient
    }, React.createElement("stop", {
      offset: "0%",
      stopColor: primaryColor,
      stopOpacity: primaryOpacity
    }, animate && React.createElement("animate", {
      attributeName: "offset",
      values: -gradientRatio + "; " + -gradientRatio + "; 1",
      keyTimes: keyTimes,
      dur: dur,
      repeatCount: "indefinite"
    })), React.createElement("stop", {
      offset: "50%",
      stopColor: secondaryColor,
      stopOpacity: secondaryOpacity
    }, animate && React.createElement("animate", {
      attributeName: "offset",
      values: -gradientRatio / 2 + "; " + -gradientRatio / 2 + "; " + (1 + gradientRatio / 2),
      keyTimes: keyTimes,
      dur: dur,
      repeatCount: "indefinite"
    })), React.createElement("stop", {
      offset: "100%",
      stopColor: primaryColor,
      stopOpacity: primaryOpacity
    }, animate && React.createElement("animate", {
      attributeName: "offset",
      values: "0; 0; " + (1 + gradientRatio),
      keyTimes: keyTimes,
      dur: dur,
      repeatCount: "indefinite"
    })))));
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
    width: 400
  };

  var InitialComponent = function InitialComponent(props) {
    return React.createElement("rect", {
      x: "0",
      y: "0",
      rx: "5",
      ry: "5",
      width: props.width,
      height: props.height
    });
  };

  var ContentLoader = function ContentLoader(props) {
    var mergedProps = _assign(_assign({}, defaultProps), props);

    return React.createElement(Svg, _assign({}, mergedProps), props.children || React.createElement(InitialComponent, _assign({}, mergedProps)));
  };

  function _templateObject$4() {
    var data = _taggedTemplateLiteralLoose(["\n  max-width: 372px;\n  width: 100%;\n  height: 470px;\n  margin: 0px !important;\n  padding: 0px !important;\n"]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var CardSegment = /*#__PURE__*/styled(semanticUiReact.Segment)( /*#__PURE__*/_templateObject$4());

  var CardPlaceholder = function CardPlaceholder() {
    return React__default.createElement(CardSegment, {
      raised: true
    }, React__default.createElement(ContentLoader, {
      height: 490,
      width: 372,
      speed: 1,
      primaryColor: "#fef4f9",
      secondaryColor: "#faf1f1"
    }, React__default.createElement("rect", {
      x: "0",
      y: "0",
      rx: "5",
      ry: "5",
      width: "372",
      height: "124"
    }), React__default.createElement("rect", {
      x: "33",
      y: "99",
      rx: "0",
      ry: "0",
      width: "64",
      height: "53"
    }), React__default.createElement("rect", {
      x: "10",
      y: "180",
      rx: "3",
      ry: "3",
      width: "350",
      height: "10"
    }), React__default.createElement("rect", {
      x: "10",
      y: "200",
      rx: "3",
      ry: "3",
      width: "340",
      height: "10"
    }), React__default.createElement("rect", {
      x: "10",
      y: "220",
      rx: "3",
      ry: "3",
      width: "345",
      height: "10"
    }), React__default.createElement("rect", {
      x: "10",
      y: "240",
      rx: "3",
      ry: "3",
      width: "201",
      height: "10"
    }), React__default.createElement("rect", {
      x: "10",
      y: "410",
      rx: "3",
      ry: "3",
      width: "350",
      height: "50"
    })));
  };

  var InvestCardView = function InvestCardView(props) {
    var companyName = props.companyName,
        times = props.times,
        currentAPR = props.currentAPR,
        investorCount = props.investorCount,
        children = props.children,
        className = props.className;

    var _useState = React.useState(0),
        viewGraph = _useState[0],
        setGraphView = _useState[1];

    var onOpenGraph = function onOpenGraph() {
      setGraphView(viewGraph ? 0 : 1);
    };

    var AuctionGraph = React__default.createElement(APRGraph, Object.assign({}, props));
    var domList = [{
      key: 0,
      component: React__default.createElement(InvestInfo, Object.assign({}, props))
    }, {
      key: 1,
      component: AuctionGraph
    }];

    var _useState2 = React.useState(viewGraph),
        previousTab = _useState2[0],
        setPreviousTab = _useState2[1];

    var transitions = useTransition(domList[viewGraph], function (i) {
      return i.key;
    }, {
      unique: true,
      from: function from() {
        return {
          transform: "translate3d(0," + (viewGraph - previousTab) * 100 + "%, 0)",
          position: 'static'
        };
      },
      enter: {
        transform: 'translate3d(0%,0,0)',
        position: 'static'
      },
      leave: function leave() {
        return {
          transform: "translate3d(0," + (previousTab - viewGraph) * 100 + "%,0)",
          position: 'absolute'
        };
      }
    });

    if (!companyName) {
      return React__default.createElement(CardPlaceholder, null);
    }

    if (viewGraph !== previousTab) setPreviousTab(viewGraph);
    return React__default.createElement(InvestCardBody, {
      style: {
        overflow: 'hidden'
      },
      className: className
    }, React__default.createElement("div", {
      style: {
        overflow: 'hidden',
        height: '100%',
        zIndex: 3,
        position: 'relative'
      }
    }, transitions.map(function (_ref) {
      var item = _ref.item,
          key = _ref.key,
          props = _ref.props;
      return React__default.createElement(extendedAnimated.div, {
        style: props,
        key: key
      }, item.component);
    })), React__default.createElement(CardBottom, null, React__default.createElement(Card.Grid, {
      alignCenter: true
    }, React__default.createElement(Card.Row, {
      notop: true,
      small: true,
      title: "Loan Term",
      content: times.loanTerm
    }), React__default.createElement(Card.Vertical, null), React__default.createElement(Card.Row, {
      notop: true,
      small: true,
      title: "Investors",
      content: investorCount
    }), React__default.createElement(GraphButton, {
      basic: true,
      onClick: onOpenGraph
    }, viewGraph === 0 ? React__default.createElement(React__default.Fragment, null, React__default.createElement(semanticUiReact.Icon, {
      name: "line graph",
      size: "large"
    }), React__default.createElement(Card.Row, {
      notop: true,
      small: true,
      title: "Current APR",
      content: currentAPR
    })) : React__default.createElement(React__default.Fragment, null, React__default.createElement(semanticUiReact.Icon, {
      name: "line graph",
      size: "large"
    }), React__default.createElement(SpacedDiv, null, "Go back")))), children));
  };

  var PAD_VALUE = /*#__PURE__*/Symbol('PadValueType');

  var _ = /*#__PURE__*/Symbol('UnderscoreType');

  var ANY = _;
  var HEAD = /*#__PURE__*/Symbol('HeadType');
  var TAIL = /*#__PURE__*/Symbol('TailType');
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
      throw new MatchError("Unsupported action type " + typeof action + " of action " + action + ".");
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
      if (bool) return [bool, [value]];else return [false, []];
    } else if (patt === Number) {
      var _bool = typeof value === 'number' || value instanceof Number;

      if (_bool) return [_bool, [value]];else return [false, []];
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
      if (ret === true) return [true, [value]];else return [false, []];
    } else if (patt === _) {
      return [true, [value]];
    } else if (isObject$2(patt)) {
      return matchDict(patt, value);
    } else {
      throw new MatchError("Pattern " + patt + " has unsupported type " + typeof patt + ".");
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
          throw new MatchError("TAIL/REST must be the last element of a pattern.");
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
    for (var _len = arguments.length, pairs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pairs[_key - 1] = arguments[_key];
    }

    if (!pairs.every(function (p) {
      return p.length && p.length === 2;
    })) {
      throw new MatchError('Even number of pattern-action pairs. Every pattern should have an action.');
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

    throw new MatchError("No _ provided, case " + x + " not handled.");
  }

  function match(x) {
    var args = Array.prototype.slice.call(arguments).slice(1);

    if (args.length % 2 !== 0) {
      throw new MatchError("Even number of pattern-action pairs. Every pattern should have an action.");
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

  var MatchError = /*#__PURE__*/function (_Error) {
    _inheritsLoose(MatchError, _Error);

    function MatchError(message) {
      var _this;

      _this = _Error.call(this, message) || this;
      _this.name = 'MatchError';
      return _this;
    }

    return MatchError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

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
    REST: REST
  };
  var pampy_4 = pampy.match;
  var pampy_10 = pampy.ANY;

  var LoanState;

  (function (LoanState) {
    LoanState[LoanState["CREATED"] = 0] = "CREATED";
    LoanState[LoanState["FAILED_TO_FUND"] = 1] = "FAILED_TO_FUND";
    LoanState[LoanState["ACTIVE"] = 2] = "ACTIVE";
    LoanState[LoanState["DEFAULTED"] = 3] = "DEFAULTED";
    LoanState[LoanState["REPAID"] = 4] = "REPAID";
    LoanState[LoanState["CLOSED"] = 5] = "CLOSED";
    LoanState[LoanState["FROZEN"] = 6] = "FROZEN"; // when admin unlocks withdrawals
  })(LoanState || (LoanState = {}));

  var secondUnits = {
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60
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
    return pampy_4(seconds, function (s) {
      return s >= secondUnits.day;
    }, function (s) {
      return roundedTime(s, secondUnits.day) + " days";
    }, function (s) {
      return s >= secondUnits.hour;
    }, function (s) {
      return roundedTime(s, secondUnits.hour) + " hours";
    }, function (s) {
      return s >= secondUnits.minute;
    }, function (s) {
      return roundedTime(s, secondUnits.minute) + " minutes";
    }, function (s) {
      return s > 0 && s < secondUnits.minute;
    }, function () {
      return '<1 minute';
    }, pampy_10, function () {
      return type === 'loan' ? 'Expired' : 'Auction ended';
    });
  };
  var defaultZero = /*#__PURE__*/numeral(0).format();
  var calculateFromWei = function calculateFromWei(number) {
    return number ? numeral(Number(src_40(number.toString(), 'ether'))).format(numeralFormat) : defaultZero;
  };
  var calculateTimes = function calculateTimes(auction) {
    try {
      var loanTerm = getDesiredTime(Number(auction.termLength));
      var today = new Date().getTime() / 1000;
      var auctionTimeLeft = getDesiredTime(Number(auction.auctionEndTimestamp) - today);
      var loanTermLeft = getDesiredTime(Number(auction.termEndTimestamp) - today, 'loan');
      return {
        loanTerm: loanTerm,
        auctionTimeLeft: auctionTimeLeft,
        loanTermLeft: loanTermLeft
      };
    } catch (error) {
      console.error('[LOANUTILS][CalculateFromWei]', error);
      return error;
    }
  };
  var calculateInterest = function calculateInterest(auction) {
    var nowTimestamp = Date.now() / 1000;
    var maxInterestRate = Number(src_40(auction.maxInterestRate.toString())) / 100;
    var minInterestRate = auction.minInterestRate ? Number(src_40(auction.minInterestRate.toString())) / 100 : 0;
    var interest = 0;

    if (auction.state === LoanState.CREATED && !isAuctionExpired(auction)) {
      interest = (maxInterestRate - minInterestRate) * ((nowTimestamp - auction.auctionStartTimestamp) / (auction.auctionEndTimestamp - auction.auctionStartTimestamp)) + minInterestRate;
    } else if (auction.state === LoanState.ACTIVE || auction.state === LoanState.REPAID) {
      interest = maxInterestRate;
    } else {
      interest = maxInterestRate;
    }

    return interest;
  };
  var calculateROI = function calculateROI(auction) {
    var roi = Number(src_40(auction.interestRate.toString())) * (auction.termLength / 30 / 24 / 60 / 60) / 100;
    return roi;
  };
  var calculateTotalInterest = function calculateTotalInterest(auction) {
    var interest = Number(src_40(auction.interestRate.toString())) * (auction.termLength / 30 / 24 / 60 / 60 / 100);
    return interest;
  };
  var calculateTotalInterestAmount = function calculateTotalInterestAmount(auction) {
    var interest = Number(src_40(auction.interestRate.toString())) * (auction.termLength / 30 / 24 / 60 / 60 / 100);
    var principal = Number(src_40(auction.principal));
    return principal * interest;
  };
  var calculateAPR = function calculateAPR(auction) {
    var interest = Number(src_40(auction.interestRate.toString())) / 100;
    var apr = interest * 12;
    return apr;
  };
  var calculateInvestmentReturn = function calculateInvestmentReturn(auction) {
    var lenderAmount = Number(src_40(auction.lenderAmount));
    var lenderRoiAmount = lenderAmount + lenderAmount * calculateROI(auction);
    return lenderRoiAmount;
  };
  var getCalculations = function getCalculations(auction) {
    var maxAmount = calculateFromWei(auction.maxAmount);
    var maxAmountNum = Number(src_40(auction.maxAmount));
    var operatorFee = calculateFromWei(auction.operatorFee);
    var operatorFeeNum = Number(src_40(auction.operatorFee.toString())) / 100;
    var principal = calculateFromWei(auction.principal);
    var borrowerDebt = Number(src_40(auction.borrowerDebt)).toLocaleString('es-ES');
    var maxSystemFees = numeral(maxAmountNum * operatorFeeNum).format();
    var systemFees = "-" + numeral(Number(src_40(auction.principal)) * operatorFeeNum).format();
    var netBalance = calculateFromWei(auction.netBalance);

    if (auction.netBalance) {
      netBalance = numeral(Number(src_40(auction.netBalance.toString()))).format();
    }

    var calculatedInterest = calculateInterest(auction);
    var expectedROI = calculatedInterest * (Number(auction.termLength) / 2628000);
    var interest = numeral(calculatedInterest).format('0.00%');
    var currentAPR = numeral(calculatedInterest * 12).format('0.00%');
    var currentAmount = numeral(principal).value();
    var totalAmount = numeral(maxAmount).value();
    var maxAPR = numeral(Number(src_40(auction.maxInterestRate.toString())) / 100 * 12).format('0.00%');
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
      totalInterestAmount = numeral(calculateTotalInterestAmount(auction)).format();
    }

    if (auction.lenderAmount) {
      lenderAmount = numeral(Number(src_40(auction.lenderAmount))).format();
      var lenderRoiAmountCalc = calculateInvestmentReturn(auction);
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
        loanTermLeft: loanTermLeft
      },
      borrowerDebt: borrowerDebt,
      interest: interest,
      maxAmount: maxAmount,
      netBalance: netBalance,
      operatorFee: operatorFee,
      principal: principal,
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
      expectedRoiFormated: expectedRoiFormated
    };
    return newCalcs;
  };

  var InvestCard = function InvestCard(props) {
    var auction = props.auction,
        className = props.className,
        children = props.children,
        borrower = props.borrower;
    var link = !!props.link;
    var calculations = getCalculations(auction);

    var investProps = _extends({}, auction, {}, borrower, {}, calculations, {
      link: link
    });

    return React__default.createElement(InvestCardView, Object.assign({}, investProps, {
      className: className
    }), children);
  };

  function _templateObject19$1() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  .content {\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n\n  .visuals {\n    flex: 0 1 100%;\n    background: #f7fdff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .process {\n    flex: 0 1 100%;\n    background: #fff;\n    padding: 50px;\n    box-sizing: border-box;\n  }\n\n  .error.field {\n    .ui.search {\n      background-color: #fff6f6;\n      border-color: #e0b4b4;\n      box-shadow: none;\n      color: #9f3a38 !important;\n    }\n  }\n"]);

    _templateObject19$1 = function _templateObject19() {
      return data;
    };

    return data;
  }

  function _templateObject18$1() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 50px;\n  align-items: center;\n"]);

    _templateObject18$1 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17$1() {
    var data = _taggedTemplateLiteralLoose([""]);

    _templateObject17$1 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16$1() {
    var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100px;\n  height: auto;\n"]);

    _templateObject16$1 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15$1() {
    var data = _taggedTemplateLiteralLoose(["\n  &&& {\n    width: ", ";\n\n    @media (max-width: ", ") {\n      width: 100%;\n    }\n  }\n"]);

    _templateObject15$1 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14$1() {
    var data = _taggedTemplateLiteralLoose(["\n  padding: 15%;\n\n  @media (max-width: ", ") {\n    flex: 0 1 20%;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 1%;\n  }\n"]);

    _templateObject14$1 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13$1() {
    var data = _taggedTemplateLiteralLoose(["\n  font-size: 23px;\n  line-height: 36px;\n  opacity: 0.59;\n  color: #3c4251;\n  font-family: Lato;\n  height: 72px;\n  width: 290px;\n  margin: 5%;\n\n  @media (max-width: ", ") {\n    display: none;\n  }\n"]);

    _templateObject13$1 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12$1() {
    var data = _taggedTemplateLiteralLoose(["\n  font-size: 50px;\n  font-family: Lato;\n  line-height: 60px;\n  color: #3c4251;\n  font-weight: bold;\n  height: 60px;\n  width: 260px;\n  margin: 5%;\n\n  @media (max-width: ", ") {\n    font-size: 25px;\n    font-family: Lato;\n    line-height: 15px;\n    height: auto;\n    width: auto;\n    text-align: center;\n  }\n"]);

    _templateObject12$1 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11$1() {
    var data = _taggedTemplateLiteralLoose(["\n  max-width: 100%;\n\n  @media (max-width: ", ") {\n    display: none;\n  }\n"]);

    _templateObject11$1 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10$1() {
    var data = _taggedTemplateLiteralLoose([""]);

    _templateObject10$1 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9$1() {
    var data = _taggedTemplateLiteralLoose(["\n  flex: 0 1 55%;\n  padding: 5%;\n  border-left: 1px solid #dfe3e9;\n\n  @media (max-width: ", ") {\n    flex: 0 1 100%;\n    border-left: none;\n  }\n"]);

    _templateObject9$1 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8$1() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 45%;\n  justify-content: space-between;\n\n  @media (max-width: ", ") {\n    flex: 0 1 100%;\n  }\n"]);

    _templateObject8$1 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7$1() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: ", ") {\n    flex-wrap: wrap;\n    height: 100%;\n  }\n"]);

    _templateObject7$1 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$1() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 100px;\n  border-bottom: 1px solid #dfe3e9;\n  margin: 0 5px 0 5px;\n\n  div img {\n    padding: 12%;\n  }\n\n  @media (max-width: ", ") {\n    border-bottom: none;\n  }\n"]);

    _templateObject6$1 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$2() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: stretch;\n"]);

    _templateObject5$2 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$2() {
    var data = _taggedTemplateLiteralLoose(["\n  @media (max-width: 500px) {\n    border-radius: 0;\n    margin: 0;\n    padding: 0;\n    overflow: auto;\n  }\n"]);

    _templateObject4$2 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$2() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  overflow: hidden !important;\n\n  @media (max-width: 500px) {\n    overflow-y: auto !important;\n    &&&&&&.ui.modal {\n      border-radius: 0;\n      width: 100%;\n      position: absolute;\n      top: 0;\n    }\n    &&&&&&.ui.dimmer {\n      padding: 0%;\n    }\n    &&&&&&.ui.scrolling.modal {\n      margin: 0;\n    }\n    height: 100%;\n    box-shadow: none;\n    margin: 0;\n  }\n"]);

    _templateObject3$2 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$3() {
    var data = _taggedTemplateLiteralLoose(["\n  &&& {\n    background: none;\n    color: #fff;\n    border: none;\n\n    color: rgba(255, 255, 255, 0.7);\n\n    i {\n      font-size: 15px;\n      color: black;\n    }\n\n    &:hover,\n    &:focus {\n      background: none;\n      color: #fff;\n    }\n  }\n"]);

    _templateObject2$3 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$5() {
    var data = _taggedTemplateLiteralLoose([""]);

    _templateObject$5 = function _templateObject() {
      return data;
    };

    return data;
  }
  var size$1 = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    signUp: '860px',
    desktop: '950px'
  };
  var commonModal = {
    borderRadius: '4px',
    boxShadow: '0 10px 26px 0 rgba(6, 52, 40, 0.1)',
    margin: '0 !important',
    padding: '0 !important'
  };
  var OnboardingCloseIcon = /*#__PURE__*/styled(semanticUiReact.Icon)( /*#__PURE__*/_templateObject$5());
  var OnboardingCloseButton = /*#__PURE__*/styled(semanticUiReact.Button)( /*#__PURE__*/_templateObject2$3());
  var OnboardingModal = /*#__PURE__*/styled(semanticUiReact.Modal)( /*#__PURE__*/_templateObject3$2());
  var OnboardingModalContent = /*#__PURE__*/styled(semanticUiReact.Modal.Content)( /*#__PURE__*/_templateObject4$2());
  var OnboardingHeaderItemWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject5$2());
  var OnboardingHeader = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject6$1(), size$1.mobileL);
  var OnboardingContentWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject7$1(), size$1.mobileL);
  var OnboardingImageWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject8$1(), size$1.mobileL);
  var OnboardingFormContent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject9$1(), size$1.mobileL);
  var OnboardingBloomContent = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject10$1());
  var OnboardingImage = /*#__PURE__*/styled.img( /*#__PURE__*/_templateObject11$1(), size$1.mobileL);
  var OnboardingTitle = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject12$1(), size$1.mobileL);
  var OnboardingSubTitle = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject13$1(), size$1.mobileL);
  var OnboardingTitleWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject14$1(), size$1.mobileL);
  var OnboardingSimpleModal = /*#__PURE__*/styled(semanticUiReact.Modal)( /*#__PURE__*/_templateObject15$1(), size$1.mobileL, size$1.mobileL);
  var ConfirmLogo = /*#__PURE__*/styled.img( /*#__PURE__*/_templateObject16$1());
  var ConfirmCros = /*#__PURE__*/styled(semanticUiReact.Icon)( /*#__PURE__*/_templateObject17$1());
  var ConfirmHeaderWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject18$1());
  var OnboardingWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject19$1());

  var BigSimpleModal = function BigSimpleModal(_ref) {
    var children = _ref.children,
        blur = _ref.blur,
        mountNode = _ref.mountNode,
        open = _ref.open,
        onClose = _ref.onClose,
        closeButton = _ref.closeButton;
    var dimmer = blur ? {
      dimmer: 'blurring'
    } : null;
    return React__default.createElement(OnboardingModal, Object.assign({}, dimmer, {
      open: open,
      mountNode: mountNode
    }), React__default.createElement(OnboardingModalContent, null, React__default.createElement(OnboardingHeader, null, React__default.createElement(OnboardingHeaderItemWrapper, null, React__default.createElement("img", {
      src: IMAGES_PATH + "logo.svg"
    })), React__default.createElement(OnboardingHeaderItemWrapper, null, closeButton && React__default.createElement(OnboardingCloseIcon, {
      link: true,
      onClick: onClose,
      name: "close",
      size: "large"
    }))), React__default.createElement(OnboardingContentWrapper, null, children)));
  };

  var PanelWithImage = function PanelWithImage(_ref) {
    var children = _ref.children,
        blur = _ref.blur,
        mountNode = _ref.mountNode,
        open = _ref.open,
        onClose = _ref.onClose,
        closeButton = _ref.closeButton;
    var dimmer = blur ? {
      dimmer: 'blurring'
    } : null;
    return React__default.createElement(OnboardingModal, Object.assign({}, dimmer, {
      open: open,
      mountNode: mountNode
    }), React__default.createElement(OnboardingModalContent, null, React__default.createElement(OnboardingHeader, null, React__default.createElement(OnboardingHeaderItemWrapper, null, React__default.createElement("img", {
      src: IMAGES_PATH + "logo.svg"
    })), React__default.createElement(OnboardingHeaderItemWrapper, null, closeButton && React__default.createElement(OnboardingCloseButton, {
      onClick: onClose,
      icon: "cancel"
    }))), React__default.createElement(OnboardingBloomContent, null, children)));
  };

  var PanelWithImage$1 = function PanelWithImage(_ref) {
    var children = _ref.children,
        title = _ref.title,
        blur = _ref.blur,
        mountNode = _ref.mountNode,
        open = _ref.open,
        onClose = _ref.onClose,
        closeButton = _ref.closeButton;
    var dimmer = blur ? {
      dimmer: 'blurring'
    } : null;
    return React__default.createElement(OnboardingModal, Object.assign({}, dimmer, {
      open: open,
      mountNode: mountNode ? mountNode : undefined
    }), React__default.createElement(OnboardingModalContent, {
      id: "process"
    }, React__default.createElement(OnboardingHeader, null, React__default.createElement(OnboardingHeaderItemWrapper, null, React__default.createElement("img", {
      src: IMAGES_PATH + "logo.svg"
    })), React__default.createElement(OnboardingHeaderItemWrapper, null, closeButton && React__default.createElement(OnboardingCloseIcon, {
      link: true,
      onClick: onClose,
      name: "close",
      size: "large"
    }))), React__default.createElement(OnboardingContentWrapper, null, React__default.createElement(OnboardingImageWrapper, null, React__default.createElement(OnboardingTitleWrapper, null, React__default.createElement(OnboardingTitle, null, title), React__default.createElement(OnboardingSubTitle, null, "The only marketplace that makes your money grow")), React__default.createElement(OnboardingImage, {
      className: "visual",
      src: IMAGES_PATH + "img_signin_raise.png"
    })), React__default.createElement(OnboardingFormContent, null, children))));
  };

  var SimpleModal = function SimpleModal(_ref) {
    var localClose = _ref.localClose,
        children = _ref.children,
        blur = _ref.blur,
        mountNode = _ref.mountNode,
        open = _ref.open,
        onClose = _ref.onClose,
        closeButton = _ref.closeButton;
    var dimmer = blur ? {
      dimmer: 'blurring'
    } : null;
    return React__default.createElement(OnboardingSimpleModal, Object.assign({}, dimmer, {
      style: commonModal,
      open: open,
      mountNode: mountNode
    }), React__default.createElement(OnboardingWrapper, null, React__default.createElement("div", {
      className: "process"
    }, React__default.createElement(ConfirmHeaderWrapper, null, React__default.createElement(ConfirmLogo, {
      src: IMAGES_PATH + "logo.svg"
    }), (closeButton || localClose) && React__default.createElement(ConfirmCros, {
      link: true,
      onClick: onClose,
      name: "close",
      size: "large"
    })), children)));
  };

  function _templateObject8$2() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 109px;\n  height: 14px;\n\n  font-family: Lato;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: #000000;\n"]);

    _templateObject8$2 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7$2() {
    var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: 6px;\n  width: 100%;\n  height: 8px;\n  margin-top: 20px;\n  position: absolute;\n  z-index: 999;\n  background: rgba(235, 63, 147, 0.3);\n  opacity: 10%;\n  border-radius: 100px;\n"]);

    _templateObject7$2 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$2() {
    var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: 6px;\n  width: ", ";\n  height: 8px;\n\n  background: rgb(235, 63, 147);\n  border-radius: 100px;\n  z-index: 1000;\n"]);

    _templateObject6$2 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$3() {
    var data = _taggedTemplateLiteralLoose(["\n  font-family: Lato;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 14px;\n\n  color: #000000;\n  margin-bottom: 6px;\n"]);

    _templateObject5$3 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$3() {
    var data = _taggedTemplateLiteralLoose(["\n  width: 36px;\n  height: 34.81px;\n"]);

    _templateObject4$3 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$3() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-left: 24px;\n  max-width: 384px;\n  width: 100%;\n  position: relative;\n"]);

    _templateObject3$3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$4() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  opacity: ", ";\n  align-items: center;\n  margin: 16px 0 16px 0px;\n  position: relative;\n"]);

    _templateObject2$4 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$6() {
    var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 0 24px;\n  width: 100%;\n  max-width: 444px;\n"]);

    _templateObject$6 = function _templateObject() {
      return data;
    };

    return data;
  }
  var ResumeContainer = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject$6());
  var CompanyContainer = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject2$4(), function (props) {
    return !props.comingSoon ? '30%;' : '';
  });
  var CompanyInfo = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject3$3());
  var CompanyIcon = /*#__PURE__*/styled.img( /*#__PURE__*/_templateObject4$3());
  var Percentage = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject5$3());
  var PercentageBar = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject6$2(), function (props) {
    return props.newWidth ? props.newWidth + "%" : '0%';
  });
  var PercentageBarBack = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject7$2());
  var CompanyName = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject8$2());

  var companyRes = function companyRes(topPercentage) {
    return function (company, index) {
      var width = 100;
      var newWidth = width * company.supplyRate / topPercentage;
      return React__default.createElement(CompanyContainer, {
        key: index,
        comingSoon: company.enabled
      }, React__default.createElement(CompanyIcon, {
        src: ERC20_LOGOS[company.logoUrl] || company.logoUrl
      }), React__default.createElement(CompanyInfo, null, React__default.createElement(Percentage, null, (company.enabled ? Number(company.supplyRate * 100).toFixed(2) : 0) + "%"), React__default.createElement(PercentageBarBack, {
        newWidth: width
      }), React__default.createElement(PercentageBar, {
        newWidth: company.enabled ? newWidth : 0
      }), React__default.createElement(CompanyName, null, company.name)));
    };
  };

  var printResumes = function printResumes(companies) {
    if (!companies.length) {
      return null;
    }

    var sortedCompanies = companies.filter(function (x) {
      return !!x && x.supplyRate >= 0;
    }).sort(function (companyA, companyB) {
      if (!companyA.enabled) {
        return 1;
      }

      return companyB.supplyRate - companyA.supplyRate;
    });
    return sortedCompanies.map(companyRes(sortedCompanies[0].supplyRate));
  };

  var LoanComparatorChart = function LoanComparatorChart(_ref) {
    var companies = _ref.companies;
    return React__default.createElement(ResumeContainer, null, printResumes(companies));
  };

  (function (AccountType) {
    AccountType[AccountType["Borrower"] = 1] = "Borrower";
    AccountType[AccountType["Lender"] = 2] = "Lender";
  })(exports.AccountType || (exports.AccountType = {}));

  var _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = /*#__PURE__*/Symbol("Symbol.iterator")) : "@@iterator"; // Asynchronously iterate through an object's values
  var _asyncIteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = /*#__PURE__*/Symbol("Symbol.asyncIterator")) : "@@asyncIterator"; // Asynchronously iterate on a value using it's async iterator if present, or its synchronous iterator if missing

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
    return "https://public.defipulse.com/api/GetRates" + (apiKey ? "?api-key=" + apiKey : '');
  };

  var useDefiPulse = function useDefiPulse(apiKey) {
    var _useState = React.useState([]),
        lendingRates = _useState[0],
        setLendingRates = _useState[1];

    useEffectAsync(function () {
      try {
        var _temp2 = _catch(function () {
          return Promise.resolve(axios$1.get(request(apiKey))).then(function (_ref) {
            var data = _ref.data;
            setLendingRates(data);
          });
        }, function () {});

        return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
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
    var maxInterestRate = Number(src_40(auction.maxInterestRate.toString())) / 100;
    var minInterestRate = auction.minInterestRate ? Number(src_40(auction.minInterestRate.toString())) / 100 : 0;
    var interest = 0;

    if (auction.state === 0 && !isAuctionExpired$1(auction)) {
      interest = (maxInterestRate - minInterestRate) * ((nowTimestamp - auction.auctionStartTimestamp) / (auction.auctionEndTimestamp - auction.auctionStartTimestamp)) + minInterestRate;
    } else if (auction.state === 2 || auction.state === 4) {
      interest = maxInterestRate;
    } else {
      interest = maxInterestRate;
    }

    return interest * 12;
  };

  var raiseGraph = /*#__PURE__*/graphql('https://api.thegraph.com/subgraphs/name/raisehq/raise', {
    asJSON: true
  });
  var raiseLoansQuery = "query($currentUnix: Int) {\n\tloans( where: { interestRate_gt: 0, state: 0, auctionEndTimestamp_gt: $currentUnix } ) {\n        state\n        operatorFee\n        interestRate\n        principal\n        termLength\n        minInterestRate\n        maxInterestRate\n        auctionStartTimestamp\n        auctionEndTimestamp\n        id\n\t}\n}";

  var average = function average(arr) {
    return arr.reduce(function (p, c) {
      return p + c;
    }, 0) / arr.length;
  };

  var getRaiseData = function getRaiseData() {
    try {
      return Promise.resolve(raiseGraph(raiseLoansQuery)({
        currentUnix: Math.trunc(new Date().getTime() / 1000)
      })).then(function (raise) {
        var raiseResponse = {
          supplyRate: average(raise.loans.map(function (auction) {
            return calculateInterest$1(auction);
          })).toString(),
          name: 'Raise',
          image: 'raise',
          logoUrl: COMPANY_LOGOS.Raise,
          tvl: raise.loans.reduce(function (total, _ref) {
            var principal = _ref.principal;
            return total + Number(src$3.fromWei(principal.toString().replace('.', '')));
          }, 0),
          term: 'short-term',
          custodial: false,
          collateralized: false,
          enabled: true,
          description: 'Raise is a loan marketplace that connects individuals with investment opportunities primarily in emerging countries.'
        };
        console.log(raiseResponse, raise.loans);
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

    useEffectAsync(function () {
      try {
        var _temp2 = _catch(function () {
          return Promise.resolve(getRaiseData()).then(function (data) {
            setRaiseCompany(data);
          });
        }, function () {});

        return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
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
    baseEach(collection, function (value, key, collection) {
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
      var daiData = defiPulseData.find(function (_ref) {
        var name = _ref.token.name;
        return name === 'DAI';
      });

      if (daiData) {
        var convertToCompanies = map(daiData.rates, function (_ref2) {
          var name = _ref2.name,
              rate = _ref2.lend.rate;
          return {
            name: name,
            supplyRate: Number(Number(rate).toFixed(2)) / 100,
            enabled: true,
            logoUrl: COMPANY_LOGOS[name] || null
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
    React.useEffect(function () {
      if (defiPulseData.length && raiseCompany && !companies.length) {
        var defiPulseCompanies = defiPulseToCompany(defiPulseData);
        setCompanies([raiseCompany].concat(defiPulseCompanies));
      }
    }, [defiPulseData, raiseCompany]);
    return companies;
  };

  exports.BigSimpleModal = BigSimpleModal;
  exports.Card = Card;
  exports.CardPlaceholder = CardPlaceholder;
  exports.Coin = Coin;
  exports.InvestCard = InvestCard;
  exports.InvestCardView = InvestCardView;
  exports.LoanComparatorChart = LoanComparatorChart;
  exports.Panel = PanelWithImage;
  exports.PanelWithImage = PanelWithImage$1;
  exports.Simple = SimpleModal;
  exports.useCompaniesScrapper = useCompaniesScrapper;
  exports.useDefiPulse = useDefiPulse;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=raisecomponents.umd.development.js.map
