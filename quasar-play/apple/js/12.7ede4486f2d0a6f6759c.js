webpackJsonp([12,95],{171:function(a,e,t){var n,i;n=t(245);var r=t(413);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,a.exports=n},245:function(a,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}function i(){return m[Math.floor(Math.random()*m.length)]}function r(){if(Math.floor(50*Math.random())%3===0)return Math.floor(10*Math.random())+" min"}function s(){if(Math.floor(50*Math.random())%4===0)return"UID: "+l.Utils.uid().substring(0,8)}function o(){return d.default.map(function(a){return{label:a,secondLabel:s(),icon:i(),stamp:r(),value:a}})}Object.defineProperty(e,"__esModule",{value:!0});var l=t(2),u=t(338),d=n(u),m=["alarm","email","search","build","card_giftcard","perm_identity","receipt","schedule","speaker_phone","archive","weekend","battery_charging_full"];e.default={data:function(){return{terms:"",countries:o()}},methods:{search:function(a,e){setTimeout(function(){e(l.Utils.filter(a,{field:"value",list:o()}))},1e3)}}}},338:function(a,e){a.exports=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","England","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji Islands","Finland","France","French Guiana","French Polynesia","French Southern territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Ireland","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Scotland","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","SriLanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wales","Wallis and Futuna","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]},413:function(a,e){a.exports={render:function(){var a=this,e=(a.$createElement,a._c);return e("div",[e("div",{staticClass:"layout-padding",staticStyle:{"max-width":"600px"}},[a._m(0),a._v(" "),e("q-autocomplete",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],attrs:{"set-width":""},domProps:{value:a.terms},on:{search:a.search,input:function(e){a.terms=e}}},[e("q-search",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],attrs:{placeholder:"Start typing a country name"},domProps:{value:a.terms},on:{input:function(e){a.terms=e}}})],1),a._v(" "),e("br"),a._v(" "),e("p",{staticClass:"caption"},[a._v("Maximum of 2 results at a time")]),a._v(" "),e("q-autocomplete",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],attrs:{"set-width":"","max-results":2},domProps:{value:a.terms},on:{search:a.search,input:function(e){a.terms=e}}},[e("q-search",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],domProps:{value:a.terms},on:{input:function(e){a.terms=e}}})],1),a._v(" "),e("br"),a._v(" "),e("p",{staticClass:"caption"},[a._v("Minimum 3 characters to trigger search")]),a._v(" "),e("q-autocomplete",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],attrs:{minCharacters:3},domProps:{value:a.terms},on:{search:a.search,input:function(e){a.terms=e}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],staticClass:"full-width",attrs:{placeholder:"Type 'fre'"},domProps:{value:a._s(a.terms)},on:{input:function(e){e.target.composing||(a.terms=e.target.value)}}})]),a._v(" "),e("br"),a._v(" "),e("p",{staticClass:"caption"},[a._v("Fills with its own input field (check source)")]),a._v(" "),e("q-autocomplete",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],domProps:{value:a.terms},on:{search:a.search,input:function(e){a.terms=e}}}),a._v(" "),e("br"),a._v(" "),e("p",{staticClass:"caption"},[a._v("Static List")]),a._v(" "),e("q-autocomplete",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],attrs:{"set-width":"","static-data":{field:"value",list:a.countries}},domProps:{value:a.terms},on:{input:function(e){a.terms=e}}},[e("q-search",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],attrs:{placeholder:"Featuring static data"},domProps:{value:a.terms},on:{input:function(e){a.terms=e}}})],1),a._v(" "),e("br"),a._v(" "),e("p",{staticClass:"caption"},[a._v("Delimiter between results")]),a._v(" "),e("q-autocomplete",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],attrs:{"set-width":"",delimiter:""},domProps:{value:a.terms},on:{search:a.search,input:function(e){a.terms=e}}},[e("q-search",{directives:[{name:"model",rawName:"v-model",value:a.terms,expression:"terms"}],domProps:{value:a.terms},on:{input:function(e){a.terms=e}}})],1)],1)])},staticRenderFns:[function(){var a=this,e=(a.$createElement,a._c);return e("p",{staticClass:"caption",staticStyle:{"margin-bottom":"40px"}},[a._v("\n      These examples feature countries autocomplete."),e("br"),a._v("\n      On desktop, Escape key closes the suggestions popover and you can navigate with keyboard arrow keys. Selection is made with either mouse/finger tap or by Enter key.\n    ")])}]}}});