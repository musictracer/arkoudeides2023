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
    question.shortTextQuestion = " 1. Σημειώστε τα στοιχεία (2) που δεν περιλαμβάνονται στον παρακάτω ορισμό Ένα μήνυμα οπτικής επικοινωνίας περιλαμβάνει:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3KwwWlCSo5I=', 58, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. σύμβολα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3MT2zmORqQ4=', 60, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. ομιλίες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3MT2zmORqQ4=', 62, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. γραπτά κείμενα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GKXzmxnV46o=', 64, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ εικόνες";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('3AtH/558XT0=', 66, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = " Ε. προφορική αφήγηση";
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
    question.shortTextQuestion = " 2. Σημειώστε το στοιχείο (1) που δεν περιλαμβάνεται στον παρακάτω ορισμό. Σύμφωνα με τον Ο Argyle(1988) υπάρχουν οι παρακάτω λειτουργίες της μη λεκτικής επικοινωνίας:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3AtH/558XT0=', 68, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Έκφραση συναισθημάτων  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3wU2FUMeooA=', 70, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Έκφραση στάσεων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('swEulHx1HP8=', 72, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Επεξήγηση λεκτικού μηνύματος  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('swEulHx1HP8=', 74, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ Παρουσίαση της προσωπικότητας    ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('p1oDge9m3gQ=', 76, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = " Ε. Χαιρετισμός";
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
    question.shortTextQuestion = " 3. Σημειώστε το στοιχείο που είναι σωστό";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YF3KxpA8/Uo=', 78, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. η οριζόντια γραμμή δείχνει ψυχική ηρεμία και αδράνεια  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YF3KxpA8/Uo=', 80, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. η οριζόντια γραμμή δείχνει συναισθηματική φόρτιση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xsJS7R6JRiY=', 82, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. η οριζόντια γραμμή δείχνει ενεργητικότητα  ";
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
    question.shortTextQuestion = " 4. Σημειώστε τα στοιχεία (3) που δεν περιλαμβάνονται στον παρακάτω ορισμό. Οι βασικές φόρμες, σύμφωνα με τον Καντίνσκι (1996, σ.74) είναι:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i8ZOSxUhWao=', 88, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. το ισόπλευρο τρίγωνο  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i8ZOSxUhWao=', 90, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. το τετράγωνο  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SKQzRE28AJ0=', 92, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το ορθογώνιο παραλληλόγραμμο  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MZ+nFZESr4M=', 94, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. ο κύκλος    ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Bzjj6rBAtEw=', 96, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = " Ε. ο ρόμβος";
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
    question.shortTextQuestion = " 5. Κυκλώστε το σωστό στην παρακάτω πρόταση Η Γραφιστική σύνθεση αφορά στην τοποθέτηση οπτικών στοιχείων σε ένα κάδρο. Αυτό σημαίνει ότι ο προβληματισμός του σχεδιαστή επικεντρώνεται στην:      ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bzjj6rBAtEw=', 98, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Δημιουργία οπτικών συσχετισμών μεταξύ των οπτικών στοιχείων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FqeHSqdb7yc=', 100, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Δημιουργία εννοιολογικών συσχετισμών  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cYVr5Tm0i8w=', 102, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Τίποτα από τα δύο (Α και Β)";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('slz/5fAGHM4=', 104, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. Και τα δύο ταυτόχρονα (Α και Β)";
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
    question.shortTextQuestion = " 6. Κυκλώστε την σωστή συνέχεια (1) της πρότασης παρακάτω Με τον όρο φόρμα στην γραφιστική σύνθεση ορίζουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9W03THeDS3I=', 108, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Μια περιοχή που οριοθετείται από μια κλειστή γραμμή και περιγράφει ένα τρισδιάστοτο αντικείμενο.  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9W03THeDS3I=', 110, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Μια περιοχή που περιλαμβάνει μία σειρά σημείων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EkaSKzBudTs=', 112, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Μια σειρά σημείων που αν τα ενώσουμε μπορεί να ορίσουν μια ή περισσότερες γραμμές";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4ZoBF2CvKW8=', 114, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. Πολλές γραμμές που τέμνονται και βάφουν μια περιοχή  ";
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
    question.shortTextQuestion = " 7. Κυκλώστε την σωστή πρόταση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YBYphDGEZBc=', 118, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Η αντιφόρμα ορίζει μια περιοχή αντίστροφη της φόρμας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s7tnL28eQdw=', 120, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Η αντιφόρμα είναι συμμετρική της φόρμας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('awjoBnFfmJA=', 122, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Η αντιφόρμα είναι η περιοχή γύρω από την φόρμα σε ένα συγκεκριμένο κάδρο  ";
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
    question.shortTextQuestion = " 8. Κυκλώστε το χαρακτηριστικό που δεν αποδίδει καθαρά την παρακάτω φράση: Το κύριο χαρακτηριστικό μίας στυλιζαρισμένης εικόνας είναι:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sjrVFv1Iabw=', 128, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Καθαρά σχήματα  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RkmmAfamDTY=', 130, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Λίγα και πλακάτα χρώματα.  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wKKNJHS6KI8=', 132, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Άσπρο και μαύρο χωρίς τόνους  ";
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
    question.shortTextQuestion = " 9. Επιλέξτε τη σωστή φράση Η επιτυχία στην απλοποίηση μίας στυλιζαρισμένης εικόνας δεν εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ghs29hxGe+E=', 138, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Από το πλήθος των σχημάτων  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Kv6BXm0aYW4=', 140, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Από το χρώμα των σχημάτων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Kv6BXm0aYW4=', 142, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Τον αριθμό των χρωμάτων και των χρωματικών τόνων  ";
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
    question.shortTextQuestion = " 10. Σημειώστε το σωστό στοιχείο :    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lOOp73XkMW8=', 148, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Το σημαίνον είναι το αντικείμενο  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i65i9Y30cUQ=', 150, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Το σημαίνον είναι το στοιχείο μέσα στην σύνθεση  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VBffBEveeTk=', 152, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Το σημαίνον είναι το στοιχείο και το σημαινόμενο ή έννοια που του αποδίδεται (ερμηνεία)  ";
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
    question.shortTextQuestion = " 11. Σύμφωνα με τη σημειωτική θεωρία:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0RpGGCxorWY=', 158, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Ο θεατής είναι ασταθής αλλά ικανός να αντιδράσει στην θέα μιας εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0RpGGCxorWY=', 160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Συμμετέχει ενεργά στη δημιουργία μιας εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QVPL7lfwPuM=', 162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Ερμηνεύει τη φόρμα της εικόνας";
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
    question.shortTextQuestion = " 12. Σημειώστε τις σημαντικές παραμέτρους της αφήγησης:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rCj98UsvdUI=', 168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. μέσο μετάδοσης της πληροφορίας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jpWDIWMettk=', 170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. σχέδιο-οργάνωση της πληροφορίας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jpWDIWMettk=', 172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. ιστορία  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Dm+J+CSussU=', 174, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. αφηγητής-ήρωας  ";
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
    question.shortTextQuestion = " 13. Σημειώστε το σωστό στοιχείο:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('38tPa2iCitY=', 178, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Ο Μετζ θεωρεί ότι ο θεατής ταυτίζεται με αυτό που βλέπει  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('38tPa2iCitY=', 180, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " B. Lacan θεωρεί ότι ο θεατής ταυτίζεται με αυτό που βλέπει  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('c+7aOi2tmGE=', 182, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Ο Αριστοτέλης θεωρεί ότι ο θεατής ταυτίζεται με αυτό που βλέπει  ";
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
    question.shortTextQuestion = " 14. Όσο μεγαλύτερο είναι το βάθος χρώματος,    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Dk0CLxOKKdo=', 188, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Τόσο μεγαλύτερη είναι η χρωματική πληροφορία μιας εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dk0CLxOKKdo=', 190, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Τόσο καλύτερη είναι η ευκρίνεια μιας εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yUmYe8gNm1Q=', 192, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Τόσο μεγαλύτερο είναι το κοντράστ μίας εικόνας  ";
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
    question.shortTextQuestion = " 15. Κυκλώστε την επιλογή που δεν ανταποκρίνεται απόλυτα στην παρακάτω παραδοχή: Η επιλογή του βάθους χρώματος εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L2pwPd7IeTE=', 198, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. τη συσκευή προβολής  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+/R3jdxWdb8=', 200, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. το μέσο προβολής  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sTY4zapm/10=', 202, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το επιθυμητό κοντράστ και την ευκρίνεια της εικόνας  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sTY4zapm/10=', 204, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. την χρήση και το είδος του θέματος  ";
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
    question.shortTextQuestion = " 16. Αντιστοίχησε τα σωστά  ";
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
    question.shortTextQuestion = " 17. Κυκλώστε το σωστό Ο κορεσμός ενός χρώματος αναφέρεται    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3EK3v5MTQd8=', 218, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. στην \"καθαρότητα\" του χρώματος σε σχέση με το απλό, που καθορίζει την απόχρωσή του  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3EK3v5MTQd8=', 220, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. στον συνδυασμό των καθαρών χρωμάτων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WI+p+wv8Iq4=', 222, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. στο πόσο πλακάτο είναι  ";
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
    question.shortTextQuestion = " 18. Κυκλώστε το σωστό Η Χροιά προσδιορίζει    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hcARKb60QtE=', 228, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Εκείνο από τα απλά χρώματα, που \"συνεισφέρουν\" σε μεγαλύτερο ποσοστό στη δημιουργία ενός σύνθετου χρώματος  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sxIFXu2Dhx4=', 230, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Τις τονικές διαβαθμισεις του χρώματος  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TSh5vK2jKPM=', 232, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Την απόχρωση του χρώματος  ";
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
    question.shortTextQuestion = " 19. Κυκλώστε το σωστό στην παρακάτω πρόταση 24 bit βάθος χρώματος αντιστοιχούν σε:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nMvfcZuwA9o=', 238, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. 256 χρώματα  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xul4b35JpKU=', 240, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. 256 Χ 24 = 6.144 χρώματα  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FdytWsAtZhs=', 242, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. 256 Χ256 Χ256 = 16,7 εκατομμύρια χρώματα.  ";
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
    question.shortTextQuestion = " 20. Κυκλώστε το σωστό στην παρακάτω πρόταση Τα χρώματα στις ηλεκτρονικές συσκευές δημιουργούνται με συνδυασμό των ακτινοβολιών    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H06rApK4SRk=', 248, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. κόκκινης της μπλε και της κίτρινης  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tiXbH32X72Y=', 250, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. κόκκινης της πράσινης και της μπλε  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tiXbH32X72Y=', 252, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. κίτρινης της κυανής και της ματζέντας  ";
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
    question.shortTextQuestion = " 21. Ποια από τις παρακάτω εκδοχές ισχύει: Η ψηφιοποίηση (digitization) εικόνων από αναλογική σε ψηφιακή μορφή είναι    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RjsmrOEDLOI=', 258, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Η μετατροπή των αναλογικών εικόνων σε ψηφιακή μορφή  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RjsmrOEDLOI=', 260, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Η διαδικασία επεξεργασίας αφού μεταφερθούν σε ψηφιακά μέσα  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jNe0SXtNho4=', 262, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Η απευθείας σχεδίαση σε ψηφιακά μέσα μίας εικόνας  ";
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
    question.shortTextQuestion = " 22. Κυκλώστε το λάθος Η ψηφιοποίηση εικόνων από αναλογική μορφή γίνεται    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aSNKscsC0CU=', 268, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. με τη βοήθεια σαρωτών  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BmcDkY5y2O4=', 270, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. απευθείας με τη χρήση ψηφιακών φωτογραφικών μηχανών.  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NZ70BreL+lM=', 272, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. με την επαναδημιουργία της σε σχεδιαστικά προγράμματα  ";
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
    question.shortTextQuestion = " 23. Κυκλώστε το σωστό. Κατά τη διαδικασία ψηφιοποίησης η εικόνα μετατρέπεται σε ακολουθίες δυαδικών ψηφίων. που συμβολίζουν    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9bG1cTizx00=', 278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Την τιμή χρώματος κάθε pixel σε κάθε σημείο της εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9bG1cTizx00=', 280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Το μέγεθος ενός pixel σε ένα σημείο της εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Frhi6RJAW0E=', 282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Το κοντράστ ενός pixel σε ένα σημείο της εικόνας  ";
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
    question.shortTextQuestion = " 24. Κυκλώστε το λάθος. Ο αποθηκευτικός χώρος που απαιτείται για μια εικόνα, εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('c9khKZMiD8E=', 288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. τη μορφή αποθήκευσης των δεδομένων,  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kYlmLSKQ4n8=', 290, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. την ύπαρξη ή όχι χρώματος  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DpaFIuxmdu4=', 292, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το περιεχόμενο της εικόνας  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DpaFIuxmdu4=', 294, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. τις διαστάσεις της εικόνας.  ";
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
    question.shortTextQuestion = "25. Κύκλωσε την λανθασμένη παραδοχή.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cSs6kIa1VNQ=', 298, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Όσο περισσότερα εικονοστοιχεία υπάρχουν σε μία εικόνα τόσο μεγαλύτερο είναι το μέγεθος αρχείου της εικόνας.  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Gmsai1pzt7o=', 300, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Ο αριθμός των εικονοστοιχείων στη μονάδα του μήκους αναφέρεται ως ανάλυση (resolution) της εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WGzeQgUklbg=', 302, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "   Γ. Ο αριθμός των εικονοστοιχείων στη μονάδα του μήκους εκφράζεται σε εικονοστοιχεία ανά ίντσα (ppi  pixels per inch).  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oBKfJSWtmEg=', 304, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. Οι διαστάσεις της εικόνας αφορούν στην μονάδα μήκους της ανεξάρτητα από τα εικονοστοιχεία που την αποτελούν";
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
    question.shortTextQuestion = "26. Τα αρχεία BMP αφορούν:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Up6ZjLi+3Ks=', 308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αρχείο Εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Up6ZjLi+3Ks=', 310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αρχείο Κείμενου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('G3sQ/RNaaqc=', 312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Αρχείο Βίντεο";
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
    question.shortTextQuestion = "27. Ποιος από τους παρακάτω τύπους αποθήκευσης εικόνας υποστηρίζει τη διαφάνεια:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oHrEAkH0ILg=', 318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('34egCJFBwZI=', 320, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('34egCJFBwZI=', 322, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. BMP";
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
    question.shortTextQuestion = "28. Ποιος από τους παρακάτω τύπους αποθήκευσης εικόνας δίνει αίσθηση κίνησης:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+g37/RtXxaU=', 328, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kpE/CzLvZ9I=', 330, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7i5JrOVP9/4=', 332, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. GIF";
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
    question.shortTextQuestion = "29. Κυκλώστε το σωστό Αν τα βάζαμε σε μία «ζυγαριά», το πιο σημαντικό πλεονέκτημα του photoshop σε σχέση με ερασιτεχνικά προγράμματα, όπως το αντίστοιχο του office των windows είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GyWIRj6LFo8=', 338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η δυνατότητα διαμόρφωσης της επιφάνειας εργασίας κατά το δοκούν";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r7955vl1uuo=', 340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η μεγάλη γκάμα στην επιλογή των πινέλων ζωγραφικής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fK12kcgo75A=', 342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η δυνατότητα εργασίας σε Layers";
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
    question.shortTextQuestion = "30. Κυκλώστε το σωστό Τις παλέτες μπορούμε να τις κρύβουμε και να τις εμφανίζουμε από το μενού:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RR2Xcqz5Cuo=', 348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Edit";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MBy/XRyTehk=', 350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Window.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MBy/XRyTehk=', 352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Select";
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
    question.shortTextQuestion = "31. Σημειώστε το σωστό στοιχείο : Ο σαρωτής έχει την δυνατότητα να:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h3Z47by9fyY=', 358, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να διορθώνει χρωματικά τις εικόνες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h3Z47by9fyY=', 360, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να διαχωρίζει τα στοιχεία από το φόντο της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('khLO9CTLai8=', 362, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Να ρετουσάρει τις εικόνες";
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
    question.shortTextQuestion = "32. Σημειώστε τα σωστά στοιχεία Η σαρωμένη εικόνα αποθηκεύεται σε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('itvEtiRwcAs=', 368, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. BMP";
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
    answer3.shortTextAnswer = "Γ. PNG";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4pmemsnl0IQ=', 374, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Σε όλα τα παραπάνω";
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
    question.shortTextQuestion = "33. Σημειώστε το σωστό στοιχείο Η κάρτα γραφικών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r0GnWDDBubY=', 378, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι υπεύθυνη για την απεικόνιση δεδομένων στην οθόνη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r0GnWDDBubY=', 380, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι υπεύθυνη για την επεξεργασία εικόνων και γραφικών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('k3IJYsEPpXI=', 382, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. είναι υπεύθυνη για την αποστολή pixels στην οθόνη";
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
    question.shortTextQuestion = "34. Αντιστοιχίστε τις θύρες με τα σήματα";
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
    question.shortTextQuestion = "35. Σημειώστε τα χαρακτηριστικά της κάρτας γραφικών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sEgYUR5YjXQ=', 398, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να είναι συμβατή με το δίσκο του ηλεκτρονικού υπολογιστή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QercIgPyGfM=', 400, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να έχει μεγάλη μνήμη και ανάλυση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QercIgPyGfM=', 402, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Να μετατρέπει το αναλογικό σε ψηφιακό σήμα";
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
    question.shortTextQuestion = "36. Σημειώστε το σωστό Η μηχανή λήψης μιας εικόνας μπορεί να αποθηκεύσει σε αρχεία raw, επειδή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Fzu2AoSW1ZQ=', 408, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η εικόνα μπορεί να επεξεργαστεί μόνο από το πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1YeFFHcn+hE=', 410, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. η εικόνα μπορεί να επεξεργαστεί μόνο από το πρόγραμμα Corel";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('S4lYJ07t1g4=', 412, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. είναι ασυμπίεστο αρχείο εικόνας και περιλαμβάνει όλες τις πληροφορίες της σκηνής και των ρυθμίσεων της μηχανής";
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
    question.shortTextQuestion = "37. Σημειώστε το σωστό Μια εικόνα όταν αποθηκεύεται σε μορφή TIFF και όχι σε JPEG  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/40aLMuLfVQ=', 418, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. υποστηρίζει τη δυνατότητα layers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/40aLMuLfVQ=', 420, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καταλαμβάνει μικρότερο χώρο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('maRRSvJlRyk=', 422, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. καταλαμβάνει τον ίδιο χώρο";
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
    question.shortTextQuestion = "38. Σημειώστε το σωστό Οι εκτυπωτές laser  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KmGSlg05Hes=', 428, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. είναι φθηνότεροι σε σχέση με άλλους εκτυπωτές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PXpZG5XPhFs=', 430, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι αργοί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lKyQmef3sCY=', 432, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. είναι οικονομικοί στη χρήση τόνερ ανά σελίδα";
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
    question.shortTextQuestion = "39. Σημειώστε το σωστό. Η γραμμή του βασικού μενού εντολών σε όλα τα προγράμματα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yXg1JFgZ9Gs=', 438, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται πάνω από την επιφάνεια επεξεργασίας ψηφιακής εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yXg1JFgZ9Gs=', 440, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στο Flash η γραμμή μενού βρίσκεται αριστερά στην επιφάνεια.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XR81qtakrfM=', 442, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Στο Form-z η γραμμή μενού βρίσκεται δεξιά σε αναδυόμενο παράθυρο.";
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
    question.shortTextQuestion = "40. Σημειώστε το σωστό. Το μενού \"Select\":  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fRxSJE3IsWI=', 448, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται στο Flash Adobe Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UZwgQtT8uPE=', 450, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται σε όλα τα προγράμματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yGcDQrVlVx0=', 452, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Βρίσκεται μόνο στο πρόγραμμα Adobe photoshop.";
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
    question.shortTextQuestion = "41. Σημειώστε το σωστό. Οι παλέτες σε όλα τα προγράμματα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GHEfXOb65KU=', 458, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Aφορούν μόνο στα χρώματα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aD8BiYvfgq0=', 460, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αφορούν μόνο στα χρώματα και στα στρώματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7WYD0eut7f8=', 462, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Αφορούν σε πολλές θεματικές.";
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
    question.shortTextQuestion = "42. Σημειώστε το σωστό. Το αναδυόμενο παράθυρο των στρωμάτων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZlsLqk3UoAc=', 468, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται δεξιά στην επιφάνεια επεξεργασίας της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EFZ/x9Bjdcs=', 470, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται αριστερά στην επιφάνεια επεξεργασίας της εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Y3h99aqPJnA=', 472, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Βρίσκεται στη γραμμή βασικού μενού “File”.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kUA5SRN1a98=', 474, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Βρίσκεται στην τελευταία θέση που βρισκόταν πριν το κλείσιμο του προγράμματος";
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
    question.shortTextQuestion = "43. Σημειώστε ποια είναι τα κύρια χαρακτηριστικά των στρωμάτων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('40FkeyZMv4M=', 478, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η διαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dkDtPlPjGz0=', 480, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η απόκρυψη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dkDtPlPjGz0=', 482, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το χρώμα.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('llilsvaRwFw=', 484, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Το ενεργό στρώμα";
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
    question.shortTextQuestion = "44. Σημειώστε το σωστό:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VFoJm/uBJJw=', 488, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το Adobe Photoshop έχει μία ομάδα εργαλείων για επεξεργασία εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SsVmFnURkjo=', 490, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το Adobe Photoshop έχει δύο βασικές ομάδες εργαλείων: για τη ζωγραφική και για την επεξεργασία εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cQC5RD0HA7E=', 492, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το Adobe Photoshop έχει μία ομάδα εργαλείων για επεξεργασία εικόνας και ζωγραφική.";
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
    question.shortTextQuestion = "45. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2NHxsQxSz9Q=', 498, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με το πλήκτρο SHIFT κρύβεται και εμφανίζεται η κάθε παλέτα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wVqs23ycMEE=', 500, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με το πλήκτρο TAB κρύβονται και εμφανίζονται οι παλέτες και η γραμμή επιλογών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wVqs23ycMEE=', 502, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Με το πλήκτρο D κρύβεται και εμφανίζεται η κάθε παλέτα.";
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
    question.shortTextQuestion = "46. Σημειώστε το σωστό. Η εμφάνιση ενός εικονιδίου τριγωνικού σχήματος με θαυμαστικό στη μέση σημαίνει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('z+66erd/JjY=', 508, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ότι υπάρχουν λανθασμένοι παράμετροι για την εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('z+66erd/JjY=', 510, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ότι δεν υπάρχει αντίστοιχο χρώμα στον εκτυπωτή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zG3c5aTGhDk=', 512, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Ότι δεν είναι αποθηκευμένη η εικόνα.";
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
    question.shortTextQuestion = "47. Σημειώστε το σωστό. Σχετικά με τα χρώματα πρέπει να έχουμε υπόψη μας τα εξής:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h3MQtSFLO6I=', 518, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Τα εργαλεία χρησιμοποιούνται μόνο το χρώμα προσκηνίου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QHXhlqjKI+E=', 520, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η γόμα χρησιμοποιείται για να φανερώσει το χρώμα παρασκηνίου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+CPby8BSwEU=', 522, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Στην περίπτωση της μεγέθυνσης της εικόνας το χρώμα συμπληρώνεται από το προσκήνιο.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MVq6W/CIIM4=', 524, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Τα εργαλεία χρησιμοποιούν το χρώμα προσκηνίου και παρασκηνίου.";
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
    question.shortTextQuestion = "48. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XhNNEZGw1o0=', 528, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το εργαλείο του σταγονόμετρου βρίσκεται στην τελευταία θέση που βρισκόταν πριν το κλείσιμο του προγράμματος.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XhNNEZGw1o0=', 530, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το εργαλείο του σταγονόμετρου βρίσκεται στην εργαλειοθήκη δεξιά της οθόνης επεξεργασίας μιας εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IxMfzvLCKII=', 532, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το εργαλείο του σταγονόμετρου βρίσκεται στην μπάρα πάνω από την οθόνη επεξεργασίας μιας εικόνας.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nSN5LczlbGU=', 534, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Το εργαλείο του σταγονόμετρου βρίσκεται σε όλα τα παραπάνω.";
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
    question.shortTextQuestion = "49. Σημειώστε το σωστό. Η μεγέθυνση του παραθύρου της εικόνας ταυτόχρονα με τη μεγέθυνση της εικόνας γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KVFb8arRMVE=', 538, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αυτόματα με τη μεγέθυνση της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/N12bcte7zs=', 540, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αυτόματα με τη μεγέθυνση του παραθύρου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Vaf19YBGAWU=', 542, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Με την επιλογή resize windows to fit.";
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
    question.shortTextQuestion = "50. Σημειώστε το σωστό. Κάνουμε zoom για μεγέθυνση με τα πλήκτρα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VJWeWFcECM0=', 548, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Control + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VJWeWFcECM0=', 550, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Control + Alt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PbRRXkDV8SQ=', 552, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Control + πλήκτρο -";
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
    question.shortTextQuestion = "51. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mTlRjFqQG/Y=', 558, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Zoom Out = Alt + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mTlRjFqQG/Y=', 560, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Zoom Out = Alt + Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XFuovKHy1mk=', 562, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Zoom Out = Alt + πλήκτρο -";
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
    question.shortTextQuestion = "52. Σημειώστε το σωστό. Η διαφορά που έχει η επιλογή από το μενού view με την αντίστοιχη επιλογή από το zoom από την εργαλειοθήκη:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G7Z3w07E7Kk=', 568, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Έχουμε καθορισμένο το κέντρο της νέας προβολής.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G7Z3w07E7Kk=', 570, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δεν μπορεί να επιλεχθεί άλλο παράθυρο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ITAoahRc+oc=', 572, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Δεν μπορεί να χρησιμοποιηθεί στα αντικείμενα, μόνο στο παρασκήνιο.";
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
    question.shortTextQuestion = "53. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('X+8l1knrXJI=', 578, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να αλλάξουμε τη μονάδα μέτρησης των χαράκων μπαίνουμε στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NHln3YoepeU=', 580, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Για να αλλάξουμε τη μονάδα μέτρησης των χαράκων μπαίνουμε στο μενού File Preferences ή από την παλέτα Info (Πληροφορίες).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NHln3YoepeU=', 582, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Για να αλλάξουμε τη μονάδα μέτρησης των χαράκων μπαίνουμε στο μενού window.";
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
    question.shortTextQuestion = "54. Σημειώστε το σωστό. Για να δημιουργηθεί μία γραμμή - οδηγός πρέπει να:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NCpu1KOLBHs=', 588, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλεχθεί πρώτα η εντολή εισαγωγής χαράκων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pbnGL/o+/pQ=', 590, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλεχθεί πρώτα η εντολή θέασης χαράκων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZyDRnWgstOA=', 592, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Επιλεχθεί πρώτα η απόσταση που θέλουμε να έχουν οι γραμμές του πλέγματος μεταξύ τους.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hUQI5w2hJ68=', 594, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Επιλεχθεί η εντολή εισαγωγής νέας γραμμής-οδηγού.";
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
    question.shortTextQuestion = "55. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/s8MUXVJcXg=', 598, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή εμφάνισης χαράκων βρίσκεται στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/s8MUXVJcXg=', 600, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή εμφάνισης χαράκων βρίσκεται στο μενού File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VyQMgALb3ig=', 602, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η επιλογή εμφάνισης χαράκων βρίσκεται στο μενού widow.";
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
    question.shortTextQuestion = "56. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nBIL0NZBjlg=', 608, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή κλειδώματος και ξεκλειδώματος οδηγών βρίσκεται στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nBIL0NZBjlg=', 610, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή κλειδώματος και ξεκλειδώματος οδηγών βρίσκεται στο μενού file.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2nts69R3yVk=', 612, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η επιλογή κλειδώματος και ξεκλειδώματος οδηγών βρίσκεται στην εργαλειοθήκη.";
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
    question.shortTextQuestion = "57. Σημειώστε τις σωστές απαντήσεις:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yPl3FZRB5r4=', 618, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Στην ομάδα επιλογών πλέγματος υπάρχουν οι επιλογές: color style-gridline every-lock/unlock.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P8a+uH9p1h0=', 620, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στην ομάδα επιλογών πλέγματος υπάρχουν οι επιλογές: color style-gridline every-snap to.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gX89b/xQRhY=', 622, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Στην ομάδα επιλογών πλέγματος υπάρχουν οι επιλογές: color style-gridline every-subdivision.";
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
    question.shortTextQuestion = "58. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e1XyNGz7iLY=', 628, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή floating selection έχει ιδιότητες παρόμοιες με αυτές των στρωμάτων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rW6wEWAKBHU=', 630, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή floating selection έχει ιδιότητες ίδιες με αυτές των στρωμάτων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lTUCZYJkBMo=', 632, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η επιλογή floating selection έχει διαφορετικές ιδιότητες με αυτές των στρωμάτων.";
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
    question.shortTextQuestion = "59. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oLhrTtUoNeE=', 638, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το Constrain Proportions αλλάζει μόνο όταν είναι ενεργό το Resample image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oLhrTtUoNeE=', 640, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το Constrain Proportions αλλάζει μόνο όταν είναι ανενεργό το Resample image.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r7TTipJtWq8=', 642, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το Constrain Proportions αλλάζει μόνο όταν αλλάζουμε τις διαστάσεις της εικόνας ανεξάρτητα από το πλαίσιο διαλόγου Resample image.";
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
    question.shortTextQuestion = "60. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UKS0ZmfB3Y4=', 648, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η αλλαγή διαστάσεων μιας εικόνας γίνεται μπαίνοντας στο μενού Image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B+2ExO/66ds=', 650, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η αλλαγή διαστάσεων μιας εικόνας που βρίσκεται σε επίπεδο (layer) γίνεται μπαίνοντας στο υπομενού Transform > Scale μέσα από το μενού Edit.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('B+2ExO/66ds=', 652, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η αλλαγή διαστάσεων μιας εικόνας γίνεται μπαίνοντας στο μενού File.";
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
    question.shortTextQuestion = "61. Σημειώστε το σωστό. Βλέπουμε με χρώμα τα κανάλια μιας έγχρωμης φωτογραφίας με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H+TbCe6mIW0=', 658, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή Interface από το υπομενού Preferences.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H+TbCe6mIW0=', 660, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. πάτημα πλήκτρων Control + 1.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pP7GlSbyoik=', 662, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. πάτημα πλήκτρων Control + 4.";
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
    question.shortTextQuestion = "62. Σημειώστε το σωστό. Για να δούμε το κόκκινο κανάλι μιας έγχρωμης RGB φωτογραφίας πατάμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KnbL1CZXoRY=', 668, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Control + 3";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p9xr7RXyMM4=', 670, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Control + 2";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lngKpN1L/+s=', 672, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Control + 1";
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
    question.shortTextQuestion = "63. Σημειώστε το σωστό ή τα σωστά. Εργαλεία επιλογής είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NczSBFPmmpE=', 678, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Λάσο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3XuQQY/pcuo=', 680, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μαγικό ραβδάκι.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kQiMEFcWuP4=', 682, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Πολυγωνικό λάσο.";
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
    question.shortTextQuestion = "64. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DcooLDInsUM=', 688, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το πλαίσιο ελέγχου anti aliased χρησιμοποιείται για την αποεπιλογή.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ehlTHYZ4naU=', 690, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή Deselect από το μενού Select χρησιμοποιείται για την αποεπιλογή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ehlTHYZ4naU=', 692, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Πάτημα με μαγικό ραβδάκι μέσα από την επιλεγμένη περιοχή χρησιμοποιείται για την αποεπιλογή.";
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
    question.shortTextQuestion = "65. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IFeqZcc3ZIc=', 698, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ανάμειξη pixels με τιμή λαμπρότητας 255 και από τα τρία κανάλια δίνει λευκό χρώμα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IFeqZcc3ZIc=', 700, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ανάμειξη pixels με τιμή λαμπρότητας 0 και από τα τρία κανάλια δίνει λευκό χρώμα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5uiYWF4siBg=', 702, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Ανάμειξη pixels με τιμή λαμπρότητας 100 και από τα τρία κανάλια δίνει λευκό χρώμα.";
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
    question.shortTextQuestion = "66. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1RHaCifWlAg=', 708, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Pixels με τιμή λαμπρότητας 0 στο κόκκινο κανάλι, 126 στο μπλε και 250 στο πράσινο, σχηματίζουν το χρώμα ματζέντα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Befhe9qGT3o=', 710, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Pixels με τιμή λαμπρότητας 0 στο κόκκινο κανάλι, 250 στο μπλε και 0 στο πράσινο, σχηματίζουν το χρώμα ματζέντα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CBVpLB3RUfI=', 712, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Pixels με τιμή λαμπρότητας 230 στο κόκκινο κανάλι, 126 στο μπλε και 0 στο πράσινο, σχηματίζουν το χρώμα ματζέντα.";
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
    question.shortTextQuestion = "67. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ekKEIqN5q/s=', 718, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με το μαγικό ραβδάκι επιλέγουμε μια περιοχή της εικόνας με διαφορετικά χρώματα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GJjZAEaga/U=', 720, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με το μαγικό ραβδάκι επιλέγουμε μια περιοχή συγγενών χρωμάτων της εικόνας αυτόματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GJjZAEaga/U=', 722, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Με το μαγικό ραβδάκι επιλέγουμε δύο χρώματα της εικόνας.";
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
    question.shortTextQuestion = "68. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G4mGWXYQUko=', 728, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Τα επίπεδα είναι απαραίτητα σε μια εργασία επεξεργασίας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nXkI9wLZbSc=', 730, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Τα επίπεδα είναι απαραίτητα μόνο σε μια εργασία επεξεργασίας πολλών ταυτόχρονων εικόνων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Mad0n2STqJo=', 732, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Τα επίπεδα είναι απαραίτητα για την εισαγωγή βίντεο σε επίπεδο επεξεργασίας εικόνας.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LlzsBuRayj8=', 734, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Τα επίπεδα δεν είναι απαραίτητα αλλά βοηθούν αποτελεσματικά στην σωστή επεξεργασία μιας εικόνας.";
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
    question.shortTextQuestion = "69. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qYsrp/yGogs=', 738, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η διαφάνεια ενός επιπέδου δε μπορεί να αλλάξει.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dy+LF5n+cVg=', 740, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η αδιαφάνεια ενός επιπέδου δεν μπορεί να αλλάξει.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jgPadFLSr0U=', 742, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η αδιαφάνεια ενός επιπέδου μπορεί να αλλάξει και να γίνει μερική αδιαφάνεια.";
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
    question.shortTextQuestion = "70. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gaOQbms2JO4=', 748, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Στο έξυπνο αντικείμενο μπορούμε να εφαρμόσουμε εφέ φίλτρων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gaOQbms2JO4=', 750, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το έξυπνο αντικείμενο έχει ένα επίπεδο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('noQRc5pIVWc=', 752, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το έξυπνο αντικείμενο έχει εντολές χρωματισμού.";
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
    question.shortTextQuestion = "71. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5E49pweELHc=', 758, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ο πίνακας \"επίπεδα\" έχει εμφάνιση/απόκρυψη επιπέδων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oJjkdaYAi1s=', 760, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ο πίνακας \"επίπεδα\" έχει εφέ, μικρογραφίες, ανάπτυξη και σύμπτυξη ομάδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uRA+lvFO+Og=', 762, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω.";
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
    question.shortTextQuestion = "72. Σημειώστε το σωστό. Για να ανοίξει ή να κρυφτεί ένα επίπεδο ή ομάδα επιπέδων κλικάρουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TlGP6Pa7FfQ=', 768, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το μάτι αριστερά από το εικονίδιο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TlGP6Pa7FfQ=', 770, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στο πάνω αριστερά εικονίδιο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Jw4tozjEc30=', 772, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Στο εικονίδιο είτε πάνω αριστερά είτε πάνω δεξιά.";
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
    question.shortTextQuestion = "73. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EMv92t06Hpc=', 778, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στο μάτι αριστερά κάθε εικονιδίου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EMv92t06Hpc=', 780, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στις επιλογές του πίνακα Επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hc5phVUK/Eg=', 782, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στις εντολές του μενού Επιπέδων.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AIc7S390zVI=', 784, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Όλα τα παραπάνω.";
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
    question.shortTextQuestion = "74. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r4f8mNJpAyU=', 788, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η λειτουργία ανάμειξης ορίζει έναν τρόπο ανάμειξης για το επίπεδο ή την ομάδα σε σχέση με τα άλλα επίπεδα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r4f8mNJpAyU=', 790, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η λειτουργία ορίζει έναν τρόπο εκτύπωσης μόνο των ορατών επιπέδων ή ομάδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KO1PsbQYP8w=', 792, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η λειτουργία ορίζει έναν τρόπο εισαγωγής εφέ μόνο σε ένα επίπεδο ή μια ομάδα.";
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
    question.shortTextQuestion = "75. Σημειώστε το σωστό. Δημιουργία εγγράφου από επίπεδο σε ομάδα γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eK+IukASaCo=', 798, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Την εντολή \"διπλασιασμός\", μέσα από το μενού αρχείο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vdtAvfu7oQ8=', 800, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Την εντολή \"διπλασιασμός\", μέσα από τον πίνακα επιπέδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vdtAvfu7oQ8=', 802, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Την εντολή \"διπλασιασμός\", με συνδυασμό πλήκτρων.";
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
    question.shortTextQuestion = "76. Σημειώστε το σωστό. Επαναφέρουμε τις προηγούμενες ρυθμίσεις ορατότητας των επιπέδων με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ujiqdjEhOIA=', 808, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Πατημένο Alt/Option + κλικ στο εικονίδιο του ματιού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ujiqdjEhOIA=', 810, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Πατημένο Control + κλικ στο εικονίδιο του ματιού.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AwxYTbTORD0=', 812, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Πατημένο Shift + κλικ στο εικονίδιο του ματιού.";
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
    question.shortTextQuestion = "77. Σημειώστε το σωστό. Για να ανοίξουμε μια ομάδα επιπέδων κάνουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uxjcSY3Ok8E=', 818, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με πατημένο το Alt κάνουμε κλικ στο τρίγωνο αριστερά του εικονιδίου του φακέλου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('39RY0xtzUpM=', 820, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κλικ στο τρίγωνο αριστερά του εικονιδίου του φακέλου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('39RY0xtzUpM=', 822, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Με πατημένο το Shift κάνουμε κλικ στο τρίγωνο αριστερά του εικονιδίου του φακέλου.";
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
    question.shortTextQuestion = "78. Σημειώστε το σωστό. Η δειγματοληψία χρώματος γίνεται με τα εργαλεία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OLnF0/wUBic=', 828, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μαγικό ραβδάκι.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fjkgn1u4Aig=', 830, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Σφραγίδα αντιγραφής και πινέλου διόρθωσης.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XA7qkWJa5bs=', 832, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το σταγονόμετρο.";
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
    question.shortTextQuestion = "79. Σημειώστε το σωστό. Εάν δεν εφαρμόζεται μία εντολή φταίει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yvaiywsuLFg=', 838, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το επίπεδο στο οποίο εργαζόμαστε δεν είναι ενεργό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yvaiywsuLFg=', 840, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το επίπεδο στο οποίο εργαζόμαστε είναι συνδεδεμένο με άλλο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('41Vtn6oCTqc=', 842, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το επίπεδο στο οποίο εργαζόμαστε ανήκει σε ομάδα.";
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
    question.shortTextQuestion = "80. Σημειώστε το σωστό. Για να αποεπιλέξουμε ένα επίπεδο:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5IrwT04UBcY=', 848, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Κρατάμε πατημένο το πλήκτρο Control + κλικ στην περιοχή έξω από το εικονίδιο του επιπέδου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5IrwT04UBcY=', 850, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κρατάμε πατημένο το πλήκτρο Alt + κλικ στην περιοχή έξω από το εικονίδιο επιπέδου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tHf7aX9jd+g=', 852, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Κρατάμε πατημένο το πλήκτρο Shift + κλικ έξω από το εικονίδιο του επιπέδου.";
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
    question.shortTextQuestion = "81. Σημειώστε το σωστό. Η αυτόματη επιλογή επιπέδων εμφανίζεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q9PbFtLY3/A=', 858, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αφού πατήσουμε το εργαλείο μετακίνησης.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q9PbFtLY3/A=', 860, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αφού πατήσουμε το εργαλείο της επιλογής.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cz49zx1wYio=', 862, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Αφού πατήσουμε το εικονίδιο σύνδεσης στη γραμμή του πίνακα \"Επιπέδων\".";
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
    question.shortTextQuestion = "82. Σημειώστε το σωστό. Η δημιουργία ομάδας από ένα επίπεδο γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1o8WY50YO50=', 868, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Σέρνουμε το επίπεδο προς το εικονίδιο φακέλου στο κάτω μέρος του πίνακα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1o8WY50YO50=', 870, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κρατώντας πατημένο το Control σύρουμε το επίπεδο προς το εικονίδιο φακέλου στο κάτω μέρος του πίνακα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6ISpgakNN28=', 872, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Κρατώντας πατημένο το Shift σύρουμε το επίπεδο προς το εικονίδιο νέου επιπέδου στο κάτω μέρος του πίνακα.";
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
    question.shortTextQuestion = "83. Σημειώστε το σωστό. Η παλέτα των καναλιών μιας εικόνας έχει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DBGL6Jff8Tw=', 878, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ακριβώς τις ίδιες λειτουργίες με την παλέτα των Επιπέδων εκτός από την εντολή της ορατότητας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wcwZWSl+kNo=', 880, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Έχει ακριβώς τις ίδιες λειτουργίες με την παλέτα των Επιπέδων εκτός από το εικονίδιο της σύνδεσης.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eIWa0rHjFeM=', 882, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Τίποτα από τα παραπάνω.";
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
    question.shortTextQuestion = "84. Σημειώστε το σωστό. Η παλέτα καναλιών μιας εικόνας είναι χρήσιμη:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yhq+3y2DJdE=', 888, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να διορθωθούν τα χρώματα μιας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+cpgFyfEbGg=', 890, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Για να αλλάξουν εντελώς τα χρώματα μιας εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BwNFrihA/OE=', 892, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Για να οργανωθούν όλα τα χρώματα μιας εικόνας σε μία σειρά.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WlcFk+vOtYc=', 894, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Τίποτα από τα παραπάνω.";
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
    question.shortTextQuestion = "85. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aDVbSRVcDKg=', 898, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το κανάλι Άλφα δίνει τη δυνατότητα για μερική διαφάνεια του χρώματος που καλύπτει το μεγαλύτερο μέρος της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wt3sqC6vQG4=', 900, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το κανάλι Άλφα δίνει τη δυνατότητα για μερική διαφάνεια μόνο ενός χρώματος της εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aWqMYwsFSaE=', 902, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το κανάλι Άλφα δίνει τη δυνατότητα για μερική ή ολική αδιαφάνεια ενός μέρους της εικόνας.";
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
    question.shortTextQuestion = "86. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7BtOf+sQtgY=', 908, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το κανάλι Άλφα χρησιμοποιείται για μερική ή ολική αδιαφάνεια ενός μέρους της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7BtOf+sQtgY=', 910, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το κανάλι Άλφα χρησιμοποιείται για σύνδεση εικόνων με διακριτά όρια.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dsIUx/u6v/E=', 912, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το κανάλι Άλφα χρησιμοποιείται για σύνδεση εικόνων χωρίς όρια.";
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
    question.shortTextQuestion = "87. Σημειώστε το σωστό. Το ιστόγραμμα μιας εικόνας εμφανίζεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gOl1bHBaC1E=', 918, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Όταν κλικάρουμε στην εντολή από το μενού Window.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gOl1bHBaC1E=', 920, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Όταν κλικάρουμε στην εντολή από το μενού File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NMMPm+lpTkc=', 922, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όταν κλικάρουμε στην εντολή από το μενού Edit.";
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
    question.shortTextQuestion = "88. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aOq9FLYAP2M=', 928, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η ενέργεια «Αναίρεση» γίνεται μπαίνοντας στο μενού επεξεργασίας (Edit).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aOq9FLYAP2M=', 930, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η ενέργεια «Αναίρεση» γίνεται μπαίνοντας στο μενού Αρχείου (File).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wMblSeIJ/8M=', 932, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η ενέργεια «Αναίρεση» γίνεται μπαίνοντας στο μενού Επιλογής (Select).";
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
    question.shortTextQuestion = "89. Σημειώστε το σωστό.  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hCsLk9PodoA=', 938, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. H ενέργεια «επαναφορά» γίνεται με επιλογή του εργαλείου πινέλου ιστορικού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hCsLk9PodoA=', 940, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η ενέργεια «επαναφορά» γίνεται με επιλογή εργαλείου γόμας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lDBsEZVUwck=', 942, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η ενέργεια «επαναφορά» γίνεται με επιλογή της εντολής γεμίσματος από το μενού Αρχείο.";
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
    question.shortTextQuestion = "90. Σημειώστε το σωστό. Για να ενεργοποιηθεί η εντολή «αυτόματη λήψη πρώτου στιγμιότυπου»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SM67ITDlzYQ=', 948, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιούμε την εντολή «Επιλογές Ιστορικού».";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SM67ITDlzYQ=', 950, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρησιμοποιούμε την εντολή γεμίσματος από το μενού Αρχείου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6YqZ7Jr9ZQM=', 952, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρησιμοποιούμε το εργαλείο της γόμας αφού πρώτα πατήσουμε το εικονίδιο της λήψης στιγμιότυπου στο κάτω μέρος του πίνακα.";
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
    question.shortTextQuestion = "91. Σημειώστε το σωστό. Για να εμφανίσουμε μία ηχητική ειδοποίηση για ολοκλήρωση μιας λειτουργίας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ToAahPHj/pg=', 958, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνουμε στο μενού Επεξεργασία, επιλέγουμε τις προτιμήσεις και μετά ηχητική ειδοποίηση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ToAahPHj/pg=', 960, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνουμε στο μενού Επεξεργασίας, επιλέγουμε προτιμήσεις.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4ll7QSVSpNQ=', 962, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπαίνουμε στο μενού Επιλογής και επιλέγουμε τις προτιμήσεις.";
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
    question.shortTextQuestion = "92. Σημειώστε το σωστό. Ο πίνακας «Ιστορικό» ορίζει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UIP1aJQ3/e0=', 968, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μόνο την προέλευση του πινέλου ιστορικού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zxMvxadjFwA=', 970, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο την κατάσταση ιστορικού.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TQF4dh+/xQo=', 972, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μόνο μικρογραφία στιγμιότυπου.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HXAUcQY61pM=', 974, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα βήματα επεξεργασίας από το άνοιγμα αρχείου.";
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
    question.shortTextQuestion = "93. Σημειώστε το σωστό. Η ενέργεια «διπλασιασμός κατάστασης»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4erdi3XTO6M=', 978, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Χρησιμοποιείται για μελλοντική χρήση μιας συγκεκριμένης επεξεργασίας μιας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4erdi3XTO6M=', 980, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Χρησιμοποιείται για να υπάρχει πρόσβαση στο αρχικό στιγμιότυπο κάθε αρχείου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('68HoDuOfnBI=', 982, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Χρησιμοποιείται για να μην υπάρχει ακολουθία ενεργειών στη διπλασιασμένη κατάσταση.";
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
    question.shortTextQuestion = "94. Σημειώστε το σωστό. Η ενέργεια «δημιουργία νέου εγγράφου από συγκεκριμένη κατάσταση» γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XRfymR4zn3c=', 988, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αφού συρθεί η συγκεκριμένη κατάσταση στο εικονίδιο δημιουργία νέου εγγράφου από την τρέχουσα κατάσταση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UmZ4CpoHUHA=', 990, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με κλικάρισμα στο εικονίδιο δημιουργία νέου εγγράφου από την τρέχουσα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3EfeyK5ygoQ=', 992, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω.";
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
    question.shortTextQuestion = "95. Σημειώστε το σωστό. Η ενέργεια «διαγραφή ιστορικού»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jv5dp/SReiI=', 998, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαγράφει όλα τα βήματα επεξεργασίας μετά το τελευταίο άνοιγμα του αρχείου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jv5dp/SReiI=', 1000, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαγράφει μόνο τις ακόλουθες ενέργειες.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('umFnl30HqQ0=', 1002, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δεν μπορεί να αναιρεθεί.";
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
    question.shortTextQuestion = "96. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7weQoGUb13k=', 1008, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επαναφορά σε μία προηγούμενη κατάσταση γίνεται μέσω μενού Επεξεργασία, πατώντας βήμα πίσω.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7weQoGUb13k=', 1010, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η επαναφορά σε μία προηγούμενη κατάσταση γίνεται μέσω μενού Επεξεργασία, πατώντας αναίρεση.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jSoQqzrdJTE=', 1012, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. η επαναφορά σε μία προηγούμενη κατάσταση γίνεται μέσω μενού Αρχείου, πατώντας τα κατάλληλα κουμπιά.";
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
    question.shortTextQuestion = "97. Σημειώστε το σωστό. Η μνήμη του προγράμματος:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Sb4JjGNi41s=', 1018, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Απελευθερώνεται περισσότερη μνήμη αφού διαγραφεί το ιστορικό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Sb4JjGNi41s=', 1020, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Απελευθερώνεται όλη η μνήμη αφού διαγραφεί το ιστορικό.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n0ulKIWoCH0=', 1022, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Δεν επηρεάζεται από τη διαγραφή ιστορικού.";
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
    question.shortTextQuestion = "98. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bGo0uZSIws4=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή «προτιμήσεων ιστορικού» βρίσκεται μέσα στο μενού επεξεργασίας (edit) > Προτιμήσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bGo0uZSIws4=', 1030, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή «καταγραφή ιστορικού» βρίσκεται μέσα στο μενού αρχείο (file).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xlUPW5u6b10=', 1032, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Η επιλογή «καταγραφή ιστορικού» βρίσκεται μέσα στο μενού παράθυρο (window).";
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
    question.shortTextQuestion = "99. Σημειώστε το σωστό. Η θέση αποθήκευσης των μεταδεδομένων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3hewsqo8Wl0=', 1038, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχει επιλεχθεί αυτόματα από το πρόγραμμα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nJA0J8LsS/M=', 1040, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορεί να οριστεί από τον χρήστη/δημιουργό.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ER3PeAyI4Ug=', 1042, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω.";
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
    question.shortTextQuestion = "100. Σημειώστε το σωστό. Στις «επιλογές ιστορικού»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('73q0+rUHolE=', 1048, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. υπάρχει η επιλογή δημιουργία/αντικατάσταση στιγμιότυπου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('u06CoZVvX6k=', 1050, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν υπάρχει η επιλογή αυτόματη δημιουργία νέου στιγμιότυπου όταν σώζεται.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DzJlxHCm7tg=', 1052, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. υπάρχει η επιλογή αυτόματη δημιουργία πρώτου στιγμιότυπου.";
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
    question.shortTextQuestion = "101. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L2/iHo3n3Q8=', 1058, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Οι ενέργειες αποθηκεύονται για μια ολόκληρη χρονική περίοδο των λειτουργιών, ενώ τα στιγμιότυπα όχι.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Imba38I3odU=', 1060, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το στιγμιότυπο μπορεί να μετονομαστεί ενώ η ενέργεια όχι.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Imba38I3odU=', 1062, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Tο στιγμιότυπο δεν διευκολύνει την ανάκτηση της εργασίας.";
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
    question.shortTextQuestion = "102. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0UtKfusq/5A=', 1068, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το στιγμιότυπο μπορεί να επεξεργαστεί.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0UtKfusq/5A=', 1070, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το στιγμιότυπο είναι αντίγραφο και δεν μπορεί να επεξεργαστεί.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NrtCjVulGwo=', 1072, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το στιγμιότυπο είναι αντίγραφο και μπορεί να επεξεργαστεί βάσει αυτόματης εντολής.";
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
    question.shortTextQuestion = "103. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0kA/QkOXvG0=', 1078, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ο διαχειριστής προκαθορισμένων ρυθμίσεων χρησιμοποιείται για να δημιουργηθούν νέες ενέργειες.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MWYf9SD2g7k=', 1080, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ο διαχειριστής προκαθορισμένων ρυθμίσεων χρησιμοποιείται για να αλλάξει ο αριθμός των ενεργειών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wGEif65ppGM=', 1082, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Ο διαχειριστής προκαθορισμένων ρυθμίσεων χρησιμοποιείται για τη διαχείριση των βιβλιοθηκών των προκαθορισμένων πινέλων, δειγμάτων, ντεγκραντέ, στυλ, μοτίβων, περιγραμμάτων, εργαλείων κλπ.";
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
    question.shortTextQuestion = "104. Σημειώστε το σωστό. Ο διαχειριστής προκαθορισμένων ρυθμίσεων ανοίγει :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t3HbzbORjmk=', 1088, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από το μενού Επεξεργασίας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t3HbzbORjmk=', 1090, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μέσα από το μενού του πίνακα των βιβλιοθηκών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eFgUkI7jU3Q=', 1092, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μέσα από το μενού Αρχείου";
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
    question.shortTextQuestion = "105. Σημειώστε το σωστό. Για να φορτωθεί μια βιβλιοθήκη στον πίνακα βιβλιοθηκών στο διαχειριστή προκαθορισμένων ρυθμίσεων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8EPPtd5rcvE=', 1098, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνετε στον πίνακα της βιβλιοθήκης.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8EPPtd5rcvE=', 1100, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνετε στο μενού της Επεξεργασίας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hFalqwZ2gas=', 1102, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπαίνετε στο μενού της Επιλογής.";
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
    question.shortTextQuestion = "106. Σημειώστε το σωστό. Για να αλλάξει ονομασία ένα προκαθορισμένο στοιχείο μιας βιβλιοθήκης στο διαχειριστή προκαθορισμένων ρυθμίσεων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AK1nR1F3MM0=', 1108, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. απλό κλικ στο στοιχείο και αλλαγή ονόματος και ΟΚ (όχι διπλό).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0iKzZGWuJ7k=', 1110, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στο στοιχείο και αλλαγή ονόματος και enter.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0iKzZGWuJ7k=', 1112, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω.";
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
    question.shortTextQuestion = "107. Σημειώστε το σωστό. Για να διαγραφεί ένα προκαθορισμένο στοιχείο:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Fcuge6c8YJE=', 1118, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το επιλέγουμε και κάνουμε κλικ στο εικονίδιο διαγραφής.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fcuge6c8YJE=', 1120, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κάνουμε διπλό κλικ πάνω του.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YDAKXzOwNww=', 1122, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπαίνουμε στο μενού Επεξεργασία και πατάμε το κουμπί διαγραφής.";
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
    question.shortTextQuestion = "108. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mWkDNiak81Y=', 1128, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. Οι επεκτάσεις είναι προγράμματα διαφορετικών εκδόσεων Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ElAwwfobbVY=', 1130, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Οι επεκτάσεις είναι προγράμματα από την Adobe Systems.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HIPFZEbaoog=', 1132, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Οι επεκτάσεις είναι προγράμματα από την Mac OS.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SCxWrgcEzDU=', 1134, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Οι επεκτάσεις είναι προγράμματα λογισμικού από την Adobe και από άλλους πάροχους.";
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
    question.shortTextQuestion = "109. Σημειώστε το σωστό. Οι νέες επεκτάσεις που εγκαθίστανται εμφανίζονται :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kBwzORfncYA=', 1138, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο υπομενού φίλτρα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fq15LLPukUE=', 1140, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο υπομενού Εισαγωγή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bFkR7F6Zc9c=', 1142, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στο υπομενού Εξαγωγή.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('S3Y2vRPdJ5U=', 1144, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω.";
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
    question.shortTextQuestion = "110. Σημειώστε το σωστό. Τα προειδοποιητικά μηνύματα επαναφέρονται σε λειτουργεία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I1LPeM+/qtk=', 1148, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέγοντας «να μην εμφανιστεί ξανά».";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('USxTqL9lrr4=', 1150, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέγοντας Επαναφορά από το υπομενού γενικές μέσα στις προτιμήσεις.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('USxTqL9lrr4=', 1152, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Επιλέγοντας ΟΚ μέσα από το αναδυόμενο παράθυρο που βγαίνει από το ίδιο το μήνυμα.";
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
    question.shortTextQuestion = "111. Σημειώστε το σωστό. Γίνεται επαναφορά των προτιμήσεων του Photoshop στις προεπιλεγμένες ρυθμίσεις με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fmGqcKw9nek=', 1158, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Kαθώς ανοίγετε το Photoshop πατήστε και καρατήστε πατημένα τα πλήκτρα Alt + Control + Shift.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ISwQ9nGnjw8=', 1160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με πάτημα των πλήκτρων Control + Shift + Backspace.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ISwQ9nGnjw8=', 1162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Με πάτημα των πλήκτρων Control + Shift.";
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
    question.shortTextQuestion = "112. Σημειώστε το σωστό. Η «Επαναφορά» εμφάνισης πίνακα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Oqjw3r7zQ6s=', 1168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται στο μενού πίνακα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Oqjw3r7zQ6s=', 1170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται στο μενού Αρχείο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/5duSS87OVg=', 1172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Βρίσκεται στο μενού του Παραθύρου.";
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
    question.shortTextQuestion = "113. Σημειώστε το σωστό. Για να αποθηκευτεί η αναζήτηση ενός θέματος:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ga8KO0Dr83Y=', 1178, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέξτε Custom και αναζήτηση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ga8KO0Dr83Y=', 1180, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέξτε View on line.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zw6OR/y+jAY=', 1182, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Επιλέξτε Search .";
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
    question.shortTextQuestion = "114. Σημειώστε το σωστό. Ο πίνακας Kuler είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t2lgIghIOiY=', 1188, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ένα πρόγραμμα λογισμικού για χρωματισμό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/VJJoWadI5s=', 1190, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. παρέχει πρόσβαση σε ομάδες χρωμάτων ή θεμάτων που έχουν δημιουργηθεί από μια online κοινότητα σχεδιαστών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/VJJoWadI5s=', 1192, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. πίνακας με παλέτα χρωμάτων.";
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
    question.shortTextQuestion = "115. Σημειώστε το σωστό. Όταν θέλετε πληροφορίες για τις εγκατεστημένες επεκτάσεις:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mxF3/XYcVqg=', 1198, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνετε μέσα στο μενού βοήθεια.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fQYOWrlXZm4=', 1200, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνετε μέσα στο μενού του παραθύρου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fQYOWrlXZm4=', 1202, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπαίνετε μέσα στο μενού του Αρχείου.";
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
    question.shortTextQuestion = "116. Σημειώστε το σωστό. Αν δεν μπορείτε να εκτελέσετε μία επέκταση παρόχου, ενδεχομένως:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3u5umiq7cXs=', 1208, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να χρειάζεται κωδικός για την επέκταση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Gn2E6iodtQ8=', 1210, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να χρειάζεται σειριακός αριθμός παλαιότερης έκδοσης του Photoshop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Gpz+PVzdoxE=', 1212, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω.";
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
    question.shortTextQuestion = "117. Σημειώστε το σωστό. Ο πίνακας Κuler χρησιμοποιείται για:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QO2gGES2uMo=', 1218, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την αναζήτηση χιλιάδων θεμάτων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iftHoiwc4sM=', 1220, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. την λήψη, επεξεργασία και ενσωμάτωση θεμάτων σε μια εικόνα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mmOT/4Wfcv0=', 1222, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. για αποθήκευση και διανομή θεμάτων.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EtYu1JDjsgI=', 1224, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω.";
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
    question.shortTextQuestion = "118. Σημειώστε το σωστό: Για εισαγωγή εικόνων από φωτογραφική μηχανή για Mac OS, χρησιμοποιείται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QambU2/NrPs=', 1228, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. WIA";
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
    answer3.shortTextAnswer = "Γ. Adobe Bridge";
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
    question.shortTextQuestion = "119. Σημειώστε το σωστό: Εισαγωγή εικόνας από σαρωτή με συμβατή επέκταση:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PB0h5bCtwoU=', 1238, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσω File στο import και μετά κλικ στο σαρωτή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PB0h5bCtwoU=', 1240, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μέσω Edit και μετά κλικ import";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lZSJjmaSqEA=', 1242, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μέσω Select και μετά κλικ import";
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
    question.shortTextQuestion = "120. Σημειώστε το σωστό: Για να αλλάξουν οι διαστάσεις εκτύπωσης και ανάλυσης χωρίς να αλλάξει ο αριθμός εικονοστοιχείων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('za4Pd18bEtY=', 1248, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. πρέπει να ενεργοποιηθεί η εντολή «Αναδειγματοληψία εικόνας»";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('edaepvg+AVw=', 1250, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. πρέπει να απενεργοποιηθεί η εντολή «Αναδειγματοληψία εικόνας»";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('edaepvg+AVw=', 1252, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. πρέπει να επιλεχθεί η εντολή «Αυτόματη» από το μενού";
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
    question.shortTextQuestion = "121. Σημειώστε το σωστό: Πως μπορούμε να δούμε στην οθόνη τις πραγματικές της διαστάσεις εκτύπωσης μιας εικόνας;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('f7Fs39Z8Ko4=', 1258, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνοντας στο μενού Προβολή και μετά επιλογή εντολής «Μέγεθος εκτύπωσης»";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f7Fs39Z8Ko4=', 1260, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνοντας στο μενού Εικόνα και μετά επιλογή εντολής «Μέγεθος εκτύπωσης»";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NO7ymo6KBu0=', 1262, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπαίνοντας στο μενού Εργαλεία και μετά επιλογή εντολής «Μέγεθος εκτύπωσης»";
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
    question.shortTextQuestion = "122. Σημειώστε το σωστό: Η επιλογή «Χρώμα επέκτασης καμβά»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iXjECo5CZcM=', 1268, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρωματίζει τα κενά της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fIpsqAlCFfc=', 1270, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διατίθεται μόνο σε μια σύνθετη και πολυεπίπεδη εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H1GqxxtmONc=', 1272, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διατίθεται μόνο σε μια μονοεπίπεδη εικόνα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('amWhmQxrD0w=', 1274, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. διατίθεται σε οποιαδήποτε εικόνα";
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
    question.shortTextQuestion = "123. Σημειώστε το σωστό Η επιλογή χρωματική ισορροπία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U1YMQNli8F4=', 1278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν έχει την ευελιξία της επιλογής Curves";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U1YMQNli8F4=', 1280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Έχει τη δυνατότητα να εστιάσει σε πολλές τονικότητες χρωμάτων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f+exePiNpWA=', 1282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Είναι ευέλικτο";
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
    question.shortTextQuestion = "124. Σημειώστε το σωστό Η Επιλογή Curves βρίσκεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('S+J0IUvXxhQ=', 1288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε επίπεδο ρύθμισης (Adjustment layer)";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3mxJyvHpQ4s=', 1290, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Ως αυτόνομη επιλογή στο πρόγραμμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H1KCmzTauA0=', 1292, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "125. Σημειώστε το σωστό Στο εργαλείο Levels  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FdRN236L4j8=', 1298, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. όσα χρώματα είναι ουδέτερα παραμένουν ίδια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SStzuFFI7fk=', 1300, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο το κόκκινο παραμένει το ίδιο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4YOcf17TQGY=', 1302, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μόνο το πράσινο παραμένει το ίδιο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2NlwsgrFE54=', 1304, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "126. Σημειώστε το σωστό Με το εργαλείο Levels:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('np/gmMtP/0w=', 1308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επηρεάζονται τα φωτεινά χρώματα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gl1qC61tk7o=', 1310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β επηρεάζονται τα σκοτεινά χρώματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('802YWbYqUGg=', 1312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επηρεάζονται περισσότερο τα φωτεινά και λιγότερο τα σκούρα χρώματα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('algAOVrwh5g=', 1314, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "127. Σημειώστε το σωστό Η εντολή anti-aliased :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+8uUV1WTXgo=', 1318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εξομαλύνει τα άκρα μιας περιοχής της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+8uUV1WTXgo=', 1320, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σκληραίνει τα άκρα μιας περιοχής της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IFT5kTHAw/Q=', 1322, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στρογγυλεύει τα άκρα μιας περιοχής της εικόνας";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5M0Vd9aJ5G0=', 1324, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "128. Σημειώστε το σωστό Στο εργαλείο ντεγκραντέ υπάρχουν οι λειτουργίες:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PL85YKriTKo=', 1328, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Linear, Radial";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6zElX/1vVSU=', 1330, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Angle.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eLPayK3u2yI=', 1332, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Diamond, Reflected, Linear, Radial";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gp7wRLNsEJk=', 1334, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "129. Σημειώστε το σωστό Το εργαλείο linear :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MisI6L4s2xA=', 1338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργεί ντεγκραντέ κατά μήκος μιας ευθείας γραμμής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MisI6L4s2xA=', 1340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργεί ντεγκραντέ κατά μήκος μιας τεθλασμένης γραμμής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YPpq+bTalhA=', 1342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δημιουργεί ντεγκραντέ σε κυκλική διάταξη";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Q9vxzwJn1jQ=', 1344, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "130. Σημειώστε το σωστό: Με τα εργαλεία σχεδιασμού:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eUWlG/l7f2c=', 1348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργούμε Κουμπιά, γραμμές και στοιχεία χρήσιμα για ιστοσελίδες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LgXASe/MPgo=', 1350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επεξεργαζόμαστε και βελτιώνουμε την εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gBPUVAVYpec=', 1352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Κάνουμε διάφορα εφέ στην εικόνα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('r0EBLqFvPRE=', 1354, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Όλα τα παραπάνω";
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
    question.shortTextQuestion = "131. Σημειώστε το σωστό: Για να γεμίσει μη επιλεγμένο κείμενο στο επίπεδό του, με χρώμα φόντου πατάμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('edEkTSQpO8I=', 1358, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Shift+ Alt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M+DOXD0Kfi8=', 1360, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Shift+ Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pWugD/kKmWQ=', 1362, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Control + Backspace";
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
    question.shortTextQuestion = "132. Σημειώστε το σωστό: Ένα εργαλείο σχήματος ή πένας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3rRDcQPlcI8=', 1368, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέγεται πριν την εντολή Επίπεδο σχήματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3rRDcQPlcI8=', 1370, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέγεται και χρησιμοποιείται πάνω στην αρχική εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g2A52MzhQys=', 1372, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Επιλέγεται αφού πατηθεί το Alt";
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
    question.shortTextQuestion = "133. Σημειώστε το σωστό: Ένα διανυσματικό σχήμα αποτελείται από:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OlNQsk+qK2U=', 1378, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γραμμές και καμπύλες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DD+aVbyMu5c=', 1380, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κύκλους και γραμμές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iakMT5I40Rk=', 1382, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. γραμμές και ορθογώνια";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aHA+FsopcNM=', 1384, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "134. Σημειώστε το σωστό: Η διαδρομή που κάνει ένα οποιοδήποτε εργαλείο σχεδίασης λέγεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lUH+8b26HQw=', 1388, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περίγραμμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jSIWUuE64Rw=', 1390, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στύλ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2WyAM856xNU=', 1392, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρώμα γεμίσματος";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gv0WQ0ss5zI=', 1394, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "135. Σημειώστε το σωστό: Μια διαδρομή δεν μπορεί:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MvM81GFhIbo=', 1398, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να αλλάξει σχήμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Mh2owLIwY6E=', 1400, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να αλλάξει μέγεθος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gEYjXOOIKrM=', 1402, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να μετατραπεί σε επιλογή";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DnnCE1n+xRY=', 1404, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "136. Σημειώστε το σωστό: Μια διαδρομή όταν αποθηκεύεται είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1p1Oa8FmJEo=', 1408, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαδρομή σχήματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0aITMXW+vT4=', 2246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαδρομή χρώματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KDW51ZI+FDM=', 2248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαδρομή αποκοπής για να γίνει διαφανές μέρος της εικόνας για επεξεργασία";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('23/HKs8uqwE=', 2250, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "137. Σημειώστε το σωστό Το σχήμα τροχού γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4qkyJ+e7dcs=', 2254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή του σχήματος της έλλειψης με πατημένο το Shift";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4qkyJ+e7dcs=', 2256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή του σχήματος της έλλειψης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kE/++VrV2Wo=', 2258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιλογή του σχήματος του κύκλου";
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
    question.shortTextQuestion = "138. Σημειώστε το σωστό Ένα ραστεροποιημένο σχήμα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('b9E2ZOwffoY=', 2264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να υποστεί επεξεργασία ως διανυσματικό σχήμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('u/856StA10c=', 2266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να υποστεί επεξεργασία ως διανυσματικό σχήμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u/856StA10c=', 2268, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπορεί να υποστεί επεξεργασία σε επίπεδο με διανυσματική βάση";
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
    question.shortTextQuestion = "139. Σημειώστε το σωστό Η εντολή “αδιαφάνεια” ορίζει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SCklqZloEpM=', 2274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την διαφάνεια του σχήματος με τιμές περίπου στο 100%";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vQyyTQQAgrs=', 2276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. την αδιαφάνεια του σχήματος με τιμές περίπου στο 1%";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ocDuy2R6WAE=', 2278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ορίζει τον βαθμό αδιαφάνειας ενός επιπέδου";
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
    question.shortTextQuestion = "140. Σημειώστε το σωστό Για την τροποποίηση ενός σχήματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wyjYbzrt7XA=', 2284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κλικ στην μικρογραφία της διανυσματικής μάσκας στον πίνακα Επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wyjYbzrt7XA=', 2286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στην μικρογραφία της διανυσματικής μάσκας στον πίνακα Διαδρομές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lTVjcLWg4hU=', 2288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κλικ στην επιλογή της πένας";
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
    question.shortTextQuestion = "141. Σημειώστε το σωστό Η πρόσβαση στις επιλογές εργαλείου σχημάτων γίνεται με  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sgdk0/tqEOM=', 2294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κλικ στην μικρογραφία του επιπέδου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+qrm5igaUT8=', 2296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στο ανεστραμμένο βέλος δίπλα στο κουμπί σχήματος στη γραμμή επιλογών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+qrm5igaUT8=', 2298, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κλικ στον πίνακα Διαδρομές";
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
    question.shortTextQuestion = "142. Σημειώστε το σωστό Η επιλογή Προσκόλληση στα pixel στις επιλογές εργαλείου ορθογωνίου ή στρογγυλεμένου ορθογωνίου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3y+PaA9Rjxw=', 2304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσκολλά το σχήμα στα εικονοστοιχεία της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7g8xvW9egO4=', 2306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσκολλά τα διάφανα μέρη της εικόνας στα σχήματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ke7QDYJyRXM=', 2308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. προσκολλά τις γωνίες στα εικονοστοιχεία";
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
    question.shortTextQuestion = "143. Σημειώστε το σωστό Το εργαλείο της πένας στη γραμμή επιλογών παρέχει τις εξής λειτουργίες:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5q0OADB64nc=', 2314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αυτόματη προσθήκη κόμβου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('So/Zo6gvYek=', 2316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αυτόματη διαγραφή κόμβου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gbq0iDF16oY=', 2318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "144. Σημειώστε το σωστό Η επιλογή ελαστική γραμμή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cuEqTJYg7WU=', 2324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. παρέχει την ευελιξία τροποποίησης της γραμμής που δημιουργείται";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g/3ShI4RazE=', 2326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διευκολύνει τη δημιουργία πολύπλοκου σχήματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BuMSoAzGYFQ=', 2328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. παρέχει την δυνατότητα προεπισκόπησης τμημάτων της γραμμής που δημιουργείται";
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
    question.shortTextQuestion = "145. Σημειώστε το σωστό Μια διαδρομή για να παραμείνει ανοικτή πρέπει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hbbP4/Rwd0I=', 2334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να πατηθεί Control+ κλικ μακριά από όλα τα αντικείμενα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7lgsNtg6s28=', 2336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να επιλεχθεί μία διαφορετική διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ft1/CaB+ehA=', 2338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να επιλεχθεί ένα διαφορετικό εργαλείο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PqcHdhZ0t5c=', 2340, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "146. Σημειώστε το σωστό Μία καμπύλη γραμμή με πολλούς κόμβους:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WzwV1fJJUi4=', 2344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επεξεργάζεται ευκολότερα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7PQjWQW3MTw=', 2346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι περισσότερο ευέλικτη στις αλλαγές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rqghVGDiSNI=', 2348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επεξεργάζεται δύσκολα";
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
    question.shortTextQuestion = "147. Σημειώστε το σωστό Για την μετάβαση από ευθεία σε καμπύλη γραμμή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZC31BHbIITo=', 2354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. τοποθετείται το εργαλείο πένας στο επόμενο σημείο και στη συνέχεια κάνετε κλικ συνεχόμενο και τραβάτε προς μία κατεύθυνση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZC31BHbIITo=', 2356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται διπλό κλικ στο τελικό σημείο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z//ZQyCsgq4=', 2358, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "148. Σημειώστε το σωστό Ο έλεγχος της ευαισθησίας της τελικής διαδρομής στην κίνηση του ποντικιού ή της γραφίδας στο εργαλείο πένας ελεύθερης σχεδίασης γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vXK8PaM4upQ=', 2364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. με επιλογή εργαλείου πένας ελεύθερης σχεδίασης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6R1SZEMXBoU=', 2366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με κλικ στο αντεστραμμένο βέλος δίπλα στα κουμπιά σχήματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6R1SZEMXBoU=', 2368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. με κλικ στο τελικό σημείο του σχήματος";
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
    question.shortTextQuestion = "149. Σημειώστε το σωστό Για να κλείσουμε μια διαδρομή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iSivwldtM4Y=', 2374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κάνουμε διπλό κλικ στο τέλος της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5sS3l5v7kGo=', 2376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε τη γραμμή στο αρχικό σημείο της";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5sS3l5v7kGo=', 2378, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κάνουμε όλα τα παραπάνω";
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
    question.shortTextQuestion = "150. Σημειώστε το σωστό Το εργαλείο μαγνητικής πένας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ou/M4m+GRBY=', 2384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχει ορισμένες ίδιες επιλογές με το μαγνητικό λάσο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ou/M4m+GRBY=', 2386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει διαφορετικές επιλογές από τις επιλογές με το μαγνητικό λάσο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('A1Zjf5vjFdM=', 2388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. έχει τις ίδιες επιλογές με εκείνες του μαγνητικού λάσου";
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
    question.shortTextQuestion = "151. Σημειώστε το σωστό Η επιλογή «Συχνότητα» :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O6K7ehp4HCQ=', 2394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καθορίζει τη συχνότητα με την οποία η μαγνητική πένα εφαρμόζει τις επιλογές της";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2NU44PRngO0=', 2396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθορίζει τη συχνότητα αυτόματης εισαγωγής κόμβων στη διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2NU44PRngO0=', 2398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. καθορίζει τη συχνότητα προειδοποίησης για τα σημεία υψηλής αντίθεσης που βρίσκονται στην εικόνα";
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
    question.shortTextQuestion = "152. Σημειώστε το σωστό Για να εμφανιστεί μια διαδρομή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j7PrJdpK6dI=', 2404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλέγεται ο πίνακας “διαδρομές” και μετά κλικ στο όνομα της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j7PrJdpK6dI=', 2406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. απενεργοποιούνται όλες οι μικρογραφίες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rHRDAfCqXmc=', 2408, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7THR0Ka8M1c=', 2410, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "153. Σημειώστε το σωστό Για να αλλάξει το μέγεθος των μικρογραφιών διαδρομής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vQ4fGcbdeJk=', 2414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από τον πίνακα διαδρομές επιλέγεται η εντολή “Επιλογές” και μετά “μέγεθος” ή “χωρίς”";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vQ4fGcbdeJk=', 2416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεξί κλικ στον πίνακα διαδρομές για να αναδυθεί η εντολή μέγεθος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('13FRR1yOrKQ=', 2418, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xC2Qm9T4xMQ=', 2420, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. είτε το Α είτε το Β";
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
    question.shortTextQuestion = "154. Σημειώστε το σωστό Η σειρά των διαδρομών εργασίας στον πίνακα διαδρομές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p8n8P0PbWow=', 2424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αλλάζει με σύρσιμο της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YeC2vjhaB2U=', 2426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλάζει με Control + C και μετά με control +V";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AMoyZ4cLlBI=', 2428, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δεν αλλάζει";
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
    question.shortTextQuestion = "155. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('A62HwYO+nyI=', 2434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργείται μία νέα διαδρομή με κλικ στο αντίστοιχο εικονίδιο στον πίνακα “Διαδρομές”/paths";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3ZiMsy6g5r4=', 2436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δημιουργείται μια νέα διαδρομή με επιλογή μιας διαδρομής εργασίας και δεξί κλικ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('exOatUdsZdM=', 2438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Δημιουργείται μια νέα διαδρομή με alt + κλικ και απόδοση ονόματος διαδρομής";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KrUP8u+a3z4=', 2440, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Είτε το Α είτε το Γ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('KrUP8u+a3z4=', 2442, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Ε. Είτε το Β είτε το Γ";
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
    question.shortTextQuestion = "156. Σημειώστε το σωστό Οι αποθηκευμένες διαδρομές εμφανίζονται στα Windows και Mac με μορφή αρχείων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yAW3uD8GrAM=', 2444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
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
    answer3.shortTextAnswer = "Γ. PDF";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3S/cmqMu9mI=', 2450, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. TIFF";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('v8EShcAK21o=', 2452, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Ε. όλα τα παραπάνω";
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
    question.shortTextQuestion = "157. Σημειώστε το σωστό: Για να γίνει επιλογή μια διαδρομή:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OyBQzlFAM9M=', 2454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή συγκεκριμένης διαδρομής και κλικ στο φόρτωση διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OyBQzlFAM9M=', 2456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή συγκεκριμένης διαδρομής και διπλό κλικ στη διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hQze33o4wUI=', 2458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιλογή συγκεκριμένης διαδρομής και κλικ στο εργαλείο μολυβιού";
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
    question.shortTextQuestion = "158. Σημειώστε το σωστό: Η εντολή ομαλοποίηση (feathering) κάνει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oUJYlfXk9Fs=', 2464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ομαλότερη τη μετάβαση από τα επιλεγμένα εικονοστοιχεία στα εικονοστοιχεία της γύρω περιοχής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oUJYlfXk9Fs=', 2466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ομαλότερη την μετάβαση των εικονοστοιχείων των αντικειμένων με το φόντο μιας εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2vRXPDkPZ1E=', 2468, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ομαλότερη μετάβαση των εικονοστοιχείων του φόντου με τα εικονοστοιχεία του προσκηνίου";
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
    question.shortTextQuestion = "159. Σημειώστε το σωστό: Η εντολή Διατήρηση διαφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q3WIwtzrgu0=', 2474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περιορίζει το γέμισμα μόνο στις περιοχές του επιπέδου που περιλαμβάνουν pixel";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q3WIwtzrgu0=', 2476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διατηρεί τη διαφάνεια σε όλα τα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ec7XriK6xbA=', 2478, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διατηρεί τη διαφάνεια στο ενεργό επίπεδο";
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
    question.shortTextQuestion = "160. Σημειώστε το σωστό Το γέμισμα διαδρομής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DgVqxgmqdls=', 2484, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από το μενού του πίνακα διαδρομές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I+2JaIsUhvk=', 2486, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με πατημένο Alt και κλικ στο εικονίδιο στο κάτω μέρος του πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('I+2JaIsUhvk=', 2488, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. με κλικ στο εικονίδιο στο κάτω μέρος του πίνακα";
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
    question.shortTextQuestion = "161. Σημειώστε το σωστό Διαγραφή τμήματος διαδρομής με :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2v56qghSneg=', 2494, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή εργαλείου επιλογής και μετά επιλογή τμήματος για διαγραφή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ggdypzcb5Ts=', 2496, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή τμήματος της διαδρομής και μετά πάτημα Backspace ή Delete";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JJWnM2Xtn4s=', 2498, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "162. Σημειώστε το σωστό Η συλλογή φίλτρων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('B/fjbZT//oY=', 2504, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εμφανίζεται μέσα από την επιλογή φίλτρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B/fjbZT//oY=', 2506, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εμφανίζεται μέσα από το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('63cuuQNDHKo=', 2508, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εμφανίζεται μέσα από το μενού της Εικόνας";
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
    question.shortTextQuestion = "163. Σημειώστε το σωστό Στην επισκόπηση συλλογής φίλτρων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wiRaJ51/h7M=', 2514, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορούν να εφαρμοστούν πολλά φίλτρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Vt73Iy3KXqA=', 2516, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορούν να ενεργοποιηθούν/απενεργοποιηθούν τα αποτελέσματα ενός φίλτρου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W6qkc6/DTYY=', 2518, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να αλλάξει η σειρά εφαρμογής φίλτρων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aebsXTU49PQ=', 2520, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "164. Σημειώστε το σωστό Για την εφαρμογή φίλτρων σε μεγάλες εικόνες  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OJAczf7vPsc=', 2524, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καθυστερεί η εφαρμογή φίλτρων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OJAczf7vPsc=', 2526, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν γίνεται προεπισκόπηση αποτελεσμάτων ενός φίλτρου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WeD4zeX2YqA=', 2528, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δεν εφαρμόζονται φίλτρα";
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
    question.shortTextQuestion = "165. Σημειώστε το σωστό Η εφαρμογή φίλτρου υλοποιείται με  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3qxYPLXwLeM=', 2534, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή επιπέδου πρώτα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3qxYPLXwLeM=', 2536, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποίηση εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LST0Kh5uOt0=', 2538, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. απενεργοποίηση εικόνας";
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
    question.shortTextQuestion = "166. Σημειώστε το σωστό Ένα φίλτρο εφαρμόζεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lfAXvFrkH/4=', 2544, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε μεμονωμένα επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lfAXvFrkH/4=', 2546, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε πολλά επίπεδα μαζί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('73NSdxBXuVA=', 2548, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε όλα τα παραπάνω";
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
    question.shortTextQuestion = "167. Σημειώστε το σωστό Με τη χρήση μασκών :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Hcf27DFD3KU=', 2554, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δίνεται μεγαλύτερη ελευθερία όσον αφορά στην σχεδίαση σχημάτων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Nd5pgw6lWmk=', 2556, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ελέγχεται περισσότερο η μετάβαση από το ένα εφέ στο άλλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LIMd1wSH5Zg=', 2558, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. η εικόνα αλλάζει και δεν μπορεί να υποστεί μεταβολές";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eU3CMmWgcfo=', 2560, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "168. Σημειώστε το σωστό Ένα φίλτρο μπορεί να εφαρμοστεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('k2EBHssOYBg=', 2564, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε πολλά επίπεδα κάθε φορά";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+DtPOQUOArY=', 2566, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε μεμονωμένα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('82M2DtXpOWE=', 2568, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε ξεχωριστό κανάλι χρώματος";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8ZZZAn1Rp9U=', 2570, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "169. Σημειώστε το σωστό Το εφέ άκρου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K1lAm0dCLbg=', 2574, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Είναι ένα από τα ειδικά εφέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W36FY9mCQoA=', 2576, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Είναι μια τεχνική που εφαρμόζεται στα άκρα μιας εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sRQg5cO40lw=', 2578, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
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
    question.shortTextQuestion = "170. Σημειώστε το σωστό Σε μια εικόνα Lab:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T7GYx4rYh08=', 2584, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δεν μπορούν να εφαρμοστούν οι λειτουργίες ανάμειξης της επιλογής εξασθένισης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T7GYx4rYh08=', 2586, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μπορούν να εφαρμοστούν οι λειτουργίες χρωματισμού και φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K2ayQZ+tK1s=', 2588, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Μπορούν να εφαρμοστούν μόνο οι λειτουργίες σκοτεινιάσματος και ανοίγματος";
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
    question.shortTextQuestion = "171. Σημειώστε το σωστό Η εντολή εξασθένιση βρίσκεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5JqjBf9akV0=', 2594, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο μενού της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9w9IREIgoaU=', 2596, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο μενού της επεξεργασίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9w9IREIgoaU=', 2598, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στο μενού των φίλτρων";
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
    question.shortTextQuestion = "172. Σημειώστε το σωστό Μερικά από τα καλλιτεχνικά εφέ είναι :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qBK1UXCxHSA=', 2604, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έγχρωμο μολύβι-cutout-περγαμηνή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qBK1UXCxHSA=', 2606, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κοκκώδες φιλμ - διαδρομές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sDWTuj+6sGI=', 2608, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. πένα ελεύθερου σχεδιασμού, κακοτεχνίες";
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
    question.shortTextQuestion = "173. Σημειώστε το σωστό Το φίλτρο θολώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gHKGzE4AJec=', 2614, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι κατάλληλο για ρετους και εφέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gHKGzE4AJec=', 2616, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εφαρμόζεται όταν η εντολή κλείδωμα διαφανών εικονοστοιχείων είναι ενεργοποιημένη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+Bo2Xj4ZHqU=', 2618, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "174. Σημειώστε το σωστό Θόλωμα επιφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t/JC52RMFVE=', 2624, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. θολώνει τα άκρα μιας εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LHSIf7NhmO0=', 2626, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. θολώνει μια εικόνα διατηρώντας τα άκρα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LHSIf7NhmO0=', 2628, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "175. Σημειώστε το σωστό Η πινελιά Sumi-e  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ok5f8GFd0G8=', 2634, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργεί θολή εικόνα και διατηρεί τα άκρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ForAbdzS6Og=', 2636, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δημιουργεί θολά άκρα με πλούσιο μαύρο μελάνι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ForAbdzS6Og=', 2638, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
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
    question.shortTextQuestion = "176. Σημειώστε το σωστό Το εφέ zigzag  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O6T9gTGJ1Sw=', 2644, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. παραμορφώνει βαθμιαία μια επιλογή, ανάλογα με την ακτίνα των pixel στην επιλογή σας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O6T9gTGJ1Sw=', 2646, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. θολώνει μια περιοχή σε σχήμα zigzag";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BWBRHV4iaeY=', 2648, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "177. Σημειώστε το σωστό Τα φίλτρα κουκκιδοποίησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w2oIvZJ3Dx4=', 2654, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσθέτουν κουκκίδες στην εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('medMTWUJFvM=', 2656, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αφαιρούν κουκκίδες από την εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j20SJPPhk/w=', 2658, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. προσδιορίζουν έντονα μια επιλογή ενώνοντας τα pixel παρόμοιων χρωματικών τιμών σε κελιά.";
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
    question.shortTextQuestion = "178. Σημειώστε το σωστό Το φίλτρο απόχρωση Μezzo  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lKT/tuhaXoc=', 2664, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετατρέπει μια εικόνα σε τυχαίο μοτίβο ασπρόμαυρων περιοχών ή πλήρως κορεσμένων χρωμάτωνσε μια έγχρωμη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lKT/tuhaXoc=', 2666, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετατρέπει την εικόνα σε απόχρωση του μπλέ καναλιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('imk27mXq0ew=', 2668, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μετατρέπει την εικόνα σε απόχρωση του κόκκινου καναλιού";
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
    question.shortTextQuestion = "179. Σημειώστε το σωστό Η έξυπνη όξυνση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zkdk39jCJDo=', 2674, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιτρέπει τον έλεγχο της ποσότητας όξυνσης που υπάρχει στους ανοικτούς τόνους και στις σκιές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zkdk39jCJDo=', 2676, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιτρέπει τον έλεγχο της ποσότητας όξυνσης που υπάρχει στους ανοικτούς τόνους";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('U8kwD8wGFrs=', 2678, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Επιτρέπει τον έλεγχο της ποσότητας όξυνσης που υπάρχει στις σκιές";
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
    question.shortTextQuestion = "180. Σημειώστε το σωστό Το χαρτί με υδάτινες γραμμές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DdglRWokYEc=', 2684, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιτρέπει στα χρώματα να κυλίσουν και να αναμιχθούν σαν να έχουν ζωγραφιστεί σε ινώδες βρεγμένο χαρτί";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DdglRWokYEc=', 2686, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Τα χρώματα έχουν απόχρωση στους τόνους του μπλέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ub+Ff9jODyU=', 2688, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Τα χρώματα έχουν πινελιές μπλε χρώματος";
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
    question.shortTextQuestion = "181. Σημειώστε το σωστό Το φίλτρο της σφραγίδας χρησιμοποιείται καλύτερα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4AMcc6DUbQo=', 2694, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε έγχρωμη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y5eiIzP2C9M=', 2696, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε ασπρόμαυρη εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y5eiIzP2C9M=', 2698, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "182. Σημειώστε το σωστό Μερικά από τα φίλτρα υφής είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tIUhPMSStyo=', 2704, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Craquelure-κόκκος-μωσαϊκό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tIUhPMSStyo=', 2706, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Άνεμος-ιχνογράφηση-patchwork";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LO9Eq06bELU=', 2708, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Βιτρώ-γυαλί";
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
    question.shortTextQuestion = "183. Σημειώστε το σωστό Το φίλτρο βίντεο δεν είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QEk//+NZ7Pw=', 2714, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποσυνένωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RNqqOYXPumk=', 2716, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρώματα NTSC";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('drqPso6+GEQ=', 2718, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρώματα RGB";
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
    question.shortTextQuestion = "184. Σημειώστε το σωστό Τα φίλτρα digimarc  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fLsc0wbRmaw=', 2724, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενσωματώνουν εικονοστοιχεία απαραίτητα στην εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7oz7kpLzPWY=', 2726, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενσωματώνουν υδατογράφημα για να διασφαλίσουν τα πνευματικά δικαιώματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7oz7kpLzPWY=', 2728, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "185. Σημειώστε το σωστό Στην ρύθμιση στοιχείων ελέγχου υφής και γυάλινης επιφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OhxEvV6XWyA=', 2734, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επιλογή αντιστροφή αντιστρέφει τις σκιές και τους ανοικτούς τόνους";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OhxEvV6XWyA=', 2736, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η επιλογή αντιστροφή αντιστρέφει τα χρώματα των αντικειμένων μέσα στην εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1+EF6pllbig=', 2738, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. η επιλογή αντιστροφή αντιστρέφει τα χρώματα του φόντου και διατηρεί τα χρώματα του προσκηνίου";
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
    question.shortTextQuestion = "186. Σημειώστε το σωστό Ποια φίλτρα εφαρμόζονται σε περιοχές που δεν έχουν προσδιοριστεί και δεν έχουν υποστεί παραμόρφωση;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q588GsJKQsU=', 2744, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετατόπιση-καμπή-σκόνη και αμυχές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rWTrFxaE+io=', 2746, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετατόπιση-καμπή – κύμα-μετακίνηση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rWTrFxaE+io=', 2748, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "187. Σημειώστε το σωστό Το φίλτρο μετατόπισης βρίσκεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zE92Lbo66cM=', 2754, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο μενού παραμόρφωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zE92Lbo66cM=', 2756, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο μενού βίντεο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MBaqZxbcJO4=', 2758, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στο μενού άλλο";
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
    question.shortTextQuestion = "188. Σημειώστε το σωστό Η επιλογή αναδίπλωση γύρω   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('W8XFeiJrQCs=', 2764, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζει τον τρόπο αντιμετώπισης των περιοχών εικόνας που δεν θα υποστούν παραμόρφωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W8XFeiJrQCs=', 2766, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλώνει την εικόνα στη μέση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+724gDXMz/U=', 2768, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διπλώνει την εικόνα γύρω από το κεντρικό αντικείμενό της";
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
    question.shortTextQuestion = "189. Σημειώστε το σωστό Το φίλτρο εφέ φωτισμού λειτουργεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1W6N90kEZwg=', 2774, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μόνο με εικόνες RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1W6N90kEZwg=', 2776, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο με εικόνες CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hmdp1w0ql8g=', 2778, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. με εικόνες RGB και CMYK";
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
    question.shortTextQuestion = "190. Σημειώστε το σωστό Το κατευθυντικό φως  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dKnDBq2B9Es=', 2784, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. φωτίζει από μακριά όπως το φως του ήλιου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dKnDBq2B9Es=', 2786, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. φωτίζει σε μια ελλειπτική ακτίνα φωτός";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('phwDw0JXH64=', 2788, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. φωτίζει από όλες τις κατευθύνσεις το αντικείμενο";
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
    question.shortTextQuestion = "191. Σημειώστε το σωστό Η χρήση της επιλογής Υφή καναλιού στο εφέ φωτισμού  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QK2thmoiSbU=', 2794, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει τον έλεγχο των εφέ φωτισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QK2thmoiSbU=', 2796, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την εφαρμογή υφής σε ένα χρώμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9ANQYHR3Ee4=', 2798, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει την αλλαγή φωτός σε μια εικόνα";
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
    question.shortTextQuestion = "192. Σημειώστε το σωστό Η μάσκα επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VoavmON+LF4=', 2804, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιείται για την απόκρυψη τμημάτων ενός επιπέδου και την αποκάλυψη τμημάτων των επιπέδων που βρίσκονται κάτω από αυτό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VoavmON+LF4=', 2806, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει λευκό χρώμα που αντιστοιχεί 100% σε διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dffjmjaAwwE=', 2808, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. έχει γκρι χρώμα που αντιστοιχεί 100% σε διαφάνεια";
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
    question.shortTextQuestion = "193. Σημειώστε το σωστό Στο επίπεδο βάσης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8u3Ne8b4WaM=', 2814, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορούμε να αλλάξουμε τη διαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4XEfbo2rCuE=', 2816, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορούμε να αλλάξουμε τη διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4XEfbo2rCuE=', 2818, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπορούμε να αλλάξουμε την τιμή της αδιαφάνειας";
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
    question.shortTextQuestion = "194. Σημειώστε το σωστό Η δημιουργία νέου επιπέδου/νέας στρώσης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U4nT7JGbMWo=', 2824, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργείται με κλικ στο εικονίδιο στο κάτω μέρος του πάνελ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U4nT7JGbMWo=', 2826, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργείται με κλικ στο μενού του πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K3KTHXWDXec=', 2828, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δημιουργείται με κλικ στην εντολή διπλασιασμός";
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
    question.shortTextQuestion = "195. Σημειώστε το σωστό Η ενεργοποίηση ενός layer mask (μιας μάσκας επιπέδου)   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H0BZb+YgiHk=', 2834, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιείτε για την απόκρυψη τμημάτων ενός επιπέδου και την αποκάλυψη τμημάτων των επιπέδων που βρίσκονται κάτω από αυτό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H0BZb+YgiHk=', 2836, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει λευκό χρώμα που αντιστοιχεί 100% σε διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JSZ7+Gd29PU=', 2838, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. έχει γκρι χρώμα που αντιστοιχεί 100% σε διαφάνεια";
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
    question.shortTextQuestion = "196. Σημειώστε το σωστό Το μενού layer Options  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H9DojxEkk9Y=', 2844, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει αλλαγές στο όνομα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FEqeFbB46yo=', 2846, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει αλλαγές στην αδιαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sgNb3OxpLqg=', 2848, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει αλλαγές στην ανάμειξη χρωμάτων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xbmfH9WUO6U=', 2850, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "197. Σημειώστε το σωστό Τα αρχεία 3D δεν έχουν  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IWY050sGl58=', 2854, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δικτυώματα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PAc+gE2jKJQ=', 2856, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qQ8Y9rRG14E=', 2858, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χάρτες";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qQ8Y9rRG14E=', 2860, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "198. Σημειώστε το σωστό Οι τύποι του φωτισμού στην τρισδιάστατη επεξεργασία έχει επιλογές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kGrnKbEIAYA=', 2864, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. άπειρο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0WNIQFf8+o0=', 2866, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προβολέας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sXa3hCR0e3c=', 2868, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σημείο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nrRBm0h6emE=', 2870, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "199. Σημειώστε το σωστό Οι υφές εμφανίζονται ως  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TW5RckRP3s8=', 2874, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καταχωρίσεις κάτω από ένα επίπεδο 3D στον πίνακα \"Επίπεδα\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TW5RckRP3s8=', 2876, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nkDlw3efAW8=', 2878, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αντικείμενα με ειδικό φωτισμό";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dCWLTKV+ZwI=', 2880, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "200. Σημειώστε το σωστό Ένα μοντέλο με τα εργαλεία 3D μπορεί να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L3PIK4yet40=', 2884, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αλλάξει μέγεθος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sBiIuHkhvyk=', 2886, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετακινηθεί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lSn/fHlyu3g=', 2888, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. περιστραφεί";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z3oEyoFgP3o=', 2890, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('z3oEyoFgP3o=', 2892, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Ε. κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "201. Σημειώστε το σωστό Με τη χρήση των εργαλείων της κάμερας 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8zFtgaFGGM0=', 2894, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετακινείται η προβολή της κάμερας χωρίς να μετακινηθεί η θέση του αντικειμένου 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8zFtgaFGGM0=', 2896, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετακινείται το αντικείμενο πάνω στο οποίο προβάλλεται το φως";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('k6q/N9ThMIo=', 2898, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μετακινείται η κάμερα και το αντικείμενο πάνω στο οποίο προβάλλεται το φως";
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
    question.shortTextQuestion = "202. Σημειώστε το σωστό: Για να επιστρέψουμε στην προεπιλεγμένη προβολή της κάμερας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aWbyApZc0u4=', 2904, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή του εργαλείου κάμερας και κλικ στην επιστροφή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aWbyApZc0u4=', 2906, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλό κλικ στο εργαλείο κάμερας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x7SJEN6U//c=', 2908, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κλικ στην γραμμή επιλογών";
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
    question.shortTextQuestion = "203. Σημειώστε το σωστό: Για να μετακινηθεί ένα μοντέλο σε άξονα 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RAt9ahAUBYM=', 2914, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επισημάνουμε το άκρο οποιουδήποτε άξονα και σύρουμε";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RAt9ahAUBYM=', 2916, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε τον κέρσορα του ποντικιού μόνο σε άξονα y";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BjtykDvDlgI=', 2918, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σύρουμε τον κέρσορα του ποντικιού πάνω στο αντικείμενο";
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
    question.shortTextQuestion = "204. Σημειώστε το σωστό: Για να συμπιέσουμε το μοντέλο κατά μήκος του άξονα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/meGPGI4RLc=', 2924, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σύρουμε έναν από τους χρωματιστούς κύβους τροποποίησης προς το κέντρο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/meGPGI4RLc=', 2926, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε έναν από τους χρωματιστούς κύβους τροποποίησης προς τα άκρα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sPHdztIuj1s=', 2928, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σύρουμε έναν από τους χρωματιστούς κύβους τροποποίησης είτε προς το κέντρο είτε προς τα άκρα";
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
    question.shortTextQuestion = "205. Σημειώστε το σωστό: Στην εφαρμογή φίλτρου εμφανίζονται οι επιλογές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('43ucdzTR1yo=', 2934, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σκηνικού - δικτυώματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FWd1pLOu8L4=', 2936, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικού-φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D6DPrOs60a0=', 2938, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "206. Οι ρυθμίσεις επιλογών προβολής δικτυώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8k/pByDVQpM=', 2944, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχουν απόδοση σκιών";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8k/pByDVQpM=', 2946, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχουν επιλογές δέσμης φωτός";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XIm3gDiqV1E=', 2948, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. έχουν επιλογές ζωγραφικής περιγραμμάτων";
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
    question.shortTextQuestion = "207. Σημειώστε το σωστό Η εντολή περιβάλλον  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rw5bSMvmd90=', 2954, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ρυθμίζει τη φωτεινότητα του περιβάλλοντος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dJSVY3eHg2U=', 2956, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζει το χρώμα του φωτισμού στο περιβάλλον";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dJSVY3eHg2U=', 2958, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ρυθμίζει τις σκιές του προσκηνίου";
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
    question.shortTextQuestion = "208. Σημειώστε το σωστό Η εντολή Διάχυση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aZ9W1gFY81g=', 2964, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαχέει έντονο φως";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NWMZmmyWv0Y=', 2966, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαχέει το χρώμα του υλικού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NWMZmmyWv0Y=', 2968, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαχέει μια συγκεκριμένη υφή";
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
    question.shortTextQuestion = " 209. Σημειώστε το σωστό Η εφαρμογή της ανακλαστικότητας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sDL7Rwy+hZM=', 2974, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αυξάνει την ανακλαστικότητα άλλων αντικειμένων στο σκηνικό 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sDL7Rwy+hZM=', 2976, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μειώνει την ανακλαστικότητα άλλων αντικειμένων στο σκηνικό 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ktLGNoOaDFI=', 2978, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αυξάνει την ανακλαστικότητα του σκηνικού στα αντικείμενα";
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
    question.shortTextQuestion = "210. Σημειώστε το σωστό Ο κανονικός χάρτης σε σχέση με χάρτη ανάγλυφου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KwKFpV/QVzg=', 2984, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μειώνει τις λεπτομέρειες της επιφάνειας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q+pDbzNZdvg=', 2986, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αυξάνει τις λεπτομέρειες της επιφάνειας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q+pDbzNZdvg=', 2988, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "211. Σημειώστε το σωστό Ο χάρτης υφής ανοίγει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('F5vp2/ALIv4=', 2994, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα στο παράθυρο εγγράφου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0JgtYOeNVbM=', 2996, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε ξεχωριστό παράθυρο εγγράφου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0JgtYOeNVbM=', 2998, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. είτε στο παράθυρο είτε σε ξεχωριστό παράθυρο εγγράφου";
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
    question.shortTextQuestion = "212. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('v++nUc4vzsk=', 3004, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να βελτιωθεί η απεικόνιση της υφής στο μοντέλο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0FEfWqKCqAk=', 3006, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζουμε την κλίμακα UV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o08kSEPQ2DY=', 3008, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ρυθμίζουμε την μετατόπιση";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('barfjoH2c+E=', 3010, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. ρυθμίζουμε την κλίμακα UV και την μετατόπιση";
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
    question.shortTextQuestion = "213. Σημειώστε το σωστό 2. Το πρόγραμμα Photoshop Extended διαθέτει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8uquNJin6mQ=', 3014, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. 3 τύπους φωτισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8uquNJin6mQ=', 3016, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. 6 τύπους φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OZRBwcNBKnU=', 3018, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. 16 τύπους φωτισμού";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lV8usSCO9rI=', 3020, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('XVN5VvE+nAY=', 3022, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Ε. όλα τα παραπάνω";
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
    question.shortTextQuestion = "214. Σημειώστε το σωστό 3. Το σημειακό φως ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EddLTLOpTPI=', 3024, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαχέεται προς όλες τις κατευθύνσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EddLTLOpTPI=', 3026, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαχέεται προς μια κατεύθυνση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GKlEf73RlSQ=', 3028, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαχέεται σε κωνικό σχήμα";
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
    question.shortTextQuestion = "215. Σημειώστε το σωστό Οι οδηγοί φώτων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lFKgACGa+0E=', 3034, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αντανακλούν τη γωνία, την εξασθένιση και τον τύπο του φωτός";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lFKgACGa+0E=', 3036, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθοδηγούν τον χρήστη/δημιουργό για να επεξεργαστεί τα χρώματα της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gDyZtDZUFWM=', 3038, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αντανακλούν τον τύπο του φωτός";
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
    question.shortTextQuestion = "216. Σημειώστε το σωστό Οι ομάδες φώτων μπορούν να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('l7tn1MjW5P8=', 3044, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποθηκευτούν ως ομάδες προκαθορισμένης ρύθμισης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+3IAhT26Nek=', 3046, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αντικατασταθούν";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aW03c0MBRhE=', 3048, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εμπλουτιστούν με προσθήκη φώτων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('g14lVj/nNPE=', 3050, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('hRCpte6Vres=', 3052, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Ε. όλα τα παραπάνω";
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
    question.shortTextQuestion = "217. Σημειώστε το σωστό Με την εντολή Εκ νέου ορισμός παραμέτρων για χάρτη υφής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FpfHJAMMlWY=', 3054, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διορθώνονται οι παραμορφώσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FpfHJAMMlWY=', 3056, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλάζει η υφή του σκηνικού εντελώς";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RfC7tu/fkI8=', 3058, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αλλοιώνεται η υφή του μοντέλου";
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
    question.shortTextQuestion = "218. Σημειώστε το σωστό Η επιλογή Λιγότερες ραφές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h+tlCS4V7Cc=', 3064, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διορθώνεται η παραμορφωμένη υφή του μοντέλου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h9dtBGOMPDM=', 3066, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλοιώνεται η υφή ανάλογα με το μοντέλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('h9dtBGOMPDM=', 3068, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. καλύπτονται τα κενά της διαφάνειας με το χρώμα του φόντου";
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
    question.shortTextQuestion = "219. Σημειώστε το σωστό Οι υφές εμφανίζονται στον πίνακα Επίπεδα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GT58ZcReW6E=', 3074, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ως ένθετα στοιχεία";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IXbG6zCuucw=', 3076, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ως καταχωρίσεις";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IXbG6zCuucw=', 3078, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ως ομάδες τύπου χάρτη";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('79N82sGFlgw=', 3080, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω είναι και αυτό σωστό";
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
    question.shortTextQuestion = "220. Σημειώστε το σωστό Η απεικόνιση UV  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bq5fahvrkBQ=', 3084, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει στην υφή 2D να χρωματιστεί σωστά στο μοντέλο 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bq5fahvrkBQ=', 3086, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. επιτρέπει στην υφή 2D να χρωματιστεί σωστά στο μοντέλο 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sJkxzU/dCoQ=', 3088, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει στην υφή 3D να χρωματιστεί σωστά στο μοντέλο 3D";
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
    question.shortTextQuestion = "221. Οι υφές 3D στο Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zpu3um57OZg=', 3094, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ανοίγουν ως έξυπνα αντικείμενα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a8l52ms/mhk=', 3096, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ανοίγουν ως αρχεία 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LgJUdTz8KiU=', 3098, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LgJUdTz8KiU=', 3100, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "222. Σημειώστε το σωστό Η επαναλαμβανόμενη υφή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1HkoG1oh1qA=', 3104, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καλύπτει ρεαλιστικά την επιφάνεια του μοντέλου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1HkoG1oh1qA=', 3106, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν βελτιώνει τη λειτουργία απόδοσης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Shj1c/irivA=', 3108, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. καταλαμβάνει πολύ χώρο στη μνήμη";
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
    question.shortTextQuestion = "223. Σημειώστε το σωστό Το πρόγραμμα Photoshop αυτόματα μπορεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iF7Fw0bE0kw=', 3114, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να εντοπίσει συγκεκριμένες περιοχές του μοντέλου κατάλληλες για χρώμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iF7Fw0bE0kw=', 3116, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να χρωματίσει το μοντέλο χωρίς χάρτη υφής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jUTBtER19Xk=', 3118, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να αποκρύψει συγκεκριμένη περιοχή";
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
    question.shortTextQuestion = "224. Σημειώστε το σωστό Ο χάρτης υφής επιτρέπει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xJ+aztQhvBQ=', 3124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να είναι ορατά τα αποτελέσματα του χρωματισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xJ+aztQhvBQ=', 3126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να χρωματίζεται το επίπεδο χωρίς να είναι ορατές οι ενέργειες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+F2mXTQAkXA=', 3128, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να χρωματίζεται το μοντέλο χωρίς να είναι ορατά τα αποτελέσματα του χρωματισμού";
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
    question.shortTextQuestion = "225. Σημειώστε το σωστό Η γωνία σταδιακής μείωσης του χρωματισμού  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6SSl1OV6qY0=', 3134, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ελέγχει την ποσότητα του χρώματος που εφαρμόζεται σε επιφάνειες που σχηματίζουν γωνίες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6SSl1OV6qY0=', 3136, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ελέγχει τη γωνία μετάβασης από τα φωτεινά στα σκοτεινά εικονοστοιχεία πάνω στην επιφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fHgY7EbPTnM=', 3138, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ελέγχει τη γωνία διάχυσης χρώματος στα άκρα της εικόνας";
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
    question.shortTextQuestion = "226. Σημειώστε το σωστό Τα αντικείμενα με ένα μόνο δικτύωμα είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RZKVDwQfG4U=', 3144, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το καπέλο – η σφαίρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RZKVDwQfG4U=', 3146, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κώνος –κύλινδρος-μπουκάλι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iJ9QSUN6KQ4=', 3148, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κανένα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1j57PXQBkyA=', 3150, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "227. Σημειώστε το σωστό Η συγχώνευση επιπέδων 3D επιτρέπει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0xxcDYlKM3c=', 3154, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε ένα σκηνικό να συνδυάζονται πολλαπλά μοντέλα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0xxcDYlKM3c=', 3156, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε πολλά σκηνικά να συνδυάζεται ένα μοντέλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wGbkHYHkEBk=', 3158, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε ένα σκηνικό να συνδυάζεται ένα μοντέλο";
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
    question.shortTextQuestion = "228. Σημειώστε το σωστό Μετά τη συγχώνευση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Pa8rkui8lKE=', 3164, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. όλα τα υλικά και δικτυώματα εμφανίζονται στον πίνακα 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Pa8rkui8lKE=', 3166, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο τα υλικά και δικτυώματα του μεγαλύτερου αρχείου εμφανίζονται στον πίνακα 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ehpEVC3uHB4=', 3168, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μόνο τα υλικά και δικτυώματα του μικρότερου αρχείου εμφανίζονται στον πίνακα 3D";
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
    question.shortTextQuestion = "229. Σημειώστε το σωστό Για κινούμενες εικόνες υψηλής ποιότητας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ga3lmYCFWJg=', 3174, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ρυθμίζεται η απόδοση «Απόδοση για τελική έξοδο» ανά καρέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ga3lmYCFWJg=', 3176, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζεται η εγκάρσια τομή ανάμεσα στα καρέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3jacsMihVUo=', 3178, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ρυθμίζεται η θέση του αντικειμένου";
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
    question.shortTextQuestion = "230. Σημειώστε το σωστό Με τη μετατροπή ενός επιπέδου 3D σε 2D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7WHv1ALpUsE=', 3184, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ραστεροποιείται το περιεχόμενο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7WHv1ALpUsE=', 3186, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορεί να υποστεί επεξεργασία το μοντέλο 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Vaf4VFs4G/8=', 3188, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπορεί να υποστεί επεξεργασία η υφή και ο φωτισμός του μοντέλου 3D";
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
    question.shortTextQuestion = "231. Σημειώστε το σωστό Η απόκρυψη πολλών επιπέδων ενός εγγράφου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NqVMcpRLYVU=', 3194, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται για ταχύτερη απόδοση της εικόνας στην οθόνη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NqVMcpRLYVU=', 3196, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται για την καλύτερη απόδοση των εργαλείων χρωματισμού στο ενεργό επίπεδο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CDvkq6SFFmo=', 3198, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. γίνεται για την καλύτερη απόδοση του σχηματισμού ενός αντικειμένου στο ενεργό επίπεδο";
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
    question.shortTextQuestion = "232. Σημειώστε το σωστό Η δημιουργία κίνησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MRkGzeWWkjs=', 3204, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από τον πίνακα Κινούμενη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MRkGzeWWkjs=', 3206, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται από τον πίνακα επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QH940oOYK+g=', 3208, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. γίνεται από τη χρονογραμμή της κινούμενης εικόνας";
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
    question.shortTextQuestion = "233. Σημειώστε το σωστό Η κινούμενη εικόνα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+qrLSRF4p9E=', 3214, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι πολλά καρέ με διαφορετική διαμόρφωση επιπέδων μιας εικόνας σε κάθε ένα από αυτά";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+qrLSRF4p9E=', 3216, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι ένας καθορισμένος αριθμός καρέ με διαφορετικές εικόνες σε κάθε ένα από αυτά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7JEL8LJ2D/I=', 3218, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. είναι ένα καρέ με εικόνα πολλών επιπέδων";
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
    question.shortTextQuestion = "234. Σημειώστε το σωστό Σε ένα επίπεδο φόντου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('shdndezzEJI=', 3224, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργείται κίνηση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sX789kQkdn8=', 3226, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν δημιουργείται κίνηση (είναι και αυτό σωστό)";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DKxbZFuhvzw=', 3228, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δημιουργείται κίνηση αφού μετατραπεί σε κανονικό επίπεδο";
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
    question.shortTextQuestion = "235. Σημειώστε το σωστό Η προεπισκόπηση της κινούμενης εικόνα (και αυτό σωστό )  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fQmqaZJKdHY=', 3234, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από τον πίνακα κινούμενη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kI5hdkb60Xc=', 3236, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται από τον πίνακα επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MGpTc2ElTiY=', 3238, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. γίνεται με την εντολή αποθήκευση για web &συσκευές";
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
    question.shortTextQuestion = "236. Σημειώστε το σωστό Η αποθήκευση της κινούμενης εικόνας δεν  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fvZsoRBwLso=', 3244, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται ως αρχείο gif με την εντολή αποθήκευση για web & συσκευές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qQV1R44lqxo=', 3246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται ως μορφή PSD";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jg6ow/Vd/hg=', 3248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. γίνεται ως μορφή PDF";
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
    question.shortTextQuestion = "237. Σημειώστε το σωστό Το κουμπί Ενοποίηση στυλ επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MBGLQtqtDWs=', 3254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενεργοποιείται για να εφαρμοστεί ένα στυλ σε όλα τα άλλα καρέ στο ενεργό επίπεδο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MBGLQtqtDWs=', 3256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποιείται για να εφαρμοστεί ένα στυλ στο ενεργοποιημένο καρέ στο ενεργό επίπεδο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lPZxXMoV2OQ=', 3258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ενεργοποιείται για να εφαρμοστούν διαφορετικά στυλ στα διαφορετικά καρέ στο ενεργό επίπεδο";
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
    question.shortTextQuestion = "238. Σημειώστε το σωστό Η αντιγραφή καρέ είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SPDtr+yWpyU=', 3264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η αντιγραφή μιας εικόνας με όλα τα επίπεδά της";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kEVeXxc1hSg=', 3266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η αντιγραφή μιας διπλότυπης εκδοχής μιας εικόνας με συγκεκριμένη διαμόρφωση επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kEVeXxc1hSg=', 3268, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. η αντιγραφή μιας εικόνας χωρίς τις διαμορφώσεις των επιπέδων της";
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
    question.shortTextQuestion = "239. Σημειώστε το σωστό Η εντολή Επικόλληση πάνω στην επιλογή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x2io4EcdGoc=', 3274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αντικαθιστούνται τα επίπεδα της εικόνας με τα νέα επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eEdHGSD5MWs=', 3276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλασιάζεται ο αριθμός των επιπέδων της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eEdHGSD5MWs=', 3278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα επίπεδα είναι ορατά";
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
    question.shortTextQuestion = "240. Σημειώστε το σωστό Η εντολή Σύνδεση προστιθέμενων επιπέδων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I18l1a/c9cE=', 3284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενεργοποιείται μόνο όταν επικολλούνται καρέ σε διαφορετικά έγγραφα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I18l1a/c9cE=', 3286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποιείται μόνο για να συνδεθούν τα επίπεδα που έχουν επικολληθεί στον πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KdwnE/f3akI=', 3288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ενεργοποιείται για όλα τα παραπάνω";
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
    question.shortTextQuestion = "241. Σημειώστε το σωστό Η μέθοδος εισαγωγής ενδιάμεσων εικόνων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ob30wvur0+k=', 3294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μειώνει το χρόνο που απαιτείται για τη δημιουργία εφε κίνησης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BYzfsVJm3mY=', 3296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την αυτόνομη επεξεργασία των καρέ που δημιουργούνται";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u0jAQXzhXgg=', 3298, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει την αυτόματη τροποποίηση πολλών καρέ ανάμεσα σε δύο υπάρχοντα καρέ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('C9ck2EwT+TI=', 3300, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "242. Σημειώστε το σωστό Συγκριτικά με τα άλλα προγράμματα η εγγενής φύση του Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eIwMTlkc2K4=', 3304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποθηκεύει τις στρώσεις μιας εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eIwMTlkc2K4=', 3306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αποθηκεύει την εικόνα χωρίς γραμμές –οδηγούς";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('htLsmbvY96U=', 3308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αποθηκεύει μία εικόνα με συγχωνευμένα τα επίπεδα επεξεργασίας της";
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
    question.shortTextQuestion = "243. Σημειώστε το σωστό Το πρόγραμμα Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dw1DCVS6xcI=', 3314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ανοίγει και εικόνες με επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dw1DCVS6xcI=', 3316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ανοίγει τις εικόνες όπως τα άλλα προγράμματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kPfptK8eUY0=', 3318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ανοίγει τις εικόνες που είναι αποθηκευμένες μαζί με τον καμβά τους";
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
    question.shortTextQuestion = "244. Σημειώστε το σωστό η μέθοδος απόρριψης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p01P2GKgxvQ=', 3324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζει την απόρριψη ή την μη απόρριψη του επόμενου καρέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+F9eYBL3/vo=', 3326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσδιορίζει την απόρριψη ή την μη απόρριψη του προηγούμενου καρέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZZa/aE+4axQ=', 3328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αφορά τις κινούμενες εικόνες που περιλαμβάνουν διαφάνεια φόντου";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZZa/aE+4axQ=', 3330, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "245. Σημειώστε το σωστό Στη λίστα Save as.. η επιλογή Save Thumbnail  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('D2tETSlpZoE=', 3334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αποθηκεύει μικρογραφία εικόνας ως προεπισκόπηση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('D2tETSlpZoE=', 3336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αποθηκεύει την εικόνα με αλλαγμένες διαστάσεις";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GIrbpIdNNBo=', 3338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Αποθηκεύει το αρχείο της εικόνας χωρίς να αλλάξουν οι διαστάσεις";
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
    question.shortTextQuestion = "246. Σημειώστε το σωστό Στη χρονογραμμή animation  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G06xXfIbrek=', 3344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επιλογή επανάληψης καθορίζει τις φορές αναπαραγωγής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G06xXfIbrek=', 3346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθορίζει αν γίνει η αναπαραγωγή ή όχι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E23phqn3WjY=', 3348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. καθορίζει την αναπαραγωγή τριών καρέ τη φορά";
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
    question.shortTextQuestion = "247. Σημειώστε το σωστό Στο πλαίσιο διαλόγου Εκτύπωση, η εκτυπώσιμη περιοχή είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YvsQlra+vCI=', 3354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. λευκή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YvsQlra+vCI=', 3356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μαύρη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('foBWz+Q8KBs=', 3358, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διάφανη";
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
    question.shortTextQuestion = "248. Σημειώστε το σωστό Η αλλαγή θέσης μιας εικόνας στο χαρτί γίνεται μέσα από το πλαίσιο διαλόγου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZBPA2sJrgFM=', 3364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZBPA2sJrgFM=', 3366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rM8dsMiHo80=', 3368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Σε κανένα από τα δύο";
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
    question.shortTextQuestion = "249. Σημειώστε το σωστό Το πλαίσιο διαλόγου Εκτύπωση περιλαμβάνει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ajmHfTu5tEo=', 3374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ορισμό επιλογών εξόδου προεκτύπωσης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ajmHfTu5tEo=', 3376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Ορισμό ρύθμισης διαχωρισμού τετραχρωμίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('R39LznegvZA=', 3378, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Τοποθέτηση και κλιμάκωση καμβά";
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
    question.shortTextQuestion = "250. Σημειώστε το σωστό Όταν το μέγεθος εικόνας είναι μεγαλύτερο από την εκτυπώσιμη επιφάνεια  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e47JOh1Izjs=', 3384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μέσα από το μενού Εκτύπωση επιλέγεται το Προσαρμογή στο μέσο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('e47JOh1Izjs=', 3386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Μέσα από το μενού Εκτύπωση ρυθμίζεται το μέγεθος της εκτυπώσιμης επιφάνειας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2E49O6cR4I4=', 3388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Wu+9t1OQUqM=', 3390, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "251. Σημειώστε το σωστό Η κλιμάκωση της εκτυπωμένης εικόνας γίνεται μέσα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('va6proaozxk=', 3394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Από το πλαίσιο διαλόγου Εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('va6proaozxk=', 3396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Από το πλαίσιο διαλόγου Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zh2pAvxhuc4=', 3398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MNKW7eKKC9k=', 3400, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "252. Σημειώστε το σωστό Η διαχείριση χρωμάτων εκτύπωσης γίνεται καλύτερα μέσα από  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+O1UCWeo5og=', 3404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+O1UCWeo5og=', 3406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Τους οδηγούς του εκτυπωτή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nYJlrC+XvnQ=', 3408, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τις βιβλιοθήκες χρωμάτων στο διαδίκτυο";
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
    question.shortTextQuestion = "253. Σημειώστε το σωστό Η επιλογή Αντιστάθμιση μαύρου σημείου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J5y5ThMKNdg=', 3414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δεν διατηρεί τις λεπτομέρειες των σκούρων τόνων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NF1eTuDEQo0=', 3416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Διατηρεί τις λεπτομέρειες των σκούρων τόνων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NF1eTuDEQo0=', 3418, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "254. Σημειώστε το σωστό Η επιλογή Προσαρμογή στο μέσο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('41JulfLEKl4=', 3424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσαρμόζει το μέγεθος της εικόνας με το μέγεθος της εκτυπώσιμης επιφάνειας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('41JulfLEKl4=', 3426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσαρμόζει το μέγεθος της εκτυπώσιμης επιφάνειας με το μέγεθος του χαρτιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9pOiBdyELMg=', 3428, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. προσαρμόζει το μέγεθος των αντικειμένων της εικόνας μεταξύ τους";
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
    question.shortTextQuestion = "255. Σημειώστε το σωστό Για τον προσδιορισμό των χρωμάτων εκτύπωσης από τον εκτυπωτή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7hnFnUvU2JA=', 3434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μέσα από το μενού Εκτύπωση γίνεται κλικ στη χρωματική διαχείριση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7hnFnUvU2JA=', 3436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μέσα από το μενού Ρύθμιση σελίδας γίνεται κλικ στην χρωματική διαχείριση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SrMzqMrpEDI=', 3438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Σε οποιοδήποτε από τα παραπάνω";
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
    question.shortTextQuestion = "256. Σημειώστε το σωστό Η επιλογή Δοκίμιο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aa985zz0Hsc=', 3444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται μέσα στο αναδυόμενο μενού της επιλογής Χρωματική διαχείριση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aa985zz0Hsc=', 3446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται μέσα στο πλαίσιο διαλόγου Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('En0hJFdVGgA=', 3448, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "257. Σημειώστε το σωστό Η επιλογή Γραμμές βαθμονόμησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6jkT6v8febE=', 3454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εκτυπώνει μια κλίμακα του γκρι 11 σταδίων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6jkT6v8febE=', 3456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εκτυπώνει όλα τα χρώματα της εικόνας σε 11 στάδια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('h+i9G7xGzwI=', 3458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εκτυπώνει γωνιακά σημάδια περικοπής";
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
    question.shortTextQuestion = "258. Σημειώστε το σωστό Τα ημιτονικά ράστερ  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hr2GOUSdHEg=', 3464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποτελούνται από κουκκίδες που ελέγχουν την ποσότητα μελανιού που τοποθετείται σε ένα σημείο συγκεκριμένο στο πιεστήριο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hr2GOUSdHEg=', 3466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι σημεία πάνω στην εκτυπωμένη σελίδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('alD5QFzeJcM=', 3468, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
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
    question.shortTextQuestion = "259. Σημειώστε το σωστό Ένας επιτραπέζιος εκτυπωτής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('W/ozpCOTzls=', 2833, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν αναπαράγει πιστά τα αποτελέσματα της προεπισκόπησης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O2NNPy3GHHo=', 2835, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αναπαράγει πιστά τα αποτελέσματα της προεπισκόπησης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7+iYDbP6d4M=', 2837, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αναπαράγει πιστά τα αποτελέσματα της προεπισκόπησης με σωστό καλιμπράρισμα";
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
    question.shortTextQuestion = "260. Σημειώστε το σωστό Με την εντολή Προσαρμογή από το μενού Σχήμα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rwyzWvpEpX4=', 2843, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ορίζονται νέα σχήματα κουκκίδας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rwyzWvpEpX4=', 2845, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσαρμόζονται τα σχήματα στο μέγεθος της εκτυπώσιμης σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1Y6zXXEykNQ=', 2847, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oOJlDSrWWiw=', 2849, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "261. Σημειώστε το σωστό Η εντολή Διαχωρισμοί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OuDNVq61zjg=', 2853, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει την εκτύπωση καναλιών χρωμάτων σε διαφορετικές σελίδες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OuDNVq61zjg=', 2855, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την εκτύπωση καναλιών χρωμάτων σε μία σελίδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1nwSHSWEAJ8=', 2857, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HDRkgucAmhQ=', 2859, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
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
    question.shortTextQuestion = "262. Σημειώστε το σωστό Η εντολή Χρώματα επιτύπωσης αφορά  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BA4R6U545Lw=', 2863, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. τρία μη ραστεροποιημένα μελάνια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jCoHi1G+RRI=', 2865, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. τέσσερα μη ραστεροποιημένα μελάνια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QkzK2NGohMc=', 2867, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δύο μη ραστεροποιημένα μελάνια";
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
    question.shortTextQuestion = "263. Σημειώστε το σωστό Μονοτονικές εικόνες είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5abrfKk2NyM=', 2873, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εικόνες που εκτυπώνονται με μαύρο μελάνι";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W18FRDBpZM0=', 2875, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εικόνες που εκτυπώνονται με ένα μπλέ μελάνι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hcQHAdBbU2Q=', 2877, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εικόνες που εκτυπώνονται με ένα μελάνι";
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
    question.shortTextQuestion = "264. Σημειώστε το σωστό Για την σωστή εκτύπωση των διαχωρισμών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WCSm7WhNNwk=', 2883, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Χρειάζεται η μετατροπή της εικόνας σε RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fTk1e+5G11I=', 2885, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Χρειάζεται η μετατροπή της εικόνας σε CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fTk1e+5G11I=', 2887, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Δεν χρειάζεται η μετατροπή της εικόνας σε CMYK";
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
    question.shortTextQuestion = "265. Σημειώστε το σωστό Η προεπισκόπηση σε πολυκάναλη λειτουργία χρώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UduaMe9HRiU=', 2893, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν είναι τόσο ακριβής όσο εκείνη στη λειτουργία διτονικού χρώματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UduaMe9HRiU=', 2895, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι τόσο ακριβής όσο εκείνη στη λειτουργία διτονικού χρώματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VRQ/udTZi1o=', 2897, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. είναι περισσότερο ακριβής από εκείνη στη λειτουργία διτονικού χρώματος";
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
    question.shortTextQuestion = "266. Σημειώστε το σωστό Η πραγματική πυκνότητα του μελανιού στον εκτυπωτή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fYY6F9HM4wc=', 2903, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζεται με την επιλογή Αδιαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fYY6F9HM4wc=', 2905, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσδιορίζεται με την εντολή Πυκνότητα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JHodKCFnzvc=', 2907, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. προσδιορίζεται με ένα από τα εργαλεία χρωματισμού";
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
    question.shortTextQuestion = "267. Σημειώστε το σωστό Το ΡΑΝΤΟΝΕ ή το ΤΟΥΟ είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zkF/gOvlgBM=', 2913, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. πίνακες εργαλείων σχεδιασμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a3NbWB2xW0k=', 2915, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρωματικά σύστηματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a3NbWB2xW0k=', 2917, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μοντέλα χρωμάτων αντίστοιχο του RGB ή του CMYK";
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
    question.shortTextQuestion = "268. Σημειώστε το σωστό Σε περίπτωση απώθησης υποκείμενου χρώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q2xns5M1CCo=', 2923, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να δημιουργηθεί μία συναρμογή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q2xns5M1CCo=', 2925, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να δημιουργηθεί μια συναρμογή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qHl6/7Eh9hk=', 2927, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπορεί να επικαλυφθεί";
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
    question.shortTextQuestion = "269. Σημειώστε το σωστό Τα πλακάτα χρώματα είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gvwwouRY5U0=', 2933, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προαναμεμειγμένα μελάνια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gvwwouRY5U0=', 2935, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μελάνια του μοντέλου τετραχρωμίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('C4fPNmLxAik=', 2937, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μελάνια του μοντέλου τριχρωμίας";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RAb4pwKcAo0=', 2939, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "270. Σημειώστε το σωστό Τα πλακάτα χρώματα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Cv5oVAaMPfQ=', 2943, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιούνται σε ομάδες επιπέδων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MJ9lWW5A/9c=', 2945, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Χρησιμοποιούνται σε μεμονωμένα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tYMdAe78GLE=', 2947, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρησιμοποιούνται είτε σε μεμονωμένα είτε σε ομάδες επιπέδων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NcDTtMlr6vc=', 2949, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. κανένα από τα παραπάνω";
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
    question.shortTextQuestion = "271. Σημειώστε το σωστό Ένα χρώμα ως δεκαεξαδική τιμή αντιγράφεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Mb2EpbaMadE=', 2953, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο πρόχειρο ως παράμετρος HTML COLOR";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Mb2EpbaMadE=', 2955, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ως εικόνα JPEG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pc9+OFKaC1E=', 2957, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ως εικόνα PNG";
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
    question.shortTextQuestion = "272. Σημειώστε το σωστό Το Zoomify παρέχει τη δυνατότητα να   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('A7bVWeAwNhE=', 2963, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εξάγει αρχεία υψηλής ανάλυσης που μπορούν να ανεβούν σε διακομιστή και οι χρήστες να επιλέγουν ένα συγκεκριμένο σημείο και να κάνουν ζουμ για να δουν περισσότερες λεπτομέρειες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('A7bVWeAwNhE=', 2965, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εισάγει αρχεία υψηλής ανάλυσης που μπορούν να ανεβούν σε διακομιστή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5ngx9yUO+xc=', 2967, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εξάγει μία περιοχή μιας εικόνας που μπορεί να ανεβεί σε διακομιστή";
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
    question.shortTextQuestion = "273. Σημειώστε το σωστό Στοιχείο κατάδειξης είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Qq4w5ktqAik=', 2973, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ένα κουμπί ή μια εικόνα στο πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2SB3l9VMDAk=', 2975, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ένα κουμπί ή μια εικόνα σε μια σελίδα web, που αλλάζει όταν τοποθετηθεί πάνω του ο δείκτης του ποντικιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2SB3l9VMDAk=', 2977, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ένα κουμπί ή μια εικόνα στο πρόγραμμα που σε εισάγει σε εργαλεία web";
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
    question.shortTextQuestion = "274. Σημειώστε το σωστό To Adobe Bridge  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NQilhfTjhS4=', 2983, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι ένα πρόγραμμα για συλλογές χρωμάτων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7bnqZCqkxoM=', 2985, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι πρόγραμμα για συλλογές εργαλείων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JRAjZGjXWQs=', 2987, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. είναι μια εφαρμογή και σάς βοηθά να εντοπίζετε, να οργανώνετε και να αναζητάτε στοιχεία για εκτύπωση, web, βίντεο και δημιουργία περιεχομένου για φορητές συσκευές";
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
    question.shortTextQuestion = "275. Σημειώστε το σωστό Τα επίπεδα χρησιμοποιούνται για να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3MBO9McFEQ0=', 2993, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την εκτέλεση εργασιών όπως η σύνθεση πολλαπλών εικόνων, η προσθήκη κειμένου σε μια εικόνα ή η προσθήκη σχημάτων διανυσματικών γραφικών";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3MBO9McFEQ0=', 2995, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργηθεί μία εικόνα ενιαία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8GbRhh1Q5xg=', 2997, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δημιουργηθούν δύο εικόνες";
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
    question.shortTextQuestion = "276. Σημειώστε το σωστό Τα slice ανάλογα με το περιεχόμενό τους, κατηγοριοποιούνται σε  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('doosYMP1ImE=', 3003, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Οργανόγραμμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NWcItPqSyPY=', 3005, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Γράφημα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('c6pDWG2eVEo=', 3007, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εικόνα";
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
    question.shortTextQuestion = "277. Σημειώστε το σωστό Τα αυτόματα slice μετατρέπονται σε  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('omL6MzMvpH8=', 3013, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Slice χρήστη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('omL6MzMvpH8=', 3015, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Slice επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Pa0tme4WzTY=', 3017, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Είτε στο slice χρήστη είτε στο slice επιπέδου";
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
    question.shortTextQuestion = "278. Σημειώστε το σωστό (μπορεί να είναι περισσότερα από ένα) Το slice επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aua/L0Y6w5Y=', 3023, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να διαιρεθεί";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4ZOHEI9vToE=', 3025, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να διαιρεθεί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4ZOHEI9vToE=', 3027, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαιρείται μόνο καθέτως";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Nzggu0kT5MY=', 3029, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. διαιρείται μόνο οριζοντίως";
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
    question.shortTextQuestion = "279. Σημειώστε το σωστό (μπορεί να είναι περισσότερα από ένα) Η εμφάνιση των αριθμών slice  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Hi7fhCbqWWk=', 3033, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Γίνεται μέσα από το μενού Προτιμήσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Hi7fhCbqWWk=', 3035, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Γίνεται μέσα από το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fM3GiqbQztk=', 3037, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Γίνεται μέσα από το μενού Εικόνα";
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
    question.shortTextQuestion = "280. Σημειώστε το σωστό Ένα από τα σήματα slice σημαίνει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yX3NbC4AkFw=', 3043, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περιέχει εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yX3NbC4AkFw=', 3045, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. περιέχει επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1jh+3R/qnWo=', 3047, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. περιέχει γραφήματα";
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
    question.shortTextQuestion = "281. Σημειώστε το σωστό Με την επιλογή τύπου slice «Καμία Εικόνα»  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nD6I9FvF2nw=', 3053, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να εισαχθεί κείμενο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nD6I9FvF2nw=', 3055, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να εισαχθεί με τα τυπικά tag HTML";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4j1rE90P90U=', 3057, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μπορεί να εισαχθεί μόνο απλό κείμενο";
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
    question.shortTextQuestion = "282. Σημειώστε το σωστό Μπορούμε να ορίσουμε μηνύματα προγραμμάτων περιήγησης μέσα από  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZD0B40lKwKM=', 3063, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το μενού Επιλογές slice";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZD0B40lKwKM=', 3065, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZCg1eK28FYo=', 3067, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. το μενού Προβολή";
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
    question.shortTextQuestion = "283. Σημειώστε το σωστό Η σειρά στοίβαξης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ycUVlYv/s3E=', 3073, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να αλλάξει";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ycUVlYv/s3E=', 3075, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να αλλάξει";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j19taXBkCow=', 3077, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δεν μπορεί να αλλάξει για τα slice επιπέδου";
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
    question.shortTextQuestion = "284. Σημειώστε το σωστό Ο συνδυασμός slice γίνεται μόνο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4Mj+dHZopIE=', 3083, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε slice χρήστη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i5GZUWf9LK0=', 3085, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε slice επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZnndRzXzyuE=', 3087, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε slice αυτόματο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CuLnFep3gO0=', 3089, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('CuLnFep3gO0=', 3091, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Ε. όλα τα παραπάνω";
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
    question.shortTextQuestion = "285. Σημειώστε το σωστό Το κλείδωμα όλων των slice γίνεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NCrG+767yyY=', 3093, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από την επιλογή Προβολή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NCrG+767yyY=', 3095, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. μέσα από το πλαίσιο διαλόγου Αποθήκευση για web & συσκευές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l/kTS2M8tm0=', 3097, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μέσα από το μενού Αρχείο";
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





