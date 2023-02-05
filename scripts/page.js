//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

    var listLeft15;
    var listLeftHtml15;
    var listRight15;
    var orderLeft15;
    var orderRight15;

    var listLeft33;
    var listLeftHtml33;
    var listRight33;
    var orderLeft33;
    var orderRight33;

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
    InitQuestion49,
    InitQuestion50,
    InitQuestion51,
    InitQuestion52,
    InitQuestion53,
    InitQuestion54,
    InitQuestion55,
    InitQuestion56,
    InitQuestion57,
    InitQuestion58,
    InitQuestion59,
    InitQuestion60,
    InitQuestion61,
    InitQuestion62,
    InitQuestion63,
    InitQuestion64,
    InitQuestion65,
    InitQuestion66,
    InitQuestion67,
    InitQuestion68,
    InitQuestion69,
    InitQuestion70,
    InitQuestion71,
    InitQuestion72,
    InitQuestion73,
    InitQuestion74,
    InitQuestion75,
    InitQuestion76,
    InitQuestion77,
    InitQuestion78,
    InitQuestion79,
    InitQuestion80,
    InitQuestion81,
    InitQuestion82,
    InitQuestion83,
    InitQuestion84,
    InitQuestion85,
    InitQuestion86,
    InitQuestion87,
    InitQuestion88,
    InitQuestion89,
    InitQuestion90,
    InitQuestion91,
    InitQuestion92,
    InitQuestion93,
    InitQuestion94,
    InitQuestion95,
    InitQuestion96,
    InitQuestion97,
    InitQuestion98,
    InitQuestion99,
    InitQuestion100,
    InitQuestion101,
    InitQuestion102,
    InitQuestion103,
    InitQuestion104,
    InitQuestion105,
    InitQuestion106,
    InitQuestion107,
    InitQuestion108,
    InitQuestion109,
    InitQuestion110,
    InitQuestion111,
    InitQuestion112,
    InitQuestion113,
    InitQuestion114,
    InitQuestion115,
    InitQuestion116,
    InitQuestion117,
    InitQuestion118,
    InitQuestion119,
    InitQuestion120,
    InitQuestion121,
    InitQuestion122,
    InitQuestion123,
    InitQuestion124,
    InitQuestion125,
    InitQuestion126,
    InitQuestion127,
    InitQuestion128,
    InitQuestion129,
    InitQuestion130,
    InitQuestion131,
    InitQuestion132,
    InitQuestion133,
    InitQuestion134,
    InitQuestion135,
    InitQuestion136,
    InitQuestion137,
    InitQuestion138,
    InitQuestion139,
    InitQuestion140,
    InitQuestion141,
    InitQuestion142,
    InitQuestion143,
    InitQuestion144,
    InitQuestion145,
    InitQuestion146,
    InitQuestion147,
    InitQuestion148,
    InitQuestion149,
    InitQuestion150,
    InitQuestion151,
    InitQuestion152,
    InitQuestion153,
    InitQuestion154,
    InitQuestion155,
    InitQuestion156,
    InitQuestion157,
    InitQuestion158,
    InitQuestion159,
    InitQuestion160,
    InitQuestion161,
    InitQuestion162,
    InitQuestion163,
    InitQuestion164,
    InitQuestion165,
    InitQuestion166,
    InitQuestion167,
    InitQuestion168,
    InitQuestion169,
    InitQuestion170,
    InitQuestion171,
    InitQuestion172,
    InitQuestion173,
    InitQuestion174,
    InitQuestion175,
    InitQuestion176,
    InitQuestion177,
    InitQuestion178,
    InitQuestion179,
    InitQuestion180,
    InitQuestion181,
    InitQuestion182,
    InitQuestion183,
    InitQuestion184,
    InitQuestion185,
    InitQuestion186,
    InitQuestion187,
    InitQuestion188,
    InitQuestion189,
    InitQuestion190,
    InitQuestion191,
    InitQuestion192,
    InitQuestion193,
    InitQuestion194,
    InitQuestion195,
    InitQuestion196,
    InitQuestion197,
    InitQuestion198,
    InitQuestion199,
    InitQuestion200,
    InitQuestion201,
    InitQuestion202,
    InitQuestion203,
    InitQuestion204,
    InitQuestion205,
    InitQuestion206,
    InitQuestion207,
    InitQuestion208,
    InitQuestion209,
    InitQuestion210,
    InitQuestion211,
    InitQuestion212,
    InitQuestion213,
    InitQuestion214,
    InitQuestion215,
    InitQuestion216,
    InitQuestion217,
    InitQuestion218,
    InitQuestion219,
    InitQuestion220,
    InitQuestion221,
    InitQuestion222,
    InitQuestion223,
    InitQuestion224,
    InitQuestion225,
    InitQuestion226,
    InitQuestion227,
    InitQuestion228,
    InitQuestion229,
    InitQuestion230,
    InitQuestion231,
    InitQuestion232,
    InitQuestion233,
    InitQuestion234,
    InitQuestion235,
    InitQuestion236,
    InitQuestion237,
    InitQuestion238,
    InitQuestion239,
    InitQuestion240,
    InitQuestion241,
    InitQuestion242,
    InitQuestion243,
    InitQuestion244,
    InitQuestion245,
    InitQuestion246,
    InitQuestion247,
    InitQuestion248,
    InitQuestion249,
    InitQuestion250,
    InitQuestion251,
    InitQuestion252,
    InitQuestion253,
    InitQuestion254,
    InitQuestion255,
    InitQuestion256,
    InitQuestion257,
    InitQuestion258,
    InitQuestion259,
    InitQuestion260,
    InitQuestion261,
    InitQuestion262,
    InitQuestion263,
    InitQuestion264,
    InitQuestion265,
    InitQuestion266,
    InitQuestion267,
    InitQuestion268,
    InitQuestion269,
    InitQuestion270,
    InitQuestion271,
    InitQuestion272,
    InitQuestion273,
    InitQuestion274,
    InitQuestion275,
    InitQuestion276,
    InitQuestion277,
    InitQuestion278,
    InitQuestion279,
    InitQuestion280,
    InitQuestion281,
    InitQuestion282,
    InitQuestion283,
    InitQuestion284,
    InitQuestion285,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft15 = new CreateListLeft15();
    listLeftHtml15 = new CreateListLeftHtml15();
    listRight15 = new CreateListRight15();
    orderLeft15 = new ShuffleMatchingOrder(listLeft15.length);
    orderRight15 = new ShuffleMatchingOrder(listRight15.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft15, listLeftHtml15, listRight15, orderLeft15, orderRight15, "idDD15", textSelect, hideLeftDropdown);
    $('#matching15').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft15);
    var maxRightSize = GetMaxSizeRightColumn(listRight15);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft15, "idDD15", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft15, "idDD15", hideLeftDropdown);

    listLeft33 = new CreateListLeft33();
    listLeftHtml33 = new CreateListLeftHtml33();
    listRight33 = new CreateListRight33();
    orderLeft33 = new ShuffleMatchingOrder(listLeft33.length);
    orderRight33 = new ShuffleMatchingOrder(listRight33.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft33, listLeftHtml33, listRight33, orderLeft33, orderRight33, "idDD33", textSelect, hideLeftDropdown);
    $('#matching33').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft33);
    var maxRightSize = GetMaxSizeRightColumn(listRight33);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft33, "idDD33", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft33, "idDD33", hideLeftDropdown);


});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('3KwwWlCSo5I=', 56, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3KwwWlCSo5I=', 56, -1000, 1000),DecodeDecimal('4fpREf67jy4=', 56, -1000, 1000),DecodeDecimal('4fpREf67jy4=', 56, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = " 1. ��������� �� �������� (2) ��� ��� ��������������� ���� �������� ������ ��� ������ ������� ������������ ������������:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3KwwWlCSo5I=', 58, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3MT2zmORqQ4=', 60, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3MT2zmORqQ4=', 62, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GKXzmxnV46o=', 64, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " � �������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('3AtH/558XT0=', 66, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = " �. ��������� �������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('3AtH/558XT0=', 66, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3AtH/558XT0=', 66, -1000, 1000),DecodeDecimal('zvRiNNHM7T4=', 66, -1000, 1000),DecodeDecimal('zvRiNNHM7T4=', 66, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = " 2. ��������� �� �������� (1) ��� ��� �������������� ���� �������� ������. ������� �� ��� � Argyle(1988) �������� �� �������� ����������� ��� �� �������� ������������:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3AtH/558XT0=', 68, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ������� ������������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3wU2FUMeooA=', 70, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ������� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('swEulHx1HP8=', 72, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��������� �������� ��������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('swEulHx1HP8=', 74, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " � ���������� ��� �������������� � �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('p1oDge9m3gQ=', 76, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = " �. �����������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('kCBFAMxaF9I=', 76, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kCBFAMxaF9I=', 76, -1000, 1000),DecodeDecimal('mjj9vbXmdxg=', 76, -1000, 1000),DecodeDecimal('mjj9vbXmdxg=', 76, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = " 3. ��������� �� �������� ��� ����� �����";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YF3KxpA8/Uo=', 78, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ��������� ������ ������� ������ ������ ��� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YF3KxpA8/Uo=', 80, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ��������� ������ ������� �������������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xsJS7R6JRiY=', 82, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. � ��������� ������ ������� �������������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('jFgtc+uoKng=', 86, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jFgtc+uoKng=', 86, -1000, 1000),DecodeDecimal('ZeLwIUZnbK0=', 86, -1000, 1000),DecodeDecimal('ZeLwIUZnbK0=', 86, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = " 4. ��������� �� �������� (3) ��� ��� ��������������� ���� �������� ������. �� ������� ������, ������� �� ��� ��������� (1996, �.74) �����:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i8ZOSxUhWao=', 88, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� ��������� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i8ZOSxUhWao=', 90, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� ��������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SKQzRE28AJ0=', 92, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� ��������� ��������������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MZ+nFZESr4M=', 94, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. � ������ � �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Bzjj6rBAtEw=', 96, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = " �. � ������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('Bzjj6rBAtEw=', 96, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Bzjj6rBAtEw=', 96, -1000, 1000),DecodeDecimal('K67yv7AptNU=', 96, -1000, 1000),DecodeDecimal('K67yv7AptNU=', 96, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = " 5. �������� �� ����� ���� �������� ������� � ���������� ������� ����� ���� ���������� ������� ��������� �� ��� �����. ���� �������� ��� � �������������� ��� ��������� �������������� ����: � � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bzjj6rBAtEw=', 98, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���������� ������� ����������� ������ ��� ������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FqeHSqdb7yc=', 100, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���������� ������������� ����������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cYVr5Tm0i8w=', 102, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ������ ��� �� ��� (� ��� �)";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('slz/5fAGHM4=', 104, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. ��� �� ��� ���������� (� ��� �)";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('ta5agK7NwCU=', 106, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ta5agK7NwCU=', 106, -1000, 1000),DecodeDecimal('C0UXjG76um0=', 106, -1000, 1000),DecodeDecimal('C0UXjG76um0=', 106, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = " 6. �������� ��� ����� �������� (1) ��� �������� �������� �� ��� ��� ����� ���� ���������� ������� ��������: �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9W03THeDS3I=', 108, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� ������� ��� ������������ ��� ��� ������� ������ ��� ���������� ��� ������������ �����������. �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9W03THeDS3I=', 110, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� ������� ��� ������������ ��� ����� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EkaSKzBudTs=', 112, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��� ����� ������� ��� �� �� �������� ������ �� ������� ��� � ������������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4ZoBF2CvKW8=', 114, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. ������ ������� ��� ��������� ��� ������ ��� ������� �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('YBYphDGEZBc=', 116, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YBYphDGEZBc=', 116, -1000, 1000),DecodeDecimal('MowtE92RxsE=', 116, -1000, 1000),DecodeDecimal('MowtE92RxsE=', 116, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = " 7. �������� ��� ����� ������� �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YBYphDGEZBc=', 118, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ��������� ������ ��� ������� ���������� ��� ������ �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s7tnL28eQdw=', 120, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ��������� ����� ���������� ��� ������ �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('awjoBnFfmJA=', 122, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. � ��������� ����� � ������� ���� ��� ��� ����� �� ��� ������������ ����� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('sjrVFv1Iabw=', 126, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sjrVFv1Iabw=', 126, -1000, 1000),DecodeDecimal('I5i6/5fryKE=', 126, -1000, 1000),DecodeDecimal('I5i6/5fryKE=', 126, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = " 8. �������� �� �������������� ��� ��� �������� ������ ��� �������� �����: �� ����� �������������� ���� ��������������� ������� �����: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sjrVFv1Iabw=', 128, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ������ ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RkmmAfamDTY=', 130, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���� ��� ������� �������. �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wKKNJHS6KI8=', 132, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ����� ��� ����� ����� ������ �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('Ghs29hxGe+E=', 136, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ghs29hxGe+E=', 136, -1000, 1000),DecodeDecimal('Ud02PJiwkW4=', 136, -1000, 1000),DecodeDecimal('Ud02PJiwkW4=', 136, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = " 9. �������� �� ����� ����� � �������� ���� ���������� ���� ��������������� ������� ��� ��������� ���: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ghs29hxGe+E=', 138, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� �� ������ ��� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Kv6BXm0aYW4=', 140, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� �� ����� ��� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Kv6BXm0aYW4=', 142, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��� ������ ��� �������� ��� ��� ���������� ����� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('lOOp73XkMW8=', 146, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lOOp73XkMW8=', 146, -1000, 1000),DecodeDecimal('0yN1TXoT844=', 146, -1000, 1000),DecodeDecimal('0yN1TXoT844=', 146, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = " 10. ��������� �� ����� �������� : � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lOOp73XkMW8=', 148, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� �������� ����� �� ����������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i65i9Y30cUQ=', 150, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� �������� ����� �� �������� ���� ���� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VBffBEveeTk=', 152, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� �������� ����� �� �������� ��� �� ����������� � ������ ��� ��� ���������� (��������) �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('O6sp9E/J5Ks=', 156, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O6sp9E/J5Ks=', 156, -1000, 1000),DecodeDecimal('rCSWypO/y28=', 156, -1000, 1000),DecodeDecimal('rCSWypO/y28=', 156, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = " 11. ������� �� �� ���������� ������: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0RpGGCxorWY=', 158, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ������ ����� ������� ���� ������ �� ���������� ���� ��� ���� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0RpGGCxorWY=', 160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���������� ������ ��� ���������� ���� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QVPL7lfwPuM=', 162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��������� �� ����� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('9KdekcZPwtY=', 166, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9KdekcZPwtY=', 166, -1000, 1000),DecodeDecimal('GQcnV6pkIaU=', 166, -1000, 1000),DecodeDecimal('GQcnV6pkIaU=', 166, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = " 12. ��������� ��� ���������� ����������� ��� ��������: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rCj98UsvdUI=', 168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���� ��������� ��� ����������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jpWDIWMettk=', 170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ������-�������� ��� ����������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jpWDIWMettk=', 172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Dm+J+CSussU=', 174, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. ��������-����� �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('DzQTe78VNHU=', 176, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DzQTe78VNHU=', 176, -1000, 1000),DecodeDecimal('Ya61lxqbl6Y=', 176, -1000, 1000),DecodeDecimal('Ya61lxqbl6Y=', 176, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = " 13. ��������� �� ����� ��������: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('38tPa2iCitY=', 178, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ���� ������ ��� � ������ ���������� �� ���� ��� ������ �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('38tPa2iCitY=', 180, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " B. Lacan ������ ��� � ������ ���������� �� ���� ��� ������ �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('c+7aOi2tmGE=', 182, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. � ����������� ������ ��� � ������ ���������� �� ���� ��� ������ �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('FIU7vRlZtqs=', 186, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FIU7vRlZtqs=', 186, -1000, 1000),DecodeDecimal('OZJhkXFRmn4=', 186, -1000, 1000),DecodeDecimal('OZJhkXFRmn4=', 186, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = " 14. ��� ���������� ����� �� ����� ��������, � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Dk0CLxOKKdo=', 188, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���� ���������� ����� � ��������� ���������� ���� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dk0CLxOKKdo=', 190, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���� �������� ����� � ��������� ���� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yUmYe8gNm1Q=', 192, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ���� ���������� ����� �� �������� ���� ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('L2pwPd7IeTE=', 196, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L2pwPd7IeTE=', 196, -1000, 1000),DecodeDecimal('Q4vSosmlh+A=', 196, -1000, 1000),DecodeDecimal('Q4vSosmlh+A=', 196, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = " 15. �������� ��� ������� ��� ��� �������������� ������� ���� �������� ��������: � ������� ��� ������ �������� ��������� ���: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L2pwPd7IeTE=', 198, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� ������� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+/R3jdxWdb8=', 200, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� ���� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sTY4zapm/10=', 202, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� ��������� �������� ��� ��� ��������� ��� ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sTY4zapm/10=', 204, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. ��� ����� ��� �� ����� ��� ������� �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 15;
    var weight = DecodeNumber('rgpVFY0JqIU=', 206, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rgpVFY0JqIU=', 206, -1000, 1000),DecodeDecimal('rDbEXKCitwE=', 206, -1000, 1000),DecodeDecimal('rDbEXKCitwE=', 206, -1000, 1000));
    question.num = 16;
    question.answers.length = 0;
    question.shortTextQuestion = " 16. ������������ �� ����� �";
    question.noChoice = false;
    for (i = 0; i < orderLeft15.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD15", i);
        choice[1] = GetSelextedItemRight("idDD15", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft15.length; j++)
        {
            if (listLeft15[j] === choice[0])
            {
                valuation.push(listRight15[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('+5gCLD9dLEA=', 216, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+5gCLD9dLEA=', 216, -1000, 1000),DecodeDecimal('UqChdr+pNGs=', 216, -1000, 1000),DecodeDecimal('UqChdr+pNGs=', 216, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = " 17. �������� �� ����� � �������� ���� �������� ���������� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3EK3v5MTQd8=', 218, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���� \"����������\" ��� �������� �� ����� �� �� ����, ��� ��������� ��� �������� ��� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3EK3v5MTQd8=', 220, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���� ��������� ��� ������� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WI+p+wv8Iq4=', 222, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��� ���� ������� ����� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('hcARKb60QtE=', 226, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hcARKb60QtE=', 226, -1000, 1000),DecodeDecimal('8b5K2keq8F0=', 226, -1000, 1000),DecodeDecimal('8b5K2keq8F0=', 226, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = " 18. �������� �� ����� � ����� ������������ � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hcARKb60QtE=', 228, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ������ ��� �� ���� �������, ��� \"������������\" �� ���������� ������� ��� ���������� ���� �������� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sxIFXu2Dhx4=', 230, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� ������� ������������ ��� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TSh5vK2jKPM=', 232, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��� �������� ��� �������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('nMvfcZuwA9o=', 236, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nMvfcZuwA9o=', 236, -1000, 1000),DecodeDecimal('aDdrqBxACQk=', 236, -1000, 1000),DecodeDecimal('aDdrqBxACQk=', 236, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = " 19. �������� �� ����� ���� �������� ������� 24 bit ����� �������� ������������ ��: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nMvfcZuwA9o=', 238, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. 256 ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xul4b35JpKU=', 240, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. 256 � 24 = 6.144 ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FdytWsAtZhs=', 242, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. 256 �256 �256 = 16,7 ����������� �������. �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('H06rApK4SRk=', 246, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H06rApK4SRk=', 246, -1000, 1000),DecodeDecimal('QuqXKv2wo48=', 246, -1000, 1000),DecodeDecimal('QuqXKv2wo48=', 246, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = " 20. �������� �� ����� ���� �������� ������� �� ������� ���� ������������ �������� �������������� �� ��������� ��� ������������ � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H06rApK4SRk=', 248, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �������� ��� ���� ��� ��� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tiXbH32X72Y=', 250, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �������� ��� �������� ��� ��� ���� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tiXbH32X72Y=', 252, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �������� ��� ������ ��� ��� ��������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('ejflDeD5/d8=', 256, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ejflDeD5/d8=', 256, -1000, 1000),DecodeDecimal('sacYjdGfIA8=', 256, -1000, 1000),DecodeDecimal('sacYjdGfIA8=', 256, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = " 21. ���� ��� ��� �������� ������� ������: � ����������� (digitization) ������� ��� ��������� �� ������� ����� ����� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RjsmrOEDLOI=', 258, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ��������� ��� ���������� ������� �� ������� ����� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RjsmrOEDLOI=', 260, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ���������� ������������ ���� ����������� �� ������� ���� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jNe0SXtNho4=', 262, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. � ��������� �������� �� ������� ���� ���� ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
    var weight = DecodeNumber('aSNKscsC0CU=', 266, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aSNKscsC0CU=', 266, -1000, 1000),DecodeDecimal('2UCB9YkGH7g=', 266, -1000, 1000),DecodeDecimal('2UCB9YkGH7g=', 266, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = " 22. �������� �� ����� � ����������� ������� ��� ��������� ����� ������� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aSNKscsC0CU=', 268, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� �� ������� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BmcDkY5y2O4=', 270, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��������� �� �� ����� �������� ������������ �������. �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NZ70BreL+lM=', 272, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� ��� ��������������� ��� �� ����������� ����������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
    var weight = DecodeNumber('PERovUcdz2Q=', 276, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PERovUcdz2Q=', 276, -1000, 1000),DecodeDecimal('NK+vL2Ak618=', 276, -1000, 1000),DecodeDecimal('NK+vL2Ak618=', 276, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = " 23. �������� �� �����. ���� �� ���������� ������������ � ������ ������������ �� ���������� �������� ������. ��� ����������� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9bG1cTizx00=', 278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� ���� �������� ���� pixel �� ���� ������ ��� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9bG1cTizx00=', 280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� ������� ���� pixel �� ��� ������ ��� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Frhi6RJAW0E=', 282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� �������� ���� pixel �� ��� ������ ��� ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 23;
    var weight = DecodeNumber('c9khKZMiD8E=', 286, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('c9khKZMiD8E=', 286, -1000, 1000),DecodeDecimal('H/qrvosWZf4=', 286, -1000, 1000),DecodeDecimal('H/qrvosWZf4=', 286, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = " 24. �������� �� �����. � ������������� ����� ��� ���������� ��� ��� ������, ��������� ���: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('c9khKZMiD8E=', 288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� ����� ����������� ��� ���������, �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kYlmLSKQ4n8=', 290, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� ������ � ��� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DpaFIuxmdu4=', 292, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� ����������� ��� ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DpaFIuxmdu4=', 294, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. ��� ���������� ��� �������. �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
    var weight = DecodeNumber('cSs6kIa1VNQ=', 296, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cSs6kIa1VNQ=', 296, -1000, 1000),DecodeDecimal('RtZj6TBgeZw=', 296, -1000, 1000),DecodeDecimal('RtZj6TBgeZw=', 296, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "25. ������� ��� ���������� ��������.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cSs6kIa1VNQ=', 298, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� ����������� �������������� �������� �� ��� ������ ���� ���������� ����� �� ������� ������� ��� �������. �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Gmsai1pzt7o=', 300, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ������� ��� ��������������� ��� ������ ��� ������ ���������� �� ������� (resolution) ��� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WGzeQgUklbg=', 302, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " � �. � ������� ��� ��������������� ��� ������ ��� ������ ���������� �� �������������� ��� ����� (ppi  pixels per inch). �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oBKfJSWtmEg=', 304, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. �� ���������� ��� ������� ������� ���� ������ ������ ��� ���������� ��� �� �������������� ��� ��� ���������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('TsgZ8LwnfFs=', 306, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TsgZ8LwnfFs=', 306, -1000, 1000),DecodeDecimal('Vx8NKSs6A78=', 306, -1000, 1000),DecodeDecimal('Vx8NKSs6A78=', 306, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "26. �� ������ BMP �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Up6ZjLi+3Ks=', 308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Up6ZjLi+3Ks=', 310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('G3sQ/RNaaqc=', 312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('oHrEAkH0ILg=', 316, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oHrEAkH0ILg=', 316, -1000, 1000),DecodeDecimal('zPZA4uOvTRs=', 316, -1000, 1000),DecodeDecimal('zPZA4uOvTRs=', 316, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "27. ����� ��� ���� �������� ������ ����������� ������� ����������� �� ���������:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oHrEAkH0ILg=', 318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('34egCJFBwZI=', 320, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('34egCJFBwZI=', 322, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. BMP";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
    var weight = DecodeNumber('+g37/RtXxaU=', 326, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+g37/RtXxaU=', 326, -1000, 1000),DecodeDecimal('ORoLuhFeN/4=', 326, -1000, 1000),DecodeDecimal('ORoLuhFeN/4=', 326, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "28. ����� ��� ���� �������� ������ ����������� ������� ����� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+g37/RtXxaU=', 328, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kpE/CzLvZ9I=', 330, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7i5JrOVP9/4=', 332, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. GIF";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('GyWIRj6LFo8=', 336, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GyWIRj6LFo8=', 336, -1000, 1000),DecodeDecimal('KmJddhvedik=', 336, -1000, 1000),DecodeDecimal('KmJddhvedik=', 336, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "29. �������� �� ����� �� �� ������ �� ��� �������ܻ, �� ��� ��������� ����������� ��� photoshop �� ����� �� ������������ �����������, ���� �� ���������� ��� office ��� windows �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GyWIRj6LFo8=', 338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ���������� ����������� ��� ���������� �������� ���� �� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r7955vl1uuo=', 340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������ ����� ���� ������� ��� ������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fK12kcgo75A=', 342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ���������� �������� �� Layers";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 29;
    var weight = DecodeNumber('RR2Xcqz5Cuo=', 346, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RR2Xcqz5Cuo=', 346, -1000, 1000),DecodeDecimal('HNg4yyD9Eiw=', 346, -1000, 1000),DecodeDecimal('HNg4yyD9Eiw=', 346, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "30. �������� �� ����� ��� ������� �������� �� ��� �������� ��� �� ��� ����������� ��� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RR2Xcqz5Cuo=', 348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Edit";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MBy/XRyTehk=', 350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Window.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MBy/XRyTehk=', 352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Select";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 30;
    var weight = DecodeNumber('HHmPi9PsZ0w=', 356, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HHmPi9PsZ0w=', 356, -1000, 1000),DecodeDecimal('ZWZuz5lP6Js=', 356, -1000, 1000),DecodeDecimal('ZWZuz5lP6Js=', 356, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "31. ��������� �� ����� �������� : � ������� ���� ��� ���������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h3Z47by9fyY=', 358, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� ��������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h3Z47by9fyY=', 360, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� �� �������� ��� �� ����� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('khLO9CTLai8=', 362, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���������� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
    var weight = DecodeNumber('+7iX9/UtCrk=', 366, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+7iX9/UtCrk=', 366, -1000, 1000),DecodeDecimal('kvVPCEk4nZw=', 366, -1000, 1000),DecodeDecimal('kvVPCEk4nZw=', 366, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "32. ��������� �� ����� �������� � �������� ������ ������������ ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('itvEtiRwcAs=', 368, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. BMP";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8E2SkOHMeRk=', 370, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B.TIFF";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8E2SkOHMeRk=', 372, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. PNG";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4pmemsnl0IQ=', 374, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. �� ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
    var weight = DecodeNumber('wyXf///JY44=', 376, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wyXf///JY44=', 376, -1000, 1000),DecodeDecimal('+nf/O3MsRkE=', 376, -1000, 1000),DecodeDecimal('+nf/O3MsRkE=', 376, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "33. ��������� �� ����� �������� � ����� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r0GnWDDBubY=', 378, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� �������� ��� ��� ���������� ��������� ���� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r0GnWDDBubY=', 380, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� �������� ��� ��� ����������� ������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('k3IJYsEPpXI=', 382, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� �������� ��� ��� �������� pixels ���� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 33;
    var weight = DecodeNumber('jNKR0n7aWL8=', 386, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jNKR0n7aWL8=', 386, -1000, 1000),DecodeDecimal('HxwBcXBStLo=', 386, -1000, 1000),DecodeDecimal('HxwBcXBStLo=', 386, -1000, 1000));
    question.num = 34;
    question.answers.length = 0;
    question.shortTextQuestion = "34. ������������� ��� ����� �� �� ������";
    question.noChoice = false;
    for (i = 0; i < orderLeft33.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD33", i);
        choice[1] = GetSelextedItemRight("idDD33", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft33.length; j++)
        {
            if (listLeft33[j] === choice[0])
            {
                valuation.push(listRight33[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 34;
    var weight = DecodeNumber('sEgYUR5YjXQ=', 396, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sEgYUR5YjXQ=', 396, -1000, 1000),DecodeDecimal('rpjwuPcIntw=', 396, -1000, 1000),DecodeDecimal('rpjwuPcIntw=', 396, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "35. ��������� �� �������������� ��� ������ ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sEgYUR5YjXQ=', 398, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� ������� �� �� ����� ��� ������������ ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QercIgPyGfM=', 400, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���� ������ ����� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QercIgPyGfM=', 402, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���������� �� ��������� �� ������� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
    var weight = DecodeNumber('Fzu2AoSW1ZQ=', 406, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Fzu2AoSW1ZQ=', 406, -1000, 1000),DecodeDecimal('38cpu2JU6uE=', 406, -1000, 1000),DecodeDecimal('38cpu2JU6uE=', 406, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "36. ��������� �� ����� � ������ ����� ���� ������� ������ �� ����������� �� ������ raw, ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Fzu2AoSW1ZQ=', 408, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������ ������ �� ������������ ���� ��� �� ��������� Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1YeFFHcn+hE=', 410, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. � ������ ������ �� ������������ ���� ��� �� ��������� Corel";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('S4lYJ07t1g4=', 412, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ���������� ������ ������� ��� ������������ ���� ��� ����������� ��� ������ ��� ��� ��������� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
    var weight = DecodeNumber('TAa3d39O7Kw=', 416, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TAa3d39O7Kw=', 416, -1000, 1000),DecodeDecimal('U/t9VThUQog=', 416, -1000, 1000),DecodeDecimal('U/t9VThUQog=', 416, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "37. ��������� �� ����� ��� ������ ���� ������������ �� ����� TIFF ��� ��� �� JPEG  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/40aLMuLfVQ=', 418, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� �� ���������� layers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/40aLMuLfVQ=', 420, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ��������� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('maRRSvJlRyk=', 422, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������ ��� ���� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
    var weight = DecodeNumber('KmGSlg05Hes=', 426, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KmGSlg05Hes=', 426, -1000, 1000),DecodeDecimal('b+YvvrCWnRI=', 426, -1000, 1000),DecodeDecimal('b+YvvrCWnRI=', 426, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "38. ��������� �� ����� �� ��������� laser  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KmGSlg05Hes=', 428, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. ����� ���������� �� ����� �� ������ ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PXpZG5XPhFs=', 430, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lKyQmef3sCY=', 432, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ����������� ��� ����� ����� ��� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 38;
    var weight = DecodeNumber('2gMDHuODMzY=', 436, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2gMDHuODMzY=', 436, -1000, 1000),DecodeDecimal('62PleqL2efY=', 436, -1000, 1000),DecodeDecimal('62PleqL2efY=', 436, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "39. ��������� �� �����. � ������ ��� ������� ����� ������� �� ��� �� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yXg1JFgZ9Gs=', 438, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ��� ��� ��������� ������������ �������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yXg1JFgZ9Gs=', 440, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� Flash � ������ ����� ��������� �������� ���� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XR81qtakrfM=', 442, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� Form-z � ������ ����� ��������� ����� �� ���������� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
    var weight = DecodeNumber('fRxSJE3IsWI=', 446, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fRxSJE3IsWI=', 446, -1000, 1000),DecodeDecimal('JmizzR7YvhM=', 446, -1000, 1000),DecodeDecimal('JmizzR7YvhM=', 446, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "40. ��������� �� �����. �� ����� \"Select\":  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fRxSJE3IsWI=', 448, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� Flash Adobe Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UZwgQtT8uPE=', 450, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ��� �� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yGcDQrVlVx0=', 452, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ���� ��� ��������� Adobe photoshop.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
    var weight = DecodeNumber('GHEfXOb65KU=', 456, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GHEfXOb65KU=', 456, -1000, 1000),DecodeDecimal('jgEGUZagwoE=', 456, -1000, 1000),DecodeDecimal('jgEGUZagwoE=', 456, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "41. ��������� �� �����. �� ������� �� ��� �� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GHEfXOb65KU=', 458, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. A������ ���� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aD8BiYvfgq0=', 460, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ���� ��� ������� ��� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7WYD0eut7f8=', 462, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �� ������ ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 41;
    var weight = DecodeNumber('ZlsLqk3UoAc=', 466, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZlsLqk3UoAc=', 466, -1000, 1000),DecodeDecimal('CscpsscllSQ=', 466, -1000, 1000),DecodeDecimal('CscpsscllSQ=', 466, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "42. ��������� �� �����. �� ���������� �������� ��� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZlsLqk3UoAc=', 468, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ����� ���� ��������� ������������ ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EFZ/x9Bjdcs=', 470, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �������� ���� ��������� ������������ ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Y3h99aqPJnA=', 472, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ������ ������� ����� �File�.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kUA5SRN1a98=', 474, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��������� ���� ��������� ���� ��� ��������� ���� �� �������� ��� ������������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
    var weight = DecodeNumber('oZhsIfO4e0U=', 476, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oZhsIfO4e0U=', 476, -1000, 1000),DecodeDecimal('hZk5j4dBZ24=', 476, -1000, 1000),DecodeDecimal('hZk5j4dBZ24=', 476, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "43. ��������� ���� ����� �� ����� �������������� ��� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('40FkeyZMv4M=', 478, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dkDtPlPjGz0=', 480, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dkDtPlPjGz0=', 482, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('llilsvaRwFw=', 484, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. �� ������ ������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
    var weight = DecodeNumber('VFoJm/uBJJw=', 486, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VFoJm/uBJJw=', 486, -1000, 1000),DecodeDecimal('B05RKaoV+1I=', 486, -1000, 1000),DecodeDecimal('B05RKaoV+1I=', 486, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "44. ��������� �� �����:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VFoJm/uBJJw=', 488, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� Adobe Photoshop ���� ��� ����� ��������� ��� ����������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SsVmFnURkjo=', 490, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� Adobe Photoshop ���� ��� ������� ������ ���������: ��� �� ��������� ��� ��� ��� ����������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cQC5RD0HA7E=', 492, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� Adobe Photoshop ���� ��� ����� ��������� ��� ����������� ������� ��� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
    var weight = DecodeNumber('2NHxsQxSz9Q=', 496, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2NHxsQxSz9Q=', 496, -1000, 1000),DecodeDecimal('iGZPGXK3XuE=', 496, -1000, 1000),DecodeDecimal('iGZPGXK3XuE=', 496, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "45. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2NHxsQxSz9Q=', 498, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �� ������� SHIFT �������� ��� ����������� � ���� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wVqs23ycMEE=', 500, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �� ������� TAB ��������� ��� ������������ �� ������� ��� � ������ ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wVqs23ycMEE=', 502, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� �� ������� D �������� ��� ����������� � ���� ������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 45;
    var weight = DecodeNumber('UoLD3XIG8Jo=', 506, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UoLD3XIG8Jo=', 506, -1000, 1000),DecodeDecimal('jYI92JyqDcM=', 506, -1000, 1000),DecodeDecimal('jYI92JyqDcM=', 506, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "46. ��������� �� �����. � �������� ���� ���������� ���������� �������� �� ���������� ��� ���� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('z+66erd/JjY=', 508, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� ����������� ���������� ��� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('z+66erd/JjY=', 510, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ��� ������� ���������� ����� ���� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zG3c5aTGhDk=', 512, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ��� ����� ������������ � ������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
    var weight = DecodeNumber('h3MQtSFLO6I=', 516, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h3MQtSFLO6I=', 516, -1000, 1000),DecodeDecimal('S5daujn4E1Q=', 516, -1000, 1000),DecodeDecimal('S5daujn4E1Q=', 516, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "47. ��������� �� �����. ������� �� �� ������� ������ �� ������ ����� ��� �� ����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h3MQtSFLO6I=', 518, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �������� ���������������� ���� �� ����� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QHXhlqjKI+E=', 520, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ���� ��������������� ��� �� ��������� �� ����� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+CPby8BSwEU=', 522, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��������� ��� ���������� ��� ������� �� ����� ������������� ��� �� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MVq6W/CIIM4=', 524, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. �� �������� ������������� �� ����� ���������� ��� �����������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
    var weight = DecodeNumber('3NpqbIesUY0=', 526, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3NpqbIesUY0=', 526, -1000, 1000),DecodeDecimal('es2qEUHfUGs=', 526, -1000, 1000),DecodeDecimal('es2qEUHfUGs=', 526, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "48. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XhNNEZGw1o0=', 528, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �������� ��� ������������� ��������� ���� ��������� ���� ��� ��������� ���� �� �������� ��� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XhNNEZGw1o0=', 530, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �������� ��� ������������� ��������� ���� ������������ ����� ��� ������ ������������ ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IxMfzvLCKII=', 532, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� �������� ��� ������������� ��������� ���� ����� ���� ��� ��� ����� ������������ ���� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nSN5LczlbGU=', 534, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. �� �������� ��� ������������� ��������� �� ��� �� ��������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 48;
    var weight = DecodeNumber('KVFb8arRMVE=', 536, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KVFb8arRMVE=', 536, -1000, 1000),DecodeDecimal('c3S1Fqnv/p8=', 536, -1000, 1000),DecodeDecimal('c3S1Fqnv/p8=', 536, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "49. ��������� �� �����. � ��������� ��� ��������� ��� ������� ���������� �� �� ��������� ��� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KVFb8arRMVE=', 538, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� �� ��������� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/N12bcte7zs=', 540, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� �� ��������� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Vaf19YBGAWU=', 542, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��� ������� resize windows to fit.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 49;
    var weight = DecodeNumber('/hbu53TIp9E=', 546, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/hbu53TIp9E=', 546, -1000, 1000),DecodeDecimal('dhiLkEG8hvM=', 546, -1000, 1000),DecodeDecimal('dhiLkEG8hvM=', 546, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "50. ��������� �� �����. ������� zoom ��� ��������� �� �� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VJWeWFcECM0=', 548, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Control + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VJWeWFcECM0=', 550, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Control + Alt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PbRRXkDV8SQ=', 552, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Control + ������� -";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 50;
    var weight = DecodeNumber('QCAoMA3c0Io=', 556, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QCAoMA3c0Io=', 556, -1000, 1000),DecodeDecimal('QSDFjkWpZ0Y=', 556, -1000, 1000),DecodeDecimal('QSDFjkWpZ0Y=', 556, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = false;
    question.shortTextQuestion = "51. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mTlRjFqQG/Y=', 558, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Zoom Out = Alt + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mTlRjFqQG/Y=', 560, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Zoom Out = Alt + Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XFuovKHy1mk=', 562, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Zoom Out = Alt + ������� -";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 51;
    var weight = DecodeNumber('J12M+qKVYnA=', 566, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J12M+qKVYnA=', 566, -1000, 1000),DecodeDecimal('7JcX6Q4xdi4=', 566, -1000, 1000),DecodeDecimal('7JcX6Q4xdi4=', 566, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = false;
    question.shortTextQuestion = "52. ��������� �� �����. � ������� ��� ���� � ������� ��� �� ����� view �� ��� ���������� ������� ��� �� zoom ��� ��� ������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G7Z3w07E7Kk=', 568, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ ����������� �� ������ ��� ���� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G7Z3w07E7Kk=', 570, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ��������� ���� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ITAoahRc+oc=', 572, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ������ �� �������������� ��� �����������, ���� ��� ����������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion53()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 52;
    var weight = DecodeNumber('X+8l1knrXJI=', 576, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('X+8l1knrXJI=', 576, -1000, 1000),DecodeDecimal('M9dX7KExA3c=', 576, -1000, 1000),DecodeDecimal('M9dX7KExA3c=', 576, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = false;
    question.shortTextQuestion = "53. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('X+8l1knrXJI=', 578, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ��������� �� ������ �������� ��� ������� ��������� ��� ����� view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NHln3YoepeU=', 580, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �� ��������� �� ������ �������� ��� ������� ��������� ��� ����� File Preferences � ��� ��� ������ Info (�����������).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NHln3YoepeU=', 582, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������� �� ������ �������� ��� ������� ��������� ��� ����� window.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion54()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 53;
    var weight = DecodeNumber('NCpu1KOLBHs=', 586, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NCpu1KOLBHs=', 586, -1000, 1000),DecodeDecimal('/dPLhXHjCdo=', 586, -1000, 1000),DecodeDecimal('/dPLhXHjCdo=', 586, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = false;
    question.shortTextQuestion = "54. ��������� �� �����. ��� �� ������������ ��� ������ - ������ ������ ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NCpu1KOLBHs=', 588, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ����� � ������ ��������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pbnGL/o+/pQ=', 590, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ����� � ������ ������ �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZyDRnWgstOA=', 592, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ����� � �������� ��� ������� �� ����� �� ������� ��� ��������� ������ ����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hUQI5w2hJ68=', 594, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��������� � ������ ��������� ���� �������-������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion55()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 54;
    var weight = DecodeNumber('Zbk1xkPselU=', 596, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Zbk1xkPselU=', 596, -1000, 1000),DecodeDecimal('DSOMXNInxfU=', 596, -1000, 1000),DecodeDecimal('DSOMXNInxfU=', 596, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = false;
    question.shortTextQuestion = "55. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/s8MUXVJcXg=', 598, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ��������� ������� ��������� ��� ����� view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/s8MUXVJcXg=', 600, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ��������� ������� ��������� ��� ����� File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VyQMgALb3ig=', 602, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������� ��������� ������� ��������� ��� ����� widow.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion56()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 55;
    var weight = DecodeNumber('3Vz/mOnthtk=', 606, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3Vz/mOnthtk=', 606, -1000, 1000),DecodeDecimal('tvOz68IdpWE=', 606, -1000, 1000),DecodeDecimal('tvOz68IdpWE=', 606, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "56. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nBIL0NZBjlg=', 608, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ����������� ��� ������������� ������ ��������� ��� ����� view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nBIL0NZBjlg=', 610, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ����������� ��� ������������� ������ ��������� ��� ����� file.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2nts69R3yVk=', 612, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������� ����������� ��� ������������� ������ ��������� ���� ������������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion57()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 56;
    var weight = DecodeNumber('yPl3FZRB5r4=', 616, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yPl3FZRB5r4=', 616, -1000, 1000),DecodeDecimal('Qg++Hfw9UzU=', 616, -1000, 1000),DecodeDecimal('Qg++Hfw9UzU=', 616, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = false;
    question.shortTextQuestion = "57. ��������� ��� ������ ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yPl3FZRB5r4=', 618, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ����� �������� ��������� �������� �� ��������: color style-gridline every-lock/unlock.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P8a+uH9p1h0=', 620, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ����� �������� ��������� �������� �� ��������: color style-gridline every-snap to.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gX89b/xQRhY=', 622, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ����� �������� ��������� �������� �� ��������: color style-gridline every-subdivision.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion58()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 57;
    var weight = DecodeNumber('e1XyNGz7iLY=', 626, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('e1XyNGz7iLY=', 626, -1000, 1000),DecodeDecimal('AYzbZ1Yh0Is=', 626, -1000, 1000),DecodeDecimal('AYzbZ1Yh0Is=', 626, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = false;
    question.shortTextQuestion = "58. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e1XyNGz7iLY=', 628, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� floating selection ���� ��������� ��������� �� ����� ��� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rW6wEWAKBHU=', 630, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� floating selection ���� ��������� ����� �� ����� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lTUCZYJkBMo=', 632, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������� floating selection ���� ������������ ��������� �� ����� ��� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion59()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 58;
    var weight = DecodeNumber('+GGTZ4KDTD4=', 636, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+GGTZ4KDTD4=', 636, -1000, 1000),DecodeDecimal('iM49H9e9vaE=', 636, -1000, 1000),DecodeDecimal('iM49H9e9vaE=', 636, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = false;
    question.shortTextQuestion = "59. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oLhrTtUoNeE=', 638, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� Constrain Proportions ������� ���� ���� ����� ������ �� Resample image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oLhrTtUoNeE=', 640, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� Constrain Proportions ������� ���� ���� ����� �������� �� Resample image.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r7TTipJtWq8=', 642, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� Constrain Proportions ������� ���� ���� ��������� ��� ���������� ��� ������� ���������� ��� �� ������� �������� Resample image.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion60()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 59;
    var weight = DecodeNumber('UKS0ZmfB3Y4=', 646, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UKS0ZmfB3Y4=', 646, -1000, 1000),DecodeDecimal('mfqR2tFJQtw=', 646, -1000, 1000),DecodeDecimal('mfqR2tFJQtw=', 646, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = false;
    question.shortTextQuestion = "60. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UKS0ZmfB3Y4=', 648, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������ ���������� ���� ������� ������� ���������� ��� ����� Image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B+2ExO/66ds=', 650, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������ ���������� ���� ������� ��� ��������� �� ������� (layer) ������� ���������� ��� �������� Transform > Scale ���� ��� �� ����� Edit.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('B+2ExO/66ds=', 652, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������ ���������� ���� ������� ������� ���������� ��� ����� File.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion61()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 60;
    var weight = DecodeNumber('WDnH6t1N+Cc=', 656, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WDnH6t1N+Cc=', 656, -1000, 1000),DecodeDecimal('OEhR3JlGB6M=', 656, -1000, 1000),DecodeDecimal('OEhR3JlGB6M=', 656, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = false;
    question.shortTextQuestion = "61. ��������� �� �����. �������� �� ����� �� ������� ���� �������� ����������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H+TbCe6mIW0=', 658, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� Interface ��� �� �������� Preferences.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H+TbCe6mIW0=', 660, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �������� Control + 1.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pP7GlSbyoik=', 662, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ �������� Control + 4.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion62()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 61;
    var weight = DecodeNumber('KnbL1CZXoRY=', 666, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KnbL1CZXoRY=', 666, -1000, 1000),DecodeDecimal('CgGk0jJ/d6Q=', 666, -1000, 1000),DecodeDecimal('CgGk0jJ/d6Q=', 666, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = false;
    question.shortTextQuestion = "62. ��������� �� �����. ��� �� ����� �� ������� ������ ���� �������� RGB ����������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KnbL1CZXoRY=', 668, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Control + 3";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p9xr7RXyMM4=', 670, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Control + 2";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lngKpN1L/+s=', 672, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Control + 1";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion63()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 62;
    var weight = DecodeNumber('bXFE+AZ2R2E=', 676, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bXFE+AZ2R2E=', 676, -1000, 1000),DecodeDecimal('xkjDReyV8/0=', 676, -1000, 1000),DecodeDecimal('xkjDReyV8/0=', 676, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = false;
    question.shortTextQuestion = "63. ��������� �� ����� � �� �����. �������� �������� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NczSBFPmmpE=', 678, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3XuQQY/pcuo=', 680, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kQiMEFcWuP4=', 682, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion64()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 63;
    var weight = DecodeNumber('DcooLDInsUM=', 686, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DcooLDInsUM=', 686, -1000, 1000),DecodeDecimal('cQfmhFonNzk=', 686, -1000, 1000),DecodeDecimal('cQfmhFonNzk=', 686, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = false;
    question.shortTextQuestion = "64. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DcooLDInsUM=', 688, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ������� anti aliased ��������������� ��� ��� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ehlTHYZ4naU=', 690, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� Deselect ��� �� ����� Select ��������������� ��� ��� ����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ehlTHYZ4naU=', 692, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ �� ������ ������� ���� ��� ��� ���������� ������� ��������������� ��� ��� ����������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion65()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 64;
    var weight = DecodeNumber('GD66ypOgeGk=', 696, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GD66ypOgeGk=', 696, -1000, 1000),DecodeDecimal('xu+ncAvSPHQ=', 696, -1000, 1000),DecodeDecimal('xu+ncAvSPHQ=', 696, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = false;
    question.shortTextQuestion = "65. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IFeqZcc3ZIc=', 698, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� pixels �� ���� ����������� 255 ��� ��� �� ���� ������� ����� ����� �����.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IFeqZcc3ZIc=', 700, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� pixels �� ���� ����������� 0 ��� ��� �� ���� ������� ����� ����� �����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5uiYWF4siBg=', 702, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� pixels �� ���� ����������� 100 ��� ��� �� ���� ������� ����� ����� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion66()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 65;
    var weight = DecodeNumber('1RHaCifWlAg=', 706, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1RHaCifWlAg=', 706, -1000, 1000),DecodeDecimal('R35l5wNaSyo=', 706, -1000, 1000),DecodeDecimal('R35l5wNaSyo=', 706, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = false;
    question.shortTextQuestion = "66. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1RHaCifWlAg=', 708, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Pixels �� ���� ����������� 0 ��� ������� ������, 126 ��� ���� ��� 250 ��� �������, ����������� �� ����� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Befhe9qGT3o=', 710, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Pixels �� ���� ����������� 0 ��� ������� ������, 250 ��� ���� ��� 0 ��� �������, ����������� �� ����� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CBVpLB3RUfI=', 712, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Pixels �� ���� ����������� 230 ��� ������� ������, 126 ��� ���� ��� 0 ��� �������, ����������� �� ����� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion67()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 66;
    var weight = DecodeNumber('ekKEIqN5q/s=', 716, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ekKEIqN5q/s=', 716, -1000, 1000),DecodeDecimal('uVrwoi/urpU=', 716, -1000, 1000),DecodeDecimal('uVrwoi/urpU=', 716, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = false;
    question.shortTextQuestion = "67. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ekKEIqN5q/s=', 718, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �� ������ ������� ���������� ��� ������� ��� ������� �� ����������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GJjZAEaga/U=', 720, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �� ������ ������� ���������� ��� ������� �������� �������� ��� ������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GJjZAEaga/U=', 722, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� �� ������ ������� ���������� ��� ������� ��� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion68()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 67;
    var weight = DecodeNumber('G4mGWXYQUko=', 726, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('G4mGWXYQUko=', 726, -1000, 1000),DecodeDecimal('Ki9AawMpkTc=', 726, -1000, 1000),DecodeDecimal('Ki9AawMpkTc=', 726, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = false;
    question.shortTextQuestion = "68. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G4mGWXYQUko=', 728, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ����� ���������� �� ��� ������� ������������ �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nXkI9wLZbSc=', 730, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� ����� ���������� ���� �� ��� ������� ������������ ������ ����������� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Mad0n2STqJo=', 732, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������� ����� ���������� ��� ��� �������� ������ �� ������� ������������ �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LlzsBuRayj8=', 734, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. �� ������� ��� ����� ���������� ���� ������� �������������� ���� ����� ����������� ���� �������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion69()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 68;
    var weight = DecodeNumber('qYsrp/yGogs=', 736, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qYsrp/yGogs=', 736, -1000, 1000),DecodeDecimal('XDKgVVoCAmA=', 736, -1000, 1000),DecodeDecimal('XDKgVVoCAmA=', 736, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = false;
    question.shortTextQuestion = "69. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qYsrp/yGogs=', 738, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ��������� ���� �������� �� ������ �� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dy+LF5n+cVg=', 740, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ���������� ���� �������� ��� ������ �� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jgPadFLSr0U=', 742, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ���������� ���� �������� ������ �� ������� ��� �� ����� ������ ����������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion70()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 69;
    var weight = DecodeNumber('VzdI1Ub909I=', 746, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VzdI1Ub909I=', 746, -1000, 1000),DecodeDecimal('PF2zeXwPvsk=', 746, -1000, 1000),DecodeDecimal('PF2zeXwPvsk=', 746, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = false;
    question.shortTextQuestion = "70. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gaOQbms2JO4=', 748, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������ ����������� �������� �� ����������� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gaOQbms2JO4=', 750, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ����������� ���� ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('noQRc5pIVWc=', 752, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ ����������� ���� ������� �����������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion71()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 70;
    var weight = DecodeNumber('5E49pweELHc=', 756, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5E49pweELHc=', 756, -1000, 1000),DecodeDecimal('U+zmH+xf7r4=', 756, -1000, 1000),DecodeDecimal('U+zmH+xf7r4=', 756, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = false;
    question.shortTextQuestion = "71. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5E49pweELHc=', 758, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� \"�������\" ���� ��������/�������� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oJjkdaYAi1s=', 760, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� \"�������\" ���� ���, ������������, �������� ��� �������� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uRA+lvFO+Og=', 762, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion72()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 71;
    var weight = DecodeNumber('gmEUdBrjTJo=', 766, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gmEUdBrjTJo=', 766, -1000, 1000),DecodeDecimal('Gu9RlNTRYVI=', 766, -1000, 1000),DecodeDecimal('Gu9RlNTRYVI=', 766, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = false;
    question.shortTextQuestion = "72. ��������� �� �����. ��� �� ������� � �� ������� ��� ������� � ����� �������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TlGP6Pa7FfQ=', 768, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���� �������� ��� �� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TlGP6Pa7FfQ=', 770, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ���� �������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Jw4tozjEc30=', 772, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ��������� ���� ���� �������� ���� ���� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion73()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 72;
    var weight = DecodeNumber('i/oFbXadsfA=', 776, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i/oFbXadsfA=', 776, -1000, 1000),DecodeDecimal('aB2KtbBVQzM=', 776, -1000, 1000),DecodeDecimal('aB2KtbBVQzM=', 776, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = false;
    question.shortTextQuestion = "73. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EMv92t06Hpc=', 778, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� ��� �������� �� ������� �� ���� ��� ���� �������� ���� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EMv92t06Hpc=', 780, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ��� �������� �� ������� �� ���� ���� �������� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hc5phVUK/Eg=', 782, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� ��� �������� �� ������� �� ���� ���� ������� ��� ����� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AIc7S390zVI=', 784, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion74()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 73;
    var weight = DecodeNumber('a+qkJSS4rLI=', 786, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('a+qkJSS4rLI=', 786, -1000, 1000),DecodeDecimal('8u1gWsHupwk=', 786, -1000, 1000),DecodeDecimal('8u1gWsHupwk=', 786, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = false;
    question.shortTextQuestion = "74. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r4f8mNJpAyU=', 788, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ���������� ��������� ������ ���� ����� ��������� ��� �� ������� � ��� ����� �� ����� �� �� ���� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r4f8mNJpAyU=', 790, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ���������� ������ ���� ����� ��������� ���� ��� ������ �������� � ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KO1PsbQYP8w=', 792, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ���������� ������ ���� ����� ��������� ��� ���� �� ��� ������� � ��� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion75()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 74;
    var weight = DecodeNumber('eK+IukASaCo=', 796, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eK+IukASaCo=', 796, -1000, 1000),DecodeDecimal('gtyXixBPUIs=', 796, -1000, 1000),DecodeDecimal('gtyXixBPUIs=', 796, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = false;
    question.shortTextQuestion = "75. ��������� �� �����. ���������� �������� ��� ������� �� ����� ������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eK+IukASaCo=', 798, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������ \"������������\", ���� ��� �� ����� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vdtAvfu7oQ8=', 800, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ \"������������\", ���� ��� ��� ������ ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vdtAvfu7oQ8=', 802, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ������ \"������������\", �� ��������� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion76()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 75;
    var weight = DecodeNumber('JHD//PIrh7M=', 806, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JHD//PIrh7M=', 806, -1000, 1000),DecodeDecimal('3Qms3gTFA0o=', 806, -1000, 1000),DecodeDecimal('3Qms3gTFA0o=', 806, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = false;
    question.shortTextQuestion = "76. ��������� �� �����. ������������ ��� ������������ ��������� ���������� ��� �������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ujiqdjEhOIA=', 808, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� Alt/Option + ���� ��� ��������� ��� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ujiqdjEhOIA=', 810, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� Control + ���� ��� ��������� ��� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AwxYTbTORD0=', 812, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� Shift + ���� ��� ��������� ��� ������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion77()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 76;
    var weight = DecodeNumber('uxjcSY3Ok8E=', 816, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uxjcSY3Ok8E=', 816, -1000, 1000),DecodeDecimal('qf1FZ9W7IIU=', 816, -1000, 1000),DecodeDecimal('qf1FZ9W7IIU=', 816, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = false;
    question.shortTextQuestion = "77. ��������� �� �����. ��� �� ��������� ��� ����� �������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uxjcSY3Ok8E=', 818, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �������� �� Alt ������� ���� ��� ������� �������� ��� ���������� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('39RY0xtzUpM=', 820, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� ������� �������� ��� ���������� ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('39RY0xtzUpM=', 822, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� �������� �� Shift ������� ���� ��� ������� �������� ��� ���������� ��� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion78()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 77;
    var weight = DecodeNumber('OLnF0/wUBic=', 826, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OLnF0/wUBic=', 826, -1000, 1000),DecodeDecimal('wGj6YmzwiN4=', 826, -1000, 1000),DecodeDecimal('wGj6YmzwiN4=', 826, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = false;
    question.shortTextQuestion = "78. ��������� �� �����. � ������������� �������� ������� �� �� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OLnF0/wUBic=', 828, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fjkgn1u4Aig=', 830, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ���������� ��� ������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XA7qkWJa5bs=', 832, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion79()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 78;
    var weight = DecodeNumber('H1IwE8Vpr2Q=', 836, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H1IwE8Vpr2Q=', 836, -1000, 1000),DecodeDecimal('BP6jDyOrU2A=', 836, -1000, 1000),DecodeDecimal('BP6jDyOrU2A=', 836, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = false;
    question.shortTextQuestion = "79. ��������� �� �����. ��� ��� ����������� ��� ������ ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yvaiywsuLFg=', 838, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ��� ����� ����������� ��� ����� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yvaiywsuLFg=', 840, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� ��� ����� ����������� ����� ����������� �� ����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('41Vtn6oCTqc=', 842, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������� ��� ����� ����������� ������ �� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion80()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 79;
    var weight = DecodeNumber('E1ugVoE3qJ0=', 846, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E1ugVoE3qJ0=', 846, -1000, 1000),DecodeDecimal('tZ4FoY2Yt64=', 846, -1000, 1000),DecodeDecimal('tZ4FoY2Yt64=', 846, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = false;
    question.shortTextQuestion = "80. ��������� �� �����. ��� �� ������������� ��� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5IrwT04UBcY=', 848, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �������� �� ������� Control + ���� ���� ������� ��� ��� �� ��������� ��� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5IrwT04UBcY=', 850, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������� �� ������� Alt + ���� ���� ������� ��� ��� �� ��������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tHf7aX9jd+g=', 852, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �������� �� ������� Shift + ���� ��� ��� �� ��������� ��� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion81()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 80;
    var weight = DecodeNumber('xJgMsppY640=', 856, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xJgMsppY640=', 856, -1000, 1000),DecodeDecimal('fsKVVcfXhzE=', 856, -1000, 1000),DecodeDecimal('fsKVVcfXhzE=', 856, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = false;
    question.shortTextQuestion = "81. ��������� �� �����. � �������� ������� �������� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q9PbFtLY3/A=', 858, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��������� �� �������� �����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q9PbFtLY3/A=', 860, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��������� �� �������� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cz49zx1wYio=', 862, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��������� �� ��������� �������� ��� ������ ��� ������ \"��������\".";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion82()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 81;
    var weight = DecodeNumber('vIWQvAH5qs0=', 866, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vIWQvAH5qs0=', 866, -1000, 1000),DecodeDecimal('yLRprK9pYOw=', 866, -1000, 1000),DecodeDecimal('yLRprK9pYOw=', 866, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = false;
    question.shortTextQuestion = "82. ��������� �� �����. � ���������� ������ ��� ��� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1o8WY50YO50=', 868, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ������� ���� �� ��������� ������� ��� ���� ����� ��� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1o8WY50YO50=', 870, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �������� �� Control ������� �� ������� ���� �� ��������� ������� ��� ���� ����� ��� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6ISpgakNN28=', 872, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� �������� �� Shift ������� �� ������� ���� �� ��������� ���� �������� ��� ���� ����� ��� ������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion83()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 82;
    var weight = DecodeNumber('DBGL6Jff8Tw=', 876, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DBGL6Jff8Tw=', 876, -1000, 1000),DecodeDecimal('6oxBQpDR/9Y=', 876, -1000, 1000),DecodeDecimal('6oxBQpDR/9Y=', 876, -1000, 1000));
    question.answers.length = 0;
    question.num = 83;
    question.isSingleAns = false;
    question.shortTextQuestion = "83. ��������� �� �����. � ������ ��� �������� ���� ������� ����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DBGL6Jff8Tw=', 878, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ����� ����������� �� ��� ������ ��� �������� ����� ��� ��� ������ ��� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wcwZWSl+kNo=', 880, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ������� ��� ����� ����������� �� ��� ������ ��� �������� ����� ��� �� ��������� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eIWa0rHjFeM=', 882, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion84()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 83;
    var weight = DecodeNumber('yhq+3y2DJdE=', 886, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yhq+3y2DJdE=', 886, -1000, 1000),DecodeDecimal('C8hq88JU8Os=', 886, -1000, 1000),DecodeDecimal('C8hq88JU8Os=', 886, -1000, 1000));
    question.answers.length = 0;
    question.num = 84;
    question.isSingleAns = false;
    question.shortTextQuestion = "84. ��������� �� �����. � ������ �������� ���� ������� ����� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yhq+3y2DJdE=', 888, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ���������� �� ������� ���� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+cpgFyfEbGg=', 890, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �� �������� ������� �� ������� ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BwNFrihA/OE=', 892, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ���������� ��� �� ������� ���� ������� �� ��� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WlcFk+vOtYc=', 894, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion85()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 84;
    var weight = DecodeNumber('aDVbSRVcDKg=', 896, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aDVbSRVcDKg=', 896, -1000, 1000),DecodeDecimal('LW0vaSfGkLE=', 896, -1000, 1000),DecodeDecimal('LW0vaSfGkLE=', 896, -1000, 1000));
    question.answers.length = 0;
    question.num = 85;
    question.isSingleAns = false;
    question.shortTextQuestion = "85. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aDVbSRVcDKg=', 898, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ ���� ����� �� ���������� ��� ������ ��������� ��� �������� ��� �������� �� ���������� ����� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wt3sqC6vQG4=', 900, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ���� ����� �� ���������� ��� ������ ��������� ���� ���� �������� ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aWqMYwsFSaE=', 902, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ ���� ����� �� ���������� ��� ������ � ����� ���������� ���� ������ ��� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion86()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 85;
    var weight = DecodeNumber('ICDO3/j72Ws=', 906, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ICDO3/j72Ws=', 906, -1000, 1000),DecodeDecimal('NWQxlE5EQDM=', 906, -1000, 1000),DecodeDecimal('NWQxlE5EQDM=', 906, -1000, 1000));
    question.answers.length = 0;
    question.num = 86;
    question.isSingleAns = false;
    question.shortTextQuestion = "86. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7BtOf+sQtgY=', 908, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ ���� ��������������� ��� ������ � ����� ���������� ���� ������ ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7BtOf+sQtgY=', 910, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ���� ��������������� ��� ������� ������� �� �������� ����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dsIUx/u6v/E=', 912, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ ���� ��������������� ��� ������� ������� ����� ����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion87()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 86;
    var weight = DecodeNumber('sMSO8OCj7aw=', 916, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sMSO8OCj7aw=', 916, -1000, 1000),DecodeDecimal('9qKL6ARXIXI=', 916, -1000, 1000),DecodeDecimal('9qKL6ARXIXI=', 916, -1000, 1000));
    question.answers.length = 0;
    question.num = 87;
    question.isSingleAns = false;
    question.shortTextQuestion = "87. ��������� �� �����. �� ���������� ���� ������� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gOl1bHBaC1E=', 918, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���������� ���� ������ ��� �� ����� Window.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gOl1bHBaC1E=', 920, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ���������� ���� ������ ��� �� ����� File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NMMPm+lpTkc=', 922, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ���������� ���� ������ ��� �� ����� Edit.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion88()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 87;
    var weight = DecodeNumber('YUAm8QBWJ7c=', 926, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YUAm8QBWJ7c=', 926, -1000, 1000),DecodeDecimal('ZjBLHicLSvI=', 926, -1000, 1000),DecodeDecimal('ZjBLHicLSvI=', 926, -1000, 1000));
    question.answers.length = 0;
    question.num = 88;
    question.isSingleAns = false;
    question.shortTextQuestion = "88. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aOq9FLYAP2M=', 928, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � �������� ��������� ������� ���������� ��� ����� ������������ (Edit).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aOq9FLYAP2M=', 930, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � �������� ��������� ������� ���������� ��� ����� ������� (File).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wMblSeIJ/8M=', 932, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � �������� ��������� ������� ���������� ��� ����� �������� (Select).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion89()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 88;
    var weight = DecodeNumber('ws+ZYb/8qZw=', 936, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ws+ZYb/8qZw=', 936, -1000, 1000),DecodeDecimal('b1HrsqJ/nQM=', 936, -1000, 1000),DecodeDecimal('b1HrsqJ/nQM=', 936, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = false;
    question.shortTextQuestion = "89. ��������� �� �����.  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hCsLk9PodoA=', 938, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. H �������� ���������ܻ ������� �� ������� ��� ��������� ������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hCsLk9PodoA=', 940, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � �������� ���������ܻ ������� �� ������� ��������� �����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lDBsEZVUwck=', 942, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � �������� ���������ܻ ������� �� ������� ��� ������� ���������� ��� �� ����� ������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion90()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 89;
    var weight = DecodeNumber('VT75OJ8t2Jk=', 946, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VT75OJ8t2Jk=', 946, -1000, 1000),DecodeDecimal('rfR0bf4mWvA=', 946, -1000, 1000),DecodeDecimal('rfR0bf4mWvA=', 946, -1000, 1000));
    question.answers.length = 0;
    question.num = 90;
    question.isSingleAns = false;
    question.shortTextQuestion = "90. ��������� �� �����. ��� �� ������������� � ������ ��������� ���� ������ �������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SM67ITDlzYQ=', 948, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ��� ������ ��������� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SM67ITDlzYQ=', 950, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� ��� ������ ���������� ��� �� ����� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6YqZ7Jr9ZQM=', 952, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������������� �� �������� ��� ����� ���� ����� ��������� �� ��������� ��� ����� ������������ ��� ���� ����� ��� ������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion91()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 90;
    var weight = DecodeNumber('mJh9jtYI/2c=', 956, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mJh9jtYI/2c=', 956, -1000, 1000),DecodeDecimal('ROZw8s3i+z0=', 956, -1000, 1000),DecodeDecimal('ROZw8s3i+z0=', 956, -1000, 1000));
    question.answers.length = 0;
    question.num = 91;
    question.isSingleAns = false;
    question.shortTextQuestion = "91. ��������� �� �����. ��� �� ����������� ��� ������� ���������� ��� ���������� ���� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ToAahPHj/pg=', 958, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ����� �����������, ���������� ��� ����������� ��� ���� ������� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ToAahPHj/pg=', 960, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� ����� ������������, ���������� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4ll7QSVSpNQ=', 962, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ����� �������� ��� ���������� ��� �����������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion92()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 91;
    var weight = DecodeNumber('UIP1aJQ3/e0=', 966, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UIP1aJQ3/e0=', 966, -1000, 1000),DecodeDecimal('NsMwkJNtY6k=', 966, -1000, 1000),DecodeDecimal('NsMwkJNtY6k=', 966, -1000, 1000));
    question.answers.length = 0;
    question.num = 92;
    question.isSingleAns = false;
    question.shortTextQuestion = "92. ��������� �� �����. � ������� ���������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UIP1aJQ3/e0=', 968, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� ��������� ��� ������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zxMvxadjFwA=', 970, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� ��������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TQF4dh+/xQo=', 972, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ����������� ������������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HXAUcQY61pM=', 974, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ������ ������������ ��� �� ������� �������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion93()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 92;
    var weight = DecodeNumber('y37YN21ZhQk=', 976, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('y37YN21ZhQk=', 976, -1000, 1000),DecodeDecimal('t897aFDNuVA=', 976, -1000, 1000),DecodeDecimal('t897aFDNuVA=', 976, -1000, 1000));
    question.answers.length = 0;
    question.num = 93;
    question.isSingleAns = false;
    question.shortTextQuestion = "93. ��������� �� �����. � �������� ������������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4erdi3XTO6M=', 978, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� ��� ���������� ����� ���� ������������� ������������ ���� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4erdi3XTO6M=', 980, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������������� ��� �� ������� �������� ��� ������ ����������� ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('68HoDuOfnBI=', 982, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������������� ��� �� ��� ������� ��������� ��������� ��� ������������� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion94()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 93;
    var weight = DecodeNumber('XRfymR4zn3c=', 986, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XRfymR4zn3c=', 986, -1000, 1000),DecodeDecimal('wp7+5cHCOP0=', 986, -1000, 1000),DecodeDecimal('wp7+5cHCOP0=', 986, -1000, 1000));
    question.answers.length = 0;
    question.num = 94;
    question.isSingleAns = false;
    question.shortTextQuestion = "94. ��������� �� �����. � �������� ����������� ���� �������� ��� ������������ ��������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XRfymR4zn3c=', 988, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ������ � ������������ ��������� ��� ��������� ���������� ���� �������� ��� ��� �������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UmZ4CpoHUHA=', 990, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� ��� ��������� ���������� ���� �������� ��� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3EfeyK5ygoQ=', 992, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion95()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 94;
    var weight = DecodeNumber('I6fR5rxDtbA=', 996, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I6fR5rxDtbA=', 996, -1000, 1000),DecodeDecimal('vNcFTD7aJLg=', 996, -1000, 1000),DecodeDecimal('vNcFTD7aJLg=', 996, -1000, 1000));
    question.answers.length = 0;
    question.num = 95;
    question.isSingleAns = false;
    question.shortTextQuestion = "95. ��������� �� �����. � �������� ��������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jv5dp/SReiI=', 998, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� �� ������ ������������ ���� �� ��������� ������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jv5dp/SReiI=', 1000, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���� ��� ��������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('umFnl30HqQ0=', 1002, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ������ �� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion96()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 95;
    var weight = DecodeNumber('e9sV7EygKZc=', 1006, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('e9sV7EygKZc=', 1006, -1000, 1000),DecodeDecimal('APU1OKuNLiY=', 1006, -1000, 1000),DecodeDecimal('APU1OKuNLiY=', 1006, -1000, 1000));
    question.answers.length = 0;
    question.num = 96;
    question.isSingleAns = false;
    question.shortTextQuestion = "96. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7weQoGUb13k=', 1008, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ��������� �� ��� ����������� ��������� ������� ���� ����� �����������, �������� ���� ����.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7weQoGUb13k=', 1010, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ��������� �� ��� ����������� ��������� ������� ���� ����� �����������, �������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jSoQqzrdJTE=', 1012, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ��������� �� ��� ����������� ��������� ������� ���� ����� �������, �������� �� ��������� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion97()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 96;
    var weight = DecodeNumber('qYlZBirATFA=', 1016, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qYlZBirATFA=', 1016, -1000, 1000),DecodeDecimal('qth3wAq+1N8=', 1016, -1000, 1000),DecodeDecimal('qth3wAq+1N8=', 1016, -1000, 1000));
    question.answers.length = 0;
    question.num = 97;
    question.isSingleAns = false;
    question.shortTextQuestion = "97. ��������� �� �����. � ����� ��� ������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Sb4JjGNi41s=', 1018, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� ����������� ����� ���� ��������� �� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Sb4JjGNi41s=', 1020, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������������� ��� � ����� ���� ��������� �� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n0ulKIWoCH0=', 1022, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ����������� ��� �� �������� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion98()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 97;
    var weight = DecodeNumber('z2rgd09sBV8=', 1026, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('z2rgd09sBV8=', 1026, -1000, 1000),DecodeDecimal('xdsu1slLQMM=', 1026, -1000, 1000),DecodeDecimal('xdsu1slLQMM=', 1026, -1000, 1000));
    question.answers.length = 0;
    question.num = 98;
    question.isSingleAns = false;
    question.shortTextQuestion = "98. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bGo0uZSIws4=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ������������ ���������� ��������� ���� ��� ����� ������������ (edit) > �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bGo0uZSIws4=', 1030, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ���������� ���������� ��������� ���� ��� ����� ������ (file).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xlUPW5u6b10=', 1032, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������� ���������� ���������� ��������� ���� ��� ����� �������� (window).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion99()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 98;
    var weight = DecodeNumber('3hewsqo8Wl0=', 1036, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3hewsqo8Wl0=', 1036, -1000, 1000),DecodeDecimal('1qsigRA4Olc=', 1036, -1000, 1000),DecodeDecimal('1qsigRA4Olc=', 1036, -1000, 1000));
    question.answers.length = 0;
    question.num = 99;
    question.isSingleAns = false;
    question.shortTextQuestion = "99. ��������� �� �����. � ���� ����������� ��� �������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3hewsqo8Wl0=', 1038, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��������� �������� ��� �� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nJA0J8LsS/M=', 1040, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �� ������� ��� ��� ������/���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ER3PeAyI4Ug=', 1042, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion100()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 99;
    var weight = DecodeNumber('73q0+rUHolE=', 1046, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('73q0+rUHolE=', 1046, -1000, 1000),DecodeDecimal('Idq2KQwH6wM=', 1046, -1000, 1000),DecodeDecimal('Idq2KQwH6wM=', 1046, -1000, 1000));
    question.answers.length = 0;
    question.num = 100;
    question.isSingleAns = false;
    question.shortTextQuestion = "100. ��������� �� �����. ���� ��������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('73q0+rUHolE=', 1048, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� � ������� ����������/������������� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('u06CoZVvX6k=', 1050, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������� � ������� �������� ���������� ���� ������������ ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DzJlxHCm7tg=', 1052, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� � ������� �������� ���������� ������ ������������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion101()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 100;
    var weight = DecodeNumber('L2/iHo3n3Q8=', 1056, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L2/iHo3n3Q8=', 1056, -1000, 1000),DecodeDecimal('XEnJNVvl/kY=', 1056, -1000, 1000),DecodeDecimal('XEnJNVvl/kY=', 1056, -1000, 1000));
    question.answers.length = 0;
    question.num = 101;
    question.isSingleAns = false;
    question.shortTextQuestion = "101. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L2/iHo3n3Q8=', 1058, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� ������������� ��� ��� �������� ������� ������� ��� �����������, ��� �� ����������� ���.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Imba38I3odU=', 1060, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����������� ������ �� ������������ ��� � �������� ���.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Imba38I3odU=', 1062, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. T� ����������� ��� ����������� ��� �������� ��� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion102()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 101;
    var weight = DecodeNumber('FvKIQ55Ael4=', 1066, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FvKIQ55Ael4=', 1066, -1000, 1000),DecodeDecimal('81hQQXFu4e8=', 1066, -1000, 1000),DecodeDecimal('81hQQXFu4e8=', 1066, -1000, 1000));
    question.answers.length = 0;
    question.num = 102;
    question.isSingleAns = false;
    question.shortTextQuestion = "102. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0UtKfusq/5A=', 1068, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����������� ������ �� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0UtKfusq/5A=', 1070, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����������� ����� ��������� ��� ��� ������ �� ������������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NrtCjVulGwo=', 1072, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ����������� ����� ��������� ��� ������ �� ������������ ����� ��������� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion103()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 102;
    var weight = DecodeNumber('0kA/QkOXvG0=', 1076, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0kA/QkOXvG0=', 1076, -1000, 1000),DecodeDecimal('yM/AwqDCZxE=', 1076, -1000, 1000),DecodeDecimal('yM/AwqDCZxE=', 1076, -1000, 1000));
    question.answers.length = 0;
    question.num = 103;
    question.isSingleAns = false;
    question.shortTextQuestion = "103. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0kA/QkOXvG0=', 1078, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������������ ��������������� ��������� ��������������� ��� �� ������������� ���� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MWYf9SD2g7k=', 1080, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������������ ��������������� ��������� ��������������� ��� �� ������� � ������� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wGEif65ppGM=', 1082, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������������ ��������������� ��������� ��������������� ��� �� ���������� ��� ����������� ��� ��������������� �������, ���������, ����������, ����, �������, �������������, ��������� ���.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion104()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 103;
    var weight = DecodeNumber('bNxj+t285k8=', 1086, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bNxj+t285k8=', 1086, -1000, 1000),DecodeDecimal('cyOzLjgnZ0c=', 1086, -1000, 1000),DecodeDecimal('cyOzLjgnZ0c=', 1086, -1000, 1000));
    question.answers.length = 0;
    question.num = 104;
    question.isSingleAns = false;
    question.shortTextQuestion = "104. ��������� �� �����. � ������������ ��������������� ��������� ������� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t3HbzbORjmk=', 1088, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �� ����� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t3HbzbORjmk=', 1090, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� �� ����� ��� ������ ��� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eFgUkI7jU3Q=', 1092, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��� �� ����� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion105()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 104;
    var weight = DecodeNumber('nCTrrVQKVro=', 1096, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nCTrrVQKVro=', 1096, -1000, 1000),DecodeDecimal('8nrVHppWnNk=', 1096, -1000, 1000),DecodeDecimal('8nrVHppWnNk=', 1096, -1000, 1000));
    question.answers.length = 0;
    question.num = 105;
    question.isSingleAns = false;
    question.shortTextQuestion = "105. ��������� �� �����. ��� �� �������� ��� ���������� ���� ������ ����������� ��� ����������� ��������������� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8EPPtd5rcvE=', 1098, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ���� ������ ��� �����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8EPPtd5rcvE=', 1100, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��� ����� ��� ������������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hFalqwZ2gas=', 1102, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� ��� ����� ��� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion106()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 105;
    var weight = DecodeNumber('AK1nR1F3MM0=', 1106, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AK1nR1F3MM0=', 1106, -1000, 1000),DecodeDecimal('GVfB8AGUFVk=', 1106, -1000, 1000),DecodeDecimal('GVfB8AGUFVk=', 1106, -1000, 1000));
    question.answers.length = 0;
    question.num = 106;
    question.isSingleAns = false;
    question.shortTextQuestion = "106. ��������� �� �����. ��� �� ������� �������� ��� �������������� �������� ���� ����������� ��� ����������� ��������������� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AK1nR1F3MM0=', 1108, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���� ��� �������� ��� ������ �������� ��� �� (��� �����).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0iKzZGWuJ7k=', 1110, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� �������� ��� ������ �������� ��� enter.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0iKzZGWuJ7k=', 1112, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion107()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 106;
    var weight = DecodeNumber('g5yvOA7C+5Y=', 1116, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('g5yvOA7C+5Y=', 1116, -1000, 1000),DecodeDecimal('qv2Doqt9ojs=', 1116, -1000, 1000),DecodeDecimal('qv2Doqt9ojs=', 1116, -1000, 1000));
    question.answers.length = 0;
    question.num = 107;
    question.isSingleAns = false;
    question.shortTextQuestion = "107. ��������� �� �����. ��� �� ��������� ��� �������������� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Fcuge6c8YJE=', 1118, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���������� ��� ������� ���� ��� ��������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fcuge6c8YJE=', 1120, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ����� ���� ���� ���.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YDAKXzOwNww=', 1122, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ����� ����������� ��� ������ �� ������ ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion108()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 107;
    var weight = DecodeNumber('mWkDNiak81Y=', 1126, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mWkDNiak81Y=', 1126, -1000, 1000),DecodeDecimal('QcPQ/DlR7CY=', 1126, -1000, 1000),DecodeDecimal('QcPQ/DlR7CY=', 1126, -1000, 1000));
    question.answers.length = 0;
    question.num = 108;
    question.isSingleAns = false;
    question.shortTextQuestion = "108. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mWkDNiak81Y=', 1128, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. �� ���������� ����� ����������� ������������ �������� Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ElAwwfobbVY=', 1130, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. �� ���������� ����� ����������� ��� ��� Adobe Systems.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HIPFZEbaoog=', 1132, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���������� ����� ����������� ��� ��� Mac OS.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SCxWrgcEzDU=', 1134, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. �� ���������� ����� ����������� ���������� ��� ��� Adobe ��� ��� ������ ��������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion109()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 108;
    var weight = DecodeNumber('kBwzORfncYA=', 1136, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kBwzORfncYA=', 1136, -1000, 1000),DecodeDecimal('nkt2Od10GCo=', 1136, -1000, 1000),DecodeDecimal('nkt2Od10GCo=', 1136, -1000, 1000));
    question.answers.length = 0;
    question.num = 109;
    question.isSingleAns = false;
    question.shortTextQuestion = "109. ��������� �� �����. �� ���� ���������� ��� ������������� ������������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kBwzORfncYA=', 1138, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fq15LLPukUE=', 1140, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bFkR7F6Zc9c=', 1142, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �������� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('S3Y2vRPdJ5U=', 1144, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion110()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 109;
    var weight = DecodeNumber('I1LPeM+/qtk=', 1146, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I1LPeM+/qtk=', 1146, -1000, 1000),DecodeDecimal('CQSYAfe7Ew4=', 1146, -1000, 1000),DecodeDecimal('CQSYAfe7Ew4=', 1146, -1000, 1000));
    question.answers.length = 0;
    question.num = 110;
    question.isSingleAns = false;
    question.shortTextQuestion = "110. ��������� �� �����. �� ��������������� �������� ������������� �� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I1LPeM+/qtk=', 1148, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� ��� ��� ���������� ���ܻ.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('USxTqL9lrr4=', 1150, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ��������� ��� �� �������� ������� ���� ���� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('USxTqL9lrr4=', 1152, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� �� ���� ��� �� ���������� �������� ��� ������� ��� �� ���� �� ������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion111()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 110;
    var weight = DecodeNumber('fmGqcKw9nek=', 1156, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fmGqcKw9nek=', 1156, -1000, 1000),DecodeDecimal('D2sg1T7JhRA=', 1156, -1000, 1000),DecodeDecimal('D2sg1T7JhRA=', 1156, -1000, 1000));
    question.answers.length = 0;
    question.num = 111;
    question.isSingleAns = false;
    question.shortTextQuestion = "111. ��������� �� �����. ������� ��������� ��� ����������� ��� Photoshop ���� �������������� ��������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fmGqcKw9nek=', 1158, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. K���� �������� �� Photoshop ������� ��� ��������� �������� �� ������� Alt + Control + Shift.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ISwQ9nGnjw8=', 1160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ��� �������� Control + Shift + Backspace.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ISwQ9nGnjw8=', 1162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ ��� �������� Control + Shift.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion112()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 111;
    var weight = DecodeNumber('O2suUNzGfAo=', 1166, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O2suUNzGfAo=', 1166, -1000, 1000),DecodeDecimal('HE8FnTAj6x0=', 1166, -1000, 1000),DecodeDecimal('HE8FnTAj6x0=', 1166, -1000, 1000));
    question.answers.length = 0;
    question.num = 112;
    question.isSingleAns = false;
    question.shortTextQuestion = "112. ��������� �� �����. � ���������ܻ ��������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Oqjw3r7zQ6s=', 1168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ����� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Oqjw3r7zQ6s=', 1170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� ����� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/5duSS87OVg=', 1172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ����� ��� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion113()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 112;
    var weight = DecodeNumber('hcgec3DQVzM=', 1176, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hcgec3DQVzM=', 1176, -1000, 1000),DecodeDecimal('50QgOuoXUsI=', 1176, -1000, 1000),DecodeDecimal('50QgOuoXUsI=', 1176, -1000, 1000));
    question.answers.length = 0;
    question.num = 113;
    question.isSingleAns = false;
    question.shortTextQuestion = "113. ��������� �� �����. ��� �� ����������� � ��������� ���� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ga8KO0Dr83Y=', 1178, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� Custom ��� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ga8KO0Dr83Y=', 1180, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� View on line.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zw6OR/y+jAY=', 1182, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� Search .";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion114()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 113;
    var weight = DecodeNumber('t2lgIghIOiY=', 1186, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t2lgIghIOiY=', 1186, -1000, 1000),DecodeDecimal('D/x4A9Hl/pc=', 1186, -1000, 1000),DecodeDecimal('D/x4A9Hl/pc=', 1186, -1000, 1000));
    question.answers.length = 0;
    question.num = 114;
    question.isSingleAns = false;
    question.shortTextQuestion = "114. ��������� �� �����. � ������� Kuler �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t2lgIghIOiY=', 1188, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ��������� ���������� ��� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/VJJoWadI5s=', 1190, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������� �� ������ �������� � ������� ��� ����� ������������ ��� ��� online ��������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/VJJoWadI5s=', 1192, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �� ������ ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion115()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 114;
    var weight = DecodeNumber('mxF3/XYcVqg=', 1196, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mxF3/XYcVqg=', 1196, -1000, 1000),DecodeDecimal('w3/x/RY7JWQ=', 1196, -1000, 1000),DecodeDecimal('w3/x/RY7JWQ=', 1196, -1000, 1000));
    question.answers.length = 0;
    question.num = 115;
    question.isSingleAns = false;
    question.shortTextQuestion = "115. ��������� �� �����. ���� ������ ����������� ��� ��� �������������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mxF3/XYcVqg=', 1198, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ���� ��� ����� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fQYOWrlXZm4=', 1200, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ���� ��� ����� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fQYOWrlXZm4=', 1202, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� ���� ��� ����� ��� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion116()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 115;
    var weight = DecodeNumber('3u5umiq7cXs=', 1206, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3u5umiq7cXs=', 1206, -1000, 1000),DecodeDecimal('DlDtXC4f+NM=', 1206, -1000, 1000),DecodeDecimal('DlDtXC4f+NM=', 1206, -1000, 1000));
    question.answers.length = 0;
    question.num = 116;
    question.isSingleAns = false;
    question.shortTextQuestion = "116. ��������� �� �����. �� ��� �������� �� ���������� ��� �������� �������, �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3u5umiq7cXs=', 1208, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���������� ������� ��� ��� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Gn2E6iodtQ8=', 1210, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� ��������� ������� ����������� ������� ��� Photoshop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Gpz+PVzdoxE=', 1212, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion117()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 116;
    var weight = DecodeNumber('QO2gGES2uMo=', 1216, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QO2gGES2uMo=', 1216, -1000, 1000),DecodeDecimal('sW18XKw7WJQ=', 1216, -1000, 1000),DecodeDecimal('sW18XKw7WJQ=', 1216, -1000, 1000));
    question.answers.length = 0;
    question.num = 117;
    question.isSingleAns = false;
    question.shortTextQuestion = "117. ��������� �� �����. � ������� �uler ��������������� ���:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QO2gGES2uMo=', 1218, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ��������� �������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iftHoiwc4sM=', 1220, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ����, ����������� ��� ���������� ������� �� ��� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mmOT/4Wfcv0=', 1222, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ���������� ��� ������� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EtYu1JDjsgI=', 1224, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion118()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 117;
    var weight = DecodeNumber('QambU2/NrPs=', 1226, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QambU2/NrPs=', 1226, -1000, 1000),DecodeDecimal('jrUixmIZJZ4=', 1226, -1000, 1000),DecodeDecimal('jrUixmIZJZ4=', 1226, -1000, 1000));
    question.answers.length = 0;
    question.num = 118;
    question.isSingleAns = false;
    question.shortTextQuestion = "118. ��������� �� �����: ��� �������� ������� ��� ����������� ������ ��� Mac OS, ���������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QambU2/NrPs=', 1228, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. WIA";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lu+PiwUx7S8=', 1230, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Image Capture";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lu+PiwUx7S8=', 1232, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Adobe Bridge";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion119()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 118;
    var weight = DecodeNumber('fLlehhu7YN0=', 1236, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fLlehhu7YN0=', 1236, -1000, 1000),DecodeDecimal('Um/TBgGBJeg=', 1236, -1000, 1000),DecodeDecimal('Um/TBgGBJeg=', 1236, -1000, 1000));
    question.answers.length = 0;
    question.num = 119;
    question.isSingleAns = false;
    question.shortTextQuestion = "119. ��������� �� �����: �������� ������� ��� ������ �� ������� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PB0h5bCtwoU=', 1238, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� File ��� import ��� ���� ���� ��� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PB0h5bCtwoU=', 1240, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� Edit ��� ���� ���� import";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lZSJjmaSqEA=', 1242, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� Select ��� ���� ���� import";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion120()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 119;
    var weight = DecodeNumber('za4Pd18bEtY=', 1246, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('za4Pd18bEtY=', 1246, -1000, 1000),DecodeDecimal('WqxZ+2MpqtA=', 1246, -1000, 1000),DecodeDecimal('WqxZ+2MpqtA=', 1246, -1000, 1000));
    question.answers.length = 0;
    question.num = 120;
    question.isSingleAns = false;
    question.shortTextQuestion = "120. ��������� �� �����: ��� �� �������� �� ���������� ��������� ��� �������� ����� �� ������� � ������� ���������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('za4Pd18bEtY=', 1248, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ������������� � ������ ����������������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('edaepvg+AVw=', 1250, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �� ��������������� � ������ ����������������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('edaepvg+AVw=', 1252, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ �� ��������� � ������ ��������� ��� �� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion121()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 120;
    var weight = DecodeNumber('I+EHOMBBFvo=', 1256, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I+EHOMBBFvo=', 1256, -1000, 1000),DecodeDecimal('NG1M4dicFEI=', 1256, -1000, 1000),DecodeDecimal('NG1M4dicFEI=', 1256, -1000, 1000));
    question.answers.length = 0;
    question.num = 121;
    question.isSingleAns = false;
    question.shortTextQuestion = "121. ��������� �� �����: ��� �������� �� ����� ���� ����� ��� ����������� ��� ���������� ��������� ���� �������;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('f7Fs39Z8Ko4=', 1258, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��� ����� ������� ��� ���� ������� ������� �������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f7Fs39Z8Ko4=', 1260, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ����� ������ ��� ���� ������� ������� �������� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NO7ymo6KBu0=', 1262, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ��� ����� �������� ��� ���� ������� ������� �������� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion122()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 121;
    var weight = DecodeNumber('iXjECo5CZcM=', 1266, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iXjECo5CZcM=', 1266, -1000, 1000),DecodeDecimal('1M4I07bTx38=', 1266, -1000, 1000),DecodeDecimal('1M4I07bTx38=', 1266, -1000, 1000));
    question.answers.length = 0;
    question.num = 122;
    question.isSingleAns = false;
    question.shortTextQuestion = "122. ��������� �� �����: � ������� ������ ��������� ����ܻ:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iXjECo5CZcM=', 1268, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� �� ���� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fIpsqAlCFfc=', 1270, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ���� �� ��� ������� ��� ����������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H1GqxxtmONc=', 1272, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ���� �� ��� ����������� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('amWhmQxrD0w=', 1274, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ���������� �� ����������� ������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion123()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 122;
    var weight = DecodeNumber('altolEyou+M=', 1276, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('altolEyou+M=', 1276, -1000, 1000),DecodeDecimal('JeVnlpyQGiU=', 1276, -1000, 1000),DecodeDecimal('JeVnlpyQGiU=', 1276, -1000, 1000));
    question.answers.length = 0;
    question.num = 123;
    question.isSingleAns = false;
    question.shortTextQuestion = "123. ��������� �� ����� � ������� ��������� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U1YMQNli8F4=', 1278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ���� ��� �������� ��� �������� Curves";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U1YMQNli8F4=', 1280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� �� ���������� �� �������� �� ������ ����������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f+exePiNpWA=', 1282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion124()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 123;
    var weight = DecodeNumber('S+J0IUvXxhQ=', 1286, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('S+J0IUvXxhQ=', 1286, -1000, 1000),DecodeDecimal('PlWJCdQNr5E=', 1286, -1000, 1000),DecodeDecimal('PlWJCdQNr5E=', 1286, -1000, 1000));
    question.answers.length = 0;
    question.num = 124;
    question.isSingleAns = false;
    question.shortTextQuestion = "124. ��������� �� ����� � ������� Curves ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('S+J0IUvXxhQ=', 1288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� �������� (Adjustment layer)";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3mxJyvHpQ4s=', 1290, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. �� �������� ������� ��� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H1KCmzTauA0=', 1292, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion125()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 124;
    var weight = DecodeNumber('FdRN236L4j8=', 1296, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FdRN236L4j8=', 1296, -1000, 1000),DecodeDecimal('xYsW06fjgns=', 1296, -1000, 1000),DecodeDecimal('xYsW06fjgns=', 1296, -1000, 1000));
    question.answers.length = 0;
    question.num = 125;
    question.isSingleAns = false;
    question.shortTextQuestion = "125. ��������� �� ����� ��� �������� Levels  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FdRN236L4j8=', 1298, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������� ����� �������� ���������� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SStzuFFI7fk=', 1300, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� �� ������� ��������� �� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4YOcf17TQGY=', 1302, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� �� ������� ��������� �� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2NlwsgrFE54=', 1304, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion126()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 125;
    var weight = DecodeNumber('np/gmMtP/0w=', 1306, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('np/gmMtP/0w=', 1306, -1000, 1000),DecodeDecimal('AyP7odxcO/I=', 1306, -1000, 1000),DecodeDecimal('AyP7odxcO/I=', 1306, -1000, 1000));
    question.answers.length = 0;
    question.num = 126;
    question.isSingleAns = false;
    question.shortTextQuestion = "126. ��������� �� ����� �� �� �������� Levels:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('np/gmMtP/0w=', 1308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gl1qC61tk7o=', 1310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "� ������������ �� �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('802YWbYqUGg=', 1312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������ ����������� �� ������� ��� �������� �� ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('algAOVrwh5g=', 1314, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion127()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 126;
    var weight = DecodeNumber('cm6j6ILolN8=', 1316, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cm6j6ILolN8=', 1316, -1000, 1000),DecodeDecimal('szv+ynTy9LE=', 1316, -1000, 1000),DecodeDecimal('szv+ynTy9LE=', 1316, -1000, 1000));
    question.answers.length = 0;
    question.num = 127;
    question.isSingleAns = false;
    question.shortTextQuestion = "127. ��������� �� ����� � ������ anti-aliased :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+8uUV1WTXgo=', 1318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� �� ���� ���� �������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+8uUV1WTXgo=', 1320, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� �� ���� ���� �������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IFT5kTHAw/Q=', 1322, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������ �� ���� ���� �������� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5M0Vd9aJ5G0=', 1324, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion128()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 127;
    var weight = DecodeNumber('PL85YKriTKo=', 1326, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PL85YKriTKo=', 1326, -1000, 1000),DecodeDecimal('Uyv+3qTgUxc=', 1326, -1000, 1000),DecodeDecimal('Uyv+3qTgUxc=', 1326, -1000, 1000));
    question.answers.length = 0;
    question.num = 128;
    question.isSingleAns = false;
    question.shortTextQuestion = "128. ��������� �� ����� ��� �������� ���������� �������� �� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PL85YKriTKo=', 1328, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Linear, Radial";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6zElX/1vVSU=', 1330, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Angle.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eLPayK3u2yI=', 1332, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Diamond, Reflected, Linear, Radial";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gp7wRLNsEJk=', 1334, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion129()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 128;
    var weight = DecodeNumber('Plg0j217aOU=', 1336, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Plg0j217aOU=', 1336, -1000, 1000),DecodeDecimal('XG8hnBOs948=', 1336, -1000, 1000),DecodeDecimal('XG8hnBOs948=', 1336, -1000, 1000));
    question.answers.length = 0;
    question.num = 129;
    question.isSingleAns = false;
    question.shortTextQuestion = "129. ��������� �� ����� �� �������� linear :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MisI6L4s2xA=', 1338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ���������� ���� ����� ���� ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MisI6L4s2xA=', 1340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ���������� ���� ����� ���� ����������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YPpq+bTalhA=', 1342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ���������� �� ������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Q9vxzwJn1jQ=', 1344, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion130()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 129;
    var weight = DecodeNumber('eUWlG/l7f2c=', 1346, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eUWlG/l7f2c=', 1346, -1000, 1000),DecodeDecimal('TedJM4J0xEg=', 1346, -1000, 1000),DecodeDecimal('TedJM4J0xEg=', 1346, -1000, 1000));
    question.answers.length = 0;
    question.num = 130;
    question.isSingleAns = false;
    question.shortTextQuestion = "130. ��������� �� �����: �� �� �������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eUWlG/l7f2c=', 1348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �������, ������� ��� �������� ������� ��� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LgXASe/MPgo=', 1350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������������� ��� ����������� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gBPUVAVYpec=', 1352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ������� ��� ���� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('r0EBLqFvPRE=', 1354, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion131()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 130;
    var weight = DecodeNumber('edEkTSQpO8I=', 1356, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('edEkTSQpO8I=', 1356, -1000, 1000),DecodeDecimal('bE1gvaUuMKI=', 1356, -1000, 1000),DecodeDecimal('bE1gvaUuMKI=', 1356, -1000, 1000));
    question.answers.length = 0;
    question.num = 131;
    question.isSingleAns = false;
    question.shortTextQuestion = "131. ��������� �� �����: ��� �� ������� �� ���������� ������� ��� ������� ���, �� ����� ������ ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('edEkTSQpO8I=', 1358, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Shift+ Alt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M+DOXD0Kfi8=', 1360, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Shift+ Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pWugD/kKmWQ=', 1362, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Control + Backspace";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion132()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 131;
    var weight = DecodeNumber('DQDIf7isJt0=', 1366, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DQDIf7isJt0=', 1366, -1000, 1000),DecodeDecimal('AYpfHSEXSs4=', 1366, -1000, 1000),DecodeDecimal('AYpfHSEXSs4=', 1366, -1000, 1000));
    question.answers.length = 0;
    question.num = 132;
    question.isSingleAns = false;
    question.shortTextQuestion = "132. ��������� �� �����: ��� �������� �������� � �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3rRDcQPlcI8=', 1368, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ���� ��� ������ ������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3rRDcQPlcI8=', 1370, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ��������������� ���� ���� ������ ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g2A52MzhQys=', 1372, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ���� ������� �� Alt";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion133()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 132;
    var weight = DecodeNumber('OlNQsk+qK2U=', 1376, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OlNQsk+qK2U=', 1376, -1000, 1000),DecodeDecimal('PBg2Tpg9h4g=', 1376, -1000, 1000),DecodeDecimal('PBg2Tpg9h4g=', 1376, -1000, 1000));
    question.answers.length = 0;
    question.num = 133;
    question.isSingleAns = false;
    question.shortTextQuestion = "133. ��������� �� �����: ��� ������������ ����� ����������� ���:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OlNQsk+qK2U=', 1378, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DD+aVbyMu5c=', 1380, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iakMT5I40Rk=', 1382, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aHA+FsopcNM=', 1384, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion134()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 133;
    var weight = DecodeNumber('lUH+8b26HQw=', 1386, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lUH+8b26HQw=', 1386, -1000, 1000),DecodeDecimal('C/LptXZ+TcY=', 1386, -1000, 1000),DecodeDecimal('C/LptXZ+TcY=', 1386, -1000, 1000));
    question.answers.length = 0;
    question.num = 134;
    question.isSingleAns = false;
    question.shortTextQuestion = "134. ��������� �� �����: � �������� ��� ����� ��� ����������� �������� ��������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lUH+8b26HQw=', 1388, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jSIWUuE64Rw=', 1390, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2WyAM856xNU=', 1392, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gv0WQ0ss5zI=', 1394, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion135()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 134;
    var weight = DecodeNumber('MvM81GFhIbo=', 1396, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MvM81GFhIbo=', 1396, -1000, 1000),DecodeDecimal('04/ck1Tst9g=', 1396, -1000, 1000),DecodeDecimal('04/ck1Tst9g=', 1396, -1000, 1000));
    question.answers.length = 0;
    question.num = 135;
    question.isSingleAns = false;
    question.shortTextQuestion = "135. ��������� �� �����: ��� �������� ��� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MvM81GFhIbo=', 1398, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Mh2owLIwY6E=', 1400, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gEYjXOOIKrM=', 1402, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���������� �� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DnnCE1n+xRY=', 1404, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion136()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 135;
    var weight = DecodeNumber('1p1Oa8FmJEo=', 1406, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1p1Oa8FmJEo=', 1406, -1000, 1000),DecodeDecimal('8t/KosKBYLc=', 1406, -1000, 1000),DecodeDecimal('8t/KosKBYLc=', 1406, -1000, 1000));
    question.answers.length = 0;
    question.num = 136;
    question.isSingleAns = false;
    question.shortTextQuestion = "136. ��������� �� �����: ��� �������� ���� ������������ �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1p1Oa8FmJEo=', 1408, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0aITMXW+vT4=', 2246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KDW51ZI+FDM=', 2248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� �������� ��� �� ����� �������� ����� ��� ������� ��� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('23/HKs8uqwE=', 2250, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion137()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 136;
    var weight = DecodeNumber('hDDgw+y7ebQ=', 2252, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hDDgw+y7ebQ=', 2252, -1000, 1000),DecodeDecimal('WQzGPeJvPvw=', 2252, -1000, 1000),DecodeDecimal('WQzGPeJvPvw=', 2252, -1000, 1000));
    question.answers.length = 0;
    question.num = 137;
    question.isSingleAns = false;
    question.shortTextQuestion = "137. ��������� �� ����� �� ����� ������ ������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4qkyJ+e7dcs=', 2254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ��� �������� �� �������� �� Shift";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4qkyJ+e7dcs=', 2256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� �������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kE/++VrV2Wo=', 2258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� �������� ��� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion138()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 137;
    var weight = DecodeNumber('b9E2ZOwffoY=', 2262, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b9E2ZOwffoY=', 2262, -1000, 1000),DecodeDecimal('RqGtc4J/HWA=', 2262, -1000, 1000),DecodeDecimal('RqGtc4J/HWA=', 2262, -1000, 1000));
    question.answers.length = 0;
    question.num = 138;
    question.isSingleAns = false;
    question.shortTextQuestion = "138. ��������� �� ����� ��� ��������������� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('b9E2ZOwffoY=', 2264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ������� ����������� �� ������������ �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('u/856StA10c=', 2266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ������� ����������� �� ������������ �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u/856StA10c=', 2268, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ �� ������� ����������� �� ������� �� ������������ ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion139()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 138;
    var weight = DecodeNumber('SCklqZloEpM=', 2272, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SCklqZloEpM=', 2272, -1000, 1000),DecodeDecimal('y5Cu4aHm6ck=', 2272, -1000, 1000),DecodeDecimal('y5Cu4aHm6ck=', 2272, -1000, 1000));
    question.answers.length = 0;
    question.num = 139;
    question.isSingleAns = false;
    question.shortTextQuestion = "139. ��������� �� ����� � ������ ����������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SCklqZloEpM=', 2274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ��������� ��� �������� �� ����� ������� ��� 100%";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vQyyTQQAgrs=', 2276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ���������� ��� �������� �� ����� ������� ��� 1%";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ocDuy2R6WAE=', 2278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� ����� ����������� ���� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion140()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 139;
    var weight = DecodeNumber('FpJcbmXpBS0=', 2282, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FpJcbmXpBS0=', 2282, -1000, 1000),DecodeDecimal('Vl3vztd9ENM=', 2282, -1000, 1000),DecodeDecimal('Vl3vztd9ENM=', 2282, -1000, 1000));
    question.answers.length = 0;
    question.num = 140;
    question.isSingleAns = false;
    question.shortTextQuestion = "140. ��������� �� ����� ��� ��� ����������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wyjYbzrt7XA=', 2284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���� ����������� ��� ������������� ������ ���� ������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wyjYbzrt7XA=', 2286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ���� ����������� ��� ������������� ������ ���� ������ ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lTVjcLWg4hU=', 2288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ���� ������� ��� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion141()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 140;
    var weight = DecodeNumber('sgdk0/tqEOM=', 2292, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sgdk0/tqEOM=', 2292, -1000, 1000),DecodeDecimal('iQ+61/S8ju4=', 2292, -1000, 1000),DecodeDecimal('iQ+61/S8ju4=', 2292, -1000, 1000));
    question.answers.length = 0;
    question.num = 141;
    question.isSingleAns = false;
    question.shortTextQuestion = "141. ��������� �� ����� � �������� ���� �������� ��������� �������� ������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sgdk0/tqEOM=', 2294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���� ����������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+qrm5igaUT8=', 2296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� ������������ ����� ����� ��� ������ �������� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+qrm5igaUT8=', 2298, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ���� ������ ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion142()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 141;
    var weight = DecodeNumber('3y+PaA9Rjxw=', 2302, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3y+PaA9Rjxw=', 2302, -1000, 1000),DecodeDecimal('hO+apr0QX7s=', 2302, -1000, 1000),DecodeDecimal('hO+apr0QX7s=', 2302, -1000, 1000));
    question.answers.length = 0;
    question.num = 142;
    question.isSingleAns = false;
    question.shortTextQuestion = "142. ��������� �� ����� � ������� ����������� ��� pixel ���� �������� ��������� ���������� � �������������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3y+PaA9Rjxw=', 2304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� �� ����� ��� �������������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7g8xvW9egO4=', 2306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ������� ���� ��� ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ke7QDYJyRXM=', 2308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ������ ��� ��������������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion143()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 142;
    var weight = DecodeNumber('5q0OADB64nc=', 2312, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5q0OADB64nc=', 2312, -1000, 1000),DecodeDecimal('BMiHJNYh8RY=', 2312, -1000, 1000),DecodeDecimal('BMiHJNYh8RY=', 2312, -1000, 1000));
    question.answers.length = 0;
    question.num = 143;
    question.isSingleAns = false;
    question.shortTextQuestion = "143. ��������� �� ����� �� �������� ��� ����� ��� ������ �������� ������� ��� ���� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5q0OADB64nc=', 2314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('So/Zo6gvYek=', 2316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gbq0iDF16oY=', 2318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion144()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 143;
    var weight = DecodeNumber('cuEqTJYg7WU=', 2322, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cuEqTJYg7WU=', 2322, -1000, 1000),DecodeDecimal('rE9Pu1ePNI4=', 2322, -1000, 1000),DecodeDecimal('rE9Pu1ePNI4=', 2322, -1000, 1000));
    question.answers.length = 0;
    question.num = 144;
    question.isSingleAns = false;
    question.shortTextQuestion = "144. ��������� �� ����� � ������� �������� ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cuEqTJYg7WU=', 2324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ������������ ��� ������� ��� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g/3ShI4RazE=', 2326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� �� ���������� ���������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BuMSoAzGYFQ=', 2328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ���������� �������������� �������� ��� ������� ��� �������������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion145()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 144;
    var weight = DecodeNumber('hbbP4/Rwd0I=', 2332, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hbbP4/Rwd0I=', 2332, -1000, 1000),DecodeDecimal('yk7bdCVinvs=', 2332, -1000, 1000),DecodeDecimal('yk7bdCVinvs=', 2332, -1000, 1000));
    question.answers.length = 0;
    question.num = 145;
    question.isSingleAns = false;
    question.shortTextQuestion = "145. ��������� �� ����� ��� �������� ��� �� ���������� ������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hbbP4/Rwd0I=', 2334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� Control+ ���� ������ ��� ��� �� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7lgsNtg6s28=', 2336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ��������� ��� ����������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ft1/CaB+ehA=', 2338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��������� ��� ����������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PqcHdhZ0t5c=', 2340, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion146()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 145;
    var weight = DecodeNumber('WzwV1fJJUi4=', 2342, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WzwV1fJJUi4=', 2342, -1000, 1000),DecodeDecimal('IV/mW+wfX/Q=', 2342, -1000, 1000),DecodeDecimal('IV/mW+wfX/Q=', 2342, -1000, 1000));
    question.answers.length = 0;
    question.num = 146;
    question.isSingleAns = false;
    question.shortTextQuestion = "146. ��������� �� ����� ��� ������� ������ �� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WzwV1fJJUi4=', 2344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7PQjWQW3MTw=', 2346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ����������� �������� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rqghVGDiSNI=', 2348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion147()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 146;
    var weight = DecodeNumber('3wZx6CztQMk=', 2352, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3wZx6CztQMk=', 2352, -1000, 1000),DecodeDecimal('j5Mo9cphVLM=', 2352, -1000, 1000),DecodeDecimal('j5Mo9cphVLM=', 2352, -1000, 1000));
    question.answers.length = 0;
    question.num = 147;
    question.isSingleAns = false;
    question.shortTextQuestion = "147. ��������� �� ����� ��� ��� �������� ��� ������ �� ������� ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZC31BHbIITo=', 2354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� �������� ����� ��� ������� ������ ��� ��� �������� ������ ���� ���������� ��� ������� ���� ��� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZC31BHbIITo=', 2356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ����� ���� ��� ������ ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z//ZQyCsgq4=', 2358, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion148()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 147;
    var weight = DecodeNumber('vXK8PaM4upQ=', 2362, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vXK8PaM4upQ=', 2362, -1000, 1000),DecodeDecimal('895c9O0DCp8=', 2362, -1000, 1000),DecodeDecimal('895c9O0DCp8=', 2362, -1000, 1000));
    question.answers.length = 0;
    question.num = 148;
    question.isSingleAns = false;
    question.shortTextQuestion = "148. ��������� �� ����� � ������� ��� ����������� ��� ������� ��������� ���� ������ ��� ��������� � ��� �������� ��� �������� ����� ��������� ��������� ������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vXK8PaM4upQ=', 2364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ��������� ����� ��������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6R1SZEMXBoU=', 2366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���� ��� ������������� ����� ����� ��� ������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6R1SZEMXBoU=', 2368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���� ��� ������ ������ ��� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion149()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 148;
    var weight = DecodeNumber('iSivwldtM4Y=', 2372, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iSivwldtM4Y=', 2372, -1000, 1000),DecodeDecimal('oXwh+mIk+U0=', 2372, -1000, 1000),DecodeDecimal('oXwh+mIk+U0=', 2372, -1000, 1000));
    question.answers.length = 0;
    question.num = 149;
    question.isSingleAns = false;
    question.shortTextQuestion = "149. ��������� �� ����� ��� �� ��������� ��� �������� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iSivwldtM4Y=', 2374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ����� ���� ��� ����� ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5sS3l5v7kGo=', 2376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ������ ��� ������ ������ ���";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5sS3l5v7kGo=', 2378, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion150()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 149;
    var weight = DecodeNumber('wODpB2VNYFE=', 2382, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wODpB2VNYFE=', 2382, -1000, 1000),DecodeDecimal('11kIgz/mzaU=', 2382, -1000, 1000),DecodeDecimal('11kIgz/mzaU=', 2382, -1000, 1000));
    question.answers.length = 0;
    question.num = 150;
    question.isSingleAns = false;
    question.shortTextQuestion = "150. ��������� �� ����� �� �������� ���������� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ou/M4m+GRBY=', 2384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��������� ����� �������� �� �� ��������� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ou/M4m+GRBY=', 2386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ������������ �������� ��� ��� �������� �� �� ��������� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('A1Zjf5vjFdM=', 2388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��� ����� �������� �� ������� ��� ���������� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion151()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 150;
    var weight = DecodeNumber('O6K7ehp4HCQ=', 2392, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O6K7ehp4HCQ=', 2392, -1000, 1000),DecodeDecimal('EMgcB17z78s=', 2392, -1000, 1000),DecodeDecimal('EMgcB17z78s=', 2392, -1000, 1000));
    question.answers.length = 0;
    question.num = 151;
    question.isSingleAns = false;
    question.shortTextQuestion = "151. ��������� �� ����� � ������� ���������� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O6K7ehp4HCQ=', 2394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� �� ��������� �� ��� ����� � ��������� ���� ��������� ��� �������� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2NU44PRngO0=', 2396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ��������� ��������� ��������� ������ ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2NU44PRngO0=', 2398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� �� ��������� �������������� ��� �� ������ ������ ��������� ��� ���������� ���� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion152()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 151;
    var weight = DecodeNumber('GYOvhvFPyJA=', 2402, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GYOvhvFPyJA=', 2402, -1000, 1000),DecodeDecimal('mmZI0m4mCzc=', 2402, -1000, 1000),DecodeDecimal('mmZI0m4mCzc=', 2402, -1000, 1000));
    question.answers.length = 0;
    question.num = 152;
    question.isSingleAns = false;
    question.shortTextQuestion = "152. ��������� �� ����� ��� �� ���������� ��� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j7PrJdpK6dI=', 2404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � ������� ���������� ��� ���� ���� ��� ����� ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j7PrJdpK6dI=', 2406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������������� ���� �� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rHRDAfCqXmc=', 2408, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7THR0Ka8M1c=', 2410, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion153()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 152;
    var weight = DecodeNumber('DxSGsDQXLPY=', 2412, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DxSGsDQXLPY=', 2412, -1000, 1000),DecodeDecimal('jwXKoovJ0Uc=', 2412, -1000, 1000),DecodeDecimal('jwXKoovJ0Uc=', 2412, -1000, 1000));
    question.answers.length = 0;
    question.num = 153;
    question.isSingleAns = false;
    question.shortTextQuestion = "153. ��������� �� ����� ��� �� ������� �� ������� ��� ������������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vQ4fGcbdeJk=', 2414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� ��� ������ ��������� ���������� � ������ ��������� ��� ���� �������� � ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vQ4fGcbdeJk=', 2416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ���� ���� ������ ��������� ��� �� �������� � ������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('13FRR1yOrKQ=', 2418, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xC2Qm9T4xMQ=', 2420, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ���� �� � ���� �� �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion154()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 153;
    var weight = DecodeNumber('p8n8P0PbWow=', 2422, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('p8n8P0PbWow=', 2422, -1000, 1000),DecodeDecimal('WmNxlEAr44I=', 2422, -1000, 1000),DecodeDecimal('WmNxlEAr44I=', 2422, -1000, 1000));
    question.answers.length = 0;
    question.num = 154;
    question.isSingleAns = false;
    question.shortTextQuestion = "154. ��������� �� ����� � ����� ��� ��������� �������� ���� ������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p8n8P0PbWow=', 2424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ������� ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YeC2vjhaB2U=', 2426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� Control + C ��� ���� �� control +V";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AMoyZ4cLlBI=', 2428, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion155()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 154;
    var weight = DecodeNumber('A62HwYO+nyI=', 2432, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A62HwYO+nyI=', 2432, -1000, 1000),DecodeDecimal('05Ylh76zbII=', 2432, -1000, 1000),DecodeDecimal('05Ylh76zbII=', 2432, -1000, 1000));
    question.answers.length = 0;
    question.num = 155;
    question.isSingleAns = false;
    question.shortTextQuestion = "155. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('A62HwYO+nyI=', 2434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� ��� ��� �������� �� ���� ��� ���������� ��������� ���� ������ ����������/paths";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3ZiMsy6g5r4=', 2436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������� ��� ��� �������� �� ������� ���� ��������� �������� ��� ���� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('exOatUdsZdM=', 2438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� ��� ��� �������� �� alt + ���� ��� ������� �������� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KrUP8u+a3z4=', 2440, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ���� �� � ���� �� �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('KrUP8u+a3z4=', 2442, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "�. ���� �� � ���� �� �";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion156()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 155;
    var weight = DecodeNumber('yAW3uD8GrAM=', 2442, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yAW3uD8GrAM=', 2442, -1000, 1000),DecodeDecimal('cWAGFshpB0o=', 2442, -1000, 1000),DecodeDecimal('cWAGFshpB0o=', 2442, -1000, 1000));
    question.answers.length = 0;
    question.num = 156;
    question.isSingleAns = false;
    question.shortTextQuestion = "156. ��������� �� ����� �� ������������� ��������� ������������ ��� Windows ��� Mac �� ����� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yAW3uD8GrAM=', 2444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rMdYQU03cG0=', 2446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. JPEG2000";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fM+4TANGVCg=', 2448, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. PDF";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3S/cmqMu9mI=', 2450, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. TIFF";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('v8EShcAK21o=', 2452, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "�. ��� �� ��������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion157()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 156;
    var weight = DecodeNumber('v8EShcAK21o=', 2452, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('v8EShcAK21o=', 2452, -1000, 1000),DecodeDecimal('Z/YvoPAheXg=', 2452, -1000, 1000),DecodeDecimal('Z/YvoPAheXg=', 2452, -1000, 1000));
    question.answers.length = 0;
    question.num = 157;
    question.isSingleAns = false;
    question.shortTextQuestion = "157. ��������� �� �����: ��� �� ����� ������� ��� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OyBQzlFAM9M=', 2454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ������������� ��������� ��� ���� ��� ������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OyBQzlFAM9M=', 2456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ������������� ��������� ��� ����� ���� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hQze33o4wUI=', 2458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ������������� ��������� ��� ���� ��� �������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion158()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 157;
    var weight = DecodeNumber('PIT7u31wfEM=', 2462, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PIT7u31wfEM=', 2462, -1000, 1000),DecodeDecimal('N1Zpo/WD34E=', 2462, -1000, 1000),DecodeDecimal('N1Zpo/WD34E=', 2462, -1000, 1000));
    question.answers.length = 0;
    question.num = 158;
    question.isSingleAns = false;
    question.shortTextQuestion = "158. ��������� �� �����: � ������ ����������� (feathering) �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oUJYlfXk9Fs=', 2464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� �� �������� ��� �� ���������� �������������� ��� �������������� ��� ���� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oUJYlfXk9Fs=', 2466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� ��� ��������������� ��� ������������ �� �� ����� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2vRXPDkPZ1E=', 2468, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� �������� ��� ��������������� ��� ������ �� �� �������������� ��� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion159()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 158;
    var weight = DecodeNumber('4cda7TEM0Dg=', 2472, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4cda7TEM0Dg=', 2472, -1000, 1000),DecodeDecimal('7z9zO00y8Tk=', 2472, -1000, 1000),DecodeDecimal('7z9zO00y8Tk=', 2472, -1000, 1000));
    question.answers.length = 0;
    question.num = 159;
    question.isSingleAns = false;
    question.shortTextQuestion = "159. ��������� �� �����: � ������ ��������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q3WIwtzrgu0=', 2474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� �� ������� ���� ���� �������� ��� �������� ��� ������������� pixel";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q3WIwtzrgu0=', 2476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� ��������� �� ��� �� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ec7XriK6xbA=', 2478, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� �� ��������� ��� ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion160()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 159;
    var weight = DecodeNumber('DgVqxgmqdls=', 2482, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DgVqxgmqdls=', 2482, -1000, 1000),DecodeDecimal('UoLz3t0oWYk=', 2482, -1000, 1000),DecodeDecimal('UoLz3t0oWYk=', 2482, -1000, 1000));
    question.answers.length = 0;
    question.num = 160;
    question.isSingleAns = false;
    question.shortTextQuestion = "160. ��������� �� ����� �� ������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DgVqxgmqdls=', 2484, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �� ����� ��� ������ ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I+2JaIsUhvk=', 2486, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �������� Alt ��� ���� ��� ��������� ��� ���� ����� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('I+2JaIsUhvk=', 2488, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���� ��� ��������� ��� ���� ����� ��� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion161()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 160;
    var weight = DecodeNumber('2v56qghSneg=', 2492, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2v56qghSneg=', 2492, -1000, 1000),DecodeDecimal('zb2dXKoJE1s=', 2492, -1000, 1000),DecodeDecimal('zb2dXKoJE1s=', 2492, -1000, 1000));
    question.answers.length = 0;
    question.num = 161;
    question.isSingleAns = false;
    question.shortTextQuestion = "161. ��������� �� ����� �������� �������� ��������� �� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2v56qghSneg=', 2494, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��������� �������� ��� ���� ������� �������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ggdypzcb5Ts=', 2496, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������� ��� ��������� ��� ���� ������ Backspace � Delete";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JJWnM2Xtn4s=', 2498, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion162()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 161;
    var weight = DecodeNumber('t+2Q4mEtK7U=', 2502, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t+2Q4mEtK7U=', 2502, -1000, 1000),DecodeDecimal('O4MGavtYewA=', 2502, -1000, 1000),DecodeDecimal('O4MGavtYewA=', 2502, -1000, 1000));
    question.answers.length = 0;
    question.num = 162;
    question.isSingleAns = false;
    question.shortTextQuestion = "162. ��������� �� ����� � ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('B/fjbZT//oY=', 2504, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� ���� ��� ��� ������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B/fjbZT//oY=', 2506, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ���� ��� �� ����� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('63cuuQNDHKo=', 2508, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� ���� ��� �� ����� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion163()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 162;
    var weight = DecodeNumber('wiRaJ51/h7M=', 2512, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wiRaJ51/h7M=', 2512, -1000, 1000),DecodeDecimal('MfDf7h7bciA=', 2512, -1000, 1000),DecodeDecimal('MfDf7h7bciA=', 2512, -1000, 1000));
    question.answers.length = 0;
    question.num = 163;
    question.isSingleAns = false;
    question.shortTextQuestion = "163. ��������� �� ����� ���� ���������� �������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wiRaJ51/h7M=', 2514, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ����������� ����� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Vt73Iy3KXqA=', 2516, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ��������������/���������������� �� ������������ ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W6qkc6/DTYY=', 2518, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������� � ����� ��������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aebsXTU49PQ=', 2520, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion164()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 163;
    var weight = DecodeNumber('eVlltbf7/pg=', 2522, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eVlltbf7/pg=', 2522, -1000, 1000),DecodeDecimal('+iXbuuXliM4=', 2522, -1000, 1000),DecodeDecimal('+iXbuuXliM4=', 2522, -1000, 1000));
    question.answers.length = 0;
    question.num = 164;
    question.isSingleAns = false;
    question.shortTextQuestion = "164. ��������� �� ����� ��� ��� �������� ������� �� ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OJAczf7vPsc=', 2524, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � �������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OJAczf7vPsc=', 2526, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������� ������������� ������������� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WeD4zeX2YqA=', 2528, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ������������ ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion165()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 164;
    var weight = DecodeNumber('KWEaCzY+SCs=', 2532, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KWEaCzY+SCs=', 2532, -1000, 1000),DecodeDecimal('lhPzElmX+Wo=', 2532, -1000, 1000),DecodeDecimal('lhPzElmX+Wo=', 2532, -1000, 1000));
    question.answers.length = 0;
    question.num = 165;
    question.isSingleAns = false;
    question.shortTextQuestion = "165. ��������� �� ����� � �������� ������� ����������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3qxYPLXwLeM=', 2534, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3qxYPLXwLeM=', 2536, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LST0Kh5uOt0=', 2538, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion166()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 165;
    var weight = DecodeNumber('ao+DktF5wjs=', 2542, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ao+DktF5wjs=', 2542, -1000, 1000),DecodeDecimal('NqNcpXZsCkY=', 2542, -1000, 1000),DecodeDecimal('NqNcpXZsCkY=', 2542, -1000, 1000));
    question.answers.length = 0;
    question.num = 166;
    question.isSingleAns = false;
    question.shortTextQuestion = "166. ��������� �� ����� ��� ������ �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lfAXvFrkH/4=', 2544, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lfAXvFrkH/4=', 2546, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����� ������� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('73NSdxBXuVA=', 2548, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion167()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 166;
    var weight = DecodeNumber('Hcf27DFD3KU=', 2552, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Hcf27DFD3KU=', 2552, -1000, 1000),DecodeDecimal('v5gj1rAstVM=', 2552, -1000, 1000),DecodeDecimal('v5gj1rAstVM=', 2552, -1000, 1000));
    question.answers.length = 0;
    question.num = 167;
    question.isSingleAns = false;
    question.shortTextQuestion = "167. ��������� �� ����� �� �� ����� ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Hcf27DFD3KU=', 2554, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ���������� ��������� ���� ����� ���� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Nd5pgw6lWmk=', 2556, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ����������� � �������� ��� �� ��� ��� ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LIMd1wSH5Zg=', 2558, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������ ������� ��� ��� ������ �� ������� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eU3CMmWgcfo=', 2560, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion168()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 167;
    var weight = DecodeNumber('k2EBHssOYBg=', 2562, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('k2EBHssOYBg=', 2562, -1000, 1000),DecodeDecimal('brAFWVH2Zuo=', 2562, -1000, 1000),DecodeDecimal('brAFWVH2Zuo=', 2562, -1000, 1000));
    question.answers.length = 0;
    question.num = 168;
    question.isSingleAns = false;
    question.shortTextQuestion = "168. ��������� �� ����� ��� ������ ������ �� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('k2EBHssOYBg=', 2564, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� ������� ���� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+DtPOQUOArY=', 2566, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('82M2DtXpOWE=', 2568, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��������� ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8ZZZAn1Rp9U=', 2570, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion169()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 168;
    var weight = DecodeNumber('K1lAm0dCLbg=', 2572, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K1lAm0dCLbg=', 2572, -1000, 1000),DecodeDecimal('V7Re7Y234T0=', 2572, -1000, 1000),DecodeDecimal('V7Re7Y234T0=', 2572, -1000, 1000));
    question.answers.length = 0;
    question.num = 169;
    question.isSingleAns = false;
    question.shortTextQuestion = "169. ��������� �� ����� �� ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K1lAm0dCLbg=', 2574, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ��� ��� �� ������ ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W36FY9mCQoA=', 2576, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ��� ������� ��� ����������� ��� ���� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sRQg5cO40lw=', 2578, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion170()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 169;
    var weight = DecodeNumber('Q8X83XNG2as=', 2582, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q8X83XNG2as=', 2582, -1000, 1000),DecodeDecimal('GKkLFSQHUNw=', 2582, -1000, 1000),DecodeDecimal('GKkLFSQHUNw=', 2582, -1000, 1000));
    question.answers.length = 0;
    question.num = 170;
    question.isSingleAns = false;
    question.shortTextQuestion = "170. ��������� �� ����� �� ��� ������ Lab:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T7GYx4rYh08=', 2584, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������� �� ����������� �� ����������� ��������� ��� �������� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T7GYx4rYh08=', 2586, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����������� �� ����������� ����������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K2ayQZ+tK1s=', 2588, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �� ����������� ���� �� ����������� ��������������� ��� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion171()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 170;
    var weight = DecodeNumber('5JqjBf9akV0=', 2592, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5JqjBf9akV0=', 2592, -1000, 1000),DecodeDecimal('6kpkYie+J9A=', 2592, -1000, 1000),DecodeDecimal('6kpkYie+J9A=', 2592, -1000, 1000));
    question.answers.length = 0;
    question.num = 171;
    question.isSingleAns = false;
    question.shortTextQuestion = "171. ��������� �� ����� � ������ ���������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5JqjBf9akV0=', 2594, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ����� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9w9IREIgoaU=', 2596, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ����� ��� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9w9IREIgoaU=', 2598, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ����� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion172()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 171;
    var weight = DecodeNumber('6IHd/s63lIo=', 2602, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6IHd/s63lIo=', 2602, -1000, 1000),DecodeDecimal('M76EWabiAWA=', 2602, -1000, 1000),DecodeDecimal('M76EWabiAWA=', 2602, -1000, 1000));
    question.answers.length = 0;
    question.num = 172;
    question.isSingleAns = false;
    question.shortTextQuestion = "172. ��������� �� ����� ������ ��� �� ������������ ��� ����� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qBK1UXCxHSA=', 2604, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ������-cutout-���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qBK1UXCxHSA=', 2606, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ���� - ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sDWTuj+6sGI=', 2608, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��������� ����������, �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion173()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 172;
    var weight = DecodeNumber('u8xmkablUCg=', 2612, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('u8xmkablUCg=', 2612, -1000, 1000),DecodeDecimal('qdQgCaWbnbc=', 2612, -1000, 1000),DecodeDecimal('qdQgCaWbnbc=', 2612, -1000, 1000));
    question.answers.length = 0;
    question.num = 173;
    question.isSingleAns = false;
    question.shortTextQuestion = "173. ��������� �� ����� �� ������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gHKGzE4AJec=', 2614, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ��������� ��� ������ ��� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gHKGzE4AJec=', 2616, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ���� � ������ �������� �������� ��������������� ����� ��������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+Bo2Xj4ZHqU=', 2618, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion174()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 173;
    var weight = DecodeNumber('t/JC52RMFVE=', 2622, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t/JC52RMFVE=', 2622, -1000, 1000),DecodeDecimal('2deHsfU2/gY=', 2622, -1000, 1000),DecodeDecimal('2deHsfU2/gY=', 2622, -1000, 1000));
    question.answers.length = 0;
    question.num = 174;
    question.isSingleAns = false;
    question.shortTextQuestion = "174. ��������� �� ����� ������ ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t/JC52RMFVE=', 2624, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ���� ���� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LHSIf7NhmO0=', 2626, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������ ����������� �� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LHSIf7NhmO0=', 2628, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion175()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 174;
    var weight = DecodeNumber('Ok5f8GFd0G8=', 2632, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ok5f8GFd0G8=', 2632, -1000, 1000),DecodeDecimal('G8/QaL7uj9o=', 2632, -1000, 1000),DecodeDecimal('G8/QaL7uj9o=', 2632, -1000, 1000));
    question.answers.length = 0;
    question.num = 175;
    question.isSingleAns = false;
    question.shortTextQuestion = "175. ��������� �� ����� � ������� Sumi-e  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ok5f8GFd0G8=', 2634, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ���� ������ ��� �������� �� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ForAbdzS6Og=', 2636, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ���� ���� �� ������� ����� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ForAbdzS6Og=', 2638, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion176()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 175;
    var weight = DecodeNumber('/QivR2x6edE=', 2642, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/QivR2x6edE=', 2642, -1000, 1000),DecodeDecimal('CiqyLgNYA+A=', 2642, -1000, 1000),DecodeDecimal('CiqyLgNYA+A=', 2642, -1000, 1000));
    question.answers.length = 0;
    question.num = 176;
    question.isSingleAns = false;
    question.shortTextQuestion = "176. ��������� �� ����� �� ��� zigzag  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O6T9gTGJ1Sw=', 2644, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �������� ��� �������, ������� �� ��� ������ ��� pixel ���� ������� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O6T9gTGJ1Sw=', 2646, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������� �� ����� zigzag";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BWBRHV4iaeY=', 2648, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion177()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 176;
    var weight = DecodeNumber('w2oIvZJ3Dx4=', 2652, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('w2oIvZJ3Dx4=', 2652, -1000, 1000),DecodeDecimal('abtjMga2/p8=', 2652, -1000, 1000),DecodeDecimal('abtjMga2/p8=', 2652, -1000, 1000));
    question.answers.length = 0;
    question.num = 177;
    question.isSingleAns = false;
    question.shortTextQuestion = "177. ��������� �� ����� �� ������ ���������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w2oIvZJ3Dx4=', 2654, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��������� ���� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('medMTWUJFvM=', 2656, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��������� ��� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j20SJPPhk/w=', 2658, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� ������ ��� ������� ��������� �� pixel ��������� ���������� ����� �� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion178()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 177;
    var weight = DecodeNumber('N/wQ3DJzDL4=', 2662, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('N/wQ3DJzDL4=', 2662, -1000, 1000),DecodeDecimal('PEAeDJo/AW0=', 2662, -1000, 1000),DecodeDecimal('PEAeDJo/AW0=', 2662, -1000, 1000));
    question.answers.length = 0;
    question.num = 178;
    question.isSingleAns = false;
    question.shortTextQuestion = "178. ��������� �� ����� �� ������ �������� �ezzo  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lKT/tuhaXoc=', 2664, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��� ������ �� ������ ������ ����������� �������� � ������ ���������� ���������� ��� ������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lKT/tuhaXoc=', 2666, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������ �� �������� ��� ���� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('imk27mXq0ew=', 2668, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ��� ������ �� �������� ��� �������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion179()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 178;
    var weight = DecodeNumber('FSVquSuVQ0M=', 2672, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FSVquSuVQ0M=', 2672, -1000, 1000),DecodeDecimal('SbqdV4K+ISA=', 2672, -1000, 1000),DecodeDecimal('SbqdV4K+ISA=', 2672, -1000, 1000));
    question.answers.length = 0;
    question.num = 179;
    question.isSingleAns = false;
    question.shortTextQuestion = "179. ��������� �� ����� � ������ ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zkdk39jCJDo=', 2674, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������ ��� ��������� ������� ��� ������� ����� ��������� ������ ��� ���� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zkdk39jCJDo=', 2676, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� ������ ��� ��������� ������� ��� ������� ����� ��������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('U8kwD8wGFrs=', 2678, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ������ ��� ��������� ������� ��� ������� ���� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion180()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 179;
    var weight = DecodeNumber('NbhiKPrQLug=', 2682, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NbhiKPrQLug=', 2682, -1000, 1000),DecodeDecimal('zwMO9BpmETU=', 2682, -1000, 1000),DecodeDecimal('zwMO9BpmETU=', 2682, -1000, 1000));
    question.answers.length = 0;
    question.num = 180;
    question.isSingleAns = false;
    question.shortTextQuestion = "180. ��������� �� ����� �� ����� �� �������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DdglRWokYEc=', 2684, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������� �� �������� ��� �� ���������� ��� �� ����� ����������� �� ������ �������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DdglRWokYEc=', 2686, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� ����� �������� ����� ������ ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ub+Ff9jODyU=', 2688, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������� ����� �������� ���� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion181()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 180;
    var weight = DecodeNumber('4AMcc6DUbQo=', 2692, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4AMcc6DUbQo=', 2692, -1000, 1000),DecodeDecimal('rsyfeoL1mLg=', 2692, -1000, 1000),DecodeDecimal('rsyfeoL1mLg=', 2692, -1000, 1000));
    question.answers.length = 0;
    question.num = 181;
    question.isSingleAns = false;
    question.shortTextQuestion = "181. ��������� �� ����� �� ������ ��� ��������� ��������������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4AMcc6DUbQo=', 2694, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y5eiIzP2C9M=', 2696, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y5eiIzP2C9M=', 2698, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion182()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 181;
    var weight = DecodeNumber('jfMlRFCK05Q=', 2702, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jfMlRFCK05Q=', 2702, -1000, 1000),DecodeDecimal('lui3FTIENck=', 2702, -1000, 1000),DecodeDecimal('lui3FTIENck=', 2702, -1000, 1000));
    question.answers.length = 0;
    question.num = 182;
    question.isSingleAns = false;
    question.shortTextQuestion = "182. ��������� �� ����� ������ ��� �� ������ ���� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tIUhPMSStyo=', 2704, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Craquelure-������-�������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tIUhPMSStyo=', 2706, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������-�����������-patchwork";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LO9Eq06bELU=', 2708, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �����-�����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion183()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 182;
    var weight = DecodeNumber('QEk//+NZ7Pw=', 2712, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QEk//+NZ7Pw=', 2712, -1000, 1000),DecodeDecimal('pK0st7+jbeU=', 2712, -1000, 1000),DecodeDecimal('pK0st7+jbeU=', 2712, -1000, 1000));
    question.answers.length = 0;
    question.num = 183;
    question.isSingleAns = false;
    question.shortTextQuestion = "183. ��������� �� ����� �� ������ ������ ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QEk//+NZ7Pw=', 2714, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RNqqOYXPumk=', 2716, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� NTSC";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('drqPso6+GEQ=', 2718, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� RGB";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion184()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 183;
    var weight = DecodeNumber('fLsc0wbRmaw=', 2722, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fLsc0wbRmaw=', 2722, -1000, 1000),DecodeDecimal('OsuWek4Wurs=', 2722, -1000, 1000),DecodeDecimal('OsuWek4Wurs=', 2722, -1000, 1000));
    question.answers.length = 0;
    question.num = 184;
    question.isSingleAns = false;
    question.shortTextQuestion = "184. ��������� �� ����� �� ������ digimarc  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fLsc0wbRmaw=', 2724, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �������������� ���������� ���� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7oz7kpLzPWY=', 2726, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ������������ ��� �� ������������ �� ���������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7oz7kpLzPWY=', 2728, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion185()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 184;
    var weight = DecodeNumber('0l1uXKvuEZo=', 2732, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0l1uXKvuEZo=', 2732, -1000, 1000),DecodeDecimal('aLHQuqsHN/A=', 2732, -1000, 1000),DecodeDecimal('aLHQuqsHN/A=', 2732, -1000, 1000));
    question.answers.length = 0;
    question.num = 185;
    question.isSingleAns = false;
    question.shortTextQuestion = "185. ��������� �� ����� ���� ������� ��������� ������� ���� ��� �������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OhxEvV6XWyA=', 2734, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ���������� ����������� ��� ����� ��� ���� ��������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OhxEvV6XWyA=', 2736, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ���������� ����������� �� ������� ��� ������������ ���� ���� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1+EF6pllbig=', 2738, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������� ���������� ����������� �� ������� ��� ������ ��� �������� �� ������� ��� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion186()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 185;
    var weight = DecodeNumber('Q588GsJKQsU=', 2742, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q588GsJKQsU=', 2742, -1000, 1000),DecodeDecimal('xFLngdBar/Q=', 2742, -1000, 1000),DecodeDecimal('xFLngdBar/Q=', 2742, -1000, 1000));
    question.answers.length = 0;
    question.num = 186;
    question.isSingleAns = false;
    question.shortTextQuestion = "186. ��������� �� ����� ���� ������ ������������ �� �������� ��� ��� ����� ������������� ��� ��� ����� ������� �����������;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q588GsJKQsU=', 2744, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������-�����-����� ��� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rWTrFxaE+io=', 2746, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������-����� � ����-����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rWTrFxaE+io=', 2748, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion187()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 186;
    var weight = DecodeNumber('LdVWLTCFK+g=', 2752, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LdVWLTCFK+g=', 2752, -1000, 1000),DecodeDecimal('PBphOOVqxGk=', 2752, -1000, 1000),DecodeDecimal('PBphOOVqxGk=', 2752, -1000, 1000));
    question.answers.length = 0;
    question.num = 187;
    question.isSingleAns = false;
    question.shortTextQuestion = "187. ��������� �� ����� �� ������ ����������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zE92Lbo66cM=', 2754, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ����� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zE92Lbo66cM=', 2756, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ����� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MBaqZxbcJO4=', 2758, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ����� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion188()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 187;
    var weight = DecodeNumber('ohMECW7g94I=', 2762, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ohMECW7g94I=', 2762, -1000, 1000),DecodeDecimal('WfF47qcCyh4=', 2762, -1000, 1000),DecodeDecimal('WfF47qcCyh4=', 2762, -1000, 1000));
    question.answers.length = 0;
    question.num = 188;
    question.isSingleAns = false;
    question.shortTextQuestion = "188. ��������� �� ����� � ������� ���������� ����   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('W8XFeiJrQCs=', 2764, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ��� ����� ������������� ��� �������� ������� ��� ��� �� �������� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W8XFeiJrQCs=', 2766, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��� ������ ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+724gDXMz/U=', 2768, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� ��� ������ ���� ��� �� �������� ����������� ���";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion189()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 188;
    var weight = DecodeNumber('NlokphAJoXk=', 2772, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NlokphAJoXk=', 2772, -1000, 1000),DecodeDecimal('ZJFVhaSXLzU=', 2772, -1000, 1000),DecodeDecimal('ZJFVhaSXLzU=', 2772, -1000, 1000));
    question.answers.length = 0;
    question.num = 189;
    question.isSingleAns = false;
    question.shortTextQuestion = "189. ��������� �� ����� �� ������ ��� �������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1W6N90kEZwg=', 2774, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� �� ������� RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1W6N90kEZwg=', 2776, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� �� ������� CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hmdp1w0ql8g=', 2778, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������� RGB ��� CMYK";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion190()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 189;
    var weight = DecodeNumber('X4biUQHrMpI=', 2782, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('X4biUQHrMpI=', 2782, -1000, 1000),DecodeDecimal('nOHYq0BVqSM=', 2782, -1000, 1000),DecodeDecimal('nOHYq0BVqSM=', 2782, -1000, 1000));
    question.answers.length = 0;
    question.num = 190;
    question.isSingleAns = false;
    question.shortTextQuestion = "190. ��������� �� ����� �� ������������ ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dKnDBq2B9Es=', 2784, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������ ���� �� ��� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dKnDBq2B9Es=', 2786, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ��� ���������� ������ �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('phwDw0JXH64=', 2788, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ���� ��� ������������ �� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion191()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 190;
    var weight = DecodeNumber('CL22+gYmRZA=', 2792, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CL22+gYmRZA=', 2792, -1000, 1000),DecodeDecimal('m+XOVhaWNA4=', 2792, -1000, 1000),DecodeDecimal('m+XOVhaWNA4=', 2792, -1000, 1000));
    question.answers.length = 0;
    question.num = 191;
    question.isSingleAns = false;
    question.shortTextQuestion = "191. ��������� �� ����� � ����� ��� �������� ��� �������� ��� ��� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QK2thmoiSbU=', 2794, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������ ��� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QK2thmoiSbU=', 2796, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� ���� �� ��� �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9ANQYHR3Ee4=', 2798, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ������ ����� �� ��� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion192()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 191;
    var weight = DecodeNumber('uLdPYg25F/s=', 2802, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uLdPYg25F/s=', 2802, -1000, 1000),DecodeDecimal('1nhppwsyaDo=', 2802, -1000, 1000),DecodeDecimal('1nhppwsyaDo=', 2802, -1000, 1000));
    question.answers.length = 0;
    question.num = 192;
    question.isSingleAns = false;
    question.shortTextQuestion = "192. ��������� �� ����� � ����� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VoavmON+LF4=', 2804, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� ��� ��� �������� �������� ���� �������� ��� ��� ��������� �������� ��� �������� ��� ���������� ���� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VoavmON+LF4=', 2806, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ����� ����� ��� ����������� 100% �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dffjmjaAwwE=', 2808, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ���� ����� ��� ����������� 100% �� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion193()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 192;
    var weight = DecodeNumber('8u3Ne8b4WaM=', 2812, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8u3Ne8b4WaM=', 2812, -1000, 1000),DecodeDecimal('zTdg4lHQS5g=', 2812, -1000, 1000),DecodeDecimal('zTdg4lHQS5g=', 2812, -1000, 1000));
    question.answers.length = 0;
    question.num = 193;
    question.isSingleAns = false;
    question.shortTextQuestion = "193. ��������� �� ����� ��� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8u3Ne8b4WaM=', 2814, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ��������� �� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4XEfbo2rCuE=', 2816, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �������� �� ��������� �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4XEfbo2rCuE=', 2818, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� �� ��������� ��� ���� ��� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion194()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 193;
    var weight = DecodeNumber('dQHCm0VMaNI=', 2822, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dQHCm0VMaNI=', 2822, -1000, 1000),DecodeDecimal('P4PXDUBGBuo=', 2822, -1000, 1000),DecodeDecimal('P4PXDUBGBuo=', 2822, -1000, 1000));
    question.answers.length = 0;
    question.num = 194;
    question.isSingleAns = false;
    question.shortTextQuestion = "194. ��������� �� ����� � ���������� ���� ��������/���� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U4nT7JGbMWo=', 2824, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� �� ���� ��� ��������� ��� ���� ����� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U4nT7JGbMWo=', 2826, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������� �� ���� ��� ����� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K3KTHXWDXec=', 2828, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� �� ���� ���� ������ ������������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion195()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 194;
    var weight = DecodeNumber('yG3Lp7paMxY=', 2832, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yG3Lp7paMxY=', 2832, -1000, 1000),DecodeDecimal('W/ozpCOTzls=', 2832, -1000, 1000),DecodeDecimal('W/ozpCOTzls=', 2832, -1000, 1000));
    question.answers.length = 0;
    question.num = 195;
    question.isSingleAns = false;
    question.shortTextQuestion = "195. ��������� �� ����� � ������������ ���� layer mask (���� ������ ��������)   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H0BZb+YgiHk=', 2834, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ��� ��� �������� �������� ���� �������� ��� ��� ��������� �������� ��� �������� ��� ���������� ���� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H0BZb+YgiHk=', 2836, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ����� ����� ��� ����������� 100% �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JSZ7+Gd29PU=', 2838, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ���� ����� ��� ����������� 100% �� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion196()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 195;
    var weight = DecodeNumber('H9DojxEkk9Y=', 2842, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H9DojxEkk9Y=', 2842, -1000, 1000),DecodeDecimal('Rg3a3KRH3SU=', 2842, -1000, 1000),DecodeDecimal('Rg3a3KRH3SU=', 2842, -1000, 1000));
    question.answers.length = 0;
    question.num = 196;
    question.isSingleAns = false;
    question.shortTextQuestion = "196. ��������� �� ����� �� ����� layer Options  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H9DojxEkk9Y=', 2844, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ������� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FEqeFbB46yo=', 2846, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ������� ���� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sgNb3OxpLqg=', 2848, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ������� ���� �������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xbmfH9WUO6U=', 2850, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion197()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 196;
    var weight = DecodeNumber('IWY050sGl58=', 2852, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IWY050sGl58=', 2852, -1000, 1000),DecodeDecimal('9IF4Ktb/H0g=', 2852, -1000, 1000),DecodeDecimal('9IF4Ktb/H0g=', 2852, -1000, 1000));
    question.answers.length = 0;
    question.num = 197;
    question.isSingleAns = false;
    question.shortTextQuestion = "197. ��������� �� ����� �� ������ 3D ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IWY050sGl58=', 2854, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PAc+gE2jKJQ=', 2856, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qQ8Y9rRG14E=', 2858, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qQ8Y9rRG14E=', 2860, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion198()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 197;
    var weight = DecodeNumber('kGrnKbEIAYA=', 2862, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kGrnKbEIAYA=', 2862, -1000, 1000),DecodeDecimal('BA4R6U545Lw=', 2862, -1000, 1000),DecodeDecimal('BA4R6U545Lw=', 2862, -1000, 1000));
    question.answers.length = 0;
    question.num = 198;
    question.isSingleAns = false;
    question.shortTextQuestion = "198. ��������� �� ����� �� ����� ��� �������� ���� ������������ ����������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kGrnKbEIAYA=', 2864, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0WNIQFf8+o0=', 2866, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sXa3hCR0e3c=', 2868, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nrRBm0h6emE=', 2870, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion199()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 198;
    var weight = DecodeNumber('usZEzoCSJSw=', 2872, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('usZEzoCSJSw=', 2872, -1000, 1000),DecodeDecimal('5abrfKk2NyM=', 2872, -1000, 1000),DecodeDecimal('5abrfKk2NyM=', 2872, -1000, 1000));
    question.answers.length = 0;
    question.num = 199;
    question.isSingleAns = false;
    question.shortTextQuestion = "199. ��������� �� ����� �� ���� ������������ ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TW5RckRP3s8=', 2874, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ���� ��� ��� ������� 3D ���� ������ \"�������\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TW5RckRP3s8=', 2876, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nkDlw3efAW8=', 2878, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� �� ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dCWLTKV+ZwI=', 2880, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion200()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 199;
    var weight = DecodeNumber('L3PIK4yet40=', 2882, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L3PIK4yet40=', 2882, -1000, 1000),DecodeDecimal('WCSm7WhNNwk=', 2882, -1000, 1000),DecodeDecimal('WCSm7WhNNwk=', 2882, -1000, 1000));
    question.answers.length = 0;
    question.num = 200;
    question.isSingleAns = false;
    question.shortTextQuestion = "200. ��������� �� ����� ��� ������� �� �� �������� 3D ������ ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L3PIK4yet40=', 2884, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sBiIuHkhvyk=', 2886, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lSn/fHlyu3g=', 2888, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z3oEyoFgP3o=', 2890, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('z3oEyoFgP3o=', 2892, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "�. ������ ��� �� ��������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion201()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 200;
    var weight = DecodeNumber('nkzZrTv0SeQ=', 2892, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nkzZrTv0SeQ=', 2892, -1000, 1000),DecodeDecimal('ZAl02q/o7ko=', 2892, -1000, 1000),DecodeDecimal('ZAl02q/o7ko=', 2892, -1000, 1000));
    question.answers.length = 0;
    question.num = 201;
    question.isSingleAns = false;
    question.shortTextQuestion = "201. ��������� �� ����� �� �� ����� ��� ��������� ��� ������� 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8zFtgaFGGM0=', 2894, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ � ������� ��� ������� ����� �� ����������� � ���� ��� ������������ 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8zFtgaFGGM0=', 2896, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ �� ����������� ���� ��� ����� ����������� �� ���";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('k6q/N9ThMIo=', 2898, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������ � ������ ��� �� ����������� ���� ��� ����� ����������� �� ���";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion202()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 201;
    var weight = DecodeNumber('WYeQECzTMhc=', 2902, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WYeQECzTMhc=', 2902, -1000, 1000),DecodeDecimal('tsXkUsxWlxo=', 2902, -1000, 1000),DecodeDecimal('tsXkUsxWlxo=', 2902, -1000, 1000));
    question.answers.length = 0;
    question.num = 202;
    question.isSingleAns = false;
    question.shortTextQuestion = "202. ��������� �� �����: ��� �� ������������ ���� ������������� ������� ��� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aWbyApZc0u4=', 2904, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��������� ������� ��� ���� ���� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aWbyApZc0u4=', 2906, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ���� ��� �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x7SJEN6U//c=', 2908, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ���� ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion203()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 202;
    var weight = DecodeNumber('XHOLYEO496E=', 2912, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XHOLYEO496E=', 2912, -1000, 1000),DecodeDecimal('zkF/gOvlgBM=', 2912, -1000, 1000),DecodeDecimal('zkF/gOvlgBM=', 2912, -1000, 1000));
    question.answers.length = 0;
    question.num = 203;
    question.isSingleAns = false;
    question.shortTextQuestion = "203. ��������� �� �����: ��� �� ����������� ��� ������� �� ����� 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RAt9ahAUBYM=', 2914, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� ���� ������������ ����� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RAt9ahAUBYM=', 2916, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������� ��� ��������� ���� �� ����� y";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BjtykDvDlgI=', 2918, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ������� ��� ��������� ���� ��� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion204()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 203;
    var weight = DecodeNumber('WlE0R6lRo2M=', 2922, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WlE0R6lRo2M=', 2922, -1000, 1000),DecodeDecimal('a/eiwFv4HKA=', 2922, -1000, 1000),DecodeDecimal('a/eiwFv4HKA=', 2922, -1000, 1000));
    question.answers.length = 0;
    question.num = 204;
    question.isSingleAns = false;
    question.shortTextQuestion = "204. ��������� �� �����: ��� �� ����������� �� ������� ���� ����� ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/meGPGI4RLc=', 2924, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ���� ��� ���� ������������ ������ ������������ ���� �� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/meGPGI4RLc=', 2926, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ���� ��� ���� ������������ ������ ������������ ���� �� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sPHdztIuj1s=', 2928, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ���� ��� ���� ������������ ������ ������������ ���� ���� �� ������ ���� ���� �� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion205()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 204;
    var weight = DecodeNumber('43ucdzTR1yo=', 2932, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('43ucdzTR1yo=', 2932, -1000, 1000),DecodeDecimal('1ut79WWsOnQ=', 2932, -1000, 1000),DecodeDecimal('1ut79WWsOnQ=', 2932, -1000, 1000));
    question.answers.length = 0;
    question.num = 205;
    question.isSingleAns = false;
    question.shortTextQuestion = "205. ��������� �� �����: ���� �������� ������� ������������ �� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('43ucdzTR1yo=', 2934, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� - �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FWd1pLOu8L4=', 2936, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������-��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D6DPrOs60a0=', 2938, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion206()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 205;
    var weight = DecodeNumber('iCbixWIriPU=', 2942, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iCbixWIriPU=', 2942, -1000, 1000),DecodeDecimal('Cv5oVAaMPfQ=', 2942, -1000, 1000),DecodeDecimal('Cv5oVAaMPfQ=', 2942, -1000, 1000));
    question.answers.length = 0;
    question.num = 206;
    question.isSingleAns = false;
    question.shortTextQuestion = "206. �� ��������� �������� �������� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8k/pByDVQpM=', 2944, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8k/pByDVQpM=', 2946, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� �������� ������ �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XIm3gDiqV1E=', 2948, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� �������� ���������� �������������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion207()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 206;
    var weight = DecodeNumber('rw5bSMvmd90=', 2952, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rw5bSMvmd90=', 2952, -1000, 1000),DecodeDecimal('JdusZ37hTuc=', 2952, -1000, 1000),DecodeDecimal('JdusZ37hTuc=', 2952, -1000, 1000));
    question.answers.length = 0;
    question.num = 207;
    question.isSingleAns = false;
    question.shortTextQuestion = "207. ��������� �� ����� � ������ ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rw5bSMvmd90=', 2954, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ����������� ��� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dJSVY3eHg2U=', 2956, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� ����� ��� �������� ��� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dJSVY3eHg2U=', 2958, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� ��� ����� ��� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion208()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 207;
    var weight = DecodeNumber('aZ9W1gFY81g=', 2962, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aZ9W1gFY81g=', 2962, -1000, 1000),DecodeDecimal('gBTBoD3NSRM=', 2962, -1000, 1000),DecodeDecimal('gBTBoD3NSRM=', 2962, -1000, 1000));
    question.answers.length = 0;
    question.num = 208;
    question.isSingleAns = false;
    question.shortTextQuestion = "208. ��������� �� ����� � ������ �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aZ9W1gFY81g=', 2964, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ������ ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NWMZmmyWv0Y=', 2966, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NWMZmmyWv0Y=', 2968, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ������������ ���";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion209()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 208;
    var weight = DecodeNumber('PRRRYqNpZGU=', 2972, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PRRRYqNpZGU=', 2972, -1000, 1000),DecodeDecimal('Qq4w5ktqAik=', 2972, -1000, 1000),DecodeDecimal('Qq4w5ktqAik=', 2972, -1000, 1000));
    question.answers.length = 0;
    question.num = 209;
    question.isSingleAns = false;
    question.shortTextQuestion = " 209. ��������� �� ����� � �������� ��� ����������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sDL7Rwy+hZM=', 2974, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��������������� ����� ������������ ��� ������� 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sDL7Rwy+hZM=', 2976, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��������������� ����� ������������ ��� ������� 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ktLGNoOaDFI=', 2978, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ��������������� ��� �������� ��� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion210()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 209;
    var weight = DecodeNumber('KwKFpV/QVzg=', 2982, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KwKFpV/QVzg=', 2982, -1000, 1000),DecodeDecimal('NQilhfTjhS4=', 2982, -1000, 1000),DecodeDecimal('NQilhfTjhS4=', 2982, -1000, 1000));
    question.answers.length = 0;
    question.num = 210;
    question.isSingleAns = false;
    question.shortTextQuestion = "210. ��������� �� ����� � ��������� ������ �� ����� �� ����� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KwKFpV/QVzg=', 2984, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������������ ��� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q+pDbzNZdvg=', 2986, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������������ ��� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q+pDbzNZdvg=', 2988, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion211()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 210;
    var weight = DecodeNumber('F5vp2/ALIv4=', 2992, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('F5vp2/ALIv4=', 2992, -1000, 1000),DecodeDecimal('Vxs1IIQYJt0=', 2992, -1000, 1000),DecodeDecimal('Vxs1IIQYJt0=', 2992, -1000, 1000));
    question.answers.length = 0;
    question.num = 211;
    question.isSingleAns = false;
    question.shortTextQuestion = "211. ��������� �� ����� � ������ ���� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('F5vp2/ALIv4=', 2994, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0JgtYOeNVbM=', 2996, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ��������� �������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0JgtYOeNVbM=', 2998, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��� �������� ���� �� ��������� �������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion212()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 211;
    var weight = DecodeNumber('v++nUc4vzsk=', 3002, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('v++nUc4vzsk=', 3002, -1000, 1000),DecodeDecimal('doosYMP1ImE=', 3002, -1000, 1000),DecodeDecimal('doosYMP1ImE=', 3002, -1000, 1000));
    question.answers.length = 0;
    question.num = 212;
    question.isSingleAns = false;
    question.shortTextQuestion = "212. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('v++nUc4vzsk=', 3004, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ��������� � ���������� ��� ���� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0FEfWqKCqAk=', 3006, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������� UV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o08kSEPQ2DY=', 3008, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ��� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('barfjoH2c+E=', 3010, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ���������� ��� ������� UV ��� ��� ����������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion213()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 212;
    var weight = DecodeNumber('SVF/oXpEk1U=', 3012, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SVF/oXpEk1U=', 3012, -1000, 1000),DecodeDecimal('Oqh+GJdjkdE=', 3012, -1000, 1000),DecodeDecimal('Oqh+GJdjkdE=', 3012, -1000, 1000));
    question.answers.length = 0;
    question.num = 213;
    question.isSingleAns = false;
    question.shortTextQuestion = "213. ��������� �� ����� 2. �� ��������� Photoshop Extended ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8uquNJin6mQ=', 3014, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. 3 ������ ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8uquNJin6mQ=', 3016, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. 6 ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OZRBwcNBKnU=', 3018, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. 16 ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lV8usSCO9rI=', 3020, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('XVN5VvE+nAY=', 3022, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "�. ��� �� ��������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion214()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 213;
    var weight = DecodeNumber('5W7NhCOxs/s=', 3022, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5W7NhCOxs/s=', 3022, -1000, 1000),DecodeDecimal('aua/L0Y6w5Y=', 3022, -1000, 1000),DecodeDecimal('aua/L0Y6w5Y=', 3022, -1000, 1000));
    question.answers.length = 0;
    question.num = 214;
    question.isSingleAns = false;
    question.shortTextQuestion = "214. ��������� �� ����� 3. �� �������� ��� ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EddLTLOpTPI=', 3024, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ���� ��� ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EddLTLOpTPI=', 3026, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���� ��� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GKlEf73RlSQ=', 3028, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� �� ������ �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion215()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 214;
    var weight = DecodeNumber('x2RwIZA0104=', 3032, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x2RwIZA0104=', 3032, -1000, 1000),DecodeDecimal('cz2xHNAGc34=', 3032, -1000, 1000),DecodeDecimal('cz2xHNAGc34=', 3032, -1000, 1000));
    question.answers.length = 0;
    question.num = 215;
    question.isSingleAns = false;
    question.shortTextQuestion = "215. ��������� �� ����� �� ������ �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lFKgACGa+0E=', 3034, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� �� �����, ��� ���������� ��� ��� ���� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lFKgACGa+0E=', 3036, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������/��������� ��� �� ������������ �� ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gDyZtDZUFWM=', 3038, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� ��� ���� ��� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion216()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 215;
    var weight = DecodeNumber('l7tn1MjW5P8=', 3042, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('l7tn1MjW5P8=', 3042, -1000, 1000),DecodeDecimal('gqWal+jrk+4=', 3042, -1000, 1000),DecodeDecimal('gqWal+jrk+4=', 3042, -1000, 1000));
    question.answers.length = 0;
    question.num = 216;
    question.isSingleAns = false;
    question.shortTextQuestion = "216. ��������� �� ����� �� ������ ����� ������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('l7tn1MjW5P8=', 3044, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� ������ ��������������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+3IAhT26Nek=', 3046, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aW03c0MBRhE=', 3048, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� �� �������� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('g14lVj/nNPE=', 3050, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('hRCpte6Vres=', 3052, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "�. ��� �� ��������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion217()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 216;
    var weight = DecodeNumber('hRCpte6Vres=', 3052, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hRCpte6Vres=', 3052, -1000, 1000),DecodeDecimal('RmwMO6/Es10=', 3052, -1000, 1000),DecodeDecimal('RmwMO6/Es10=', 3052, -1000, 1000));
    question.answers.length = 0;
    question.num = 217;
    question.isSingleAns = false;
    question.shortTextQuestion = "217. ��������� �� ����� �� ��� ������ �� ���� ������� ���������� ��� ����� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FpfHJAMMlWY=', 3054, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FpfHJAMMlWY=', 3056, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� � ��� ��� �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RfC7tu/fkI8=', 3058, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� � ��� ��� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion218()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 217;
    var weight = DecodeNumber('h+tlCS4V7Cc=', 3062, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h+tlCS4V7Cc=', 3062, -1000, 1000),DecodeDecimal('r0dTWuVotbY=', 3062, -1000, 1000),DecodeDecimal('r0dTWuVotbY=', 3062, -1000, 1000));
    question.answers.length = 0;
    question.num = 218;
    question.isSingleAns = false;
    question.shortTextQuestion = "218. ��������� �� ����� � ������� ��������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h+tlCS4V7Cc=', 3064, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� � ������������� ��� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h9dtBGOMPDM=', 3066, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� � ��� ������� �� �� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('h9dtBGOMPDM=', 3068, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� �� ���� ��� ���������� �� �� ����� ��� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion219()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 218;
    var weight = DecodeNumber('GT58ZcReW6E=', 3072, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GT58ZcReW6E=', 3072, -1000, 1000),DecodeDecimal('lMgM1M7/NNw=', 3072, -1000, 1000),DecodeDecimal('lMgM1M7/NNw=', 3072, -1000, 1000));
    question.answers.length = 0;
    question.num = 219;
    question.isSingleAns = false;
    question.shortTextQuestion = "219. ��������� �� ����� �� ���� ������������ ���� ������ �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GT58ZcReW6E=', 3074, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IXbG6zCuucw=', 3076, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IXbG6zCuucw=', 3078, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ ����� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('79N82sGFlgw=', 3080, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� �������� ����� ��� ���� �����";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion220()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 219;
    var weight = DecodeNumber('1t0eMHm4+jk=', 3082, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1t0eMHm4+jk=', 3082, -1000, 1000),DecodeDecimal('4Mj+dHZopIE=', 3082, -1000, 1000),DecodeDecimal('4Mj+dHZopIE=', 3082, -1000, 1000));
    question.answers.length = 0;
    question.num = 220;
    question.isSingleAns = false;
    question.shortTextQuestion = "220. ��������� �� ����� � ���������� UV  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bq5fahvrkBQ=', 3084, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ��� 2D �� ����������� ����� ��� ������� 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bq5fahvrkBQ=', 3086, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ��������� ���� ��� 2D �� ����������� ����� ��� ������� 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sJkxzU/dCoQ=', 3088, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ���� ��� 3D �� ����������� ����� ��� ������� 3D";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion221()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 220;
    var weight = DecodeNumber('zpu3um57OZg=', 3092, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zpu3um57OZg=', 3092, -1000, 1000),DecodeDecimal('QvMC1dnHDOE=', 3092, -1000, 1000),DecodeDecimal('QvMC1dnHDOE=', 3092, -1000, 1000));
    question.answers.length = 0;
    question.num = 221;
    question.isSingleAns = false;
    question.shortTextQuestion = "221. �� ���� 3D ��� Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zpu3um57OZg=', 3094, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ������ �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a8l52ms/mhk=', 3096, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� ������ 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LgJUdTz8KiU=', 3098, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LgJUdTz8KiU=', 3100, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion222()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 221;
    var weight = DecodeNumber('m41g9LL7udY=', 3102, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('m41g9LL7udY=', 3102, -1000, 1000),DecodeDecimal('+CP1f9O3WsY=', 3102, -1000, 1000),DecodeDecimal('+CP1f9O3WsY=', 3102, -1000, 1000));
    question.answers.length = 0;
    question.num = 222;
    question.isSingleAns = false;
    question.shortTextQuestion = "222. ��������� �� ����� � ���������������� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1HkoG1oh1qA=', 3104, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ���������� ��� ��������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1HkoG1oh1qA=', 3106, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ��������� �� ���������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Shj1c/irivA=', 3108, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������ ���� ���� ��� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion223()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 222;
    var weight = DecodeNumber('DcDlNagqeEw=', 3112, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DcDlNagqeEw=', 3112, -1000, 1000),DecodeDecimal('5gtmONdBw4s=', 3112, -1000, 1000),DecodeDecimal('5gtmONdBw4s=', 3112, -1000, 1000));
    question.answers.length = 0;
    question.num = 223;
    question.isSingleAns = false;
    question.shortTextQuestion = "223. ��������� �� ����� �� ��������� Photoshop �������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iF7Fw0bE0kw=', 3114, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� ������������� �������� ��� �������� ���������� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iF7Fw0bE0kw=', 3116, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� �� ������� ����� ����� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jUTBtER19Xk=', 3118, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��������� ������������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion224()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 223;
    var weight = DecodeNumber('wvhP1crih5Q=', 3122, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wvhP1crih5Q=', 3122, -1000, 1000),DecodeDecimal('It7h+xMEMCc=', 3122, -1000, 1000),DecodeDecimal('It7h+xMEMCc=', 3122, -1000, 1000));
    question.answers.length = 0;
    question.num = 224;
    question.isSingleAns = false;
    question.shortTextQuestion = "224. ��������� �� ����� � ������ ���� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xJ+aztQhvBQ=', 3124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� ����� �� ������������ ��� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xJ+aztQhvBQ=', 3126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������������ �� ������� ����� �� ����� ������ �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+F2mXTQAkXA=', 3128, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������������ �� ������� ����� �� ����� ����� �� ������������ ��� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion225()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 224;
    var weight = DecodeNumber('KARTVfhcQ8s=', 3132, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KARTVfhcQ8s=', 3132, -1000, 1000),DecodeDecimal('5IdR8slPB58=', 3132, -1000, 1000),DecodeDecimal('5IdR8slPB58=', 3132, -1000, 1000));
    question.answers.length = 0;
    question.num = 225;
    question.isSingleAns = false;
    question.shortTextQuestion = "225. ��������� �� ����� � ����� ��������� ������� ��� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6SSl1OV6qY0=', 3134, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ��� �������� ��� ����������� �� ���������� ��� ����������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6SSl1OV6qY0=', 3136, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����� ��������� ��� �� ������� ��� �������� �������������� ���� ���� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fHgY7EbPTnM=', 3138, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �� ����� �������� �������� ��� ���� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion226()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 225;
    var weight = DecodeNumber('PQk7TQ7GJpQ=', 3142, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PQk7TQ7GJpQ=', 3142, -1000, 1000),DecodeDecimal('m/XHMgriQ0A=', 3142, -1000, 1000),DecodeDecimal('m/XHMgriQ0A=', 3142, -1000, 1000));
    question.answers.length = 0;
    question.num = 226;
    question.isSingleAns = false;
    question.shortTextQuestion = "226. ��������� �� ����� �� ����������� �� ��� ���� �������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RZKVDwQfG4U=', 3144, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ � � ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RZKVDwQfG4U=', 3146, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ����������-��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iJ9QSUN6KQ4=', 3148, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1j57PXQBkyA=', 3150, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion227()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 226;
    var weight = DecodeNumber('b0kZy+1+FEg=', 3152, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b0kZy+1+FEg=', 3152, -1000, 1000),DecodeDecimal('TkCNO7dDZrw=', 3152, -1000, 1000),DecodeDecimal('TkCNO7dDZrw=', 3152, -1000, 1000));
    question.answers.length = 0;
    question.num = 227;
    question.isSingleAns = false;
    question.shortTextQuestion = "227. ��������� �� ����� � ���������� �������� 3D ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0xxcDYlKM3c=', 3154, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��� ������� �� ������������ �������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0xxcDYlKM3c=', 3156, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����� ������� �� ����������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wGbkHYHkEBk=', 3158, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��� ������� �� ����������� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion228()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 227;
    var weight = DecodeNumber('A+MR46Jep+g=', 3162, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A+MR46Jep+g=', 3162, -1000, 1000),DecodeDecimal('yQCSjonabtA=', 3162, -1000, 1000),DecodeDecimal('yQCSjonabtA=', 3162, -1000, 1000));
    question.answers.length = 0;
    question.num = 228;
    question.isSingleAns = false;
    question.shortTextQuestion = "228. ��������� �� ����� ���� �� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Pa8rkui8lKE=', 3164, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ����� ��� ���������� ������������ ���� ������ 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Pa8rkui8lKE=', 3166, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� �� ����� ��� ���������� ��� ����������� ������� ������������ ���� ������ 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ehpEVC3uHB4=', 3168, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� �� ����� ��� ���������� ��� ���������� ������� ������������ ���� ������ 3D";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion229()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 228;
    var weight = DecodeNumber('dGn0zWBFKhM=', 3172, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dGn0zWBFKhM=', 3172, -1000, 1000),DecodeDecimal('NmXX+HhQEik=', 3172, -1000, 1000),DecodeDecimal('NmXX+HhQEik=', 3172, -1000, 1000));
    question.answers.length = 0;
    question.num = 229;
    question.isSingleAns = false;
    question.shortTextQuestion = "229. ��������� �� ����� ��� ���������� ������� ������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ga3lmYCFWJg=', 3174, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � ������� �������� ��� ������ ����� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ga3lmYCFWJg=', 3176, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� � �������� ���� ������� ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3jacsMihVUo=', 3178, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� � ���� ��� ������������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion230()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 229;
    var weight = DecodeNumber('A1pUYxrczmU=', 3182, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A1pUYxrczmU=', 3182, -1000, 1000),DecodeDecimal('JeZzWFUqrjM=', 3182, -1000, 1000),DecodeDecimal('JeZzWFUqrjM=', 3182, -1000, 1000));
    question.answers.length = 0;
    question.num = 230;
    question.isSingleAns = false;
    question.shortTextQuestion = "230. ��������� �� ����� �� �� ��������� ���� �������� 3D �� 2D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7WHv1ALpUsE=', 3184, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� �� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7WHv1ALpUsE=', 3186, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �� ������� ����������� �� ������� 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Vaf4VFs4G/8=', 3188, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ �� ������� ����������� � ��� ��� � �������� ��� �������� 3D";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion231()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 230;
    var weight = DecodeNumber('BpvAXr0TgEg=', 3192, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BpvAXr0TgEg=', 3192, -1000, 1000),DecodeDecimal('ZeYamI+4+B8=', 3192, -1000, 1000),DecodeDecimal('ZeYamI+4+B8=', 3192, -1000, 1000));
    question.answers.length = 0;
    question.num = 231;
    question.isSingleAns = false;
    question.shortTextQuestion = "231. ��������� �� ����� � �������� ������ �������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NqVMcpRLYVU=', 3194, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ������� ��� ������� ���� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NqVMcpRLYVU=', 3196, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��� �������� ������� ��� ��������� ����������� ��� ������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CDvkq6SFFmo=', 3198, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ��� �������� ������� ��� ����������� ���� ������������ ��� ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion232()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 231;
    var weight = DecodeNumber('ODnWsvZo20k=', 3202, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ODnWsvZo20k=', 3202, -1000, 1000),DecodeDecimal('UVgjKFW4Gb0=', 3202, -1000, 1000),DecodeDecimal('UVgjKFW4Gb0=', 3202, -1000, 1000));
    question.answers.length = 0;
    question.num = 232;
    question.isSingleAns = false;
    question.shortTextQuestion = "232. ��������� �� ����� � ���������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MRkGzeWWkjs=', 3204, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��� ������ ��������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MRkGzeWWkjs=', 3206, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QH940oOYK+g=', 3208, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� �� ����������� ��� ���������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion233()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 232;
    var weight = DecodeNumber('dgzXk/XLJ58=', 3212, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dgzXk/XLJ58=', 3212, -1000, 1000),DecodeDecimal('VfAtQuQgWhE=', 3212, -1000, 1000),DecodeDecimal('VfAtQuQgWhE=', 3212, -1000, 1000));
    question.answers.length = 0;
    question.num = 233;
    question.isSingleAns = false;
    question.shortTextQuestion = "233. ��������� �� ����� � ��������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+qrLSRF4p9E=', 3214, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ����� ���� �� ����������� ���������� �������� ���� ������� �� ���� ��� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+qrLSRF4p9E=', 3216, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ���� ������������ ������� ���� �� ������������ ������� �� ���� ��� ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7JEL8LJ2D/I=', 3218, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ��� ���� �� ������ ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion234()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 233;
    var weight = DecodeNumber('shdndezzEJI=', 3222, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('shdndezzEJI=', 3222, -1000, 1000),DecodeDecimal('2mCdApvDjMQ=', 3222, -1000, 1000),DecodeDecimal('2mCdApvDjMQ=', 3222, -1000, 1000));
    question.answers.length = 0;
    question.num = 234;
    question.isSingleAns = false;
    question.shortTextQuestion = "234. ��������� �� ����� �� ��� ������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('shdndezzEJI=', 3224, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sX789kQkdn8=', 3226, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������������� ������ (����� ��� ���� �����)";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DKxbZFuhvzw=', 3228, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� ������ ���� ���������� �� �������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion235()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 234;
    var weight = DecodeNumber('fQmqaZJKdHY=', 3232, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fQmqaZJKdHY=', 3232, -1000, 1000),DecodeDecimal('IEbYQSHVwW8=', 3232, -1000, 1000),DecodeDecimal('IEbYQSHVwW8=', 3232, -1000, 1000));
    question.answers.length = 0;
    question.num = 235;
    question.isSingleAns = false;
    question.shortTextQuestion = "235. ��������� �� ����� � ������������� ��� ���������� ������ (��� ���� ����� )  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fQmqaZJKdHY=', 3234, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��� ������ ��������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kI5hdkb60Xc=', 3236, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MGpTc2ElTiY=', 3238, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �� ��� ������ ���������� ��� web &��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion236()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 235;
    var weight = DecodeNumber('fvZsoRBwLso=', 3242, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fvZsoRBwLso=', 3242, -1000, 1000),DecodeDecimal('BDf1dmdOYvY=', 3242, -1000, 1000),DecodeDecimal('BDf1dmdOYvY=', 3242, -1000, 1000));
    question.answers.length = 0;
    question.num = 236;
    question.isSingleAns = false;
    question.shortTextQuestion = "236. ��������� �� ����� � ���������� ��� ���������� ������� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fvZsoRBwLso=', 3244, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ������ gif �� ��� ������ ���������� ��� web & ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qQV1R44lqxo=', 3246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����� PSD";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jg6ow/Vd/hg=', 3248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �� ����� PDF";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion237()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 236;
    var weight = DecodeNumber('E0P5bz5gZFY=', 3252, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E0P5bz5gZFY=', 3252, -1000, 1000),DecodeDecimal('Tdw6xNSvKQ4=', 3252, -1000, 1000),DecodeDecimal('Tdw6xNSvKQ4=', 3252, -1000, 1000));
    question.answers.length = 0;
    question.num = 237;
    question.isSingleAns = false;
    question.shortTextQuestion = "237. ��������� �� ����� �� ������ ��������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MBGLQtqtDWs=', 3254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ��� �� ���������� ��� ���� �� ��� �� ���� ���� ��� ������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MBGLQtqtDWs=', 3256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� ��� �� ���������� ��� ���� ��� �������������� ���� ��� ������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lPZxXMoV2OQ=', 3258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������������� ��� �� ����������� ����������� ���� ��� ����������� ���� ��� ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion238()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 237;
    var weight = DecodeNumber('SPDtr+yWpyU=', 3262, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SPDtr+yWpyU=', 3262, -1000, 1000),DecodeDecimal('zXizZVi3fGY=', 3262, -1000, 1000),DecodeDecimal('zXizZVi3fGY=', 3262, -1000, 1000));
    question.answers.length = 0;
    question.num = 238;
    question.isSingleAns = false;
    question.shortTextQuestion = "238. ��������� �� ����� � ��������� ���� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SPDtr+yWpyU=', 3264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ��������� ���� ������� �� ��� �� ������� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kEVeXxc1hSg=', 3266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ��������� ���� ���������� ������� ���� ������� �� ������������ ���������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kEVeXxc1hSg=', 3268, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ��������� ���� ������� ����� ��� ������������ ��� �������� ���";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion239()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 238;
    var weight = DecodeNumber('x2io4EcdGoc=', 3272, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x2io4EcdGoc=', 3272, -1000, 1000),DecodeDecimal('5vaWnCcNPHU=', 3272, -1000, 1000),DecodeDecimal('5vaWnCcNPHU=', 3272, -1000, 1000));
    question.answers.length = 0;
    question.num = 239;
    question.isSingleAns = false;
    question.shortTextQuestion = "239. ��������� �� ����� � ������ ���������� ���� ���� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x2io4EcdGoc=', 3274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������������� �� ������� ��� ������� �� �� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eEdHGSD5MWs=', 3276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������� � ������� ��� �������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eEdHGSD5MWs=', 3278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ������� ����� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion240()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 239;
    var weight = DecodeNumber('vzFeiKvKPfo=', 3282, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vzFeiKvKPfo=', 3282, -1000, 1000),DecodeDecimal('p2mU3/VGde4=', 3282, -1000, 1000),DecodeDecimal('p2mU3/VGde4=', 3282, -1000, 1000));
    question.answers.length = 0;
    question.num = 240;
    question.isSingleAns = false;
    question.shortTextQuestion = "240. ��������� �� ����� � ������ ������� ������������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I18l1a/c9cE=', 3284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ���� ���� ������������� ���� �� ����������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I18l1a/c9cE=', 3286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� ���� ��� �� ��������� �� ������� ��� ����� ����������� ���� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KdwnE/f3akI=', 3288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������������� ��� ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion241()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 240;
    var weight = DecodeNumber('Ob30wvur0+k=', 3292, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ob30wvur0+k=', 3292, -1000, 1000),DecodeDecimal('lTLYxIB14a4=', 3292, -1000, 1000),DecodeDecimal('lTLYxIB14a4=', 3292, -1000, 1000));
    question.answers.length = 0;
    question.num = 241;
    question.isSingleAns = false;
    question.shortTextQuestion = "241. ��������� �� ����� � ������� ��������� ���������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ob30wvur0+k=', 3294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ����� ��� ���������� ��� �� ���������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BYzfsVJm3mY=', 3296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� ����������� ��� ���� ��� ��������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u0jAQXzhXgg=', 3298, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� �������� ����������� ������ ���� ������� �� ��� ��������� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('C9ck2EwT+TI=', 3300, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion242()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 241;
    var weight = DecodeNumber('HIAqyJDQ4f4=', 3302, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HIAqyJDQ4f4=', 3302, -1000, 1000),DecodeDecimal('ND5JSpLwiU0=', 3302, -1000, 1000),DecodeDecimal('ND5JSpLwiU0=', 3302, -1000, 1000));
    question.answers.length = 0;
    question.num = 242;
    question.isSingleAns = false;
    question.shortTextQuestion = "242. ��������� �� ����� ���������� �� �� ���� ����������� � ������� ���� ��� Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eIwMTlkc2K4=', 3304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��� �������� ���� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eIwMTlkc2K4=', 3306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������ ����� ������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('htLsmbvY96U=', 3308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ��� ������ �� ������������ �� ������� ������������ ���";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion243()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 242;
    var weight = DecodeNumber('wLqjo7PY22c=', 3312, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wLqjo7PY22c=', 3312, -1000, 1000),DecodeDecimal('MxibD8gCnoA=', 3312, -1000, 1000),DecodeDecimal('MxibD8gCnoA=', 3312, -1000, 1000));
    question.answers.length = 0;
    question.num = 243;
    question.isSingleAns = false;
    question.shortTextQuestion = "243. ��������� �� ����� �� ��������� Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dw1DCVS6xcI=', 3314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������� �� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dw1DCVS6xcI=', 3316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������� ���� �� ���� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kPfptK8eUY0=', 3318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ������� ��� ����� ������������� ���� �� ��� ����� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion244()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 243;
    var weight = DecodeNumber('p01P2GKgxvQ=', 3322, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('p01P2GKgxvQ=', 3322, -1000, 1000),DecodeDecimal('X5t2AMEWRhA=', 3322, -1000, 1000),DecodeDecimal('X5t2AMEWRhA=', 3322, -1000, 1000));
    question.answers.length = 0;
    question.num = 244;
    question.isSingleAns = false;
    question.shortTextQuestion = "244. ��������� �� ����� � ������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p01P2GKgxvQ=', 3324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ��� �������� � ��� �� �������� ��� �������� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+F9eYBL3/vo=', 3326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ��� �������� � ��� �� �������� ��� ������������ ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZZa/aE+4axQ=', 3328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ��� ���������� ������� ��� ������������� ��������� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZZa/aE+4axQ=', 3330, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion245()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 244;
    var weight = DecodeNumber('+WHZ+mxlG48=', 3332, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+WHZ+mxlG48=', 3332, -1000, 1000),DecodeDecimal('mZSOstWJJuo=', 3332, -1000, 1000),DecodeDecimal('mZSOstWJJuo=', 3332, -1000, 1000));
    question.answers.length = 0;
    question.num = 245;
    question.isSingleAns = false;
    question.shortTextQuestion = "245. ��������� �� ����� ��� ����� Save as.. � ������� Save Thumbnail  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('D2tETSlpZoE=', 3334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ����������� ������� �� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('D2tETSlpZoE=', 3336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������ �� ���������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GIrbpIdNNBo=', 3338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� �� ������ ��� ������� ����� �� �������� �� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion246()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 245;
    var weight = DecodeNumber('C6CgZNRXG7w=', 3342, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('C6CgZNRXG7w=', 3342, -1000, 1000),DecodeDecimal('huS72EdWEDw=', 3342, -1000, 1000),DecodeDecimal('huS72EdWEDw=', 3342, -1000, 1000));
    question.answers.length = 0;
    question.num = 246;
    question.isSingleAns = false;
    question.shortTextQuestion = "246. ��������� �� ����� ��� ����������� animation  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G06xXfIbrek=', 3344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ���������� ��������� ��� ����� ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G06xXfIbrek=', 3346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ����� � ����������� � ���";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E23phqn3WjY=', 3348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ����������� ����� ���� �� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion247()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 246;
    var weight = DecodeNumber('6O6lXMBQpnI=', 3352, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6O6lXMBQpnI=', 3352, -1000, 1000),DecodeDecimal('d/74cjIs8C8=', 3352, -1000, 1000),DecodeDecimal('d/74cjIs8C8=', 3352, -1000, 1000));
    question.answers.length = 0;
    question.num = 247;
    question.isSingleAns = false;
    question.shortTextQuestion = "247. ��������� �� ����� ��� ������� �������� ��������, � ���������� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YvsQlra+vCI=', 3354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YvsQlra+vCI=', 3356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('foBWz+Q8KBs=', 3358, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion248()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 247;
    var weight = DecodeNumber('J9Juk31N9cg=', 3362, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J9Juk31N9cg=', 3362, -1000, 1000),DecodeDecimal('LuvOlqTsZ2o=', 3362, -1000, 1000),DecodeDecimal('LuvOlqTsZ2o=', 3362, -1000, 1000));
    question.answers.length = 0;
    question.num = 248;
    question.isSingleAns = false;
    question.shortTextQuestion = "248. ��������� �� ����� � ������ ����� ���� ������� ��� ����� ������� ���� ��� �� ������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZBPA2sJrgFM=', 3364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZBPA2sJrgFM=', 3366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rM8dsMiHo80=', 3368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ ��� �� ���";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion249()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 248;
    var weight = DecodeNumber('e7Nb3DkrJcw=', 3372, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('e7Nb3DkrJcw=', 3372, -1000, 1000),DecodeDecimal('Dg+1KkYyypo=', 3372, -1000, 1000),DecodeDecimal('Dg+1KkYyypo=', 3372, -1000, 1000));
    question.answers.length = 0;
    question.num = 249;
    question.isSingleAns = false;
    question.shortTextQuestion = "249. ��������� �� ����� �� ������� �������� �������� ������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ajmHfTu5tEo=', 3374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �������� ������ ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ajmHfTu5tEo=', 3376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ������ �������� ����������� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('R39LznegvZA=', 3378, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ��� ��������� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion250()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 249;
    var weight = DecodeNumber('XR70c75y8NE=', 3382, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XR70c75y8NE=', 3382, -1000, 1000),DecodeDecimal('f6YJE6xhPnA=', 3382, -1000, 1000),DecodeDecimal('f6YJE6xhPnA=', 3382, -1000, 1000));
    question.answers.length = 0;
    question.num = 250;
    question.isSingleAns = false;
    question.shortTextQuestion = "250. ��������� �� ����� ���� �� ������� ������� ����� ���������� ��� ��� ���������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e47JOh1Izjs=', 3384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �� ����� �������� ���������� �� ���������� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('e47JOh1Izjs=', 3386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� ��� �� ����� �������� ���������� �� ������� ��� ����������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2E49O6cR4I4=', 3388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Wu+9t1OQUqM=', 3390, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion251()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 250;
    var weight = DecodeNumber('GQI81VDNqXw=', 3392, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GQI81VDNqXw=', 3392, -1000, 1000),DecodeDecimal('PVjxvYguTN0=', 3392, -1000, 1000),DecodeDecimal('PVjxvYguTN0=', 3392, -1000, 1000));
    question.answers.length = 0;
    question.num = 251;
    question.isSingleAns = false;
    question.shortTextQuestion = "251. ��������� �� ����� � ��������� ��� ����������� ������� ������� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('va6proaozxk=', 3394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ������� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('va6proaozxk=', 3396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �� ������� �������� ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zh2pAvxhuc4=', 3398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MNKW7eKKC9k=', 3400, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion252()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 251;
    var weight = DecodeNumber('7hcY/NQjV6E=', 3402, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7hcY/NQjV6E=', 3402, -1000, 1000),DecodeDecimal('DvPFi+x+N+w=', 3402, -1000, 1000),DecodeDecimal('DvPFi+x+N+w=', 3402, -1000, 1000));
    question.answers.length = 0;
    question.num = 252;
    question.isSingleAns = false;
    question.shortTextQuestion = "252. ��������� �� ����� � ���������� �������� ��������� ������� �������� ���� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+O1UCWeo5og=', 3404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+O1UCWeo5og=', 3406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� ������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nYJlrC+XvnQ=', 3408, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ����������� �������� ��� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion253()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 252;
    var weight = DecodeNumber('J5y5ThMKNdg=', 3412, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J5y5ThMKNdg=', 3412, -1000, 1000),DecodeDecimal('dcEyaALgnOQ=', 3412, -1000, 1000),DecodeDecimal('dcEyaALgnOQ=', 3412, -1000, 1000));
    question.answers.length = 0;
    question.num = 253;
    question.isSingleAns = false;
    question.shortTextQuestion = "253. ��������� �� ����� � ������� ������������ ������ �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J5y5ThMKNdg=', 3414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� ��� ������������ ��� ������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NF1eTuDEQo0=', 3416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��� ������������ ��� ������� �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NF1eTuDEQo0=', 3418, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion254()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 253;
    var weight = DecodeNumber('veSh2j7geqE=', 3422, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('veSh2j7geqE=', 3422, -1000, 1000),DecodeDecimal('672+nO60/2U=', 3422, -1000, 1000),DecodeDecimal('672+nO60/2U=', 3422, -1000, 1000));
    question.answers.length = 0;
    question.num = 254;
    question.isSingleAns = false;
    question.shortTextQuestion = "254. ��������� �� ����� � ������� ���������� ��� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('41JulfLEKl4=', 3424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� �� ������� ��� ������� �� �� ������� ��� ����������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('41JulfLEKl4=', 3426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� �� ������� ��� ����������� ���������� �� �� ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9pOiBdyELMg=', 3428, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� �� ������� ��� ������������ ��� ������� ������ ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion255()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 254;
    var weight = DecodeNumber('y4KKjH4MBMM=', 3432, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('y4KKjH4MBMM=', 3432, -1000, 1000),DecodeDecimal('e1iN2Td1NfY=', 3432, -1000, 1000),DecodeDecimal('e1iN2Td1NfY=', 3432, -1000, 1000));
    question.answers.length = 0;
    question.num = 255;
    question.isSingleAns = false;
    question.shortTextQuestion = "255. ��������� �� ����� ��� ��� ������������ ��� �������� ��������� ��� ��� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7hnFnUvU2JA=', 3434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �� ����� �������� ������� ���� ��� ��������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7hnFnUvU2JA=', 3436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� �� ����� ������� ������� ������� ���� ���� ��������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SrMzqMrpEDI=', 3438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ����������� ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion256()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 255;
    var weight = DecodeNumber('Wyv+CBUSpkg=', 3442, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Wyv+CBUSpkg=', 3442, -1000, 1000),DecodeDecimal('nhBt0h9YLv4=', 3442, -1000, 1000),DecodeDecimal('nhBt0h9YLv4=', 3442, -1000, 1000));
    question.answers.length = 0;
    question.num = 256;
    question.isSingleAns = false;
    question.shortTextQuestion = "256. ��������� �� ����� � ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aa985zz0Hsc=', 3444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ��� ���������� ����� ��� �������� ��������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aa985zz0Hsc=', 3446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���� ��� ������� �������� ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('En0hJFdVGgA=', 3448, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion257()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 256;
    var weight = DecodeNumber('96o7OK/5jPU=', 3452, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('96o7OK/5jPU=', 3452, -1000, 1000),DecodeDecimal('ol9FmfVzYAo=', 3452, -1000, 1000),DecodeDecimal('ol9FmfVzYAo=', 3452, -1000, 1000));
    question.answers.length = 0;
    question.num = 257;
    question.isSingleAns = false;
    question.shortTextQuestion = "257. ��������� �� ����� � ������� ������� ������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6jkT6v8febE=', 3454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������� ��� ���� 11 �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6jkT6v8febE=', 3456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �� ������� ��� ������� �� 11 ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('h+i9G7xGzwI=', 3458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ������� ������� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion258()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 257;
    var weight = DecodeNumber('vnKWZF6yE7s=', 3462, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vnKWZF6yE7s=', 3462, -1000, 1000),DecodeDecimal('gwIGFI7vEVQ=', 3462, -1000, 1000),DecodeDecimal('gwIGFI7vEVQ=', 3462, -1000, 1000));
    question.answers.length = 0;
    question.num = 258;
    question.isSingleAns = false;
    question.shortTextQuestion = "258. ��������� �� ����� �� ��������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hr2GOUSdHEg=', 3464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ��� ��������� ��� �������� ��� �������� �������� ��� ������������ �� ��� ������ ������������ ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hr2GOUSdHEg=', 3466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ������ ���� ���� ���������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('alD5QFzeJcM=', 3468, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion259()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 258;
    var weight = DecodeNumber('W/ozpCOTzls=', 2831, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('W/ozpCOTzls=', 2831, -1000, 1000),DecodeDecimal('7RQXN1ZYR0U=', 2831, -1000, 1000),DecodeDecimal('7RQXN1ZYR0U=', 2831, -1000, 1000));
    question.answers.length = 0;
    question.num = 259;
    question.isSingleAns = false;
    question.shortTextQuestion = "259. ��������� �� ����� ���� ������������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('W/ozpCOTzls=', 2833, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ���������� ����� �� ������������ ��� ��������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O2NNPy3GHHo=', 2835, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ����� �� ������������ ��� ��������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7+iYDbP6d4M=', 2837, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ����� �� ������������ ��� �������������� �� ����� �������������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion260()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 259;
    var weight = DecodeNumber('Rg3a3KRH3SU=', 2841, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Rg3a3KRH3SU=', 2841, -1000, 1000),DecodeDecimal('eOc7f9BUiuA=', 2841, -1000, 1000),DecodeDecimal('eOc7f9BUiuA=', 2841, -1000, 1000));
    question.answers.length = 0;
    question.num = 260;
    question.isSingleAns = false;
    question.shortTextQuestion = "260. ��������� �� ����� �� ��� ������ ���������� ��� �� ����� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rwyzWvpEpX4=', 2843, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rwyzWvpEpX4=', 2845, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� �� ������� ��� ������� ��� ����������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1Y6zXXEykNQ=', 2847, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oOJlDSrWWiw=', 2849, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion261()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 260;
    var weight = DecodeNumber('9IF4Ktb/H0g=', 2851, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9IF4Ktb/H0g=', 2851, -1000, 1000),DecodeDecimal('xbmfH9WUO6U=', 2851, -1000, 1000),DecodeDecimal('xbmfH9WUO6U=', 2851, -1000, 1000));
    question.answers.length = 0;
    question.num = 261;
    question.isSingleAns = false;
    question.shortTextQuestion = "261. ��������� �� ����� � ������ �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OuDNVq61zjg=', 2853, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� �������� �������� �������� �� ������������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OuDNVq61zjg=', 2855, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� �������� �������� �� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1nwSHSWEAJ8=', 2857, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HDRkgucAmhQ=', 2859, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion262()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 261;
    var weight = DecodeNumber('BA4R6U545Lw=', 2861, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BA4R6U545Lw=', 2861, -1000, 1000),DecodeDecimal('gUhMGsJGhGE=', 2861, -1000, 1000),DecodeDecimal('gUhMGsJGhGE=', 2861, -1000, 1000));
    question.answers.length = 0;
    question.num = 262;
    question.isSingleAns = false;
    question.shortTextQuestion = "262. ��������� �� ����� � ������ ������� ���������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BA4R6U545Lw=', 2863, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� �� ��������������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jCoHi1G+RRI=', 2865, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ��������������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QkzK2NGohMc=', 2867, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion263()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 262;
    var weight = DecodeNumber('5abrfKk2NyM=', 2871, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5abrfKk2NyM=', 2871, -1000, 1000),DecodeDecimal('nrRBm0h6emE=', 2871, -1000, 1000),DecodeDecimal('nrRBm0h6emE=', 2871, -1000, 1000));
    question.answers.length = 0;
    question.num = 263;
    question.isSingleAns = false;
    question.shortTextQuestion = "263. ��������� �� ����� ����������� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5abrfKk2NyM=', 2873, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������������ �� ����� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W18FRDBpZM0=', 2875, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������������ �� ��� ���� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hcQHAdBbU2Q=', 2877, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ������������ �� ��� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion264()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 263;
    var weight = DecodeNumber('WCSm7WhNNwk=', 2881, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WCSm7WhNNwk=', 2881, -1000, 1000),DecodeDecimal('7+/7gcbtKBY=', 2881, -1000, 1000),DecodeDecimal('7+/7gcbtKBY=', 2881, -1000, 1000));
    question.answers.length = 0;
    question.num = 264;
    question.isSingleAns = false;
    question.shortTextQuestion = "264. ��������� �� ����� ��� ��� ����� �������� ��� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WCSm7WhNNwk=', 2883, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � ��������� ��� ������� �� RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fTk1e+5G11I=', 2885, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���������� � ��������� ��� ������� �� CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fTk1e+5G11I=', 2887, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ���������� � ��������� ��� ������� �� CMYK";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion265()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 264;
    var weight = DecodeNumber('ZAl02q/o7ko=', 2891, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZAl02q/o7ko=', 2891, -1000, 1000),DecodeDecimal('z3oEyoFgP3o=', 2891, -1000, 1000),DecodeDecimal('z3oEyoFgP3o=', 2891, -1000, 1000));
    question.answers.length = 0;
    question.num = 265;
    question.isSingleAns = false;
    question.shortTextQuestion = "265. ��������� �� ����� � ������������� �� ���������� ���������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UduaMe9HRiU=', 2893, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ����� ���� ������� ��� ������ ��� ���������� ��������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UduaMe9HRiU=', 2895, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ���� ������� ��� ������ ��� ���������� ��������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VRQ/udTZi1o=', 2897, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ����������� ������� ��� ������ ��� ���������� ��������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion266()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 265;
    var weight = DecodeNumber('tsXkUsxWlxo=', 2901, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tsXkUsxWlxo=', 2901, -1000, 1000),DecodeDecimal('rtoRcqMxhdU=', 2901, -1000, 1000),DecodeDecimal('rtoRcqMxhdU=', 2901, -1000, 1000));
    question.answers.length = 0;
    question.num = 266;
    question.isSingleAns = false;
    question.shortTextQuestion = "266. ��������� �� ����� � ���������� ��������� ��� �������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fYY6F9HM4wc=', 2903, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� �� ��� ������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fYY6F9HM4wc=', 2905, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� �� ��� ������ ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JHodKCFnzvc=', 2907, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������������� �� ��� ��� �� �������� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion267()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 266;
    var weight = DecodeNumber('zkF/gOvlgBM=', 2911, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zkF/gOvlgBM=', 2911, -1000, 1000),DecodeDecimal('B7AobwrCJpA=', 2911, -1000, 1000),DecodeDecimal('B7AobwrCJpA=', 2911, -1000, 1000));
    question.answers.length = 0;
    question.num = 267;
    question.isSingleAns = false;
    question.shortTextQuestion = "267. ��������� �� ����� �� ������� � �� ���� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zkF/gOvlgBM=', 2913, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a3NbWB2xW0k=', 2915, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a3NbWB2xW0k=', 2917, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� �������� ���������� ��� RGB � ��� CMYK";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion268()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 267;
    var weight = DecodeNumber('a/eiwFv4HKA=', 2921, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('a/eiwFv4HKA=', 2921, -1000, 1000),DecodeDecimal('9uVKWfZmgMQ=', 2921, -1000, 1000),DecodeDecimal('9uVKWfZmgMQ=', 2921, -1000, 1000));
    question.answers.length = 0;
    question.num = 268;
    question.isSingleAns = false;
    question.shortTextQuestion = "268. ��������� �� ����� �� ��������� �������� ����������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q2xns5M1CCo=', 2923, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ������������ ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q2xns5M1CCo=', 2925, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ������������ ��� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qHl6/7Eh9hk=', 2927, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ �� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion269()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 268;
    var weight = DecodeNumber('1ut79WWsOnQ=', 2931, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1ut79WWsOnQ=', 2931, -1000, 1000),DecodeDecimal('pBuHBdPCbGE=', 2931, -1000, 1000),DecodeDecimal('pBuHBdPCbGE=', 2931, -1000, 1000));
    question.answers.length = 0;
    question.num = 269;
    question.isSingleAns = false;
    question.shortTextQuestion = "269. ��������� �� ����� �� ������� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gvwwouRY5U0=', 2933, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gvwwouRY5U0=', 2935, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� �������� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('C4fPNmLxAik=', 2937, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� �������� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RAb4pwKcAo0=', 2939, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion270()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 269;
    var weight = DecodeNumber('Cv5oVAaMPfQ=', 2941, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Cv5oVAaMPfQ=', 2941, -1000, 1000),DecodeDecimal('Qh7cym9bYvg=', 2941, -1000, 1000),DecodeDecimal('Qh7cym9bYvg=', 2941, -1000, 1000));
    question.answers.length = 0;
    question.num = 270;
    question.isSingleAns = false;
    question.shortTextQuestion = "270. ��������� �� ����� �� ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Cv5oVAaMPfQ=', 2943, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������������� �� ������ ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MJ9lWW5A/9c=', 2945, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���������������� �� ���������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tYMdAe78GLE=', 2947, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������������� ���� �� ���������� ���� �� ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NcDTtMlr6vc=', 2949, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion271()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 270;
    var weight = DecodeNumber('JdusZ37hTuc=', 2951, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JdusZ37hTuc=', 2951, -1000, 1000),DecodeDecimal('HqIQbURaPdw=', 2951, -1000, 1000),DecodeDecimal('HqIQbURaPdw=', 2951, -1000, 1000));
    question.answers.length = 0;
    question.num = 271;
    question.isSingleAns = false;
    question.shortTextQuestion = "271. ��������� �� ����� ��� ����� �� ����������� ���� ������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Mb2EpbaMadE=', 2953, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� �� ���������� HTML COLOR";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Mb2EpbaMadE=', 2955, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ JPEG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pc9+OFKaC1E=', 2957, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ PNG";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion272()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 271;
    var weight = DecodeNumber('gBTBoD3NSRM=', 2961, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gBTBoD3NSRM=', 2961, -1000, 1000),DecodeDecimal('M3rd8R42BMk=', 2961, -1000, 1000),DecodeDecimal('M3rd8R42BMk=', 2961, -1000, 1000));
    question.answers.length = 0;
    question.num = 272;
    question.isSingleAns = false;
    question.shortTextQuestion = "272. ��������� �� ����� �� Zoomify ������� �� ���������� ��   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('A7bVWeAwNhE=', 2963, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ ������ ������ �������� ��� ������� �� ������� �� ���������� ��� �� ������� �� ��������� ��� ������������ ������ ��� �� ������ ���� ��� �� ���� ������������ ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('A7bVWeAwNhE=', 2965, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ������ ������ �������� ��� ������� �� ������� �� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5ngx9yUO+xc=', 2967, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� ������� ���� ������� ��� ������ �� ������ �� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion273()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 272;
    var weight = DecodeNumber('Qq4w5ktqAik=', 2971, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Qq4w5ktqAik=', 2971, -1000, 1000),DecodeDecimal('LW6Fsg13iWc=', 2971, -1000, 1000),DecodeDecimal('LW6Fsg13iWc=', 2971, -1000, 1000));
    question.answers.length = 0;
    question.num = 273;
    question.isSingleAns = false;
    question.shortTextQuestion = "273. ��������� �� ����� �������� ���������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Qq4w5ktqAik=', 2973, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������ � ��� ������ ��� ��������� Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2SB3l9VMDAk=', 2975, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ��� ������ � ��� ������ �� ��� ������ web, ��� ������� ���� ����������� ���� ��� � ������� ��� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2SB3l9VMDAk=', 2977, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ������ � ��� ������ ��� ��������� ��� �� ������� �� �������� web";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion274()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 273;
    var weight = DecodeNumber('NQilhfTjhS4=', 2981, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NQilhfTjhS4=', 2981, -1000, 1000),DecodeDecimal('D3fOBn4Ho+g=', 2981, -1000, 1000),DecodeDecimal('D3fOBn4Ho+g=', 2981, -1000, 1000));
    question.answers.length = 0;
    question.num = 274;
    question.isSingleAns = false;
    question.shortTextQuestion = "274. ��������� �� ����� To Adobe Bridge  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NQilhfTjhS4=', 2983, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ��� ��������� ��� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7bnqZCqkxoM=', 2985, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ��������� ��� �������� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JRAjZGjXWQs=', 2987, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ��� �������� ��� ��� ����� �� ����������, �� ���������� ��� �� ��������� �������� ��� ��������, web, ������ ��� ���������� ������������ ��� ������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion275()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 274;
    var weight = DecodeNumber('Vxs1IIQYJt0=', 2991, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Vxs1IIQYJt0=', 2991, -1000, 1000),DecodeDecimal('hje6iBO0a2Y=', 2991, -1000, 1000),DecodeDecimal('hje6iBO0a2Y=', 2991, -1000, 1000));
    question.answers.length = 0;
    question.num = 275;
    question.isSingleAns = false;
    question.shortTextQuestion = "275. ��������� �� ����� �� ������� ���������������� ��� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3MBO9McFEQ0=', 2993, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� �������� ���� � ������� ��������� �������, � �������� �������� �� ��� ������ � � �������� �������� ������������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3MBO9McFEQ0=', 2995, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ��� ������ ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8GbRhh1Q5xg=', 2997, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion276()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 275;
    var weight = DecodeNumber('doosYMP1ImE=', 3001, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('doosYMP1ImE=', 3001, -1000, 1000),DecodeDecimal('IH7zb97+Df0=', 3001, -1000, 1000),DecodeDecimal('IH7zb97+Df0=', 3001, -1000, 1000));
    question.answers.length = 0;
    question.num = 276;
    question.isSingleAns = false;
    question.shortTextQuestion = "276. ��������� �� ����� �� slice ������� �� �� ����������� ����, ������������������ ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('doosYMP1ImE=', 3003, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NWcItPqSyPY=', 3005, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('c6pDWG2eVEo=', 3007, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion277()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 276;
    var weight = DecodeNumber('Oqh+GJdjkdE=', 3011, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Oqh+GJdjkdE=', 3011, -1000, 1000),DecodeDecimal('barfjoH2c+E=', 3011, -1000, 1000),DecodeDecimal('barfjoH2c+E=', 3011, -1000, 1000));
    question.answers.length = 0;
    question.num = 277;
    question.isSingleAns = false;
    question.shortTextQuestion = "277. ��������� �� ����� �� �������� slice ������������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('omL6MzMvpH8=', 3013, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Slice ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('omL6MzMvpH8=', 3015, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Slice ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Pa0tme4WzTY=', 3017, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��� slice ������ ���� ��� slice ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion278()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 277;
    var weight = DecodeNumber('aua/L0Y6w5Y=', 3021, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aua/L0Y6w5Y=', 3021, -1000, 1000),DecodeDecimal('XVN5VvE+nAY=', 3021, -1000, 1000),DecodeDecimal('XVN5VvE+nAY=', 3021, -1000, 1000));
    question.answers.length = 0;
    question.num = 278;
    question.isSingleAns = false;
    question.shortTextQuestion = "278. ��������� �� ����� (������ �� ����� ����������� ��� ���) �� slice ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aua/L0Y6w5Y=', 3023, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4ZOHEI9vToE=', 3025, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4ZOHEI9vToE=', 3027, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ���� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Nzggu0kT5MY=', 3029, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ���������� ���� ����������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion279()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 278;
    var weight = DecodeNumber('cz2xHNAGc34=', 3031, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cz2xHNAGc34=', 3031, -1000, 1000),DecodeDecimal('RG/mDOcs0k8=', 3031, -1000, 1000),DecodeDecimal('RG/mDOcs0k8=', 3031, -1000, 1000));
    question.answers.length = 0;
    question.num = 279;
    question.isSingleAns = false;
    question.shortTextQuestion = "279. ��������� �� ����� (������ �� ����� ����������� ��� ���) � �������� ��� ������� slice  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Hi7fhCbqWWk=', 3033, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ���� ��� �� ����� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Hi7fhCbqWWk=', 3035, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ������� ���� ��� �� ����� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fM3GiqbQztk=', 3037, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ���� ��� �� ����� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion280()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 279;
    var weight = DecodeNumber('gqWal+jrk+4=', 3041, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gqWal+jrk+4=', 3041, -1000, 1000),DecodeDecimal('wHgC6ilCPAE=', 3041, -1000, 1000),DecodeDecimal('wHgC6ilCPAE=', 3041, -1000, 1000));
    question.answers.length = 0;
    question.num = 280;
    question.isSingleAns = false;
    question.shortTextQuestion = "280. ��������� �� ����� ��� ��� �� ������ slice ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yX3NbC4AkFw=', 3043, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yX3NbC4AkFw=', 3045, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1jh+3R/qnWo=', 3047, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion281()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 280;
    var weight = DecodeNumber('RmwMO6/Es10=', 3051, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RmwMO6/Es10=', 3051, -1000, 1000),DecodeDecimal('uS/Bqb4pCm4=', 3051, -1000, 1000),DecodeDecimal('uS/Bqb4pCm4=', 3051, -1000, 1000));
    question.answers.length = 0;
    question.num = 281;
    question.isSingleAns = false;
    question.shortTextQuestion = "281. ��������� �� ����� �� ��� ������� ����� slice ������ ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nD6I9FvF2nw=', 3053, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� �������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nD6I9FvF2nw=', 3055, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� �������� �� �� ������ tag HTML";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4j1rE90P90U=', 3057, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ �� �������� ���� ���� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion282()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 281;
    var weight = DecodeNumber('r0dTWuVotbY=', 3061, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r0dTWuVotbY=', 3061, -1000, 1000),DecodeDecimal('x2/8SEiHKhQ=', 3061, -1000, 1000),DecodeDecimal('x2/8SEiHKhQ=', 3061, -1000, 1000));
    question.answers.length = 0;
    question.num = 282;
    question.isSingleAns = false;
    question.shortTextQuestion = "282. ��������� �� ����� �������� �� �������� �������� ������������ ���������� ���� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZD0B40lKwKM=', 3063, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� �������� slice";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZD0B40lKwKM=', 3065, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. �� ����� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZCg1eK28FYo=', 3067, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ����� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion283()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 282;
    var weight = DecodeNumber('lMgM1M7/NNw=', 3071, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lMgM1M7/NNw=', 3071, -1000, 1000),DecodeDecimal('7utLlNVn0O0=', 3071, -1000, 1000),DecodeDecimal('7utLlNVn0O0=', 3071, -1000, 1000));
    question.answers.length = 0;
    question.num = 283;
    question.isSingleAns = false;
    question.shortTextQuestion = "283. ��������� �� ����� � ����� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ycUVlYv/s3E=', 3073, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ycUVlYv/s3E=', 3075, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j19taXBkCow=', 3077, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ������ �� ������� ��� �� slice ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion284()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 283;
    var weight = DecodeNumber('4Mj+dHZopIE=', 3081, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4Mj+dHZopIE=', 3081, -1000, 1000),DecodeDecimal('79N82sGFlgw=', 3081, -1000, 1000),DecodeDecimal('79N82sGFlgw=', 3081, -1000, 1000));
    question.answers.length = 0;
    question.num = 284;
    question.isSingleAns = false;
    question.shortTextQuestion = "284. ��������� �� ����� � ���������� slice ������� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4Mj+dHZopIE=', 3083, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� slice ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i5GZUWf9LK0=', 3085, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� slice ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZnndRzXzyuE=', 3087, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� slice ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CuLnFep3gO0=', 3089, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('CuLnFep3gO0=', 3091, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "�. ��� �� ��������";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion285()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 284;
    var weight = DecodeNumber('QvMC1dnHDOE=', 3091, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QvMC1dnHDOE=', 3091, -1000, 1000),DecodeDecimal('GFWSGdVQDpE=', 3091, -1000, 1000),DecodeDecimal('GFWSGdVQDpE=', 3091, -1000, 1000));
    question.answers.length = 0;
    question.num = 285;
    question.isSingleAns = false;
    question.shortTextQuestion = "285. ��������� �� ����� �� �������� ���� ��� slice �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NCrG+767yyY=', 3093, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� ��� ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NCrG+767yyY=', 3095, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� ��� �� ������� �������� ���������� ��� web & ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l/kTS2M8tm0=', 3097, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��� �� ����� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion16()
{
    ClearMatching("idDD15", 0);
    ClearMatching("idDD15", 1);
    ClearMatching("idDD15", 2);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion21()
{
    const questionIndex = 20;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion22()
{
    const questionIndex = 21;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion23()
{
    const questionIndex = 22;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion24()
{
    const questionIndex = 23;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion25()
{
    const questionIndex = 24;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion27()
{
    const questionIndex = 26;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion28()
{
    const questionIndex = 27;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion29()
{
    const questionIndex = 28;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion31()
{
    const questionIndex = 30;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion32()
{
    const questionIndex = 31;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion33()
{
    const questionIndex = 32;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion34()
{
    ClearMatching("idDD33", 0);
    ClearMatching("idDD33", 1);
    ClearMatching("idDD33", 2);
    ClearMatching("idDD33", 3);
    ClearMatching("idDD33", 4);

}
/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion36()
{
    const questionIndex = 35;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion37()
{
    const questionIndex = 36;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion38()
{
    const questionIndex = 37;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion39()
{
    const questionIndex = 38;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion40()
{
    const questionIndex = 39;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion41()
{
    const questionIndex = 40;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion42()
{
    const questionIndex = 41;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion43()
{
    const questionIndex = 42;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion44()
{
    const questionIndex = 43;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion45()
{
    const questionIndex = 44;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion46()
{
    const questionIndex = 45;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion47()
{
    const questionIndex = 46;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion49()
{
    const questionIndex = 48;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion50()
{
    const questionIndex = 49;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion51()
{
    const questionIndex = 50;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion53()
{
    const questionIndex = 52;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion54()
{
    const questionIndex = 53;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion55()
{
    const questionIndex = 54;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion56()
{
    const questionIndex = 55;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion57()
{
    const questionIndex = 56;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion58()
{
    const questionIndex = 57;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion59()
{
    const questionIndex = 58;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion60()
{
    const questionIndex = 59;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion61()
{
    const questionIndex = 60;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion62()
{
    const questionIndex = 61;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion63()
{
    const questionIndex = 62;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion64()
{
    const questionIndex = 63;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion65()
{
    const questionIndex = 64;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion66()
{
    const questionIndex = 65;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion67()
{
    const questionIndex = 66;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion68()
{
    const questionIndex = 67;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion69()
{
    const questionIndex = 68;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion70()
{
    const questionIndex = 69;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion71()
{
    const questionIndex = 70;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion72()
{
    const questionIndex = 71;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion73()
{
    const questionIndex = 72;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion74()
{
    const questionIndex = 73;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion75()
{
    const questionIndex = 74;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion76()
{
    const questionIndex = 75;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion77()
{
    const questionIndex = 76;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion78()
{
    const questionIndex = 77;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion79()
{
    const questionIndex = 78;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion80()
{
    const questionIndex = 79;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion81()
{
    const questionIndex = 80;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion82()
{
    const questionIndex = 81;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion83()
{
    const questionIndex = 82;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion84()
{
    const questionIndex = 83;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion85()
{
    const questionIndex = 84;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion86()
{
    const questionIndex = 85;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion87()
{
    const questionIndex = 86;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion88()
{
    const questionIndex = 87;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion89()
{
    const questionIndex = 88;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion90()
{
    const questionIndex = 89;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion91()
{
    const questionIndex = 90;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion92()
{
    const questionIndex = 91;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion93()
{
    const questionIndex = 92;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion94()
{
    const questionIndex = 93;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion95()
{
    const questionIndex = 94;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion96()
{
    const questionIndex = 95;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion97()
{
    const questionIndex = 96;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion98()
{
    const questionIndex = 97;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion99()
{
    const questionIndex = 98;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion100()
{
    const questionIndex = 99;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion101()
{
    const questionIndex = 100;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion102()
{
    const questionIndex = 101;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion103()
{
    const questionIndex = 102;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion104()
{
    const questionIndex = 103;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion105()
{
    const questionIndex = 104;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion106()
{
    const questionIndex = 105;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion107()
{
    const questionIndex = 106;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion108()
{
    const questionIndex = 107;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion109()
{
    const questionIndex = 108;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion110()
{
    const questionIndex = 109;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion111()
{
    const questionIndex = 110;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion112()
{
    const questionIndex = 111;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion113()
{
    const questionIndex = 112;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion114()
{
    const questionIndex = 113;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion115()
{
    const questionIndex = 114;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion116()
{
    const questionIndex = 115;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion117()
{
    const questionIndex = 116;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion118()
{
    const questionIndex = 117;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion119()
{
    const questionIndex = 118;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion120()
{
    const questionIndex = 119;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion121()
{
    const questionIndex = 120;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion122()
{
    const questionIndex = 121;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion123()
{
    const questionIndex = 122;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion124()
{
    const questionIndex = 123;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion125()
{
    const questionIndex = 124;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion126()
{
    const questionIndex = 125;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion127()
{
    const questionIndex = 126;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion128()
{
    const questionIndex = 127;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion129()
{
    const questionIndex = 128;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion130()
{
    const questionIndex = 129;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion131()
{
    const questionIndex = 130;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion132()
{
    const questionIndex = 131;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion133()
{
    const questionIndex = 132;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion134()
{
    const questionIndex = 133;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion135()
{
    const questionIndex = 134;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion136()
{
    const questionIndex = 135;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion137()
{
    const questionIndex = 136;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion138()
{
    const questionIndex = 137;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion139()
{
    const questionIndex = 138;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion140()
{
    const questionIndex = 139;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion141()
{
    const questionIndex = 140;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion142()
{
    const questionIndex = 141;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion143()
{
    const questionIndex = 142;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion144()
{
    const questionIndex = 143;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion145()
{
    const questionIndex = 144;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion146()
{
    const questionIndex = 145;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion147()
{
    const questionIndex = 146;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion148()
{
    const questionIndex = 147;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion149()
{
    const questionIndex = 148;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion150()
{
    const questionIndex = 149;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion151()
{
    const questionIndex = 150;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion152()
{
    const questionIndex = 151;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion153()
{
    const questionIndex = 152;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion154()
{
    const questionIndex = 153;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion155()
{
    const questionIndex = 154;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion156()
{
    const questionIndex = 155;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion157()
{
    const questionIndex = 156;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion158()
{
    const questionIndex = 157;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion159()
{
    const questionIndex = 158;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion160()
{
    const questionIndex = 159;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion161()
{
    const questionIndex = 160;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion162()
{
    const questionIndex = 161;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion163()
{
    const questionIndex = 162;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion164()
{
    const questionIndex = 163;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion165()
{
    const questionIndex = 164;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion166()
{
    const questionIndex = 165;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion167()
{
    const questionIndex = 166;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion168()
{
    const questionIndex = 167;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion169()
{
    const questionIndex = 168;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion170()
{
    const questionIndex = 169;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion171()
{
    const questionIndex = 170;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion172()
{
    const questionIndex = 171;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion173()
{
    const questionIndex = 172;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion174()
{
    const questionIndex = 173;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion175()
{
    const questionIndex = 174;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion176()
{
    const questionIndex = 175;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion177()
{
    const questionIndex = 176;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion178()
{
    const questionIndex = 177;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion179()
{
    const questionIndex = 178;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion180()
{
    const questionIndex = 179;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion181()
{
    const questionIndex = 180;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion182()
{
    const questionIndex = 181;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion183()
{
    const questionIndex = 182;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion184()
{
    const questionIndex = 183;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion185()
{
    const questionIndex = 184;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion186()
{
    const questionIndex = 185;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion187()
{
    const questionIndex = 186;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion188()
{
    const questionIndex = 187;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion189()
{
    const questionIndex = 188;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion190()
{
    const questionIndex = 189;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion191()
{
    const questionIndex = 190;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion192()
{
    const questionIndex = 191;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion193()
{
    const questionIndex = 192;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion194()
{
    const questionIndex = 193;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion195()
{
    const questionIndex = 194;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion196()
{
    const questionIndex = 195;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion197()
{
    const questionIndex = 196;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion198()
{
    const questionIndex = 197;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion199()
{
    const questionIndex = 198;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion200()
{
    const questionIndex = 199;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion201()
{
    const questionIndex = 200;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion202()
{
    const questionIndex = 201;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion203()
{
    const questionIndex = 202;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion204()
{
    const questionIndex = 203;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion205()
{
    const questionIndex = 204;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion206()
{
    const questionIndex = 205;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion207()
{
    const questionIndex = 206;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion208()
{
    const questionIndex = 207;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion209()
{
    const questionIndex = 208;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion210()
{
    const questionIndex = 209;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion211()
{
    const questionIndex = 210;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion212()
{
    const questionIndex = 211;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion213()
{
    const questionIndex = 212;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion214()
{
    const questionIndex = 213;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion215()
{
    const questionIndex = 214;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion216()
{
    const questionIndex = 215;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion217()
{
    const questionIndex = 216;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion218()
{
    const questionIndex = 217;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion219()
{
    const questionIndex = 218;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion220()
{
    const questionIndex = 219;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion221()
{
    const questionIndex = 220;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion222()
{
    const questionIndex = 221;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion223()
{
    const questionIndex = 222;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion224()
{
    const questionIndex = 223;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion225()
{
    const questionIndex = 224;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion226()
{
    const questionIndex = 225;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion227()
{
    const questionIndex = 226;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion228()
{
    const questionIndex = 227;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion229()
{
    const questionIndex = 228;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion230()
{
    const questionIndex = 229;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion231()
{
    const questionIndex = 230;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion232()
{
    const questionIndex = 231;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion233()
{
    const questionIndex = 232;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion234()
{
    const questionIndex = 233;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion235()
{
    const questionIndex = 234;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion236()
{
    const questionIndex = 235;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion237()
{
    const questionIndex = 236;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion238()
{
    const questionIndex = 237;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion239()
{
    const questionIndex = 238;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion240()
{
    const questionIndex = 239;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion241()
{
    const questionIndex = 240;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion242()
{
    const questionIndex = 241;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion243()
{
    const questionIndex = 242;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion244()
{
    const questionIndex = 243;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion245()
{
    const questionIndex = 244;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion246()
{
    const questionIndex = 245;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion247()
{
    const questionIndex = 246;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion248()
{
    const questionIndex = 247;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion249()
{
    const questionIndex = 248;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion250()
{
    const questionIndex = 249;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion251()
{
    const questionIndex = 250;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion252()
{
    const questionIndex = 251;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion253()
{
    const questionIndex = 252;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion254()
{
    const questionIndex = 253;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion255()
{
    const questionIndex = 254;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion256()
{
    const questionIndex = 255;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion257()
{
    const questionIndex = 256;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion258()
{
    const questionIndex = 257;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion259()
{
    const questionIndex = 258;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion260()
{
    const questionIndex = 259;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion261()
{
    const questionIndex = 260;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion262()
{
    const questionIndex = 261;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion263()
{
    const questionIndex = 262;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion264()
{
    const questionIndex = 263;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion265()
{
    const questionIndex = 264;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion266()
{
    const questionIndex = 265;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion267()
{
    const questionIndex = 266;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion268()
{
    const questionIndex = 267;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion269()
{
    const questionIndex = 268;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion270()
{
    const questionIndex = 269;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion271()
{
    const questionIndex = 270;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion272()
{
    const questionIndex = 271;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion273()
{
    const questionIndex = 272;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion274()
{
    const questionIndex = 273;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion275()
{
    const questionIndex = 274;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion276()
{
    const questionIndex = 275;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion277()
{
    const questionIndex = 276;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion278()
{
    const questionIndex = 277;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion279()
{
    const questionIndex = 278;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion280()
{
    const questionIndex = 279;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion281()
{
    const questionIndex = 280;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion282()
{
    const questionIndex = 281;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion283()
{
    const questionIndex = 282;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}
/* Code generated function */
function ClearQuestion284()
{
    const questionIndex = 283;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion285()
{
    const questionIndex = 284;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);

}


/* Code generated function */
function CreateListLeft15()
{
    this.length = 3;
    this[0] = unescape(DecodeString("VkmPKkoSzWEAjAX/SiwvpjGLwHmHRj3fYYTir4UJWWPwoxcYbuIsmGrfHjRFUdbAdCLXYfqUp1lN69vj"));
    this[1] = unescape(DecodeString("vOD1TqUX/G3Z/Aw10343pEDgPyZlgK1kTAesJ5GBQlFR3jACNo9T93S3rzYaNQZJZIrokYfqOr79v5bL"));
    this[2] = unescape(DecodeString("0OCnimJNfwtN4sTGXd4Y6w8emZcVZQts0I/hFe88kLGfXHGecqfAOUlvAs8B0WU0XkAnXw=="));

}

/* Code generated function */
function CreateListRight15()
{
    this.length = 3;
    this[0] = unescape(DecodeString("UbOzi4a+HMhgWK+zsWMx8eMt5CRjNyPSa2EHp2rfPHZ5AylUlXo4x+lABuiqeQhs"));
    this[1] = unescape(DecodeString("MfLyYv1vhxHJ3Aeeu1AQnHMJtB0Ku6S8dfqfqT8o+8UxjxrItvXr7feacCKYMHktXAxvOjE+pQJKwj5sqaTAKXoJ++68llRWbTMPYg=="));
    this[2] = unescape(DecodeString("KVqW0A/koVzR1v+FN5fQ9+huu+85qqQyanZMUgweYFkYF2w7beV7SK0EIX1EngS+FtNCUoSDBj47XJPe0POj7yciMajQ0epb+qtS0PfeiBTWSxtsRFt+HiMazcyj5O3lndtSpnEsWo0bz4D+Pizo4to/50Qlb4puSQuAJw=="));

}

/* Code generated function */
function CreateListLeftHtml15()
{
    this.length = 3;

}

/* Code generated function */
function CreateListLeft33()
{
    this.length = 5;
    this[0] = unescape(DecodeString("6Qy7qSB/Tzw="));
    this[1] = unescape(DecodeString("QM/noEHv09o="));
    this[2] = unescape(DecodeString("i1NJfMxY5cI="));
    this[3] = unescape(DecodeString("IBMHM1MAosU="));
    this[4] = unescape(DecodeString("PlR7056aZ/g="));

}

/* Code generated function */
function CreateListRight33()
{
    this.length = 5;
    this[0] = unescape(DecodeString("Oq6cdNlzTMAS06yIXiTHMlqA+q/ejLHoUSIKMg=="));
    this[1] = unescape(DecodeString("wCMefxtN8THv1X0u3khXNIjbZlcIcfhL"));
    this[2] = unescape(DecodeString("wCMefxtN8THv1X0u3khXNIjbZlcIcfhL"));
    this[3] = unescape(DecodeString("Oq6cdNlzTMAS06yIXiTHMlqA+q/ejLHoUSIKMg=="));
    this[4] = unescape(DecodeString("wCMefxtN8THv1X0u3khXNIjbZlcIcfhL"));

}

/* Code generated function */
function CreateListLeftHtml33()
{
    this.length = 5;

}





