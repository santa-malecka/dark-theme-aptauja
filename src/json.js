export const json = {
    "title": "Tumšais režims",
    "logoPosition": "right",
    "pages": [
     {
      "name": "Ieavads",
      "elements": [
       {
        "type": "boolean",
        "name": "question-have-you-had-issues",
        "title": "Vai esat kādreiz saskārušies ar problēmām izmantojot tumšā režīma opciju? ",
        "isRequired": true,
        "labelTrue": "Jā",
        "labelFalse": "Nē"
       },
       {
        "type": "checkbox",
        "name": "question-what-issue",
        "visibleIf": "{question-have-you-had-issues} = true",
        "title": "Ar kādām problēmām esat saskārušies izmantojot tumšā režīma opciju? ",
        "isRequired": true,
        "requiredIf": "{question-have-you-had-issues} = true",
        "choices": [
         {
          "value": "Grūtības lastīt tekstu",
          "text": "Grūtības lastīt tekstu "
         },
         {
          "value": "Atšķirt noteiktus elementus, piem., saišu vai pogu saskatīšana",
          "text": "Atšķirt noteiktus elementus, piem., saišu vai pogu saskatīšana "
         },
         {
          "value": "Attēla kropļojumi",
          "text": "Attēla kropļojumi "
         }
        ],
        "showOtherItem": true,
        "otherText": "Cits (Apraksti)",
        "showSelectAllItem": true,
        "selectAllText": "Visi"
       },
       {
        "type": "comment",
        "name": "question-sugestions",
        "title": "Vai jums ir kādi ieteikumi, kā uzlabot vispārējo tumšā režīma lietošanas pieredzi vietnēs vai lietojumprogrammās?"
       }
      ],
      "title": "Pieredze ar tumšo režīmu"
     },
     {
      "name": "page-bg-light",
      "elements": [
       {
        "type": "html",
        "name": "image1",
        "html": "<style>\n    .question-image-hld {\n        text-align: center;\n    }\n</style>\n\n\n\n\n<div class=\"question-image-hld\">\n    <img height=\"500px\" src=\"https://i.ibb.co/HhP1LTN/Home.png\" id=\"img-bg\">\n</div>"
       },
       {
        "type": "text",
        "name": "lightSlider",
        "title": "Izvēlies sev viss patīkamāko fona spilgtumu.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 50,
        "step": 2
       },
       {
        "type": "html",
        "name": "code",
        "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setImgColor(hue, saturation, light, imgId = 'img-bg') {\n        var imgSlider = document.getElementById('img-bg');\n        imgSlider.style.backgroundColor = hslToHex(hue.value, saturation.value, light.value);\n    }\n\n    function hslToHex(h, s, l) {\n        l /= 100;\n        const a = s * Math.min(l, 1 - l) / 100;\n        const f = n => {\n            const k = (n + h / 30) % 12;\n            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);\n            return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix \"0\" if needed\n        };\n        return `#${f(0)}${f(8)}${f(4)}`;\n    }\n\n    var lightSlider = getSliderByName('lightSlider');\n    lightSlider.addEventListener('change', (e) => {\n        setImgColor({\n            value: 0\n        }, {\n            value: 0\n        }, e.target);\n    });\n\n    setImgColor({\n        value: 0\n    }, {\n        value: 0\n    }, lightSlider);\n</script>"
       }
      ],
      "title": "Fona krāsas spilgtums"
     },
     {
      "name": "page-bg-hue",
      "elements": [
       {
        "type": "html",
        "name": "image1",
        "html": "<style>\n    .sd-page.sd-body__page {\n        width: 900px;\n        margin: auto !important;\n    }\n    .question-image-hld-2 {\n        text-align: center;\n    }\n\n    .question-image-hld-2 img {\n        margin: 0 20px;\n    }\n    .sd-body.sd-body--static {\n        width: 900px;\n        max-width: 900px !important;\n    }\n</style>\n\n\n\n\n<div class=\"question-image-hld-2\">\n    <img height=\"500px\" src=\"https://i.ibb.co/HhP1LTN/Home.png\" id=\"img-bg1\">\n    <img height=\"500px\" src=\"https://i.ibb.co/HhP1LTN/Home.png\" id=\"img-bg2\">\n    <img height=\"500px\" src=\"https://i.ibb.co/HhP1LTN/Home.png\" id=\"img-bg3\">\n</div>\n"
       },
       {
        "type": "text",
        "name": "hueSlider1",
        "title": "Izvēlies sev viss patīkamāko toni pirmajam attēlam.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 255,
        "step": 5
       },
       {
        "type": "text",
        "name": "hueSlider2",
        "startWithNewLine": false,
        "title": "Izvēlies sev viss patīkamāko toni otrajam attēlam.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 255,
        "step": 5
       },
       {
        "type": "text",
        "name": "hueSlider3",
        "title": "Izvēlies sev viss patīkamāko toni trešajam attēlam.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 255,
        "step": 2
       },
       {
        "type": "html",
        "name": "code",
        "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setImgColor(hue, saturation, light, imgId = 'img-bg') {\n        var imgSlider = document.getElementById(imgId);\n        console.debug([imgSlider, hue, saturation, light, imgId, hslToHex(hue.value, saturation.value, light.value)]);\n        imgSlider.style.backgroundColor = hslToHex(hue.value, saturation.value, light.value);\n    }\n\n    function hslToHex(h, s, l) {\n        l /= 100;\n        const a = s * Math.min(l, 1 - l) / 100;\n        const f = n => {\n            const k = (n + h / 30) % 12;\n            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);\n            return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix \"0\" if needed\n        };\n        return `#${f(0)}${f(8)}${f(4)}`;\n    }\n\n    for (var i = 1; i < 4; i++) {\n        const hueSlider = getSliderByName('hueSlider' + i);\n        const ii = i;\n\n        hueSlider.addEventListener('change', (e) => {\n            console.debug(ii);\n            setImgColor(e.target, {\n                value: 50\n            }, {\n                value: ii * 10 - 5\n            }, 'img-bg' + ii);\n        });\n\n        setImgColor(hueSlider, {\n            value: 50\n        }, {\n            value: i * 10 - 5\n        }, 'img-bg' + i);\n    }\n</script>"
       }
      ],
      "title": "Fona krāsas tonis"
     },
     {
      "name": "page-fg-light",
      "elements": [
       {
        "type": "html",
        "name": "image1",
        "html": "<style>\n    .sd-page.sd-body__page {\n        width: 900px;\n        margin: auto !important;\n    }\n\n    .question-image-hld-2 {\n        text-align: center;\n    }\n\n    .question-image-hld-2 img {}\n\n    .sd-body.sd-body--static {\n        width: 900px;\n        max-width: 900px !important;\n    }\n\n    .bg {\n        margin: 0 20px;\n        display: inline-block;\n        background-color: rgb(41, 41, 41);\n        position: relative;\n        max-height: 500px;\n    }\n\n    #img-bg-fg1 + img,\n    #img-bg-fg2 + img,\n    #img-bg-fg3 + img{\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n    }\n</style>\n\n\n<div class=\"question-image-hld-2\">\n    <div class=\"bg\" style=\"background-color: #241a2a\">\n        <img height=\"500px\" src=\"https://i.ibb.co/dGzbCMc/q2-fg.png\" id=\"img-bg-fg1\">\n        <img height=\"500px\" src=\"https://i.ibb.co/rwNcFWf/q2-bg.png\">\n    </div>\n    <div class=\"bg\" style=\"background-color: #373737\">\n        <img height=\"500px\" src=\"https://i.ibb.co/dGzbCMc/q2-fg.png\" id=\"img-bg-fg2\">\n        <img height=\"500px\" src=\"https://i.ibb.co/rwNcFWf/q2-bg.png\">\n    </div>\n    <div class=\"bg\" style=\"background-color: #132e0e\">\n        <img height=\"500px\" src=\"https://i.ibb.co/dGzbCMc/q2-fg.png\"  id=\"img-bg-fg3\">\n        <img height=\"500px\" src=\"https://i.ibb.co/rwNcFWf/q2-bg.png\">\n    </div>\n</div>"
       },
       {
        "type": "text",
        "name": "lightSliderFg1",
        "maxWidth": "50%",
        "title": "Izvēlies sev viss patīkamāko spilgtumu pirmajam attēlam.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 0.8,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "lightSliderFg2",
        "startWithNewLine": false,
        "title": "Izvēlies sev viss patīkamāko spilgtumu otrajam attēlam.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 0.8,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "lightSliderFg3",
        "title": "Izvēlies sev viss patīkamāko spilgtumu trešajam attēlam.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 0.8,
        "step": 0.05
       },
       {
        "type": "html",
        "name": "code",
        "html": "\n<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setImgOpacity(slider, imgId = 'img-bg') {\n        var imgSlider = document.getElementById(imgId);\n        imgSlider.style.opacity = slider.value;\n    }\n\n    for (var i = 1; i < 4; i++) {\n        const lightSlider = getSliderByName('lightSliderFg' + i);\n        const ii = i;\n\n        lightSlider.addEventListener('change', (e) => {\n            setImgOpacity(e.target, 'img-bg-fg' + ii);\n        });\n\n        setImgOpacity(lightSlider, 'img-bg-fg' + i);\n    }\n</script>"
       }
      ],
      "title": "Sekundārās krāsas spilgtums"
     },
     {
      "name": "page-accent-color-saturation",
      "elements": [
       {
        "type": "html",
        "name": "image1",
        "html": "<style>\n    .sd-page.sd-body__page {\n        width: 900px;\n        margin: auto !important;\n    }\n\n    .question-image-hld-2 {\n        text-align: center;\n    }\n\n    .question-image-hld-2 img {}\n\n    .sd-body.sd-body--static {\n        width: 900px;\n        max-width: 900px !important;\n    }\n\n    .bg {\n        margin: 0 20px;\n        display: inline-block;\n        background-color: rgb(41, 41, 41);\n        position: relative;\n        max-height: 500px;\n    }\n\n    .img-accent {\n        position: absolute;\n        left: 5.7%;\n        top: 9.4%;\n        width: 90%;\n        height: auto;\n    }\n\n    .img-accent-ov {\n        position: absolute;\n        width: 45.400593476%;\n        left: 45.5%;\n        top: 15.35%;\n        height: auto;\n    }\n</style>\n\n\n<div class=\"question-image-hld-2\">\n    <div class=\"bg\" style=\"background-color: #241a2a\">\n        <img height=\"500px\" src=\"https://i.ibb.co/nQ9N2sg/Home-1.png\" class=\"img-bg-fg\">\n        <img height=\"500px\" src=\"https://i.ibb.co/mypQqbP/accent-color-1.png\" class=\"img-accent\" id=\"img-accent1\">\n        <img height=\"500px\" src=\"https://i.ibb.co/HtQjqNt/Accent-color-over.png\" class=\"img-accent-ov\">\n    </div>\n    <div class=\"bg\" style=\"background-color: #373737\">\n        <img height=\"500px\" src=\"https://i.ibb.co/nQ9N2sg/Home-1.png\" class=\"img-bg-fg\">\n        <img height=\"500px\" src=\"https://i.ibb.co/fQ0fF1H/accent-color-2.png\" class=\"img-accent\" id=\"img-accent2\">\n        <img height=\"500px\" src=\"https://i.ibb.co/HtQjqNt/Accent-color-over.png\" class=\"img-accent-ov\">\n    </div>\n    <div class=\"bg\" style=\"background-color: #132e0e\">\n        <img height=\"500px\" src=\"https://i.ibb.co/nQ9N2sg/Home-1.png\" class=\"img-bg-fg\">\n        <img height=\"500px\" src=\"https://i.ibb.co/YXG65G9/accent-color.png\" class=\"img-accent\" id=\"img-accent3\">\n        <img height=\"500px\" src=\"https://i.ibb.co/HtQjqNt/Accent-color-over.png\" class=\"img-accent-ov\">\n    </div>\n</div>\n"
       },
       {
        "type": "text",
        "name": "saturationAccentSlider1",
        "maxWidth": "50%",
        "title": "Izvēlies sev viss patīkamāko piesātinājumu akcenta krāsai pirmajā attēlā.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 0.8,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "saturationAccentSlider2",
        "startWithNewLine": false,
        "title": "Izvēlies sev viss patīkamāko piesātinājumu akcenta krāsai otrajā attēlā.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 0.8,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "saturationAccentSlider3",
        "title": "Izvēlies sev viss patīkamāko piesātinājumu akcenta krāsai trešajā attēlā.",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 0.8,
        "step": 0.05
       },
       {
        "type": "html",
        "name": "code",
        "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setImgOpacity(slider, imgId = 'img-bg') {\n        var imgSlider = document.getElementById(imgId);\n        imgSlider.style.filter = `saturate(${slider.value})`;\n    }\n\n    for (var i = 1; i < 4; i++) {\n        const lightSlider = getSliderByName('saturationAccentSlider' + i);\n        const ii = i;\n\n        lightSlider.addEventListener('change', (e) => {\n            setImgOpacity(e.target, 'img-accent' + ii);\n        });\n\n        setImgOpacity(lightSlider, 'img-accent' + i);\n    }\n</script>"
       }
      ],
      "title": "Akcenta krāsas spilgtums"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "html",
        "name": "question1",
        "html": "<style>\n    .question-image-hld {\n        text-align: center;\n\n    }\n\n    .img-hld {\n        width: auto;\n        display: inline-block;\n        height: 500px;\n        overflow: hidden;\n        margin: auto;\n        position: relative;\n    }\n\n    .prompt-hld {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        padding-top: 68px;\n        background: rgba(0, 0, 0, 0.5);\n    }\n\n    :root {\n        --prompt-col1: red;\n        --prompt-col2: green;\n        --prompt-col3: orange;\n        --prompt-col4: blue;\n    }\n\n    .prompt {\n        width: 90%;\n        margin-left: 5%;\n        padding: 10px;\n        text-align: left;\n        border: 2px solid white;\n        background: transparent;\n        color: white;\n        margin-bottom: 15px;\n        font-size: 12px;\n        font-weight: bold;\n        box-sizing: border-box;\n    }\n\n    .prompt.error {\n        color: var(--prompt-col1);\n        border-color: var(--prompt-col1);\n    }\n    .prompt.success {\n        color: var(--prompt-col2);\n        border-color: var(--prompt-col2);\n    }\n    .prompt.warning {\n        color: var(--prompt-col3);\n        border-color: var(--prompt-col3);\n    }\n    .prompt.info {\n        color: var(--prompt-col4);\n        border-color: var(--prompt-col4);\n    }\n</style>\n\n\n\n\n<div class=\"question-image-hld\">\n    <div class=\"img-hld\">\n        <img style=\"filter: blur(1px);\" height=\"500px\" src=\"https://i.ibb.co/zrFL8t4/Home-2.png\">\n        <div class=\"prompt-hld\">\n            <div class=\"prompt error\">\n                <div class=\"prompt-message\">There was an error while executing your request!</div>\n            </div>\n            <div class=\"prompt success\">\n                <div class=\"prompt-message\">Purchase was place!</div>\n            </div>\n            <div class=\"prompt warning\">\n                <div class=\"prompt-message\">Be sure to hide your password while logging in!</div>\n            </div>\n            <div class=\"prompt info\">\n                <div class=\"prompt-message\">New merch available in store!</div>\n            </div>\n        </div>\n    </div>\n</div>"
       },
       {
        "type": "text",
        "name": "promptColor1",
        "maxWidth": "50%",
        "title": "Izvēlies krāsu kļūdu ziņojumiem",
        "isRequired": true,
        "inputType": "color"
       },
       {
        "type": "text",
        "name": "promptColor2",
        "maxWidth": "50%",
        "startWithNewLine": false,
        "title": "Izvēlies krāsu veiksmīgu darbību ziņojumiem",
        "isRequired": true,
        "inputType": "color"
       },
       {
        "type": "text",
        "name": "promptColor3",
        "maxWidth": "50%",
        "title": "Izvēlies krāsu brīdinājuma ziņojumiem ",
        "isRequired": true,
        "inputType": "color"
       },
       {
        "type": "text",
        "name": "promptColor4",
        "maxWidth": "50%",
        "startWithNewLine": false,
        "title": "Izvēlies krāsu informatīviem paziņojuma ziņojumiem",
        "isRequired": true,
        "inputType": "color"
       },
       {
        "type": "html",
        "name": "question2",
        "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setCssVar(id, value) {\n        console.debug([id, value.value]);\n        document.documentElement.style.setProperty(`--prompt-col${id}`, value.value);\n    }\n\n\n    for (var i = 1; i < 5; i++) {\n        const promptColor = getSliderByName('promptColor' + i);\n        const ii = i;\n\n        promptColor.addEventListener('change', (e) => {\n            setCssVar(ii, e.target);\n        });\n\n        setCssVar(i, promptColor);\n    }\n</script>"
       }
      ],
      "title": "Informatīvo paziņojumu krāsu paletes toņi"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "html",
        "name": "question3",
        "html": "<style>\n    .question-image-hld {\n        text-align: center;\n\n    }\n\n    .img-hld {\n        position: relative;\n        display: inline-block;\n    }\n\n    .section-top {\n        color: white;\n        position: absolute;\n        z-index: 10;\n        font-size: 7pt;\n        max-width: 200px;\n        left: 20px;\n        top: 38px;\n        text-align: left;\n    }\n\n    .nike-category {\n        font-weight: normal;\n        margin: 10px 0;\n    }\n\n    .nike-price {\n        font-size: 17pt;\n        font-weight: bold;\n    }\n\n    .section-bottom {\n        position: absolute;\n        left: 20px;\n        top: auto;\n        bottom: 20px;\n        font-size: 14px;\n        max-width: calc(100% - 40px);\n        color: white;\n        line-height: 1.8;\n    }\n    .nike-read-more {\n        text-align: right;\n        color: rgb(255, 128, 0);\n        font-weight: bold;\n    }\n</style>\n\n\n<div class=\"question-image-hld\">\n    <div class=\"img-hld\">\n        <img height=\"500px\" src=\"https://i.ibb.co/d4YSBR8/Details-1.png\">\n        <div class=\"section-top\">\n            <h1 id=\"txt1\" class=\"nike-title\">Nike Air Max 270 Essential</h1>\n            <h2 id=\"txt2\" class=\"nike-category\">Men’s Shoes</h2>\n            <div id=\"txt3\" class=\"nike-price\">$179.39</div>\n        </div>\n        <div class=\"section-bottom\">\n            <p id=\"txt4\">\n                The Max Air 270 unit delivers unrivaled, all-day comfort. The sleek, running-inspired design roots you\n                to everything Nike is a renowned brand that has been producing sneakers for several decades now.....\n            </p>\n            <div id=\"txt5\" class=\"nike-read-more\">\n                Read More\n            </div>\n        </div>\n    </div>\n</div>"
       },
       {
        "type": "text",
        "name": "fontColorOpacity1",
        "title": "Virsraksta spilgtums",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 1,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "fontColorOpacity2",
        "startWithNewLine": false,
        "title": "Apakšvirsraksta spilgtums",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 1,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "fontColorOpacity3",
        "title": "Cenas spilgtums",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 1,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "fontColorOpacity4",
        "startWithNewLine": false,
        "title": "Pamatteksta spilgtums",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 1,
        "step": 0.05
       },
       {
        "type": "text",
        "name": "fontColorOpacity5",
        "startWithNewLine": false,
        "title": "Akcenta teksta spilgtums",
        "isRequired": true,
        "inputType": "range",
        "min": 0,
        "max": 1,
        "step": 0.05
       },
       {
        "type": "html",
        "name": "question4",
        "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setImgOpacity(slider, imgId = 'img-bg') {\n        var imgSlider = document.getElementById(imgId);\n        imgSlider.style.opacity = slider.value;\n    }\n\n    for (var i = 1; i < 6; i++) {\n        const lightSlider = getSliderByName('fontColorOpacity' + i);\n        const ii = i;\n\n        lightSlider.addEventListener('change', (e) => {\n            setImgOpacity(e.target, 'txt' + ii);\n        });\n\n        setImgOpacity(lightSlider, 'txt' + i);\n    }\n</script>"
       }
      ],
      "title": "Tipografijas krāsu palete"
     },
     {
        "name": "page-text-view",
        "elements": [
         {
          "type": "html",
          "name": "question3",
          "html": "<style>\n    .question-image-hld {\n        text-align: center;\n\n    }\n\n    .img-hld {\n        position: relative;\n        display: inline-block;\n    }\n\n    .section-top {\n        color: white;\n        position: absolute;\n        z-index: 10;\n        font-size: 7pt;\n        max-width: 200px;\n        left: 20px;\n        top: 38px;\n        text-align: left;\n    }\n\n    .nike-category {\n        font-weight: normal;\n        margin: 10px 0;\n    }\n\n    .nike-price {\n        font-size: 17pt;\n        font-weight: bold;\n    }\n\n    .section-bottom {\n        position: absolute;\n        left: 20px;\n        top: 320px;\n        bottom: auto;\n        font-size: 12px;\n        max-width: calc(100% - 40px);\n        color: white;\n        line-height: 1.8;\n    }\n    .nike-read-more {\ndisplay: none;\n        text-align: right;\n        color: rgb(255, 128, 0);\n        font-weight: bold;\n    }\n</style>\n\n\n<div class=\"question-image-hld\">\n    <div class=\"img-hld\">\n        <img height=\"500px\" src=\"https://i.ibb.co/d4YSBR8/Details-1.png\">\n        <div class=\"section-top\">\n            <h1 id=\"txt1\" class=\"nike-title\">Nike Air Max 270 Essential</h1>\n            <h2 id=\"txt2\" class=\"nike-category\">Men’s Shoes</h2>\n            <div id=\"txt3\" class=\"nike-price\">$179.39</div>\n        </div>\n        <div class=\"section-bottom\">\n            <p id=\"txt4\">\n                The Max Air 270 unit delivers unrivaled, all-day comfort. The sleek, running-inspired design roots you\n                to everything Nike is a renowned brand that has been producing sneakers for several decades now.....\n            </p>\n            <div id=\"txt5\" class=\"nike-read-more\">\n                Read More\n            </div>\n        </div>\n    </div>\n</div>"
         },
         {
          "type": "text",
          "name": "lineHeightSlider",
          "title": "Izvēlies sev viss ērtāko teksta rindu atkāpi",
          "isRequired": true,
          "inputType": "range",
          "min": 0.8,
          "max": 2.5,
          "step": 0.1
         },
         {
          "type": "text",
          "name": "fontWeightSlider",
          "startWithNewLine": false,
          "title": "Izvēlies sev viss ērtāko teksta biezumu",
          "isRequired": true,
          "inputType": "range",
          "min": 100,
          "max": 900,
          "step": 100
         },
         {
          "type": "text",
          "name": "letterSpacingSlider",
          "title": "Izvēlies sev viss ērtāko burtu atstarpi",
          "isRequired": true,
          "inputType": "range",
          "min": 0,
          "max": 5,
          "step": 1
         },
         {
          "type": "html",
          "name": "question6",
          "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setStyleProp(slider, style) {\n        var imgSlider = document.getElementById('txt4');\n        imgSlider.style[style] = slider.value;\n    }\n\n\n    var fontWeightSlider = getSliderByName('fontWeightSlider');\n    var lineHeightSlider = getSliderByName('lineHeightSlider');\n    var letterSpacingSlider = getSliderByName('letterSpacingSlider');\n\n    fontWeightSlider.addEventListener('change', (e) => {\n        setStyleProp(e.target, 'font-weight');\n    });\n\n    lineHeightSlider.addEventListener('change', (e) => {\n        setStyleProp(e.target, 'line-height');\n    });\n\n    letterSpacingSlider.addEventListener('change', (e) => {\n        setStyleProp({ value: e.target.value + 'px' }, 'letter-spacing');\n    });\n\n\n    setStyleProp(fontWeightSlider, 'font-weight');\n    setStyleProp(lineHeightSlider, 'line-height');\n    setStyleProp(letterSpacingSlider, 'letter-spacing');\n</script>"
         }
        ],
        "title": "Tipogrāfijas attēlojums"
       },
       {
        "name": "page-icon",
        "elements": [
         {
          "type": "html",
          "name": "question3",
          "html": "<style>\n    .sd-page.sd-body__page {\n        width: 900px;\n        margin: auto !important;\n    }\n\n    .question-image-hld-2 {\n        text-align: center;\n    }\n\n    .question-image-hld-2 img {}\n\n    .sd-body.sd-body--static {\n        width: 900px;\n        max-width: 900px !important;\n    }\n\n    .bg {\n        margin: 0 20px;\n        display: inline-block;\n        background-color: rgb(41, 41, 41);\n        position: relative;\n        max-height: 500px;\n    }\n\n    #img-icon + img {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n    }\n</style>\n\n\n<div class=\"question-image-hld-2\">\n    <div class=\"bg\" style=\"background-color: #241a2a\">\n        <img height=\"500px\" src=\"https://i.ibb.co/1d7Xhsp/icons-Home-3-1.png\">\n    </div>\n    <div class=\"bg\" style=\"background-color: #241a2a\">\n        <img height=\"500px\" src=\"https://i.ibb.co/f2PKMbw/icons-Home-5-1.png\" id=\"img-icon\">\n        <img height=\"500px\" src=\"https://i.ibb.co/FgzW4B6/icons-Home-4-1.png\" id=\"img-icon-overlay\">\n    </div>\n</div>\n\n"
         },
         {
          "type": "text",
          "name": "iconInverseSlider",
          "title": "Izvēlies ikonas krāsu",
          "isRequired": true,
          "inputType": "range",
          "min": 0,
          "max": 1,
          "step": 0.1
         },
         {
          "type": "html",
          "name": "question6",
          "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setImgInverse(slider) {\n        var imgSlider = document.getElementById('img-icon-overlay');\n        imgSlider.style.filter = `invert(${slider.value})`;\n    }\n\n    var inverseIconSlider = getSliderByName('iconInverseSlider');\n\n    inverseIconSlider.addEventListener('change', (e) => {\n        setImgInverse(e.target,);\n    });\n\n    setImgInverse(inverseIconSlider);\n</script>"
         }
        ],
        "title": "Ikonu attēlojums"
       },
       {
        "name": "page-imgs",
        "elements": [
         {
          "type": "html",
          "name": "question3",
          "html": "<style>\n    .sd-page.sd-body__page {\n        width: 900px;\n        margin: auto !important;\n    }\n\n    .question-image-hld-2 {\n        text-align: center;\n    }\n\n    .question-image-hld-2 img {}\n\n    .sd-body.sd-body--static {\n        width: 900px;\n        max-width: 900px !important;\n    }\n\n    .bg {\n        margin: 0 20px;\n        display: inline-block;\n        background-color: rgb(41, 41, 41);\n        position: relative;\n        max-height: 500px;\n    }\n\n    #img-icon + img {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n    }\n</style>\n\n\n<div class=\"question-image-hld-2\">\n    <div class=\"bg\" style=\"background-color: #241a2a\">\n        <img height=\"500px\" src=\"https://i.ibb.co/t8RYC17/Mask-group-2.png\" id=\"img-icon\">\n        <img height=\"500px\" src=\"https://i.ibb.co/xMP3CT8/Mask-group-1-1.png\" id=\"img-overlay\">\n    </div>\n</div>"
         },
         {
          "type": "text",
          "name": "saturationImgSlider",
          "title": "Izvēlies bildes piesātinājumu",
          "isRequired": true,
          "inputType": "range",
          "min": 0,
          "max": 2,
          "step": 0.1
         },
         {
          "type": "text",
          "name": "contrastImgSlider",
          "title": "Izvēlies bildes kontrastu",
          "isRequired": true,
          "inputType": "range",
          "min": 0,
          "max": 2,
          "step": 0.1
         },
         {
          "type": "html",
          "name": "question6",
          "html": "<script>\n    function getSliderByName(name) {\n        return document.querySelector(`[data-name=${name}] input`);\n    }\n\n    function setImageSatAndCont(saturationImgSlider, contrastImgSlider) {\n        var imgSlider = document.getElementById('img-overlay');\n        console.debug([saturationImgSlider.value, contrastImgSlider.value,\"saturate(\" + saturationImgSlider.value + \") contrast(\" + contrastImgSlider.value + \")\"]);\n        imgSlider.style.filter = \"saturate(\" + saturationImgSlider.value + \") contrast(\" + contrastImgSlider.value + \")\";\n    }\n\n    var saturationImgSlider = getSliderByName('saturationImgSlider');\n    var contrastImgSlider = getSliderByName('contrastImgSlider');\n\n    saturationImgSlider.addEventListener('change', (e) => {\n        setImageSatAndCont(e.target, contrastImgSlider);\n    });\n\n    contrastImgSlider.addEventListener('change', (e) => {\n        setImageSatAndCont(saturationImgSlider, e.target);\n    });\n\n    setImageSatAndCont(saturationImgSlider, contrastImgSlider);\n</script>"
         }
        ],
        "title": "Attēlu attēlojums"
       }
    ]
   }