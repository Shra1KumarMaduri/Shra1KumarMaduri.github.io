'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e2e3dadaee6353ebcdc2eaa74dc403ac",
"index.html": "eb488b020bf6dd6438488ac794a544d1",
"/": "eb488b020bf6dd6438488ac794a544d1",
"main.dart.js": "fdd7dac5edd5c96981d525a1c915f95b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83db7f3b62b77ab7e556972d86b7d588",
"assets/AssetManifest.json": "0165490644a44212e97b4ac62a098880",
"assets/NOTICES": "5152c2cadd0fdf585f66fea2bff3574d",
"assets/FontManifest.json": "35cd3394477070ef2ca2d1a179c824bf",
"assets/nooor_pdf_library/fonts/noorv2.ttf": "2cdc6ec9a8542abbd1a7b6bdadc7febf",
"assets/packages/nooor_lib/images/stroke1.svg": "f4a54a6a67e3eb1df30eeffd8f234aba",
"assets/packages/nooor_lib/images/t1.png": "1833e01048205204b15e6c8527bcd216",
"assets/packages/nooor_lib/images/eraser.svg": "27897d478208c578fdf5826fddd6b1de",
"assets/packages/nooor_lib/images/check-square.svg": "0ca553afdeb82ea6f65ae46980c41dd1",
"assets/packages/nooor_lib/images/scale.png": "a1f2334fa5aca530592477320e2b1d6a",
"assets/packages/nooor_lib/images/stroke0.svg": "58212fbb7a490035df10db029ca61fe3",
"assets/packages/nooor_lib/images/stroke2.svg": "d4fd69580a51dcb589468a34ed85e586",
"assets/packages/nooor_lib/images/t2.png": "ed8a870b0f7f923a11c0f991ddd823e8",
"assets/packages/nooor_lib/images/preview.png": "eafd562003a5e7620b14f469d06a7037",
"assets/packages/nooor_lib/images/stroke3.svg": "1351c4078e020e4a313b6156443cc627",
"assets/packages/nooor_lib/images/clear_all_icon.svg": "55934437b9fd2fefaa343390802603a4",
"assets/packages/nooor_lib/images/opacity_icon.svg": "a6a840c671ec4e852ab37fd1fc2f6fc4",
"assets/packages/nooor_lib/images/Icon%2520ionic-ios-close.svg": "c2f19c90a3c41a37c67fb470941a312c",
"assets/packages/nooor_lib/images/Polygon%25206.svg": "03c9acabbe76f0b1ca99f49280a88322",
"assets/packages/nooor_lib/images/stroke4.svg": "a033235271cbf615f7c976f06edef405",
"assets/packages/nooor_lib/images/strokeicon.svg": "49b993b68f86835495b9ef45516d4957",
"assets/packages/nooor_lib/images/drag.png": "3a016903e73df500fe625b7ab8a3c0e5",
"assets/packages/nooor_lib/images/pen_icon.png": "f682ea331c77748f97f793ec60fc0b0b",
"assets/packages/nooor_lib/images/colorwheel.png": "c360d09e9a7a046c6396e0e8b4313cd3",
"assets/packages/nooor_lib/images/Join.svg": "8581da8135078dcec78e3d44923dad5e",
"assets/packages/nooor_lib/images/user-times.svg": "e1f7b79130d7feb5cc8d38e79dd11eb4",
"assets/packages/nooor_lib/images/ruler.svg": "fde7a0a632d5a423ea163558958c848b",
"assets/packages/nooor_lib/images/rule_page.png": "9ce05f562941c60bee6232c8a52b56be",
"assets/packages/nooor_lib/images/eraser.png": "50af5dc1895d2fac5309c6812516639d",
"assets/packages/nooor_lib/images/email.jpeg": "e638d3db4fea3e0a0e00f05bcaec2083",
"assets/packages/nooor_lib/images/Icon%2520ionic-ios-arrow-back.svg": "6279cdf5322d3c56567ab6b1c32e82b0",
"assets/packages/nooor_lib/images/highlighter.svg": "8f27aef62f2206b785a647846d083980",
"assets/packages/nooor_lib/images/pencil.svg": "505ffb4926c93ec8757cc32ec798e1bf",
"assets/packages/nooor_lib/images/ruled_page_icon.svg": "176ab0e2d27b66f2b4885ae0ff5b8f38",
"assets/packages/nooor_lib/images/Polygon%25208.svg": "4953f067d6f8ea045928e44327a41dd6",
"assets/packages/nooor_lib/images/clear_all.png": "bbd2a256e57a163fe9298f9d10a281f9",
"assets/packages/nooor_lib/images/youtube.jpg": "a330f58d2b404973ca09e82abedd94fb",
"assets/packages/nooor_lib/images/edit.png": "53ec79dd52a993325db1264e0919d1b7",
"assets/packages/nooor_lib/images/2.png": "f0a68d3a32a1a76295e33538634432ae",
"assets/packages/nooor_lib/images/whatsapp.jpeg": "7a563b1f0ebd6f8366c51f8602df6ede",
"assets/packages/nooor_lib/images/penn.svg": "f4f9e6c85b6d0fba41967e9aa7df5727",
"assets/packages/nooor_lib/images/3.png": "acce3e345ec9274d295738223c80a623",
"assets/packages/nooor_lib/images/Icon%2520material-access-time.svg": "7bf6ccb720962d50f1d7d433eebcba6e",
"assets/packages/nooor_lib/images/user-slash.svg": "0d7396f0bbd15901ff33f448cff26280",
"assets/packages/nooor_lib/images/1.png": "67e9a4a9eed4d8070cc3996612b324a1",
"assets/packages/nooor_lib/images/pencil_icon.png": "6f6f5a74af084f6d4dac6095dce03496",
"assets/packages/nooor_lib/images/pen_icon_active.png": "4db24947b24a09dbf05563cf9b513779",
"assets/packages/nooor_lib/images/marker.png": "c6edfa80753e961c0b89035e165824fd",
"assets/packages/nooor_lib/images/0.png": "435f9af02c481294ede78283b86cf104",
"assets/packages/nooor_lib/images/close.png": "f40b1c1eb307b1234080f1e9d41dd7c1",
"assets/packages/nooor_lib/fonts/Segoe%2520UI%2520Bold.ttf": "65099f98c7cb19b3dac57b15a6a708cf",
"assets/packages/nooor_lib/fonts/Segoe%2520UI.ttf": "0e7e9a9b5c4abaadef7bc8f4e4574084",
"assets/packages/nooor_lib/fonts/Segoe%2520UI%2520Bold%2520Italic.ttf": "676a12075e14377f6f44a3e29b4d72af",
"assets/packages/nooor_lib/fonts/Segoe%2520UI%2520Italic.ttf": "5eb716ee36ae3ea66de512bcb63af3d8",
"assets/packages/nooor_lib/assets/sample_data2.json": "674e255293f0a5527a38fe370ddc68c9",
"assets/packages/nooor_lib/assets/sample_data.json": "5735cffc1a1f07b616b4131d16a6d4b2",
"assets/packages/nooor_lib/assets/translations/en.json": "4226fa907c8d578a9fbdbee3a4a56c15",
"assets/packages/nooor_lib/assets/translations/ar.json": "3396e512c06315f30d4fd777e1b8c2b6",
"assets/packages/nooor_editor/assets/notepad_img.png": "e2796c593dfd9a2dbaf67b004bf9072f",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/drawing/images/stroke1.svg": "f4a54a6a67e3eb1df30eeffd8f234aba",
"assets/packages/drawing/images/eraser.svg": "27897d478208c578fdf5826fddd6b1de",
"assets/packages/drawing/images/stroke0.svg": "58212fbb7a490035df10db029ca61fe3",
"assets/packages/drawing/images/stroke2.svg": "d4fd69580a51dcb589468a34ed85e586",
"assets/packages/drawing/images/stroke3.svg": "1351c4078e020e4a313b6156443cc627",
"assets/packages/drawing/images/opacity_icon.svg": "a6a840c671ec4e852ab37fd1fc2f6fc4",
"assets/packages/drawing/images/stroke4.svg": "a033235271cbf615f7c976f06edef405",
"assets/packages/drawing/images/strokeicon.svg": "49b993b68f86835495b9ef45516d4957",
"assets/packages/drawing/images/drag.png": "3a016903e73df500fe625b7ab8a3c0e5",
"assets/packages/drawing/images/colorwheel.png": "c360d09e9a7a046c6396e0e8b4313cd3",
"assets/packages/drawing/images/ruler.svg": "fde7a0a632d5a423ea163558958c848b",
"assets/packages/drawing/images/highlighter.svg": "8f27aef62f2206b785a647846d083980",
"assets/packages/drawing/images/pencil.svg": "505ffb4926c93ec8757cc32ec798e1bf",
"assets/packages/drawing/images/penn.svg": "f4f9e6c85b6d0fba41967e9aa7df5727",
"assets/packages/drawing/assets/launch_config.json": "9de633c24bdb0699c39da8813d6e9274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/semanoor_links/assets/recom_strip.png": "6f9bbe4c3a96940c8bbc94c719fffb7a",
"assets/packages/semanoor_links/assets/emoji_style.json": "b21187065be979fe2dc51cc9a95b3b12",
"assets/packages/semanoor_links/assets/emoji_smileys/smile11.png": "7324ac9e4d92c0cc709ed0da210f360d",
"assets/packages/semanoor_links/assets/emoji_smileys/smile10.png": "1d1e60722f86d3fb8180134517c00f37",
"assets/packages/semanoor_links/assets/emoji_smileys/smile12.png": "84b4777f8060e725316be3a667aae1d8",
"assets/packages/semanoor_links/assets/emoji_smileys/smile13.png": "f5b04886dae482f80fa7ac3c2a56630a",
"assets/packages/semanoor_links/assets/emoji_smileys/smile9.png": "c3ee3f7004f13c3e2aa0909d1e54acbf",
"assets/packages/semanoor_links/assets/emoji_smileys/smile8.png": "667d3ec056299cfb530c29cd4caa3287",
"assets/packages/semanoor_links/assets/emoji_smileys/smile14.png": "81b6ee4bba98462a38de49ea2e88b94c",
"assets/packages/semanoor_links/assets/emoji_smileys/smile6.png": "cda9dc516055c00bb75e9d9f47287f12",
"assets/packages/semanoor_links/assets/emoji_smileys/smile7.png": "666d1a2337a0ff85806699571ed4ede6",
"assets/packages/semanoor_links/assets/emoji_smileys/smile5.png": "be30458a8f372fc9eccfd2640cfbcd7e",
"assets/packages/semanoor_links/assets/emoji_smileys/smile4.png": "6adf0fcb27ace8a05984f0193980b377",
"assets/packages/semanoor_links/assets/emoji_smileys/smile1.png": "126432823995708f73ef0814e8f6b973",
"assets/packages/semanoor_links/assets/emoji_smileys/smile3.png": "9017dad3ee65be60876f1e61afba4c9d",
"assets/packages/semanoor_links/assets/emoji_smileys/smile2.png": "5775fb7cace44ade41ff5367a0dd80be",
"assets/packages/semanoor_links/assets/colorbutton.png": "1675c65200e33924a699b7233984a9eb",
"assets/packages/semanoor_links/assets/noorv2.ttf": "2cdc6ec9a8542abbd1a7b6bdadc7febf",
"assets/packages/semanoor_links/assets/emojis.json": "293ec65bdae381d4639a30aa7a10e962",
"assets/packages/semanoor_links/assets/add_link_data.json": "cf7f6c064bb5afc4d4016647d2a8ba11",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/nooor_pdf_library/fonts/noorv2.ttf": "2cdc6ec9a8542abbd1a7b6bdadc7febf",
"assets/packages/nooor_pdf_library/assets/recom_strip.png": "6f9bbe4c3a96940c8bbc94c719fffb7a",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile11.png": "7324ac9e4d92c0cc709ed0da210f360d",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile10.png": "1d1e60722f86d3fb8180134517c00f37",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile12.png": "84b4777f8060e725316be3a667aae1d8",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile13.png": "f5b04886dae482f80fa7ac3c2a56630a",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile9.png": "c3ee3f7004f13c3e2aa0909d1e54acbf",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile8.png": "667d3ec056299cfb530c29cd4caa3287",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile14.png": "81b6ee4bba98462a38de49ea2e88b94c",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile6.png": "cda9dc516055c00bb75e9d9f47287f12",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile7.png": "666d1a2337a0ff85806699571ed4ede6",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile5.png": "be30458a8f372fc9eccfd2640cfbcd7e",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile4.png": "6adf0fcb27ace8a05984f0193980b377",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile1.png": "126432823995708f73ef0814e8f6b973",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile3.png": "9017dad3ee65be60876f1e61afba4c9d",
"assets/packages/nooor_pdf_library/assets/emoji_smileys/smile2.png": "5775fb7cace44ade41ff5367a0dd80be",
"assets/packages/nooor_pdf_library/assets/tabbar/tabbar_list.json": "ac3f45d2a52c4e9689920e6ec2cc0fb8",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Translate.svg": "e327b575f7a763eb5ae96db69fa43f82",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Google%2520Sheet.svg": "3bf0d5bcca76d52e81822247eb40bf2f",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Questions.svg": "2930442e1ada8ac3bce24a0b498826a2",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Drawing.svg": "b057d9769a65c5d0aedcffa9ec5765ab",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Blank_Advanced_Tab.svg": "decc2947207e6e156db886adce740dbe",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Basic%2520Page.svg": "9cc5a3209f416752cdc710a2560f5435",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Image%2520Gallery.svg": "eb5d81afc7e2ee5bb5c1e7a080db4510",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Flashcard.svg": "f46a6b754186fd6b61539b3b4ba51f71",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/QR%2520Codes.svg": "7671ad53295181332c6be581ef224e5b",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Quiz.svg": "55f2df943c482e7442bf9e00b3acaeb1",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Advanced%2520Page.svg": "97ea13bb72609661d9e4a98fd0d4f74c",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Page%2520from%2520Book.svg": "0a5fc51c0f323ed5a5392fca5660c16c",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Video%2520Gallery.svg": "49a750903594f0573324d0df203520c8",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Google.svg": "09aea0f59807f6f4f66af7f5719cba9e",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Internet%2520search.svg": "dda6a7585b4cdd877d7b5210abb5ccdf",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Google%2520Maps.svg": "197c485d19b2f4638f6a9243a861a208",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Template.svg": "a98733890c2305c27ecf9efbd7aa4116",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Google%2520Slides.svg": "412a5d2c9e29ef933fc587b3f81a3368",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Youtube.svg": "a51ab7ed010a415170cd93a2a29d96dd",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Duplicate%2520as%2520Image.svg": "fb9f61a13779261e42d62cc63de4122c",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Exercise.svg": "75f3392fddb3e2987b5a23bbe75d1534",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Google%2520Calendar.svg": "16038db539a096bc5635482c2ba3870b",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Mindmap.svg": "7112c14a5caa4d0513798cf3d2e7d6a2",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Google%2520Docs.svg": "c51d869bf48f16363c841fc6bab649e5",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Duplicate%2520as%2520Page.svg": "c7122ed3241526374e5483f10e39eb4b",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/Audio%2520Gallery.svg": "86ca2d0772591b9bcee1c919002cb4e0",
"assets/packages/nooor_pdf_library/assets/tabbar/tabicons/OCR.svg": "b8bda360678f493086b035f25b6e1903",
"assets/packages/nooor_pdf_library/assets/tabbar/add_tab.json": "1413849f8a00338d09ec671e1cec9d7d",
"assets/packages/nooor_pdf_library/assets/colorbutton.png": "1675c65200e33924a699b7233984a9eb",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_quill_semanoor/assets/nativedata2.json": "9bb487d38a5e1c982edcf2beda0b0b37",
"assets/packages/flutter_quill_semanoor/assets/audio2.mp3": "ab3f11fb3af7eea9fba157c7537f1f03",
"assets/packages/flutter_quill_semanoor/assets/sample_data2.json": "c13553deb54438ed5190210b6109f543",
"assets/packages/flutter_quill_semanoor/assets/launch_config.json": "cb0741bdfddbb8c559f8e0922d73901a",
"assets/packages/flutter_quill_semanoor/assets/messenger.mp3": "225fa2111f3495aa546500c8e5e382d6",
"assets/packages/flutter_quill_semanoor/assets/sample.mp3": "0c481e87f2774b1bd41a0a70d9b70d11",
"assets/packages/flutter_quill_semanoor/assets/audio.mp3": "066b24fc5967ea7d61241cc1285c613b",
"assets/packages/flutter_quill_semanoor/assets/sample_data.json": "4a9ca783a92e75b8a8f56dc7994afdbb",
"assets/packages/flutter_quill_semanoor/assets/sampleinput.json": "02f10816d6c534ed16bfabe885e7b4cc",
"assets/packages/flutter_quill_semanoor/assets/nativedata.json": "8f494d23b0d8d9d16d45509672f5c903",
"assets/fonts/noorv2.ttf": "2cdc6ec9a8542abbd1a7b6bdadc7febf",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/app/data/BookOptions.json": "5d315c0e6df2a950b1017189f433e222",
"assets/assets/notepad_img.png": "e2796c593dfd9a2dbaf67b004bf9072f",
"assets/assets/images/27.avif": "941231115e776b6ab2165d6284ef88c5",
"assets/assets/images/pdf-04.png": "f143894b6cca6640f96a39a88e47ff28",
"assets/assets/images/27.webp": "e8e41978673bbb7d7144555a07fd7941",
"assets/assets/tabbar/tabbar_list.json": "ac3f45d2a52c4e9689920e6ec2cc0fb8",
"assets/assets/tabbar/add_tab.json": "1413849f8a00338d09ec671e1cec9d7d",
"assets/assets/tabbar/Internet_logos/Ask.com.png": "068d715ca1e6979f6435e8f3afbcf539",
"assets/assets/tabbar/Internet_logos/wiki.png": "e4707620a41bc4d2279958609a5a3714",
"assets/assets/tabbar/Internet_logos/PubMed-Logo.png": "adaa765577157a01821e2cb3d396e995",
"assets/assets/tabbar/Internet_logos/GoogleScholar.png": "6ba817c46467e2203375d96a09850a9c",
"assets/assets/tabbar/Internet_logos/KhanAcademy.png": "5b6a3ac4fab1a19d2bb28021743efb12",
"assets/assets/tabbar/Internet_logos/iseek_logo.png": "e818cd22f18a3d2845446ec60ee5123d",
"assets/assets/tabbar/Internet_logos/URL.png": "dafd4389e35424f4fb9aaa700e3af9a2",
"assets/assets/tabbar/Internet_logos/Google_Translate.png": "ae298b7c8e103ad21c6c0c06898028a0",
"assets/assets/tabbar/Internet_logos/MsAcademic.png": "1cbf2f0264256f89768faf11cc889460",
"assets/assets/tabbar/Internet_logos/youtube.png": "11912f1574d05f6050d71662bc260779",
"assets/assets/tabbar/Internet_logos/Google_Maps.png": "06a7c1545184d92e8306eeeb952968a0",
"assets/assets/tabbar/Internet_logos/google.png": "bdd69bf4a9f8192f4a78708637995447",
"assets/assets/tabbar/Internet_logos/bing.png": "22725e296b5e3f3600fcb093add00915",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
