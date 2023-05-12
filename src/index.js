import $ from "jquery";
import {
    Model
} from "survey-jquery";
import "survey-jquery/defaultV2.min.css";
import "./index.css";
import {
    json
} from "./json";

const survey = new Model(json);

survey.onComplete.add((sender, options) => {
    const data = getFormatedData(sender.data);
    console.log(JSON.stringify(data, null, 3));
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbz4DQRQZH5XaPaknE1fP-dRTMdBusIOPmGgdNdiFCyamnG7WlMi6uxhFgAiCtnC3-Hf2Q/exec',
        type: 'post',
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "text/plain"
        },
        processData: false,
        complete: function (res, status) {
            if (status == 'success') {
                options.showDataSavingSuccess();
            } else {
                options.showDataSavingError();
            }
        },
    });
});

survey.onAfterRenderQuestion.add(function (survey, options) {
    const scripts = document.querySelectorAll('.sd-question__content .sd-html script');
    scripts.forEach((script) => {
        eval(script.innerHTML);
    });
});

const getFormatedData = (data) => {
    const structure = {
        "question-have-you-had-issues": 'N/A',
        "question-what-issue": 'N/A',
        "question-what-issue-Comment": 'N/A',
        "question-sugestions": 'N/A',
        "lightSlider": 'N/A',
        "hueSlider1": 'N/A',
        "hueSlider2": 'N/A',
        "hueSlider3": 'N/A',
        "lightSliderFg1": 'N/A',
        "lightSliderFg2": 'N/A',
        "lightSliderFg3": 'N/A',
        "saturationAccentSlider1": 'N/A',
        "saturationAccentSlider3": 'N/A',
        "saturationAccentSlider2": 'N/A',
        "promptColor1": "#2ec27e",
        "promptColor2": "#a51d2d",
        "promptColor3": "#f5c211",
        "promptColor4": "#e66100",
        "fontColorOpacity1": 'N/A',
        "fontColorOpacity2": 'N/A',
        "fontColorOpacity3": 'N/A',
        "fontColorOpacity4": 'N/A',
        "fontColorOpacity5": 'N/A',
        "lineHeightSlider": 'N/A',
        "fontWeightSlider": 'N/A',
        "letterSpacingSlider": 'N/A',
        "iconInverseSlider": 'N/A',
        "saturationImgSlider": 'N/A',
        "contrastImgSlider": 'N/A'
    }

    let output = {};
    Object.keys(structure).forEach(key => {
        output[key] = data[key] ?? structure[key];
    });

    return output;
}

$("#root").Survey({
    model: survey
});