import React, { useState } from "react";

import {ClothingColorPicker, SkinColorPicker} from "../colorPickers/ColorPickers";
import ConvertSkinCode from "../functions/ConvertSkinCode";
import ConvertClothingCode from "../functions/ConvertClothingCode";
import RenderCards from "../card/RenderCards";
import Header from "../header/Header";

export default function Greyman() {

  const [headwearColor, setHeadwearColor] = useState("");
  const [topColor, setTopColor] = useState("");
  const [pantsColor, setPantsColor] = useState("");
  const [shoesColor, setShoesColor] = useState("");

  const [clothingColorChoice, setClothingColorChoice] = useState("");
  const [clothingHexColor, setClothingColor] = useState({});

  const clothingColorList = {
    BLACK: "#181818",
    GREY: "#5e5e5e",
    WHITE: "#dbdbdb",
    BROWN: "#342a1c",
    GREEN: "#26341c",
    BLUE: "#1e2e54",
  };

  const [skinColorChoice, setSkinColorChoice] = useState("");
  const [skinColor, setSkinColor] = useState({});

  const skinColorList = [
    "#f5d0c5",
    "#f3e9dc",
    "#c08552",
    "#5e3023",
    "#895737",
    "#dab49d"
  ];

  return (
    <div>
    <Header />
      <div className="container-fluid">
        <center>
        <div class="row">

          <div className="col-md-4 clothing-color-picker">
          <ClothingColorPicker 
          heading={clothingColorChoice!=='' ? ConvertClothingCode(clothingColorChoice) : 'none selected'}
          colors={clothingColorList}
          color={clothingColorChoice}
          onChange={(updatedColor) => setClothingColorChoice(updatedColor.hex)}/>
          </div>

          <div className="col-md-4 model">
          <svg
          version="1.0"
          width="200"
          viewBox="0 0 451.000000 1000.000000"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">

              <g className="outline">
              <path d="m 2372.75,9700.0481 c -25,-8 -108,-29.9998 -185,-49.9998 -226,-57 -333,-131 -374,-257 -7,-21 -22,-46 -33,-56 -24,-23 -69,-183 -62,-220 4,-17 -2,-45 -15,-74 -29,-64 -27,-95 10,-133 35,-36 34,-41 -27,-121 -42,-54 -42,-78 -5,-130 27,-37 29,-45 27,-124 -2,-87 3,-109 36,-145 10,-11 20,-29 22,-40 15,-74 28,-105 54,-117 28,-14 96,-14 187,-2 70,10 78,-2 85,-123 4,-87 3,-98 -15,-115 -37,-35 -99,-65 -180,-87 -44,-12 -84,-26 -90,-30 -5,-4 -28,-13 -50,-20 -22,-7 -57,-23 -77,-36 -21,-13 -40,-24 -44,-24 -3,0 -36,-20 -73,-44 -75,-48 -103,-86 -119,-161 -15,-69 -34,-244 -31,-286 1,-19 -1,-50 -4,-69 -24,-145 -66,-501 -66,-550 0,-19 -3,-57 -7,-85 -4,-27 -8,-140 -10,-250 -4,-233 -7,-288 -22,-370 -6,-33 -14,-170 -17,-304 -4,-134 -11,-280 -16,-325 -5,-44 -16,-142 -25,-216 -18,-159 -19,-185 -10,-265 3,-33 8,-188 10,-345 3,-287 4,-296 46,-452 7,-24 7,-45 0,-63 -15,-38 -3,-161 25,-270 14,-54 26,-138 29,-210 12,-218 17,-278 22,-287 13,-21 24,-143 25,-268 1,-112 4,-143 21,-182 18,-42 19,-53 8,-122 -14,-91 -6,-252 15,-321 8,-28 18,-81 21,-120 3,-38 11,-86 17,-105 6,-19 9,-74 8,-121 -2,-89 16,-166 84,-357 l 26,-74 -26,-63 c -37,-93 -35,-183 5,-258 l 29,-55 -14,-79 c -9,-43 -22,-95 -30,-116 -11,-28.00002 -12,-43.00002 -5,-57.00002 9,-18 5,-23 -42,-45 -30,-14 -83,-52 -119,-84 -36,-33 -87,-69 -113,-82 -27,-12 -66,-40 -87,-62 -27,-27.99997 -64,-49.99997 -130,-76.99997 -112,-45 -165,-86 -171,-132 -7,-46 9,-96 36,-114 56,-36 287,-80 406,-77 188,5 288,11 298,17 7,4 70,9 140,12 111,4 250,14 361,27 45,5 78,44 87,103 5,38 2,58 -20,110 -14,36 -26,76 -26,90 0,14 -7,38 -15,53.99997 -8,15 -18,54 -21,84 -6,50 -4,59 16,81 23,24 23,25 5,64 -9,22 -14,45 -10,51 4,7 11,47.00002 16,89.00002 4,42 15,121 24,176 8,55 15,145 16,200 1,207 -3,329 -12,352 -5,14 -11,88 -14,166 -7,170 -21,362 -35,472 -5,44 -7,98 -4,121 3,22 -2,80 -11,128 -15,85 -15,90 4,149 10,34 22,91 26,125 3,35 11,76 17,90 5,15 11,65 12,112 2,69 -2,97 -22,148 -20,53 -22,67 -12,97 6,18 10,40 9,47 -2,7 0,25 4,40 4,15 2,39 -3,53 -8,20 -6,35 6,61 9,19 19,34 23,34 3,0 21,-44 39,-98 56,-166 123,-353 157,-442 19,-47 43,-117 54,-156 12,-40 28,-77 36,-84 8,-7 15,-20 15,-30 0,-25 37,-143 64,-204 27,-59 87,-270 86,-303 0,-41 40,-248 65,-338 50,-175 57,-201 71,-280 8,-44 17,-141 19,-215 2,-90 9,-150 20,-180 8,-24 22,-75 30,-113 9,-43 25,-83 44,-108 24,-34 28,-45 21,-72 -22,-86.00002 -30,-170.00002 -25,-255.00002 4,-52 10,-102.99997 14,-112.99997 9,-27 -5,-118 -41,-264 -32,-129 -32,-130 -30,-191 4,-79 68,-94.000003 384,-95.000003 202,0 252,7 299,41.000003 22,17 25,28 30,122 6,100 5,105 -23,154 -15,28 -28,63 -28,77 0,14 -4,37 -10,51 -5,15 -12,61 -14,104 -10,151.99997 -19,237.99997 -31,296.99997 -6,33 -8,73.00002 -4,90.00002 22,88 30,138 34,197 2,36 7,81 10,101 4,20 2,50 -4,67 -6,19 -7,40 -1,54 10,27 0,107 -31,251 -39,185 -56,278 -79,440 -5,38 -13,78 -16,88 -3,11 -7,31 -8,46 -2,14 -8,60 -14,101 -6,41 -16,116 -22,165 -6,50 -16,107 -21,127 -5,21 -7,48 -4,61 4,14 1,51 -5,83 -7,33 -11,80 -10,105 0,25 -4,68 -10,95 -7,27 -13,61 -15,76 -7,47 -35,176 -44,200 -12,32 -16,136 -7,175 4,20 3,47 -4,67 -6,19 -13,72 -15,118 -4,92 -21,234 -30,249 -4,5 -8,39 -10,77 -2,37 -14,104 -27,148 -16,54 -22,89 -16,103 4,12 10,50 13,84 3,34 10,77 16,95 7,20 8,44 3,60 -5,15 -9,81 -10,147 0,66 -4,144 -9,173 -5,36 -3,72 6,109 11,50 11,61 -5,106 -13,36 -15,52 -7,55 13,4 71,45 170,121 62,46 81,70 146,176 44,72 91,164 114,226 21,57 48,123 61,146 12,24 24,62 27,85 3,24 19,70 35,103 46,92 59,133 69,225 5,47 13,112 18,145 4,33 5,103 0,155 -4,52 -5,114 -2,136 3,23 0,58 -7,79 -7,20 -13,78 -15,128 -2,51 -11,121 -20,157 -10,36 -19,88 -21,117 -2,28 -8,64 -14,78 -19,49 -48,210 -43,236 5,29 -29,155 -58,208 -10,20 -19,39 -19,44 0,5 -18,34 -40,64 -22,31 -40,60 -40,64 0,14 -61,111 -96,152 -45,54 -127,109 -240,162 -54,26 -113,57 -131,71 -20,15 -45,24 -68,24 -30,0 -45,9 -101,66 -69,68 -104,129 -103,179 0,35 50,130 129,242 58,84 84,157 74,211 -5,25 0,41 20,72 30,45 49,119 40,155 -3,13 0,47 7,74 19,74 1,136 -66,235 -66,97 -156,192 -249,264 -57,44.9998 -76,53.9998 -120,57.9998 -28,3 -69,6 -91,8 -22,2 -60,-2 -85,-10 z"
                fill="#000000"/>
              </g>

              <g className="shoes"
              fill={clothingHexColor.shoes ? clothingHexColor.shoes : "#FFFFFF"}
              onClick={() => {
                setClothingColor({...clothingHexColor, shoes: clothingColorChoice,});
                setShoesColor(ConvertClothingCode(clothingColorChoice));
              }}>
              <path d="m 1750,894 c 19,-3 53,-7 75,-9 22,-2 63,-8 90,-12 28,-4 70,-7 95,-7 49,-1 60,-9 60,-45 0,-37 31,-153 46,-176 8,-11 14,-35 14,-55 0,-19 9,-55 20,-79 26,-57 25,-83 -5,-111 -20,-18 -35,-23 -74,-21 -27,1 -74,-5 -104,-13 -31,-8 -65,-12 -76,-9 -11,3 -35,0 -53,-6 -33,-11 -235,-22 -403,-23 -191,-1 -379,22 -444,55 -95,47 -66,100 94,168 68,29 111,54 135,79 19,20 62,51 94,69 33,18 84,55 115,83 30,27 80,62 112,77 31,16 66,35 78,43 17,12 31,14 59,6 20,-5 53,-11 72,-14 z m 1446,-95 191,3 13,-32 c 7,-18 15,-62 16,-99 6,-167 19,-237 53,-289 55,-86 55,-178 -1,-212 -59,-36 -163,-52 -293,-46 -232,11 -254,14 -288,44 -15,14 -17,25 -11,67 3,27 15,77 26,110 11,33 21,83 23,110 2,28 8,86 13,129 7,52 7,88 0,105 -10,28 -2,88 14,109 7,7 19,10 32,5 12,-3 107,-5 212,-4 z"/>
              </g>

              <g className="pants"
              fill={clothingHexColor.pants ? clothingHexColor.pants : "#FFFFFF"}
              onClick={() => {
                setClothingColor({...clothingHexColor,pants: clothingColorChoice,});
                setPantsColor(ConvertClothingCode(clothingColorChoice));
              }}>
              <path d="m 2688,5192 c 13,-31 29,-70 35,-87 17,-44 58,-103 114,-162 38,-41 56,-53 79,-53 35,0 68,30 85,78 13,38 26,41 41,7 8,-18 7,-44 -5,-110 -14,-76 -14,-91 -1,-128 9,-25 15,-75 14,-122 0,-44 2,-116 6,-161 5,-61 3,-93 -9,-130 -26,-81 -30,-134 -12,-184 16,-46 47,-199 47,-235 1,-46 20,-174 34,-224 13,-47 17,-128 12,-301 -1,-42 27,-207 43,-247 10,-26 34,-202 44,-318 13,-163 26,-268 40,-327 8,-36 13,-72 10,-80 -3,-8 2,-47 10,-88 9,-41 19,-96 21,-122 3,-26 11,-65 19,-87 7,-22 11,-48 8,-59 -3,-12 1,-45 7,-74 16,-68 28,-129 39,-198 5,-30 19,-107 31,-170 31,-162 26,-389 -11,-527 -6,-23 -9,-47 -7,-55 3,-7 1,-23 -3,-36 -6,-15 -4,-46 5,-83 11,-48 11,-61 0,-70 -9,-7 -64,-9 -171,-5 -87,4 -184,6 -217,6 h -58 l 6,67 c 12,115 7,184 -14,210 -10,14 -27,59 -36,101 -9,42 -23,89 -31,104 -9,19 -15,78 -17,190 -4,170 -1,154 -75,418 -34,121 -50,198 -65,315 -15,113 -41,215 -96,370 -17,50 -38,113 -47,140 -8,28 -20,56 -27,64 -11,13 -15,28 -51,161 -9,36 -25,81 -35,100 -24,47 -66,158 -74,194 -4,15 -16,47 -26,70 -11,22 -26,64 -34,91 -20,70 -75,235 -90,265 -22,48 -50,38 -89,-33 -33,-60 -34,-67 -28,-130 4,-36 4,-74 0,-85 -10,-27 5,-166 26,-234 17,-57 17,-57 -9,-136 -14,-44 -26,-102 -26,-129 0,-28 -7,-70 -15,-94 -29,-80 -30,-148 -5,-243 21,-78 22,-91 10,-140 -7,-30 -10,-72 -6,-97 4,-24 13,-126 20,-227 8,-101 19,-195 24,-210 5,-15 7,-43 6,-62 -2,-19 2,-105 7,-190 6,-85 11,-159 10,-165 -1,-5 -5,-71 -11,-145 -5,-74 -17,-181 -26,-238 -9,-56 -14,-119 -11,-139 8,-47 -18,-107 -42,-97 -9,4 -41,9 -71,11 -30,2 -73,6 -95,8 -243,28 -293,41 -280,73 9,25 35,173 35,205 0,15 -11,50 -25,77 -29,57 -35,162 -11,208 29,58 28,118 -4,201 -60,154 -74,231 -80,421 0,14 -10,79 -22,145 -44,256 -46,275 -35,378 8,83 7,109 -8,170 -10,42 -19,119 -20,187 -2,63 -5,131 -8,150 -23,148 -28,203 -32,353 -3,93 -7,172 -10,176 -27,45 -74,367 -60,412 4,11 -1,44 -9,73 -18,59 -39,295 -36,391 5,165 4,246 -3,305 -13,106 -10,132 19,158 15,13 40,23 62,23 113,5 203,15 247,29 34,10 103,19 185,25 30,2 105,13 165,24 61,11 169,30 240,41 157,24 295,54 367,80 84,29 90,28 116,-38 z"/>
              </g>

              <g className="top"
              fill={clothingHexColor.top ? clothingHexColor.top : "#FFFFFF"}
              onClick={() => {
                setClothingColor({ ...clothingHexColor, top: clothingColorChoice });
                setTopColor(ConvertClothingCode(clothingColorChoice));
              }}>
              <path d="m 2957,8074 c 19,-14 62,-37 95,-51 155,-63 270,-151 318,-243 34,-66 56,-105 92,-161 40,-60 85,-195 92,-274 2,-27 13,-84 24,-125 23,-88 44,-205 44,-240 0,-14 7,-50 16,-80 9,-30 17,-82 18,-115 1,-33 7,-103 13,-155 7,-52 11,-104 11,-115 -1,-11 -1,-56 -1,-100 1,-101 -25,-323 -46,-395 -9,-30 -24,-68 -34,-85 -22,-37 -49,-114 -49,-138 0,-10 -15,-49 -33,-85 -19,-37 -40,-85 -47,-107 -18,-55 -73,-164 -132,-261 -42,-69 -63,-92 -143,-152 -52,-39 -109,-79 -127,-88 -62,-31 -98,-65 -124,-117 l -26,-51 -26,29 c -13,17 -53,60 -87,97 -61,66 -63,69 -75,148 -13,82 -13,82 12,107 14,14 50,37 79,52 45,22 58,35 79,77 14,28 35,63 48,79 12,15 22,34 22,42 0,8 18,31 41,51 35,32 40,41 35,68 -5,24 0,41 24,75 16,24 33,60 36,79 8,43 29,86 60,123 30,36 30,48 -1,77 -46,43 -33,66 110,200 55,51 102,97 103,102 2,5 -2,15 -8,23 -11,13 -17,12 -49,-11 -20,-15 -55,-45 -78,-67 -24,-23 -45,-38 -48,-36 -2,3 -7,59 -9,125 -5,134 -6,136 -72,329 l -49,140 3,120 c 2,66 4,143 5,170 0,28 0,95 -2,150 -1,55 2,145 8,200 9,84 8,102 -4,115 -13,13 -17,12 -31,-1 -16,-16 -29,-172 -25,-294 4,-129 0,-256 -10,-317 -9,-59 -8,-78 11,-155 13,-48 41,-140 63,-203 35,-102 40,-127 42,-217 2,-56 8,-124 15,-151 12,-46 12,-52 -10,-82 -29,-41 -43,-122 -28,-156 9,-20 8,-31 -4,-52 -9,-15 -19,-46 -23,-69 -4,-24 -24,-68 -46,-100 -28,-42 -39,-69 -39,-95 0,-29 -6,-42 -29,-60 -17,-13 -39,-43 -51,-68 -61,-131 -87,-161 -147,-174 -19,-5 -42,-21 -58,-42 -40,-53 -59,-61 -236,-104 -90,-23 -191,-49 -224,-59 -65,-20 -177,-38 -294,-47 -41,-3 -97,-10 -125,-16 -84,-17 -211,-36 -217,-32 -4,2 -31,-1 -60,-7 -30,-6 -67,-12 -84,-14 -16,-1 -59,-8 -95,-14 -85,-13 -97,-4 -75,59 9,26 15,72 14,110 -2,70 17,154 49,216 11,22 25,64 31,94 6,30 18,87 26,125 9,39 20,93 25,120 6,28 31,115 57,195 30,93 47,167 49,205 1,33 10,80 19,105 10,25 21,88 25,140 4,56 14,108 23,127 31,59 59,203 52,265 -5,46 -2,67 15,106 l 21,49 -33,64 c -29,55 -34,72 -31,119 9,130 9,125 -13,128 -18,3 -23,-4 -33,-45 -10,-45 -10,-64 3,-167 2,-21 14,-52 27,-69 19,-26 20,-35 11,-61 -6,-17 -14,-67 -18,-111 -8,-94 -25,-178 -54,-258 -11,-31 -23,-92 -26,-135 -4,-42 -15,-103 -26,-135 -12,-37 -16,-70 -12,-91 4,-25 -9,-78 -49,-207 -30,-96 -61,-204 -67,-242 -16,-90 -33,-98 -24,-10 7,59 7,111 5,303 -1,52 8,280 15,400 3,58 7,130 9,160 1,30 10,98 18,150 8,52 18,131 22,175 3,44 13,114 21,157 8,42 15,93 14,115 0,21 7,108 15,193 21,199 38,242 122,296 100,65 213,115 326,144 82,22 116,36 143,60 23,20 40,28 47,22 30,-23 109,-35 156,-24 25,6 71,10 102,10 91,-1 342,72 454,133 38,21 76,39 84,39 8,0 29,-12 48,-26 z"/>
              </g>

              <g className="skin"
              fill={skinColor.skin ? skinColor.skin : "#FFFFFF"}
              onClick={() => {
                setSkinColor({...skinColor, skin: skinColorChoice,});
              }}>
              <path d="m 1930,9015 c 30,-8 105,-26 165,-40 61,-14 130,-32 155,-39 25,-8 90,-24 145,-36 55,-12 116,-28 135,-35 19,-8 49,-14 65,-13 17,0 58,-5 93,-12 48,-9 73,-10 108,-1 25,6 49,9 55,6 30,-19 -12,-133 -76,-204 -52,-58 -102,-147 -115,-203 -9,-42 -8,-60 6,-102 19,-58 80,-145 124,-178 17,-12 30,-25 30,-28 0,-12 -117,-70 -191,-95 -39,-14 -99,-29 -132,-35 -34,-6 -89,-18 -122,-26 -43,-10 -82,-12 -140,-6 l -80,7 -18,70 c -12,48 -16,91 -13,138 4,58 2,71 -14,87 -30,30 -63,33 -144,13 -91,-23 -131,-13 -142,34 -13,60 -27,99 -42,116 -20,22 -33,122 -21,154 10,27 -7,79 -34,102 -25,20 -21,37 23,103 50,75 51,106 8,147 l -32,30 17,37 18,37 57,-7 c 31,-4 82,-13 112,-21 z"/>
              </g>

              <g className="headwear"
              fill={clothingHexColor.headwear ? clothingHexColor.headwear : "#FFFFFF"}
              onClick={() => {
                setClothingColor({...clothingHexColor, headwear: clothingColorChoice,});
                setHeadwearColor(ConvertClothingCode(clothingColorChoice));
              }}>
              <path d="m 2529,9670 c 35,-10 126,-75 194,-139 52,-48 141,-168 177,-237 34,-64 43,-160 15,-170 -7,-3 -54,6 -102,20 -48,14 -116,30 -151,35 -34,6 -66,12 -70,15 -5,3 -39,8 -77,11 -38,4 -76,10 -86,15 -9,5 -34,14 -55,19 -22,6 -86,24 -144,41 -58,16 -140,34 -183,40 -114,14 -187,32 -187,48 0,26 40,89 72,113 87,66 168,99 353,148 44,11 103,27 130,35 63,18 73,18 114,6 z m -460,-401 c 36,-10 76,-19 88,-19 12,0 70,-17 130,-37 59,-20 128,-40 153,-44 84,-14 215,-39 257,-49 65,-16 214,-67 225,-78 13,-13 -34,-104 -69,-132 -25,-19 -38,-21 -128,-19 -55,1 -116,5 -135,10 -19,4 -78,18 -130,30 -52,12 -133,33 -180,46 -47,14 -115,31 -152,38 -37,8 -102,25 -145,38 -43,14 -103,28 -133,32 -30,4 -63,12 -73,17 -20,11 -19,27 15,136 l 19,63 96,-7 c 52,-3 125,-15 162,-25 z"/>
              </g>

            </g>
          </svg>
          <RenderCards headwearColor={headwearColor} topColor={topColor} pantsColor={pantsColor} shoesColor={shoesColor} techwearStyle="greyman" />
          </div>
          
          <div className="col-md-4 skin-color-picker">
          <SkinColorPicker
          heading = {skinColorChoice!=='' ? ConvertSkinCode(skinColorChoice) : 'none selected'}
          colors = {skinColorList}
          color = {skinColorChoice}
          onChange = {(updatedColor) => setSkinColorChoice(updatedColor.hex)}
          />
          </div>
        
        </div>
      </center>
      </div>
    </div>
  );
}