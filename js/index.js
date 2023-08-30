$(function () {
  // 是否为英文简介
  let isEnglishIntroduce = true;

  // 渲染key数组
  const renderKeyArr = [
    "topLineOne",
    "topLineTwo",
    "topLineThree",
    "topLineFour",
    "topLineFive",
    "infoLineOne",
    "infoLineTwo",
    "infoLineThree",
    "infoLineFour",
    "infoLineFive",
    "infoLineSix",
    "infoLineSeven",
    "infoLineEight",
    "bottomInfoLeft",
    "bottomInfoRight",
  ];

  // 中文简介
  const chinesePersonInfo = {
    topLineOne: "大家好！欢迎来到我的个人网页",
    topLineTwo: "这是一个来自前端小高的demo页面",
    topLineThree: "如果你觉得它还不错，你可以点击下面一行来联系我！",
    topLineFour: "点击这里！",
    topLineFive: "谢谢你的来访。",
    infoLineOne: "关于我",
    infoLineTwo: "毕业院校：闽江学院（2018）",
    infoLineThree: "专业：软件工程",
    infoLineFour: "职业：前端工程师",
    infoLineFive: "工作经验：5年",
    infoLineSix: "技术栈：Vue, JavaScript, jQuery, 微信小程序, UniApp",
    infoLineSeven: "邮箱：747379968@qq.com",
    infoLineEight: "未完待续...",
    bottomInfoLeft: "您是本网站的第",
    bottomInfoRight: "位访问者。",
  };

  // 英文简介
  const engLishPersonInfo = {
    topLineOne: "Hello everyone! Welcome to my personal web.",
    topLineTwo: "This is a demo website from EasyGao.",
    topLineThree: "If you like it, you can click next line to contact me!",
    topLineFour: "Click here!",
    topLineFive: "Thank you for visiting.",
    infoLineOne: "SOMETHING ABOUT ME",
    infoLineTwo: "Education:MJU(2018)",
    infoLineThree: "Major:Software Engineering",
    infoLineFour: "Occupation：Front-end engineer",
    infoLineFive: "Years of Experience: 5 years",
    infoLineSix: "Technology Stack: Vue, JavaScript, jQuery, WeChat MiniProgram, UniApp",
    infoLineSeven: "Email:747379968@qq.com",
    infoLineEight: "To be continued.",
    bottomInfoLeft: "You are the ",
    bottomInfoRight: "th visitor to this website.",
  };

  /**
   * @description 重置语言选中状态
   * @param {String} str - description
   */
  function resetItemClass() {
    $(".language-box .item").each(function () {
      $(this).removeClass("active");
    });
  }

  /**
   * @description 语言点击事件
   */
  $(".language-box .item").click(function () {
    resetItemClass();
    $(this).addClass("active");
    const chooseLanguageType = $(this).attr("data-type");
    isEnglishIntroduce = chooseLanguageType === "cn" ? false : true;
    initHtmlRenderText();
  });

  /**
   * @description 初始页面渲染文本
   */
  function initHtmlRenderText() {
    const textInfo = isEnglishIntroduce ? engLishPersonInfo : chinesePersonInfo;
    renderKeyArr.forEach((item) => {
      const textStr = textInfo[item];
      $(`#${item}`).text(textStr);
    });
  }

  initHtmlRenderText();
});
