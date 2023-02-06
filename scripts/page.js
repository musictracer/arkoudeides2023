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
    InitQuestion286,
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
    var weight = DecodeNumber('wEGud5X0hCM=', 208, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HLu67LtjFTE=', 567, -1000, 1000),DecodeDecimal('EIID6O7TWmw=', 567, -1000, 1000),DecodeDecimal('EIID6O7TWmw=', 567, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = " 1. ��������� �� �������� (2) ��� ��� ��������������� ���� �������� ������ ��� ������ ������� ������������ ������������:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HLu67LtjFTE=', 569, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4tqLHn/RsJw=', 571, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4tqLHn/RsJw=', 573, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+Jypg1LRwTY=', 575, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " � �������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('/BGd1F05fx8=', 577, -1, 1);
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
    var weight = DecodeNumber('/BGd1F05fx8=', 577, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/BGd1F05fx8=', 577, -1000, 1000),DecodeDecimal('/UtemYVtjQc=', 577, -1000, 1000),DecodeDecimal('/UtemYVtjQc=', 577, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = " 2. ��������� �� �������� (1) ��� ��� �������������� ���� �������� ������. ������� �� ��� � Argyle(1988) �������� �� �������� ����������� ��� �� �������� ������������:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/BGd1F05fx8=', 579, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ������� ������������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ux0XBKnboxk=', 581, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ������� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0fXPvvtw4ng=', 583, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��������� �������� ��������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0fXPvvtw4ng=', 585, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " � ���������� ��� �������������� � �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('f/M3mdB01uk=', 587, -1, 1);
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
    var weight = DecodeNumber('LGqBxzjlsYo=', 587, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LGqBxzjlsYo=', 587, -1000, 1000),DecodeDecimal('49ZGXqsjTAY=', 587, -1000, 1000),DecodeDecimal('49ZGXqsjTAY=', 587, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = " 3. ��������� �� �������� ��� ����� �����";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LP2DdR5gPMo=', 589, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ��������� ������ ������� ������ ������ ��� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LP2DdR5gPMo=', 591, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ��������� ������ ������� �������������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bRr36uzBOXo=', 593, -1, 1);
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
    var weight = DecodeNumber('efO4SLx35ns=', 597, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('efO4SLx35ns=', 597, -1000, 1000),DecodeDecimal('a5cuYbr2QLk=', 597, -1000, 1000),DecodeDecimal('a5cuYbr2QLk=', 597, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = " 4. ��������� �� �������� (3) ��� ��� ��������������� ���� �������� ������. �� ������� ������, ������� �� ��� ��������� (1996, �.74) �����:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('B7huQwPAzBE=', 599, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� ��������� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B7huQwPAzBE=', 601, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� ��������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qppW2oj6mq0=', 603, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� ��������� ��������������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nn9RU43sIk0=', 605, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " �. � ������ � �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('x/S3OPS82ic=', 607, -1, 1);
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
    var weight = DecodeNumber('x/S3OPS82ic=', 607, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x/S3OPS82ic=', 607, -1000, 1000),DecodeDecimal('urxnIJFBe1U=', 607, -1000, 1000),DecodeDecimal('urxnIJFBe1U=', 607, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = " 5. �������� �� ����� ���� �������� ������� � ���������� ������� ����� ���� ���������� ������� ��������� �� ��� �����. ���� �������� ��� � �������������� ��� ��������� �������������� ����: � � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x/S3OPS82ic=', 609, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���������� ������� ����������� ������ ��� ������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U4ZTCItR9lQ=', 611, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���������� ������������� ����������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VTx4SpWu0R0=', 613, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ������ ��� �� ��� (� ��� �)";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('T1Zmqoln9uw=', 615, -1, 1);
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
    var weight = DecodeNumber('cgMyKBl3908=', 617, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cgMyKBl3908=', 617, -1000, 1000),DecodeDecimal('FusPrZkP6xM=', 617, -1000, 1000),DecodeDecimal('FusPrZkP6xM=', 617, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = " 6. �������� ��� ����� �������� (1) ��� �������� �������� �� ��� ��� ����� ���� ���������� ������� ��������: �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VV9mTF43XFM=', 619, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� ������� ��� ������������ ��� ��� ������� ������ ��� ���������� ��� ������������ �����������. �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VV9mTF43XFM=', 621, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� ������� ��� ������������ ��� ����� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D9TBt0hV0VA=', 623, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ��� ����� ������� ��� �� �� �������� ������ �� ������� ��� � ������������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4GiQO5QOfe0=', 625, -1, 1);
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
    var weight = DecodeNumber('09iJtTMt5ro=', 627, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('09iJtTMt5ro=', 627, -1000, 1000),DecodeDecimal('WklIJ6+mtk4=', 627, -1000, 1000),DecodeDecimal('WklIJ6+mtk4=', 627, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = " 7. �������� ��� ����� ������� �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('09iJtTMt5ro=', 629, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ��������� ������ ��� ������� ���������� ��� ������ �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dRJA0hY0Rkw=', 631, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ��������� ����� ���������� ��� ������ �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YPF3iwvr8Ys=', 633, -1, 1);
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
    var weight = DecodeNumber('THeDJVGTFxk=', 637, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('THeDJVGTFxk=', 637, -1000, 1000),DecodeDecimal('7D72oBZP00U=', 637, -1000, 1000),DecodeDecimal('7D72oBZP00U=', 637, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = " 8. �������� �� �������������� ��� ��� �������� ������ ��� �������� �����: �� ����� �������������� ���� ��������������� ������� �����: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('THeDJVGTFxk=', 639, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ������ ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+Hf88MacG/w=', 641, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���� ��� ������� �������. �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/+5nQTZSDd4=', 643, -1, 1);
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
    var weight = DecodeNumber('6PlgtMNbRAc=', 647, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6PlgtMNbRAc=', 647, -1000, 1000),DecodeDecimal('HDDp/lYpDoU=', 647, -1000, 1000),DecodeDecimal('HDDp/lYpDoU=', 647, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = " 9. �������� �� ����� ����� � �������� ���� ���������� ���� ��������������� ������� ��� ��������� ���: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6PlgtMNbRAc=', 649, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� �� ������ ��� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oKm3h5fHrGg=', 651, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� �� ����� ��� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oKm3h5fHrGg=', 653, -1, 1);
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
    var weight = DecodeNumber('NS4weCV/zRI=', 657, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NS4weCV/zRI=', 657, -1000, 1000),DecodeDecimal('OMXilw6jaKk=', 657, -1000, 1000),DecodeDecimal('OMXilw6jaKk=', 657, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = " 10. ��������� �� ����� �������� : � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NS4weCV/zRI=', 659, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� �������� ����� �� ����������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6xYUkXOiNUY=', 661, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� �������� ����� �� �������� ���� ���� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qwBehyFHBeY=', 663, -1, 1);
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
    var weight = DecodeNumber('Mp2UkCb+XrQ=', 667, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Mp2UkCb+XrQ=', 667, -1000, 1000),DecodeDecimal('s3pZXfqDe7A=', 667, -1000, 1000),DecodeDecimal('s3pZXfqDe7A=', 667, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = " 11. ������� �� �� ���������� ������: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eUgIxvcUbuY=', 669, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ������ ����� ������� ���� ������ �� ���������� ���� ��� ���� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eUgIxvcUbuY=', 671, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���������� ������ ��� ���������� ���� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4fXsmZOWMZo=', 673, -1, 1);
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
    var weight = DecodeNumber('418fEom9CpM=', 677, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('418fEom9CpM=', 677, -1000, 1000),DecodeDecimal('4IQ19i95/is=', 677, -1000, 1000),DecodeDecimal('4IQ19i95/is=', 677, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = " 12. ��������� ��� ���������� ����������� ��� ��������: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CV7vLwN/z7Q=', 679, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���� ��������� ��� ����������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BtELfgp//No=', 681, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ������-�������� ��� ����������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BtELfgp//No=', 683, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Y19QwVcTrhI=', 685, -1, 1);
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
    var weight = DecodeNumber('2jAXXwcOvU4=', 687, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2jAXXwcOvU4=', 687, -1000, 1000),DecodeDecimal('SSjV8ajDbYY=', 687, -1000, 1000),DecodeDecimal('SSjV8ajDbYY=', 687, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = " 13. ��������� �� ����� ��������: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jI8XkNASTFs=', 689, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ���� ������ ��� � ������ ���������� �� ���� ��� ������ �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jI8XkNASTFs=', 691, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " B. Lacan ������ ��� � ������ ���������� �� ���� ��� ������ �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H7jxs2SjeOU=', 693, -1, 1);
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
    var weight = DecodeNumber('7fHmjIGeVRo=', 697, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7fHmjIGeVRo=', 697, -1000, 1000),DecodeDecimal('KB/eklXmjHo=', 697, -1000, 1000),DecodeDecimal('KB/eklXmjHo=', 697, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = " 14. ��� ���������� ����� �� ����� ��������, � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('50ecW2Tg/h4=', 699, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���� ���������� ����� � ��������� ���������� ���� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('50ecW2Tg/h4=', 701, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���� �������� ����� � ��������� ���� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lu52p3fRUbM=', 703, -1, 1);
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
    var weight = DecodeNumber('JhNMksAfOM8=', 707, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JhNMksAfOM8=', 707, -1000, 1000),DecodeDecimal('64zVsP45gO8=', 707, -1000, 1000),DecodeDecimal('64zVsP45gO8=', 707, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = " 15. �������� ��� ������� ��� ��� �������������� ������� ���� �������� ��������: � ������� ��� ������ �������� ��������� ���: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JhNMksAfOM8=', 709, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� ������� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OSsivf1KIPI=', 711, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� ���� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3NQTvNGbsus=', 713, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� ��������� �������� ��� ��� ��������� ��� ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3NQTvNGbsus=', 715, -1, 1);
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
    var weight = DecodeNumber('sBovtehivG0=', 717, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sBovtehivG0=', 717, -1000, 1000),DecodeDecimal('wW37BKop2Mo=', 717, -1000, 1000),DecodeDecimal('wW37BKop2Mo=', 717, -1000, 1000));
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
    var weight = DecodeNumber('f1HpOVBvSgg=', 727, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('f1HpOVBvSgg=', 727, -1000, 1000),DecodeDecimal('wrxl+oltg2w=', 727, -1000, 1000),DecodeDecimal('wrxl+oltg2w=', 727, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = " 17. �������� �� ����� � �������� ���� �������� ���������� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bk1jMfAKqSY=', 729, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ���� \"����������\" ��� �������� �� ����� �� �� ����, ��� ��������� ��� �������� ��� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bk1jMfAKqSY=', 731, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ���� ��������� ��� ������� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('deJjCkfZUlk=', 733, -1, 1);
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
    var weight = DecodeNumber('iuHXqp+QuI0=', 737, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iuHXqp+QuI0=', 737, -1000, 1000),DecodeDecimal('IXYuVbo5zxA=', 737, -1000, 1000),DecodeDecimal('IXYuVbo5zxA=', 737, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = " 18. �������� �� ����� � ����� ������������ � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iuHXqp+QuI0=', 739, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ������ ��� �� ���� �������, ��� \"������������\" �� ���������� ������� ��� ���������� ���� �������� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KwI/ztGeHGA=', 741, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� ������� ������������ ��� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p3W/iJI6NBc=', 743, -1, 1);
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
    var weight = DecodeNumber('UPtepetIsp0=', 747, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UPtepetIsp0=', 747, -1000, 1000),DecodeDecimal('KG1LsHzPqVg=', 747, -1000, 1000),DecodeDecimal('KG1LsHzPqVg=', 747, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = " 19. �������� �� ����� ���� �������� ������� 24 bit ����� �������� ������������ ��: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UPtepetIsp0=', 749, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. 256 ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PXhJGa81QBE=', 751, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. 256 � 24 = 6.144 ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aTdjcMCKrTY=', 753, -1, 1);
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
    var weight = DecodeNumber('et8Fezr5SNY=', 757, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('et8Fezr5SNY=', 757, -1000, 1000),DecodeDecimal('HU8DJDFm0Yo=', 757, -1000, 1000),DecodeDecimal('HU8DJDFm0Yo=', 757, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = " 20. �������� �� ����� ���� �������� ������� �� ������� ���� ������������ �������� �������������� �� ��������� ��� ������������ � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('et8Fezr5SNY=', 759, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �������� ��� ���� ��� ��� �������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P3AL7AetKCE=', 761, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �������� ��� �������� ��� ��� ���� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('P3AL7AetKCE=', 763, -1, 1);
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
    var weight = DecodeNumber('u9sDjq9D+PQ=', 767, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('u9sDjq9D+PQ=', 767, -1000, 1000),DecodeDecimal('7aBLQI6fbyc=', 767, -1000, 1000),DecodeDecimal('7aBLQI6fbyc=', 767, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = " 21. ���� ��� ��� �������� ������� ������: � ����������� (digitization) ������� ��� ��������� �� ������� ����� ����� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('apNQUbWR5Aw=', 769, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. � ��������� ��� ���������� ������� �� ������� ����� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('apNQUbWR5Aw=', 771, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ���������� ������������ ���� ����������� �� ������� ���� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gOxjhE+xjKg=', 773, -1, 1);
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
    var weight = DecodeNumber('Nx75FPtckak=', 777, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Nx75FPtckak=', 777, -1000, 1000),DecodeDecimal('7gxMgodQyZQ=', 777, -1000, 1000),DecodeDecimal('7gxMgodQyZQ=', 777, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = " 22. �������� �� ����� � ����������� ������� ��� ��������� ����� ������� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Nx75FPtckak=', 779, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� �� ������� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0IcwwEYm14I=', 781, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��������� �� �� ����� �������� ������������ �������. �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mEr+/il5Y0s=', 783, -1, 1);
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
    var weight = DecodeNumber('K3wlBbakjvE=', 787, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K3wlBbakjvE=', 787, -1000, 1000),DecodeDecimal('LPBv2IHoj8I=', 787, -1000, 1000),DecodeDecimal('LPBv2IHoj8I=', 787, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = " 23. �������� �� �����. ���� �� ���������� ������������ � ������ ������������ �� ���������� �������� ������. ��� ����������� � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mrb5t2ijs+g=', 789, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� ���� �������� ���� pixel �� ���� ������ ��� ������� �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mrb5t2ijs+g=', 791, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. �� ������� ���� pixel �� ��� ������ ��� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Px2OiNMz1sw=', 793, -1, 1);
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
    var weight = DecodeNumber('AxBJj/qTnZs=', 634, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AxBJj/qTnZs=', 634, -1000, 1000),DecodeDecimal('YPF3iwvr8Ys=', 634, -1000, 1000),DecodeDecimal('YPF3iwvr8Ys=', 634, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = " 24. �������� �� �����. � ������������� ����� ��� ���������� ��� ��� ������, ��������� ���: � �";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AxBJj/qTnZs=', 636, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. �� ����� ����������� ��� ���������, �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7D72oBZP00U=', 638, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. ��� ������ � ��� �������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o7vcKYaw4uI=', 640, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " �. �� ����������� ��� ������� �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('o7vcKYaw4uI=', 642, -1, 1);
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
    var weight = DecodeNumber('OPEeO8XoIW8=', 644, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OPEeO8XoIW8=', 644, -1000, 1000),DecodeDecimal('/+5nQTZSDd4=', 644, -1000, 1000),DecodeDecimal('/+5nQTZSDd4=', 644, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "25. ������� ��� ���������� ��������.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OPEeO8XoIW8=', 646, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " �. ��� ����������� �������������� �������� �� ��� ������ ���� ���������� ����� �� ������� ������� ��� �������. �";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HDDp/lYpDoU=', 648, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " �. � ������� ��� ��������������� ��� ������ ��� ������ ���������� �� ������� (resolution) ��� ������� �";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('clxK3r9HaS4=', 650, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " � �. � ������� ��� ��������������� ��� ������ ��� ������ ���������� �� �������������� ��� ����� (ppi  pixels per inch). �";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4VCLCWzxFrs=', 652, -1, 1);
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
    var weight = DecodeNumber('pAGM/2iTg+g=', 654, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pAGM/2iTg+g=', 654, -1000, 1000),DecodeDecimal('m5ccJI6ccW8=', 654, -1000, 1000),DecodeDecimal('m5ccJI6ccW8=', 654, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "26. �� ������ BMP �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OMXilw6jaKk=', 656, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OMXilw6jaKk=', 658, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('e0dE89LPnl0=', 660, -1, 1);
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
    var weight = DecodeNumber('McJgCXzsnuM=', 664, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('McJgCXzsnuM=', 664, -1000, 1000),DecodeDecimal('qwBehyFHBeY=', 664, -1000, 1000),DecodeDecimal('qwBehyFHBeY=', 664, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "27. ����� ��� ���� �������� ������ ����������� ������� ����������� �� ���������:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('McJgCXzsnuM=', 666, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('74WzVJUamVA=', 668, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('74WzVJUamVA=', 670, -1, 1);
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
    var weight = DecodeNumber('4LHqoFbHBBc=', 674, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4LHqoFbHBBc=', 674, -1000, 1000),DecodeDecimal('uXf3vRirRkY=', 674, -1000, 1000),DecodeDecimal('uXf3vRirRkY=', 674, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "28. ����� ��� ���� �������� ������ ����������� ������� ����� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4LHqoFbHBBc=', 676, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4IQ19i95/is=', 678, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0GyuUCyYpjg=', 680, -1, 1);
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
    var weight = DecodeNumber('WTwt0AAAIv8=', 684, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WTwt0AAAIv8=', 684, -1000, 1000),DecodeDecimal('Y19QwVcTrhI=', 684, -1000, 1000),DecodeDecimal('Y19QwVcTrhI=', 684, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "29. �������� �� ����� �� �� ������ �� ��� �������ܻ, �� ��� ��������� ����������� ��� photoshop �� ����� �� ������������ �����������, ���� �� ���������� ��� office ��� windows �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WTwt0AAAIv8=', 686, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ���������� ����������� ��� ���������� �������� ���� �� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SSjV8ajDbYY=', 688, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������ ����� ���� ������� ��� ������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j5/sVjqiUg4=', 690, -1, 1);
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
    var weight = DecodeNumber('jYXaYWgZyqA=', 694, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jYXaYWgZyqA=', 694, -1000, 1000),DecodeDecimal('bK47E5OcxlU=', 694, -1000, 1000),DecodeDecimal('bK47E5OcxlU=', 694, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "30. �������� �� ����� ��� ������� �������� �� ��� �������� ��� �� ��� ����������� ��� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jYXaYWgZyqA=', 696, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Edit";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XhTl1a0H1q0=', 698, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Window.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XhTl1a0H1q0=', 700, -1, 1);
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
    var weight = DecodeNumber('ke9I2rHqv2E=', 704, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ke9I2rHqv2E=', 704, -1000, 1000),DecodeDecimal('27sKr8ZHZkc=', 704, -1000, 1000),DecodeDecimal('27sKr8ZHZkc=', 704, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "31. ��������� �� ����� �������� : � ������� ���� ��� ���������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('64zVsP45gO8=', 706, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� ��������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('64zVsP45gO8=', 708, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� �� �������� ��� �� ����� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sT5aT2UTzNo=', 710, -1, 1);
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
    var weight = DecodeNumber('cBAjMqkbi4w=', 714, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cBAjMqkbi4w=', 714, -1000, 1000),DecodeDecimal('3NQTvNGbsus=', 714, -1000, 1000),DecodeDecimal('3NQTvNGbsus=', 714, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "32. ��������� �� ����� �������� � �������� ������ ������������ ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wW37BKop2Mo=', 716, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. BMP";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ku9dCBlhVBU=', 718, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B.TIFF";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ku9dCBlhVBU=', 720, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. PNG";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mqVw59v4hkE=', 722, -1, 1);
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
    var weight = DecodeNumber('DfxFaiI4MVE=', 724, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DfxFaiI4MVE=', 724, -1000, 1000),DecodeDecimal('jNAEa8R6geU=', 724, -1000, 1000),DecodeDecimal('jNAEa8R6geU=', 724, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "33. ��������� �� ����� �������� � ����� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wrxl+oltg2w=', 726, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� �������� ��� ��� ���������� ��������� ���� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wrxl+oltg2w=', 728, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� �������� ��� ��� ����������� ������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9r5nwikkjPc=', 730, -1, 1);
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
    var weight = DecodeNumber('IiaUx3rjdg4=', 734, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IiaUx3rjdg4=', 734, -1000, 1000),DecodeDecimal('ctA4v+6VxOE=', 734, -1000, 1000),DecodeDecimal('ctA4v+6VxOE=', 734, -1000, 1000));
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
    var weight = DecodeNumber('KYUVGrzcRcg=', 744, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KYUVGrzcRcg=', 744, -1000, 1000),DecodeDecimal('p3W/iJI6NBc=', 744, -1000, 1000),DecodeDecimal('p3W/iJI6NBc=', 744, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "35. ��������� �� �������������� ��� ������ ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KYUVGrzcRcg=', 746, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� ������� �� �� ����� ��� ������������ ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('arZY1dgdFl0=', 748, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���� ������ ����� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('arZY1dgdFl0=', 750, -1, 1);
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
    var weight = DecodeNumber('wkQR3tdMmfk=', 754, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wkQR3tdMmfk=', 754, -1000, 1000),DecodeDecimal('aTdjcMCKrTY=', 754, -1000, 1000),DecodeDecimal('aTdjcMCKrTY=', 754, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "36. ��������� �� ����� � ������ ����� ���� ������� ������ �� ����������� �� ������ raw, ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wkQR3tdMmfk=', 756, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������ ������ �� ������������ ���� ��� �� ��������� Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HU8DJDFm0Yo=', 758, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. � ������ ������ �� ������������ ���� ��� �� ��������� Corel";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AwkZpeJ6MxI=', 760, -1, 1);
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
    var weight = DecodeNumber('xlDq/RidTJQ=', 764, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xlDq/RidTJQ=', 764, -1000, 1000),DecodeDecimal('DGtFXQdWHh4=', 764, -1000, 1000),DecodeDecimal('DGtFXQdWHh4=', 764, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "37. ��������� �� ����� ��� ������ ���� ������������ �� ����� TIFF ��� ��� �� JPEG  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7aBLQI6fbyc=', 766, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� �� ���������� layers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7aBLQI6fbyc=', 768, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ��������� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9GDQ/qLDoQw=', 770, -1, 1);
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
    var weight = DecodeNumber('KxCufR1VV9U=', 774, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KxCufR1VV9U=', 774, -1000, 1000),DecodeDecimal('WGEIlca58BE=', 774, -1000, 1000),DecodeDecimal('WGEIlca58BE=', 774, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "38. ��������� �� ����� �� ��������� laser  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KxCufR1VV9U=', 776, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. ����� ���������� �� ����� �� ������ ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7gxMgodQyZQ=', 778, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('emVKVhGm8Yk=', 780, -1, 1);
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
    var weight = DecodeNumber('LPxagSPwFUc=', 784, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LPxagSPwFUc=', 784, -1000, 1000),DecodeDecimal('mEr+/il5Y0s=', 784, -1000, 1000),DecodeDecimal('mEr+/il5Y0s=', 784, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "39. ��������� �� �����. � ������ ��� ������� ����� ������� �� ��� �� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LPBv2IHoj8I=', 786, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ��� ��� ��������� ������������ �������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LPBv2IHoj8I=', 788, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� Flash � ������ ����� ��������� �������� ���� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nDD3+1UnE9w=', 790, -1, 1);
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
    var weight = DecodeNumber('VXNczQ9pq1o=', 794, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VXNczQ9pq1o=', 794, -1000, 1000),DecodeDecimal('+7tkdt7dDVc=', 794, -1000, 1000),DecodeDecimal('+7tkdt7dDVc=', 794, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "40. ��������� �� �����. �� ����� \"Select\":  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VXNczQ9pq1o=', 796, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� Flash Adobe Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nKNB0jbFkWk=', 798, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ��� �� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('c0ciMjDQaCU=', 800, -1, 1);
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
    var weight = DecodeNumber('EuyONqaSPc8=', 804, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('EuyONqaSPc8=', 804, -1000, 1000),DecodeDecimal('JrdoaGv4fuk=', 804, -1000, 1000),DecodeDecimal('JrdoaGv4fuk=', 804, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "41. ��������� �� �����. �� ������� �� ��� �� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EuyONqaSPc8=', 806, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. A������ ���� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('66ffKjSclnc=', 808, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ���� ��� ������� ��� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sipCYG1iZZo=', 810, -1, 1);
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
    var weight = DecodeNumber('T6DdiUJfi4Q=', 814, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T6DdiUJfi4Q=', 814, -1000, 1000),DecodeDecimal('YRETSATJofs=', 814, -1000, 1000),DecodeDecimal('YRETSATJofs=', 814, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "42. ��������� �� �����. �� ���������� �������� ��� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T6DdiUJfi4Q=', 816, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ����� ���� ��������� ������������ ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wRE3sIClH/Y=', 818, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �������� ���� ��������� ������������ ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ln9yDeJvhk8=', 820, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� ������ ������� ����� �File�.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3J4Lmxm5RyE=', 822, -1, 1);
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
    var weight = DecodeNumber('mo0LkQe7TDY=', 824, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mo0LkQe7TDY=', 824, -1000, 1000),DecodeDecimal('+vWbozPFsRk=', 824, -1000, 1000),DecodeDecimal('+vWbozPFsRk=', 824, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "43. ��������� ���� ����� �� ����� �������������� ��� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oz3KLRRmW04=', 826, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yUGKZMdkfDk=', 828, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yUGKZMdkfDk=', 830, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VqBf8+7t/Qc=', 832, -1, 1);
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
    var weight = DecodeNumber('q6X7DhuTMrY=', 834, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('q6X7DhuTMrY=', 834, -1000, 1000),DecodeDecimal('+eaoyIEmRO4=', 834, -1000, 1000),DecodeDecimal('+eaoyIEmRO4=', 834, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "44. ��������� �� �����:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('q6X7DhuTMrY=', 836, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� Adobe Photoshop ���� ��� ����� ��������� ��� ����������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gff9xZnxd74=', 838, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� Adobe Photoshop ���� ��� ������� ������ ���������: ��� �� ��������� ��� ��� ��� ����������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+4TeoecIsaQ=', 840, -1, 1);
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
    var weight = DecodeNumber('1DsoGTukzBY=', 844, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1DsoGTukzBY=', 844, -1000, 1000),DecodeDecimal('Ce49ml7asIk=', 844, -1000, 1000),DecodeDecimal('Ce49ml7asIk=', 844, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "45. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1DsoGTukzBY=', 846, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �� ������� SHIFT �������� ��� ����������� � ���� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SZTs0nFb0/I=', 848, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �� ������� TAB ��������� ��� ������������ �� ������� ��� � ������ ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SZTs0nFb0/I=', 850, -1, 1);
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
    var weight = DecodeNumber('CV08f0N6V2o=', 854, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CV08f0N6V2o=', 854, -1000, 1000),DecodeDecimal('Sp7ndr1iGQ8=', 854, -1000, 1000),DecodeDecimal('Sp7ndr1iGQ8=', 854, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "46. ��������� �� �����. � �������� ���� ���������� ���������� �������� �� ���������� ��� ���� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QRH+kSkTvUY=', 856, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� ����������� ���������� ��� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QRH+kSkTvUY=', 858, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ��� ������� ���������� ����� ���� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9YnNjj9bkyw=', 860, -1, 1);
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
    var weight = DecodeNumber('W4l6W9QPQT8=', 864, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('W4l6W9QPQT8=', 864, -1000, 1000),DecodeDecimal('NcwUYs6cUL0=', 864, -1000, 1000),DecodeDecimal('NcwUYs6cUL0=', 864, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "47. ��������� �� �����. ������� �� �� ������� ������ �� ������ ����� ��� �� ����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('W4l6W9QPQT8=', 866, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �������� ���������������� ���� �� ����� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('02fiT3pIt0Y=', 868, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ���� ��������������� ��� �� ��������� �� ����� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rQjpBJvI/g0=', 870, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ��������� ��� ���������� ��� ������� �� ����� ������������� ��� �� ���������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ram7t+HXa0U=', 872, -1, 1);
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
    var weight = DecodeNumber('3zmaD4t/FYQ=', 874, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3zmaD4t/FYQ=', 874, -1000, 1000),DecodeDecimal('vD/SZbJo7OY=', 874, -1000, 1000),DecodeDecimal('vD/SZbJo7OY=', 874, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "48. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CZgFSUSfxiM=', 876, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �������� ��� ������������� ��������� ���� ��������� ���� ��� ��������� ���� �� �������� ��� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CZgFSUSfxiM=', 878, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �������� ��� ������������� ��������� ���� ������������ ����� ��� ������ ������������ ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lccaNjvXyKs=', 880, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� �������� ��� ������������� ��������� ���� ����� ���� ��� ��� ����� ������������ ���� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('r+yFylH8Q+I=', 882, -1, 1);
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
    var weight = DecodeNumber('iUKz36T9rgA=', 884, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iUKz36T9rgA=', 884, -1000, 1000),DecodeDecimal('o6hXCfNJFbs=', 884, -1000, 1000),DecodeDecimal('o6hXCfNJFbs=', 884, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "49. ��������� �� �����. � ��������� ��� ��������� ��� ������� ���������� �� �� ��������� ��� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iUKz36T9rgA=', 886, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� �� ��������� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qdDO0L1CpCw=', 888, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� �� ��������� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yRQ5K9t2g1E=', 890, -1, 1);
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
    var weight = DecodeNumber('rh/BhCAPihU=', 894, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rh/BhCAPihU=', 894, -1000, 1000),DecodeDecimal('cnl/Z9XrVaU=', 894, -1000, 1000),DecodeDecimal('cnl/Z9XrVaU=', 894, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "50. ��������� �� �����. ������� zoom ��� ��������� �� �� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QRWszjBucqU=', 896, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Control + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QRWszjBucqU=', 898, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Control + Alt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vW16f36wtkQ=', 900, -1, 1);
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
    var weight = DecodeNumber('wi7PDBbg2eM=', 904, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wi7PDBbg2eM=', 904, -1000, 1000),DecodeDecimal('dRPK+fA7CeI=', 904, -1000, 1000),DecodeDecimal('dRPK+fA7CeI=', 904, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = false;
    question.shortTextQuestion = "51. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ahbp57W7EaI=', 906, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Zoom Out = Alt + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ahbp57W7EaI=', 908, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Zoom Out = Alt + Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PTxmdVdZMOE=', 910, -1, 1);
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
    var weight = DecodeNumber('2abidb/zI7M=', 914, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2abidb/zI7M=', 914, -1000, 1000),DecodeDecimal('ZHRZocpenT8=', 914, -1000, 1000),DecodeDecimal('ZHRZocpenT8=', 914, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = false;
    question.shortTextQuestion = "52. ��������� �� �����. � ������� ��� ���� � ������� ��� �� ����� view �� ��� ���������� ������� ��� �� zoom ��� ��� ������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ap9UEpoAEa0=', 916, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ ����������� �� ������ ��� ���� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ap9UEpoAEa0=', 918, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ��������� ���� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PvzV64+smPk=', 920, -1, 1);
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
    var weight = DecodeNumber('s2577zdzGWY=', 924, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('s2577zdzGWY=', 924, -1000, 1000),DecodeDecimal('UsgyIqJWnq8=', 924, -1000, 1000),DecodeDecimal('UsgyIqJWnq8=', 924, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = false;
    question.shortTextQuestion = "53. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('s2577zdzGWY=', 926, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ��������� �� ������ �������� ��� ������� ��������� ��� ����� view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oNNaNlytWo8=', 928, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �� ��������� �� ������ �������� ��� ������� ��������� ��� ����� File Preferences � ��� ��� ������ Info (�����������).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oNNaNlytWo8=', 930, -1, 1);
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
    var weight = DecodeNumber('2txlD9TbHCY=', 934, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2txlD9TbHCY=', 934, -1000, 1000),DecodeDecimal('ZVgCN3DUAOA=', 934, -1000, 1000),DecodeDecimal('ZVgCN3DUAOA=', 934, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = false;
    question.shortTextQuestion = "54. ��������� �� �����. ��� �� ������������ ��� ������ - ������ ������ ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2txlD9TbHCY=', 936, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ����� � ������ ��������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7Rkb0twnRjA=', 938, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ����� � ������ ������ �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a2tVuc+0ArA=', 940, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ����� � �������� ��� ������� �� ����� �� ������� ��� ��������� ������ ����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Z95aCpSEOmc=', 942, -1, 1);
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
    var weight = DecodeNumber('8bG0E92h1yY=', 944, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8bG0E92h1yY=', 944, -1000, 1000),DecodeDecimal('Khj0xKcmui4=', 944, -1000, 1000),DecodeDecimal('Khj0xKcmui4=', 944, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = false;
    question.shortTextQuestion = "55. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nOowwxte9PE=', 946, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ��������� ������� ��������� ��� ����� view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nOowwxte9PE=', 948, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ��������� ������� ��������� ��� ����� File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x+pT3Y8CLGI=', 950, -1, 1);
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
    var weight = DecodeNumber('HbJMn4K0MFo=', 954, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HbJMn4K0MFo=', 954, -1000, 1000),DecodeDecimal('nXhb/aoYiQQ=', 954, -1000, 1000),DecodeDecimal('nXhb/aoYiQQ=', 954, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "56. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wIbeeHs+6wQ=', 956, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ����������� ��� ������������� ������ ��������� ��� ����� view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wIbeeHs+6wQ=', 958, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ����������� ��� ������������� ������ ��������� ��� ����� file.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KN7rtlggrZw=', 960, -1, 1);
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
    var weight = DecodeNumber('c0SYtbZ13ew=', 964, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('c0SYtbZ13ew=', 964, -1000, 1000),DecodeDecimal('RyTaxpOasdE=', 964, -1000, 1000),DecodeDecimal('RyTaxpOasdE=', 964, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = false;
    question.shortTextQuestion = "57. ��������� ��� ������ ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('c0SYtbZ13ew=', 966, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ����� �������� ��������� �������� �� ��������: color style-gridline every-lock/unlock.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1yNI9t1RuTE=', 968, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ����� �������� ��������� �������� �� ��������: color style-gridline every-snap to.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E3vbB8vE39E=', 970, -1, 1);
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
    var weight = DecodeNumber('hAReosfEpeQ=', 974, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hAReosfEpeQ=', 974, -1000, 1000),DecodeDecimal('+oN331HOUBI=', 974, -1000, 1000),DecodeDecimal('+oN331HOUBI=', 974, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = false;
    question.shortTextQuestion = "58. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lEl2/vmgtYg=', 1334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� floating selection ���� ��������� ��������� �� ����� ��� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XvylpgdqrrU=', 1336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� floating selection ���� ��������� ����� �� ����� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o5hYXi8IDjQ=', 1338, -1, 1);
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
    var weight = DecodeNumber('GL69mqnABLY=', 1342, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GL69mqnABLY=', 1342, -1000, 1000),DecodeDecimal('3z/s/kcMudE=', 1342, -1000, 1000),DecodeDecimal('3z/s/kcMudE=', 1342, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = false;
    question.shortTextQuestion = "59. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ofi2NXAopIU=', 1344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� Constrain Proportions ������� ���� ���� ����� ������ �� Resample image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ofi2NXAopIU=', 1346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� Constrain Proportions ������� ���� ���� ����� �������� �� Resample image.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XkKida80zhM=', 1348, -1, 1);
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
    var weight = DecodeNumber('3o8wz4bNnkw=', 1352, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3o8wz4bNnkw=', 1352, -1000, 1000),DecodeDecimal('3WcdWRXfKTE=', 1352, -1000, 1000),DecodeDecimal('3WcdWRXfKTE=', 1352, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = false;
    question.shortTextQuestion = "60. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3o8wz4bNnkw=', 1354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������ ���������� ���� ������� ������� ���������� ��� ����� Image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fppRFrEq/KY=', 1356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������ ���������� ���� ������� ��� ��������� �� ������� (layer) ������� ���������� ��� �������� Transform > Scale ���� ��� �� ����� Edit.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fppRFrEq/KY=', 1358, -1, 1);
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
    var weight = DecodeNumber('ESnu2Xb+qnE=', 1362, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ESnu2Xb+qnE=', 1362, -1000, 1000),DecodeDecimal('uu/zXuvbwqY=', 1362, -1000, 1000),DecodeDecimal('uu/zXuvbwqY=', 1362, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = false;
    question.shortTextQuestion = "61. ��������� �� �����. �������� �� ����� �� ������� ���� �������� ����������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T2zJc/iJvOE=', 1364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� Interface ��� �� �������� Preferences.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T2zJc/iJvOE=', 1366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �������� Control + 1.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZqCBelEW4D0=', 1368, -1, 1);
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
    var weight = DecodeNumber('WeBgR+QvD8g=', 1372, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WeBgR+QvD8g=', 1372, -1000, 1000),DecodeDecimal('odkdiPnISHs=', 1372, -1000, 1000),DecodeDecimal('odkdiPnISHs=', 1372, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = false;
    question.shortTextQuestion = "62. ��������� �� �����. ��� �� ����� �� ������� ������ ���� �������� RGB ����������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WeBgR+QvD8g=', 1374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Control + 3";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('v/tj5BIRMVY=', 1376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Control + 2";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZejU+5i7HvY=', 1378, -1, 1);
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
    var weight = DecodeNumber('peLi0MmgTEc=', 1382, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('peLi0MmgTEc=', 1382, -1000, 1000),DecodeDecimal('yhqwIiVRYNY=', 1382, -1000, 1000),DecodeDecimal('yhqwIiVRYNY=', 1382, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = false;
    question.shortTextQuestion = "63. ��������� �� ����� � �� �����. �������� �������� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x3yGIB0tLY0=', 1384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MDgQH/aIkfg=', 1386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LaZzKEUapBE=', 1388, -1, 1);
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
    var weight = DecodeNumber('+tyzFvGK/V4=', 1392, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+tyzFvGK/V4=', 1392, -1000, 1000),DecodeDecimal('0XSUkCKMRls=', 1392, -1000, 1000),DecodeDecimal('0XSUkCKMRls=', 1392, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = false;
    question.shortTextQuestion = "64. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+tyzFvGK/V4=', 1394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ������� anti aliased ��������������� ��� ��� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IK6czLTNpDs=', 1396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� Deselect ��� �� ����� Select ��������������� ��� ��� ����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IK6czLTNpDs=', 1398, -1, 1);
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
    var weight = DecodeNumber('jc9uiCKa1xg=', 1402, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jc9uiCKa1xg=', 1402, -1000, 1000),DecodeDecimal('qDv1UD/nWYg=', 1402, -1000, 1000),DecodeDecimal('qDv1UD/nWYg=', 1402, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = false;
    question.shortTextQuestion = "65. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pqEG6MGT43E=', 1404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� pixels �� ���� ����������� 255 ��� ��� �� ���� ������� ����� ����� �����.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pqEG6MGT43E=', 1406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� pixels �� ���� ����������� 0 ��� ��� �� ���� ������� ����� ����� �����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7fL8SdKfj3g=', 1408, -1, 1);
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
    var weight = DecodeNumber('qryVpKRuUvU=', 1412, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qryVpKRuUvU=', 1412, -1000, 1000),DecodeDecimal('AXf99MYyu1o=', 1412, -1000, 1000),DecodeDecimal('AXf99MYyu1o=', 1412, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = false;
    question.shortTextQuestion = "66. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qryVpKRuUvU=', 1414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Pixels �� ���� ����������� 0 ��� ������� ������, 126 ��� ���� ��� 250 ��� �������, ����������� �� ����� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BXkFcI6VkAs=', 1416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Pixels �� ���� ����������� 0 ��� ������� ������, 250 ��� ���� ��� 0 ��� �������, ����������� �� ����� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mlwW3+Dfn6M=', 1418, -1, 1);
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
    var weight = DecodeNumber('qP24H0YChq4=', 1422, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qP24H0YChq4=', 1422, -1000, 1000),DecodeDecimal('FZoPRnxDg+Y=', 1422, -1000, 1000),DecodeDecimal('FZoPRnxDg+Y=', 1422, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = false;
    question.shortTextQuestion = "67. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qP24H0YChq4=', 1424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �� ������ ������� ���������� ��� ������� ��� ������� �� ����������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hOUB8lM68H4=', 1426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �� ������ ������� ���������� ��� ������� �������� �������� ��� ������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hOUB8lM68H4=', 1428, -1, 1);
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
    var weight = DecodeNumber('DZkYBhElMGE=', 1432, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DZkYBhElMGE=', 1432, -1000, 1000),DecodeDecimal('MjF4XW569UI=', 1432, -1000, 1000),DecodeDecimal('MjF4XW569UI=', 1432, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = false;
    question.shortTextQuestion = "68. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DZkYBhElMGE=', 1434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ����� ���������� �� ��� ������� ������������ �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UN7Sq9YHP/U=', 1436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� ����� ���������� ���� �� ��� ������� ������������ ������ ����������� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JXxtB90EKqc=', 1438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������� ����� ���������� ��� ��� �������� ������ �� ������� ������������ �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SjlCGrdPStg=', 1440, -1, 1);
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
    var weight = DecodeNumber('Jkz71UUWaBI=', 1442, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Jkz71UUWaBI=', 1442, -1000, 1000),DecodeDecimal('VCaH/V9zDrw=', 1442, -1000, 1000),DecodeDecimal('VCaH/V9zDrw=', 1442, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = false;
    question.shortTextQuestion = "69. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Jkz71UUWaBI=', 1444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ��������� ���� �������� �� ������ �� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0l+krDfjamw=', 1446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ���������� ���� �������� ��� ������ �� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iZMmBR8inOI=', 1448, -1, 1);
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
    var weight = DecodeNumber('UxEKGGfo+qk=', 1452, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UxEKGGfo+qk=', 1452, -1000, 1000),DecodeDecimal('XHjMAZTgOK8=', 1452, -1000, 1000),DecodeDecimal('XHjMAZTgOK8=', 1452, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = false;
    question.shortTextQuestion = "70. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AxnBZpe+sLw=', 1454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������ ����������� �������� �� ����������� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AxnBZpe+sLw=', 1456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ����������� ���� ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YmxW7G2pJ6g=', 1458, -1, 1);
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
    var weight = DecodeNumber('cI7Ii9Q2NyE=', 1462, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cI7Ii9Q2NyE=', 1462, -1000, 1000),DecodeDecimal('h8yvxBTbZaE=', 1462, -1000, 1000),DecodeDecimal('h8yvxBTbZaE=', 1462, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = false;
    question.shortTextQuestion = "71. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cI7Ii9Q2NyE=', 1464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� \"�������\" ���� ��������/�������� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yEAUs5+j+WY=', 1466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� \"�������\" ���� ���, ������������, �������� ��� �������� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZSV6l90KKBw=', 1468, -1, 1);
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
    var weight = DecodeNumber('wwgGtzuEDU4=', 1472, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wwgGtzuEDU4=', 1472, -1000, 1000),DecodeDecimal('79qtzc7W2AI=', 1472, -1000, 1000),DecodeDecimal('79qtzc7W2AI=', 1472, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = false;
    question.shortTextQuestion = "72. ��������� �� �����. ��� �� ������� � �� ������� ��� ������� � ����� �������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HR8QHgn4xHg=', 1474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���� �������� ��� �� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HR8QHgn4xHg=', 1476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ���� �������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HyjApqNPz+U=', 1478, -1, 1);
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
    var weight = DecodeNumber('qg0nFPXQm3w=', 1482, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qg0nFPXQm3w=', 1482, -1000, 1000),DecodeDecimal('FKHwMozvKz0=', 1482, -1000, 1000),DecodeDecimal('FKHwMozvKz0=', 1482, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = false;
    question.shortTextQuestion = "73. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('l5RArjyAl0U=', 1484, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� ��� �������� �� ������� �� ���� ��� ���� �������� ���� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l5RArjyAl0U=', 1486, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ��� �������� �� ������� �� ���� ���� �������� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4+HJeI2EOcY=', 1488, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� ��� �������� �� ������� �� ���� ���� ������� ��� ����� ��������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('F/AMXL2RXV4=', 1490, -1, 1);
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
    var weight = DecodeNumber('/+AGI3mph+U=', 1492, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/+AGI3mph+U=', 1492, -1000, 1000),DecodeDecimal('HL0O+pcJxbs=', 1492, -1000, 1000),DecodeDecimal('HL0O+pcJxbs=', 1492, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = false;
    question.shortTextQuestion = "74. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vxacttAaUxM=', 1494, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ���������� ��������� ������ ���� ����� ��������� ��� �� ������� � ��� ����� �� ����� �� �� ���� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vxacttAaUxM=', 1496, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ���������� ������ ���� ����� ��������� ���� ��� ������ �������� � ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HoNap0Twbjo=', 1498, -1, 1);
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
    var weight = DecodeNumber('Hf+YAHWpq38=', 1502, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Hf+YAHWpq38=', 1502, -1000, 1000),DecodeDecimal('XI4JbA8cu68=', 1502, -1000, 1000),DecodeDecimal('XI4JbA8cu68=', 1502, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = false;
    question.shortTextQuestion = "75. ��������� �� �����. ���������� �������� ��� ������� �� ����� ������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Hf+YAHWpq38=', 1504, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������ \"������������\", ���� ��� �� ����� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GG5gXTqDQxM=', 1506, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ \"������������\", ���� ��� ��� ������ ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GG5gXTqDQxM=', 1508, -1, 1);
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
    var weight = DecodeNumber('+f414a2J52o=', 1512, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+f414a2J52o=', 1512, -1000, 1000),DecodeDecimal('xS+4EPVkEvY=', 1512, -1000, 1000),DecodeDecimal('xS+4EPVkEvY=', 1512, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = false;
    question.shortTextQuestion = "76. ��������� �� �����. ������������ ��� ������������ ��������� ���������� ��� �������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('El6atu3HzuI=', 1514, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� Alt/Option + ���� ��� ��������� ��� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('El6atu3HzuI=', 1516, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� Control + ���� ��� ��������� ��� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M/bY4D8avIc=', 1518, -1, 1);
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
    var weight = DecodeNumber('numA+wBeO5U=', 1522, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('numA+wBeO5U=', 1522, -1000, 1000),DecodeDecimal('qLR3Bp0elVQ=', 1522, -1000, 1000),DecodeDecimal('qLR3Bp0elVQ=', 1522, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = false;
    question.shortTextQuestion = "77. ��������� �� �����. ��� �� ��������� ��� ����� �������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('numA+wBeO5U=', 1524, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� �������� �� Alt ������� ���� ��� ������� �������� ��� ���������� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/j9aQusd0uE=', 1526, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� ������� �������� ��� ���������� ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/j9aQusd0uE=', 1528, -1, 1);
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
    var weight = DecodeNumber('2V3noMyHU5M=', 1532, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2V3noMyHU5M=', 1532, -1000, 1000),DecodeDecimal('PSXmzL/+3LY=', 1532, -1000, 1000),DecodeDecimal('PSXmzL/+3LY=', 1532, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = false;
    question.shortTextQuestion = "78. ��������� �� �����. � ������������� �������� ������� �� �� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2V3noMyHU5M=', 1534, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IPipxaSefD4=', 1536, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ���������� ��� ������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2dtnRDyGumU=', 1538, -1, 1);
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
    var weight = DecodeNumber('Y4g1R9EXRX4=', 1542, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Y4g1R9EXRX4=', 1542, -1000, 1000),DecodeDecimal('N0X55UioEeA=', 1542, -1000, 1000),DecodeDecimal('N0X55UioEeA=', 1542, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = false;
    question.shortTextQuestion = "79. ��������� �� �����. ��� ��� ����������� ��� ������ ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MrjBDC0i1tw=', 1544, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ��� ����� ����������� ��� ����� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MrjBDC0i1tw=', 1546, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� ��� ����� ����������� ����� ����������� �� ����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tUTWZz41+tk=', 1548, -1, 1);
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
    var weight = DecodeNumber('BjvIAOa+8Uc=', 1552, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BjvIAOa+8Uc=', 1552, -1000, 1000),DecodeDecimal('uwQNdSHohkg=', 1552, -1000, 1000),DecodeDecimal('uwQNdSHohkg=', 1552, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = false;
    question.shortTextQuestion = "80. ��������� �� �����. ��� �� ������������� ��� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bOsTzUEDBRQ=', 1554, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �������� �� ������� Control + ���� ���� ������� ��� ��� �� ��������� ��� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bOsTzUEDBRQ=', 1556, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������� �� ������� Alt + ���� ���� ������� ��� ��� �� ��������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kDOz4vNM+lI=', 1558, -1, 1);
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
    var weight = DecodeNumber('QafMJHufb2o=', 1562, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QafMJHufb2o=', 1562, -1000, 1000),DecodeDecimal('0rYafgG3cUA=', 1562, -1000, 1000),DecodeDecimal('0rYafgG3cUA=', 1562, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = false;
    question.shortTextQuestion = "81. ��������� �� �����. � �������� ������� �������� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FfQJR+ZarMw=', 1564, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��������� �� �������� �����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FfQJR+ZarMw=', 1566, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��������� �� �������� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cegGsU/ousc=', 1568, -1, 1);
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
    var weight = DecodeNumber('oQsRgPP4n/8=', 1572, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oQsRgPP4n/8=', 1572, -1000, 1000),DecodeDecimal('RVSRfD124kg=', 1572, -1000, 1000),DecodeDecimal('RVSRfD124kg=', 1572, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = false;
    question.shortTextQuestion = "82. ��������� �� �����. � ���������� ������ ��� ��� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('f37Iu6UayB4=', 1574, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ������� ���� �� ��������� ������� ��� ���� ����� ��� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f37Iu6UayB4=', 1576, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �������� �� Control ������� �� ������� ���� �� ��������� ������� ��� ���� ����� ��� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1LDjni0lg1E=', 1578, -1, 1);
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
    var weight = DecodeNumber('i0HEouJxRxo=', 1582, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i0HEouJxRxo=', 1582, -1000, 1000),DecodeDecimal('mnwsgpTlc1o=', 1582, -1000, 1000),DecodeDecimal('mnwsgpTlc1o=', 1582, -1000, 1000));
    question.answers.length = 0;
    question.num = 83;
    question.isSingleAns = false;
    question.shortTextQuestion = "83. ��������� �� �����. � ������ ��� �������� ���� ������� ����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i0HEouJxRxo=', 1584, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ����� ����������� �� ��� ������ ��� �������� ����� ��� ��� ������ ��� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s4AQhs5a73s=', 1586, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ������� ��� ����� ����������� �� ��� ������ ��� �������� ����� ��� �� ��������� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3DuXe4YtH9k=', 1588, -1, 1);
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
    var weight = DecodeNumber('3Jtuak40FIc=', 1592, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3Jtuak40FIc=', 1592, -1000, 1000),DecodeDecimal('SQsHaXJg0qU=', 1592, -1000, 1000),DecodeDecimal('SQsHaXJg0qU=', 1592, -1000, 1000));
    question.answers.length = 0;
    question.num = 84;
    question.isSingleAns = false;
    question.shortTextQuestion = "84. ��������� �� �����. � ������ �������� ���� ������� ����� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3Jtuak40FIc=', 1594, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ���������� �� ������� ���� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hDviiGFUq4k=', 1596, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �� �������� ������� �� ������� ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hdXagFuPbOQ=', 1598, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ���������� ��� �� ������� ���� ������� �� ��� �����.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('pjGzKiEYxdU=', 1600, -1, 1);
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
    var weight = DecodeNumber('ZJ6FQI77Zl8=', 1602, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZJ6FQI77Zl8=', 1602, -1000, 1000),DecodeDecimal('n4K1jWJz7Pg=', 1602, -1000, 1000),DecodeDecimal('n4K1jWJz7Pg=', 1602, -1000, 1000));
    question.answers.length = 0;
    question.num = 85;
    question.isSingleAns = false;
    question.shortTextQuestion = "85. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZJ6FQI77Zl8=', 1604, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ ���� ����� �� ���������� ��� ������ ��������� ��� �������� ��� �������� �� ���������� ����� ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('S4ZTOtGvYI4=', 1606, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ���� ����� �� ���������� ��� ������ ��������� ���� ���� �������� ��� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0+uzOe0tdgU=', 1608, -1, 1);
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
    var weight = DecodeNumber('ZFjW7GisJNM=', 1612, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZFjW7GisJNM=', 1612, -1000, 1000),DecodeDecimal('DevHt8CnfUk=', 1612, -1000, 1000),DecodeDecimal('DevHt8CnfUk=', 1612, -1000, 1000));
    question.answers.length = 0;
    question.num = 86;
    question.isSingleAns = false;
    question.shortTextQuestion = "86. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fp9CyqQnejE=', 1614, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ ���� ��������������� ��� ������ � ����� ���������� ���� ������ ��� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fp9CyqQnejE=', 1616, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ���� ��������������� ��� ������� ������� �� �������� ����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CA0/wcPrQTM=', 1618, -1, 1);
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
    var weight = DecodeNumber('REXRLxAmC0k=', 1622, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('REXRLxAmC0k=', 1622, -1000, 1000),DecodeDecimal('ZnEase7oYmM=', 1622, -1000, 1000),DecodeDecimal('ZnEase7oYmM=', 1622, -1000, 1000));
    question.answers.length = 0;
    question.num = 87;
    question.isSingleAns = false;
    question.shortTextQuestion = "87. ��������� �� �����. �� ���������� ���� ������� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H8ZCu0xCBsQ=', 1624, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���������� ���� ������ ��� �� ����� Window.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H8ZCu0xCBsQ=', 1626, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ���������� ���� ������ ��� �� ����� File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Au7tUk1veC0=', 1628, -1, 1);
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
    var weight = DecodeNumber('VVCQjTRuLNk=', 1632, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VVCQjTRuLNk=', 1632, -1000, 1000),DecodeDecimal('e1B6P1XV2EM=', 1632, -1000, 1000),DecodeDecimal('e1B6P1XV2EM=', 1632, -1000, 1000));
    question.answers.length = 0;
    question.num = 88;
    question.isSingleAns = false;
    question.shortTextQuestion = "88. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O+5GPHvIh48=', 1634, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � �������� ��������� ������� ���������� ��� ����� ������������ (Edit).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O+5GPHvIh48=', 1636, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � �������� ��������� ������� ���������� ��� ����� ������� (File).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FLLuQtDJ2Tk=', 1638, -1, 1);
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
    var weight = DecodeNumber('+GUY4o/iV3k=', 1642, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+GUY4o/iV3k=', 1642, -1000, 1000),DecodeDecimal('a3em1opK9B4=', 1642, -1000, 1000),DecodeDecimal('a3em1opK9B4=', 1642, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = false;
    question.shortTextQuestion = "89. ��������� �� �����.  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9qyFg13h3EA=', 1644, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. H �������� ���������ܻ ������� �� ������� ��� ��������� ������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9qyFg13h3EA=', 1646, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � �������� ���������ܻ ������� �� ������� ��������� �����.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KagXPAJhKXU=', 1648, -1, 1);
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
    var weight = DecodeNumber('IxpoxuoVTB0=', 1652, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IxpoxuoVTB0=', 1652, -1000, 1000),DecodeDecimal('PQlkbfslKv8=', 1652, -1000, 1000),DecodeDecimal('PQlkbfslKv8=', 1652, -1000, 1000));
    question.answers.length = 0;
    question.num = 90;
    question.isSingleAns = false;
    question.shortTextQuestion = "90. ��������� �� �����. ��� �� ������������� � ������ ��������� ���� ������ �������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KOgQfSwjnOM=', 1654, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ��� ������ ��������� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KOgQfSwjnOM=', 1656, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� ��� ������ ���������� ��� �� ����� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sZBT6piy+s0=', 1658, -1, 1);
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
    var weight = DecodeNumber('Wf9sE0yBemI=', 1662, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Wf9sE0yBemI=', 1662, -1000, 1000),DecodeDecimal('VHXcnTOx56I=', 1662, -1000, 1000),DecodeDecimal('VHXcnTOx56I=', 1662, -1000, 1000));
    question.answers.length = 0;
    question.num = 91;
    question.isSingleAns = false;
    question.shortTextQuestion = "91. ��������� �� �����. ��� �� ����������� ��� ������� ���������� ��� ���������� ���� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('l/zb9SnExeI=', 1664, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ����� �����������, ���������� ��� ����������� ��� ���� ������� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l/zb9SnExeI=', 1666, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� ����� ������������, ���������� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TalojWas/Uo=', 1668, -1, 1);
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
    var weight = DecodeNumber('t5unINwWZ+k=', 1672, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t5unINwWZ+k=', 1672, -1000, 1000),DecodeDecimal('Vj3PeaT0/Mo=', 1672, -1000, 1000),DecodeDecimal('Vj3PeaT0/Mo=', 1672, -1000, 1000));
    question.answers.length = 0;
    question.num = 92;
    question.isSingleAns = false;
    question.shortTextQuestion = "92. ��������� �� �����. � ������� ���������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t5unINwWZ+k=', 1674, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� ��������� ��� ������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nQsurLlSVUA=', 1676, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� ��������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yqgNFDnxQtI=', 1678, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� ����������� ������������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yDfRAD6AcdY=', 1680, -1, 1);
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
    var weight = DecodeNumber('zqVIjFsexmk=', 1682, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zqVIjFsexmk=', 1682, -1000, 1000),DecodeDecimal('t3nyKF/Kkzk=', 1682, -1000, 1000),DecodeDecimal('t3nyKF/Kkzk=', 1682, -1000, 1000));
    question.answers.length = 0;
    question.num = 93;
    question.isSingleAns = false;
    question.shortTextQuestion = "93. ��������� �� �����. � �������� ������������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aGzyP4eLL/g=', 1684, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� ��� ���������� ����� ���� ������������� ������������ ���� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aGzyP4eLL/g=', 1686, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������������� ��� �� ������� �������� ��� ������ ����������� ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UOoPYDMuLNA=', 1688, -1, 1);
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
    var weight = DecodeNumber('HkaaJj5F0T8=', 1692, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HkaaJj5F0T8=', 1692, -1000, 1000),DecodeDecimal('jVFbR6cHOGI=', 1692, -1000, 1000),DecodeDecimal('jVFbR6cHOGI=', 1692, -1000, 1000));
    question.answers.length = 0;
    question.num = 94;
    question.isSingleAns = false;
    question.shortTextQuestion = "94. ��������� �� �����. � �������� ����������� ���� �������� ��� ������������ ��������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HkaaJj5F0T8=', 1694, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ������ � ������������ ��������� ��� ��������� ���������� ���� �������� ��� ��� �������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Jk5iQ8fhLIU=', 1696, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� ��� ��������� ���������� ���� �������� ��� ��� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EYkuzu0Y4Ec=', 1698, -1, 1);
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
    var weight = DecodeNumber('L9b2RxLFEV8=', 1702, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L9b2RxLFEV8=', 1702, -1000, 1000),DecodeDecimal('Xj9oxqAQJdU=', 1702, -1000, 1000),DecodeDecimal('Xj9oxqAQJdU=', 1702, -1000, 1000));
    question.answers.length = 0;
    question.num = 95;
    question.isSingleAns = false;
    question.shortTextQuestion = "95. ��������� �� �����. � �������� ��������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pXrQDwwE6rQ=', 1704, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� �� ������ ������������ ���� �� ��������� ������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pXrQDwwE6rQ=', 1706, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���� ��� ��������� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IGW1ZjX8tO4=', 1708, -1, 1);
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
    var weight = DecodeNumber('TjSSa1s73Ls=', 1712, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TjSSa1s73Ls=', 1712, -1000, 1000),DecodeDecimal('ZGNe7NhIR/8=', 1712, -1000, 1000),DecodeDecimal('ZGNe7NhIR/8=', 1712, -1000, 1000));
    question.answers.length = 0;
    question.num = 96;
    question.isSingleAns = false;
    question.shortTextQuestion = "96. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('juE4uz/uPfs=', 1714, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ��������� �� ��� ����������� ��������� ������� ���� ����� �����������, �������� ���� ����.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('juE4uz/uPfs=', 1716, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ��������� �� ��� ����������� ��������� ������� ���� ����� �����������, �������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IGuO+wBiXfU=', 1718, -1, 1);
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
    var weight = DecodeNumber('k9E7aBDzIyE=', 1722, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('k9E7aBDzIyE=', 1722, -1000, 1000),DecodeDecimal('/90t5FgQWDU=', 1722, -1000, 1000),DecodeDecimal('/90t5FgQWDU=', 1722, -1000, 1000));
    question.answers.length = 0;
    question.num = 97;
    question.isSingleAns = false;
    question.shortTextQuestion = "97. ��������� �� �����. � ����� ��� ������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wjBHSwvYkAk=', 1724, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� ����������� ����� ���� ��������� �� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wjBHSwvYkAk=', 1726, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������������� ��� � ����� ���� ��������� �� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6x7evZLFw60=', 1728, -1, 1);
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
    var weight = DecodeNumber('Nx/cOy8nP0o=', 1732, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Nx/cOy8nP0o=', 1732, -1000, 1000),DecodeDecimal('QD6/s94B3DU=', 1732, -1000, 1000),DecodeDecimal('QD6/s94B3DU=', 1732, -1000, 1000));
    question.answers.length = 0;
    question.num = 98;
    question.isSingleAns = false;
    question.shortTextQuestion = "98. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ldSiXjlaTw8=', 1734, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ������������ ���������� ��������� ���� ��� ����� ������������ (edit) > �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ldSiXjlaTw8=', 1736, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ���������� ���������� ��������� ���� ��� ����� ������ (file).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5VBLmgJIlo8=', 1738, -1, 1);
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
    var weight = DecodeNumber('s07sAQ5qXtY=', 1742, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('s07sAQ5qXtY=', 1742, -1000, 1000),DecodeDecimal('w6mz/5Ec9cM=', 1742, -1000, 1000),DecodeDecimal('w6mz/5Ec9cM=', 1742, -1000, 1000));
    question.answers.length = 0;
    question.num = 99;
    question.isSingleAns = false;
    question.shortTextQuestion = "99. ��������� �� �����. � ���� ����������� ��� �������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('s07sAQ5qXtY=', 1744, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��������� �������� ��� �� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jeOS5QLVEqg=', 1746, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �� ������� ��� ��� ������/���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lksqCUlxRTk=', 1748, -1, 1);
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
    var weight = DecodeNumber('c7ENbZYut+E=', 1752, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('c7ENbZYut+E=', 1752, -1000, 1000),DecodeDecimal('qjR1OpNKPzU=', 1752, -1000, 1000),DecodeDecimal('qjR1OpNKPzU=', 1752, -1000, 1000));
    question.answers.length = 0;
    question.num = 100;
    question.isSingleAns = false;
    question.shortTextQuestion = "100. ��������� �� �����. ���� ��������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('c7ENbZYut+E=', 1754, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� � ������� ����������/������������� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HLIo+tIjReg=', 1756, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������� � ������� �������� ���������� ���� ������������ ���� �������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gHr1iYmleCA=', 1758, -1, 1);
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
    var weight = DecodeNumber('DmSBQ1+TS8k=', 1762, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DmSBQ1+TS8k=', 1762, -1000, 1000),DecodeDecimal('OLl8wZUvf3g=', 1762, -1000, 1000),DecodeDecimal('OLl8wZUvf3g=', 1762, -1000, 1000));
    question.answers.length = 0;
    question.num = 101;
    question.isSingleAns = false;
    question.shortTextQuestion = "101. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DmSBQ1+TS8k=', 1764, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� ������������� ��� ��� �������� ������� ������� ��� �����������, ��� �� ����������� ���.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('txGDhf9EM5Q=', 1766, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����������� ������ �� ������������ ��� � �������� ���.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('txGDhf9EM5Q=', 1768, -1, 1);
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
    var weight = DecodeNumber('xqCD2Yk7Ty0=', 1772, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xqCD2Yk7Ty0=', 1772, -1000, 1000),DecodeDecimal('ieittm8BcvE=', 1772, -1000, 1000),DecodeDecimal('ieittm8BcvE=', 1772, -1000, 1000));
    question.answers.length = 0;
    question.num = 102;
    question.isSingleAns = false;
    question.shortTextQuestion = "102. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XKkDMOcWaIU=', 1774, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����������� ������ �� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XKkDMOcWaIU=', 1776, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����������� ����� ��������� ��� ��� ������ �� ������������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g9H+6EYgebE=', 1778, -1, 1);
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
    var weight = DecodeNumber('XrvK8PnqXqA=', 1782, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XrvK8PnqXqA=', 1782, -1000, 1000),DecodeDecimal('4XFBeCJKFT8=', 1782, -1000, 1000),DecodeDecimal('4XFBeCJKFT8=', 1782, -1000, 1000));
    question.answers.length = 0;
    question.num = 103;
    question.isSingleAns = false;
    question.shortTextQuestion = "103. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XrvK8PnqXqA=', 1784, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������������ ��������������� ��������� ��������������� ��� �� ������������� ���� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UuZT/Ycsfx4=', 1786, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������������ ��������������� ��������� ��������������� ��� �� ������� � ������� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gmNErTiX6uA=', 1788, -1, 1);
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
    var weight = DecodeNumber('lrNmjiF7fuw=', 1792, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lrNmjiF7fuw=', 1792, -1000, 1000),DecodeDecimal('4nxbdNrRi0A=', 1792, -1000, 1000),DecodeDecimal('4nxbdNrRi0A=', 1792, -1000, 1000));
    question.answers.length = 0;
    question.num = 104;
    question.isSingleAns = false;
    question.shortTextQuestion = "104. ��������� �� �����. � ������������ ��������������� ��������� ������� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gYkz5B3MsOI=', 1794, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �� ����� ������������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gYkz5B3MsOI=', 1796, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� �� ����� ��� ������ ��� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wwQgF27wNeo=', 1798, -1, 1);
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
    var weight = DecodeNumber('vQbd5Zwqr9Q=', 1802, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vQbd5Zwqr9Q=', 1802, -1000, 1000),DecodeDecimal('LWuALOfSi0E=', 1802, -1000, 1000),DecodeDecimal('LWuALOfSi0E=', 1802, -1000, 1000));
    question.answers.length = 0;
    question.num = 105;
    question.isSingleAns = false;
    question.shortTextQuestion = "105. ��������� �� �����. ��� �� �������� ��� ���������� ���� ������ ����������� ��� ����������� ��������������� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hKM1a7R3Phc=', 1804, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ���� ������ ��� �����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hKM1a7R3Phc=', 1806, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��� ����� ��� ������������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W33+DF0+YeE=', 1808, -1, 1);
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
    var weight = DecodeNumber('8I2RkY0q2EM=', 1812, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8I2RkY0q2EM=', 1812, -1000, 1000),DecodeDecimal('9eHndLlMuXM=', 1812, -1000, 1000),DecodeDecimal('9eHndLlMuXM=', 1812, -1000, 1000));
    question.answers.length = 0;
    question.num = 106;
    question.isSingleAns = false;
    question.shortTextQuestion = "106. ��������� �� �����. ��� �� ������� �������� ��� �������������� �������� ���� ����������� ��� ����������� ��������������� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8I2RkY0q2EM=', 1814, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���� ��� �������� ��� ������ �������� ��� �� (��� �����).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dWxlWWEnVh8=', 1816, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� �������� ��� ������ �������� ��� enter.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dWxlWWEnVh8=', 1818, -1, 1);
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
    var weight = DecodeNumber('stcya2IXv4c=', 1822, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('stcya2IXv4c=', 1822, -1000, 1000),DecodeDecimal('IkcpgsW+XHI=', 1822, -1000, 1000),DecodeDecimal('IkcpgsW+XHI=', 1822, -1000, 1000));
    question.answers.length = 0;
    question.num = 107;
    question.isSingleAns = false;
    question.shortTextQuestion = "107. ��������� �� �����. ��� �� ��������� ��� �������������� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zyRBThdmi2k=', 1824, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���������� ��� ������� ���� ��� ��������� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zyRBThdmi2k=', 1826, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ����� ���� ���� ���.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pFeSt2VME9c=', 1828, -1, 1);
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
    var weight = DecodeNumber('FFJc248Bz24=', 1832, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FFJc248Bz24=', 1832, -1000, 1000),DecodeDecimal('BYQY7hxB8X8=', 1832, -1000, 1000),DecodeDecimal('BYQY7hxB8X8=', 1832, -1000, 1000));
    question.answers.length = 0;
    question.num = 108;
    question.isSingleAns = false;
    question.shortTextQuestion = "108. ��������� �� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FFJc248Bz24=', 1834, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. �� ���������� ����� ����������� ������������ �������� Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PQvXFMjY7qw=', 1836, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. �� ���������� ����� ����������� ��� ��� Adobe Systems.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ddz4vOe4nPw=', 1838, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���������� ����� ����������� ��� ��� Mac OS.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rvZI+GVfQnU=', 1840, -1, 1);
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
    var weight = DecodeNumber('TrOecJMzZ8k=', 1842, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TrOecJMzZ8k=', 1842, -1000, 1000),DecodeDecimal('p7QMaq431KE=', 1842, -1000, 1000),DecodeDecimal('p7QMaq431KE=', 1842, -1000, 1000));
    question.answers.length = 0;
    question.num = 109;
    question.isSingleAns = false;
    question.shortTextQuestion = "109. ��������� �� �����. �� ���� ���������� ��� ������������� ������������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TrOecJMzZ8k=', 1844, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3SBeqpp9hE0=', 1846, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �������� ��������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('klhac/JysmY=', 1848, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �������� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AntMqC2Qk8I=', 1850, -1, 1);
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
    var weight = DecodeNumber('mQhBsWcFdVs=', 1852, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mQhBsWcFdVs=', 1852, -1000, 1000),DecodeDecimal('CrvQFKEP6mQ=', 1852, -1000, 1000),DecodeDecimal('CrvQFKEP6mQ=', 1852, -1000, 1000));
    question.answers.length = 0;
    question.num = 110;
    question.isSingleAns = false;
    question.shortTextQuestion = "110. ��������� �� �����. �� ��������������� �������� ������������� �� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mQhBsWcFdVs=', 1854, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� ��� ��� ���������� ���ܻ.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J2i9O3FDWZA=', 1856, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ��������� ��� �� �������� ������� ���� ���� �����������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J2i9O3FDWZA=', 1858, -1, 1);
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
    var weight = DecodeNumber('02mno/weIxY=', 1862, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('02mno/weIxY=', 1862, -1000, 1000),DecodeDecimal('FCnKBU71foY=', 1862, -1000, 1000),DecodeDecimal('FCnKBU71foY=', 1862, -1000, 1000));
    question.answers.length = 0;
    question.num = 111;
    question.isSingleAns = false;
    question.shortTextQuestion = "111. ��������� �� �����. ������� ��������� ��� ����������� ��� Photoshop ���� �������������� ��������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('02mno/weIxY=', 1864, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. K���� �������� �� Photoshop ������� ��� ��������� �������� �� ������� Alt + Control + Shift.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RxC2X22pPWA=', 1866, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ ��� �������� Control + Shift + Backspace.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RxC2X22pPWA=', 1868, -1, 1);
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
    var weight = DecodeNumber('Ry19OpBPP7U=', 1872, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ry19OpBPP7U=', 1872, -1000, 1000),DecodeDecimal('jlUnCig0Bco=', 1872, -1000, 1000),DecodeDecimal('jlUnCig0Bco=', 1872, -1000, 1000));
    question.answers.length = 0;
    question.num = 112;
    question.isSingleAns = false;
    question.shortTextQuestion = "112. ��������� �� �����. � ���������ܻ ��������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GEd/adC7n6A=', 1874, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ����� ������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GEd/adC7n6A=', 1876, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� ����� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('esXvIPyscA4=', 1878, -1, 1);
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
    var weight = DecodeNumber('HtBZ5DvpqWs=', 1882, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HtBZ5DvpqWs=', 1882, -1000, 1000),DecodeDecimal('JTFRIuNNkMg=', 1882, -1000, 1000),DecodeDecimal('JTFRIuNNkMg=', 1882, -1000, 1000));
    question.answers.length = 0;
    question.num = 113;
    question.isSingleAns = false;
    question.shortTextQuestion = "113. ��������� �� �����. ��� �� ����������� � ��������� ���� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uCV1DR3TsqI=', 1884, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� Custom ��� ���������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uCV1DR3TsqI=', 1886, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� View on line.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x1BWtCLh8Ms=', 1888, -1, 1);
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
    var weight = DecodeNumber('OSTBflAc9Sg=', 1892, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OSTBflAc9Sg=', 1892, -1000, 1000),DecodeDecimal('VSg/8/UE6+Y=', 1892, -1000, 1000),DecodeDecimal('VSg/8/UE6+Y=', 1892, -1000, 1000));
    question.answers.length = 0;
    question.num = 114;
    question.isSingleAns = false;
    question.shortTextQuestion = "114. ��������� �� �����. � ������� Kuler �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OSTBflAc9Sg=', 1894, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ��������� ���������� ��� ����������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MIL4hZdjKw4=', 1896, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������� �� ������ �������� � ������� ��� ����� ������������ ��� ��� online ��������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MIL4hZdjKw4=', 1898, -1, 1);
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
    var weight = DecodeNumber('V3IVYHmu4ws=', 1902, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('V3IVYHmu4ws=', 1902, -1000, 1000),DecodeDecimal('rHQoDfh66eo=', 1902, -1000, 1000),DecodeDecimal('rHQoDfh66eo=', 1902, -1000, 1000));
    question.answers.length = 0;
    question.num = 115;
    question.isSingleAns = false;
    question.shortTextQuestion = "115. ��������� �� �����. ���� ������ ����������� ��� ��� �������������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('V3IVYHmu4ws=', 1904, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ���� ��� ����� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+WHGxydRbPU=', 1906, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ���� ��� ����� ��� ���������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+WHGxydRbPU=', 1908, -1, 1);
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
    var weight = DecodeNumber('vf6rt6/pIrA=', 1912, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vf6rt6/pIrA=', 1912, -1000, 1000),DecodeDecimal('Gb/nXUC6M+g=', 1912, -1000, 1000),DecodeDecimal('Gb/nXUC6M+g=', 1912, -1000, 1000));
    question.answers.length = 0;
    question.num = 116;
    question.isSingleAns = false;
    question.shortTextQuestion = "116. ��������� �� �����. �� ��� �������� �� ���������� ��� �������� �������, �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vf6rt6/pIrA=', 1914, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���������� ������� ��� ��� ��������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zhaY4KPVYk0=', 1916, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� ��������� ������� ����������� ������� ��� Photoshop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pCWuOoN5940=', 1918, -1, 1);
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
    var weight = DecodeNumber('ZAJ0gTTNI9M=', 1922, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZAJ0gTTNI9M=', 1922, -1000, 1000),DecodeDecimal('LRNFJ2OS+qs=', 1922, -1000, 1000),DecodeDecimal('LRNFJ2OS+qs=', 1922, -1000, 1000));
    question.answers.length = 0;
    question.num = 117;
    question.isSingleAns = false;
    question.shortTextQuestion = "117. ��������� �� �����. � ������� �uler ��������������� ���:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZAJ0gTTNI9M=', 1924, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ��������� �������� �������.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Y2De1p+ojfA=', 1926, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ����, ����������� ��� ���������� ������� �� ��� ������.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LEkuJYqx1hg=', 1928, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� ���������� ��� ������� �������.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZEsZVoxasHQ=', 1930, -1, 1);
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
    var weight = DecodeNumber('i6KtyWpdwss=', 1932, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i6KtyWpdwss=', 1932, -1000, 1000),DecodeDecimal('kFDv9uRY/eY=', 1932, -1000, 1000),DecodeDecimal('kFDv9uRY/eY=', 1932, -1000, 1000));
    question.answers.length = 0;
    question.num = 118;
    question.isSingleAns = false;
    question.shortTextQuestion = "118. ��������� �� �����: ��� �������� ������� ��� ����������� ������ ��� Mac OS, ���������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i6KtyWpdwss=', 1934, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. WIA";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f5ob/01Jk0U=', 1936, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Image Capture";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f5ob/01Jk0U=', 1938, -1, 1);
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
    var weight = DecodeNumber('jxKzWDzbr2o=', 1942, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jxKzWDzbr2o=', 1942, -1000, 1000),DecodeDecimal('Pvvlj6Opkyg=', 1942, -1000, 1000),DecodeDecimal('Pvvlj6Opkyg=', 1942, -1000, 1000));
    question.answers.length = 0;
    question.num = 119;
    question.isSingleAns = false;
    question.shortTextQuestion = "119. ��������� �� �����: �������� ������� ��� ������ �� ������� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qjzAP2ksxrU=', 1944, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� File ��� import ��� ���� ���� ��� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qjzAP2ksxrU=', 1946, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� Edit ��� ���� ���� import";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('F8RAYDH1/h4=', 1948, -1, 1);
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
    var weight = DecodeNumber('zRgC63B97Rc=', 1952, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zRgC63B97Rc=', 1952, -1000, 1000),DecodeDecimal('4W+VtPed0Gk=', 1952, -1000, 1000),DecodeDecimal('4W+VtPed0Gk=', 1952, -1000, 1000));
    question.answers.length = 0;
    question.num = 120;
    question.isSingleAns = false;
    question.shortTextQuestion = "120. ��������� �� �����: ��� �� �������� �� ���������� ��������� ��� �������� ����� �� ������� � ������� ���������������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zRgC63B97Rc=', 1954, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ������������� � ������ ����������������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dygPXrZLdOQ=', 1956, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �� ��������������� � ������ ����������������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dygPXrZLdOQ=', 1958, -1, 1);
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
    var weight = DecodeNumber('q9phhSIAEVI=', 1962, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('q9phhSIAEVI=', 1962, -1000, 1000),DecodeDecimal('YzEB7gCCzUU=', 1962, -1000, 1000),DecodeDecimal('YzEB7gCCzUU=', 1962, -1000, 1000));
    question.answers.length = 0;
    question.num = 121;
    question.isSingleAns = false;
    question.shortTextQuestion = "121. ��������� �� �����: ��� �������� �� ����� ���� ����� ��� ����������� ��� ���������� ��������� ���� �������;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EjHakVlXYdQ=', 1964, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��� ����� ������� ��� ���� ������� ������� �������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EjHakVlXYdQ=', 1966, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ����� ������ ��� ���� ������� ������� �������� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0ZbW92ywvGA=', 1968, -1, 1);
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
    var weight = DecodeNumber('gohqbAkU69I=', 1972, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gohqbAkU69I=', 1972, -1000, 1000),DecodeDecimal('UA1qdGs+XD4=', 1972, -1000, 1000),DecodeDecimal('UA1qdGs+XD4=', 1972, -1000, 1000));
    question.answers.length = 0;
    question.num = 122;
    question.isSingleAns = false;
    question.shortTextQuestion = "122. ��������� �� �����: � ������� ������ ��������� ����ܻ:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gohqbAkU69I=', 1974, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� �� ���� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Criyn9c+r/0=', 1976, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ���� �� ��� ������� ��� ����������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cjm+Or3tj84=', 1978, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ���� �� ��� ����������� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kMle0pLjXfc=', 1980, -1, 1);
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
    var weight = DecodeNumber('PAZ0ru4JFbw=', 1982, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PAZ0ru4JFbw=', 1982, -1000, 1000),DecodeDecimal('coOCC7TBv9U=', 1982, -1000, 1000),DecodeDecimal('coOCC7TBv9U=', 1982, -1000, 1000));
    question.answers.length = 0;
    question.num = 123;
    question.isSingleAns = false;
    question.shortTextQuestion = "123. ��������� �� ����� � ������� ��������� ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+V7CyivAuDY=', 1984, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ���� ��� �������� ��� �������� Curves";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+V7CyivAuDY=', 1986, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� �� ���������� �� �������� �� ������ ����������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8O5qFTcuXsM=', 1988, -1, 1);
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
    var weight = DecodeNumber('NCRUVU39kBs=', 1992, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NCRUVU39kBs=', 1992, -1000, 1000),DecodeDecimal('NbM/N1GqYGc=', 1992, -1000, 1000),DecodeDecimal('NbM/N1GqYGc=', 1992, -1000, 1000));
    question.answers.length = 0;
    question.num = 124;
    question.isSingleAns = false;
    question.shortTextQuestion = "124. ��������� �� ����� � ������� Curves ���������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NCRUVU39kBs=', 1994, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� �������� (Adjustment layer)";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wVJoZBmEf0U=', 1996, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. �� �������� ������� ��� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ieF8xfqmwac=', 1998, -1, 1);
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
    var weight = DecodeNumber('+e/ukQeM7To=', 2002, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+e/ukQeM7To=', 2002, -1000, 1000),DecodeDecimal('iXObLTHfAUc=', 2002, -1000, 1000),DecodeDecimal('iXObLTHfAUc=', 2002, -1000, 1000));
    question.answers.length = 0;
    question.num = 125;
    question.isSingleAns = false;
    question.shortTextQuestion = "125. ��������� �� ����� ��� �������� Levels  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+e/ukQeM7To=', 2004, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������� ����� �������� ���������� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cDAeQbewmYw=', 2006, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� �� ������� ��������� �� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/nQjMWXQpNE=', 2008, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���� �� ������� ��������� �� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5MwtBsrLM0w=', 2010, -1, 1);
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
    var weight = DecodeNumber('mS3BqJB5l80=', 2012, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mS3BqJB5l80=', 2012, -1000, 1000),DecodeDecimal('cltQaWrbiWg=', 2012, -1000, 1000),DecodeDecimal('cltQaWrbiWg=', 2012, -1000, 1000));
    question.answers.length = 0;
    question.num = 126;
    question.isSingleAns = false;
    question.shortTextQuestion = "126. ��������� �� ����� �� �� �������� Levels:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mS3BqJB5l80=', 2014, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y13rQR9FsH8=', 2016, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "� ������������ �� �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9NbnOmakPMk=', 2018, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������ ����������� �� ������� ��� �������� �� ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SLyR5wcQGOw=', 2020, -1, 1);
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
    var weight = DecodeNumber('oFm0Ky9IM4I=', 2022, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oFm0Ky9IM4I=', 2022, -1000, 1000),DecodeDecimal('nmfm38ZeOFw=', 2022, -1000, 1000),DecodeDecimal('nmfm38ZeOFw=', 2022, -1000, 1000));
    question.answers.length = 0;
    question.num = 127;
    question.isSingleAns = false;
    question.shortTextQuestion = "127. ��������� �� ����� � ������ anti-aliased :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aOD9959s1D0=', 2024, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� �� ���� ���� �������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aOD9959s1D0=', 2026, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� �� ���� ���� �������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8p7wBxKVf6U=', 2028, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������ �� ���� ���� �������� ��� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YDUW2fAMLaw=', 2030, -1, 1);
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
    var weight = DecodeNumber('vzi4RUJVU3E=', 2032, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vzi4RUJVU3E=', 2032, -1000, 1000),DecodeDecimal('A/5pTbo1pQo=', 2032, -1000, 1000),DecodeDecimal('A/5pTbo1pQo=', 2032, -1000, 1000));
    question.answers.length = 0;
    question.num = 128;
    question.isSingleAns = false;
    question.shortTextQuestion = "128. ��������� �� ����� ��� �������� ���������� �������� �� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vzi4RUJVU3E=', 2034, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Linear, Radial";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NXoZZjZbTGA=', 2036, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Angle.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/LrbnVS7kok=', 2038, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. Diamond, Reflected, Linear, Radial";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FCKONxspJwo=', 2040, -1, 1);
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
    var weight = DecodeNumber('rLA6HLeVf84=', 2042, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rLA6HLeVf84=', 2042, -1000, 1000),DecodeDecimal('NgDPnH5XkG8=', 2042, -1000, 1000),DecodeDecimal('NgDPnH5XkG8=', 2042, -1000, 1000));
    question.answers.length = 0;
    question.num = 129;
    question.isSingleAns = false;
    question.shortTextQuestion = "129. ��������� �� ����� �� �������� linear :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9ILOlngRQbY=', 2044, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ���������� ���� ����� ���� ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9ILOlngRQbY=', 2046, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ���������� ���� ����� ���� ����������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1f2WiO4neTM=', 2048, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ���������� �� ������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oaTHrz0PdnU=', 2050, -1, 1);
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
    var weight = DecodeNumber('rqb4hV4jayc=', 2052, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rqb4hV4jayc=', 2052, -1000, 1000),DecodeDecimal('iYqoRwGCUAQ=', 2052, -1000, 1000),DecodeDecimal('iYqoRwGCUAQ=', 2052, -1000, 1000));
    question.answers.length = 0;
    question.num = 130;
    question.isSingleAns = false;
    question.shortTextQuestion = "130. ��������� �� �����: �� �� �������� ����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rqb4hV4jayc=', 2054, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �������, ������� ��� �������� ������� ��� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MZoOHRjHnw4=', 2056, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������������� ��� ����������� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2Izzjti9RLo=', 2058, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ������� ��� ���� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TKjdmvTFDkw=', 2060, -1, 1);
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
    var weight = DecodeNumber('0QlufrOfPbw=', 2062, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0QlufrOfPbw=', 2062, -1000, 1000),DecodeDecimal('8vdei2iNLHQ=', 2062, -1000, 1000),DecodeDecimal('8vdei2iNLHQ=', 2062, -1000, 1000));
    question.answers.length = 0;
    question.num = 131;
    question.isSingleAns = false;
    question.shortTextQuestion = "131. ��������� �� �����: ��� �� ������� �� ���������� ������� ��� ������� ���, �� ����� ������ ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0QlufrOfPbw=', 2064, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Shift+ Alt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VlkA68bLw44=', 2066, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. Shift+ Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eH7WP/m7lI0=', 2068, -1, 1);
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
    var weight = DecodeNumber('pyjhlLma0qI=', 2072, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pyjhlLma0qI=', 2072, -1000, 1000),DecodeDecimal('bU77j42HykA=', 2072, -1000, 1000),DecodeDecimal('bU77j42HykA=', 2072, -1000, 1000));
    question.answers.length = 0;
    question.num = 132;
    question.isSingleAns = false;
    question.shortTextQuestion = "132. ��������� �� �����: ��� �������� �������� � �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NoCIGfYgnuE=', 2074, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ���� ��� ������ ������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NoCIGfYgnuE=', 2076, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ��������������� ���� ���� ������ ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('69MvCiFQzlU=', 2078, -1, 1);
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
    var weight = DecodeNumber('yTeO/zYcUQM=', 2082, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yTeO/zYcUQM=', 2082, -1000, 1000),DecodeDecimal('8JCceumBZu4=', 2082, -1000, 1000),DecodeDecimal('8JCceumBZu4=', 2082, -1000, 1000));
    question.answers.length = 0;
    question.num = 133;
    question.isSingleAns = false;
    question.shortTextQuestion = "133. ��������� �� �����: ��� ������������ ����� ����������� ���:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yTeO/zYcUQM=', 2084, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Vc5AELPLl7w=', 2086, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JbxZPhlAVho=', 2088, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/P2SGytYyN4=', 2090, -1, 1);
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
    var weight = DecodeNumber('2xWuNTd2RLA=', 2092, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2xWuNTd2RLA=', 2092, -1000, 1000),DecodeDecimal('rD3oZ5Tc31k=', 2092, -1000, 1000),DecodeDecimal('rD3oZ5Tc31k=', 2092, -1000, 1000));
    question.answers.length = 0;
    question.num = 134;
    question.isSingleAns = false;
    question.shortTextQuestion = "134. ��������� �� �����: � �������� ��� ����� ��� ����������� �������� ��������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2xWuNTd2RLA=', 2094, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VUM0NxwMBBg=', 2096, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wgGZ6cqx0vo=', 2098, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('C++EtCVFtjc=', 2100, -1, 1);
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
    var weight = DecodeNumber('9POGQjgDkd0=', 2102, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9POGQjgDkd0=', 2102, -1000, 1000),DecodeDecimal('C84BHmVAq9g=', 2102, -1000, 1000),DecodeDecimal('C84BHmVAq9g=', 2102, -1000, 1000));
    question.answers.length = 0;
    question.num = 135;
    question.isSingleAns = false;
    question.shortTextQuestion = "135. ��������� �� �����: ��� �������� ��� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9POGQjgDkd0=', 2104, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lSIz0CRnkHg=', 2106, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Pp45lwC49mM=', 2108, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ���������� �� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('K1ravu8hbE8=', 2110, -1, 1);
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
    var weight = DecodeNumber('hh1Y3mBsuRc=', 2112, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hh1Y3mBsuRc=', 2112, -1000, 1000),DecodeDecimal('qhman+btKyo=', 2112, -1000, 1000),DecodeDecimal('qhman+btKyo=', 2112, -1000, 1000));
    question.answers.length = 0;
    question.num = 136;
    question.isSingleAns = false;
    question.shortTextQuestion = "136. ��������� �� �����: ��� �������� ���� ������������ �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hh1Y3mBsuRc=', 2114, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('35nks7odxAU=', 2116, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v9bNTsE9j7w=', 2118, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �������� �������� ��� �� ����� �������� ����� ��� ������� ��� �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MZfBxzeMbns=', 2120, -1, 1);
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
    var weight = DecodeNumber('2rfBHj/V8II=', 2122, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2rfBHj/V8II=', 2122, -1000, 1000),DecodeDecimal('vkrS1cg5U+M=', 2122, -1000, 1000),DecodeDecimal('vkrS1cg5U+M=', 2122, -1000, 1000));
    question.answers.length = 0;
    question.num = 137;
    question.isSingleAns = false;
    question.shortTextQuestion = "137. ��������� �� ����� �� ����� ������ ������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('P+0NtOv/qR8=', 2124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ��� �������� �� �������� �� Shift";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P+0NtOv/qR8=', 2126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� �������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('409lJWbRIXU=', 2128, -1, 1);
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
    var weight = DecodeNumber('QnqrasuH1LQ=', 2132, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QnqrasuH1LQ=', 2132, -1000, 1000),DecodeDecimal('MUNwfo/lzW8=', 2132, -1000, 1000),DecodeDecimal('MUNwfo/lzW8=', 2132, -1000, 1000));
    question.answers.length = 0;
    question.num = 138;
    question.isSingleAns = false;
    question.shortTextQuestion = "138. ��������� �� ����� ��� ��������������� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QnqrasuH1LQ=', 2134, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ������� ����������� �� ������������ �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g7fBBVDF5vE=', 2136, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ������� ����������� �� ������������ �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g7fBBVDF5vE=', 2138, -1, 1);
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
    var weight = DecodeNumber('O9ouu6xjpPU=', 2142, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O9ouu6xjpPU=', 2142, -1000, 1000),DecodeDecimal('1McTxSif5nA=', 2142, -1000, 1000),DecodeDecimal('1McTxSif5nA=', 2142, -1000, 1000));
    question.answers.length = 0;
    question.num = 139;
    question.isSingleAns = false;
    question.shortTextQuestion = "139. ��������� �� ����� � ������ ����������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O9ouu6xjpPU=', 2144, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ��������� ��� �������� �� ����� ������� ��� 100%";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kxk6NMFoNLg=', 2146, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ���������� ��� �������� �� ����� ������� ��� 1%";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zrZ972nh2lo=', 2148, -1, 1);
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
    var weight = DecodeNumber('q3KDX8Fw+W4=', 2152, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('q3KDX8Fw+W4=', 2152, -1000, 1000),DecodeDecimal('3vvb4J1G1HU=', 2152, -1000, 1000),DecodeDecimal('3vvb4J1G1HU=', 2152, -1000, 1000));
    question.answers.length = 0;
    question.num = 140;
    question.isSingleAns = false;
    question.shortTextQuestion = "140. ��������� �� ����� ��� ��� ����������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kRkQAZcnXsA=', 2154, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���� ����������� ��� ������������� ������ ���� ������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kRkQAZcnXsA=', 2156, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ���� ����������� ��� ������������� ������ ���� ������ ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qtxVpO9chqo=', 2158, -1, 1);
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
    var weight = DecodeNumber('h1VUrvgrGwA=', 2162, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h1VUrvgrGwA=', 2162, -1000, 1000),DecodeDecimal('3WHvPvRM9S8=', 2162, -1000, 1000),DecodeDecimal('3WHvPvRM9S8=', 2162, -1000, 1000));
    question.answers.length = 0;
    question.num = 141;
    question.isSingleAns = false;
    question.shortTextQuestion = "141. ��������� �� ����� � �������� ���� �������� ��������� �������� ������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h1VUrvgrGwA=', 2164, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ���� ����������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JpS487C52vY=', 2166, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� ������������ ����� ����� ��� ������ �������� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JpS487C52vY=', 2168, -1, 1);
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
    var weight = DecodeNumber('D+Y52olGgfk=', 2172, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('D+Y52olGgfk=', 2172, -1000, 1000),DecodeDecimal('NW9LthKrpZ8=', 2172, -1000, 1000),DecodeDecimal('NW9LthKrpZ8=', 2172, -1000, 1000));
    question.answers.length = 0;
    question.num = 142;
    question.isSingleAns = false;
    question.shortTextQuestion = "142. ��������� �� ����� � ������� ����������� ��� pixel ���� �������� ��������� ���������� � �������������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('D+Y52olGgfk=', 2174, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� �� ����� ��� �������������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dkkIRxk8eM8=', 2176, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ������� ���� ��� ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TTLVlhL2NfM=', 2178, -1, 1);
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
    var weight = DecodeNumber('F1A7Y38Bai4=', 2182, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('F1A7Y38Bai4=', 2182, -1000, 1000),DecodeDecimal('cEEOeZ5nP7I=', 2182, -1000, 1000),DecodeDecimal('cEEOeZ5nP7I=', 2182, -1000, 1000));
    question.answers.length = 0;
    question.num = 143;
    question.isSingleAns = false;
    question.shortTextQuestion = "143. ��������� �� ����� �� �������� ��� ����� ��� ������ �������� ������� ��� ���� �����������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('F1A7Y38Bai4=', 2184, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4YM7XOWCoE8=', 2186, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('G833tTWVX4s=', 2188, -1, 1);
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
    var weight = DecodeNumber('a4wETbapGf4=', 2192, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('a4wETbapGf4=', 2192, -1000, 1000),DecodeDecimal('aAuDUu+6Wds=', 2192, -1000, 1000),DecodeDecimal('aAuDUu+6Wds=', 2192, -1000, 1000));
    question.answers.length = 0;
    question.num = 144;
    question.isSingleAns = false;
    question.shortTextQuestion = "144. ��������� �� ����� � ������� �������� ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('a4wETbapGf4=', 2194, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ������������ ��� ������� ��� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TxdF9nxVYHM=', 2196, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� �� ���������� ���������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NvyvGqVHLuY=', 2198, -1, 1);
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
    var weight = DecodeNumber('2zojsgBZrJE=', 2202, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2zojsgBZrJE=', 2202, -1000, 1000),DecodeDecimal('bUQNABDXZAI=', 2202, -1000, 1000),DecodeDecimal('bUQNABDXZAI=', 2202, -1000, 1000));
    question.answers.length = 0;
    question.num = 145;
    question.isSingleAns = false;
    question.shortTextQuestion = "145. ��������� �� ����� ��� �������� ��� �� ���������� ������� ������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2zojsgBZrJE=', 2204, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� Control+ ���� ������ ��� ��� �� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PAa/CBY8A/A=', 2206, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ��������� ��� ����������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oMZ9CUfv5is=', 2208, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��������� ��� ����������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('S3FR+CkqAUs=', 2210, -1, 1);
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
    var weight = DecodeNumber('PZwbAIwU2j0=', 2212, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PZwbAIwU2j0=', 2212, -1000, 1000),DecodeDecimal('FoPI68EUM/M=', 2212, -1000, 1000),DecodeDecimal('FoPI68EUM/M=', 2212, -1000, 1000));
    question.answers.length = 0;
    question.num = 146;
    question.isSingleAns = false;
    question.shortTextQuestion = "146. ��������� �� ����� ��� ������� ������ �� ������� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PZwbAIwU2j0=', 2214, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('n8J78bvlWLs=', 2216, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ����������� �������� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZBwGFVjV3qk=', 2218, -1, 1);
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
    var weight = DecodeNumber('rPjliiUc+eQ=', 2222, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rPjliiUc+eQ=', 2222, -1000, 1000),DecodeDecimal('eOnPGCybjfU=', 2222, -1000, 1000),DecodeDecimal('eOnPGCybjfU=', 2222, -1000, 1000));
    question.answers.length = 0;
    question.num = 147;
    question.isSingleAns = false;
    question.shortTextQuestion = "147. ��������� �� ����� ��� ��� �������� ��� ������ �� ������� ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fU2uwFVXIR0=', 2224, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� �������� ����� ��� ������� ������ ��� ��� �������� ������ ���� ���������� ��� ������� ���� ��� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fU2uwFVXIR0=', 2226, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ����� ���� ��� ������ ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4eK5/aUHUaE=', 2228, -1, 1);
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
    var weight = DecodeNumber('9L2KpQ4PYqQ=', 2232, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9L2KpQ4PYqQ=', 2232, -1000, 1000),DecodeDecimal('MHJvMpj5cgs=', 2232, -1000, 1000),DecodeDecimal('MHJvMpj5cgs=', 2232, -1000, 1000));
    question.answers.length = 0;
    question.num = 148;
    question.isSingleAns = false;
    question.shortTextQuestion = "148. ��������� �� ����� � ������� ��� ����������� ��� ������� ��������� ���� ������ ��� ��������� � ��� �������� ��� �������� ����� ��������� ��������� ������� ��:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9L2KpQ4PYqQ=', 2234, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ��������� ����� ��������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0IGQZaKKYBg=', 2236, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���� ��� ������������� ����� ����� ��� ������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0IGQZaKKYBg=', 2238, -1, 1);
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
    var weight = DecodeNumber('VERke1884X8=', 2242, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VERke1884X8=', 2242, -1000, 1000),DecodeDecimal('wa3tW3DQjLM=', 2242, -1000, 1000),DecodeDecimal('wa3tW3DQjLM=', 2242, -1000, 1000));
    question.answers.length = 0;
    question.num = 149;
    question.isSingleAns = false;
    question.shortTextQuestion = "149. ��������� �� ����� ��� �� ��������� ��� �������� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VERke1884X8=', 2244, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ����� ���� ��� ����� ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('d6n/fuz5whE=', 2246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ������ ��� ������ ������ ���";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('d6n/fuz5whE=', 2248, -1, 1);
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
    var weight = DecodeNumber('0OmddFhXG9s=', 2252, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0OmddFhXG9s=', 2252, -1000, 1000),DecodeDecimal('77BZdqpSR8M=', 2252, -1000, 1000),DecodeDecimal('77BZdqpSR8M=', 2252, -1000, 1000));
    question.answers.length = 0;
    question.num = 150;
    question.isSingleAns = false;
    question.shortTextQuestion = "150. ��������� �� ����� �� �������� ���������� �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2GkVsSOH6/w=', 2254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��������� ����� �������� �� �� ��������� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2GkVsSOH6/w=', 2256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ������������ �������� ��� ��� �������� �� �� ��������� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pZHcC587Jrw=', 2258, -1, 1);
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
    var weight = DecodeNumber('fBxwRYUQ7oA=', 2262, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fBxwRYUQ7oA=', 2262, -1000, 1000),DecodeDecimal('NtMB26BDE0A=', 2262, -1000, 1000),DecodeDecimal('NtMB26BDE0A=', 2262, -1000, 1000));
    question.answers.length = 0;
    question.num = 151;
    question.isSingleAns = false;
    question.shortTextQuestion = "151. ��������� �� ����� � ������� ���������� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fBxwRYUQ7oA=', 2264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� �� ��������� �� ��� ����� � ��������� ���� ��������� ��� �������� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9ZZUl0usBPU=', 2266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ��������� ��������� ��������� ������ ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9ZZUl0usBPU=', 2268, -1, 1);
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
    var weight = DecodeNumber('4kkptjy/yYw=', 2272, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4kkptjy/yYw=', 2272, -1000, 1000),DecodeDecimal('rbjzqR0mA8U=', 2272, -1000, 1000),DecodeDecimal('rbjzqR0mA8U=', 2272, -1000, 1000));
    question.answers.length = 0;
    question.num = 152;
    question.isSingleAns = false;
    question.shortTextQuestion = "152. ��������� �� ����� ��� �� ���������� ��� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7oX+r8ih/Ps=', 2274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � ������� ���������� ��� ���� ���� ��� ����� ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7oX+r8ih/Ps=', 2276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������������� ���� �� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tzXL7iPVQgY=', 2278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QEonsDidH6s=', 2280, -1, 1);
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
    var weight = DecodeNumber('+mJI4Z0JFvY=', 2282, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+mJI4Z0JFvY=', 2282, -1000, 1000),DecodeDecimal('Kwk0zY9RY3w=', 2282, -1000, 1000),DecodeDecimal('Kwk0zY9RY3w=', 2282, -1000, 1000));
    question.answers.length = 0;
    question.num = 153;
    question.isSingleAns = false;
    question.shortTextQuestion = "153. ��������� �� ����� ��� �� ������� �� ������� ��� ������������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cEko/js8oxE=', 2284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� ��� ������ ��������� ���������� � ������ ��������� ��� ���� �������� � ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cEko/js8oxE=', 2286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ���� ���� ������ ��������� ��� �� �������� � ������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Sj/Fi1rbcuI=', 2288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vmYsuimQb5I=', 2290, -1, 1);
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
    var weight = DecodeNumber('dwV2rdeeFMo=', 2292, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dwV2rdeeFMo=', 2292, -1000, 1000),DecodeDecimal('sDJ0+VmDsvg=', 2292, -1000, 1000),DecodeDecimal('sDJ0+VmDsvg=', 2292, -1000, 1000));
    question.answers.length = 0;
    question.num = 154;
    question.isSingleAns = false;
    question.shortTextQuestion = "154. ��������� �� ����� � ����� ��� ��������� �������� ���� ������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dwV2rdeeFMo=', 2294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ������� ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y5AhOP0knkU=', 2296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� Control + C ��� ���� �� control +V";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DQRUws8UkV0=', 2298, -1, 1);
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
    var weight = DecodeNumber('aw+iD+7blko=', 2302, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aw+iD+7blko=', 2302, -1000, 1000),DecodeDecimal('BBAkrXcZmQg=', 2302, -1000, 1000),DecodeDecimal('BBAkrXcZmQg=', 2302, -1000, 1000));
    question.answers.length = 0;
    question.num = 155;
    question.isSingleAns = false;
    question.shortTextQuestion = "155. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aw+iD+7blko=', 2304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� ��� ��� �������� �� ���� ��� ���������� ��������� ���� ������ ����������/paths";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K7ZnOx8sYqg=', 2306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������� ��� ��� �������� �� ������� ���� ��������� �������� ��� ���� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xubWcSDP7xw=', 2308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� ��� ��� �������� �� alt + ���� ��� ������� �������� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tms3kAKxZVs=', 2310, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ���� �� � ���� �� �";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('tms3kAKxZVs=', 2312, -1, 1);
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
    var weight = DecodeNumber('gXdvTy4sBnQ=', 2312, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gXdvTy4sBnQ=', 2312, -1000, 1000),DecodeDecimal('zWXYc4eZtRk=', 2312, -1000, 1000),DecodeDecimal('zWXYc4eZtRk=', 2312, -1000, 1000));
    question.answers.length = 0;
    question.num = 156;
    question.isSingleAns = false;
    question.shortTextQuestion = "156. ��������� �� ����� �� ������������� ��������� ������������ ��� Windows ��� Mac �� ����� �������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gXdvTy4sBnQ=', 2314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kfpT28P7oXw=', 2316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. JPEG2000";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ko29owsg8mI=', 2318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. PDF";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+1hgG9q6uWg=', 2320, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. TIFF";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('D8Fm0D2TFHU=', 2322, -1, 1);
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
    var weight = DecodeNumber('D8Fm0D2TFHU=', 2322, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('D8Fm0D2TFHU=', 2322, -1000, 1000),DecodeDecimal('nHsPYLW4u70=', 2322, -1000, 1000),DecodeDecimal('nHsPYLW4u70=', 2322, -1000, 1000));
    question.answers.length = 0;
    question.num = 157;
    question.isSingleAns = false;
    question.shortTextQuestion = "157. ��������� �� �����: ��� �� ����� ������� ��� ��������:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0Zn+JXD2g8E=', 2324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ������������� ��������� ��� ���� ��� ������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0Zn+JXD2g8E=', 2326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ������������� ��������� ��� ����� ���� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hzlLmhJ63wM=', 2328, -1, 1);
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
    var weight = DecodeNumber('F6+lz1KXnPE=', 2332, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('F6+lz1KXnPE=', 2332, -1000, 1000),DecodeDecimal('3cVrrjxiBD8=', 2332, -1000, 1000),DecodeDecimal('3cVrrjxiBD8=', 2332, -1000, 1000));
    question.answers.length = 0;
    question.num = 158;
    question.isSingleAns = false;
    question.shortTextQuestion = "158. ��������� �� �����: � ������ ����������� (feathering) �����:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('M1uKZTeHdlY=', 2334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� �� �������� ��� �� ���������� �������������� ��� �������������� ��� ���� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M1uKZTeHdlY=', 2336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� ��� ��������������� ��� ������������ �� �� ����� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pcipyMzNSu4=', 2338, -1, 1);
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
    var weight = DecodeNumber('jjHXgu4i3iE=', 2342, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jjHXgu4i3iE=', 2342, -1000, 1000),DecodeDecimal('XnWsWovawvs=', 2342, -1000, 1000),DecodeDecimal('XnWsWovawvs=', 2342, -1000, 1000));
    question.answers.length = 0;
    question.num = 159;
    question.isSingleAns = false;
    question.shortTextQuestion = "159. ��������� �� �����: � ������ ��������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rQQMIGy7vlM=', 2344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� �� ������� ���� ���� �������� ��� �������� ��� ������������� pixel";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rQQMIGy7vlM=', 2346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� ��������� �� ��� �� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/MzLz4fBWBA=', 2348, -1, 1);
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
    var weight = DecodeNumber('pAGon5i8coI=', 2352, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pAGon5i8coI=', 2352, -1000, 1000),DecodeDecimal('vBmCvRiEOtw=', 2352, -1000, 1000),DecodeDecimal('vBmCvRiEOtw=', 2352, -1000, 1000));
    question.answers.length = 0;
    question.num = 160;
    question.isSingleAns = false;
    question.shortTextQuestion = "160. ��������� �� ����� �� ������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pAGon5i8coI=', 2354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �� ����� ��� ������ ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6ERRXqKcIEM=', 2356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� �������� Alt ��� ���� ��� ��������� ��� ���� ����� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6ERRXqKcIEM=', 2358, -1, 1);
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
    var weight = DecodeNumber('x6LcUv/Jz/k=', 2362, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x6LcUv/Jz/k=', 2362, -1000, 1000),DecodeDecimal('WniqZbMZaIY=', 2362, -1000, 1000),DecodeDecimal('WniqZbMZaIY=', 2362, -1000, 1000));
    question.answers.length = 0;
    question.num = 161;
    question.isSingleAns = false;
    question.shortTextQuestion = "161. ��������� �� ����� �������� �������� ��������� �� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x6LcUv/Jz/k=', 2364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��������� �������� ��� ���� ������� �������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DaqPIBc4NOU=', 2366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������� ��� ��������� ��� ���� ������ Backspace � Delete";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zDU6WRKz5Pg=', 2368, -1, 1);
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
    var weight = DecodeNumber('cOZGRva3RIE=', 2372, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cOZGRva3RIE=', 2372, -1000, 1000),DecodeDecimal('JERIfPFAE+U=', 2372, -1000, 1000),DecodeDecimal('JERIfPFAE+U=', 2372, -1000, 1000));
    question.answers.length = 0;
    question.num = 162;
    question.isSingleAns = false;
    question.shortTextQuestion = "162. ��������� �� ����� � ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('a+biGBA/jwg=', 2374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� ���� ��� ��� ������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a+biGBA/jwg=', 2376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ���� ��� �� ����� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NmZ6g4BGTyc=', 2378, -1, 1);
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
    var weight = DecodeNumber('k47+ZXwmWsk=', 2382, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('k47+ZXwmWsk=', 2382, -1000, 1000),DecodeDecimal('eOAjFsrJGPI=', 2382, -1000, 1000),DecodeDecimal('eOAjFsrJGPI=', 2382, -1000, 1000));
    question.answers.length = 0;
    question.num = 163;
    question.isSingleAns = false;
    question.shortTextQuestion = "163. ��������� �� ����� ���� ���������� �������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('k47+ZXwmWsk=', 2384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ����������� ����� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1+nkG6Mdat0=', 2386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ��������������/���������������� �� ������������ ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xyeZ5albCXo=', 2388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������� � ����� ��������� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('N1WW+6Q6wnE=', 2390, -1, 1);
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
    var weight = DecodeNumber('W69tY6q22Fg=', 2392, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('W69tY6q22Fg=', 2392, -1000, 1000),DecodeDecimal('tKAId5oi5n0=', 2392, -1000, 1000),DecodeDecimal('tKAId5oi5n0=', 2392, -1000, 1000));
    question.answers.length = 0;
    question.num = 164;
    question.isSingleAns = false;
    question.shortTextQuestion = "164. ��������� �� ����� ��� ��� �������� ������� �� ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7AAFthEhnY0=', 2394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � �������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7AAFthEhnY0=', 2396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������� ������������� ������������� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1sfxPvIjfrc=', 2398, -1, 1);
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
    var weight = DecodeNumber('hNxHdT3ny/U=', 2402, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hNxHdT3ny/U=', 2402, -1000, 1000),DecodeDecimal('b1MSMl9ZiK8=', 2402, -1000, 1000),DecodeDecimal('b1MSMl9ZiK8=', 2402, -1000, 1000));
    question.answers.length = 0;
    question.num = 165;
    question.isSingleAns = false;
    question.shortTextQuestion = "165. ��������� �� ����� � �������� ������� ����������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('46LJfbODqog=', 2404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('46LJfbODqog=', 2406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RKl84qKKMx0=', 2408, -1, 1);
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
    var weight = DecodeNumber('8u5aD8IgKVQ=', 2412, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8u5aD8IgKVQ=', 2412, -1000, 1000),DecodeDecimal('ChmDzdDwGfA=', 2412, -1000, 1000),DecodeDecimal('ChmDzdDwGfA=', 2412, -1000, 1000));
    question.answers.length = 0;
    question.num = 166;
    question.isSingleAns = false;
    question.shortTextQuestion = "166. ��������� �� ����� ��� ������ �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('riJWMYJszw4=', 2414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ���������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('riJWMYJszw4=', 2416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����� ������� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qTsLs26VvEg=', 2418, -1, 1);
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
    var weight = DecodeNumber('Mr7xLZdRsWQ=', 2422, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Mr7xLZdRsWQ=', 2422, -1000, 1000),DecodeDecimal('u3TlocbWBD0=', 2422, -1000, 1000),DecodeDecimal('u3TlocbWBD0=', 2422, -1000, 1000));
    question.answers.length = 0;
    question.num = 167;
    question.isSingleAns = false;
    question.shortTextQuestion = "167. ��������� �� ����� �� �� ����� ������ :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Mr7xLZdRsWQ=', 2424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ���������� ��������� ���� ����� ���� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('quQjQfUIOBs=', 2426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ����������� � �������� ��� �� ��� ��� ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YTLAnFpS09U=', 2428, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ������ ������� ��� ��� ������ �� ������� ���������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/14bxi8kLUc=', 2430, -1, 1);
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
    var weight = DecodeNumber('Bovtm6Cx7ps=', 2432, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Bovtm6Cx7ps=', 2432, -1000, 1000),DecodeDecimal('swSLDfhhFxo=', 2432, -1000, 1000),DecodeDecimal('swSLDfhhFxo=', 2432, -1000, 1000));
    question.answers.length = 0;
    question.num = 168;
    question.isSingleAns = false;
    question.shortTextQuestion = "168. ��������� �� ����� ��� ������ ������ �� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bovtm6Cx7ps=', 2434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� ������� ���� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ClsrTKiKxUc=', 2436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q4GtWdeK8pg=', 2438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ��������� ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UhwEFFjYxEc=', 2440, -1, 1);
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
    var weight = DecodeNumber('oJhDMPfrzXQ=', 2442, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oJhDMPfrzXQ=', 2442, -1000, 1000),DecodeDecimal('hVVytS6vnAY=', 2442, -1000, 1000),DecodeDecimal('hVVytS6vnAY=', 2442, -1000, 1000));
    question.answers.length = 0;
    question.num = 169;
    question.isSingleAns = false;
    question.shortTextQuestion = "169. ��������� �� ����� �� ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oJhDMPfrzXQ=', 2444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ��� ��� �� ������ ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cR/YHHTCM9w=', 2446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ��� ������� ��� ����������� ��� ���� ���� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('P825G1qAZRU=', 2448, -1, 1);
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
    var weight = DecodeNumber('zQ+2rMWQ93k=', 2452, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zQ+2rMWQ93k=', 2452, -1000, 1000),DecodeDecimal('E6QPsJ7rzMQ=', 2452, -1000, 1000),DecodeDecimal('E6QPsJ7rzMQ=', 2452, -1000, 1000));
    question.answers.length = 0;
    question.num = 170;
    question.isSingleAns = false;
    question.shortTextQuestion = "170. ��������� �� ����� �� ��� ������ Lab:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dRdiz1NE7aM=', 2454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������� �� ����������� �� ����������� ��������� ��� �������� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dRdiz1NE7aM=', 2456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����������� �� ����������� ����������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YDvQWRtqTQ0=', 2458, -1, 1);
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
    var weight = DecodeNumber('ubYN5Zqibxk=', 2462, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ubYN5Zqibxk=', 2462, -1000, 1000),DecodeDecimal('YtBZDU8iUlE=', 2462, -1000, 1000),DecodeDecimal('YtBZDU8iUlE=', 2462, -1000, 1000));
    question.answers.length = 0;
    question.num = 171;
    question.isSingleAns = false;
    question.shortTextQuestion = "171. ��������� �� ����� � ������ ���������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ubYN5Zqibxk=', 2464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ����� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g0T7awzytsY=', 2466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ����� ��� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g0T7awzytsY=', 2468, -1, 1);
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
    var weight = DecodeNumber('bIKYDu47eOM=', 2472, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bIKYDu47eOM=', 2472, -1000, 1000),DecodeDecimal('/DwSw4MZgBc=', 2472, -1000, 1000),DecodeDecimal('/DwSw4MZgBc=', 2472, -1000, 1000));
    question.answers.length = 0;
    question.num = 172;
    question.isSingleAns = false;
    question.shortTextQuestion = "172. ��������� �� ����� ������ ��� �� ������������ ��� ����� :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eRmwNMYmiqc=', 2474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ������-cutout-���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eRmwNMYmiqc=', 2476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ���� - ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('acD8RXRo3bA=', 2478, -1, 1);
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
    var weight = DecodeNumber('aspAqi7FOpA=', 2482, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aspAqi7FOpA=', 2482, -1000, 1000),DecodeDecimal('MuhLgGQH0QA=', 2482, -1000, 1000),DecodeDecimal('MuhLgGQH0QA=', 2482, -1000, 1000));
    question.answers.length = 0;
    question.num = 173;
    question.isSingleAns = false;
    question.shortTextQuestion = "173. ��������� �� ����� �� ������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lFDtyZbNcvI=', 2484, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ��������� ��� ������ ��� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lFDtyZbNcvI=', 2486, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� ���� � ������ �������� �������� ��������������� ����� ��������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XHBVyQLqoO8=', 2488, -1, 1);
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
    var weight = DecodeNumber('7cpcvXuAd/A=', 2492, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7cpcvXuAd/A=', 2492, -1000, 1000),DecodeDecimal('9PNKZuiILis=', 2492, -1000, 1000),DecodeDecimal('9PNKZuiILis=', 2492, -1000, 1000));
    question.answers.length = 0;
    question.num = 174;
    question.isSingleAns = false;
    question.shortTextQuestion = "174. ��������� �� ����� ������ ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7cpcvXuAd/A=', 2494, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ���� ���� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('q/+VxpUhVaY=', 2496, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������ ����������� �� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q/+VxpUhVaY=', 2498, -1, 1);
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
    var weight = DecodeNumber('Ofr21qKPTFA=', 2502, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ofr21qKPTFA=', 2502, -1000, 1000),DecodeDecimal('8qDZ2J5FUDQ=', 2502, -1000, 1000),DecodeDecimal('8qDZ2J5FUDQ=', 2502, -1000, 1000));
    question.answers.length = 0;
    question.num = 175;
    question.isSingleAns = false;
    question.shortTextQuestion = "175. ��������� �� ����� � ������� Sumi-e  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ofr21qKPTFA=', 2504, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ���� ������ ��� �������� �� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ac4boEfu22Y=', 2506, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ���� ���� �� ������� ����� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ac4boEfu22Y=', 2508, -1, 1);
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
    var weight = DecodeNumber('AKsim0RvPoU=', 2512, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AKsim0RvPoU=', 2512, -1000, 1000),DecodeDecimal('bpLOyJdQmhE=', 2512, -1000, 1000),DecodeDecimal('bpLOyJdQmhE=', 2512, -1000, 1000));
    question.answers.length = 0;
    question.num = 176;
    question.isSingleAns = false;
    question.shortTextQuestion = "176. ��������� �� ����� �� ��� zigzag  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JgJ8ODSt4LA=', 2514, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �������� ��� �������, ������� �� ��� ������ ��� pixel ���� ������� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JgJ8ODSt4LA=', 2516, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������� �� ����� zigzag";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jJ4W3Y64GFA=', 2518, -1, 1);
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
    var weight = DecodeNumber('PE1vY8XslD0=', 2522, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PE1vY8XslD0=', 2522, -1000, 1000),DecodeDecimal('oDan3nHMj5s=', 2522, -1000, 1000),DecodeDecimal('oDan3nHMj5s=', 2522, -1000, 1000));
    question.answers.length = 0;
    question.num = 177;
    question.isSingleAns = false;
    question.shortTextQuestion = "177. ��������� �� ����� �� ������ ���������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PE1vY8XslD0=', 2524, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��������� ���� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EZiPEKB/Qtc=', 2526, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��������� ��� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('py4Ga/Jbuqk=', 2528, -1, 1);
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
    var weight = DecodeNumber('o4LmssHtxlA=', 2532, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('o4LmssHtxlA=', 2532, -1000, 1000),DecodeDecimal('HKUcq4zgmKQ=', 2532, -1000, 1000),DecodeDecimal('HKUcq4zgmKQ=', 2532, -1000, 1000));
    question.answers.length = 0;
    question.num = 178;
    question.isSingleAns = false;
    question.shortTextQuestion = "178. ��������� �� ����� �� ������ �������� �ezzo  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/enMrvnjM50=', 2534, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��� ������ �� ������ ������ ����������� �������� � ������ ���������� ���������� ��� ������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/enMrvnjM50=', 2536, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������ �� �������� ��� ���� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bvSO8vAm3TI=', 2538, -1, 1);
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
    var weight = DecodeNumber('GIdlRfFOvJc=', 2542, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GIdlRfFOvJc=', 2542, -1000, 1000),DecodeDecimal('kzC8KIGN8tI=', 2542, -1000, 1000),DecodeDecimal('kzC8KIGN8tI=', 2542, -1000, 1000));
    question.answers.length = 0;
    question.num = 179;
    question.isSingleAns = false;
    question.shortTextQuestion = "179. ��������� �� ����� � ������ ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iNeY3H3Qux0=', 2544, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������ ��� ��������� ������� ��� ������� ����� ��������� ������ ��� ���� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iNeY3H3Qux0=', 2546, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� ������ ��� ��������� ������� ��� ������� ����� ��������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZCsmRNw2WhU=', 2548, -1, 1);
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
    var weight = DecodeNumber('MRlfck9TYQI=', 2552, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MRlfck9TYQI=', 2552, -1000, 1000),DecodeDecimal('39ZJ309txKg=', 2552, -1000, 1000),DecodeDecimal('39ZJ309txKg=', 2552, -1000, 1000));
    question.answers.length = 0;
    question.num = 180;
    question.isSingleAns = false;
    question.shortTextQuestion = "180. ��������� �� ����� �� ����� �� �������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bip1jJyn9XQ=', 2554, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������� �� �������� ��� �� ���������� ��� �� ����� ����������� �� ������ �������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bip1jJyn9XQ=', 2556, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������� ����� �������� ����� ������ ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bICAeHoHqSY=', 2558, -1, 1);
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
    var weight = DecodeNumber('3vxeGsXfcA4=', 2562, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3vxeGsXfcA4=', 2562, -1000, 1000),DecodeDecimal('a2SAO4zT9Zo=', 2562, -1000, 1000),DecodeDecimal('a2SAO4zT9Zo=', 2562, -1000, 1000));
    question.answers.length = 0;
    question.num = 181;
    question.isSingleAns = false;
    question.shortTextQuestion = "181. ��������� �� ����� �� ������ ��� ��������� ��������������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3vxeGsXfcA4=', 2564, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CJ+OQ6jB9Cg=', 2566, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CJ+OQ6jB9Cg=', 2568, -1, 1);
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
    var weight = DecodeNumber('OjjHMCpWY08=', 2572, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OjjHMCpWY08=', 2572, -1000, 1000),DecodeDecimal('P1TfNJpAkF0=', 2572, -1000, 1000),DecodeDecimal('P1TfNJpAkF0=', 2572, -1000, 1000));
    question.answers.length = 0;
    question.num = 182;
    question.isSingleAns = false;
    question.shortTextQuestion = "182. ��������� �� ����� ������ ��� �� ������ ���� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bCgGFfM6Z7Q=', 2574, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Craquelure-������-�������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bCgGFfM6Z7Q=', 2576, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������-�����������-patchwork";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pFzcR+dGK7M=', 2578, -1, 1);
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
    var weight = DecodeNumber('KxoDXTnCwX4=', 2582, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KxoDXTnCwX4=', 2582, -1000, 1000),DecodeDecimal('yNdsVt9jjNI=', 2582, -1000, 1000),DecodeDecimal('yNdsVt9jjNI=', 2582, -1000, 1000));
    question.answers.length = 0;
    question.num = 183;
    question.isSingleAns = false;
    question.shortTextQuestion = "183. ��������� �� ����� �� ������ ������ ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KxoDXTnCwX4=', 2584, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Xtun5u0QM0E=', 2586, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� NTSC";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('X/QXrMA77/4=', 2588, -1, 1);
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
    var weight = DecodeNumber('toSEBry5Eyg=', 2592, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('toSEBry5Eyg=', 2592, -1000, 1000),DecodeDecimal('3PSZ+qIwsB4=', 2592, -1000, 1000),DecodeDecimal('3PSZ+qIwsB4=', 2592, -1000, 1000));
    question.answers.length = 0;
    question.num = 184;
    question.isSingleAns = false;
    question.shortTextQuestion = "184. ��������� �� ����� �� ������ digimarc  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('toSEBry5Eyg=', 2594, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �������������� ���������� ���� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lw79Wnp8P5M=', 2596, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ������������ ��� �� ������������ �� ���������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lw79Wnp8P5M=', 2598, -1, 1);
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
    var weight = DecodeNumber('ne35sLC1v1Y=', 2602, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ne35sLC1v1Y=', 2602, -1000, 1000),DecodeDecimal('KOjVfmgOZ4k=', 2602, -1000, 1000),DecodeDecimal('KOjVfmgOZ4k=', 2602, -1000, 1000));
    question.answers.length = 0;
    question.num = 185;
    question.isSingleAns = false;
    question.shortTextQuestion = "185. ��������� �� ����� ���� ������� ��������� ������� ���� ��� �������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i/ZxBUiqM0c=', 2604, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ���������� ����������� ��� ����� ��� ���� ��������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i/ZxBUiqM0c=', 2606, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ������� ���������� ����������� �� ������� ��� ������������ ���� ���� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pXDYdNY/A1w=', 2608, -1, 1);
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
    var weight = DecodeNumber('0dzc2R3MNeQ=', 2612, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0dzc2R3MNeQ=', 2612, -1000, 1000),DecodeDecimal('v5TPahnOEC4=', 2612, -1000, 1000),DecodeDecimal('v5TPahnOEC4=', 2612, -1000, 1000));
    question.answers.length = 0;
    question.num = 186;
    question.isSingleAns = false;
    question.shortTextQuestion = "186. ��������� �� ����� ���� ������ ������������ �� �������� ��� ��� ����� ������������� ��� ��� ����� ������� �����������;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0dzc2R3MNeQ=', 2614, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������-�����-����� ��� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9qjqkj+CPA4=', 2616, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������-����� � ����-����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9qjqkj+CPA4=', 2618, -1, 1);
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
    var weight = DecodeNumber('kbCh86/ncfc=', 2622, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kbCh86/ncfc=', 2622, -1000, 1000),DecodeDecimal('ZzXgA9e72II=', 2622, -1000, 1000),DecodeDecimal('ZzXgA9e72II=', 2622, -1000, 1000));
    question.answers.length = 0;
    question.num = 187;
    question.isSingleAns = false;
    question.shortTextQuestion = "187. ��������� �� ����� �� ������ ����������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EmXWS58kcfQ=', 2624, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ����� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EmXWS58kcfQ=', 2626, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ����� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KARC+0ccPLI=', 2628, -1, 1);
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
    var weight = DecodeNumber('lDmVbIv0A2E=', 2632, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lDmVbIv0A2E=', 2632, -1000, 1000),DecodeDecimal('iKJyo1HAC7k=', 2632, -1000, 1000),DecodeDecimal('iKJyo1HAC7k=', 2632, -1000, 1000));
    question.answers.length = 0;
    question.num = 188;
    question.isSingleAns = false;
    question.shortTextQuestion = "188. ��������� �� ����� � ������� ���������� ����   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/zEzz+m0Dxc=', 2634, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ��� ����� ������������� ��� �������� ������� ��� ��� �� �������� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/zEzz+m0Dxc=', 2636, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��� ������ ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AwDbpEIO9kg=', 2638, -1, 1);
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
    var weight = DecodeNumber('DeOMkPBiw38=', 2642, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DeOMkPBiw38=', 2642, -1000, 1000),DecodeDecimal('lLr6PvZRkyU=', 2642, -1000, 1000),DecodeDecimal('lLr6PvZRkyU=', 2642, -1000, 1000));
    question.answers.length = 0;
    question.num = 189;
    question.isSingleAns = false;
    question.shortTextQuestion = "189. ��������� �� ����� �� ������ ��� �������� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rPNGbTrM1/I=', 2644, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� �� ������� RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rPNGbTrM1/I=', 2646, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� �� ������� CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('INGv2hQgxeY=', 2648, -1, 1);
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
    var weight = DecodeNumber('8+ZrfJ1I1vE=', 2652, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8+ZrfJ1I1vE=', 2652, -1000, 1000),DecodeDecimal('QrHLSdhE6Q8=', 2652, -1000, 1000),DecodeDecimal('QrHLSdhE6Q8=', 2652, -1000, 1000));
    question.answers.length = 0;
    question.num = 190;
    question.isSingleAns = false;
    question.shortTextQuestion = "190. ��������� �� ����� �� ������������ ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ih8glgRYUwo=', 2654, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������ ���� �� ��� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ih8glgRYUwo=', 2656, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ��� ���������� ������ �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EC4eIn+FpQI=', 2658, -1, 1);
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
    var weight = DecodeNumber('f8QyF7DQKIc=', 2662, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('f8QyF7DQKIc=', 2662, -1000, 1000),DecodeDecimal('VU2I14ve5Yk=', 2662, -1000, 1000),DecodeDecimal('VU2I14ve5Yk=', 2662, -1000, 1000));
    question.answers.length = 0;
    question.num = 191;
    question.isSingleAns = false;
    question.shortTextQuestion = "191. ��������� �� ����� � ����� ��� �������� ��� �������� ��� ��� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JjyHVWit28Q=', 2664, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������ ��� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JjyHVWit28Q=', 2666, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� ���� �� ��� �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pZZRHHlMLvw=', 2668, -1, 1);
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
    var weight = DecodeNumber('zEyF5+hbrjQ=', 2672, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zEyF5+hbrjQ=', 2672, -1000, 1000),DecodeDecimal('8EOIgWG+vIU=', 2672, -1000, 1000),DecodeDecimal('8EOIgWG+vIU=', 2672, -1000, 1000));
    question.answers.length = 0;
    question.num = 192;
    question.isSingleAns = false;
    question.shortTextQuestion = "192. ��������� �� ����� � ����� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QbJgkM8H3G0=', 2674, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� ��� ��� �������� �������� ���� �������� ��� ��� ��������� �������� ��� �������� ��� ���������� ���� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QbJgkM8H3G0=', 2676, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ����� ����� ��� ����������� 100% �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rVXL+5xM6/g=', 2678, -1, 1);
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
    var weight = DecodeNumber('e30Wmv+pHk0=', 2682, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('e30Wmv+pHk0=', 2682, -1000, 1000),DecodeDecimal('eRAvwEpleD0=', 2682, -1000, 1000),DecodeDecimal('eRAvwEpleD0=', 2682, -1000, 1000));
    question.answers.length = 0;
    question.num = 193;
    question.isSingleAns = false;
    question.shortTextQuestion = "193. ��������� �� ����� ��� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e30Wmv+pHk0=', 2684, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ��������� �� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TM7Asuae68Y=', 2686, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �������� �� ��������� �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TM7Asuae68Y=', 2688, -1, 1);
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
    var weight = DecodeNumber('MNFodzGFpIU=', 2692, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MNFodzGFpIU=', 2692, -1000, 1000),DecodeDecimal('s+ZbreQm37Q=', 2692, -1000, 1000),DecodeDecimal('s+ZbreQm37Q=', 2692, -1000, 1000));
    question.answers.length = 0;
    question.num = 194;
    question.isSingleAns = false;
    question.shortTextQuestion = "194. ��������� �� ����� � ���������� ���� ��������/���� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VGDEgjPys2A=', 2694, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� �� ���� ��� ��������� ��� ���� ����� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VGDEgjPys2A=', 2696, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������� �� ���� ��� ����� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XFphPgEfk9o=', 2698, -1, 1);
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
    var weight = DecodeNumber('lwahJuyzndc=', 2702, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lwahJuyzndc=', 2702, -1000, 1000),DecodeDecimal('E+k61dnlgQA=', 2702, -1000, 1000),DecodeDecimal('E+k61dnlgQA=', 2702, -1000, 1000));
    question.answers.length = 0;
    question.num = 195;
    question.isSingleAns = false;
    question.shortTextQuestion = "195. ��������� �� ����� � ������������ ���� layer mask (���� ������ ��������)   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FjFEPPkqAEI=', 2704, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ��� ��� �������� �������� ���� �������� ��� ��� ��������� �������� ��� �������� ��� ���������� ���� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FjFEPPkqAEI=', 2706, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ����� ����� ��� ����������� 100% �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fj64w/jmoKg=', 2708, -1, 1);
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
    var weight = DecodeNumber('jOwlCiuIODM=', 2712, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jOwlCiuIODM=', 2712, -1000, 1000),DecodeDecimal('vVWXCf7Uglg=', 2712, -1000, 1000),DecodeDecimal('vVWXCf7Uglg=', 2712, -1000, 1000));
    question.answers.length = 0;
    question.num = 196;
    question.isSingleAns = false;
    question.shortTextQuestion = "196. ��������� �� ����� �� ����� layer Options  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jOwlCiuIODM=', 2714, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ������� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XKbUaYYcuTI=', 2716, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ������� ���� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LKUxKuZVnoM=', 2718, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ������� ���� �������� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+SmF1vjkguU=', 2720, -1, 1);
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
    var weight = DecodeNumber('xiUyv5p77n0=', 2722, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xiUyv5p77n0=', 2722, -1000, 1000),DecodeDecimal('Pdr7VBVHM9Y=', 2722, -1000, 1000),DecodeDecimal('Pdr7VBVHM9Y=', 2722, -1000, 1000));
    question.answers.length = 0;
    question.num = 197;
    question.isSingleAns = false;
    question.shortTextQuestion = "197. ��������� �� ����� �� ������ 3D ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xiUyv5p77n0=', 2724, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZZzfhh2Cbyg=', 2726, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lNE2l6at7g4=', 2728, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lNE2l6at7g4=', 2730, -1, 1);
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
    var weight = DecodeNumber('r6kU2X4Eh8Y=', 2732, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r6kU2X4Eh8Y=', 2732, -1000, 1000),DecodeDecimal('4/liQmg1u7s=', 2732, -1000, 1000),DecodeDecimal('/P2SGytYyN4=', 2091, -1000, 1000));
    question.answers.length = 0;
    question.num = 198;
    question.isSingleAns = false;
    question.shortTextQuestion = "198. ��������� �� ����� �� ����� ��� �������� ���� ������������ ����������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rD3oZ5Tc31k=', 2093, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5Ez8Ed2RF5I=', 2095, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gX1Y7piVHfc=', 2097, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('b0IbMmFER6g=', 2099, -1, 1);
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
    var weight = DecodeNumber('C84BHmVAq9g=', 2101, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('C84BHmVAq9g=', 2101, -1000, 1000),DecodeDecimal('C++EtCVFtjc=', 2101, -1000, 1000),DecodeDecimal('C++EtCVFtjc=', 2101, -1000, 1000));
    question.answers.length = 0;
    question.num = 199;
    question.isSingleAns = false;
    question.shortTextQuestion = "199. ��������� �� ����� �� ���� ������������ ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4SfIa9XDx7Q=', 2103, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ���� ��� ��� ������� 3D ���� ������ \"�������\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4SfIa9XDx7Q=', 2105, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gEJinJ0jaEk=', 2107, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����������� �� ������ �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6fq2u6fwgjo=', 2109, -1, 1);
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
    var weight = DecodeNumber('qhman+btKyo=', 2111, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qhman+btKyo=', 2111, -1000, 1000),DecodeDecimal('K1ravu8hbE8=', 2111, -1000, 1000),DecodeDecimal('K1ravu8hbE8=', 2111, -1000, 1000));
    question.answers.length = 0;
    question.num = 200;
    question.isSingleAns = false;
    question.shortTextQuestion = "200. ��������� �� ����� ��� ������� �� �� �������� 3D ������ ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qhman+btKyo=', 2113, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HUTwfl/A3Cg=', 2115, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HkEuSDXPC9I=', 2117, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uf2fZt9HyFo=', 2119, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('uf2fZt9HyFo=', 2121, -1, 1);
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
    var weight = DecodeNumber('vkrS1cg5U+M=', 2121, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vkrS1cg5U+M=', 2121, -1000, 1000),DecodeDecimal('MZfBxzeMbns=', 2121, -1000, 1000),DecodeDecimal('MZfBxzeMbns=', 2121, -1000, 1000));
    question.answers.length = 0;
    question.num = 201;
    question.isSingleAns = false;
    question.shortTextQuestion = "201. ��������� �� ����� �� �� ����� ��� ��������� ��� ������� 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j9Fdu+86GFk=', 2123, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ � ������� ��� ������� ����� �� ����������� � ���� ��� ������������ 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j9Fdu+86GFk=', 2125, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ �� ����������� ���� ��� ����� ����������� �� ���";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J3hAKWRYPDo=', 2127, -1, 1);
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
    var weight = DecodeNumber('MUNwfo/lzW8=', 2131, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MUNwfo/lzW8=', 2131, -1000, 1000),DecodeDecimal('Dsu9IUxQevw=', 2131, -1000, 1000),DecodeDecimal('Dsu9IUxQevw=', 2131, -1000, 1000));
    question.answers.length = 0;
    question.num = 202;
    question.isSingleAns = false;
    question.shortTextQuestion = "202. ��������� �� �����: ��� �� ������������ ���� ������������� ������� ��� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cUf1pXX+REY=', 2133, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��������� ������� ��� ���� ���� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cUf1pXX+REY=', 2135, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ���� ��� �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J0XfJa91FVE=', 2137, -1, 1);
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
    var weight = DecodeNumber('1McTxSif5nA=', 2141, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1McTxSif5nA=', 2141, -1000, 1000),DecodeDecimal('jH7R0b+cpzI=', 2141, -1000, 1000),DecodeDecimal('jH7R0b+cpzI=', 2141, -1000, 1000));
    question.answers.length = 0;
    question.num = 203;
    question.isSingleAns = false;
    question.shortTextQuestion = "203. ��������� �� �����: ��� �� ����������� ��� ������� �� ����� 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('P8P6aLW5eD4=', 2143, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� ���� ������������ ����� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P8P6aLW5eD4=', 2145, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������� ��� ��������� ���� �� ����� y";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('w5LZTSG6GHw=', 2147, -1, 1);
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
    var weight = DecodeNumber('3vvb4J1G1HU=', 2151, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3vvb4J1G1HU=', 2151, -1000, 1000),DecodeDecimal('+FHmv3KUaac=', 2151, -1000, 1000),DecodeDecimal('+FHmv3KUaac=', 2151, -1000, 1000));
    question.answers.length = 0;
    question.num = 204;
    question.isSingleAns = false;
    question.shortTextQuestion = "204. ��������� �� �����: ��� �� ����������� �� ������� ���� ����� ��� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tFElfKXugYo=', 2153, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ���� ��� ���� ������������ ������ ������������ ���� �� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tFElfKXugYo=', 2155, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ���� ��� ���� ������������ ������ ������������ ���� �� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Rism+EfkGVg=', 2157, -1, 1);
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
    var weight = DecodeNumber('3WHvPvRM9S8=', 2161, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3WHvPvRM9S8=', 2161, -1000, 1000),DecodeDecimal('KRQrcwExWc8=', 2161, -1000, 1000),DecodeDecimal('KRQrcwExWc8=', 2161, -1000, 1000));
    question.answers.length = 0;
    question.num = 205;
    question.isSingleAns = false;
    question.shortTextQuestion = "205. ��������� �� �����: ���� �������� ������� ������������ �� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3WHvPvRM9S8=', 2163, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� - �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IlvO6Y2D5UM=', 2165, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������-��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hZdi4/SYluQ=', 2167, -1, 1);
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
    var weight = DecodeNumber('NW9LthKrpZ8=', 2171, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NW9LthKrpZ8=', 2171, -1000, 1000),DecodeDecimal('t17VftOVXoI=', 2171, -1000, 1000),DecodeDecimal('t17VftOVXoI=', 2171, -1000, 1000));
    question.answers.length = 0;
    question.num = 206;
    question.isSingleAns = false;
    question.shortTextQuestion = "206. �� ��������� �������� �������� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FomZcZADduE=', 2173, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FomZcZADduE=', 2175, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� �������� ������ �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9LBGWL3BGHs=', 2177, -1, 1);
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
    var weight = DecodeNumber('cEEOeZ5nP7I=', 2181, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cEEOeZ5nP7I=', 2181, -1000, 1000),DecodeDecimal('wotTHVFUtg8=', 2181, -1000, 1000),DecodeDecimal('wotTHVFUtg8=', 2181, -1000, 1000));
    question.answers.length = 0;
    question.num = 207;
    question.isSingleAns = false;
    question.shortTextQuestion = "207. ��������� �� ����� � ������ ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cEEOeZ5nP7I=', 2183, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ����������� ��� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ADgB7qFdbO8=', 2185, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� ����� ��� �������� ��� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ADgB7qFdbO8=', 2187, -1, 1);
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
    var weight = DecodeNumber('aAuDUu+6Wds=', 2191, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aAuDUu+6Wds=', 2191, -1000, 1000),DecodeDecimal('NDzM4O9tO2A=', 2191, -1000, 1000),DecodeDecimal('NDzM4O9tO2A=', 2191, -1000, 1000));
    question.answers.length = 0;
    question.num = 208;
    question.isSingleAns = false;
    question.shortTextQuestion = "208. ��������� �� ����� � ������ �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aAuDUu+6Wds=', 2193, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ������ ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W2F9eYSn8lw=', 2195, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W2F9eYSn8lw=', 2197, -1, 1);
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
    var weight = DecodeNumber('bUQNABDXZAI=', 2201, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bUQNABDXZAI=', 2201, -1000, 1000),DecodeDecimal('K6Xle2tBpXk=', 2201, -1000, 1000),DecodeDecimal('K6Xle2tBpXk=', 2201, -1000, 1000));
    question.answers.length = 0;
    question.num = 209;
    question.isSingleAns = false;
    question.shortTextQuestion = " 209. ��������� �� ����� � �������� ��� ����������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XqrlXiADuBk=', 2203, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��������������� ����� ������������ ��� ������� 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XqrlXiADuBk=', 2205, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��������������� ����� ������������ ��� ������� 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RPwfWTlGRXc=', 2207, -1, 1);
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
    var weight = DecodeNumber('FoPI68EUM/M=', 2211, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FoPI68EUM/M=', 2211, -1000, 1000),DecodeDecimal('S3FR+CkqAUs=', 2211, -1000, 1000),DecodeDecimal('S3FR+CkqAUs=', 2211, -1000, 1000));
    question.answers.length = 0;
    question.num = 210;
    question.isSingleAns = false;
    question.shortTextQuestion = "210. ��������� �� ����� � ��������� ������ �� ����� �� ����� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FoPI68EUM/M=', 2213, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������������ ��� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8Bfv3yjHplY=', 2215, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������������ ��� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8Bfv3yjHplY=', 2217, -1, 1);
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
    var weight = DecodeNumber('eOnPGCybjfU=', 2221, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eOnPGCybjfU=', 2221, -1000, 1000),DecodeDecimal('gwqhuHo46sE=', 2221, -1000, 1000),DecodeDecimal('gwqhuHo46sE=', 2221, -1000, 1000));
    question.answers.length = 0;
    question.num = 211;
    question.isSingleAns = false;
    question.shortTextQuestion = "211. ��������� �� ����� � ������ ���� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eOnPGCybjfU=', 2223, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aaQpDmOX9mY=', 2225, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ��������� �������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aaQpDmOX9mY=', 2227, -1, 1);
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
    var weight = DecodeNumber('MHJvMpj5cgs=', 2231, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MHJvMpj5cgs=', 2231, -1000, 1000),DecodeDecimal('H10Efkygzvc=', 2231, -1000, 1000),DecodeDecimal('H10Efkygzvc=', 2231, -1000, 1000));
    question.answers.length = 0;
    question.num = 212;
    question.isSingleAns = false;
    question.shortTextQuestion = "212. ��������� �� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MHJvMpj5cgs=', 2233, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ��������� � ���������� ��� ���� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NSbEb1sZp94=', 2235, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������� UV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qj3+8i6E1VA=', 2237, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ��� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VlpgMG0zvsg=', 2239, -1, 1);
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
    var weight = DecodeNumber('wa3tW3DQjLM=', 2241, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wa3tW3DQjLM=', 2241, -1000, 1000),DecodeDecimal('FQNEr0TisPQ=', 2241, -1000, 1000),DecodeDecimal('FQNEr0TisPQ=', 2241, -1000, 1000));
    question.answers.length = 0;
    question.num = 213;
    question.isSingleAns = false;
    question.shortTextQuestion = "213. ��������� �� ����� 2. �� ��������� Photoshop Extended ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('s2EUItFaNQE=', 2243, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. 3 ������ ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s2EUItFaNQE=', 2245, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. 6 ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KKTEaRUuSdE=', 2247, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. 16 ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EbzTAN0kWsM=', 2249, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('dbRRZOgF4Ak=', 2251, -1, 1);
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
    var weight = DecodeNumber('77BZdqpSR8M=', 2251, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('77BZdqpSR8M=', 2251, -1000, 1000),DecodeDecimal('ItWSPRBYqOg=', 2251, -1000, 1000),DecodeDecimal('ItWSPRBYqOg=', 2251, -1000, 1000));
    question.answers.length = 0;
    question.num = 214;
    question.isSingleAns = false;
    question.shortTextQuestion = "214. ��������� �� ����� 3. �� �������� ��� ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UiIXxRL4joY=', 2253, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ���� ��� ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UiIXxRL4joY=', 2255, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���� ��� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BV5S1zkw4Kg=', 2257, -1, 1);
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
    var weight = DecodeNumber('NtMB26BDE0A=', 2261, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NtMB26BDE0A=', 2261, -1000, 1000),DecodeDecimal('rPXP1VklTHY=', 2261, -1000, 1000),DecodeDecimal('rPXP1VklTHY=', 2261, -1000, 1000));
    question.answers.length = 0;
    question.num = 215;
    question.isSingleAns = false;
    question.shortTextQuestion = "215. ��������� �� ����� �� ������ �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RO6rbxw0trI=', 2263, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� �� �����, ��� ���������� ��� ��� ���� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RO6rbxw0trI=', 2265, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������/��������� ��� �� ������������ �� ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Uh2G5ufPCl0=', 2267, -1, 1);
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
    var weight = DecodeNumber('rbjzqR0mA8U=', 2271, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rbjzqR0mA8U=', 2271, -1000, 1000),DecodeDecimal('3BhtGpHNU2Q=', 2271, -1000, 1000),DecodeDecimal('3BhtGpHNU2Q=', 2271, -1000, 1000));
    question.answers.length = 0;
    question.num = 216;
    question.isSingleAns = false;
    question.shortTextQuestion = "216. ��������� �� ����� �� ������ ����� ������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rbjzqR0mA8U=', 2273, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� ������ ��������������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AojBOrgTpaI=', 2275, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BnFd2YpxCE0=', 2277, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������������� �� �������� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KH0sV1Y2+nY=', 2279, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Kwk0zY9RY3w=', 2281, -1, 1);
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
    var weight = DecodeNumber('Kwk0zY9RY3w=', 2281, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Kwk0zY9RY3w=', 2281, -1000, 1000),DecodeDecimal('zej2bW000uI=', 2281, -1000, 1000),DecodeDecimal('zej2bW000uI=', 2281, -1000, 1000));
    question.answers.length = 0;
    question.num = 217;
    question.isSingleAns = false;
    question.shortTextQuestion = "217. ��������� �� ����� �� ��� ������ �� ���� ������� ���������� ��� ����� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rAd15s1mCS4=', 2283, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ �� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rAd15s1mCS4=', 2285, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� � ��� ��� �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7AofqYFcgLY=', 2287, -1, 1);
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
    var weight = DecodeNumber('sDJ0+VmDsvg=', 2291, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sDJ0+VmDsvg=', 2291, -1000, 1000),DecodeDecimal('qmvwyPmkluU=', 2291, -1000, 1000),DecodeDecimal('qmvwyPmkluU=', 2291, -1000, 1000));
    question.answers.length = 0;
    question.num = 218;
    question.isSingleAns = false;
    question.shortTextQuestion = "218. ��������� �� ����� � ������� ��������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sDJ0+VmDsvg=', 2293, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� � ������������� ��� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bw6IJmu2d1I=', 2295, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� � ��� ������� �� �� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Bw6IJmu2d1I=', 2297, -1, 1);
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
    var weight = DecodeNumber('BBAkrXcZmQg=', 2301, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BBAkrXcZmQg=', 2301, -1000, 1000),DecodeDecimal('ZjATFIuWuxU=', 2301, -1000, 1000),DecodeDecimal('ZjATFIuWuxU=', 2301, -1000, 1000));
    question.answers.length = 0;
    question.num = 219;
    question.isSingleAns = false;
    question.shortTextQuestion = "219. ��������� �� ����� �� ���� ������������ ���� ������ �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BBAkrXcZmQg=', 2303, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t8PqPwHmd6I=', 2305, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('t8PqPwHmd6I=', 2307, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� ������ ����� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aFo7fxOcCao=', 2309, -1, 1);
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
    var weight = DecodeNumber('zWXYc4eZtRk=', 2311, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zWXYc4eZtRk=', 2311, -1000, 1000),DecodeDecimal('tms3kAKxZVs=', 2311, -1000, 1000),DecodeDecimal('tms3kAKxZVs=', 2311, -1000, 1000));
    question.answers.length = 0;
    question.num = 220;
    question.isSingleAns = false;
    question.shortTextQuestion = "220. ��������� �� ����� � ���������� UV  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('m69ZeEdDA+s=', 2313, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ��� 2D �� ����������� ����� ��� ������� 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('m69ZeEdDA+s=', 2315, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ��������� ���� ��� 2D �� ����������� ����� ��� ������� 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Vv4FQ38c6vg=', 2317, -1, 1);
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
    var weight = DecodeNumber('nHsPYLW4u70=', 2321, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nHsPYLW4u70=', 2321, -1000, 1000),DecodeDecimal('QwqUHzrU8Kg=', 2321, -1000, 1000),DecodeDecimal('QwqUHzrU8Kg=', 2321, -1000, 1000));
    question.answers.length = 0;
    question.num = 221;
    question.isSingleAns = false;
    question.shortTextQuestion = "221. �� ���� 3D ��� Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nHsPYLW4u70=', 2323, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� �� ������ �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wdQAFWb1/d0=', 2325, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �� ������ 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9EjaMHI0aJw=', 2327, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9EjaMHI0aJw=', 2329, -1, 1);
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
    var weight = DecodeNumber('3cVrrjxiBD8=', 2331, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3cVrrjxiBD8=', 2331, -1000, 1000),DecodeDecimal('9zJoq0Qw6ks=', 2331, -1000, 1000),DecodeDecimal('9zJoq0Qw6ks=', 2331, -1000, 1000));
    question.answers.length = 0;
    question.num = 222;
    question.isSingleAns = false;
    question.shortTextQuestion = "222. ��������� �� ����� � ���������������� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vXJTm2iZu98=', 2333, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ���������� ��� ��������� ��� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vXJTm2iZu98=', 2335, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ��������� �� ���������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H6Q9t+fggbw=', 2337, -1, 1);
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
    var weight = DecodeNumber('XnWsWovawvs=', 2341, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XnWsWovawvs=', 2341, -1000, 1000),DecodeDecimal('y4c4x6ISdvw=', 2341, -1000, 1000),DecodeDecimal('y4c4x6ISdvw=', 2341, -1000, 1000));
    question.answers.length = 0;
    question.num = 223;
    question.isSingleAns = false;
    question.shortTextQuestion = "223. ��������� �� ����� �� ��������� Photoshop �������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uXm60XIfRz0=', 2343, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� ������������� �������� ��� �������� ���������� ��� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uXm60XIfRz0=', 2345, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ���������� �� ������� ����� ����� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('s5GB2hWUDb4=', 2347, -1, 1);
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
    var weight = DecodeNumber('vBmCvRiEOtw=', 2351, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vBmCvRiEOtw=', 2351, -1000, 1000),DecodeDecimal('PWI4fveQ3vY=', 2351, -1000, 1000),DecodeDecimal('PWI4fveQ3vY=', 2351, -1000, 1000));
    question.answers.length = 0;
    question.num = 224;
    question.isSingleAns = false;
    question.shortTextQuestion = "224. ��������� �� ����� � ������ ���� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Lg/9UKM2o24=', 2353, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� ����� �� ������������ ��� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Lg/9UKM2o24=', 2355, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������������ �� ������� ����� �� ����� ������ �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gCa7b2aORkw=', 2357, -1, 1);
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
    var weight = DecodeNumber('WniqZbMZaIY=', 2361, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WniqZbMZaIY=', 2361, -1000, 1000),DecodeDecimal('gFjtiKy4rOo=', 2361, -1000, 1000),DecodeDecimal('gFjtiKy4rOo=', 2361, -1000, 1000));
    question.answers.length = 0;
    question.num = 225;
    question.isSingleAns = false;
    question.shortTextQuestion = "225. ��������� �� ����� � ����� ��������� ������� ��� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U7/W3bxnBfs=', 2363, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ��� �������� ��� ����������� �� ���������� ��� ����������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U7/W3bxnBfs=', 2365, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����� ��������� ��� �� ������� ��� �������� �������������� ���� ���� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RXFLYIXY0tg=', 2367, -1, 1);
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
    var weight = DecodeNumber('JERIfPFAE+U=', 2371, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JERIfPFAE+U=', 2371, -1000, 1000),DecodeDecimal('KA8S+35Cym4=', 2371, -1000, 1000),DecodeDecimal('KA8S+35Cym4=', 2371, -1000, 1000));
    question.answers.length = 0;
    question.num = 226;
    question.isSingleAns = false;
    question.shortTextQuestion = "226. ��������� �� ����� �� ����������� �� ��� ���� �������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WxsZ9g0Glz4=', 2373, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ������ � � ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WxsZ9g0Glz4=', 2375, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ����������-��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VTDh+bWcDW0=', 2377, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zaO9qHdhYAo=', 2379, -1, 1);
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
    var weight = DecodeNumber('eOAjFsrJGPI=', 2381, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eOAjFsrJGPI=', 2381, -1000, 1000),DecodeDecimal('vbH9/r/2NhY=', 2381, -1000, 1000),DecodeDecimal('vbH9/r/2NhY=', 2381, -1000, 1000));
    question.answers.length = 0;
    question.num = 227;
    question.isSingleAns = false;
    question.shortTextQuestion = "227. ��������� �� ����� � ���������� �������� 3D ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XqJXItlYnSs=', 2383, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��� ������� �� ������������ �������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XqJXItlYnSs=', 2385, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ����� ������� �� ����������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8GVMUwMbfKA=', 2387, -1, 1);
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
    var weight = DecodeNumber('tKAId5oi5n0=', 2391, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tKAId5oi5n0=', 2391, -1000, 1000),DecodeDecimal('N1WW+6Q6wnE=', 2391, -1000, 1000),DecodeDecimal('N1WW+6Q6wnE=', 2391, -1000, 1000));
    question.answers.length = 0;
    question.num = 228;
    question.isSingleAns = false;
    question.shortTextQuestion = "228. ��������� �� ����� ���� �� ����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qPg6+Fq+gvE=', 2393, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ����� ��� ���������� ������������ ���� ������ 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qPg6+Fq+gvE=', 2395, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� �� ����� ��� ���������� ��� ����������� ������� ������������ ���� ������ 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+iP97Q8dRv4=', 2397, -1, 1);
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
    var weight = DecodeNumber('b1MSMl9ZiK8=', 2401, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b1MSMl9ZiK8=', 2401, -1000, 1000),DecodeDecimal('kUopS0+cVzo=', 2401, -1000, 1000),DecodeDecimal('kUopS0+cVzo=', 2401, -1000, 1000));
    question.answers.length = 0;
    question.num = 229;
    question.isSingleAns = false;
    question.shortTextQuestion = "229. ��������� �� ����� ��� ���������� ������� ������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('E4lI0VJj1M0=', 2403, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � ������� �������� ��� ������ ����� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('E4lI0VJj1M0=', 2405, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� � �������� ���� ������� ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gxDI/AR/I80=', 2407, -1, 1);
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
    var weight = DecodeNumber('ChmDzdDwGfA=', 2411, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ChmDzdDwGfA=', 2411, -1000, 1000),DecodeDecimal('X5Nt/Uj1umk=', 2411, -1000, 1000),DecodeDecimal('X5Nt/Uj1umk=', 2411, -1000, 1000));
    question.answers.length = 0;
    question.num = 230;
    question.isSingleAns = false;
    question.shortTextQuestion = "230. ��������� �� ����� �� �� ��������� ���� �������� 3D �� 2D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wl8EQeIhOL4=', 2413, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������������� �� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wl8EQeIhOL4=', 2415, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������ �� ������� ����������� �� ������� 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dEBibZvaws4=', 2417, -1, 1);
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
    var weight = DecodeNumber('u3TlocbWBD0=', 2421, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('u3TlocbWBD0=', 2421, -1000, 1000),DecodeDecimal('f3Kb3yNy6DY=', 2421, -1000, 1000),DecodeDecimal('f3Kb3yNy6DY=', 2421, -1000, 1000));
    question.answers.length = 0;
    question.num = 231;
    question.isSingleAns = false;
    question.shortTextQuestion = "231. ��������� �� ����� � �������� ������ �������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YzRXzhxGZ1w=', 2423, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� �������� ������� ��� ������� ���� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YzRXzhxGZ1w=', 2425, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��� �������� ������� ��� ��������� ����������� ��� ������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jy/DRFV/NrQ=', 2427, -1, 1);
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
    var weight = DecodeNumber('swSLDfhhFxo=', 2431, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('swSLDfhhFxo=', 2431, -1000, 1000),DecodeDecimal('/14bxi8kLUc=', 2431, -1000, 1000),DecodeDecimal('/14bxi8kLUc=', 2431, -1000, 1000));
    question.answers.length = 0;
    question.num = 232;
    question.isSingleAns = false;
    question.shortTextQuestion = "232. ��������� �� ����� � ���������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jAsopjNgoMU=', 2433, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��� ������ ��������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jAsopjNgoMU=', 2435, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('17dsVnlOKDc=', 2437, -1, 1);
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
    var weight = DecodeNumber('hVVytS6vnAY=', 2441, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hVVytS6vnAY=', 2441, -1000, 1000),DecodeDecimal('UhwEFFjYxEc=', 2441, -1000, 1000),DecodeDecimal('UhwEFFjYxEc=', 2441, -1000, 1000));
    question.answers.length = 0;
    question.num = 233;
    question.isSingleAns = false;
    question.shortTextQuestion = "233. ��������� �� ����� � ��������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6E8VapuS6qk=', 2443, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ����� ���� �� ����������� ���������� �������� ���� ������� �� ���� ��� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6E8VapuS6qk=', 2445, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ���� ������������ ������� ���� �� ������������ ������� �� ���� ��� ��� ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Zw1nHswsrxI=', 2447, -1, 1);
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
    var weight = DecodeNumber('E6QPsJ7rzMQ=', 2451, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E6QPsJ7rzMQ=', 2451, -1000, 1000),DecodeDecimal('19N9/lSL9c8=', 2451, -1000, 1000),DecodeDecimal('19N9/lSL9c8=', 2451, -1000, 1000));
    question.answers.length = 0;
    question.num = 234;
    question.isSingleAns = false;
    question.shortTextQuestion = "234. ��������� �� ����� �� ��� ������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('E6QPsJ7rzMQ=', 2453, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('N8Y8vG7sGuE=', 2455, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������������� ������ (����� ��� ���� �����)";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7oXZaFQ7YNg=', 2457, -1, 1);
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
    var weight = DecodeNumber('YtBZDU8iUlE=', 2461, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YtBZDU8iUlE=', 2461, -1000, 1000),DecodeDecimal('tIEilbyEGg8=', 2461, -1000, 1000),DecodeDecimal('tIEilbyEGg8=', 2461, -1000, 1000));
    question.answers.length = 0;
    question.num = 235;
    question.isSingleAns = false;
    question.shortTextQuestion = "235. ��������� �� ����� � ������������� ��� ���������� ������ (��� ���� ����� )  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YtBZDU8iUlE=', 2463, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ��� ������ ��������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('k3Rk4WlwTRI=', 2465, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ��� ������ ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x3b0ppeAu7w=', 2467, -1, 1);
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
    var weight = DecodeNumber('/DwSw4MZgBc=', 2471, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/DwSw4MZgBc=', 2471, -1000, 1000),DecodeDecimal('RhAD2m9IXEQ=', 2471, -1000, 1000),DecodeDecimal('RhAD2m9IXEQ=', 2471, -1000, 1000));
    question.answers.length = 0;
    question.num = 236;
    question.isSingleAns = false;
    question.shortTextQuestion = "236. ��������� �� ����� � ���������� ��� ���������� ������� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/DwSw4MZgBc=', 2473, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ������ gif �� ��� ������ ���������� ��� web & ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zwSAGKLQCGI=', 2475, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ����� PSD";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sclH9UmVymg=', 2477, -1, 1);
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
    var weight = DecodeNumber('MuhLgGQH0QA=', 2481, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MuhLgGQH0QA=', 2481, -1000, 1000),DecodeDecimal('3J8NXVtmoZI=', 2481, -1000, 1000),DecodeDecimal('3J8NXVtmoZI=', 2481, -1000, 1000));
    question.answers.length = 0;
    question.num = 237;
    question.isSingleAns = false;
    question.shortTextQuestion = "237. ��������� �� ����� �� ������ ��������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ia15Iib0VjI=', 2483, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ��� �� ���������� ��� ���� �� ��� �� ���� ���� ��� ������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ia15Iib0VjI=', 2485, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� ��� �� ���������� ��� ���� ��� �������������� ���� ��� ������ �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LvrJUlIVTmw=', 2487, -1, 1);
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
    var weight = DecodeNumber('9PNKZuiILis=', 2491, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9PNKZuiILis=', 2491, -1000, 1000),DecodeDecimal('lJ7HDe7UoY4=', 2491, -1000, 1000),DecodeDecimal('lJ7HDe7UoY4=', 2491, -1000, 1000));
    question.answers.length = 0;
    question.num = 238;
    question.isSingleAns = false;
    question.shortTextQuestion = "238. ��������� �� ����� � ��������� ���� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9PNKZuiILis=', 2493, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ��������� ���� ������� �� ��� �� ������� ���";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZRVeEeDErNo=', 2495, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ��������� ���� ���������� ������� ���� ������� �� ������������ ���������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZRVeEeDErNo=', 2497, -1, 1);
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
    var weight = DecodeNumber('8qDZ2J5FUDQ=', 2501, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8qDZ2J5FUDQ=', 2501, -1000, 1000),DecodeDecimal('IkjTtpVcM5g=', 2501, -1000, 1000),DecodeDecimal('IkjTtpVcM5g=', 2501, -1000, 1000));
    question.answers.length = 0;
    question.num = 239;
    question.isSingleAns = false;
    question.shortTextQuestion = "239. ��������� �� ����� � ������ ���������� ���� ���� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8qDZ2J5FUDQ=', 2503, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������������� �� ������� ��� ������� �� �� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Z1DidEcT9lI=', 2505, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������� � ������� ��� �������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z1DidEcT9lI=', 2507, -1, 1);
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
    var weight = DecodeNumber('bpLOyJdQmhE=', 2511, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bpLOyJdQmhE=', 2511, -1000, 1000),DecodeDecimal('2F/IRDteUrw=', 2511, -1000, 1000),DecodeDecimal('2F/IRDteUrw=', 2511, -1000, 1000));
    question.answers.length = 0;
    question.num = 240;
    question.isSingleAns = false;
    question.shortTextQuestion = "240. ��������� �� ����� � ������ ������� ������������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kh2Ofi63gQE=', 2513, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� ���� ���� ������������� ���� �� ����������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kh2Ofi63gQE=', 2515, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� ���� ��� �� ��������� �� ������� ��� ����� ����������� ���� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4KHM0Ia8nkM=', 2517, -1, 1);
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
    var weight = DecodeNumber('oDan3nHMj5s=', 2521, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oDan3nHMj5s=', 2521, -1000, 1000),DecodeDecimal('NPezhLONYLw=', 2521, -1000, 1000),DecodeDecimal('NPezhLONYLw=', 2521, -1000, 1000));
    question.answers.length = 0;
    question.num = 241;
    question.isSingleAns = false;
    question.shortTextQuestion = "241. ��������� �� ����� � ������� ��������� ���������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oDan3nHMj5s=', 2523, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� �� ����� ��� ���������� ��� �� ���������� ��� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C3a1qvP3LPg=', 2525, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� ����������� ��� ���� ��� ��������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MCDjhIDns4A=', 2527, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��������� ��� �������� ����������� ������ ���� ������� �� ��� ��������� ����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Fzt+CUt0z1c=', 2529, -1, 1);
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
    var weight = DecodeNumber('HKUcq4zgmKQ=', 2531, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HKUcq4zgmKQ=', 2531, -1000, 1000),DecodeDecimal('V0FxBnbJuzY=', 2531, -1000, 1000),DecodeDecimal('V0FxBnbJuzY=', 2531, -1000, 1000));
    question.answers.length = 0;
    question.num = 242;
    question.isSingleAns = false;
    question.shortTextQuestion = "242. ��������� �� ����� ���������� �� �� ���� ����������� � ������� ���� ��� Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6915/GJoak0=', 2533, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ��� �������� ���� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6915/GJoak0=', 2535, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������ ����� ������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1ogXRLYKMmE=', 2537, -1, 1);
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
    var weight = DecodeNumber('kzC8KIGN8tI=', 2541, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kzC8KIGN8tI=', 2541, -1000, 1000),DecodeDecimal('iG+M+PJ8QmE=', 2541, -1000, 1000),DecodeDecimal('iG+M+PJ8QmE=', 2541, -1000, 1000));
    question.answers.length = 0;
    question.num = 243;
    question.isSingleAns = false;
    question.shortTextQuestion = "243. ��������� �� ����� �� ��������� Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jUuAKkU5KZE=', 2543, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������� �� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jUuAKkU5KZE=', 2545, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������� ���� �� ���� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rX5E6If+TSw=', 2547, -1, 1);
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
    var weight = DecodeNumber('39ZJ309txKg=', 2551, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('39ZJ309txKg=', 2551, -1000, 1000),DecodeDecimal('tXgwW/L8Kmk=', 2551, -1000, 1000),DecodeDecimal('tXgwW/L8Kmk=', 2551, -1000, 1000));
    question.answers.length = 0;
    question.num = 244;
    question.isSingleAns = false;
    question.shortTextQuestion = "244. ��������� �� ����� � ������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('39ZJ309txKg=', 2553, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ��� �������� � ��� �� �������� ��� �������� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YVSRjAZ5T9E=', 2555, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ��� �������� � ��� �� �������� ��� ������������ ����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('esPuljPEumI=', 2557, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ����� ��� ���������� ������� ��� ������������� ��������� ������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('esPuljPEumI=', 2559, -1, 1);
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
    var weight = DecodeNumber('a2SAO4zT9Zo=', 2561, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('a2SAO4zT9Zo=', 2561, -1000, 1000),DecodeDecimal('o4mtwX2h34k=', 2561, -1000, 1000),DecodeDecimal('o4mtwX2h34k=', 2561, -1000, 1000));
    question.answers.length = 0;
    question.num = 245;
    question.isSingleAns = false;
    question.shortTextQuestion = "245. ��������� �� ����� ��� ����� Save as.. � ������� Save Thumbnail  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Oy8yHgIIU1M=', 2563, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� ����������� ������� �� �������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Oy8yHgIIU1M=', 2565, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ��� ������ �� ���������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v7yZehZBEHE=', 2567, -1, 1);
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
    var weight = DecodeNumber('P1TfNJpAkF0=', 2571, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('P1TfNJpAkF0=', 2571, -1000, 1000),DecodeDecimal('gMQcNbKBZo8=', 2571, -1000, 1000),DecodeDecimal('gMQcNbKBZo8=', 2571, -1000, 1000));
    question.answers.length = 0;
    question.num = 246;
    question.isSingleAns = false;
    question.shortTextQuestion = "246. ��������� �� ����� ��� ����������� animation  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ORe/KaC2lto=', 2573, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � ������� ���������� ��������� ��� ����� ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ORe/KaC2lto=', 2575, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� �� ����� � ����������� � ���";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vjstxSQbEbA=', 2577, -1, 1);
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
    var weight = DecodeNumber('yNdsVt9jjNI=', 2581, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yNdsVt9jjNI=', 2581, -1000, 1000),DecodeDecimal('UXbnTdK55wA=', 2581, -1000, 1000),DecodeDecimal('UXbnTdK55wA=', 2581, -1000, 1000));
    question.answers.length = 0;
    question.num = 247;
    question.isSingleAns = false;
    question.shortTextQuestion = "247. ��������� �� ����� ��� ������� �������� ��������, � ���������� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KU+LGYJBPgA=', 2583, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KU+LGYJBPgA=', 2585, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('isEY/8uN0tI=', 2587, -1, 1);
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
    var weight = DecodeNumber('3PSZ+qIwsB4=', 2591, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3PSZ+qIwsB4=', 2591, -1000, 1000),DecodeDecimal('H/+FNFCp57A=', 2591, -1000, 1000),DecodeDecimal('H/+FNFCp57A=', 2591, -1000, 1000));
    question.answers.length = 0;
    question.num = 248;
    question.isSingleAns = false;
    question.shortTextQuestion = "248. ��������� �� ����� � ������ ����� ���� ������� ��� ����� ������� ���� ��� �� ������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sYstN490CMY=', 2593, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sYstN490CMY=', 2595, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E1qasOQwQHE=', 2597, -1, 1);
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
    var weight = DecodeNumber('KOjVfmgOZ4k=', 2601, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KOjVfmgOZ4k=', 2601, -1000, 1000),DecodeDecimal('FF6wsHaHfVc=', 2601, -1000, 1000),DecodeDecimal('FF6wsHaHfVc=', 2601, -1000, 1000));
    question.answers.length = 0;
    question.num = 249;
    question.isSingleAns = false;
    question.shortTextQuestion = "249. ��������� �� ����� �� ������� �������� �������� ������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gmlwWVNC4+w=', 2603, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �������� ������ ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gmlwWVNC4+w=', 2605, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ������ �������� ����������� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1DSZVaf5YyU=', 2607, -1, 1);
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
    var weight = DecodeNumber('v5TPahnOEC4=', 2611, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('v5TPahnOEC4=', 2611, -1000, 1000),DecodeDecimal('WznCVuMdmWg=', 2611, -1000, 1000),DecodeDecimal('WznCVuMdmWg=', 2611, -1000, 1000));
    question.answers.length = 0;
    question.num = 250;
    question.isSingleAns = false;
    question.shortTextQuestion = "250. ��������� �� ����� ���� �� ������� ������� ����� ���������� ��� ��� ���������� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tgMPQtdCOic=', 2613, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �� ����� �������� ���������� �� ���������� ��� ����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tgMPQtdCOic=', 2615, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� ��� �� ����� �������� ���������� �� ������� ��� ����������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UTpTzDs3hMY=', 2617, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rAuWdn4ax9c=', 2619, -1, 1);
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
    var weight = DecodeNumber('ZzXgA9e72II=', 2621, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZzXgA9e72II=', 2621, -1000, 1000),DecodeDecimal('0jIoe3plT+8=', 2621, -1000, 1000),DecodeDecimal('0jIoe3plT+8=', 2621, -1000, 1000));
    question.answers.length = 0;
    question.num = 251;
    question.isSingleAns = false;
    question.shortTextQuestion = "251. ��������� �� ����� � ��������� ��� ����������� ������� ������� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1ZvFxqCg5nI=', 2623, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �� ������� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1ZvFxqCg5nI=', 2625, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� �� ������� �������� ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7XzGzbRj7QQ=', 2627, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QBdbvaj/FLE=', 2629, -1, 1);
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
    var weight = DecodeNumber('iKJyo1HAC7k=', 2631, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iKJyo1HAC7k=', 2631, -1000, 1000),DecodeDecimal('g9yfBfixJPI=', 2631, -1000, 1000),DecodeDecimal('g9yfBfixJPI=', 2631, -1000, 1000));
    question.answers.length = 0;
    question.num = 252;
    question.isSingleAns = false;
    question.shortTextQuestion = "252. ��������� �� ����� � ���������� �������� ��������� ������� �������� ���� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ynGfLFSS0fg=', 2633, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ��������� Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ynGfLFSS0fg=', 2635, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� ������� ��� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sbwi6xAXMs8=', 2637, -1, 1);
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
    var weight = DecodeNumber('lLr6PvZRkyU=', 2641, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lLr6PvZRkyU=', 2641, -1000, 1000),DecodeDecimal('kri/rtXg1DM=', 2641, -1000, 1000),DecodeDecimal('kri/rtXg1DM=', 2641, -1000, 1000));
    question.answers.length = 0;
    question.num = 253;
    question.isSingleAns = false;
    question.shortTextQuestion = "253. ��������� �� ����� � ������� ������������ ������ �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lLr6PvZRkyU=', 2643, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� ��� ������������ ��� ������� �����";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kCVvvirnv/M=', 2645, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� ��� ������������ ��� ������� �����";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kCVvvirnv/M=', 2647, -1, 1);
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
    var weight = DecodeNumber('QrHLSdhE6Q8=', 2651, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QrHLSdhE6Q8=', 2651, -1000, 1000),DecodeDecimal('i3aTN8GY5bA=', 2651, -1000, 1000),DecodeDecimal('i3aTN8GY5bA=', 2651, -1000, 1000));
    question.answers.length = 0;
    question.num = 254;
    question.isSingleAns = false;
    question.shortTextQuestion = "254. ��������� �� ����� � ������� ���������� ��� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gFgp9a57WI4=', 2653, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����������� �� ������� ��� ������� �� �� ������� ��� ����������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gFgp9a57WI4=', 2655, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����������� �� ������� ��� ����������� ���������� �� �� ������� ��� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('h5+x/O9Zz4A=', 2657, -1, 1);
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
    var weight = DecodeNumber('VU2I14ve5Yk=', 2661, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VU2I14ve5Yk=', 2661, -1000, 1000),DecodeDecimal('uB29wiDPapY=', 2661, -1000, 1000),DecodeDecimal('uB29wiDPapY=', 2661, -1000, 1000));
    question.answers.length = 0;
    question.num = 255;
    question.isSingleAns = false;
    question.shortTextQuestion = "255. ��������� �� ����� ��� ��� ������������ ��� �������� ��������� ��� ��� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WnSCWCjlLEk=', 2663, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� �� ����� �������� ������� ���� ��� ��������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WnSCWCjlLEk=', 2665, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���� ��� �� ����� ������� ������� ������� ���� ���� ��������� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0o7+uY4xgfw=', 2667, -1, 1);
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
    var weight = DecodeNumber('8EOIgWG+vIU=', 2671, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8EOIgWG+vIU=', 2671, -1000, 1000),DecodeDecimal('lMB3lQV8PBA=', 2671, -1000, 1000),DecodeDecimal('lMB3lQV8PBA=', 2671, -1000, 1000));
    question.answers.length = 0;
    question.num = 256;
    question.isSingleAns = false;
    question.shortTextQuestion = "256. ��������� �� ����� � ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J0xRvrqbZ/o=', 2673, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ���� ��� ���������� ����� ��� �������� ��������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J0xRvrqbZ/o=', 2675, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���� ��� ������� �������� ������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BCSOfKpPD9o=', 2677, -1, 1);
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
    var weight = DecodeNumber('eRAvwEpleD0=', 2681, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eRAvwEpleD0=', 2681, -1000, 1000),DecodeDecimal('AJt/pVXf+V8=', 2681, -1000, 1000),DecodeDecimal('AJt/pVXf+V8=', 2681, -1000, 1000));
    question.answers.length = 0;
    question.num = 257;
    question.isSingleAns = false;
    question.shortTextQuestion = "257. ��������� �� ����� � ������� ������� ������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PyfKn/3/bxU=', 2683, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������� ��� ���� 11 �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PyfKn/3/bxU=', 2685, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �� ������� ��� ������� �� 11 ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TBDkj7QYlKU=', 2687, -1, 1);
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
    var weight = DecodeNumber('s+ZbreQm37Q=', 2691, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('s+ZbreQm37Q=', 2691, -1000, 1000),DecodeDecimal('pqOsPvuxRtA=', 2691, -1000, 1000),DecodeDecimal('pqOsPvuxRtA=', 2691, -1000, 1000));
    question.answers.length = 0;
    question.num = 258;
    question.isSingleAns = false;
    question.shortTextQuestion = "258. ��������� �� ����� �� ��������� ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iG7rckGJWn0=', 2693, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������ ��� ��������� ��� �������� ��� �������� �������� ��� ������������ �� ��� ������ ������������ ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iG7rckGJWn0=', 2695, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ������ ���� ���� ���������� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1rai4fiaPRA=', 2697, -1, 1);
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
    var weight = DecodeNumber('E+k61dnlgQA=', 2701, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E+k61dnlgQA=', 2701, -1000, 1000),DecodeDecimal('PJILtkXE9wQ=', 2701, -1000, 1000),DecodeDecimal('PJILtkXE9wQ=', 2701, -1000, 1000));
    question.answers.length = 0;
    question.num = 259;
    question.isSingleAns = false;
    question.shortTextQuestion = "259. ��������� �� ����� ���� ������������ ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('E+k61dnlgQA=', 2703, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ���������� ����� �� ������������ ��� ��������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OmeCdia8E24=', 2705, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ���������� ����� �� ������������ ��� ��������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8mORzouD7pI=', 2707, -1, 1);
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
    var weight = DecodeNumber('vVWXCf7Uglg=', 2711, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vVWXCf7Uglg=', 2711, -1000, 1000),DecodeDecimal('fr9Da6cM2hg=', 2711, -1000, 1000),DecodeDecimal('fr9Da6cM2hg=', 2711, -1000, 1000));
    question.answers.length = 0;
    question.num = 260;
    question.isSingleAns = false;
    question.shortTextQuestion = "260. ��������� �� ����� �� ��� ������ ���������� ��� �� ����� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZggVrkYgMlQ=', 2713, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� ������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZggVrkYgMlQ=', 2715, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� �� ������� ��� ������� ��� ����������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dPyM1gVvuhI=', 2717, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ms9Yvk1zpa4=', 2719, -1, 1);
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
    var weight = DecodeNumber('Pdr7VBVHM9Y=', 2721, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Pdr7VBVHM9Y=', 2721, -1000, 1000),DecodeDecimal('+SmF1vjkguU=', 2721, -1000, 1000),DecodeDecimal('+SmF1vjkguU=', 2721, -1000, 1000));
    question.answers.length = 0;
    question.num = 261;
    question.isSingleAns = false;
    question.shortTextQuestion = "261. ��������� �� ����� � ������ �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kcvBv6q1hYo=', 2723, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��������� ��� �������� �������� �������� �� ������������ �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kcvBv6q1hYo=', 2725, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ��� �������� �������� �������� �� ��� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0rhuiy5aJ7k=', 2727, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������ ��� �� ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nd5wyomWX9g=', 2729, -1, 1);
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
    var weight = DecodeNumber('4/liQmg1u7s=', 2731, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4/liQmg1u7s=', 2731, -1000, 1000),DecodeDecimal('WlFqXEXbAJE=', 2731, -1000, 1000),DecodeDecimal('WlFqXEXbAJE=', 2731, -1000, 1000));
    question.answers.length = 0;
    question.num = 262;
    question.isSingleAns = false;
    question.shortTextQuestion = "262. ��������� �� ����� � ������ ������� ���������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4/liQmg1u7s=', 2733, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� �� ��������������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sOrBxhOOsOw=', 2735, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� �� ��������������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VtjC9rMhIT8=', 2737, -1, 1);
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
    var weight = DecodeNumber('H6OV8KXmgRM=', 2741, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H6OV8KXmgRM=', 2741, -1000, 1000),DecodeDecimal('6GYdYnQknX0=', 2741, -1000, 1000),DecodeDecimal('6GYdYnQknX0=', 2741, -1000, 1000));
    question.answers.length = 0;
    question.num = 263;
    question.isSingleAns = false;
    question.shortTextQuestion = "263. ��������� �� ����� ����������� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H6OV8KXmgRM=', 2743, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��� ������������ �� ����� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qJ/ozbDxZzI=', 2745, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� ������������ �� ��� ���� ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0md77S4972s=', 2747, -1, 1);
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
    var weight = DecodeNumber('ubVMNDtxVWg=', 2751, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ubVMNDtxVWg=', 2751, -1000, 1000),DecodeDecimal('nEZyhoh8QVs=', 2751, -1000, 1000),DecodeDecimal('nEZyhoh8QVs=', 2751, -1000, 1000));
    question.answers.length = 0;
    question.num = 264;
    question.isSingleAns = false;
    question.shortTextQuestion = "264. ��������� �� ����� ��� ��� ����� �������� ��� �����������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ubVMNDtxVWg=', 2753, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������� � ��������� ��� ������� �� RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ppDns/Is7pA=', 2755, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���������� � ��������� ��� ������� �� CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ppDns/Is7pA=', 2757, -1, 1);
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
    var weight = DecodeNumber('nr7p4+phPkc=', 2761, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nr7p4+phPkc=', 2761, -1000, 1000),DecodeDecimal('SSp9OBTe0tY=', 2761, -1000, 1000),DecodeDecimal('SSp9OBTe0tY=', 2761, -1000, 1000));
    question.answers.length = 0;
    question.num = 265;
    question.isSingleAns = false;
    question.shortTextQuestion = "265. ��������� �� ����� � ������������� �� ���������� ���������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YzkGcvhgN8g=', 2763, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ����� ���� ������� ��� ������ ��� ���������� ��������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YzkGcvhgN8g=', 2765, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ���� ������� ��� ������ ��� ���������� ��������� ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('biPWX4kATpw=', 2767, -1, 1);
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
    var weight = DecodeNumber('K+5KssxE0mw=', 2771, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K+5KssxE0mw=', 2771, -1000, 1000),DecodeDecimal('3CKTCH2WGHc=', 2771, -1000, 1000),DecodeDecimal('3CKTCH2WGHc=', 2771, -1000, 1000));
    question.answers.length = 0;
    question.num = 266;
    question.isSingleAns = false;
    question.shortTextQuestion = "266. ��������� �� ����� � ���������� ��������� ��� �������� ���� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TtqFTiR1z8g=', 2773, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������������� �� ��� ������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TtqFTiR1z8g=', 2775, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������������� �� ��� ������ ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Dxeekl//WYs=', 2777, -1, 1);
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
    var weight = DecodeNumber('2ybXHtwjVl4=', 2781, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2ybXHtwjVl4=', 2781, -1000, 1000),DecodeDecimal('Lmu7c5GaHXk=', 2781, -1000, 1000),DecodeDecimal('Lmu7c5GaHXk=', 2781, -1000, 1000));
    question.answers.length = 0;
    question.num = 267;
    question.isSingleAns = false;
    question.shortTextQuestion = "267. ��������� �� ����� �� ������� � �� ���� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2ybXHtwjVl4=', 2783, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ��������� ����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wn8jC+qWwd0=', 2785, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��������� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wn8jC+qWwd0=', 2787, -1, 1);
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
    var weight = DecodeNumber('aYVWm64tX3k=', 2791, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aYVWm64tX3k=', 2791, -1000, 1000),DecodeDecimal('BkI/dnETNHw=', 2791, -1000, 1000),DecodeDecimal('BkI/dnETNHw=', 2791, -1000, 1000));
    question.answers.length = 0;
    question.num = 268;
    question.isSingleAns = false;
    question.shortTextQuestion = "268. ��������� �� ����� �� ��������� �������� ����������� ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QW1uvNUIJQM=', 2793, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ������������ ��� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QW1uvNUIJQM=', 2795, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ������������ ��� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KJbyBEW8v4o=', 2797, -1, 1);
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
    var weight = DecodeNumber('4HJG04HqJQU=', 2801, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4HJG04HqJQU=', 2801, -1000, 1000),DecodeDecimal('WURT1kf6zLU=', 2801, -1000, 1000),DecodeDecimal('WURT1kf6zLU=', 2801, -1000, 1000));
    question.answers.length = 0;
    question.num = 269;
    question.isSingleAns = false;
    question.shortTextQuestion = "269. ��������� �� ����� �� ������� ������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UcLHtOf5ts4=', 2803, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UcLHtOf5ts4=', 2805, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ��� �������� ������������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cRtshV+W4wE=', 2807, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ������� ��� �������� ����������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3MVI/7QazPU=', 2809, -1, 1);
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
    var weight = DecodeNumber('mJrfdiiTMNE=', 2811, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mJrfdiiTMNE=', 2811, -1000, 1000),DecodeDecimal('lI0NzxUXC1A=', 2811, -1000, 1000),DecodeDecimal('lI0NzxUXC1A=', 2811, -1000, 1000));
    question.answers.length = 0;
    question.num = 270;
    question.isSingleAns = false;
    question.shortTextQuestion = "270. ��������� �� ����� �� ������� �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mJrfdiiTMNE=', 2813, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���������������� �� ������ ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OlMlvEiSMlk=', 2815, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���������������� �� ���������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yfMy4dl3t9k=', 2817, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������������� ���� �� ���������� ���� �� ������ ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eR7LPAGvRtg=', 2819, -1, 1);
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
    var weight = DecodeNumber('j6upLXST2ws=', 2821, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('j6upLXST2ws=', 2821, -1000, 1000),DecodeDecimal('oQItw0zgHG4=', 2821, -1000, 1000),DecodeDecimal('oQItw0zgHG4=', 2821, -1000, 1000));
    question.answers.length = 0;
    question.num = 271;
    question.isSingleAns = false;
    question.shortTextQuestion = "271. ��������� �� ����� ��� ����� �� ����������� ���� ������������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ud/uy7FrkeM=', 2823, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� �� ���������� HTML COLOR";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ud/uy7FrkeM=', 2825, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� ������ JPEG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sBfwsipBvSs=', 2827, -1, 1);
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
    var weight = DecodeNumber('fa3QLtTHVw4=', 2831, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fa3QLtTHVw4=', 2831, -1000, 1000),DecodeDecimal('338Wv+mipbY=', 2831, -1000, 1000),DecodeDecimal('338Wv+mipbY=', 2831, -1000, 1000));
    question.answers.length = 0;
    question.num = 272;
    question.isSingleAns = false;
    question.shortTextQuestion = "272. ��������� �� ����� �� Zoomify ������� �� ���������� ��   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('il2yo6PJBU4=', 2833, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ ������ ������ �������� ��� ������� �� ������� �� ���������� ��� �� ������� �� ��������� ��� ������������ ������ ��� �� ������ ���� ��� �� ���� ������������ ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('il2yo6PJBU4=', 2835, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������� ������ ������ �������� ��� ������� �� ������� �� ����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H7BsOMvQzWc=', 2837, -1, 1);
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
    var weight = DecodeNumber('XiYTqrzP1KQ=', 2841, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XiYTqrzP1KQ=', 2841, -1000, 1000),DecodeDecimal('dKzVxjZKPsU=', 2841, -1000, 1000),DecodeDecimal('dKzVxjZKPsU=', 2841, -1000, 1000));
    question.answers.length = 0;
    question.num = 273;
    question.isSingleAns = false;
    question.shortTextQuestion = "273. ��������� �� ����� �������� ���������� �����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XiYTqrzP1KQ=', 2843, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� ������ � ��� ������ ��� ��������� Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1ylAHeSz71g=', 2845, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ��� ������ � ��� ������ �� ��� ������ web, ��� ������� ���� ����������� ���� ��� � ������� ��� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1ylAHeSz71g=', 2847, -1, 1);
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
    var weight = DecodeNumber('8ti6N7x+aFM=', 2851, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8ti6N7x+aFM=', 2851, -1000, 1000),DecodeDecimal('gCBt2waEgcs=', 2851, -1000, 1000),DecodeDecimal('gCBt2waEgcs=', 2851, -1000, 1000));
    question.answers.length = 0;
    question.num = 274;
    question.isSingleAns = false;
    question.shortTextQuestion = "274. ��������� �� ����� To Adobe Bridge  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8ti6N7x+aFM=', 2853, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ����� ��� ��������� ��� �������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3Izmi5dpSJY=', 2855, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ����� ��������� ��� �������� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QTnOCWp8eFM=', 2857, -1, 1);
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
    var weight = DecodeNumber('HqxW09zm/ZA=', 2861, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HqxW09zm/ZA=', 2861, -1000, 1000),DecodeDecimal('3XP1bBjj6HY=', 2861, -1000, 1000),DecodeDecimal('3XP1bBjj6HY=', 2861, -1000, 1000));
    question.answers.length = 0;
    question.num = 275;
    question.isSingleAns = false;
    question.shortTextQuestion = "275. ��������� �� ����� �� ������� ���������������� ��� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GZHbu6kQUtw=', 2863, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ��� �������� �������� ���� � ������� ��������� �������, � �������� �������� �� ��� ������ � � �������� �������� ������������� ��������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GZHbu6kQUtw=', 2865, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ������������ ��� ������ ������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('R8Jv0+KrM1Y=', 2867, -1, 1);
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
    var weight = DecodeNumber('jOZ0eIaVGjE=', 2871, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jOZ0eIaVGjE=', 2871, -1000, 1000),DecodeDecimal('1hdUAHNGdeI=', 2871, -1000, 1000),DecodeDecimal('1hdUAHNGdeI=', 2871, -1000, 1000));
    question.answers.length = 0;
    question.num = 276;
    question.isSingleAns = false;
    question.shortTextQuestion = "276. ��������� �� ����� �� slice ������� �� �� ����������� ����, ������������������ ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jOZ0eIaVGjE=', 2873, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('19XbfN3znHE=', 2875, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mVmRcnnGN+E=', 2877, -1, 1);
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
    var weight = DecodeNumber('P7FygnHSVK8=', 2881, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('P7FygnHSVK8=', 2881, -1000, 1000),DecodeDecimal('bmfFx7fbVjk=', 2881, -1000, 1000),DecodeDecimal('bmfFx7fbVjk=', 2881, -1000, 1000));
    question.answers.length = 0;
    question.num = 277;
    question.isSingleAns = false;
    question.shortTextQuestion = "277. ��������� �� ����� �� �������� slice ������������� ��  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GP7G+IESugA=', 2883, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. Slice ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GP7G+IESugA=', 2885, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Slice ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FwZ9DYysYmg=', 2887, -1, 1);
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
    var weight = DecodeNumber('0c15/FNXork=', 2891, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0c15/FNXork=', 2891, -1000, 1000),DecodeDecimal('2uTpRAVQ33o=', 2891, -1000, 1000),DecodeDecimal('2uTpRAVQ33o=', 2891, -1000, 1000));
    question.answers.length = 0;
    question.num = 278;
    question.isSingleAns = false;
    question.shortTextQuestion = "278. ��������� �� ����� (������ �� ����� ����������� ��� ���) �� slice ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0c15/FNXork=', 2893, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f9n9d1wBJ3U=', 2895, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� ���������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f9n9d1wBJ3U=', 2897, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. ���������� ���� �������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IX2fId/Et28=', 2899, -1, 1);
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
    var weight = DecodeNumber('ekPxGehn0+Y=', 2901, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ekPxGehn0+Y=', 2901, -1000, 1000),DecodeDecimal('DrXGmFhW8yE=', 2901, -1000, 1000),DecodeDecimal('DrXGmFhW8yE=', 2901, -1000, 1000));
    question.answers.length = 0;
    question.num = 279;
    question.isSingleAns = false;
    question.shortTextQuestion = "279. ��������� �� ����� (������ �� ����� ����������� ��� ���) � �������� ��� ������� slice  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6goiKedAYvU=', 2903, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������� ���� ��� �� ����� �����������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6goiKedAYvU=', 2905, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ������� ���� ��� �� ����� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('t/whC9VrJ+8=', 2907, -1, 1);
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
    var weight = DecodeNumber('gkD1+jKnnt4=', 2911, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gkD1+jKnnt4=', 2911, -1000, 1000),DecodeDecimal('IPwbZO5Vg3M=', 2911, -1000, 1000),DecodeDecimal('IPwbZO5Vg3M=', 2911, -1000, 1000));
    question.answers.length = 0;
    question.num = 280;
    question.isSingleAns = false;
    question.shortTextQuestion = "280. ��������� �� ����� ��� ��� �� ������ slice ��������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e1xTn6voeS4=', 2913, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �������� ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('e1xTn6voeS4=', 2915, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �������� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZEy/aghOkTE=', 2917, -1, 1);
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
    var weight = DecodeNumber('K7MrnqXlnjU=', 2921, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K7MrnqXlnjU=', 2921, -1000, 1000),DecodeDecimal('HvW2FFMLguo=', 2921, -1000, 1000),DecodeDecimal('HvW2FFMLguo=', 2921, -1000, 1000));
    question.answers.length = 0;
    question.num = 281;
    question.isSingleAns = false;
    question.shortTextQuestion = "281. ��������� �� ����� �� ��� ������� ����� slice ������ ������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('roWnS2M4/r0=', 2923, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� �������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('roWnS2M4/r0=', 2925, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� �������� �� �� ������ tag HTML";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pODJhHuDagA=', 2927, -1, 1);
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
    var weight = DecodeNumber('B6N195p1rfo=', 2931, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B6N195p1rfo=', 2931, -1000, 1000),DecodeDecimal('VsneMkPItMM=', 2931, -1000, 1000),DecodeDecimal('VsneMkPItMM=', 2931, -1000, 1000));
    question.answers.length = 0;
    question.num = 282;
    question.isSingleAns = false;
    question.shortTextQuestion = "282. ��������� �� ����� �������� �� �������� �������� ������������ ���������� ���� ���  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CyYrGpGOUVE=', 2933, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� ����� �������� slice";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CyYrGpGOUVE=', 2935, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. �� ����� �����������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/tt/hN8pbMk=', 2937, -1, 1);
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
    var weight = DecodeNumber('vlXwTV5mG2M=', 2941, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vlXwTV5mG2M=', 2941, -1000, 1000),DecodeDecimal('DNFIRYd4Y+M=', 2941, -1000, 1000),DecodeDecimal('DNFIRYd4Y+M=', 2941, -1000, 1000));
    question.answers.length = 0;
    question.num = 283;
    question.isSingleAns = false;
    question.shortTextQuestion = "283. ��������� �� ����� � ����� ���������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0XbQYM5K/k0=', 2943, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ������ �� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0XbQYM5K/k0=', 2945, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. ��� ������ �� �������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('z9HN9IkRapc=', 2947, -1, 1);
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
    var weight = DecodeNumber('yXQB29S9/ck=', 2951, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yXQB29S9/ck=', 2951, -1000, 1000),DecodeDecimal('kRlgD/SddGE=', 2951, -1000, 1000),DecodeDecimal('kRlgD/SddGE=', 2951, -1000, 1000));
    question.answers.length = 0;
    question.num = 284;
    question.isSingleAns = false;
    question.shortTextQuestion = "284. ��������� �� ����� � ���������� slice ������� ����  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yXQB29S9/ck=', 2953, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. �� slice ������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PCIzcY2OkZU=', 2955, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. �� slice ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kopwZSLelb4=', 2957, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. �� slice ��������";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f487Zmy4lv4=', 2959, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "�. ������ ��� �� ��������";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('f487Zmy4lv4=', 2961, -1, 1);
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
    var weight = DecodeNumber('+jQ/sdWu2Qc=', 2961, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+jQ/sdWu2Qc=', 2961, -1000, 1000),DecodeDecimal('14EIgjTGtTg=', 2961, -1000, 1000),DecodeDecimal('14EIgjTGtTg=', 2961, -1000, 1000));
    question.answers.length = 0;
    question.num = 285;
    question.isSingleAns = false;
    question.shortTextQuestion = "285. ��������� �� ����� �� �������� ���� ��� slice �������  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('M5tAigAEutU=', 2963, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. ���� ��� ��� ������� �������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M5tAigAEutU=', 2965, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ���� ��� �� ������� �������� ���������� ��� web & ��������";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a6nTrGljUEY=', 2967, -1, 1);
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
function InitQuestion286()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 285;
    var weight = DecodeNumber('K/vM/A7QmhI=', 2971, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K/vM/A7QmhI=', 2971, -1000, 1000),DecodeDecimal('vCyW7PmQ/vw=', 2971, -1000, 1000),DecodeDecimal('vCyW7PmQ/vw=', 2971, -1000, 1000));
    question.answers.length = 0;
    question.num = 286;
    question.isSingleAns = false;
    question.shortTextQuestion = "�������� �� �����: � �������� ������� ��� photoshop �����:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K/vM/A7QmhI=', 2973, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "�. � �������� ���������";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VwtG3twJ9NU=', 2975, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "�. � ����� ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lSC0dN7/GBQ=', 2977, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "�. � ���� �����";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1Y+Cnn5P/QY=', 2979, -1, 1);
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
function ClearQuestion286()
{
    const questionIndex = 285;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}


/* Code generated function */
function CreateListLeft15()
{
    this.length = 3;
    this[0] = unescape(DecodeString("qRpcjFUgKBm3ZfGsSv0V9xFMCkXSr1UYFiUk0JlBHgxw8kKnUXRNoW+9y7pAMfiLfc8xcoRQr3VLhQ+c"));
    this[1] = unescape(DecodeString("ZsZM97aBUSP0ErL1u3nwqvXzQd4RVJptSrby+P8F1OILQ9ydDs8kZQo8klJ8U0puvuWoFWUvnta0TV3A"));
    this[2] = unescape(DecodeString("qhqYrVVwjo83XPbhe0a3lCGSTzue2kFd/4aUh9/vS8yv1da2guq9vzPJDAePWfbJDvzsUQ=="));

}

/* Code generated function */
function CreateListRight15()
{
    this.length = 3;
    this[0] = unescape(DecodeString("uOzwm33l+VCjcjfasm4MOoeAFLkttDMo4K8Wspx+1zCG+U1MTUUjb4KqDBmDTCsA"));
    this[1] = unescape(DecodeString("NE3mWpZdnhmqDgJpCAAoVkJfECZwuWJDrWtPJft+CRqhAJ8ExAdFehEDziQ327Q10LAah+SLWx9lh85oiYehx087LGXeTINYjYp/sg=="));
    this[2] = unescape(DecodeString("x3DoBo3kfQupeQZg9CSvGq/WRP1XYw7QxyL07VhpS23GoO74540tha2klPGZxG7xcdYT2nujq52+OBe8Kj8zwSa42sTF21+jJItzdok95if/W2LR7f3VUHoMfh+mMF0FvXt+PaVm5ng6A14TDZnExBrZk5ppeazUfTSM4g=="));

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
    this[0] = unescape(DecodeString("/jcAzFUnlDI="));
    this[1] = unescape(DecodeString("pLnCLnJ7Chk="));
    this[2] = unescape(DecodeString("zweqY84CQ1w="));
    this[3] = unescape(DecodeString("SGrbGjlFosA="));
    this[4] = unescape(DecodeString("wZ4ytLFdkNo="));

}

/* Code generated function */
function CreateListRight33()
{
    this.length = 5;
    this[0] = unescape(DecodeString("ZaoQydXi8Wp70hQYUPvlk6mFmyO8Edk8FYacwA=="));
    this[1] = unescape(DecodeString("r8HY/T2DPaAF7Zzsk7wQp071vaQoANNG"));
    this[2] = unescape(DecodeString("r8HY/T2DPaAF7Zzsk7wQp071vaQoANNG"));
    this[3] = unescape(DecodeString("ZaoQydXi8Wp70hQYUPvlk6mFmyO8Edk8FYacwA=="));
    this[4] = unescape(DecodeString("r8HY/T2DPaAF7Zzsk7wQp071vaQoANNG"));

}

/* Code generated function */
function CreateListLeftHtml33()
{
    this.length = 5;

}





