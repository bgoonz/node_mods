"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openWindow = void 0;
var openWindow = function (url, opt) {
    var title = opt.title, options = __rest(opt, ["title"]);
    var target = opt.target;
    var str = Object.keys(options)
        .filter(function (key) { return options[key] !== undefined; })
        .map(function (key) { return key + "=" + options[key]; })
        .join(',');
    if (target === '_self') {
        // for app wrappers we need to open the system browser
        if (typeof document === 'undefined' || (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1)) {
            target = '_system';
        }
    }
    if (typeof open !== 'undefined') { // eslint-disable-line no-restricted-globals
        return open(url, (target || title), str); // eslint-disable-line no-restricted-globals
    }
    return null;
};
exports.openWindow = openWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbldpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlsL29wZW5XaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFhTyxJQUFNLFVBQVUsR0FBc0IsVUFBQyxHQUFXLEVBQUUsR0FDc0I7SUFDdkUsSUFBQSxLQUFLLEdBQWlCLEdBQUcsTUFBcEIsRUFBSyxPQUFPLFVBQUssR0FBRyxFQUEzQixTQUFxQixDQUFGLENBQVM7SUFDNUIsSUFBQSxNQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7SUFFckIsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDN0IsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBMUIsQ0FBMEIsQ0FBQztTQUMzQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBRyxHQUFHLFNBQUksT0FBTyxDQUFDLEdBQUcsQ0FBRyxFQUF4QixDQUF3QixDQUFDO1NBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUViLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtRQUN0QixzREFBc0Q7UUFDdEQsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFILE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDcEI7S0FDRjtJQUVELElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFLEVBQUUsNENBQTRDO1FBQzdFLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLDRDQUE0QztLQUN2RjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsVUFBVSxjQXNCckIifQ==