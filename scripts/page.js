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
    var weight = DecodeNumber('FlYdLpgl+2Y=', 911, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FlYdLpgl+2Y=', 911, -1000, 1000),DecodeDecimal('WCKRABuBQhM=', 911, -1000, 1000),DecodeDecimal('WCKRABuBQhM=', 911, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = " 1. Σημειώστε τα στοιχεία (2) που δεν περιλαμβάνονται στον παρακάτω ορισμό Ένα μήνυμα οπτικής επικοινωνίας περιλαμβάνει:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FlYdLpgl+2Y=', 913, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. σύμβολα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ydBsMycOecg=', 915, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. ομιλίες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ydBsMycOecg=', 917, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. γραπτά κείμενα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AcubrLykEQY=', 919, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ εικόνες";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('ft+mbqmjK+s=', 921, -1, 1);
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
    var weight = DecodeNumber('ft+mbqmjK+s=', 921, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ft+mbqmjK+s=', 921, -1000, 1000),DecodeDecimal('1sBo463aZGY=', 921, -1000, 1000),DecodeDecimal('1sBo463aZGY=', 921, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = " 2. Σημειώστε το στοιχείο (1) που δεν περιλαμβάνεται στον παρακάτω ορισμό. Σύμφωνα με τον Ο Argyle(1988) υπάρχουν οι παρακάτω λειτουργίες της μη λεκτικής επικοινωνίας:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ft+mbqmjK+s=', 923, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Έκφραση συναισθημάτων  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jpNXsBjIl0Q=', 925, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Έκφραση στάσεων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oqFDbVolDGw=', 927, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Επεξήγηση λεκτικού μηνύματος  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oqFDbVolDGw=', 929, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ Παρουσίαση της προσωπικότητας    ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('V8wReDl1gWQ=', 931, -1, 1);
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
    var weight = DecodeNumber('L8I2Kyipiwc=', 931, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L8I2Kyipiwc=', 931, -1000, 1000),DecodeDecimal('vQPOKiIBM3E=', 931, -1000, 1000),DecodeDecimal('vQPOKiIBM3E=', 931, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = " 3. Σημειώστε το στοιχείο που είναι σωστό";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9abFib+1Ans=', 933, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. η οριζόντια γραμμή δείχνει ψυχική ηρεμία και αδράνεια  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9abFib+1Ans=', 935, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. η οριζόντια γραμμή δείχνει συναισθηματική φόρτιση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Be3U1UHrpJE=', 937, -1, 1);
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
    var weight = DecodeNumber('2jFvk7l2UnY=', 941, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2jFvk7l2UnY=', 941, -1000, 1000),DecodeDecimal('qmCCvNkB6e4=', 941, -1000, 1000),DecodeDecimal('qmCCvNkB6e4=', 941, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = " 4. Σημειώστε τα στοιχεία (3) που δεν περιλαμβάνονται στον παρακάτω ορισμό. Οι βασικές φόρμες, σύμφωνα με τον Καντίνσκι (1996, σ.74) είναι:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7LJONzU5elo=', 943, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. το ισόπλευρο τρίγωνο  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7LJONzU5elo=', 945, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. το τετράγωνο  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7IqZpXAbBaE=', 947, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το ορθογώνιο παραλληλόγραμμο  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('v5nucjNW9JQ=', 949, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. ο κύκλος    ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('+wBgqCTOWMc=', 951, -1, 1);
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
    var weight = DecodeNumber('+wBgqCTOWMc=', 951, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+wBgqCTOWMc=', 951, -1000, 1000),DecodeDecimal('xNAtg4HBVCQ=', 951, -1000, 1000),DecodeDecimal('xNAtg4HBVCQ=', 951, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = " 5. Κυκλώστε το σωστό στην παρακάτω πρόταση Η Γραφιστική σύνθεση αφορά στην τοποθέτηση οπτικών στοιχείων σε ένα κάδρο. Αυτό σημαίνει ότι ο προβληματισμός του σχεδιαστή επικεντρώνεται στην:      ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+wBgqCTOWMc=', 953, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Δημιουργία οπτικών συσχετισμών μεταξύ των οπτικών στοιχείων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C7Wy+kJW6mw=', 955, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Δημιουργία εννοιολογικών συσχετισμών  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f9OOO44Nol4=', 957, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Τίποτα από τα δύο (Α και Β)";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BGmkwBpU2bw=', 959, -1, 1);
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
    var weight = DecodeNumber('6ziwH/TDcjI=', 961, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6ziwH/TDcjI=', 961, -1000, 1000),DecodeDecimal('kPxDZkHINEM=', 961, -1000, 1000),DecodeDecimal('kPxDZkHINEM=', 961, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = " 6. Κυκλώστε την σωστή συνέχεια (1) της πρότασης παρακάτω Με τον όρο φόρμα στην γραφιστική σύνθεση ορίζουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ofopN8KnC4o=', 963, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Μια περιοχή που οριοθετείται από μια κλειστή γραμμή και περιγράφει ένα τρισδιάστοτο αντικείμενο.  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ofopN8KnC4o=', 965, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Μια περιοχή που περιλαμβάνει μία σειρά σημείων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('raAenLwIRwE=', 967, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Μια σειρά σημείων που αν τα ενώσουμε μπορεί να ορίσουν μια ή περισσότερες γραμμές";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dEEyH5L/Phk=', 969, -1, 1);
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
    var weight = DecodeNumber('91qfHP8Tn4k=', 971, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('91qfHP8Tn4k=', 971, -1000, 1000),DecodeDecimal('rJ308VXMHTI=', 971, -1000, 1000),DecodeDecimal('rJ308VXMHTI=', 971, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = " 7. Κυκλώστε την σωστή πρόταση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('91qfHP8Tn4k=', 973, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Η αντιφόρμα ορίζει μια περιοχή αντίστροφη της φόρμας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OvzuTRgt/J4=', 975, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Η αντιφόρμα είναι συμμετρική της φόρμας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H7FgEesM61A=', 977, -1, 1);
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
    var weight = DecodeNumber('dObcudIY/SQ=', 981, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dObcudIY/SQ=', 981, -1000, 1000),DecodeDecimal('gXCA51NCsTI=', 981, -1000, 1000),DecodeDecimal('gXCA51NCsTI=', 981, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = " 8. Κυκλώστε το χαρακτηριστικό που δεν αποδίδει καθαρά την παρακάτω φράση: Το κύριο χαρακτηριστικό μίας στυλιζαρισμένης εικόνας είναι:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dObcudIY/SQ=', 983, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Καθαρά σχήματα  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5Y7yApy39ZA=', 985, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Λίγα και πλακάτα χρώματα.  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZQVs1ZyKM9k=', 987, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. ’σπρο και μαύρο χωρίς τόνους  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('hc1EHdxmOIo=', 991, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hc1EHdxmOIo=', 991, -1000, 1000),DecodeDecimal('23xZY5zF9D4=', 991, -1000, 1000),DecodeDecimal('23xZY5zF9D4=', 991, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = " 9. Επιλέξτε τη σωστή φράση Η επιτυχία στην απλοποίηση μίας στυλιζαρισμένης εικόνας δεν εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hc1EHdxmOIo=', 993, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Από το πλήθος των σχημάτων  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BY8zrrJOp88=', 995, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Από το χρώμα των σχημάτων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BY8zrrJOp88=', 997, -1, 1);
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
    var weight = DecodeNumber('twLfYzp9csw=', 1001, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('twLfYzp9csw=', 1001, -1000, 1000),DecodeDecimal('iuL5MmJf/0E=', 1001, -1000, 1000),DecodeDecimal('iuL5MmJf/0E=', 1001, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = " 10. Σημειώστε το σωστό στοιχείο :    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('twLfYzp9csw=', 1003, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Το σημαίνον είναι το αντικείμενο  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J5RNvS5DghE=', 1005, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Το σημαίνον είναι το στοιχείο μέσα στην σύνθεση  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AABm4xf1OmI=', 1007, -1, 1);
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
    var weight = DecodeNumber('/C1ize4CQOc=', 1011, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/C1ize4CQOc=', 1011, -1000, 1000),DecodeDecimal('9RGqSSnuyPw=', 1011, -1000, 1000),DecodeDecimal('9RGqSSnuyPw=', 1011, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = " 11. Σύμφωνα με τη σημειωτική θεωρία:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Imbqo9zDsVI=', 1013, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Ο θεατής είναι ασταθής αλλά ικανός να αντιδράσει στην θέα μιας εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Imbqo9zDsVI=', 1015, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Συμμετέχει ενεργά στη δημιουργία μιας εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WBw965Oo7Tg=', 1017, -1, 1);
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
    var weight = DecodeNumber('0OPywNklGWw=', 1021, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0OPywNklGWw=', 1021, -1000, 1000),DecodeDecimal('Trca3VlgqR4=', 1021, -1000, 1000),DecodeDecimal('Trca3VlgqR4=', 1021, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = " 12. Σημειώστε τις σημαντικές παραμέτρους της αφήγησης:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XI8bwVfBXug=', 1023, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. μέσο μετάδοσης της πληροφορίας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dVoWCbmVYRU=', 1025, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. σχέδιο-οργάνωση της πληροφορίας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dVoWCbmVYRU=', 1027, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. ιστορία  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yRuPtXT0Aq4=', 1029, -1, 1);
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
    var weight = DecodeNumber('3bjdA/hQXHo=', 1031, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3bjdA/hQXHo=', 1031, -1000, 1000),DecodeDecimal('bFkV8t/N/mY=', 1031, -1000, 1000),DecodeDecimal('bFkV8t/N/mY=', 1031, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = " 13. Σημειώστε το σωστό στοιχείο:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XRXG7lutKa8=', 1033, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Ο Μετζ θεωρεί ότι ο θεατής ταυτίζεται με αυτό που βλέπει  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XRXG7lutKa8=', 1035, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " B. Lacan θεωρεί ότι ο θεατής ταυτίζεται με αυτό που βλέπει  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('848b0cHeAzQ=', 1037, -1, 1);
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
    var weight = DecodeNumber('vID54RwR86I=', 1041, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vID54RwR86I=', 1041, -1000, 1000),DecodeDecimal('TgkUzgbwcR4=', 1041, -1000, 1000),DecodeDecimal('TgkUzgbwcR4=', 1041, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = " 14. Όσο μεγαλύτερο είναι το βάθος χρώματος,    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JrjhnWvrdgM=', 1043, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Τόσο μεγαλύτερη είναι η χρωματική πληροφορία μιας εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JrjhnWvrdgM=', 1045, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Τόσο καλύτερη είναι η ευκρίνεια μιας εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mdKDKdK1uW8=', 1047, -1, 1);
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
    var weight = DecodeNumber('5sypjQgi8y8=', 1051, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5sypjQgi8y8=', 1051, -1000, 1000),DecodeDecimal('2XWfqJ/aUoY=', 1051, -1000, 1000),DecodeDecimal('2XWfqJ/aUoY=', 1051, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = " 15. Κυκλώστε την επιλογή που δεν ανταποκρίνεται απόλυτα στην παρακάτω παραδοχή: Η επιλογή του βάθους χρώματος εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5sypjQgi8y8=', 1053, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. τη συσκευή προβολής  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sQgzU0p59+M=', 1055, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. το μέσο προβολής  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BqlLmvdgWUw=', 1057, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το επιθυμητό κοντράστ και την ευκρίνεια της εικόνας  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BqlLmvdgWUw=', 1059, -1, 1);
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
    var weight = DecodeNumber('8jVhDQyyRLw=', 1061, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8jVhDQyyRLw=', 1061, -1000, 1000),DecodeDecimal('no3DsxRRZK8=', 1061, -1000, 1000),DecodeDecimal('no3DsxRRZK8=', 1061, -1000, 1000));
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
    var weight = DecodeNumber('BBbY5XUrKbg=', 908, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BBbY5XUrKbg=', 908, -1000, 1000),DecodeDecimal('sfTiUwzk9Kg=', 908, -1000, 1000),DecodeDecimal('sfTiUwzk9Kg=', 908, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = " 17. Κυκλώστε το σωστό Ο κορεσμός ενός χρώματος αναφέρεται    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WCKRABuBQhM=', 910, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. στην \"καθαρότητα\" του χρώματος σε σχέση με το απλό, που καθορίζει την απόχρωσή του  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WCKRABuBQhM=', 912, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. στον συνδυασμό των καθαρών χρωμάτων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RTb9I8ifreo=', 914, -1, 1);
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
    var weight = DecodeNumber('0PcIW0qHOnY=', 918, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0PcIW0qHOnY=', 918, -1000, 1000),DecodeDecimal('AcubrLykEQY=', 918, -1000, 1000),DecodeDecimal('AcubrLykEQY=', 918, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = " 18. Κυκλώστε το σωστό Η Χροιά προσδιορίζει    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0PcIW0qHOnY=', 920, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Εκείνο από τα απλά χρώματα, που \"συνεισφέρουν\" σε μεγαλύτερο ποσοστό στη δημιουργία ενός σύνθετου χρώματος  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1sBo463aZGY=', 922, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Τις τονικές διαβαθμισεις του χρώματος  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('B0FgIdO3WNk=', 924, -1, 1);
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
    var weight = DecodeNumber('xQEn9B252BM=', 928, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xQEn9B252BM=', 928, -1000, 1000),DecodeDecimal('oqFDbVolDGw=', 928, -1000, 1000),DecodeDecimal('oqFDbVolDGw=', 928, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = " 19. Κυκλώστε το σωστό στην παρακάτω πρόταση 24 bit βάθος χρώματος αντιστοιχούν σε:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xQEn9B252BM=', 930, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. 256 χρώματα  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vQPOKiIBM3E=', 932, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. 256 Χ 24 = 6.144 χρώματα  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oRM8EiNNCHU=', 934, -1, 1);
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
    var weight = DecodeNumber('pAUl4YrmVH8=', 938, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pAUl4YrmVH8=', 938, -1000, 1000),DecodeDecimal('Rm3Abj2jAgI=', 938, -1000, 1000),DecodeDecimal('Rm3Abj2jAgI=', 938, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = " 20. Κυκλώστε το σωστό στην παρακάτω πρόταση Τα χρώματα στις ηλεκτρονικές συσκευές δημιουργούνται με συνδυασμό των ακτινοβολιών    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pAUl4YrmVH8=', 940, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. κόκκινης της μπλε και της κίτρινης  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gmluWwVBpyA=', 942, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. κόκκινης της πράσινης και της μπλε  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gmluWwVBpyA=', 944, -1, 1);
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
    var weight = DecodeNumber('J5ejI+5gyHQ=', 948, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J5ejI+5gyHQ=', 948, -1000, 1000),DecodeDecimal('AvSSKLUk0PA=', 948, -1000, 1000),DecodeDecimal('AvSSKLUk0PA=', 948, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = " 21. Ποια από τις παρακάτω εκδοχές ισχύει: Η ψηφιοποίηση (digitization) εικόνων από αναλογική σε ψηφιακή μορφή είναι    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xNAtg4HBVCQ=', 950, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Η μετατροπή των αναλογικών εικόνων σε ψηφιακή μορφή  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xNAtg4HBVCQ=', 952, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Η διαδικασία επεξεργασίας αφού μεταφερθούν σε ψηφιακά μέσα  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DKL9rsOmSJ8=', 954, -1, 1);
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
    var weight = DecodeNumber('aBCvUJ+N3yY=', 958, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aBCvUJ+N3yY=', 958, -1000, 1000),DecodeDecimal('T31DcbKRhds=', 958, -1000, 1000),DecodeDecimal('T31DcbKRhds=', 958, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = " 22. Κυκλώστε το λάθος Η ψηφιοποίηση εικόνων από αναλογική μορφή γίνεται    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aBCvUJ+N3yY=', 960, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. με τη βοήθεια σαρωτών  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kPxDZkHINEM=', 962, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. απευθείας με τη χρήση ψηφιακών φωτογραφικών μηχανών.  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y5p1oTvzFWs=', 964, -1, 1);
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
    var weight = DecodeNumber('geixPOsBjnY=', 968, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('geixPOsBjnY=', 968, -1000, 1000),DecodeDecimal('dEEyH5L/Phk=', 968, -1000, 1000),DecodeDecimal('dEEyH5L/Phk=', 968, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = " 23. Κυκλώστε το σωστό. Κατά τη διαδικασία ψηφιοποίησης η εικόνα μετατρέπεται σε ακολουθίες δυαδικών ψηφίων. που συμβολίζουν    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rJ308VXMHTI=', 970, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Την τιμή χρώματος κάθε pixel σε κάθε σημείο της εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rJ308VXMHTI=', 972, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Το μέγεθος ενός pixel σε ένα σημείο της εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+ShSl5vfyEU=', 974, -1, 1);
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
    var weight = DecodeNumber('kr/PN38Z2P0=', 978, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kr/PN38Z2P0=', 978, -1000, 1000),DecodeDecimal('H7FgEesM61A=', 978, -1000, 1000),DecodeDecimal('H7FgEesM61A=', 978, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = " 24. Κυκλώστε το λάθος. Ο αποθηκευτικός χώρος που απαιτείται για μια εικόνα, εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kr/PN38Z2P0=', 980, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. τη μορφή αποθήκευσης των δεδομένων,  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gXCA51NCsTI=', 982, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. την ύπαρξη ή όχι χρώματος  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RoC6NcKQ4I8=', 984, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το περιεχόμενο της εικόνας  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RoC6NcKQ4I8=', 986, -1, 1);
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
    var weight = DecodeNumber('eXNaCMEmeVY=', 988, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eXNaCMEmeVY=', 988, -1000, 1000),DecodeDecimal('ZQVs1ZyKM9k=', 988, -1000, 1000),DecodeDecimal('ZQVs1ZyKM9k=', 988, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "25. Κύκλωσε την λανθασμένη παραδοχή.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eXNaCMEmeVY=', 990, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Όσο περισσότερα εικονοστοιχεία υπάρχουν σε μία εικόνα τόσο μεγαλύτερο είναι το μέγεθος αρχείου της εικόνας.  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('23xZY5zF9D4=', 992, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Ο αριθμός των εικονοστοιχείων στη μονάδα του μήκους αναφέρεται ως ανάλυση (resolution) της εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QsiZwaMgOsk=', 994, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "   Γ. Ο αριθμός των εικονοστοιχείων στη μονάδα του μήκους εκφράζεται σε εικονοστοιχεία ανά ίντσα (ppi  pixels per inch).  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hWny5qOPaUg=', 996, -1, 1);
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
    var weight = DecodeNumber('pb2QHIoYWGc=', 998, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pb2QHIoYWGc=', 998, -1000, 1000),DecodeDecimal('Y1rupvoEwDU=', 998, -1000, 1000),DecodeDecimal('Y1rupvoEwDU=', 998, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "26. Τα αρχεία BMP αφορούν:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iuL5MmJf/0E=', 1000, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αρχείο Εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iuL5MmJf/0E=', 1002, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αρχείο Κείμενου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tYYjBCs2hqc=', 1004, -1, 1);
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
    var weight = DecodeNumber('KvpoDU7/Zxo=', 1008, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KvpoDU7/Zxo=', 1008, -1000, 1000),DecodeDecimal('AABm4xf1OmI=', 1008, -1000, 1000),DecodeDecimal('AABm4xf1OmI=', 1008, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "27. Ποιος από τους παρακάτω τύπους αποθήκευσης εικόνας υποστηρίζει τη διαφάνεια:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KvpoDU7/Zxo=', 1010, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y71E0IjWHmI=', 1012, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y71E0IjWHmI=', 1014, -1, 1);
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
    var weight = DecodeNumber('D3lMxm1c1yc=', 1018, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('D3lMxm1c1yc=', 1018, -1000, 1000),DecodeDecimal('xh87+ke6a28=', 1018, -1000, 1000),DecodeDecimal('xh87+ke6a28=', 1018, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "28. Ποιος από τους παρακάτω τύπους αποθήκευσης εικόνας δίνει αίσθηση κίνησης:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('D3lMxm1c1yc=', 1020, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Trca3VlgqR4=', 1022, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pKNeLY7H8lg=', 1024, -1, 1);
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
    var weight = DecodeNumber('z+EUaYLuY4k=', 1028, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('z+EUaYLuY4k=', 1028, -1000, 1000),DecodeDecimal('yRuPtXT0Aq4=', 1028, -1000, 1000),DecodeDecimal('yRuPtXT0Aq4=', 1028, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "29. Κυκλώστε το σωστό Αν τα βάζαμε σε μία «ζυγαριά», το πιο σημαντικό πλεονέκτημα του photoshop σε σχέση με ερασιτεχνικά προγράμματα, όπως το αντίστοιχο του office των windows είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('z+EUaYLuY4k=', 1030, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η δυνατότητα διαμόρφωσης της επιφάνειας εργασίας κατά το δοκούν";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bFkV8t/N/mY=', 1032, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η μεγάλη γκάμα στην επιλογή των πινέλων ζωγραφικής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('A1U6wRMc/kQ=', 1034, -1, 1);
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
    var weight = DecodeNumber('kQnE9YnHEQY=', 1038, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kQnE9YnHEQY=', 1038, -1000, 1000),DecodeDecimal('sEegviFgRoA=', 1038, -1000, 1000),DecodeDecimal('sEegviFgRoA=', 1038, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "30. Κυκλώστε το σωστό Τις παλέτες μπορούμε να τις κρύβουμε και να τις εμφανίζουμε από το μενού:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kQnE9YnHEQY=', 1040, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Edit";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y7jBPhWTn/k=', 1042, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Window.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y7jBPhWTn/k=', 1044, -1, 1);
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
    var weight = DecodeNumber('MOxbPlbn99I=', 1048, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MOxbPlbn99I=', 1048, -1000, 1000),DecodeDecimal('BxHMG0u62bw=', 1048, -1000, 1000),DecodeDecimal('BxHMG0u62bw=', 1048, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "31. Σημειώστε το σωστό στοιχείο : Ο σαρωτής έχει την δυνατότητα να:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2XWfqJ/aUoY=', 1050, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να διορθώνει χρωματικά τις εικόνες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2XWfqJ/aUoY=', 1052, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να διαχωρίζει τα στοιχεία από το φόντο της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pxLvMQs1baQ=', 1054, -1, 1);
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
    var weight = DecodeNumber('mdJlmHpz7tE=', 1058, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mdJlmHpz7tE=', 1058, -1000, 1000),DecodeDecimal('BqlLmvdgWUw=', 1058, -1000, 1000),DecodeDecimal('BqlLmvdgWUw=', 1058, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "32. Σημειώστε τα σωστά στοιχεία Η σαρωμένη εικόνα αποθηκεύεται σε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('no3DsxRRZK8=', 1060, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. BMP";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nq19KKPHpLo=', 1062, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B.TIFF";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nq19KKPHpLo=', 1064, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. PNG";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ho0rGax4mbk=', 1066, -1, 1);
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
    var weight = DecodeNumber('dzTetskWZFo=', 1068, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dzTetskWZFo=', 1068, -1000, 1000),DecodeDecimal('YNDkZQvwE0M=', 1068, -1000, 1000),DecodeDecimal('YNDkZQvwE0M=', 1068, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "33. Σημειώστε το σωστό στοιχείο Η κάρτα γραφικών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L47nwqWV3qA=', 1070, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι υπεύθυνη για την απεικόνιση δεδομένων στην οθόνη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('L47nwqWV3qA=', 1072, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι υπεύθυνη για την επεξεργασία εικόνων και γραφικών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QlRMgRR1Ous=', 1074, -1, 1);
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
    var weight = DecodeNumber('bu/dOTPBRL0=', 1078, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bu/dOTPBRL0=', 1078, -1000, 1000),DecodeDecimal('z4gZSkhBnrA=', 1078, -1000, 1000),DecodeDecimal('z4gZSkhBnrA=', 1078, -1000, 1000));
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
    var weight = DecodeNumber('1eNOv+ET32o=', 1088, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1eNOv+ET32o=', 1088, -1000, 1000),DecodeDecimal('dwQPrYtcqY8=', 1088, -1000, 1000),DecodeDecimal('dwQPrYtcqY8=', 1088, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "35. Σημειώστε τα χαρακτηριστικά της κάρτας γραφικών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1eNOv+ET32o=', 1090, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να είναι συμβατή με το δίσκο του ηλεκτρονικού υπολογιστή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GVZVtGz8Npg=', 1092, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να έχει μεγάλη μνήμη και ανάλυση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GVZVtGz8Npg=', 1094, -1, 1);
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
    var weight = DecodeNumber('CDtz/2By0Ug=', 1098, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CDtz/2By0Ug=', 1098, -1000, 1000),DecodeDecimal('0cUea19ikHI=', 1098, -1000, 1000),DecodeDecimal('0cUea19ikHI=', 1098, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "36. Σημειώστε το σωστό Η μηχανή λήψης μιας εικόνας μπορεί να αποθηκεύσει σε αρχεία raw, επειδή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CDtz/2By0Ug=', 1100, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η εικόνα μπορεί να επεξεργαστεί μόνο από το πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dvha0k6XOIs=', 1102, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. η εικόνα μπορεί να επεξεργαστεί μόνο από το πρόγραμμα Corel";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ARZMs7FMR9Y=', 1104, -1, 1);
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
    var weight = DecodeNumber('OtPbd1hlsSg=', 1108, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OtPbd1hlsSg=', 1108, -1000, 1000),DecodeDecimal('pD9jcLZduAw=', 1108, -1000, 1000),DecodeDecimal('pD9jcLZduAw=', 1108, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "37. Σημειώστε το σωστό Μια εικόνα όταν αποθηκεύεται σε μορφή TIFF και όχι σε JPEG  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cy/WosITxJk=', 1110, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. υποστηρίζει τη δυνατότητα layers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cy/WosITxJk=', 1112, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καταλαμβάνει μικρότερο χώρο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Kz0Z+kcJQkM=', 1114, -1, 1);
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
    var weight = DecodeNumber('TrOmfHC7y18=', 1118, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TrOmfHC7y18=', 1118, -1000, 1000),DecodeDecimal('N0uIodpsmQM=', 1118, -1000, 1000),DecodeDecimal('N0uIodpsmQM=', 1118, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "38. Σημειώστε το σωστό Οι εκτυπωτές laser  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TrOmfHC7y18=', 1120, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. είναι φθηνότεροι σε σχέση με άλλους εκτυπωτές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GHvmEjmdTyg=', 1122, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι αργοί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UzHG/TH2HJo=', 1124, -1, 1);
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
    var weight = DecodeNumber('E2rhS20afs4=', 1128, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E2rhS20afs4=', 1128, -1000, 1000),DecodeDecimal('rmLwu56rsDg=', 1128, -1000, 1000),DecodeDecimal('rmLwu56rsDg=', 1128, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "39. Σημειώστε το σωστό. Η γραμμή του βασικού μενού εντολών σε όλα τα προγράμματα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+TG9MX2ml8Y=', 1130, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται πάνω από την επιφάνεια επεξεργασίας ψηφιακής εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+TG9MX2ml8Y=', 1132, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στο Flash η γραμμή μενού βρίσκεται αριστερά στην επιφάνεια.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ghU9o4ouaps=', 1134, -1, 1);
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
    var weight = DecodeNumber('Wv+PkOAkAwM=', 1138, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Wv+PkOAkAwM=', 1138, -1000, 1000),DecodeDecimal('isqsXifRMvs=', 1138, -1000, 1000),DecodeDecimal('isqsXifRMvs=', 1138, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "40. Σημειώστε το σωστό. Το μενού \"Select\":  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Wv+PkOAkAwM=', 1140, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται στο Flash Adobe Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ww/DRdFyJsw=', 1142, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται σε όλα τα προγράμματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+6qqilpuLQs=', 1144, -1, 1);
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
    var weight = DecodeNumber('dDCyP6Kx6HE=', 1148, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dDCyP6Kx6HE=', 1148, -1000, 1000),DecodeDecimal('IipqY91MXlE=', 1148, -1000, 1000),DecodeDecimal('IipqY91MXlE=', 1148, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "41. Σημειώστε το σωστό. Οι παλέτες σε όλα τα προγράμματα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dDCyP6Kx6HE=', 1150, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Aφορούν μόνο στα χρώματα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8Pjgv0ieoiw=', 1152, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αφορούν μόνο στα χρώματα και στα στρώματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QJiV9UECBZ4=', 1154, -1, 1);
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
    var weight = DecodeNumber('lAMBf5FvE8Y=', 1158, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lAMBf5FvE8Y=', 1158, -1000, 1000),DecodeDecimal('QZVKY6sMHpM=', 1158, -1000, 1000),DecodeDecimal('QZVKY6sMHpM=', 1158, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "42. Σημειώστε το σωστό. Το αναδυόμενο παράθυρο των στρωμάτων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lAMBf5FvE8Y=', 1160, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται δεξιά στην επιφάνεια επεξεργασίας της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IPPY0Qn2Nvg=', 1162, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται αριστερά στην επιφάνεια επεξεργασίας της εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MYdUO65j+B4=', 1164, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Βρίσκεται στη γραμμή βασικού μενού File.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+Gh7BwlA828=', 1166, -1, 1);
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
    var weight = DecodeNumber('xfsWJtu71FE=', 1168, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xfsWJtu71FE=', 1168, -1000, 1000),DecodeDecimal('4SQKtQNgVwk=', 1168, -1000, 1000),DecodeDecimal('4SQKtQNgVwk=', 1168, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "43. Σημειώστε ποια είναι τα κύρια χαρακτηριστικά των στρωμάτων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ReUR1QuDfNY=', 1170, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η διαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y+76lPgKrZE=', 1172, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η απόκρυψη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y+76lPgKrZE=', 1174, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το χρώμα.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4izHzJoCl28=', 1176, -1, 1);
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
    var weight = DecodeNumber('r8Sj6FQAgfg=', 1178, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r8Sj6FQAgfg=', 1178, -1000, 1000),DecodeDecimal('n1HcpIVcrew=', 1178, -1000, 1000),DecodeDecimal('n1HcpIVcrew=', 1178, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "44. Σημειώστε το σωστό:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r8Sj6FQAgfg=', 1180, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το Adobe Photoshop έχει μία ομάδα εργαλείων για επεξεργασία εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FMOglIxDAk8=', 1182, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το Adobe Photoshop έχει δύο βασικές ομάδες εργαλείων: για τη ζωγραφική και για την επεξεργασία εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KQSLGtFm2KA=', 543, -1, 1);
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
    var weight = DecodeNumber('HhIrUe66MX4=', 547, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HhIrUe66MX4=', 547, -1000, 1000),DecodeDecimal('EZSeYAtEIJE=', 547, -1000, 1000),DecodeDecimal('EZSeYAtEIJE=', 547, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "45. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HhIrUe66MX4=', 549, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με το πλήκτρο SHIFT κρύβεται και εμφανίζεται η κάθε παλέτα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ucQkRobPIhs=', 551, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με το πλήκτρο TAB κρύβονται και εμφανίζονται οι παλέτες και η γραμμή επιλογών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ucQkRobPIhs=', 553, -1, 1);
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
    var weight = DecodeNumber('At3IZqaVHpM=', 557, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('At3IZqaVHpM=', 557, -1000, 1000),DecodeDecimal('D8KI/GnkaNs=', 557, -1000, 1000),DecodeDecimal('D8KI/GnkaNs=', 557, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "46. Σημειώστε το σωστό. Η εμφάνιση ενός εικονιδίου τριγωνικού σχήματος με θαυμαστικό στη μέση σημαίνει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('R1wwwuMOAuM=', 559, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ότι υπάρχουν λανθασμένοι παράμετροι για την εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('R1wwwuMOAuM=', 561, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ότι δεν υπάρχει αντίστοιχο χρώμα στον εκτυπωτή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aK3YvLRn8tk=', 563, -1, 1);
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
    var weight = DecodeNumber('tMAj5fGQyB8=', 567, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tMAj5fGQyB8=', 567, -1000, 1000),DecodeDecimal('kWAlj5D2XOg=', 567, -1000, 1000),DecodeDecimal('kWAlj5D2XOg=', 567, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "47. Σημειώστε το σωστό. Σχετικά με τα χρώματα πρέπει να έχουμε υπόψη μας τα εξής:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tMAj5fGQyB8=', 569, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Τα εργαλεία χρησιμοποιούνται μόνο το χρώμα προσκηνίου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7ms/rzikAJA=', 571, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η γόμα χρησιμοποιείται για να φανερώσει το χρώμα παρασκηνίου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vquK4QgKLis=', 573, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Στην περίπτωση της μεγέθυνσης της εικόνας το χρώμα συμπληρώνεται από το προσκήνιο.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9WxRpLwemQc=', 575, -1, 1);
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
    var weight = DecodeNumber('KCml+mdVo34=', 577, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KCml+mdVo34=', 577, -1000, 1000),DecodeDecimal('JUSvrA9RPHo=', 577, -1000, 1000),DecodeDecimal('JUSvrA9RPHo=', 577, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "48. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KkpzOXezWo4=', 579, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το εργαλείο του σταγονόμετρου βρίσκεται στην τελευταία θέση που βρισκόταν πριν το κλείσιμο του προγράμματος.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KkpzOXezWo4=', 581, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το εργαλείο του σταγονόμετρου βρίσκεται στην εργαλειοθήκη δεξιά της οθόνης επεξεργασίας μιας εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0snCKQ7bySA=', 583, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το εργαλείο του σταγονόμετρου βρίσκεται στην μπάρα πάνω από την οθόνη επεξεργασίας μιας εικόνας.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('U6VHDG3YAd8=', 585, -1, 1);
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
    var weight = DecodeNumber('JffSAN/kfpE=', 587, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JffSAN/kfpE=', 587, -1000, 1000),DecodeDecimal('zaGYPuvVSe0=', 587, -1000, 1000),DecodeDecimal('zaGYPuvVSe0=', 587, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "49. Σημειώστε το σωστό. Η μεγέθυνση του παραθύρου της εικόνας ταυτόχρονα με τη μεγέθυνση της εικόνας γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JffSAN/kfpE=', 589, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αυτόματα με τη μεγέθυνση της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('F5HB0QSD8uo=', 591, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αυτόματα με τη μεγέθυνση του παραθύρου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JTQ0vDfQk1U=', 593, -1, 1);
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
    var weight = DecodeNumber('qQH9MqF0ydk=', 597, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qQH9MqF0ydk=', 597, -1000, 1000),DecodeDecimal('5Dn2gqdhNjU=', 597, -1000, 1000),DecodeDecimal('5Dn2gqdhNjU=', 597, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "50. Σημειώστε το σωστό. Κάνουμε zoom για μεγέθυνση με τα πλήκτρα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hlLI8EvqMJU=', 599, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Control + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hlLI8EvqMJU=', 601, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Control + Alt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tZ180mP988M=', 603, -1, 1);
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
    var weight = DecodeNumber('8w9Qv8jZx0g=', 607, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8w9Qv8jZx0g=', 607, -1000, 1000),DecodeDecimal('h9++zgU2NtA=', 607, -1000, 1000),DecodeDecimal('h9++zgU2NtA=', 607, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = false;
    question.shortTextQuestion = "51. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e3B1Va1XiIQ=', 609, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Zoom Out = Alt + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('e3B1Va1XiIQ=', 611, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Zoom Out = Alt + Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Nij1kc4kFUY=', 613, -1, 1);
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
    var weight = DecodeNumber('FhOp3ivGyAg=', 617, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FhOp3ivGyAg=', 617, -1000, 1000),DecodeDecimal('Z/ER+/I6p9Q=', 617, -1000, 1000),DecodeDecimal('Z/ER+/I6p9Q=', 617, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = false;
    question.shortTextQuestion = "52. Σημειώστε το σωστό. Η διαφορά που έχει η επιλογή από το μενού view με την αντίστοιχη επιλογή από το zoom από την εργαλειοθήκη:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nv3M06AwmH0=', 619, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Έχουμε καθορισμένο το κέντρο της νέας προβολής.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nv3M06AwmH0=', 621, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δεν μπορεί να επιλεχθεί άλλο παράθυρο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Rewp5EBy1So=', 623, -1, 1);
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
    var weight = DecodeNumber('KGBw2fv/g50=', 627, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KGBw2fv/g50=', 627, -1000, 1000),DecodeDecimal('g8zKaUuVQgw=', 627, -1000, 1000),DecodeDecimal('g8zKaUuVQgw=', 627, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = false;
    question.shortTextQuestion = "53. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KGBw2fv/g50=', 629, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να αλλάξουμε τη μονάδα μέτρησης των χαράκων μπαίνουμε στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PlnniKcPsFA=', 631, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Για να αλλάξουμε τη μονάδα μέτρησης των χαράκων μπαίνουμε στο μενού File Preferences ή από την παλέτα Info (Πληροφορίες).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PlnniKcPsFA=', 633, -1, 1);
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
    var weight = DecodeNumber('bvZCQZIqyHI=', 637, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bvZCQZIqyHI=', 637, -1000, 1000),DecodeDecimal('+Q0vfBOwcss=', 637, -1000, 1000),DecodeDecimal('+Q0vfBOwcss=', 637, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = false;
    question.shortTextQuestion = "54. Σημειώστε το σωστό. Για να δημιουργηθεί μία γραμμή - οδηγός πρέπει να:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bvZCQZIqyHI=', 639, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλεχθεί πρώτα η εντολή εισαγωγής χαράκων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ofpbWrBLquE=', 641, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλεχθεί πρώτα η εντολή θέασης χαράκων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zvx+1iJfvpo=', 643, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Επιλεχθεί πρώτα η απόσταση που θέλουμε να έχουν οι γραμμές του πλέγματος μεταξύ τους.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('A8BGesYudTs=', 645, -1, 1);
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
    var weight = DecodeNumber('ui05H7M9o7U=', 647, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ui05H7M9o7U=', 647, -1000, 1000),DecodeDecimal('cwoUl42hNY0=', 647, -1000, 1000),DecodeDecimal('cwoUl42hNY0=', 647, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = false;
    question.shortTextQuestion = "55. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nvX+ph4ebnU=', 649, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή εμφάνισης χαράκων βρίσκεται στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nvX+ph4ebnU=', 651, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή εμφάνισης χαράκων βρίσκεται στο μενού File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vR/ljgb7XUs=', 653, -1, 1);
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
    var weight = DecodeNumber('eLPGJaEDFRs=', 657, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eLPGJaEDFRs=', 657, -1000, 1000),DecodeDecimal('6005Kwgbv3o=', 657, -1000, 1000),DecodeDecimal('6005Kwgbv3o=', 657, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "56. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AD1K5qH9Pw8=', 659, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή κλειδώματος και ξεκλειδώματος οδηγών βρίσκεται στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AD1K5qH9Pw8=', 661, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή κλειδώματος και ξεκλειδώματος οδηγών βρίσκεται στο μενού file.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('msJ37x0TLYs=', 663, -1, 1);
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
    var weight = DecodeNumber('qC2DH9cxwz8=', 667, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qC2DH9cxwz8=', 667, -1000, 1000),DecodeDecimal('ssLxeOAgVNI=', 667, -1000, 1000),DecodeDecimal('ssLxeOAgVNI=', 667, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = false;
    question.shortTextQuestion = "57. Σημειώστε τις σωστές απαντήσεις:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qC2DH9cxwz8=', 669, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Στην ομάδα επιλογών πλέγματος υπάρχουν οι επιλογές: color style-gridline every-lock/unlock.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RKwBNT2ttJQ=', 671, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στην ομάδα επιλογών πλέγματος υπάρχουν οι επιλογές: color style-gridline every-snap to.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DSaCbOoY36g=', 673, -1, 1);
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
    var weight = DecodeNumber('csqdnAjhRnE=', 677, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('csqdnAjhRnE=', 677, -1000, 1000),DecodeDecimal('K666DNyJ7xo=', 677, -1000, 1000),DecodeDecimal('K666DNyJ7xo=', 677, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = false;
    question.shortTextQuestion = "58. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('csqdnAjhRnE=', 679, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή floating selection έχει ιδιότητες παρόμοιες με αυτές των στρωμάτων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OdUwuMvWe1E=', 681, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή floating selection έχει ιδιότητες ίδιες με αυτές των στρωμάτων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('A5ZHuIAjw58=', 683, -1, 1);
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
    var weight = DecodeNumber('3zdDf/Pp61M=', 687, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3zdDf/Pp61M=', 687, -1000, 1000),DecodeDecimal('T+TPse7O6uo=', 687, -1000, 1000),DecodeDecimal('T+TPse7O6uo=', 687, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = false;
    question.shortTextQuestion = "59. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hxIdtqsZWdI=', 689, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το Constrain Proportions αλλάζει μόνο όταν είναι ενεργό το Resample image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hxIdtqsZWdI=', 691, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το Constrain Proportions αλλάζει μόνο όταν είναι ανενεργό το Resample image.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YhSdLgflUOw=', 693, -1, 1);
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
    var weight = DecodeNumber('f5DAhlYP19g=', 697, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('f5DAhlYP19g=', 697, -1000, 1000),DecodeDecimal('PvB0lH6hHmo=', 697, -1000, 1000),DecodeDecimal('PvB0lH6hHmo=', 697, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = false;
    question.shortTextQuestion = "60. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('f5DAhlYP19g=', 699, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η αλλαγή διαστάσεων μιας εικόνας γίνεται μπαίνοντας στο μενού Image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j79a39Sq/p8=', 701, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η αλλαγή διαστάσεων μιας εικόνας που βρίσκεται σε επίπεδο (layer) γίνεται μπαίνοντας στο υπομενού Transform > Scale μέσα από το μενού Edit.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j79a39Sq/p8=', 703, -1, 1);
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
    var weight = DecodeNumber('jSnTbPwjaAw=', 707, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jSnTbPwjaAw=', 707, -1000, 1000),DecodeDecimal('m7vI6EaNQVM=', 707, -1000, 1000),DecodeDecimal('m7vI6EaNQVM=', 707, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = false;
    question.shortTextQuestion = "61. Σημειώστε το σωστό. Βλέπουμε με χρώμα τα κανάλια μιας έγχρωμης φωτογραφίας με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wueyUX1Ji9s=', 709, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή Interface από το υπομενού Preferences.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wueyUX1Ji9s=', 711, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. πάτημα πλήκτρων Control + 1.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1YffKX9mdNk=', 713, -1, 1);
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
    var weight = DecodeNumber('JYk5F0gvdCQ=', 717, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JYk5F0gvdCQ=', 717, -1000, 1000),DecodeDecimal('QbdXJTDPyaU=', 717, -1000, 1000),DecodeDecimal('QbdXJTDPyaU=', 717, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = false;
    question.shortTextQuestion = "62. Σημειώστε το σωστό. Για να δούμε το κόκκινο κανάλι μιας έγχρωμης RGB φωτογραφίας πατάμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JYk5F0gvdCQ=', 719, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Control + 3";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('78mGu3xGfqg=', 721, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Control + 2";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZYMHOwTGQUk=', 723, -1, 1);
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
    var weight = DecodeNumber('3+qAW/mQ1lk=', 727, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3+qAW/mQ1lk=', 727, -1000, 1000),DecodeDecimal('a9h1nIM0ktw=', 727, -1000, 1000),DecodeDecimal('a9h1nIM0ktw=', 727, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = false;
    question.shortTextQuestion = "63. Σημειώστε το σωστό ή τα σωστά. Εργαλεία επιλογής είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OHfJA4tu50w=', 729, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Λάσο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oc0BVH1gGMU=', 731, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μαγικό ραβδάκι.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('k2Zv6KI1eq0=', 733, -1, 1);
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
    var weight = DecodeNumber('BZl5xIp9FWI=', 737, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BZl5xIp9FWI=', 737, -1000, 1000),DecodeDecimal('crBYsODlwdM=', 737, -1000, 1000),DecodeDecimal('crBYsODlwdM=', 737, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = false;
    question.shortTextQuestion = "64. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BZl5xIp9FWI=', 739, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το πλαίσιο ελέγχου anti aliased χρησιμοποιείται για την αποεπιλογή.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pa6lNMd4j08=', 741, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή Deselect από το μενού Select χρησιμοποιείται για την αποεπιλογή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pa6lNMd4j08=', 743, -1, 1);
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
    var weight = DecodeNumber('h4DvIvSyiyU=', 747, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h4DvIvSyiyU=', 747, -1000, 1000),DecodeDecimal('qLWZmNTYRzk=', 747, -1000, 1000),DecodeDecimal('qLWZmNTYRzk=', 747, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = false;
    question.shortTextQuestion = "65. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mPO1ngO68Os=', 749, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ανάμειξη pixels με τιμή λαμπρότητας 255 και από τα τρία κανάλια δίνει λευκό χρώμα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mPO1ngO68Os=', 751, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ανάμειξη pixels με τιμή λαμπρότητας 0 και από τα τρία κανάλια δίνει λευκό χρώμα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('T2LJWxftI5I=', 753, -1, 1);
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
    var weight = DecodeNumber('uTQrWBvqroE=', 757, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uTQrWBvqroE=', 757, -1000, 1000),DecodeDecimal('C7HqyTfVqzY=', 757, -1000, 1000),DecodeDecimal('C7HqyTfVqzY=', 757, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = false;
    question.shortTextQuestion = "66. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uTQrWBvqroE=', 759, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Pixels με τιμή λαμπρότητας 0 στο κόκκινο κανάλι, 126 στο μπλε και 250 στο πράσινο, σχηματίζουν το χρώμα ματζέντα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9dM+TdPJGbc=', 761, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Pixels με τιμή λαμπρότητας 0 στο κόκκινο κανάλι, 250 στο μπλε και 0 στο πράσινο, σχηματίζουν το χρώμα ματζέντα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lA0C9j3F6bQ=', 763, -1, 1);
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
    var weight = DecodeNumber('xYAiETZWRBU=', 767, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xYAiETZWRBU=', 767, -1000, 1000),DecodeDecimal('FWk4Zu4iMfE=', 767, -1000, 1000),DecodeDecimal('FWk4Zu4iMfE=', 767, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = false;
    question.shortTextQuestion = "67. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xYAiETZWRBU=', 769, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με το μαγικό ραβδάκι επιλέγουμε μια περιοχή της εικόνας με διαφορετικά χρώματα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Jm/2i6uZbJ4=', 771, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με το μαγικό ραβδάκι επιλέγουμε μια περιοχή συγγενών χρωμάτων της εικόνας αυτόματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Jm/2i6uZbJ4=', 773, -1, 1);
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
    var weight = DecodeNumber('zwH/imM+Sbk=', 777, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zwH/imM+Sbk=', 777, -1000, 1000),DecodeDecimal('KCMGyqwtLkg=', 777, -1000, 1000),DecodeDecimal('KCMGyqwtLkg=', 777, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = false;
    question.shortTextQuestion = "68. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zwH/imM+Sbk=', 779, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Τα επίπεδα είναι απαραίτητα σε μια εργασία επεξεργασίας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bf768mWN7dc=', 781, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Τα επίπεδα είναι απαραίτητα μόνο σε μια εργασία επεξεργασίας πολλών ταυτόχρονων εικόνων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lPUfBoZ9iJE=', 783, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Τα επίπεδα είναι απαραίτητα για την εισαγωγή βίντεο σε επίπεδο επεξεργασίας εικόνας.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ARAIVSoVGHU=', 785, -1, 1);
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
    var weight = DecodeNumber('+p4WQnLCrEk=', 787, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+p4WQnLCrEk=', 787, -1000, 1000),DecodeDecimal('Dpj4dJls+NU=', 787, -1000, 1000),DecodeDecimal('Dpj4dJls+NU=', 787, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = false;
    question.shortTextQuestion = "69. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+p4WQnLCrEk=', 789, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η διαφάνεια ενός επιπέδου δε μπορεί να αλλάξει.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ucL50wD7x1w=', 791, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η αδιαφάνεια ενός επιπέδου δεν μπορεί να αλλάξει.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0f8YyO2Q7Rw=', 793, -1, 1);
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
    var weight = DecodeNumber('48iCcJJ2CSs=', 797, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('48iCcJJ2CSs=', 797, -1000, 1000),DecodeDecimal('n+3u2xSjjqY=', 797, -1000, 1000),DecodeDecimal('n+3u2xSjjqY=', 797, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = false;
    question.shortTextQuestion = "70. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6+7rGeUrkiE=', 799, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Στο έξυπνο αντικείμενο μπορούμε να εφαρμόσουμε εφέ φίλτρων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6+7rGeUrkiE=', 801, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το έξυπνο αντικείμενο έχει ένα επίπεδο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('enrICOty3sc=', 803, -1, 1);
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
    var weight = DecodeNumber('fkyTS0KW1bk=', 807, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fkyTS0KW1bk=', 807, -1000, 1000),DecodeDecimal('MXkSsvYtzog=', 807, -1000, 1000),DecodeDecimal('MXkSsvYtzog=', 807, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = false;
    question.shortTextQuestion = "71. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fkyTS0KW1bk=', 809, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ο πίνακας \"επίπεδα\" έχει εμφάνιση/απόκρυψη επιπέδων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('N4EK4b8hlno=', 811, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ο πίνακας \"επίπεδα\" έχει εφέ, μικρογραφίες, ανάπτυξη και σύμπτυξη ομάδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4Hmlt3KZ65U=', 813, -1, 1);
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
    var weight = DecodeNumber('eMUROm0+S2o=', 817, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eMUROm0+S2o=', 817, -1000, 1000),DecodeDecimal('1Jem+kd07zg=', 817, -1000, 1000),DecodeDecimal('1Jem+kd07zg=', 817, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = false;
    question.shortTextQuestion = "72. Σημειώστε το σωστό. Για να ανοίξει ή να κρυφτεί ένα επίπεδο ή ομάδα επιπέδων κλικάρουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T3QgGXTP+XQ=', 819, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το μάτι αριστερά από το εικονίδιο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T3QgGXTP+XQ=', 821, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στο πάνω αριστερά εικονίδιο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KLzz5gKpyhc=', 823, -1, 1);
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
    var weight = DecodeNumber('IMmWZ9mg+VM=', 827, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IMmWZ9mg+VM=', 827, -1000, 1000),DecodeDecimal('AfT7asqBsSA=', 827, -1000, 1000),DecodeDecimal('AfT7asqBsSA=', 827, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = false;
    question.shortTextQuestion = "73. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('60bfR9WDDUo=', 829, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στο μάτι αριστερά κάθε εικονιδίου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('60bfR9WDDUo=', 831, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στις επιλογές του πίνακα Επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D+nwd+1KTpQ=', 833, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στις εντολές του μενού Επιπέδων.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Wg4DF2IeY84=', 835, -1, 1);
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
    var weight = DecodeNumber('dneEd+IRD1Y=', 837, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dneEd+IRD1Y=', 837, -1000, 1000),DecodeDecimal('VS7fqfla5C4=', 837, -1000, 1000),DecodeDecimal('VS7fqfla5C4=', 837, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = false;
    question.shortTextQuestion = "74. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AafLf3CMW1Y=', 839, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η λειτουργία ανάμειξης ορίζει έναν τρόπο ανάμειξης για το επίπεδο ή την ομάδα σε σχέση με τα άλλα επίπεδα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AafLf3CMW1Y=', 841, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η λειτουργία ορίζει έναν τρόπο εκτύπωσης μόνο των ορατών επιπέδων ή ομάδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QYkPEJKsons=', 843, -1, 1);
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
    var weight = DecodeNumber('lnpLMLkDHkc=', 847, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lnpLMLkDHkc=', 847, -1000, 1000),DecodeDecimal('3OEwCrz3tlk=', 847, -1000, 1000),DecodeDecimal('3OEwCrz3tlk=', 847, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = false;
    question.shortTextQuestion = "75. Σημειώστε το σωστό. Δημιουργία εγγράφου από επίπεδο σε ομάδα γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lnpLMLkDHkc=', 849, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Την εντολή \"διπλασιασμός\", μέσα από το μενού αρχείο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sR8t6PPtRHw=', 851, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Την εντολή \"διπλασιασμός\", μέσα από τον πίνακα επιπέδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sR8t6PPtRHw=', 853, -1, 1);
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
    var weight = DecodeNumber('tYVvQedwQl8=', 857, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tYVvQedwQl8=', 857, -1000, 1000),DecodeDecimal('tuU5uogpkAI=', 857, -1000, 1000),DecodeDecimal('tuU5uogpkAI=', 857, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = false;
    question.shortTextQuestion = "76. Σημειώστε το σωστό. Επαναφέρουμε τις προηγούμενες ρυθμίσεις ορατότητας των επιπέδων με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kySo21d9EF4=', 859, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Πατημένο Alt/Option + κλικ στο εικονίδιο του ματιού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kySo21d9EF4=', 861, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Πατημένο Control + κλικ στο εικονίδιο του ματιού.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4xRSxGQl2oM=', 863, -1, 1);
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
    var weight = DecodeNumber('cRbfxy8PZRY=', 867, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cRbfxy8PZRY=', 867, -1000, 1000),DecodeDecimal('gc96JFnJFPc=', 867, -1000, 1000),DecodeDecimal('gc96JFnJFPc=', 867, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = false;
    question.shortTextQuestion = "77. Σημειώστε το σωστό. Για να ανοίξουμε μια ομάδα επιπέδων κάνουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cRbfxy8PZRY=', 869, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με πατημένο το Alt κάνουμε κλικ στο τρίγωνο αριστερά του εικονιδίου του φακέλου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nTlzj9KeDOY=', 871, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κλικ στο τρίγωνο αριστερά του εικονιδίου του φακέλου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nTlzj9KeDOY=', 873, -1, 1);
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
    var weight = DecodeNumber('V3ljm79OM7Q=', 877, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('V3ljm79OM7Q=', 877, -1000, 1000),DecodeDecimal('ZcMmrTav9z0=', 877, -1000, 1000),DecodeDecimal('ZcMmrTav9z0=', 877, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = false;
    question.shortTextQuestion = "78. Σημειώστε το σωστό. Η δειγματοληψία χρώματος γίνεται με τα εργαλεία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('V3ljm79OM7Q=', 879, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μαγικό ραβδάκι.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LNpsBjosf3M=', 881, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Σφραγίδα αντιγραφής και πινέλου διόρθωσης.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FVy6sGWuRaQ=', 883, -1, 1);
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
    var weight = DecodeNumber('6buyJD/9B48=', 887, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6buyJD/9B48=', 887, -1000, 1000),DecodeDecimal('bhZDOvpHz7k=', 887, -1000, 1000),DecodeDecimal('bhZDOvpHz7k=', 887, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = false;
    question.shortTextQuestion = "79. Σημειώστε το σωστό. Εάν δεν εφαρμόζεται μία εντολή φταίει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WTqgEyeTIcA=', 889, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το επίπεδο στο οποίο εργαζόμαστε δεν είναι ενεργό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WTqgEyeTIcA=', 891, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το επίπεδο στο οποίο εργαζόμαστε είναι συνδεδεμένο με άλλο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NfDW77uSGxw=', 893, -1, 1);
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
    var weight = DecodeNumber('tJlaGc89Mc4=', 897, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tJlaGc89Mc4=', 897, -1000, 1000),DecodeDecimal('5ozJ6Or4K9w=', 897, -1000, 1000),DecodeDecimal('5ozJ6Or4K9w=', 897, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = false;
    question.shortTextQuestion = "80. Σημειώστε το σωστό. Για να αποεπιλέξουμε ένα επίπεδο:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uaWVttqoeYQ=', 899, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Κρατάμε πατημένο το πλήκτρο Control + κλικ στην περιοχή έξω από το εικονίδιο του επιπέδου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uaWVttqoeYQ=', 901, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κρατάμε πατημένο το πλήκτρο Alt + κλικ στην περιοχή έξω από το εικονίδιο επιπέδου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yOCMuxZOh+c=', 903, -1, 1);
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
    var weight = DecodeNumber('sfTiUwzk9Kg=', 907, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sfTiUwzk9Kg=', 907, -1000, 1000),DecodeDecimal('8v6DUgbFTSI=', 907, -1000, 1000),DecodeDecimal('8v6DUgbFTSI=', 907, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = false;
    question.shortTextQuestion = "81. Σημειώστε το σωστό. Η αυτόματη επιλογή επιπέδων εμφανίζεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pSqRN2DDbLw=', 909, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αφού πατήσουμε το εργαλείο μετακίνησης.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pSqRN2DDbLw=', 911, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αφού πατήσουμε το εργαλείο της επιλογής.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FlYdLpgl+2Y=', 913, -1, 1);
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
    var weight = DecodeNumber('AcubrLykEQY=', 917, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AcubrLykEQY=', 917, -1000, 1000),DecodeDecimal('7eSkJ4T69ls=', 917, -1000, 1000),DecodeDecimal('7eSkJ4T69ls=', 917, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = false;
    question.shortTextQuestion = "82. Σημειώστε το σωστό. Η δημιουργία ομάδας από ένα επίπεδο γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WRDJbx+vXOo=', 919, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Σέρνουμε το επίπεδο προς το εικονίδιο φακέλου στο κάτω μέρος του πίνακα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WRDJbx+vXOo=', 921, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κρατώντας πατημένο το Control σύρουμε το επίπεδο προς το εικονίδιο φακέλου στο κάτω μέρος του πίνακα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ft+mbqmjK+s=', 923, -1, 1);
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
    var weight = DecodeNumber('oqFDbVolDGw=', 927, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oqFDbVolDGw=', 927, -1000, 1000),DecodeDecimal('Ps63thpGLyg=', 927, -1000, 1000),DecodeDecimal('Ps63thpGLyg=', 927, -1000, 1000));
    question.answers.length = 0;
    question.num = 83;
    question.isSingleAns = false;
    question.shortTextQuestion = "83. Σημειώστε το σωστό. Η παλέτα των καναλιών μιας εικόνας έχει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oqFDbVolDGw=', 929, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ακριβώς τις ίδιες λειτουργίες με την παλέτα των Επιπέδων εκτός από την εντολή της ορατότητας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('V8wReDl1gWQ=', 931, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Έχει ακριβώς τις ίδιες λειτουργίες με την παλέτα των Επιπέδων εκτός από το εικονίδιο της σύνδεσης.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9abFib+1Ans=', 933, -1, 1);
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
    var weight = DecodeNumber('Rm3Abj2jAgI=', 937, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Rm3Abj2jAgI=', 937, -1000, 1000),DecodeDecimal('xtL9GCpJ9qs=', 937, -1000, 1000),DecodeDecimal('xtL9GCpJ9qs=', 937, -1000, 1000));
    question.answers.length = 0;
    question.num = 84;
    question.isSingleAns = false;
    question.shortTextQuestion = "84. Σημειώστε το σωστό. Η παλέτα καναλιών μιας εικόνας είναι χρήσιμη:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Rm3Abj2jAgI=', 939, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να διορθωθούν τα χρώματα μιας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bc25776klYc=', 941, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Για να αλλάξουν εντελώς τα χρώματα μιας εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2jFvk7l2UnY=', 943, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Για να οργανωθούν όλα τα χρώματα μιας εικόνας σε μία σειρά.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7IqZpXAbBaE=', 945, -1, 1);
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
    var weight = DecodeNumber('AvSSKLUk0PA=', 947, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AvSSKLUk0PA=', 947, -1000, 1000),DecodeDecimal('SURr9/zsjHo=', 947, -1000, 1000),DecodeDecimal('SURr9/zsjHo=', 947, -1000, 1000));
    question.answers.length = 0;
    question.num = 85;
    question.isSingleAns = false;
    question.shortTextQuestion = "85. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AvSSKLUk0PA=', 949, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το κανάλι ’λφα δίνει τη δυνατότητα για μερική διαφάνεια του χρώματος που καλύπτει το μεγαλύτερο μέρος της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('v5nucjNW9JQ=', 951, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το κανάλι ’λφα δίνει τη δυνατότητα για μερική διαφάνεια μόνο ενός χρώματος της εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('C7Wy+kJW6mw=', 953, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το κανάλι ’λφα δίνει τη δυνατότητα για μερική ή ολική αδιαφάνεια ενός μέρους της εικόνας.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion86()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 85;
    var weight = DecodeNumber('T31DcbKRhds=', 957, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T31DcbKRhds=', 957, -1000, 1000),DecodeDecimal('PxZgldPmTaw=', 957, -1000, 1000),DecodeDecimal('PxZgldPmTaw=', 957, -1000, 1000));
    question.answers.length = 0;
    question.num = 86;
    question.isSingleAns = false;
    question.shortTextQuestion = "86. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BGmkwBpU2bw=', 959, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το κανάλι ’λφα χρησιμοποιείται για μερική ή ολική αδιαφάνεια ενός μέρους της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BGmkwBpU2bw=', 961, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το κανάλι ’λφα χρησιμοποιείται για σύνδεση εικόνων με διακριτά όρια.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6ziwH/TDcjI=', 963, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το κανάλι ’λφα χρησιμοποιείται για σύνδεση εικόνων χωρίς όρια.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion87()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 86;
    var weight = DecodeNumber('dEEyH5L/Phk=', 967, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dEEyH5L/Phk=', 967, -1000, 1000),DecodeDecimal('aBkMguO+qwg=', 967, -1000, 1000),DecodeDecimal('aBkMguO+qwg=', 967, -1000, 1000));
    question.answers.length = 0;
    question.num = 87;
    question.isSingleAns = false;
    question.shortTextQuestion = "87. Σημειώστε το σωστό. Το ιστόγραμμα μιας εικόνας εμφανίζεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1W69wczhLmg=', 969, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Όταν κλικάρουμε στην εντολή από το μενού Window.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1W69wczhLmg=', 971, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Όταν κλικάρουμε στην εντολή από το μενού File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('91qfHP8Tn4k=', 973, -1, 1);
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
    var weight = DecodeNumber('H7FgEesM61A=', 977, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H7FgEesM61A=', 977, -1000, 1000),DecodeDecimal('tUHzrp/HRAo=', 977, -1000, 1000),DecodeDecimal('tUHzrp/HRAo=', 977, -1000, 1000));
    question.answers.length = 0;
    question.num = 88;
    question.isSingleAns = false;
    question.shortTextQuestion = "88. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xOUyitds8d4=', 979, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η ενέργεια «Αναίρεση» γίνεται μπαίνοντας στο μενού επεξεργασίας (Edit).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xOUyitds8d4=', 981, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η ενέργεια «Αναίρεση» γίνεται μπαίνοντας στο μενού Αρχείου (File).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dObcudIY/SQ=', 983, -1, 1);
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
    var weight = DecodeNumber('ZQVs1ZyKM9k=', 987, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZQVs1ZyKM9k=', 987, -1000, 1000),DecodeDecimal('L+GY9Gg4/hE=', 987, -1000, 1000),DecodeDecimal('L+GY9Gg4/hE=', 987, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = false;
    question.shortTextQuestion = "89. Σημειώστε το σωστό.  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gENh89MR5jw=', 989, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. H ενέργεια «επαναφορά» γίνεται με επιλογή του εργαλείου πινέλου ιστορικού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gENh89MR5jw=', 991, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η ενέργεια «επαναφορά» γίνεται με επιλογή εργαλείου γόμας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hc1EHdxmOIo=', 993, -1, 1);
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
    var weight = DecodeNumber('Y1rupvoEwDU=', 997, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Y1rupvoEwDU=', 997, -1000, 1000),DecodeDecimal('hWny5qOPaUg=', 997, -1000, 1000),DecodeDecimal('hWny5qOPaUg=', 997, -1000, 1000));
    question.answers.length = 0;
    question.num = 90;
    question.isSingleAns = false;
    question.shortTextQuestion = "90. Σημειώστε το σωστό. Για να ενεργοποιηθεί η εντολή «αυτόματη λήψη πρώτου στιγμιότυπου»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O3kOzZAL8Vw=', 999, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιούμε την εντολή «Επιλογές Ιστορικού».";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O3kOzZAL8Vw=', 1001, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρησιμοποιούμε την εντολή γεμίσματος από το μενού Αρχείου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('twLfYzp9csw=', 1003, -1, 1);
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
    var weight = DecodeNumber('AABm4xf1OmI=', 1007, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AABm4xf1OmI=', 1007, -1000, 1000),DecodeDecimal('JIg5/7aE/Z4=', 1007, -1000, 1000),DecodeDecimal('JIg5/7aE/Z4=', 1007, -1000, 1000));
    question.answers.length = 0;
    question.num = 91;
    question.isSingleAns = false;
    question.shortTextQuestion = "91. Σημειώστε το σωστό. Για να εμφανίσουμε μία ηχητική ειδοποίηση για ολοκλήρωση μιας λειτουργίας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('P0UkY55XJoE=', 1009, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνουμε στο μενού Επεξεργασία, επιλέγουμε τις προτιμήσεις και μετά ηχητική ειδοποίηση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P0UkY55XJoE=', 1011, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνουμε στο μενού Επεξεργασίας, επιλέγουμε προτιμήσεις.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/C1ize4CQOc=', 1013, -1, 1);
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
    var weight = DecodeNumber('xh87+ke6a28=', 1017, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xh87+ke6a28=', 1017, -1000, 1000),DecodeDecimal('hKBJsNMVfU0=', 1017, -1000, 1000),DecodeDecimal('hKBJsNMVfU0=', 1017, -1000, 1000));
    question.answers.length = 0;
    question.num = 92;
    question.isSingleAns = false;
    question.shortTextQuestion = "92. Σημειώστε το σωστό. Ο πίνακας «Ιστορικό» ορίζει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xh87+ke6a28=', 1019, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μόνο την προέλευση του πινέλου ιστορικού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PgBlAhzLuO4=', 1021, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο την κατάσταση ιστορικού.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0OPywNklGWw=', 1023, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μόνο μικρογραφία στιγμιότυπου.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dVoWCbmVYRU=', 1025, -1, 1);
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
    var weight = DecodeNumber('yRuPtXT0Aq4=', 1027, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yRuPtXT0Aq4=', 1027, -1000, 1000),DecodeDecimal('DOtoHx/DHbM=', 1027, -1000, 1000),DecodeDecimal('DOtoHx/DHbM=', 1027, -1000, 1000));
    question.answers.length = 0;
    question.num = 93;
    question.isSingleAns = false;
    question.shortTextQuestion = "93. Σημειώστε το σωστό. Η ενέργεια «διπλασιασμός κατάστασης»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uw/m0J1EYw0=', 1029, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Χρησιμοποιείται για μελλοντική χρήση μιας συγκεκριμένης επεξεργασίας μιας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uw/m0J1EYw0=', 1031, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Χρησιμοποιείται για να υπάρχει πρόσβαση στο αρχικό στιγμιότυπο κάθε αρχείου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3bjdA/hQXHo=', 1033, -1, 1);
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
    var weight = DecodeNumber('sEegviFgRoA=', 1037, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sEegviFgRoA=', 1037, -1000, 1000),DecodeDecimal('dRJWQ2P0qk4=', 1037, -1000, 1000),DecodeDecimal('dRJWQ2P0qk4=', 1037, -1000, 1000));
    question.answers.length = 0;
    question.num = 94;
    question.isSingleAns = false;
    question.shortTextQuestion = "94. Σημειώστε το σωστό. Η ενέργεια «δημιουργία νέου εγγράφου από συγκεκριμένη κατάσταση» γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sEegviFgRoA=', 1039, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αφού συρθεί η συγκεκριμένη κατάσταση στο εικονίδιο δημιουργία νέου εγγράφου από την τρέχουσα κατάσταση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BAXjnFLKAqw=', 1041, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με κλικάρισμα στο εικονίδιο δημιουργία νέου εγγράφου από την τρέχουσα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JrjhnWvrdgM=', 1043, -1, 1);
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
    var weight = DecodeNumber('BxHMG0u62bw=', 1047, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BxHMG0u62bw=', 1047, -1000, 1000),DecodeDecimal('u3PSyki7W30=', 1047, -1000, 1000),DecodeDecimal('u3PSyki7W30=', 1047, -1000, 1000));
    question.answers.length = 0;
    question.num = 95;
    question.isSingleAns = false;
    question.shortTextQuestion = "95. Σημειώστε το σωστό. Η ενέργεια «διαγραφή ιστορικού»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('saBhpalwr8s=', 1049, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαγράφει όλα τα βήματα επεξεργασίας μετά το τελευταίο άνοιγμα του αρχείου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('saBhpalwr8s=', 1051, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαγράφει μόνο τις ακόλουθες ενέργειες.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5sypjQgi8y8=', 1053, -1, 1);
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
    var weight = DecodeNumber('BqlLmvdgWUw=', 1057, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BqlLmvdgWUw=', 1057, -1000, 1000),DecodeDecimal('E99hLADdslg=', 1057, -1000, 1000),DecodeDecimal('E99hLADdslg=', 1057, -1000, 1000));
    question.answers.length = 0;
    question.num = 96;
    question.isSingleAns = false;
    question.shortTextQuestion = "96. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TdhuWF4hstU=', 1059, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επαναφορά σε μία προηγούμενη κατάσταση γίνεται μέσω μενού Επεξεργασία, πατώντας βήμα πίσω.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TdhuWF4hstU=', 1061, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η επαναφορά σε μία προηγούμενη κατάσταση γίνεται μέσω μενού Επεξεργασία, πατώντας αναίρεση.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8jVhDQyyRLw=', 1063, -1, 1);
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
    var weight = DecodeNumber('YNDkZQvwE0M=', 1067, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YNDkZQvwE0M=', 1067, -1000, 1000),DecodeDecimal('rLopHZoT9M4=', 1067, -1000, 1000),DecodeDecimal('rLopHZoT9M4=', 1067, -1000, 1000));
    question.answers.length = 0;
    question.num = 97;
    question.isSingleAns = false;
    question.shortTextQuestion = "97. Σημειώστε το σωστό. Η μνήμη του προγράμματος:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pbqD5MTePB0=', 1069, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Απελευθερώνεται περισσότερη μνήμη αφού διαγραφεί το ιστορικό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pbqD5MTePB0=', 1071, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Απελευθερώνεται όλη η μνήμη αφού διαγραφεί το ιστορικό.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wTVUIR+wFyU=', 1073, -1, 1);
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
    var weight = DecodeNumber('z4gZSkhBnrA=', 1077, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('z4gZSkhBnrA=', 1077, -1000, 1000),DecodeDecimal('6/bmC1iWERA=', 1077, -1000, 1000),DecodeDecimal('6/bmC1iWERA=', 1077, -1000, 1000));
    question.answers.length = 0;
    question.num = 98;
    question.isSingleAns = false;
    question.shortTextQuestion = "98. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aBVfZyEFXKg=', 1079, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή «προτιμήσεων ιστορικού» βρίσκεται μέσα στο μενού επεξεργασίας (edit) > Προτιμήσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aBVfZyEFXKg=', 1081, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή «καταγραφή ιστορικού» βρίσκεται μέσα στο μενού αρχείο (file).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qHPhrMTrJGA=', 1083, -1, 1);
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
    var weight = DecodeNumber('dwQPrYtcqY8=', 1087, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dwQPrYtcqY8=', 1087, -1000, 1000),DecodeDecimal('S8ah+lLJRkg=', 1087, -1000, 1000),DecodeDecimal('S8ah+lLJRkg=', 1087, -1000, 1000));
    question.answers.length = 0;
    question.num = 99;
    question.isSingleAns = false;
    question.shortTextQuestion = "99. Σημειώστε το σωστό. Η θέση αποθήκευσης των μεταδεδομένων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dwQPrYtcqY8=', 1089, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχει επιλεχθεί αυτόματα από το πρόγραμμα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UIW4rbmRweA=', 1091, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορεί να οριστεί από τον χρήστη/δημιουργό.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XHOezi0om9U=', 1093, -1, 1);
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
    var weight = DecodeNumber('0cUea19ikHI=', 1097, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0cUea19ikHI=', 1097, -1000, 1000),DecodeDecimal('bFEwSEBnKvk=', 1097, -1000, 1000),DecodeDecimal('bFEwSEBnKvk=', 1097, -1000, 1000));
    question.answers.length = 0;
    question.num = 100;
    question.isSingleAns = false;
    question.shortTextQuestion = "100. Σημειώστε το σωστό. Στις «επιλογές ιστορικού»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0cUea19ikHI=', 1099, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. υπάρχει η επιλογή δημιουργία/αντικατάσταση στιγμιότυπου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U/kM5dnJ0cI=', 1101, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν υπάρχει η επιλογή αυτόματη δημιουργία νέου στιγμιότυπου όταν σώζεται.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('S/x+a5THZ7E=', 1103, -1, 1);
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
    var weight = DecodeNumber('pD9jcLZduAw=', 1107, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pD9jcLZduAw=', 1107, -1000, 1000),DecodeDecimal('SGQ9sk5bdnw=', 1107, -1000, 1000),DecodeDecimal('SGQ9sk5bdnw=', 1107, -1000, 1000));
    question.answers.length = 0;
    question.num = 101;
    question.isSingleAns = false;
    question.shortTextQuestion = "101. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pD9jcLZduAw=', 1109, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Οι ενέργειες αποθηκεύονται για μια ολόκληρη χρονική περίοδο των λειτουργιών, ενώ τα στιγμιότυπα όχι.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+2Zmo7rZcBM=', 1111, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το στιγμιότυπο μπορεί να μετονομαστεί ενώ η ενέργεια όχι.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+2Zmo7rZcBM=', 1113, -1, 1);
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
    var weight = DecodeNumber('N0uIodpsmQM=', 1117, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('N0uIodpsmQM=', 1117, -1000, 1000),DecodeDecimal('AEu6oGy5A0c=', 1117, -1000, 1000),DecodeDecimal('AEu6oGy5A0c=', 1117, -1000, 1000));
    question.answers.length = 0;
    question.num = 102;
    question.isSingleAns = false;
    question.shortTextQuestion = "102. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mG5nRWiRQ6o=', 1119, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το στιγμιότυπο μπορεί να επεξεργαστεί.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mG5nRWiRQ6o=', 1121, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το στιγμιότυπο είναι αντίγραφο και δεν μπορεί να επεξεργαστεί.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4RDcTzNp150=', 1123, -1, 1);
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
    var weight = DecodeNumber('rmLwu56rsDg=', 1127, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rmLwu56rsDg=', 1127, -1000, 1000),DecodeDecimal('tMD69Q0cdqo=', 1127, -1000, 1000),DecodeDecimal('tMD69Q0cdqo=', 1127, -1000, 1000));
    question.answers.length = 0;
    question.num = 103;
    question.isSingleAns = false;
    question.shortTextQuestion = "103. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rmLwu56rsDg=', 1129, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ο διαχειριστής προκαθορισμένων ρυθμίσεων χρησιμοποιείται για να δημιουργηθούν νέες ενέργειες.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LOuBjqapYSk=', 1131, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ο διαχειριστής προκαθορισμένων ρυθμίσεων χρησιμοποιείται για να αλλάξει ο αριθμός των ενεργειών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q6BaR8U5kjc=', 1133, -1, 1);
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
    var weight = DecodeNumber('isqsXifRMvs=', 1137, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('isqsXifRMvs=', 1137, -1000, 1000),DecodeDecimal('0IYrhMK5MmY=', 1137, -1000, 1000),DecodeDecimal('0IYrhMK5MmY=', 1137, -1000, 1000));
    question.answers.length = 0;
    question.num = 104;
    question.isSingleAns = false;
    question.shortTextQuestion = "104. Σημειώστε το σωστό. Ο διαχειριστής προκαθορισμένων ρυθμίσεων ανοίγει :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2wvlYb0G06M=', 1139, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από το μενού Επεξεργασίας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2wvlYb0G06M=', 1141, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μέσα από το μενού του πίνακα των βιβλιοθηκών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RdVjg/eVTzA=', 1143, -1, 1);
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
    var weight = DecodeNumber('IipqY91MXlE=', 1147, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IipqY91MXlE=', 1147, -1000, 1000),DecodeDecimal('vzv5ISzq/QU=', 1147, -1000, 1000),DecodeDecimal('vzv5ISzq/QU=', 1147, -1000, 1000));
    question.answers.length = 0;
    question.num = 105;
    question.isSingleAns = false;
    question.shortTextQuestion = "105. Σημειώστε το σωστό. Για να φορτωθεί μια βιβλιοθήκη στον πίνακα βιβλιοθηκών στο διαχειριστή προκαθορισμένων ρυθμίσεων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JU5Vyl84ODY=', 1149, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνετε στον πίνακα της βιβλιοθήκης.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JU5Vyl84ODY=', 1151, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνετε στο μενού της Επεξεργασίας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j8qwQkHQHwM=', 1153, -1, 1);
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
    var weight = DecodeNumber('QZVKY6sMHpM=', 1157, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QZVKY6sMHpM=', 1157, -1000, 1000),DecodeDecimal('QTVgQPxcW9s=', 1157, -1000, 1000),DecodeDecimal('QTVgQPxcW9s=', 1157, -1000, 1000));
    question.answers.length = 0;
    question.num = 106;
    question.isSingleAns = false;
    question.shortTextQuestion = "106. Σημειώστε το σωστό. Για να αλλάξει ονομασία ένα προκαθορισμένο στοιχείο μιας βιβλιοθήκης στο διαχειριστή προκαθορισμένων ρυθμίσεων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QZVKY6sMHpM=', 1159, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. απλό κλικ στο στοιχείο και αλλαγή ονόματος και ΟΚ (όχι διπλό).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J3KXYTNwsyA=', 1161, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στο στοιχείο και αλλαγή ονόματος και enter.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J3KXYTNwsyA=', 1163, -1, 1);
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
    var weight = DecodeNumber('4SQKtQNgVwk=', 1167, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4SQKtQNgVwk=', 1167, -1000, 1000),DecodeDecimal('+Gh7BwlA828=', 1167, -1000, 1000),DecodeDecimal('+Gh7BwlA828=', 1167, -1000, 1000));
    question.answers.length = 0;
    question.num = 107;
    question.isSingleAns = false;
    question.shortTextQuestion = "107. Σημειώστε το σωστό. Για να διαγραφεί ένα προκαθορισμένο στοιχείο:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OE1YEw7wMCw=', 1169, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το επιλέγουμε και κάνουμε κλικ στο εικονίδιο διαγραφής.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OE1YEw7wMCw=', 1171, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κάνουμε διπλό κλικ πάνω του.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oXeYzDmzB44=', 1173, -1, 1);
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
    var weight = DecodeNumber('n1HcpIVcrew=', 1177, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('n1HcpIVcrew=', 1177, -1000, 1000),DecodeDecimal('4izHzJoCl28=', 1177, -1000, 1000),DecodeDecimal('4izHzJoCl28=', 1177, -1000, 1000));
    question.answers.length = 0;
    question.num = 108;
    question.isSingleAns = false;
    question.shortTextQuestion = "108. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('n1HcpIVcrew=', 1179, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. Οι επεκτάσεις είναι προγράμματα διαφορετικών εκδόσεων Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('etSVKgzLKVg=', 1181, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Οι επεκτάσεις είναι προγράμματα από την Adobe Systems.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vayVKuTkG08=', 1183, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Οι επεκτάσεις είναι προγράμματα από την Mac OS.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qhDGkFB1Ilc=', 1185, -1, 1);
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
    var weight = DecodeNumber('NHamYDvvFus=', 1187, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NHamYDvvFus=', 1187, -1000, 1000),DecodeDecimal('NkUCMhRanMs=', 1187, -1000, 1000),DecodeDecimal('NkUCMhRanMs=', 1187, -1000, 1000));
    question.answers.length = 0;
    question.num = 109;
    question.isSingleAns = false;
    question.shortTextQuestion = "109. Σημειώστε το σωστό. Οι νέες επεκτάσεις που εγκαθίστανται εμφανίζονται :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NHamYDvvFus=', 1189, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο υπομενού φίλτρα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0dbbWL4qmyU=', 1191, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο υπομενού Εισαγωγή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tPpoxDs5mKY=', 1193, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στο υπομενού Εξαγωγή.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Tb/dAQqwMbM=', 1195, -1, 1);
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
    var weight = DecodeNumber('DTYo48Gjf4o=', 1197, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DTYo48Gjf4o=', 1197, -1000, 1000),DecodeDecimal('91BjfV0gDr8=', 1197, -1000, 1000),DecodeDecimal('91BjfV0gDr8=', 1197, -1000, 1000));
    question.answers.length = 0;
    question.num = 110;
    question.isSingleAns = false;
    question.shortTextQuestion = "110. Σημειώστε το σωστό. Τα προειδοποιητικά μηνύματα επαναφέρονται σε λειτουργεία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DTYo48Gjf4o=', 1199, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέγοντας «να μην εμφανιστεί ξανά».";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xK+TzOokEug=', 1201, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέγοντας Επαναφορά από το υπομενού γενικές μέσα στις προτιμήσεις.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xK+TzOokEug=', 1203, -1, 1);
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
    var weight = DecodeNumber('sPMXFGpR860=', 1207, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sPMXFGpR860=', 1207, -1000, 1000),DecodeDecimal('NeM4VA8QYGM=', 1207, -1000, 1000),DecodeDecimal('NeM4VA8QYGM=', 1207, -1000, 1000));
    question.answers.length = 0;
    question.num = 111;
    question.isSingleAns = false;
    question.shortTextQuestion = "111. Σημειώστε το σωστό. Γίνεται επαναφορά των προτιμήσεων του Photoshop στις προεπιλεγμένες ρυθμίσεις με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sPMXFGpR860=', 1209, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Kαθώς ανοίγετε το Photoshop πατήστε και καρατήστε πατημένα τα πλήκτρα Alt + Control + Shift.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DNyO+NrF9Eg=', 1211, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με πάτημα των πλήκτρων Control + Shift + Backspace.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DNyO+NrF9Eg=', 1213, -1, 1);
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
    var weight = DecodeNumber('rC2Z3zNIZiU=', 1217, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rC2Z3zNIZiU=', 1217, -1000, 1000),DecodeDecimal('C6EO3tZpKFo=', 1217, -1000, 1000),DecodeDecimal('C6EO3tZpKFo=', 1217, -1000, 1000));
    question.answers.length = 0;
    question.num = 112;
    question.isSingleAns = false;
    question.shortTextQuestion = "112. Σημειώστε το σωστό. Η «Επαναφορά» εμφάνισης πίνακα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WJIj2xm812A=', 1219, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται στο μενού πίνακα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WJIj2xm812A=', 1221, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται στο μενού Αρχείο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HVB2C2DwXWY=', 1223, -1, 1);
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
    var weight = DecodeNumber('IhW97oAE5q8=', 1227, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IhW97oAE5q8=', 1227, -1000, 1000),DecodeDecimal('FnBnGHYwiCk=', 1227, -1000, 1000),DecodeDecimal('FnBnGHYwiCk=', 1227, -1000, 1000));
    question.answers.length = 0;
    question.num = 113;
    question.isSingleAns = false;
    question.shortTextQuestion = "113. Σημειώστε το σωστό. Για να αποθηκευτεί η αναζήτηση ενός θέματος:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oLM0rHshyes=', 1229, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέξτε Custom και αναζήτηση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oLM0rHshyes=', 1231, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέξτε View on line.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iGtO8NQEXvI=', 1233, -1, 1);
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
    var weight = DecodeNumber('o+hWxAcbj5A=', 1237, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('o+hWxAcbj5A=', 1237, -1000, 1000),DecodeDecimal('Wvbc1NV/4Og=', 1237, -1000, 1000),DecodeDecimal('Wvbc1NV/4Og=', 1237, -1000, 1000));
    question.answers.length = 0;
    question.num = 114;
    question.isSingleAns = false;
    question.shortTextQuestion = "114. Σημειώστε το σωστό. Ο πίνακας Kuler είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('o+hWxAcbj5A=', 1239, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ένα πρόγραμμα λογισμικού για χρωματισμό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jKcQD9IyBGI=', 1241, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. παρέχει πρόσβαση σε ομάδες χρωμάτων ή θεμάτων που έχουν δημιουργηθεί από μια online κοινότητα σχεδιαστών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jKcQD9IyBGI=', 1243, -1, 1);
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
    var weight = DecodeNumber('v/P8J7wseT8=', 1247, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('v/P8J7wseT8=', 1247, -1000, 1000),DecodeDecimal('HZUNwMaatIk=', 1247, -1000, 1000),DecodeDecimal('HZUNwMaatIk=', 1247, -1000, 1000));
    question.answers.length = 0;
    question.num = 115;
    question.isSingleAns = false;
    question.shortTextQuestion = "115. Σημειώστε το σωστό. Όταν θέλετε πληροφορίες για τις εγκατεστημένες επεκτάσεις:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('v/P8J7wseT8=', 1249, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνετε μέσα στο μενού βοήθεια.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qrCkyL3Eyvc=', 1251, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνετε μέσα στο μενού του παραθύρου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qrCkyL3Eyvc=', 1253, -1, 1);
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
    var weight = DecodeNumber('vqzw+DSfasE=', 1257, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vqzw+DSfasE=', 1257, -1000, 1000),DecodeDecimal('OFgZUc0nbhY=', 1257, -1000, 1000),DecodeDecimal('OFgZUc0nbhY=', 1257, -1000, 1000));
    question.answers.length = 0;
    question.num = 116;
    question.isSingleAns = false;
    question.shortTextQuestion = "116. Σημειώστε το σωστό. Αν δεν μπορείτε να εκτελέσετε μία επέκταση παρόχου, ενδεχομένως:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vqzw+DSfasE=', 1259, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να χρειάζεται κωδικός για την επέκταση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ceiQ2rdSaMs=', 1261, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να χρειάζεται σειριακός αριθμός παλαιότερης έκδοσης του Photoshop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dCgeKF2Biuo=', 1263, -1, 1);
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
    var weight = DecodeNumber('5jrVeKw7ezw=', 1267, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5jrVeKw7ezw=', 1267, -1000, 1000),DecodeDecimal('CGFjZheFnoQ=', 1267, -1000, 1000),DecodeDecimal('CGFjZheFnoQ=', 1267, -1000, 1000));
    question.answers.length = 0;
    question.num = 117;
    question.isSingleAns = false;
    question.shortTextQuestion = "117. Σημειώστε το σωστό. Ο πίνακας Κuler χρησιμοποιείται για:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5jrVeKw7ezw=', 1269, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την αναζήτηση χιλιάδων θεμάτων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jVvxwUXd6eg=', 1271, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. την λήψη, επεξεργασία και ενσωμάτωση θεμάτων σε μια εικόνα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ttG0uK+EGAw=', 1273, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. για αποθήκευση και διανομή θεμάτων.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/UR8p30zzYY=', 1275, -1, 1);
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
    var weight = DecodeNumber('eEcd6zyI4AE=', 1277, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eEcd6zyI4AE=', 1277, -1000, 1000),DecodeDecimal('PHOaFKg79Gk=', 1277, -1000, 1000),DecodeDecimal('PHOaFKg79Gk=', 1277, -1000, 1000));
    question.answers.length = 0;
    question.num = 118;
    question.isSingleAns = false;
    question.shortTextQuestion = "118. Σημειώστε το σωστό: Για εισαγωγή εικόνων από φωτογραφική μηχανή για Mac OS, χρησιμοποιείται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eEcd6zyI4AE=', 1279, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. WIA";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EWlqCIzlAuA=', 1281, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Image Capture";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EWlqCIzlAuA=', 1283, -1, 1);
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
    var weight = DecodeNumber('h3nEqxjpYwk=', 1287, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h3nEqxjpYwk=', 1287, -1000, 1000),DecodeDecimal('m1o+qPdkhBc=', 1287, -1000, 1000),DecodeDecimal('m1o+qPdkhBc=', 1287, -1000, 1000));
    question.answers.length = 0;
    question.num = 119;
    question.isSingleAns = false;
    question.shortTextQuestion = "119. Σημειώστε το σωστό: Εισαγωγή εικόνας από σαρωτή με συμβατή επέκταση:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5GU1OEnsu3M=', 1289, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσω File στο import και μετά κλικ στο σαρωτή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5GU1OEnsu3M=', 1291, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μέσω Edit και μετά κλικ import";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W29xP2s9VEA=', 1293, -1, 1);
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
    var weight = DecodeNumber('wm+4vQz7Yic=', 1297, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wm+4vQz7Yic=', 1297, -1000, 1000),DecodeDecimal('i/mVsllCZZQ=', 1297, -1000, 1000),DecodeDecimal('i/mVsllCZZQ=', 1297, -1000, 1000));
    question.answers.length = 0;
    question.num = 120;
    question.isSingleAns = false;
    question.shortTextQuestion = "120. Σημειώστε το σωστό: Για να αλλάξουν οι διαστάσεις εκτύπωσης και ανάλυσης χωρίς να αλλάξει ο αριθμός εικονοστοιχείων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wm+4vQz7Yic=', 1299, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. πρέπει να ενεργοποιηθεί η εντολή «Αναδειγματοληψία εικόνας»";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Lrw39aa3mFw=', 1301, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. πρέπει να απενεργοποιηθεί η εντολή «Αναδειγματοληψία εικόνας»";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Lrw39aa3mFw=', 1303, -1, 1);
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
    var weight = DecodeNumber('x43HtHgDYuc=', 1307, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x43HtHgDYuc=', 1307, -1000, 1000),DecodeDecimal('R910RHIknF8=', 1307, -1000, 1000),DecodeDecimal('R910RHIknF8=', 1307, -1000, 1000));
    question.answers.length = 0;
    question.num = 121;
    question.isSingleAns = false;
    question.shortTextQuestion = "121. Σημειώστε το σωστό: Πως μπορούμε να δούμε στην οθόνη τις πραγματικές της διαστάσεις εκτύπωσης μιας εικόνας;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G1MCjFs4MUM=', 1309, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνοντας στο μενού Προβολή και μετά επιλογή εντολής «Μέγεθος εκτύπωσης»";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G1MCjFs4MUM=', 1311, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνοντας στο μενού Εικόνα και μετά επιλογή εντολής «Μέγεθος εκτύπωσης»";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M8elyatAsAU=', 1313, -1, 1);
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
    var weight = DecodeNumber('wlT75KXd9RU=', 1317, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wlT75KXd9RU=', 1317, -1000, 1000),DecodeDecimal('jBvAlarvFDo=', 1317, -1000, 1000),DecodeDecimal('jBvAlarvFDo=', 1317, -1000, 1000));
    question.answers.length = 0;
    question.num = 122;
    question.isSingleAns = false;
    question.shortTextQuestion = "122. Σημειώστε το σωστό: Η επιλογή «Χρώμα επέκτασης καμβά»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wlT75KXd9RU=', 1319, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρωματίζει τα κενά της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3o0pMSunC8Q=', 1321, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διατίθεται μόνο σε μια σύνθετη και πολυεπίπεδη εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SNln18FZd6c=', 1323, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διατίθεται μόνο σε μια μονοεπίπεδη εικόνα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0RE4eu+C0Fc=', 1325, -1, 1);
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
    var weight = DecodeNumber('17bt6LuPW5U=', 1327, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('17bt6LuPW5U=', 1327, -1000, 1000),DecodeDecimal('rMsiFF5DqBc=', 1327, -1000, 1000),DecodeDecimal('rMsiFF5DqBc=', 1327, -1000, 1000));
    question.answers.length = 0;
    question.num = 123;
    question.isSingleAns = false;
    question.shortTextQuestion = "123. Σημειώστε το σωστό Η επιλογή χρωματική ισορροπία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dScRXNRN/4w=', 1329, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν έχει την ευελιξία της επιλογής Curves";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dScRXNRN/4w=', 1331, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Έχει τη δυνατότητα να εστιάσει σε πολλές τονικότητες χρωμάτων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZLO5UXKmlWY=', 1333, -1, 1);
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
    var weight = DecodeNumber('rllirncPJK8=', 1337, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rllirncPJK8=', 1337, -1000, 1000),DecodeDecimal('N+RZL44ct8w=', 1337, -1000, 1000),DecodeDecimal('N+RZL44ct8w=', 1337, -1000, 1000));
    question.answers.length = 0;
    question.num = 124;
    question.isSingleAns = false;
    question.shortTextQuestion = "124. Σημειώστε το σωστό Η Επιλογή Curves βρίσκεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rllirncPJK8=', 1339, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε επίπεδο ρύθμισης (Adjustment layer)";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VbPbAaELAaY=', 1341, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Ως αυτόνομη επιλογή στο πρόγραμμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oSBM1T7A7is=', 1343, -1, 1);
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
    var weight = DecodeNumber('Z3esrxJs5mE=', 1347, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Z3esrxJs5mE=', 1347, -1000, 1000),DecodeDecimal('OVmjAPHSlkc=', 1347, -1000, 1000),DecodeDecimal('OVmjAPHSlkc=', 1347, -1000, 1000));
    question.answers.length = 0;
    question.num = 125;
    question.isSingleAns = false;
    question.shortTextQuestion = "125. Σημειώστε το σωστό Στο εργαλείο Levels  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Z3esrxJs5mE=', 1349, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. όσα χρώματα είναι ουδέτερα παραμένουν ίδια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('shj5MyxNee8=', 1351, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο το κόκκινο παραμένει το ίδιο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FkYi6bveuuU=', 1353, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μόνο το πράσινο παραμένει το ίδιο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RSlLW4t4PYI=', 1355, -1, 1);
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
    var weight = DecodeNumber('hiGLj7cDKAo=', 1357, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hiGLj7cDKAo=', 1357, -1000, 1000),DecodeDecimal('sGbt0+2jw74=', 1357, -1000, 1000),DecodeDecimal('sGbt0+2jw74=', 1357, -1000, 1000));
    question.answers.length = 0;
    question.num = 126;
    question.isSingleAns = false;
    question.shortTextQuestion = "126. Σημειώστε το σωστό Με το εργαλείο Levels:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hiGLj7cDKAo=', 1359, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επηρεάζονται τα φωτεινά χρώματα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DgxPlYQTJ2k=', 1361, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β επηρεάζονται τα σκοτεινά χρώματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Y7N9+SeagxU=', 1363, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επηρεάζονται περισσότερο τα φωτεινά και λιγότερο τα σκούρα χρώματα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y1a3gffEH3Q=', 1365, -1, 1);
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
    var weight = DecodeNumber('FH9x2xN8e4I=', 1367, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FH9x2xN8e4I=', 1367, -1000, 1000),DecodeDecimal('XpIHuf1NoHo=', 1367, -1000, 1000),DecodeDecimal('XpIHuf1NoHo=', 1367, -1000, 1000));
    question.answers.length = 0;
    question.num = 127;
    question.isSingleAns = false;
    question.shortTextQuestion = "127. Σημειώστε το σωστό Η εντολή anti-aliased :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oeS+6b4tb4Y=', 1369, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εξομαλύνει τα άκρα μιας περιοχής της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oeS+6b4tb4Y=', 1371, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σκληραίνει τα άκρα μιας περιοχής της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eB8puAID0zE=', 1373, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στρογγυλεύει τα άκρα μιας περιοχής της εικόνας";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2jCKPeWcSbY=', 1375, -1, 1);
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
    var weight = DecodeNumber('oe/11+R9yBE=', 1377, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oe/11+R9yBE=', 1377, -1000, 1000),DecodeDecimal('sibD63oB5ds=', 1377, -1000, 1000),DecodeDecimal('sibD63oB5ds=', 1377, -1000, 1000));
    question.answers.length = 0;
    question.num = 128;
    question.isSingleAns = false;
    question.shortTextQuestion = "128. Σημειώστε το σωστό Στο εργαλείο ντεγκραντέ υπάρχουν οι λειτουργίες:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oe/11+R9yBE=', 1379, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Linear, Radial";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('E4LOZRqk9LU=', 1381, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Angle.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tj8XMa5F8Sk=', 1383, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Diamond, Reflected, Linear, Radial";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/9BRb58jBaI=', 1385, -1, 1);
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
    var weight = DecodeNumber('OZt9yYqjEsU=', 1387, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OZt9yYqjEsU=', 1387, -1000, 1000),DecodeDecimal('OVhLuyKgTZU=', 1387, -1000, 1000),DecodeDecimal('OVhLuyKgTZU=', 1387, -1000, 1000));
    question.answers.length = 0;
    question.num = 129;
    question.isSingleAns = false;
    question.shortTextQuestion = "129. Σημειώστε το σωστό Το εργαλείο linear :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GR3NNSywIfU=', 1389, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργεί ντεγκραντέ κατά μήκος μιας ευθείας γραμμής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GR3NNSywIfU=', 1391, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργεί ντεγκραντέ κατά μήκος μιας τεθλασμένης γραμμής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lLIBfFfQbe8=', 1393, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δημιουργεί ντεγκραντέ σε κυκλική διάταξη";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cOum/8rtEOY=', 1395, -1, 1);
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
    var weight = DecodeNumber('rlIopRemZ90=', 1397, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rlIopRemZ90=', 1397, -1000, 1000),DecodeDecimal('JBv9w525kpk=', 1397, -1000, 1000),DecodeDecimal('JBv9w525kpk=', 1397, -1000, 1000));
    question.answers.length = 0;
    question.num = 130;
    question.isSingleAns = false;
    question.shortTextQuestion = "130. Σημειώστε το σωστό: Με τα εργαλεία σχεδιασμού:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rlIopRemZ90=', 1399, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργούμε Κουμπιά, γραμμές και στοιχεία χρήσιμα για ιστοσελίδες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6D0CNFULous=', 1401, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επεξεργαζόμαστε και βελτιώνουμε την εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tBy/qI2g8pU=', 1403, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Κάνουμε διάφορα εφέ στην εικόνα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DU8FTOmH1YA=', 1405, -1, 1);
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
    var weight = DecodeNumber('L1V02gwv4Lg=', 1407, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L1V02gwv4Lg=', 1407, -1000, 1000),DecodeDecimal('fp/IjE0RrkI=', 1407, -1000, 1000),DecodeDecimal('fp/IjE0RrkI=', 1407, -1000, 1000));
    question.answers.length = 0;
    question.num = 131;
    question.isSingleAns = false;
    question.shortTextQuestion = "131. Σημειώστε το σωστό: Για να γεμίσει μη επιλεγμένο κείμενο στο επίπεδό του, με χρώμα φόντου πατάμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L1V02gwv4Lg=', 1409, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Shift+ Alt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4HKEaZ0nWyc=', 1411, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Shift+ Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p435Ul3Jprs=', 1413, -1, 1);
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
    var weight = DecodeNumber('CX3DqWhl/XE=', 1417, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CX3DqWhl/XE=', 1417, -1000, 1000),DecodeDecimal('6k1KanZ//II=', 1417, -1000, 1000),DecodeDecimal('6k1KanZ//II=', 1417, -1000, 1000));
    question.answers.length = 0;
    question.num = 132;
    question.isSingleAns = false;
    question.shortTextQuestion = "132. Σημειώστε το σωστό: Ένα εργαλείο σχήματος ή πένας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/+cEcKBrRKA=', 1419, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέγεται πριν την εντολή Επίπεδο σχήματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/+cEcKBrRKA=', 1421, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέγεται και χρησιμοποιείται πάνω στην αρχική εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8QTbNXKoAOA=', 1423, -1, 1);
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
    var weight = DecodeNumber('kUHAuanmSwA=', 1427, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kUHAuanmSwA=', 1427, -1000, 1000),DecodeDecimal('4MPfKa3EY9M=', 1427, -1000, 1000),DecodeDecimal('4MPfKa3EY9M=', 1427, -1000, 1000));
    question.answers.length = 0;
    question.num = 133;
    question.isSingleAns = false;
    question.shortTextQuestion = "133. Σημειώστε το σωστό: Ένα διανυσματικό σχήμα αποτελείται από:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kUHAuanmSwA=', 1429, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γραμμές και καμπύλες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y1zGiLecb7I=', 1431, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κύκλους και γραμμές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HXLx0UMmbNg=', 1433, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. γραμμές και ορθογώνια";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f2Fmd0VqkJU=', 1435, -1, 1);
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
    var weight = DecodeNumber('Sl8b3gOzEDo=', 1437, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Sl8b3gOzEDo=', 1437, -1000, 1000),DecodeDecimal('ehm/HbiJKAQ=', 1437, -1000, 1000),DecodeDecimal('ehm/HbiJKAQ=', 1437, -1000, 1000));
    question.answers.length = 0;
    question.num = 134;
    question.isSingleAns = false;
    question.shortTextQuestion = "134. Σημειώστε το σωστό: Η διαδρομή που κάνει ένα οποιοδήποτε εργαλείο σχεδίασης λέγεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Sl8b3gOzEDo=', 1439, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περίγραμμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YPCkcWRCt7o=', 1441, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στύλ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a4gm4hZAYCI=', 1443, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρώμα γεμίσματος";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aEtX7xSid24=', 1445, -1, 1);
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
    var weight = DecodeNumber('YAWVS23QwKU=', 1447, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YAWVS23QwKU=', 1447, -1000, 1000),DecodeDecimal('AFA/66KphjI=', 1447, -1000, 1000),DecodeDecimal('AFA/66KphjI=', 1447, -1000, 1000));
    question.answers.length = 0;
    question.num = 135;
    question.isSingleAns = false;
    question.shortTextQuestion = "135. Σημειώστε το σωστό: Μια διαδρομή δεν μπορεί:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YAWVS23QwKU=', 1449, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να αλλάξει σχήμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ps4SIVbRFdo=', 1451, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να αλλάξει μέγεθος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mVgIrmeoc28=', 1453, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να μετατραπεί σε επιλογή";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oXpu6uRi8oE=', 1455, -1, 1);
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
    var weight = DecodeNumber('GvL7qhynZ5w=', 1457, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GvL7qhynZ5w=', 1457, -1000, 1000),DecodeDecimal('XoidPOXY81E=', 1457, -1000, 1000),DecodeDecimal('XoidPOXY81E=', 1457, -1000, 1000));
    question.answers.length = 0;
    question.num = 136;
    question.isSingleAns = false;
    question.shortTextQuestion = "136. Σημειώστε το σωστό: Μια διαδρομή όταν αποθηκεύεται είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GvL7qhynZ5w=', 1459, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαδρομή σχήματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NJDG0SNW15E=', 1461, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαδρομή χρώματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('egukJqjK4Sk=', 1463, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαδρομή αποκοπής για να γίνει διαφανές μέρος της εικόνας για επεξεργασία";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DSMaU3Vwf7s=', 1465, -1, 1);
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
    var weight = DecodeNumber('V9FD71OnWJw=', 1467, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('V9FD71OnWJw=', 1467, -1000, 1000),DecodeDecimal('ko+UMDcyhxg=', 1467, -1000, 1000),DecodeDecimal('ko+UMDcyhxg=', 1467, -1000, 1000));
    question.answers.length = 0;
    question.num = 137;
    question.isSingleAns = false;
    question.shortTextQuestion = "137. Σημειώστε το σωστό Το σχήμα τροχού γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PMvLYorq+iM=', 1469, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή του σχήματος της έλλειψης με πατημένο το Shift";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PMvLYorq+iM=', 1471, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή του σχήματος της έλλειψης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oAKqstZDRy4=', 1473, -1, 1);
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
    var weight = DecodeNumber('VCE02A8IhRs=', 1477, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VCE02A8IhRs=', 1477, -1000, 1000),DecodeDecimal('M6s9nm+Kexc=', 1477, -1000, 1000),DecodeDecimal('M6s9nm+Kexc=', 1477, -1000, 1000));
    question.answers.length = 0;
    question.num = 138;
    question.isSingleAns = false;
    question.shortTextQuestion = "138. Σημειώστε το σωστό Ένα ραστεροποιημένο σχήμα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VCE02A8IhRs=', 1479, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να υποστεί επεξεργασία ως διανυσματικό σχήμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r1g3eAU7Kvw=', 1481, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να υποστεί επεξεργασία ως διανυσματικό σχήμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r1g3eAU7Kvw=', 1483, -1, 1);
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
    var weight = DecodeNumber('Ed6Q5O9Z2lY=', 1487, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ed6Q5O9Z2lY=', 1487, -1000, 1000),DecodeDecimal('Ez0VcVwZ/fw=', 1487, -1000, 1000),DecodeDecimal('Ez0VcVwZ/fw=', 1487, -1000, 1000));
    question.answers.length = 0;
    question.num = 139;
    question.isSingleAns = false;
    question.shortTextQuestion = "139. Σημειώστε το σωστό Η εντολή αδιαφάνεια ορίζει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ed6Q5O9Z2lY=', 1489, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την διαφάνεια του σχήματος με τιμές περίπου στο 100%";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9ad7kqSck9I=', 1491, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. την αδιαφάνεια του σχήματος με τιμές περίπου στο 1%";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ciWtah8RaPg=', 1493, -1, 1);
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
    var weight = DecodeNumber('UxlRtRDm/O8=', 1497, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UxlRtRDm/O8=', 1497, -1000, 1000),DecodeDecimal('AmGbt4oq0Ng=', 1497, -1000, 1000),DecodeDecimal('AmGbt4oq0Ng=', 1497, -1000, 1000));
    question.answers.length = 0;
    question.num = 140;
    question.isSingleAns = false;
    question.shortTextQuestion = "140. Σημειώστε το σωστό Για την τροποποίηση ενός σχήματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('n8HMhnktKw4=', 1499, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κλικ στην μικρογραφία της διανυσματικής μάσκας στον πίνακα Επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('n8HMhnktKw4=', 1501, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στην μικρογραφία της διανυσματικής μάσκας στον πίνακα Διαδρομές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3p5qHZqANkY=', 1503, -1, 1);
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
    var weight = DecodeNumber('BrwpVL+qNuw=', 1507, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BrwpVL+qNuw=', 1507, -1000, 1000),DecodeDecimal('hPFXy3KqnfY=', 1507, -1000, 1000),DecodeDecimal('hPFXy3KqnfY=', 1507, -1000, 1000));
    question.answers.length = 0;
    question.num = 141;
    question.isSingleAns = false;
    question.shortTextQuestion = "141. Σημειώστε το σωστό Η πρόσβαση στις επιλογές εργαλείου σχημάτων γίνεται με  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BrwpVL+qNuw=', 1509, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κλικ στην μικρογραφία του επιπέδου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QNpOc3skJ8o=', 1511, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στο ανεστραμμένο βέλος δίπλα στο κουμπί σχήματος στη γραμμή επιλογών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QNpOc3skJ8o=', 1513, -1, 1);
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
    var weight = DecodeNumber('sy9LatxPVJI=', 1517, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sy9LatxPVJI=', 1517, -1000, 1000),DecodeDecimal('aGVdldnEYuw=', 1517, -1000, 1000),DecodeDecimal('aGVdldnEYuw=', 1517, -1000, 1000));
    question.answers.length = 0;
    question.num = 142;
    question.isSingleAns = false;
    question.shortTextQuestion = "142. Σημειώστε το σωστό Η επιλογή Προσκόλληση στα pixel στις επιλογές εργαλείου ορθογωνίου ή στρογγυλεμένου ορθογωνίου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sy9LatxPVJI=', 1519, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσκολλά το σχήμα στα εικονοστοιχεία της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GOn2ec51rm0=', 1521, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσκολλά τα διάφανα μέρη της εικόνας στα σχήματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cOz/Dzi6HZ4=', 1523, -1, 1);
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
    var weight = DecodeNumber('6xeBSBiiQmo=', 1527, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6xeBSBiiQmo=', 1527, -1000, 1000),DecodeDecimal('/9kyyq6s16M=', 1527, -1000, 1000),DecodeDecimal('/9kyyq6s16M=', 1527, -1000, 1000));
    question.answers.length = 0;
    question.num = 143;
    question.isSingleAns = false;
    question.shortTextQuestion = "143. Σημειώστε το σωστό Το εργαλείο της πένας στη γραμμή επιλογών παρέχει τις εξής λειτουργίες:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6xeBSBiiQmo=', 1529, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αυτόματη προσθήκη κόμβου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KgBhBjAAYmc=', 1531, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αυτόματη διαγραφή κόμβου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('78zUyJDlEvk=', 1533, -1, 1);
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
    var weight = DecodeNumber('Hc9okptuIxU=', 1537, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Hc9okptuIxU=', 1537, -1000, 1000),DecodeDecimal('H9nrplQ+Gd0=', 1537, -1000, 1000),DecodeDecimal('H9nrplQ+Gd0=', 1537, -1000, 1000));
    question.answers.length = 0;
    question.num = 144;
    question.isSingleAns = false;
    question.shortTextQuestion = "144. Σημειώστε το σωστό Η επιλογή ελαστική γραμμή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Hc9okptuIxU=', 1539, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. παρέχει την ευελιξία τροποποίησης της γραμμής που δημιουργείται";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BhGKJimMSrs=', 1541, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διευκολύνει τη δημιουργία πολύπλοκου σχήματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zb6Pgqf2ouM=', 1543, -1, 1);
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
    var weight = DecodeNumber('aCE2Vx7gwI0=', 1547, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aCE2Vx7gwI0=', 1547, -1000, 1000),DecodeDecimal('th+BFSHTetg=', 1547, -1000, 1000),DecodeDecimal('th+BFSHTetg=', 1547, -1000, 1000));
    question.answers.length = 0;
    question.num = 145;
    question.isSingleAns = false;
    question.shortTextQuestion = "145. Σημειώστε το σωστό Μια διαδρομή για να παραμείνει ανοικτή πρέπει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aCE2Vx7gwI0=', 1549, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να πατηθεί Control+ κλικ μακριά από όλα τα αντικείμενα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WpMpP/Bm3xk=', 1551, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να επιλεχθεί μία διαφορετική διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('brrbf5pnZwU=', 1553, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να επιλεχθεί ένα διαφορετικό εργαλείο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RXq0SCMipNM=', 1555, -1, 1);
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
    var weight = DecodeNumber('ot+J/6sX9zA=', 1557, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ot+J/6sX9zA=', 1557, -1000, 1000),DecodeDecimal('Lxadv+4STCo=', 1557, -1000, 1000),DecodeDecimal('Lxadv+4STCo=', 1557, -1000, 1000));
    question.answers.length = 0;
    question.num = 146;
    question.isSingleAns = false;
    question.shortTextQuestion = "146. Σημειώστε το σωστό Μία καμπύλη γραμμή με πολλούς κόμβους:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ot+J/6sX9zA=', 1559, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επεξεργάζεται ευκολότερα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ig9xoxGF9aU=', 1561, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι περισσότερο ευέλικτη στις αλλαγές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1y69rhft7hc=', 1563, -1, 1);
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
    var weight = DecodeNumber('Vo4AmYf1ZLw=', 1567, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Vo4AmYf1ZLw=', 1567, -1000, 1000),DecodeDecimal('WueqMg1UUAE=', 1567, -1000, 1000),DecodeDecimal('WueqMg1UUAE=', 1567, -1000, 1000));
    question.answers.length = 0;
    question.num = 147;
    question.isSingleAns = false;
    question.shortTextQuestion = "147. Σημειώστε το σωστό Για την μετάβαση από ευθεία σε καμπύλη γραμμή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i3IxjLJ5yrA=', 1569, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. τοποθετείται το εργαλείο πένας στο επόμενο σημείο και στη συνέχεια κάνετε κλικ συνεχόμενο και τραβάτε προς μία κατεύθυνση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i3IxjLJ5yrA=', 1571, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται διπλό κλικ στο τελικό σημείο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('770mlzv9dGo=', 1573, -1, 1);
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
    var weight = DecodeNumber('d+Df5rUJtG4=', 1577, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('d+Df5rUJtG4=', 1577, -1000, 1000),DecodeDecimal('s0ASnr3uM6M=', 1577, -1000, 1000),DecodeDecimal('s0ASnr3uM6M=', 1577, -1000, 1000));
    question.answers.length = 0;
    question.num = 148;
    question.isSingleAns = false;
    question.shortTextQuestion = "148. Σημειώστε το σωστό Ο έλεγχος της ευαισθησίας της τελικής διαδρομής στην κίνηση του ποντικιού ή της γραφίδας στο εργαλείο πένας ελεύθερης σχεδίασης γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('d+Df5rUJtG4=', 1579, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. με επιλογή εργαλείου πένας ελεύθερης σχεδίασης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zt5KlVEykmQ=', 1581, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με κλικ στο αντεστραμμένο βέλος δίπλα στα κουμπιά σχήματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zt5KlVEykmQ=', 1583, -1, 1);
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
    var weight = DecodeNumber('oh9FgjU+ihw=', 1587, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oh9FgjU+ihw=', 1587, -1000, 1000),DecodeDecimal('Ghc2n2UccVc=', 1587, -1000, 1000),DecodeDecimal('Ghc2n2UccVc=', 1587, -1000, 1000));
    question.answers.length = 0;
    question.num = 149;
    question.isSingleAns = false;
    question.shortTextQuestion = "149. Σημειώστε το σωστό Για να κλείσουμε μια διαδρομή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oh9FgjU+ihw=', 1589, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κάνουμε διπλό κλικ στο τέλος της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H0alKUVx25g=', 1591, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε τη γραμμή στο αρχικό σημείο της";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H0alKUVx25g=', 1593, -1, 1);
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
    var weight = DecodeNumber('RurV6MSuD8Q=', 1597, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RurV6MSuD8Q=', 1597, -1000, 1000),DecodeDecimal('A/mxYGFcqw0=', 1597, -1000, 1000),DecodeDecimal('A/mxYGFcqw0=', 1597, -1000, 1000));
    question.answers.length = 0;
    question.num = 150;
    question.isSingleAns = false;
    question.shortTextQuestion = "150. Σημειώστε το σωστό Το εργαλείο μαγνητικής πένας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4Bk56B107a8=', 1599, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχει ορισμένες ίδιες επιλογές με το μαγνητικό λάσο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4Bk56B107a8=', 1601, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει διαφορετικές επιλογές από τις επιλογές με το μαγνητικό λάσο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n0fg5ngWzTE=', 1603, -1, 1);
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
    var weight = DecodeNumber('pSuYb4k3X0Y=', 1607, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pSuYb4k3X0Y=', 1607, -1000, 1000),DecodeDecimal('/x5S6+9uj40=', 1607, -1000, 1000),DecodeDecimal('/x5S6+9uj40=', 1607, -1000, 1000));
    question.answers.length = 0;
    question.num = 151;
    question.isSingleAns = false;
    question.shortTextQuestion = "151. Σημειώστε το σωστό Η επιλογή «Συχνότητα» :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pSuYb4k3X0Y=', 1609, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καθορίζει τη συχνότητα με την οποία η μαγνητική πένα εφαρμόζει τις επιλογές της";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jkUhSpXR4oE=', 1611, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθορίζει τη συχνότητα αυτόματης εισαγωγής κόμβων στη διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jkUhSpXR4oE=', 1613, -1, 1);
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
    var weight = DecodeNumber('WJ2MRXg/tDw=', 1617, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WJ2MRXg/tDw=', 1617, -1000, 1000),DecodeDecimal('Jl+rldeJfGI=', 1617, -1000, 1000),DecodeDecimal('Jl+rldeJfGI=', 1617, -1000, 1000));
    question.answers.length = 0;
    question.num = 152;
    question.isSingleAns = false;
    question.shortTextQuestion = "152. Σημειώστε το σωστό Για να εμφανιστεί μια διαδρομή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aJ19UZuDq+0=', 1619, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλέγεται ο πίνακας διαδρομές και μετά κλικ στο όνομα της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aJ19UZuDq+0=', 1621, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. απενεργοποιούνται όλες οι μικρογραφίες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hdhrFoR9hdA=', 1623, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AGYHX59wRXA=', 1625, -1, 1);
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
    var weight = DecodeNumber('HghATAmombQ=', 1627, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HghATAmombQ=', 1627, -1000, 1000),DecodeDecimal('a5n3Gvm7lcE=', 1627, -1000, 1000),DecodeDecimal('a5n3Gvm7lcE=', 1627, -1000, 1000));
    question.answers.length = 0;
    question.num = 153;
    question.isSingleAns = false;
    question.shortTextQuestion = "153. Σημειώστε το σωστό Για να αλλάξει το μέγεθος των μικρογραφιών διαδρομής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/vYkbFPsrxU=', 1629, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από τον πίνακα διαδρομές επιλέγεται η εντολή Επιλογές και μετά μέγεθος ή χωρίς";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/vYkbFPsrxU=', 1631, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεξί κλικ στον πίνακα διαδρομές για να αναδυθεί η εντολή μέγεθος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pIdwhE+bf44=', 1633, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Flb9JOav5sw=', 1635, -1, 1);
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
    var weight = DecodeNumber('jwfrKyNpFUo=', 1637, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jwfrKyNpFUo=', 1637, -1000, 1000),DecodeDecimal('3OPWoW763jk=', 1637, -1000, 1000),DecodeDecimal('3OPWoW763jk=', 1637, -1000, 1000));
    question.answers.length = 0;
    question.num = 154;
    question.isSingleAns = false;
    question.shortTextQuestion = "154. Σημειώστε το σωστό Η σειρά των διαδρομών εργασίας στον πίνακα διαδρομές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jwfrKyNpFUo=', 1639, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αλλάζει με σύρσιμο της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DMAd1Y6B2vg=', 1641, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλάζει με Control + C και μετά με control +V";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NV+fDxUKPtE=', 1643, -1, 1);
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
    var weight = DecodeNumber('x0NaR3dlzx4=', 1647, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x0NaR3dlzx4=', 1647, -1000, 1000),DecodeDecimal('MRbEGRHVFnY=', 1647, -1000, 1000),DecodeDecimal('MRbEGRHVFnY=', 1647, -1000, 1000));
    question.answers.length = 0;
    question.num = 155;
    question.isSingleAns = false;
    question.shortTextQuestion = "155. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x0NaR3dlzx4=', 1649, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργείται μία νέα διαδρομή με κλικ στο αντίστοιχο εικονίδιο στον πίνακα Διαδρομές/paths";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Pb/aZbC+PSQ=', 1651, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δημιουργείται μια νέα διαδρομή με επιλογή μιας διαδρομής εργασίας και δεξί κλικ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ssU1KCpQhmg=', 1653, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Δημιουργείται μια νέα διαδρομή με alt + κλικ και απόδοση ονόματος διαδρομής";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HyHzsR9emdQ=', 1655, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Είτε το Α είτε το Γ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('HyHzsR9emdQ=', 1657, -1, 1);
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
    var weight = DecodeNumber('YXAYQhfaNlU=', 1657, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YXAYQhfaNlU=', 1657, -1000, 1000),DecodeDecimal('PalmLukNcvE=', 1657, -1000, 1000),DecodeDecimal('PalmLukNcvE=', 1657, -1000, 1000));
    question.answers.length = 0;
    question.num = 156;
    question.isSingleAns = false;
    question.shortTextQuestion = "156. Σημειώστε το σωστό Οι αποθηκευμένες διαδρομές εμφανίζονται στα Windows και Mac με μορφή αρχείων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YXAYQhfaNlU=', 1659, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l6EqW1sCHIs=', 1661, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. JPEG2000";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2THcKbKsVvI=', 1663, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. PDF";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LqO04iSIBGw=', 1665, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. TIFF";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('6DS7U5qf7vI=', 1667, -1, 1);
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
    var weight = DecodeNumber('6DS7U5qf7vI=', 1667, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6DS7U5qf7vI=', 1667, -1000, 1000),DecodeDecimal('kJTlygS+6/A=', 1667, -1000, 1000),DecodeDecimal('kJTlygS+6/A=', 1667, -1000, 1000));
    question.answers.length = 0;
    question.num = 157;
    question.isSingleAns = false;
    question.shortTextQuestion = "157. Σημειώστε το σωστό: Για να γίνει επιλογή μια διαδρομή:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rwk6m4YDVmA=', 1669, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή συγκεκριμένης διαδρομής και κλικ στο φόρτωση διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rwk6m4YDVmA=', 1671, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή συγκεκριμένης διαδρομής και διπλό κλικ στη διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tBfopMgaxqU=', 1673, -1, 1);
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
    var weight = DecodeNumber('xZO4nowSxuY=', 1677, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xZO4nowSxuY=', 1677, -1000, 1000),DecodeDecimal('VHhSIUV334g=', 1677, -1000, 1000),DecodeDecimal('VHhSIUV334g=', 1677, -1000, 1000));
    question.answers.length = 0;
    question.num = 158;
    question.isSingleAns = false;
    question.shortTextQuestion = "158. Σημειώστε το σωστό: Η εντολή ομαλοποίηση (feathering) κάνει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Qrp1eGutj7A=', 1679, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ομαλότερη τη μετάβαση από τα επιλεγμένα εικονοστοιχεία στα εικονοστοιχεία της γύρω περιοχής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Qrp1eGutj7A=', 1681, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ομαλότερη την μετάβαση των εικονοστοιχείων των αντικειμένων με το φόντο μιας εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8WH6mZ7dfoY=', 1683, -1, 1);
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
    var weight = DecodeNumber('h/8ts3GXHZY=', 1687, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h/8ts3GXHZY=', 1687, -1000, 1000),DecodeDecimal('4Gbq8VBziII=', 1687, -1000, 1000),DecodeDecimal('4Gbq8VBziII=', 1687, -1000, 1000));
    question.answers.length = 0;
    question.num = 159;
    question.isSingleAns = false;
    question.shortTextQuestion = "159. Σημειώστε το σωστό: Η εντολή Διατήρηση διαφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qf5izsf9goY=', 1689, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περιορίζει το γέμισμα μόνο στις περιοχές του επιπέδου που περιλαμβάνουν pixel";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qf5izsf9goY=', 1691, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διατηρεί τη διαφάνεια σε όλα τα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hNZp/qzotKc=', 1693, -1, 1);
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
    var weight = DecodeNumber('VpMKqcNip1Q=', 2055, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VpMKqcNip1Q=', 2055, -1000, 1000),DecodeDecimal('53c2z42ApzA=', 2055, -1000, 1000),DecodeDecimal('53c2z42ApzA=', 2055, -1000, 1000));
    question.answers.length = 0;
    question.num = 160;
    question.isSingleAns = false;
    question.shortTextQuestion = "160. Σημειώστε το σωστό Το γέμισμα διαδρομής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VpMKqcNip1Q=', 2057, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από το μενού του πίνακα διαδρομές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nmWYXO5AdLg=', 2059, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με πατημένο Alt και κλικ στο εικονίδιο στο κάτω μέρος του πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nmWYXO5AdLg=', 2061, -1, 1);
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
    var weight = DecodeNumber('8r9WHLkMHBM=', 2065, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8r9WHLkMHBM=', 2065, -1000, 1000),DecodeDecimal('LtW4UiaprzM=', 2065, -1000, 1000),DecodeDecimal('LtW4UiaprzM=', 2065, -1000, 1000));
    question.answers.length = 0;
    question.num = 161;
    question.isSingleAns = false;
    question.shortTextQuestion = "161. Σημειώστε το σωστό Διαγραφή τμήματος διαδρομής με :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8r9WHLkMHBM=', 2067, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή εργαλείου επιλογής και μετά επιλογή τμήματος για διαγραφή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('n0HlfoIXlLM=', 2069, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή τμήματος της διαδρομής και μετά πάτημα Backspace ή Delete";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bXHXAIvrAz4=', 2071, -1, 1);
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
    var weight = DecodeNumber('wWvJvH/S4Yc=', 2075, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wWvJvH/S4Yc=', 2075, -1000, 1000),DecodeDecimal('1hqXsZFVz+o=', 2075, -1000, 1000),DecodeDecimal('1hqXsZFVz+o=', 2075, -1000, 1000));
    question.answers.length = 0;
    question.num = 162;
    question.isSingleAns = false;
    question.shortTextQuestion = "162. Σημειώστε το σωστό Η συλλογή φίλτρων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dafkkd8MgNE=', 2077, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εμφανίζεται μέσα από την επιλογή φίλτρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dafkkd8MgNE=', 2079, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εμφανίζεται μέσα από το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PCYB1mpS0dM=', 2081, -1, 1);
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
    var weight = DecodeNumber('CuOLHWiCsJY=', 2085, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CuOLHWiCsJY=', 2085, -1000, 1000),DecodeDecimal('oHd2Ua1Xr3I=', 2085, -1000, 1000),DecodeDecimal('oHd2Ua1Xr3I=', 2085, -1000, 1000));
    question.answers.length = 0;
    question.num = 163;
    question.isSingleAns = false;
    question.shortTextQuestion = "163. Σημειώστε το σωστό Στην επισκόπηση συλλογής φίλτρων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CuOLHWiCsJY=', 2087, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορούν να εφαρμοστούν πολλά φίλτρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YJDh3mJwJfs=', 2089, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορούν να ενεργοποιηθούν/απενεργοποιηθούν τα αποτελέσματα ενός φίλτρου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XinCvQcM8hE=', 2091, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να αλλάξει η σειρά εφαρμογής φίλτρων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VW7qa/9fjfg=', 2093, -1, 1);
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
    var weight = DecodeNumber('LGLkNh5UGbM=', 2095, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LGLkNh5UGbM=', 2095, -1000, 1000),DecodeDecimal('mvXU3T9jVf4=', 2095, -1000, 1000),DecodeDecimal('mvXU3T9jVf4=', 2095, -1000, 1000));
    question.answers.length = 0;
    question.num = 164;
    question.isSingleAns = false;
    question.shortTextQuestion = "164. Σημειώστε το σωστό Για την εφαρμογή φίλτρων σε μεγάλες εικόνες  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H+YmI5ABCsI=', 2097, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καθυστερεί η εφαρμογή φίλτρων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H+YmI5ABCsI=', 2099, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν γίνεται προεπισκόπηση αποτελεσμάτων ενός φίλτρου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iFB9m+R1zNk=', 2101, -1, 1);
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
    var weight = DecodeNumber('Y0ua6D9bxAE=', 2105, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Y0ua6D9bxAE=', 2105, -1000, 1000),DecodeDecimal('ySZaQXsxOGs=', 2105, -1000, 1000),DecodeDecimal('ySZaQXsxOGs=', 2105, -1000, 1000));
    question.answers.length = 0;
    question.num = 165;
    question.isSingleAns = false;
    question.shortTextQuestion = "165. Σημειώστε το σωστό Η εφαρμογή φίλτρου υλοποιείται με  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('y5mAmez01QA=', 2107, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή επιπέδου πρώτα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('y5mAmez01QA=', 2109, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποίηση εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Di6QodgnnFo=', 2111, -1, 1);
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
    var weight = DecodeNumber('8ZNjyxDfvrQ=', 2115, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8ZNjyxDfvrQ=', 2115, -1000, 1000),DecodeDecimal('kadrMNq9WG4=', 2115, -1000, 1000),DecodeDecimal('kadrMNq9WG4=', 2115, -1000, 1000));
    question.answers.length = 0;
    question.num = 166;
    question.isSingleAns = false;
    question.shortTextQuestion = "166. Σημειώστε το σωστό Ένα φίλτρο εφαρμόζεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sm4oHzux9yA=', 2117, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε μεμονωμένα επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sm4oHzux9yA=', 2119, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε πολλά επίπεδα μαζί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IJC4j2MrGB8=', 2121, -1, 1);
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
    var weight = DecodeNumber('XOhO2tpakVQ=', 2125, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XOhO2tpakVQ=', 2125, -1000, 1000),DecodeDecimal('cXjzIooufVY=', 2125, -1000, 1000),DecodeDecimal('cXjzIooufVY=', 2125, -1000, 1000));
    question.answers.length = 0;
    question.num = 167;
    question.isSingleAns = false;
    question.shortTextQuestion = "167. Σημειώστε το σωστό Με τη χρήση μασκών :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XOhO2tpakVQ=', 2127, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δίνεται μεγαλύτερη ελευθερία όσον αφορά στην σχεδίαση σχημάτων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7qKrHtOitlo=', 2129, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ελέγχεται περισσότερο η μετάβαση από το ένα εφέ στο άλλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tgtnIBIcqq4=', 2131, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. η εικόνα αλλάζει και δεν μπορεί να υποστεί μεταβολές";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cA2bRVLhras=', 2133, -1, 1);
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
    var weight = DecodeNumber('yHlLWI5VTcU=', 2135, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yHlLWI5VTcU=', 2135, -1000, 1000),DecodeDecimal('KY8Vhe+bKII=', 2135, -1000, 1000),DecodeDecimal('KY8Vhe+bKII=', 2135, -1000, 1000));
    question.answers.length = 0;
    question.num = 168;
    question.isSingleAns = false;
    question.shortTextQuestion = "168. Σημειώστε το σωστό Ένα φίλτρο μπορεί να εφαρμοστεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yHlLWI5VTcU=', 2137, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε πολλά επίπεδα κάθε φορά";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('S8YmSNKfOz4=', 2139, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε μεμονωμένα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BIt2c+GhOj0=', 2141, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε ξεχωριστό κανάλι χρώματος";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Z0NJpyhb+ko=', 2143, -1, 1);
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
    var weight = DecodeNumber('tCPXb1dtZ4k=', 2145, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tCPXb1dtZ4k=', 2145, -1000, 1000),DecodeDecimal('x3hpI0CB7HQ=', 2145, -1000, 1000),DecodeDecimal('x3hpI0CB7HQ=', 2145, -1000, 1000));
    question.answers.length = 0;
    question.num = 169;
    question.isSingleAns = false;
    question.shortTextQuestion = "169. Σημειώστε το σωστό Το εφέ άκρου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tCPXb1dtZ4k=', 2147, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Είναι ένα από τα ειδικά εφέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9vIvIvRsHBI=', 2149, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Είναι μια τεχνική που εφαρμόζεται στα άκρα μιας εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RZvC/Mbh/FE=', 2151, -1, 1);
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
    var weight = DecodeNumber('lXzLkTkQ0qg=', 2155, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lXzLkTkQ0qg=', 2155, -1000, 1000),DecodeDecimal('G0XG0wvR0dw=', 2155, -1000, 1000),DecodeDecimal('G0XG0wvR0dw=', 2155, -1000, 1000));
    question.answers.length = 0;
    question.num = 170;
    question.isSingleAns = false;
    question.shortTextQuestion = "170. Σημειώστε το σωστό Σε μια εικόνα Lab:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/bfZjrsfKrQ=', 2157, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δεν μπορούν να εφαρμοστούν οι λειτουργίες ανάμειξης της επιλογής εξασθένισης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/bfZjrsfKrQ=', 2159, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μπορούν να εφαρμοστούν οι λειτουργίες χρωματισμού και φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('09ZJKs9K8tM=', 2161, -1, 1);
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
    var weight = DecodeNumber('KhU9PDK8iwA=', 2165, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KhU9PDK8iwA=', 2165, -1000, 1000),DecodeDecimal('RjoAuwZPdo8=', 2165, -1000, 1000),DecodeDecimal('RjoAuwZPdo8=', 2165, -1000, 1000));
    question.answers.length = 0;
    question.num = 171;
    question.isSingleAns = false;
    question.shortTextQuestion = "171. Σημειώστε το σωστό Η εντολή εξασθένιση βρίσκεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KhU9PDK8iwA=', 2167, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο μενού της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4CNmPKzkFhg=', 2169, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο μενού της επεξεργασίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4CNmPKzkFhg=', 2171, -1, 1);
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
    var weight = DecodeNumber('xkkRrl+JFZ8=', 2175, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xkkRrl+JFZ8=', 2175, -1000, 1000),DecodeDecimal('VF/RjSt10sY=', 2175, -1000, 1000),DecodeDecimal('VF/RjSt10sY=', 2175, -1000, 1000));
    question.answers.length = 0;
    question.num = 172;
    question.isSingleAns = false;
    question.shortTextQuestion = "172. Σημειώστε το σωστό Μερικά από τα καλλιτεχνικά εφέ είναι :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fzKjBR77I1o=', 2177, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έγχρωμο μολύβι-cutout-περγαμηνή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fzKjBR77I1o=', 2179, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κοκκώδες φιλμ - διαδρομές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('b8yxSC5AZcQ=', 2181, -1, 1);
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
    var weight = DecodeNumber('4MoadajRytU=', 2185, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4MoadajRytU=', 2185, -1000, 1000),DecodeDecimal('WVoOyJFgwWU=', 2185, -1000, 1000),DecodeDecimal('WVoOyJFgwWU=', 2185, -1000, 1000));
    question.answers.length = 0;
    question.num = 173;
    question.isSingleAns = false;
    question.shortTextQuestion = "173. Σημειώστε το σωστό Το φίλτρο θολώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WNxjSNw4N5g=', 2187, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι κατάλληλο για ρετους και εφέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WNxjSNw4N5g=', 2189, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εφαρμόζεται όταν η εντολή κλείδωμα διαφανών εικονοστοιχείων είναι ενεργοποιημένη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eimN7z29jaI=', 2191, -1, 1);
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
    var weight = DecodeNumber('lINqhV4hW5Q=', 2195, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lINqhV4hW5Q=', 2195, -1000, 1000),DecodeDecimal('Od0JBJyPhbg=', 2195, -1000, 1000),DecodeDecimal('Od0JBJyPhbg=', 2195, -1000, 1000));
    question.answers.length = 0;
    question.num = 174;
    question.isSingleAns = false;
    question.shortTextQuestion = "174. Σημειώστε το σωστό Θόλωμα επιφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lINqhV4hW5Q=', 2197, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. θολώνει τα άκρα μιας εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uA4zZPapZkg=', 2199, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. θολώνει μια εικόνα διατηρώντας τα άκρα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uA4zZPapZkg=', 2201, -1, 1);
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
    var weight = DecodeNumber('h8ZuGy2dwnw=', 2205, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h8ZuGy2dwnw=', 2205, -1000, 1000),DecodeDecimal('6W/YdJ/Cqpg=', 2205, -1000, 1000),DecodeDecimal('6W/YdJ/Cqpg=', 2205, -1000, 1000));
    question.answers.length = 0;
    question.num = 175;
    question.isSingleAns = false;
    question.shortTextQuestion = "175. Σημειώστε το σωστό Η πινελιά Sumi-e  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h8ZuGy2dwnw=', 2207, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργεί θολή εικόνα και διατηρεί τα άκρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+UXW2X2vDvk=', 2209, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δημιουργεί θολά άκρα με πλούσιο μαύρο μελάνι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+UXW2X2vDvk=', 2211, -1, 1);
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
    var weight = DecodeNumber('fpp7e1rtAUE=', 2215, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fpp7e1rtAUE=', 2215, -1000, 1000),DecodeDecimal('cc0LOWn7R4U=', 2215, -1000, 1000),DecodeDecimal('cc0LOWn7R4U=', 2215, -1000, 1000));
    question.answers.length = 0;
    question.num = 176;
    question.isSingleAns = false;
    question.shortTextQuestion = "176. Σημειώστε το σωστό Το εφέ zigzag  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tF6dCCcPa4A=', 2217, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. παραμορφώνει βαθμιαία μια επιλογή, ανάλογα με την ακτίνα των pixel στην επιλογή σας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tF6dCCcPa4A=', 2219, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. θολώνει μια περιοχή σε σχήμα zigzag";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7H1+T9ir5QE=', 2221, -1, 1);
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
    var weight = DecodeNumber('VHPmQDDJ1+Y=', 2225, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VHPmQDDJ1+Y=', 2225, -1000, 1000),DecodeDecimal('NcDSJVF4uh8=', 2225, -1000, 1000),DecodeDecimal('NcDSJVF4uh8=', 2225, -1000, 1000));
    question.answers.length = 0;
    question.num = 177;
    question.isSingleAns = false;
    question.shortTextQuestion = "177. Σημειώστε το σωστό Τα φίλτρα κουκκιδοποίησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VHPmQDDJ1+Y=', 2227, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσθέτουν κουκκίδες στην εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IV3EzBCMP3I=', 2229, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αφαιρούν κουκκίδες από την εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5qSJxVTFlqo=', 2231, -1, 1);
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
    var weight = DecodeNumber('rg+l74x3jdU=', 2235, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rg+l74x3jdU=', 2235, -1000, 1000),DecodeDecimal('1Ysu8/6jXcg=', 2235, -1000, 1000),DecodeDecimal('1Ysu8/6jXcg=', 2235, -1000, 1000));
    question.answers.length = 0;
    question.num = 178;
    question.isSingleAns = false;
    question.shortTextQuestion = "178. Σημειώστε το σωστό Το φίλτρο απόχρωση Μezzo  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h/B8xX70Ag4=', 2237, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετατρέπει μια εικόνα σε τυχαίο μοτίβο ασπρόμαυρων περιοχών ή πλήρως κορεσμένων χρωμάτωνσε μια έγχρωμη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h/B8xX70Ag4=', 2239, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετατρέπει την εικόνα σε απόχρωση του μπλέ καναλιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eyZTuKp2Gso=', 2241, -1, 1);
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
    var weight = DecodeNumber('CLldm4Kg0Cg=', 2245, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CLldm4Kg0Cg=', 2245, -1000, 1000),DecodeDecimal('uc63NyOMTes=', 2245, -1000, 1000),DecodeDecimal('uc63NyOMTes=', 2245, -1000, 1000));
    question.answers.length = 0;
    question.num = 179;
    question.isSingleAns = false;
    question.shortTextQuestion = "179. Σημειώστε το σωστό Η έξυπνη όξυνση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('C+c/dZXFGZM=', 2247, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιτρέπει τον έλεγχο της ποσότητας όξυνσης που υπάρχει στους ανοικτούς τόνους και στις σκιές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C+c/dZXFGZM=', 2249, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιτρέπει τον έλεγχο της ποσότητας όξυνσης που υπάρχει στους ανοικτούς τόνους";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9V1e2us0PmY=', 2251, -1, 1);
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
    var weight = DecodeNumber('e8xycWZdDNc=', 2255, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('e8xycWZdDNc=', 2255, -1000, 1000),DecodeDecimal('Htl+r3u1Bxg=', 2255, -1000, 1000),DecodeDecimal('Htl+r3u1Bxg=', 2255, -1000, 1000));
    question.answers.length = 0;
    question.num = 180;
    question.isSingleAns = false;
    question.shortTextQuestion = "180. Σημειώστε το σωστό Το χαρτί με υδάτινες γραμμές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jsIfrdeskNw=', 2257, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιτρέπει στα χρώματα να κυλίσουν και να αναμιχθούν σαν να έχουν ζωγραφιστεί σε ινώδες βρεγμένο χαρτί";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jsIfrdeskNw=', 2259, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Τα χρώματα έχουν απόχρωση στους τόνους του μπλέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kM2qk5ZDsgA=', 2261, -1, 1);
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
    var weight = DecodeNumber('U9Q67fIJbYU=', 2265, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('U9Q67fIJbYU=', 2265, -1000, 1000),DecodeDecimal('AHsNraG8vPo=', 2265, -1000, 1000),DecodeDecimal('AHsNraG8vPo=', 2265, -1000, 1000));
    question.answers.length = 0;
    question.num = 181;
    question.isSingleAns = false;
    question.shortTextQuestion = "181. Σημειώστε το σωστό Το φίλτρο της σφραγίδας χρησιμοποιείται καλύτερα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U9Q67fIJbYU=', 2267, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε έγχρωμη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KTToJieUfeU=', 2269, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε ασπρόμαυρη εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KTToJieUfeU=', 2271, -1, 1);
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
    var weight = DecodeNumber('dtam5xEfmws=', 2275, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dtam5xEfmws=', 2275, -1000, 1000),DecodeDecimal('OAVRZ8uhAT0=', 2275, -1000, 1000),DecodeDecimal('OAVRZ8uhAT0=', 2275, -1000, 1000));
    question.answers.length = 0;
    question.num = 182;
    question.isSingleAns = false;
    question.shortTextQuestion = "182. Σημειώστε το σωστό Μερικά από τα φίλτρα υφής είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8BHxvPp/R2k=', 2277, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Craquelure-κόκκος-μωσαϊκό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8BHxvPp/R2k=', 2279, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ’νεμος-ιχνογράφηση-patchwork";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3GYqCh8bXL8=', 2281, -1, 1);
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
    var weight = DecodeNumber('gHIwgcGamVk=', 2285, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gHIwgcGamVk=', 2285, -1000, 1000),DecodeDecimal('3XWu/4P/Q6Q=', 2285, -1000, 1000),DecodeDecimal('3XWu/4P/Q6Q=', 2285, -1000, 1000));
    question.answers.length = 0;
    question.num = 183;
    question.isSingleAns = false;
    question.shortTextQuestion = "183. Σημειώστε το σωστό Το φίλτρο βίντεο δεν είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gHIwgcGamVk=', 2287, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποσυνένωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fFsmqTKjHr8=', 2289, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρώματα NTSC";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qWIq2YcdNDw=', 2291, -1, 1);
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
    var weight = DecodeNumber('7o3zImoKq5M=', 2295, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7o3zImoKq5M=', 2295, -1000, 1000),DecodeDecimal('6II0pqeCTxw=', 2295, -1000, 1000),DecodeDecimal('6II0pqeCTxw=', 2295, -1000, 1000));
    question.answers.length = 0;
    question.num = 184;
    question.isSingleAns = false;
    question.shortTextQuestion = "184. Σημειώστε το σωστό Τα φίλτρα digimarc  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7o3zImoKq5M=', 2297, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενσωματώνουν εικονοστοιχεία απαραίτητα στην εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('V8TZWSV474I=', 2299, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενσωματώνουν υδατογράφημα για να διασφαλίσουν τα πνευματικά δικαιώματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('V8TZWSV474I=', 2301, -1, 1);
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
    var weight = DecodeNumber('VVTDztGlSCs=', 2305, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VVTDztGlSCs=', 2305, -1000, 1000),DecodeDecimal('5A8SXddj1Gg=', 2305, -1000, 1000),DecodeDecimal('5A8SXddj1Gg=', 2305, -1000, 1000));
    question.answers.length = 0;
    question.num = 185;
    question.isSingleAns = false;
    question.shortTextQuestion = "185. Σημειώστε το σωστό Στην ρύθμιση στοιχείων ελέγχου υφής και γυάλινης επιφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SQgWOo2051w=', 2307, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επιλογή αντιστροφή αντιστρέφει τις σκιές και τους ανοικτούς τόνους";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SQgWOo2051w=', 2309, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η επιλογή αντιστροφή αντιστρέφει τα χρώματα των αντικειμένων μέσα στην εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vbsPq0dQ0jU=', 2311, -1, 1);
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
    var weight = DecodeNumber('cITiecApcPc=', 2315, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cITiecApcPc=', 2315, -1000, 1000),DecodeDecimal('dQ4drbe6AOw=', 2315, -1000, 1000),DecodeDecimal('dQ4drbe6AOw=', 2315, -1000, 1000));
    question.answers.length = 0;
    question.num = 186;
    question.isSingleAns = false;
    question.shortTextQuestion = "186. Σημειώστε το σωστό Ποια φίλτρα εφαρμόζονται σε περιοχές που δεν έχουν προσδιοριστεί και δεν έχουν υποστεί παραμόρφωση;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cITiecApcPc=', 2317, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετατόπιση-καμπή-σκόνη και αμυχές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ECWpNsPED0Y=', 2319, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετατόπιση-καμπή  κύμα-μετακίνηση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ECWpNsPED0Y=', 2321, -1, 1);
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
    var weight = DecodeNumber('Sv8fbnDjHW4=', 2325, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Sv8fbnDjHW4=', 2325, -1000, 1000),DecodeDecimal('jsOQiBT1Bos=', 2325, -1000, 1000),DecodeDecimal('jsOQiBT1Bos=', 2325, -1000, 1000));
    question.answers.length = 0;
    question.num = 187;
    question.isSingleAns = false;
    question.shortTextQuestion = "187. Σημειώστε το σωστό Το φίλτρο μετατόπισης βρίσκεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pFdzSaziKGI=', 2327, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο μενού παραμόρφωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pFdzSaziKGI=', 2329, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο μενού βίντεο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BkGP5izop80=', 2331, -1, 1);
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
    var weight = DecodeNumber('JX3lS0ERf3Q=', 2335, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JX3lS0ERf3Q=', 2335, -1000, 1000),DecodeDecimal('aXw7Y9cEJow=', 2335, -1000, 1000),DecodeDecimal('aXw7Y9cEJow=', 2335, -1000, 1000));
    question.answers.length = 0;
    question.num = 188;
    question.isSingleAns = false;
    question.shortTextQuestion = "188. Σημειώστε το σωστό Η επιλογή αναδίπλωση γύρω   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Rp43Qb7QQqw=', 2337, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζει τον τρόπο αντιμετώπισης των περιοχών εικόνας που δεν θα υποστούν παραμόρφωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Rp43Qb7QQqw=', 2339, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλώνει την εικόνα στη μέση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fC2Jfd9C4Qo=', 2341, -1, 1);
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
    var weight = DecodeNumber('aW1IIMkouE0=', 2345, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aW1IIMkouE0=', 2345, -1000, 1000),DecodeDecimal('SW3iR09zc0Y=', 2345, -1000, 1000),DecodeDecimal('SW3iR09zc0Y=', 2345, -1000, 1000));
    question.answers.length = 0;
    question.num = 189;
    question.isSingleAns = false;
    question.shortTextQuestion = "189. Σημειώστε το σωστό Το φίλτρο εφέ φωτισμού λειτουργεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FpvD0HNWNQI=', 2347, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μόνο με εικόνες RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FpvD0HNWNQI=', 2349, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο με εικόνες CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gmrquEVp01c=', 2351, -1, 1);
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
    var weight = DecodeNumber('pwRDMepuwUw=', 2355, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pwRDMepuwUw=', 2355, -1000, 1000),DecodeDecimal('H7dIdhBV468=', 2355, -1000, 1000),DecodeDecimal('H7dIdhBV468=', 2355, -1000, 1000));
    question.answers.length = 0;
    question.num = 190;
    question.isSingleAns = false;
    question.shortTextQuestion = "190. Σημειώστε το σωστό Το κατευθυντικό φως  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('783HCL6Ho5s=', 2357, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. φωτίζει από μακριά όπως το φως του ήλιου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('783HCL6Ho5s=', 2359, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. φωτίζει σε μια ελλειπτική ακτίνα φωτός";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xtgz/cYvViE=', 2361, -1, 1);
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
    var weight = DecodeNumber('p81ciOuQgvc=', 2365, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('p81ciOuQgvc=', 2365, -1000, 1000),DecodeDecimal('gxCmLn5ttso=', 2365, -1000, 1000),DecodeDecimal('gxCmLn5ttso=', 2365, -1000, 1000));
    question.answers.length = 0;
    question.num = 191;
    question.isSingleAns = false;
    question.shortTextQuestion = "191. Σημειώστε το σωστό Η χρήση της επιλογής Υφή καναλιού στο εφέ φωτισμού  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yCOrvh6XWTk=', 2367, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει τον έλεγχο των εφέ φωτισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yCOrvh6XWTk=', 2369, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την εφαρμογή υφής σε ένα χρώμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8A/nlGC36YY=', 2371, -1, 1);
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
    var weight = DecodeNumber('mS9PO0uBTdg=', 2375, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mS9PO0uBTdg=', 2375, -1000, 1000),DecodeDecimal('PZeJbmrgYlI=', 2375, -1000, 1000),DecodeDecimal('PZeJbmrgYlI=', 2375, -1000, 1000));
    question.answers.length = 0;
    question.num = 192;
    question.isSingleAns = false;
    question.shortTextQuestion = "192. Σημειώστε το σωστό Η μάσκα επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DcByUq3R1Ek=', 2377, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιείται για την απόκρυψη τμημάτων ενός επιπέδου και την αποκάλυψη τμημάτων των επιπέδων που βρίσκονται κάτω από αυτό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DcByUq3R1Ek=', 2379, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει λευκό χρώμα που αντιστοιχεί 100% σε διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ElePXy5mjAo=', 2381, -1, 1);
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
    var weight = DecodeNumber('VJaFI/3qYgU=', 2385, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VJaFI/3qYgU=', 2385, -1000, 1000),DecodeDecimal('IeK83UMXiuA=', 2385, -1000, 1000),DecodeDecimal('IeK83UMXiuA=', 2385, -1000, 1000));
    question.answers.length = 0;
    question.num = 193;
    question.isSingleAns = false;
    question.shortTextQuestion = "193. Σημειώστε το σωστό Στο επίπεδο βάσης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VJaFI/3qYgU=', 2387, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορούμε να αλλάξουμε τη διαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lhvHZQ0Rvtw=', 2389, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορούμε να αλλάξουμε τη διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lhvHZQ0Rvtw=', 2391, -1, 1);
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
    var weight = DecodeNumber('52VcTAwdtrw=', 2395, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('52VcTAwdtrw=', 2395, -1000, 1000),DecodeDecimal('SWL8Oaz2zJE=', 2395, -1000, 1000),DecodeDecimal('SWL8Oaz2zJE=', 2395, -1000, 1000));
    question.answers.length = 0;
    question.num = 194;
    question.isSingleAns = false;
    question.shortTextQuestion = "194. Σημειώστε το σωστό Η δημιουργία νέου επιπέδου/νέας στρώσης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Jgrw3BPnOn4=', 2397, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργείται με κλικ στο εικονίδιο στο κάτω μέρος του πάνελ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Jgrw3BPnOn4=', 2399, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργείται με κλικ στο μενού του πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VovmLo+InN4=', 2401, -1, 1);
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
    var weight = DecodeNumber('6brKjVxIY/0=', 2405, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6brKjVxIY/0=', 2405, -1000, 1000),DecodeDecimal('s0mB+gO9MbI=', 2405, -1000, 1000),DecodeDecimal('s0mB+gO9MbI=', 2405, -1000, 1000));
    question.answers.length = 0;
    question.num = 195;
    question.isSingleAns = false;
    question.shortTextQuestion = "195. Σημειώστε το σωστό Η ενεργοποίηση ενός layer mask (μιας μάσκας επιπέδου)   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+1JzA6585ss=', 2407, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιείτε για την απόκρυψη τμημάτων ενός επιπέδου και την αποκάλυψη τμημάτων των επιπέδων που βρίσκονται κάτω από αυτό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+1JzA6585ss=', 2409, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει λευκό χρώμα που αντιστοιχεί 100% σε διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j7SwZo1LeL4=', 2411, -1, 1);
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
    var weight = DecodeNumber('IzfCg4Iwv70=', 2415, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IzfCg4Iwv70=', 2415, -1000, 1000),DecodeDecimal('1eRl/Qu0big=', 2415, -1000, 1000),DecodeDecimal('1eRl/Qu0big=', 2415, -1000, 1000));
    question.answers.length = 0;
    question.num = 196;
    question.isSingleAns = false;
    question.shortTextQuestion = "196. Σημειώστε το σωστό Το μενού layer Options  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IzfCg4Iwv70=', 2417, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει αλλαγές στο όνομα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('osHhMXFgamo=', 2419, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει αλλαγές στην αδιαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PFwh0gdtZWA=', 2421, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει αλλαγές στην ανάμειξη χρωμάτων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SCj0yh2Plec=', 2423, -1, 1);
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
    var weight = DecodeNumber('EfnMACuz4DA=', 2425, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('EfnMACuz4DA=', 2425, -1000, 1000),DecodeDecimal('2O8X9ikZo8Y=', 2425, -1000, 1000),DecodeDecimal('2O8X9ikZo8Y=', 2425, -1000, 1000));
    question.answers.length = 0;
    question.num = 197;
    question.isSingleAns = false;
    question.shortTextQuestion = "197. Σημειώστε το σωστό Τα αρχεία 3D δεν έχουν  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EfnMACuz4DA=', 2427, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δικτυώματα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FlW49bvmKHw=', 2429, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0jtbDiODdbk=', 2431, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χάρτες";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0jtbDiODdbk=', 2433, -1, 1);
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
    var weight = DecodeNumber('TE7519koMEc=', 2435, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TE7519koMEc=', 2435, -1000, 1000),DecodeDecimal('Q6o3fkp3f/I=', 2435, -1000, 1000),DecodeDecimal('Q6o3fkp3f/I=', 2435, -1000, 1000));
    question.answers.length = 0;
    question.num = 198;
    question.isSingleAns = false;
    question.shortTextQuestion = "198. Σημειώστε το σωστό Οι τύποι του φωτισμού στην τρισδιάστατη επεξεργασία έχει επιλογές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TE7519koMEc=', 2437, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. άπειρο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Gz1WPTwtujA=', 2439, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προβολέας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YsY+BKvlLis=', 2441, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σημείο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hkPdEUSxWvw=', 2443, -1, 1);
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
    var weight = DecodeNumber('eIBZluk1ERc=', 2445, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eIBZluk1ERc=', 2445, -1000, 1000),DecodeDecimal('IlvD4gCXH08=', 2445, -1000, 1000),DecodeDecimal('IlvD4gCXH08=', 2445, -1000, 1000));
    question.answers.length = 0;
    question.num = 199;
    question.isSingleAns = false;
    question.shortTextQuestion = "199. Σημειώστε το σωστό Οι υφές εμφανίζονται ως  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('g+T7zahbC7E=', 2447, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καταχωρίσεις κάτω από ένα επίπεδο 3D στον πίνακα \"Επίπεδα\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g+T7zahbC7E=', 2449, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x96o+hvzQ8Q=', 2451, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αντικείμενα με ειδικό φωτισμό";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZIrKjSLhdbg=', 2453, -1, 1);
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
    var weight = DecodeNumber('fp2jvw3DBR4=', 2455, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fp2jvw3DBR4=', 2455, -1000, 1000),DecodeDecimal('LSBie9dqdnc=', 2455, -1000, 1000),DecodeDecimal('LSBie9dqdnc=', 2455, -1000, 1000));
    question.answers.length = 0;
    question.num = 200;
    question.isSingleAns = false;
    question.shortTextQuestion = "200. Σημειώστε το σωστό Ένα μοντέλο με τα εργαλεία 3D μπορεί να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fp2jvw3DBR4=', 2457, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αλλάξει μέγεθος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('w58QfIzXgUs=', 2459, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετακινηθεί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rh9/VO0ej9c=', 2461, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. περιστραφεί";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WAVM2G3zG7M=', 2463, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('WAVM2G3zG7M=', 2465, -1, 1);
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
    var weight = DecodeNumber('rblZEjkI+Qw=', 2465, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rblZEjkI+Qw=', 2465, -1000, 1000),DecodeDecimal('3ORBG59gj7E=', 2465, -1000, 1000),DecodeDecimal('3ORBG59gj7E=', 2465, -1000, 1000));
    question.answers.length = 0;
    question.num = 201;
    question.isSingleAns = false;
    question.shortTextQuestion = "201. Σημειώστε το σωστό Με τη χρήση των εργαλείων της κάμερας 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yter+p8eCpI=', 2467, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετακινείται η προβολή της κάμερας χωρίς να μετακινηθεί η θέση του αντικειμένου 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yter+p8eCpI=', 2469, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετακινείται το αντικείμενο πάνω στο οποίο προβάλλεται το φως";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nNyOdOqw8js=', 2471, -1, 1);
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
    var weight = DecodeNumber('iYliczi99+g=', 2475, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iYliczi99+g=', 2475, -1000, 1000),DecodeDecimal('YQWVrwT2CIA=', 2475, -1000, 1000),DecodeDecimal('YQWVrwT2CIA=', 2475, -1000, 1000));
    question.answers.length = 0;
    question.num = 202;
    question.isSingleAns = false;
    question.shortTextQuestion = "202. Σημειώστε το σωστό: Για να επιστρέψουμε στην προεπιλεγμένη προβολή της κάμερας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iMXnRsQld14=', 2477, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή του εργαλείου κάμερας και κλικ στην επιστροφή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iMXnRsQld14=', 2479, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλό κλικ στο εργαλείο κάμερας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xA1ep/Zc19w=', 2481, -1, 1);
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
    var weight = DecodeNumber('DcSZleAKY3A=', 2485, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DcSZleAKY3A=', 2485, -1000, 1000),DecodeDecimal('ewVn8mhLqLU=', 2485, -1000, 1000),DecodeDecimal('ewVn8mhLqLU=', 2485, -1000, 1000));
    question.answers.length = 0;
    question.num = 203;
    question.isSingleAns = false;
    question.shortTextQuestion = "203. Σημειώστε το σωστό: Για να μετακινηθεί ένα μοντέλο σε άξονα 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('M0HGp2fflvs=', 2487, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επισημάνουμε το άκρο οποιουδήποτε άξονα και σύρουμε";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M0HGp2fflvs=', 2489, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε τον κέρσορα του ποντικιού μόνο σε άξονα y";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4PLMD86yVhs=', 2491, -1, 1);
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
    var weight = DecodeNumber('4f9nVVoYCEk=', 2495, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4f9nVVoYCEk=', 2495, -1000, 1000),DecodeDecimal('mFppYYyqrIg=', 2495, -1000, 1000),DecodeDecimal('mFppYYyqrIg=', 2495, -1000, 1000));
    question.answers.length = 0;
    question.num = 204;
    question.isSingleAns = false;
    question.shortTextQuestion = "204. Σημειώστε το σωστό: Για να συμπιέσουμε το μοντέλο κατά μήκος του άξονα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vfQWOm4BKZg=', 2497, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σύρουμε έναν από τους χρωματιστούς κύβους τροποποίησης προς το κέντρο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vfQWOm4BKZg=', 2499, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε έναν από τους χρωματιστούς κύβους τροποποίησης προς τα άκρα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TVd/0N77EmY=', 2501, -1, 1);
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
    var weight = DecodeNumber('umrwkEe+Ano=', 2505, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('umrwkEe+Ano=', 2505, -1000, 1000),DecodeDecimal('+wT+sA8aul0=', 2505, -1000, 1000),DecodeDecimal('+wT+sA8aul0=', 2505, -1000, 1000));
    question.answers.length = 0;
    question.num = 205;
    question.isSingleAns = false;
    question.shortTextQuestion = "205. Σημειώστε το σωστό: Στην εφαρμογή φίλτρου εμφανίζονται οι επιλογές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('umrwkEe+Ano=', 2507, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σκηνικού - δικτυώματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Y3jhtyUNBmw=', 2509, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικού-φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LKcP7JJDUUk=', 2511, -1, 1);
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
    var weight = DecodeNumber('C0iTSS/5Ty0=', 2515, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('C0iTSS/5Ty0=', 2515, -1000, 1000),DecodeDecimal('VdZ6o2v9s5A=', 2515, -1000, 1000),DecodeDecimal('VdZ6o2v9s5A=', 2515, -1000, 1000));
    question.answers.length = 0;
    question.num = 206;
    question.isSingleAns = false;
    question.shortTextQuestion = "206. Οι ρυθμίσεις επιλογών προβολής δικτυώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hw6sfyl4miY=', 2517, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχουν απόδοση σκιών";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hw6sfyl4miY=', 2519, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχουν επιλογές δέσμης φωτός";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6+kxFZxVmLs=', 2521, -1, 1);
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
    var weight = DecodeNumber('TjGAAiz2mKo=', 2525, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TjGAAiz2mKo=', 2525, -1000, 1000),DecodeDecimal('k4ip2NH9gwA=', 2525, -1000, 1000),DecodeDecimal('k4ip2NH9gwA=', 2525, -1000, 1000));
    question.answers.length = 0;
    question.num = 207;
    question.isSingleAns = false;
    question.shortTextQuestion = "207. Σημειώστε το σωστό Η εντολή περιβάλλον  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TjGAAiz2mKo=', 2527, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ρυθμίζει τη φωτεινότητα του περιβάλλοντος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j75Nii9HvAs=', 2529, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζει το χρώμα του φωτισμού στο περιβάλλον";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j75Nii9HvAs=', 2531, -1, 1);
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
    var weight = DecodeNumber('7rLctUsGNZ4=', 2535, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7rLctUsGNZ4=', 2535, -1000, 1000),DecodeDecimal('TadkcyyXDYY=', 2535, -1000, 1000),DecodeDecimal('TadkcyyXDYY=', 2535, -1000, 1000));
    question.answers.length = 0;
    question.num = 208;
    question.isSingleAns = false;
    question.shortTextQuestion = "208. Σημειώστε το σωστό Η εντολή Διάχυση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7rLctUsGNZ4=', 2537, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαχέει έντονο φως";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l/G+gGiB7HU=', 2539, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαχέει το χρώμα του υλικού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l/G+gGiB7HU=', 2541, -1, 1);
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
    var weight = DecodeNumber('fhRVMLpDUDw=', 2545, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fhRVMLpDUDw=', 2545, -1000, 1000),DecodeDecimal('4CuMYKJOhLo=', 2545, -1000, 1000),DecodeDecimal('4CuMYKJOhLo=', 2545, -1000, 1000));
    question.answers.length = 0;
    question.num = 209;
    question.isSingleAns = false;
    question.shortTextQuestion = " 209. Σημειώστε το σωστό Η εφαρμογή της ανακλαστικότητας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AhbHvYBoDeQ=', 2547, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αυξάνει την ανακλαστικότητα άλλων αντικειμένων στο σκηνικό 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AhbHvYBoDeQ=', 2549, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μειώνει την ανακλαστικότητα άλλων αντικειμένων στο σκηνικό 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RoAjvTyoEQA=', 2551, -1, 1);
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
    var weight = DecodeNumber('E6tSDu5ZkLU=', 2555, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E6tSDu5ZkLU=', 2555, -1000, 1000),DecodeDecimal('DCvSzMrdOjU=', 2555, -1000, 1000),DecodeDecimal('DCvSzMrdOjU=', 2555, -1000, 1000));
    question.answers.length = 0;
    question.num = 210;
    question.isSingleAns = false;
    question.shortTextQuestion = "210. Σημειώστε το σωστό Ο κανονικός χάρτης σε σχέση με χάρτη ανάγλυφου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('E6tSDu5ZkLU=', 2557, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μειώνει τις λεπτομέρειες της επιφάνειας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UGR5RnBrg4U=', 2559, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αυξάνει τις λεπτομέρειες της επιφάνειας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UGR5RnBrg4U=', 2561, -1, 1);
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
    var weight = DecodeNumber('IvBsk6JR5cI=', 2565, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IvBsk6JR5cI=', 2565, -1000, 1000),DecodeDecimal('K5OSlGo0fF4=', 2565, -1000, 1000),DecodeDecimal('K5OSlGo0fF4=', 2565, -1000, 1000));
    question.answers.length = 0;
    question.num = 211;
    question.isSingleAns = false;
    question.shortTextQuestion = "211. Σημειώστε το σωστό Ο χάρτης υφής ανοίγει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IvBsk6JR5cI=', 2567, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα στο παράθυρο εγγράφου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NIoQ97I0dv8=', 2569, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε ξεχωριστό παράθυρο εγγράφου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NIoQ97I0dv8=', 2571, -1, 1);
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
    var weight = DecodeNumber('8ceT0D+1+fE=', 2575, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8ceT0D+1+fE=', 2575, -1000, 1000),DecodeDecimal('fQrG5po94YU=', 2575, -1000, 1000),DecodeDecimal('fQrG5po94YU=', 2575, -1000, 1000));
    question.answers.length = 0;
    question.num = 212;
    question.isSingleAns = false;
    question.shortTextQuestion = "212. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8ceT0D+1+fE=', 2577, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να βελτιωθεί η απεικόνιση της υφής στο μοντέλο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mYUduXGjfpE=', 2579, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζουμε την κλίμακα UV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EFdwLSgCGj8=', 2581, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ρυθμίζουμε την μετατόπιση";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MNmMPKqUQcc=', 2583, -1, 1);
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
    var weight = DecodeNumber('SJkefQTMG0A=', 2585, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SJkefQTMG0A=', 2585, -1000, 1000),DecodeDecimal('rqII7y3g/iI=', 2585, -1000, 1000),DecodeDecimal('rqII7y3g/iI=', 2585, -1000, 1000));
    question.answers.length = 0;
    question.num = 213;
    question.isSingleAns = false;
    question.shortTextQuestion = "213. Σημειώστε το σωστό 2. Το πρόγραμμα Photoshop Extended διαθέτει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p81V3PiGMg8=', 2587, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. 3 τύπους φωτισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p81V3PiGMg8=', 2589, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. 6 τύπους φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dMFZ5EBOaT0=', 2591, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. 16 τύπους φωτισμού";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y8XFC4xyfaU=', 2593, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('3hni8tKBpo8=', 2595, -1, 1);
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
    var weight = DecodeNumber('p3XWm83bUR8=', 2595, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('p3XWm83bUR8=', 2595, -1000, 1000),DecodeDecimal('2aY4boAw2AA=', 2595, -1000, 1000),DecodeDecimal('2aY4boAw2AA=', 2595, -1000, 1000));
    question.answers.length = 0;
    question.num = 214;
    question.isSingleAns = false;
    question.shortTextQuestion = "214. Σημειώστε το σωστό 3. Το σημειακό φως ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8jtgmxQGvVk=', 2597, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαχέεται προς όλες τις κατευθύνσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8jtgmxQGvVk=', 2599, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαχέεται προς μια κατεύθυνση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hMyKo0b9lJo=', 2601, -1, 1);
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
    var weight = DecodeNumber('0XQjh+qkmyo=', 2605, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0XQjh+qkmyo=', 2605, -1000, 1000),DecodeDecimal('8HBkC8zMZdQ=', 2605, -1000, 1000),DecodeDecimal('8HBkC8zMZdQ=', 2605, -1000, 1000));
    question.answers.length = 0;
    question.num = 215;
    question.isSingleAns = false;
    question.shortTextQuestion = "215. Σημειώστε το σωστό Οι οδηγοί φώτων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/mf785FJ75U=', 2607, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αντανακλούν τη γωνία, την εξασθένιση και τον τύπο του φωτός";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/mf785FJ75U=', 2609, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθοδηγούν τον χρήστη/δημιουργό για να επεξεργαστεί τα χρώματα της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('V3tWmhN3wt8=', 2611, -1, 1);
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
    var weight = DecodeNumber('6pfyEXmUJjs=', 2615, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6pfyEXmUJjs=', 2615, -1000, 1000),DecodeDecimal('8CkoH+CO8JM=', 2615, -1000, 1000),DecodeDecimal('8CkoH+CO8JM=', 2615, -1000, 1000));
    question.answers.length = 0;
    question.num = 216;
    question.isSingleAns = false;
    question.shortTextQuestion = "216. Σημειώστε το σωστό Οι ομάδες φώτων μπορούν να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6pfyEXmUJjs=', 2617, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποθηκευτούν ως ομάδες προκαθορισμένης ρύθμισης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LyKmbJBa8wQ=', 2619, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αντικατασταθούν";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TJ2Svf4L3RI=', 2621, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εμπλουτιστούν με προσθήκη φώτων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('U2IGCVK94rQ=', 2623, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('4rc8OmA9Kq4=', 2625, -1, 1);
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
    var weight = DecodeNumber('4rc8OmA9Kq4=', 2625, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4rc8OmA9Kq4=', 2625, -1000, 1000),DecodeDecimal('ze0aoP/+PSA=', 2625, -1000, 1000),DecodeDecimal('ze0aoP/+PSA=', 2625, -1000, 1000));
    question.answers.length = 0;
    question.num = 217;
    question.isSingleAns = false;
    question.shortTextQuestion = "217. Σημειώστε το σωστό Με την εντολή Εκ νέου ορισμός παραμέτρων για χάρτη υφής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pDEN3BeEb58=', 2627, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διορθώνονται οι παραμορφώσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pDEN3BeEb58=', 2629, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλάζει η υφή του σκηνικού εντελώς";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('C5Hl2GJagsU=', 2631, -1, 1);
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
    var weight = DecodeNumber('KwpQCTkRAp0=', 2635, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KwpQCTkRAp0=', 2635, -1000, 1000),DecodeDecimal('osrKiwBUnHs=', 2635, -1000, 1000),DecodeDecimal('osrKiwBUnHs=', 2635, -1000, 1000));
    question.answers.length = 0;
    question.num = 218;
    question.isSingleAns = false;
    question.shortTextQuestion = "218. Σημειώστε το σωστό Η επιλογή Λιγότερες ραφές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KwpQCTkRAp0=', 2637, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διορθώνεται η παραμορφωμένη υφή του μοντέλου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aC84Re8ivcA=', 2639, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλοιώνεται η υφή ανάλογα με το μοντέλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aC84Re8ivcA=', 2641, -1, 1);
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
    var weight = DecodeNumber('BaJflWQUGbY=', 2645, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BaJflWQUGbY=', 2645, -1000, 1000),DecodeDecimal('lvgoowRisuY=', 2645, -1000, 1000),DecodeDecimal('lvgoowRisuY=', 2645, -1000, 1000));
    question.answers.length = 0;
    question.num = 219;
    question.isSingleAns = false;
    question.shortTextQuestion = "219. Σημειώστε το σωστό Οι υφές εμφανίζονται στον πίνακα Επίπεδα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BaJflWQUGbY=', 2647, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ως ένθετα στοιχεία";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7D071xzid3U=', 2649, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ως καταχωρίσεις";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7D071xzid3U=', 2651, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ως ομάδες τύπου χάρτη";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4X/jrwUTgWQ=', 2653, -1, 1);
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
    var weight = DecodeNumber('d8lMqWuGpx0=', 2655, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('d8lMqWuGpx0=', 2655, -1000, 1000),DecodeDecimal('6WhXpRFFl04=', 2655, -1000, 1000),DecodeDecimal('6WhXpRFFl04=', 2655, -1000, 1000));
    question.answers.length = 0;
    question.num = 220;
    question.isSingleAns = false;
    question.shortTextQuestion = "220. Σημειώστε το σωστό Η απεικόνιση UV  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/hk64xWLuj4=', 2657, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει στην υφή 2D να χρωματιστεί σωστά στο μοντέλο 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/hk64xWLuj4=', 2659, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. επιτρέπει στην υφή 2D να χρωματιστεί σωστά στο μοντέλο 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kM0SY7Lz/uw=', 2661, -1, 1);
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
    var weight = DecodeNumber('rQSw6IR6z+I=', 2665, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rQSw6IR6z+I=', 2665, -1000, 1000),DecodeDecimal('jLPtX3bDtrs=', 2665, -1000, 1000),DecodeDecimal('jLPtX3bDtrs=', 2665, -1000, 1000));
    question.answers.length = 0;
    question.num = 221;
    question.isSingleAns = false;
    question.shortTextQuestion = "221. Οι υφές 3D στο Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rQSw6IR6z+I=', 2667, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ανοίγουν ως έξυπνα αντικείμενα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YkW6zftHe2U=', 2669, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ανοίγουν ως αρχεία 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+8gO7tdDPJw=', 2671, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+8gO7tdDPJw=', 2673, -1, 1);
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
    var weight = DecodeNumber('vGM3+4M4KYI=', 2675, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vGM3+4M4KYI=', 2675, -1000, 1000),DecodeDecimal('ea34rCurlyw=', 2675, -1000, 1000),DecodeDecimal('ea34rCurlyw=', 2675, -1000, 1000));
    question.answers.length = 0;
    question.num = 222;
    question.isSingleAns = false;
    question.shortTextQuestion = "222. Σημειώστε το σωστό Η επαναλαμβανόμενη υφή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3kQzUWe63R4=', 2677, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καλύπτει ρεαλιστικά την επιφάνεια του μοντέλου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3kQzUWe63R4=', 2679, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν βελτιώνει τη λειτουργία απόδοσης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('V9CDOOQgp8E=', 2681, -1, 1);
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
    var weight = DecodeNumber('VTKELpRyErs=', 2685, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VTKELpRyErs=', 2685, -1000, 1000),DecodeDecimal('aP2O6UWUx1U=', 2685, -1000, 1000),DecodeDecimal('aP2O6UWUx1U=', 2685, -1000, 1000));
    question.answers.length = 0;
    question.num = 223;
    question.isSingleAns = false;
    question.shortTextQuestion = "223. Σημειώστε το σωστό Το πρόγραμμα Photoshop αυτόματα μπορεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aWLGVq63wLY=', 2687, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να εντοπίσει συγκεκριμένες περιοχές του μοντέλου κατάλληλες για χρώμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aWLGVq63wLY=', 2689, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να χρωματίσει το μοντέλο χωρίς χάρτη υφής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iKCpD+d0m/s=', 2691, -1, 1);
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
    var weight = DecodeNumber('+IIyNkHEsCQ=', 2695, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+IIyNkHEsCQ=', 2695, -1000, 1000),DecodeDecimal('vwQCVIuHHpM=', 2695, -1000, 1000),DecodeDecimal('vwQCVIuHHpM=', 2695, -1000, 1000));
    question.answers.length = 0;
    question.num = 224;
    question.isSingleAns = false;
    question.shortTextQuestion = "224. Σημειώστε το σωστό Ο χάρτης υφής επιτρέπει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qLrFSssJOe4=', 2697, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να είναι ορατά τα αποτελέσματα του χρωματισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qLrFSssJOe4=', 2699, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να χρωματίζεται το επίπεδο χωρίς να είναι ορατές οι ενέργειες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mt2npw8iasc=', 2701, -1, 1);
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
    var weight = DecodeNumber('Ps6L5baOeUk=', 2705, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ps6L5baOeUk=', 2705, -1000, 1000),DecodeDecimal('uE2RQXYeDz0=', 2705, -1000, 1000),DecodeDecimal('uE2RQXYeDz0=', 2705, -1000, 1000));
    question.answers.length = 0;
    question.num = 225;
    question.isSingleAns = false;
    question.shortTextQuestion = "225. Σημειώστε το σωστό Η γωνία σταδιακής μείωσης του χρωματισμού  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('55QAKU5VFHQ=', 2707, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ελέγχει την ποσότητα του χρώματος που εφαρμόζεται σε επιφάνειες που σχηματίζουν γωνίες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('55QAKU5VFHQ=', 2709, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ελέγχει τη γωνία μετάβασης από τα φωτεινά στα σκοτεινά εικονοστοιχεία πάνω στην επιφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MAva4NEsbyM=', 2711, -1, 1);
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
    var weight = DecodeNumber('4JlO0rSU4PU=', 2715, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4JlO0rSU4PU=', 2715, -1000, 1000),DecodeDecimal('hLxgsBfYz/4=', 2715, -1000, 1000),DecodeDecimal('hLxgsBfYz/4=', 2715, -1000, 1000));
    question.answers.length = 0;
    question.num = 226;
    question.isSingleAns = false;
    question.shortTextQuestion = "226. Σημειώστε το σωστό Τα αντικείμενα με ένα μόνο δικτύωμα είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CbdbQ7xI99o=', 2717, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το καπέλο  η σφαίρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CbdbQ7xI99o=', 2719, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κώνος κύλινδρος-μπουκάλι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('c3kEi5TUiEc=', 2721, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κανένα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('j0z/SLxyM7M=', 2723, -1, 1);
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
    var weight = DecodeNumber('s4v/P0PgqO4=', 2725, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('s4v/P0PgqO4=', 2725, -1000, 1000),DecodeDecimal('cF9A1gNOoVM=', 2725, -1000, 1000),DecodeDecimal('cF9A1gNOoVM=', 2725, -1000, 1000));
    question.answers.length = 0;
    question.num = 227;
    question.isSingleAns = false;
    question.shortTextQuestion = "227. Σημειώστε το σωστό Η συγχώνευση επιπέδων 3D επιτρέπει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GUatdzhkXUU=', 2727, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε ένα σκηνικό να συνδυάζονται πολλαπλά μοντέλα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GUatdzhkXUU=', 2729, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε πολλά σκηνικά να συνδυάζεται ένα μοντέλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7Up3Jr7V7N4=', 2731, -1, 1);
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
    var weight = DecodeNumber('aoQVUpx8prA=', 2735, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aoQVUpx8prA=', 2735, -1000, 1000),DecodeDecimal('yOJCSQ99BYQ=', 2735, -1000, 1000),DecodeDecimal('yOJCSQ99BYQ=', 2735, -1000, 1000));
    question.answers.length = 0;
    question.num = 228;
    question.isSingleAns = false;
    question.shortTextQuestion = "228. Σημειώστε το σωστό Μετά τη συγχώνευση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OffYe8a0188=', 2737, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. όλα τα υλικά και δικτυώματα εμφανίζονται στον πίνακα 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OffYe8a0188=', 2739, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο τα υλικά και δικτυώματα του μεγαλύτερου αρχείου εμφανίζονται στον πίνακα 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rlnkbWB//AQ=', 2741, -1, 1);
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
    var weight = DecodeNumber('ZktECwmoyCY=', 2745, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZktECwmoyCY=', 2745, -1000, 1000),DecodeDecimal('EUfPkPCmzxA=', 2745, -1000, 1000),DecodeDecimal('EUfPkPCmzxA=', 2745, -1000, 1000));
    question.answers.length = 0;
    question.num = 229;
    question.isSingleAns = false;
    question.shortTextQuestion = "229. Σημειώστε το σωστό Για κινούμενες εικόνες υψηλής ποιότητας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('D6pgyZgV+zI=', 2747, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ρυθμίζεται η απόδοση «Απόδοση για τελική έξοδο» ανά καρέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('D6pgyZgV+zI=', 2749, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζεται η εγκάρσια τομή ανάμεσα στα καρέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ogv5+mrUA5k=', 2751, -1, 1);
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
    var weight = DecodeNumber('x6QFBcuInok=', 2755, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x6QFBcuInok=', 2755, -1000, 1000),DecodeDecimal('RSuGuzttRkw=', 2755, -1000, 1000),DecodeDecimal('RSuGuzttRkw=', 2755, -1000, 1000));
    question.answers.length = 0;
    question.num = 230;
    question.isSingleAns = false;
    question.shortTextQuestion = "230. Σημειώστε το σωστό Με τη μετατροπή ενός επιπέδου 3D σε 2D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xhAaA2JSE7w=', 2757, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ραστεροποιείται το περιεχόμενο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xhAaA2JSE7w=', 2759, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορεί να υποστεί επεξεργασία το μοντέλο 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0QbnilAPZeg=', 2761, -1, 1);
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
    var weight = DecodeNumber('5ck13nfLb1U=', 2765, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5ck13nfLb1U=', 2765, -1000, 1000),DecodeDecimal('q7Mwz2b8Qmo=', 2765, -1000, 1000),DecodeDecimal('q7Mwz2b8Qmo=', 2765, -1000, 1000));
    question.answers.length = 0;
    question.num = 231;
    question.isSingleAns = false;
    question.shortTextQuestion = "231. Σημειώστε το σωστό Η απόκρυψη πολλών επιπέδων ενός εγγράφου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mPxJ24vIVKA=', 2767, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται για ταχύτερη απόδοση της εικόνας στην οθόνη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mPxJ24vIVKA=', 2769, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται για την καλύτερη απόδοση των εργαλείων χρωματισμού στο ενεργό επίπεδο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mZXAUEL3bss=', 2771, -1, 1);
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
    var weight = DecodeNumber('ryUGzoryV60=', 2775, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ryUGzoryV60=', 2775, -1000, 1000),DecodeDecimal('aM2GnVasUeQ=', 2775, -1000, 1000),DecodeDecimal('aM2GnVasUeQ=', 2775, -1000, 1000));
    question.answers.length = 0;
    question.num = 232;
    question.isSingleAns = false;
    question.shortTextQuestion = "232. Σημειώστε το σωστό Η δημιουργία κίνησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('D8CqZX0I9H8=', 2777, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από τον πίνακα Κινούμενη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('D8CqZX0I9H8=', 2779, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται από τον πίνακα επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gvHOpV6quT8=', 2781, -1, 1);
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
    var weight = DecodeNumber('m5i21TajhJk=', 2785, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('m5i21TajhJk=', 2785, -1000, 1000),DecodeDecimal('t4F+d0oRig4=', 2785, -1000, 1000),DecodeDecimal('t4F+d0oRig4=', 2785, -1000, 1000));
    question.answers.length = 0;
    question.num = 233;
    question.isSingleAns = false;
    question.shortTextQuestion = "233. Σημειώστε το σωστό Η κινούμενη εικόνα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GyFNh9nbzyg=', 2787, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι πολλά καρέ με διαφορετική διαμόρφωση επιπέδων μιας εικόνας σε κάθε ένα από αυτά";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GyFNh9nbzyg=', 2789, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι ένας καθορισμένος αριθμός καρέ με διαφορετικές εικόνες σε κάθε ένα από αυτά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eVMiNllp7Qk=', 2791, -1, 1);
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
    var weight = DecodeNumber('DwM2thINy3Q=', 2795, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DwM2thINy3Q=', 2795, -1000, 1000),DecodeDecimal('ISLEqB4m3nE=', 2795, -1000, 1000),DecodeDecimal('ISLEqB4m3nE=', 2795, -1000, 1000));
    question.answers.length = 0;
    question.num = 234;
    question.isSingleAns = false;
    question.shortTextQuestion = "234. Σημειώστε το σωστό Σε ένα επίπεδο φόντου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DwM2thINy3Q=', 2797, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργείται κίνηση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xCHGDrKgHI0=', 2799, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν δημιουργείται κίνηση (είναι και αυτό σωστό)";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q5rzzRVmv6M=', 2801, -1, 1);
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
    var weight = DecodeNumber('q1aP2GgTqKg=', 2805, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('q1aP2GgTqKg=', 2805, -1000, 1000),DecodeDecimal('wZQK4o9sc1U=', 2805, -1000, 1000),DecodeDecimal('wZQK4o9sc1U=', 2805, -1000, 1000));
    question.answers.length = 0;
    question.num = 235;
    question.isSingleAns = false;
    question.shortTextQuestion = "235. Σημειώστε το σωστό Η προεπισκόπηση της κινούμενης εικόνα (και αυτό σωστό )  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('q1aP2GgTqKg=', 2807, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από τον πίνακα κινούμενη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GJlB/j8FTP4=', 2809, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται από τον πίνακα επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Frk2I9w+3wk=', 2811, -1, 1);
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
    var weight = DecodeNumber('FjgcHmr3FsE=', 2815, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FjgcHmr3FsE=', 2815, -1000, 1000),DecodeDecimal('UVEhlroidCU=', 2815, -1000, 1000),DecodeDecimal('UVEhlroidCU=', 2815, -1000, 1000));
    question.answers.length = 0;
    question.num = 236;
    question.isSingleAns = false;
    question.shortTextQuestion = "236. Σημειώστε το σωστό Η αποθήκευση της κινούμενης εικόνας δεν  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FjgcHmr3FsE=', 2817, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται ως αρχείο gif με την εντολή αποθήκευση για web & συσκευές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Zcqf6FBE7yE=', 2819, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται ως μορφή PSD";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TFXlogIgrZ0=', 2821, -1, 1);
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
    var weight = DecodeNumber('PdduL1vEUR0=', 2825, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PdduL1vEUR0=', 2825, -1000, 1000),DecodeDecimal('8xqB4nDn92I=', 2825, -1000, 1000),DecodeDecimal('8xqB4nDn92I=', 2825, -1000, 1000));
    question.answers.length = 0;
    question.num = 237;
    question.isSingleAns = false;
    question.shortTextQuestion = "237. Σημειώστε το σωστό Το κουμπί Ενοποίηση στυλ επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3jMu/Oo5c/M=', 2827, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενεργοποιείται για να εφαρμοστεί ένα στυλ σε όλα τα άλλα καρέ στο ενεργό επίπεδο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3jMu/Oo5c/M=', 2829, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποιείται για να εφαρμοστεί ένα στυλ στο ενεργοποιημένο καρέ στο ενεργό επίπεδο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nxjwz03k2ps=', 2831, -1, 1);
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
    var weight = DecodeNumber('xUnts2YjrCM=', 2835, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xUnts2YjrCM=', 2835, -1000, 1000),DecodeDecimal('0lY3Pd3ugS0=', 2835, -1000, 1000),DecodeDecimal('0lY3Pd3ugS0=', 2835, -1000, 1000));
    question.answers.length = 0;
    question.num = 238;
    question.isSingleAns = false;
    question.shortTextQuestion = "238. Σημειώστε το σωστό Η αντιγραφή καρέ είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xUnts2YjrCM=', 2837, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η αντιγραφή μιας εικόνας με όλα τα επίπεδά της";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rvQRZox6eJw=', 2839, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η αντιγραφή μιας διπλότυπης εκδοχής μιας εικόνας με συγκεκριμένη διαμόρφωση επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rvQRZox6eJw=', 2841, -1, 1);
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
    var weight = DecodeNumber('SXW3GhMOHvE=', 2845, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SXW3GhMOHvE=', 2845, -1000, 1000),DecodeDecimal('K3UJmwGlc4g=', 2845, -1000, 1000),DecodeDecimal('K3UJmwGlc4g=', 2845, -1000, 1000));
    question.answers.length = 0;
    question.num = 239;
    question.isSingleAns = false;
    question.shortTextQuestion = "239. Σημειώστε το σωστό Η εντολή Επικόλληση πάνω στην επιλογή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SXW3GhMOHvE=', 2847, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αντικαθιστούνται τα επίπεδα της εικόνας με τα νέα επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('97fS8DktpYo=', 2849, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλασιάζεται ο αριθμός των επιπέδων της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('97fS8DktpYo=', 2851, -1, 1);
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
    var weight = DecodeNumber('paLlRlt9M0k=', 2855, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('paLlRlt9M0k=', 2855, -1000, 1000),DecodeDecimal('Xd6YmZtDy+A=', 2855, -1000, 1000),DecodeDecimal('Xd6YmZtDy+A=', 2855, -1000, 1000));
    question.answers.length = 0;
    question.num = 240;
    question.isSingleAns = false;
    question.shortTextQuestion = "240. Σημειώστε το σωστό Η εντολή Σύνδεση προστιθέμενων επιπέδων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8whEZ/1TiRg=', 2857, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενεργοποιείται μόνο όταν επικολλούνται καρέ σε διαφορετικά έγγραφα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8whEZ/1TiRg=', 2859, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποιείται μόνο για να συνδεθούν τα επίπεδα που έχουν επικολληθεί στον πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('B7Q68pwpEpc=', 2861, -1, 1);
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
    var weight = DecodeNumber('hJE7Zv8CwMs=', 2865, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hJE7Zv8CwMs=', 2865, -1000, 1000),DecodeDecimal('3W2v0Udaw6E=', 2865, -1000, 1000),DecodeDecimal('3W2v0Udaw6E=', 2865, -1000, 1000));
    question.answers.length = 0;
    question.num = 241;
    question.isSingleAns = false;
    question.shortTextQuestion = "241. Σημειώστε το σωστό Η μέθοδος εισαγωγής ενδιάμεσων εικόνων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hJE7Zv8CwMs=', 2867, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μειώνει το χρόνο που απαιτείται για τη δημιουργία εφε κίνησης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QwGW8Exx6fw=', 2869, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την αυτόνομη επεξεργασία των καρέ που δημιουργούνται";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('V+xLjuUrCfo=', 2871, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει την αυτόματη τροποποίηση πολλών καρέ ανάμεσα σε δύο υπάρχοντα καρέ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('syE3WEDG6Vk=', 2873, -1, 1);
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
    var weight = DecodeNumber('0CgJosKqEpk=', 2875, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0CgJosKqEpk=', 2875, -1000, 1000),DecodeDecimal('jThmNuF4pvk=', 2875, -1000, 1000),DecodeDecimal('jThmNuF4pvk=', 2875, -1000, 1000));
    question.answers.length = 0;
    question.num = 242;
    question.isSingleAns = false;
    question.shortTextQuestion = "242. Σημειώστε το σωστό Συγκριτικά με τα άλλα προγράμματα η εγγενής φύση του Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5eHIrX8F2uc=', 2877, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποθηκεύει τις στρώσεις μιας εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5eHIrX8F2uc=', 2879, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αποθηκεύει την εικόνα χωρίς γραμμές οδηγούς";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Stz1Jfc8S5U=', 2881, -1, 1);
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
    var weight = DecodeNumber('xjIkb9iO6Ho=', 2885, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xjIkb9iO6Ho=', 2885, -1000, 1000),DecodeDecimal('2dFqyUsgIm0=', 2885, -1000, 1000),DecodeDecimal('2dFqyUsgIm0=', 2885, -1000, 1000));
    question.answers.length = 0;
    question.num = 243;
    question.isSingleAns = false;
    question.shortTextQuestion = "243. Σημειώστε το σωστό Το πρόγραμμα Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4iUzYNaggdA=', 2887, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ανοίγει και εικόνες με επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4iUzYNaggdA=', 2889, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ανοίγει τις εικόνες όπως τα άλλα προγράμματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M2f0zyYV03M=', 2891, -1, 1);
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
    var weight = DecodeNumber('xrFqQTmEUbY=', 2895, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xrFqQTmEUbY=', 2895, -1000, 1000),DecodeDecimal('o8hVwGgI1VU=', 2895, -1000, 1000),DecodeDecimal('o8hVwGgI1VU=', 2895, -1000, 1000));
    question.answers.length = 0;
    question.num = 244;
    question.isSingleAns = false;
    question.shortTextQuestion = "244. Σημειώστε το σωστό η μέθοδος απόρριψης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xrFqQTmEUbY=', 2897, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζει την απόρριψη ή την μη απόρριψη του επόμενου καρέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZU3vNNL0UXg=', 2899, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσδιορίζει την απόρριψη ή την μη απόρριψη του προηγούμενου καρέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+QTlpe6EpQI=', 2901, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αφορά τις κινούμενες εικόνες που περιλαμβάνουν διαφάνεια φόντου";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+QTlpe6EpQI=', 2903, -1, 1);
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
    var weight = DecodeNumber('YUI7e2oDNS0=', 2905, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YUI7e2oDNS0=', 2905, -1000, 1000),DecodeDecimal('h1fDsN27X2o=', 2905, -1000, 1000),DecodeDecimal('h1fDsN27X2o=', 2905, -1000, 1000));
    question.answers.length = 0;
    question.num = 245;
    question.isSingleAns = false;
    question.shortTextQuestion = "245. Σημειώστε το σωστό Στη λίστα Save as.. η επιλογή Save Thumbnail  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BI1U4Ovsx2A=', 2907, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αποθηκεύει μικρογραφία εικόνας ως προεπισκόπηση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BI1U4Ovsx2A=', 2909, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αποθηκεύει την εικόνα με αλλαγμένες διαστάσεις";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gS454pXaWQs=', 2911, -1, 1);
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
    var weight = DecodeNumber('dzUG9B0ZgdQ=', 2915, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dzUG9B0ZgdQ=', 2915, -1000, 1000),DecodeDecimal('vW377+eKl8A=', 2915, -1000, 1000),DecodeDecimal('vW377+eKl8A=', 2915, -1000, 1000));
    question.answers.length = 0;
    question.num = 246;
    question.isSingleAns = false;
    question.shortTextQuestion = "246. Σημειώστε το σωστό Στη χρονογραμμή animation  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pw4YR3Q3Qy4=', 2917, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επιλογή επανάληψης καθορίζει τις φορές αναπαραγωγής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pw4YR3Q3Qy4=', 2919, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθορίζει αν γίνει η αναπαραγωγή ή όχι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E8Z1h+uFqBY=', 2921, -1, 1);
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
    var weight = DecodeNumber('SjsoTKIgDME=', 2925, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SjsoTKIgDME=', 2925, -1000, 1000),DecodeDecimal('8/OaTKnDfRo=', 2925, -1000, 1000),DecodeDecimal('8/OaTKnDfRo=', 2925, -1000, 1000));
    question.answers.length = 0;
    question.num = 247;
    question.isSingleAns = false;
    question.shortTextQuestion = "247. Σημειώστε το σωστό Στο πλαίσιο διαλόγου Εκτύπωση, η εκτυπώσιμη περιοχή είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jlQmRwqoP8Q=', 2927, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. λευκή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jlQmRwqoP8Q=', 2929, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μαύρη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oT3lP20MjPI=', 2931, -1, 1);
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
    var weight = DecodeNumber('6HWJBfbAbLM=', 2935, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6HWJBfbAbLM=', 2935, -1000, 1000),DecodeDecimal('EnxQFTXJu/Y=', 2935, -1000, 1000),DecodeDecimal('EnxQFTXJu/Y=', 2935, -1000, 1000));
    question.answers.length = 0;
    question.num = 248;
    question.isSingleAns = false;
    question.shortTextQuestion = "248. Σημειώστε το σωστό Η αλλαγή θέσης μιας εικόνας στο χαρτί γίνεται μέσα από το πλαίσιο διαλόγου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7HeWAQjaWJk=', 2937, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7HeWAQjaWJk=', 2939, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Mut6ttlAFUw=', 2941, -1, 1);
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
    var weight = DecodeNumber('3XcFBIJohPA=', 2945, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3XcFBIJohPA=', 2945, -1000, 1000),DecodeDecimal('CtpDO2t9PAI=', 2945, -1000, 1000),DecodeDecimal('CtpDO2t9PAI=', 2945, -1000, 1000));
    question.answers.length = 0;
    question.num = 249;
    question.isSingleAns = false;
    question.shortTextQuestion = "249. Σημειώστε το σωστό Το πλαίσιο διαλόγου Εκτύπωση περιλαμβάνει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ot+Xp3K8Q64=', 2947, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ορισμό επιλογών εξόδου προεκτύπωσης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ot+Xp3K8Q64=', 2949, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Ορισμό ρύθμισης διαχωρισμού τετραχρωμίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CZU4NGurTZs=', 2951, -1, 1);
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
    var weight = DecodeNumber('iK8xkFlzMAY=', 2955, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iK8xkFlzMAY=', 2955, -1000, 1000),DecodeDecimal('L5vN3KeT59I=', 2955, -1000, 1000),DecodeDecimal('L5vN3KeT59I=', 2955, -1000, 1000));
    question.answers.length = 0;
    question.num = 250;
    question.isSingleAns = false;
    question.shortTextQuestion = "250. Σημειώστε το σωστό Όταν το μέγεθος εικόνας είναι μεγαλύτερο από την εκτυπώσιμη επιφάνεια  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('m35ylM9kG7w=', 2957, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μέσα από το μενού Εκτύπωση επιλέγεται το Προσαρμογή στο μέσο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('m35ylM9kG7w=', 2959, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Μέσα από το μενού Εκτύπωση ρυθμίζεται το μέγεθος της εκτυπώσιμης επιφάνειας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hc1iUM05+oE=', 2961, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OaRzX3Wnw88=', 2963, -1, 1);
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
    var weight = DecodeNumber('4/kDerZq+a8=', 2965, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4/kDerZq+a8=', 2965, -1000, 1000),DecodeDecimal('vVos4uJQGcw=', 2965, -1000, 1000),DecodeDecimal('vVos4uJQGcw=', 2965, -1000, 1000));
    question.answers.length = 0;
    question.num = 251;
    question.isSingleAns = false;
    question.shortTextQuestion = "251. Σημειώστε το σωστό Η κλιμάκωση της εκτυπωμένης εικόνας γίνεται μέσα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nNXIjC4ti+U=', 2967, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Από το πλαίσιο διαλόγου Εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nNXIjC4ti+U=', 2969, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Από το πλαίσιο διαλόγου Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('z6fHtp1Kr40=', 2971, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SoJaSf7q8TY=', 2973, -1, 1);
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
    var weight = DecodeNumber('BOXN1HTwvV8=', 2975, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BOXN1HTwvV8=', 2975, -1000, 1000),DecodeDecimal('sRM6RsLmEn4=', 2975, -1000, 1000),DecodeDecimal('sRM6RsLmEn4=', 2975, -1000, 1000));
    question.answers.length = 0;
    question.num = 252;
    question.isSingleAns = false;
    question.shortTextQuestion = "252. Σημειώστε το σωστό Η διαχείριση χρωμάτων εκτύπωσης γίνεται καλύτερα μέσα από  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yePIm/H87/s=', 2977, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yePIm/H87/s=', 2979, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Τους οδηγούς του εκτυπωτή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XfXJoM/+nnI=', 2981, -1, 1);
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
    var weight = DecodeNumber('CfChkxW76n4=', 2985, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CfChkxW76n4=', 2985, -1000, 1000),DecodeDecimal('48+QLT4Rjkg=', 2985, -1000, 1000),DecodeDecimal('48+QLT4Rjkg=', 2985, -1000, 1000));
    question.answers.length = 0;
    question.num = 253;
    question.isSingleAns = false;
    question.shortTextQuestion = "253. Σημειώστε το σωστό Η επιλογή Αντιστάθμιση μαύρου σημείου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CfChkxW76n4=', 2987, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δεν διατηρεί τις λεπτομέρειες των σκούρων τόνων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5jdVAAnMXE4=', 2989, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Διατηρεί τις λεπτομέρειες των σκούρων τόνων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5jdVAAnMXE4=', 2991, -1, 1);
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
    var weight = DecodeNumber('ISPZAHAc+p8=', 2995, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ISPZAHAc+p8=', 2995, -1000, 1000),DecodeDecimal('IXz8sM7IPkI=', 2995, -1000, 1000),DecodeDecimal('IXz8sM7IPkI=', 2995, -1000, 1000));
    question.answers.length = 0;
    question.num = 254;
    question.isSingleAns = false;
    question.shortTextQuestion = "254. Σημειώστε το σωστό Η επιλογή Προσαρμογή στο μέσο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3JJG199pCM8=', 2997, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσαρμόζει το μέγεθος της εικόνας με το μέγεθος της εκτυπώσιμης επιφάνειας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3JJG199pCM8=', 2999, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσαρμόζει το μέγεθος της εκτυπώσιμης επιφάνειας με το μέγεθος του χαρτιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dley+uaNYes=', 3001, -1, 1);
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
    var weight = DecodeNumber('38ydtSaddUo=', 3005, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('38ydtSaddUo=', 3005, -1000, 1000),DecodeDecimal('4WdV5Spv1Hc=', 3005, -1000, 1000),DecodeDecimal('4WdV5Spv1Hc=', 3005, -1000, 1000));
    question.answers.length = 0;
    question.num = 255;
    question.isSingleAns = false;
    question.shortTextQuestion = "255. Σημειώστε το σωστό Για τον προσδιορισμό των χρωμάτων εκτύπωσης από τον εκτυπωτή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OtGRVsxP2OI=', 3007, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μέσα από το μενού Εκτύπωση γίνεται κλικ στη χρωματική διαχείριση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OtGRVsxP2OI=', 3009, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μέσα από το μενού Ρύθμιση σελίδας γίνεται κλικ στην χρωματική διαχείριση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6OSGwqsZex0=', 3011, -1, 1);
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
    var weight = DecodeNumber('CL2Eu5VrtMc=', 3015, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CL2Eu5VrtMc=', 3015, -1000, 1000),DecodeDecimal('iayU5+5vyYo=', 3015, -1000, 1000),DecodeDecimal('iayU5+5vyYo=', 3015, -1000, 1000));
    question.answers.length = 0;
    question.num = 256;
    question.isSingleAns = false;
    question.shortTextQuestion = "256. Σημειώστε το σωστό Η επιλογή Δοκίμιο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('z2l51kVjbUk=', 3017, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται μέσα στο αναδυόμενο μενού της επιλογής Χρωματική διαχείριση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('z2l51kVjbUk=', 3019, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται μέσα στο πλαίσιο διαλόγου Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2ymxe9tV33M=', 3021, -1, 1);
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
    var weight = DecodeNumber('VX9ZzGx4HIY=', 3025, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VX9ZzGx4HIY=', 3025, -1000, 1000),DecodeDecimal('pKEPhTlup+c=', 3025, -1000, 1000),DecodeDecimal('pKEPhTlup+c=', 3025, -1000, 1000));
    question.answers.length = 0;
    question.num = 257;
    question.isSingleAns = false;
    question.shortTextQuestion = "257. Σημειώστε το σωστό Η επιλογή Γραμμές βαθμονόμησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1IcDM9jwQEk=', 3027, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εκτυπώνει μια κλίμακα του γκρι 11 σταδίων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1IcDM9jwQEk=', 3029, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εκτυπώνει όλα τα χρώματα της εικόνας σε 11 στάδια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u8kuvAo90rU=', 3031, -1, 1);
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
    var weight = DecodeNumber('lqaACupT3Fs=', 3035, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lqaACupT3Fs=', 3035, -1000, 1000),DecodeDecimal('/fAiH4mQHUI=', 3035, -1000, 1000),DecodeDecimal('/fAiH4mQHUI=', 3035, -1000, 1000));
    question.answers.length = 0;
    question.num = 258;
    question.isSingleAns = false;
    question.shortTextQuestion = "258. Σημειώστε το σωστό Τα ημιτονικά ράστερ  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QG6fIXcUfk0=', 3037, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποτελούνται από κουκκίδες που ελέγχουν την ποσότητα μελανιού που τοποθετείται σε ένα σημείο συγκεκριμένο στο πιεστήριο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QG6fIXcUfk0=', 3039, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι σημεία πάνω στην εκτυπωμένη σελίδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('s4eBxBrsDBY=', 3041, -1, 1);
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
    var weight = DecodeNumber('LikZiOh2eoE=', 3045, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LikZiOh2eoE=', 3045, -1000, 1000),DecodeDecimal('Y2eTqDVCqFc=', 3045, -1000, 1000),DecodeDecimal('Y2eTqDVCqFc=', 3045, -1000, 1000));
    question.answers.length = 0;
    question.num = 259;
    question.isSingleAns = false;
    question.shortTextQuestion = "259. Σημειώστε το σωστό Ένας επιτραπέζιος εκτυπωτής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LikZiOh2eoE=', 3047, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν αναπαράγει πιστά τα αποτελέσματα της προεπισκόπησης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kaaERaGc1ec=', 3049, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αναπαράγει πιστά τα αποτελέσματα της προεπισκόπησης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YiZ6NgBSlBs=', 3051, -1, 1);
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
    var weight = DecodeNumber('lXX/fSIJjX0=', 3055, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lXX/fSIJjX0=', 3055, -1000, 1000),DecodeDecimal('6Ew5QrET6e4=', 3055, -1000, 1000),DecodeDecimal('6Ew5QrET6e4=', 3055, -1000, 1000));
    question.answers.length = 0;
    question.num = 260;
    question.isSingleAns = false;
    question.shortTextQuestion = "260. Σημειώστε το σωστό Με την εντολή Προσαρμογή από το μενού Σχήμα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Vob1P86pc3M=', 3057, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ορίζονται νέα σχήματα κουκκίδας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Vob1P86pc3M=', 3059, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσαρμόζονται τα σχήματα στο μέγεθος της εκτυπώσιμης σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fLh5hcqeufs=', 3061, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('r0FSK9Thj7U=', 3063, -1, 1);
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
    var weight = DecodeNumber('z9D9yXnEZSI=', 3065, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('z9D9yXnEZSI=', 3065, -1000, 1000),DecodeDecimal('ilncg4wJoN8=', 3065, -1000, 1000),DecodeDecimal('ilncg4wJoN8=', 3065, -1000, 1000));
    question.answers.length = 0;
    question.num = 261;
    question.isSingleAns = false;
    question.shortTextQuestion = "261. Σημειώστε το σωστό Η εντολή Διαχωρισμοί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BOMPSxQKbAc=', 3067, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει την εκτύπωση καναλιών χρωμάτων σε διαφορετικές σελίδες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BOMPSxQKbAc=', 3069, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την εκτύπωση καναλιών χρωμάτων σε μία σελίδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Fh/wDwcIeJw=', 3071, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5Qr7xNjnHck=', 3073, -1, 1);
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
    var weight = DecodeNumber('ODyE7q30qtM=', 3075, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ODyE7q30qtM=', 3075, -1000, 1000),DecodeDecimal('kwpf5VZKxwc=', 3075, -1000, 1000),DecodeDecimal('kwpf5VZKxwc=', 3075, -1000, 1000));
    question.answers.length = 0;
    question.num = 262;
    question.isSingleAns = false;
    question.shortTextQuestion = "262. Σημειώστε το σωστό Η εντολή Χρώματα επιτύπωσης αφορά  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ODyE7q30qtM=', 3077, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. τρία μη ραστεροποιημένα μελάνια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WbWM3OERRio=', 3079, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. τέσσερα μη ραστεροποιημένα μελάνια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('C16Qsl5gpys=', 3081, -1, 1);
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
    var weight = DecodeNumber('jeIDyLkqjYw=', 3085, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jeIDyLkqjYw=', 3085, -1000, 1000),DecodeDecimal('jRmDNrrO7Y0=', 3085, -1000, 1000),DecodeDecimal('jRmDNrrO7Y0=', 3085, -1000, 1000));
    question.answers.length = 0;
    question.num = 263;
    question.isSingleAns = false;
    question.shortTextQuestion = "263. Σημειώστε το σωστό Μονοτονικές εικόνες είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jeIDyLkqjYw=', 3087, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εικόνες που εκτυπώνονται με μαύρο μελάνι";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Y7GNuqf0G1o=', 3089, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εικόνες που εκτυπώνονται με ένα μπλέ μελάνι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kRg7x42trgw=', 3091, -1, 1);
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
    var weight = DecodeNumber('BT3UtduN5Ys=', 3095, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BT3UtduN5Ys=', 3095, -1000, 1000),DecodeDecimal('u/1ADs6cJKA=', 3095, -1000, 1000),DecodeDecimal('u/1ADs6cJKA=', 3095, -1000, 1000));
    question.answers.length = 0;
    question.num = 264;
    question.isSingleAns = false;
    question.shortTextQuestion = "264. Σημειώστε το σωστό Για την σωστή εκτύπωση των διαχωρισμών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BT3UtduN5Ys=', 3097, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Χρειάζεται η μετατροπή της εικόνας σε RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CFSUQC+ieWI=', 3099, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Χρειάζεται η μετατροπή της εικόνας σε CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CFSUQC+ieWI=', 3101, -1, 1);
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
    var weight = DecodeNumber('Fo4k6jsWOG4=', 3105, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Fo4k6jsWOG4=', 3105, -1000, 1000),DecodeDecimal('siEcdoptKBI=', 3105, -1000, 1000),DecodeDecimal('siEcdoptKBI=', 3105, -1000, 1000));
    question.answers.length = 0;
    question.num = 265;
    question.isSingleAns = false;
    question.shortTextQuestion = "265. Σημειώστε το σωστό Η προεπισκόπηση σε πολυκάναλη λειτουργία χρώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('m7asUp8el0Q=', 3107, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν είναι τόσο ακριβής όσο εκείνη στη λειτουργία διτονικού χρώματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('m7asUp8el0Q=', 3109, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι τόσο ακριβής όσο εκείνη στη λειτουργία διτονικού χρώματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9wu3VQD0qOU=', 3111, -1, 1);
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
    var weight = DecodeNumber('m283qi+zTcg=', 3115, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('m283qi+zTcg=', 3115, -1000, 1000),DecodeDecimal('td8rv818fGU=', 3115, -1000, 1000),DecodeDecimal('td8rv818fGU=', 3115, -1000, 1000));
    question.answers.length = 0;
    question.num = 266;
    question.isSingleAns = false;
    question.shortTextQuestion = "266. Σημειώστε το σωστό Η πραγματική πυκνότητα του μελανιού στον εκτυπωτή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UEYHOAMzV20=', 3117, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζεται με την επιλογή Αδιαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UEYHOAMzV20=', 3119, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσδιορίζεται με την εντολή Πυκνότητα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OYiFlXRGqN8=', 3121, -1, 1);
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
    var weight = DecodeNumber('kiUiPxgfiOk=', 3125, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kiUiPxgfiOk=', 3125, -1000, 1000),DecodeDecimal('88+lWYbGhhk=', 3125, -1000, 1000),DecodeDecimal('88+lWYbGhhk=', 3125, -1000, 1000));
    question.answers.length = 0;
    question.num = 267;
    question.isSingleAns = false;
    question.shortTextQuestion = "267. Σημειώστε το σωστό Το ΡΑΝΤΟΝΕ ή το ΤΟΥΟ είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kiUiPxgfiOk=', 3127, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. πίνακες εργαλείων σχεδιασμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('shGFa6KvD/g=', 3129, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρωματικά σύστηματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('shGFa6KvD/g=', 3131, -1, 1);
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
    var weight = DecodeNumber('VxIBy2ShXcE=', 3135, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VxIBy2ShXcE=', 3135, -1000, 1000),DecodeDecimal('AMcgiHRtWto=', 3135, -1000, 1000),DecodeDecimal('AMcgiHRtWto=', 3135, -1000, 1000));
    question.answers.length = 0;
    question.num = 268;
    question.isSingleAns = false;
    question.shortTextQuestion = "268. Σημειώστε το σωστό Σε περίπτωση απώθησης υποκείμενου χρώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BIje5dwUKjU=', 3137, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να δημιουργηθεί μία συναρμογή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BIje5dwUKjU=', 3139, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να δημιουργηθεί μια συναρμογή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v/Bdyn1Tj3k=', 3141, -1, 1);
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
    var weight = DecodeNumber('B9/bpVaxV/w=', 3145, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B9/bpVaxV/w=', 3145, -1000, 1000),DecodeDecimal('chYRp+1/NnQ=', 3145, -1000, 1000),DecodeDecimal('chYRp+1/NnQ=', 3145, -1000, 1000));
    question.answers.length = 0;
    question.num = 269;
    question.isSingleAns = false;
    question.shortTextQuestion = "269. Σημειώστε το σωστό Τα πλακάτα χρώματα είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aIqjAL8crC8=', 3147, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προαναμεμειγμένα μελάνια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aIqjAL8crC8=', 3149, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μελάνια του μοντέλου τετραχρωμίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CUsF/3zLCRc=', 3151, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μελάνια του μοντέλου τριχρωμίας";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VPJEMagXWJc=', 3153, -1, 1);
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
    var weight = DecodeNumber('Ex8OB0eJVm4=', 3155, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ex8OB0eJVm4=', 3155, -1000, 1000),DecodeDecimal('W/5+S9mdmC4=', 3155, -1000, 1000),DecodeDecimal('W/5+S9mdmC4=', 3155, -1000, 1000));
    question.answers.length = 0;
    question.num = 270;
    question.isSingleAns = false;
    question.shortTextQuestion = "270. Σημειώστε το σωστό Τα πλακάτα χρώματα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ex8OB0eJVm4=', 3157, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιούνται σε ομάδες επιπέδων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0684SBO2fwY=', 3159, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Χρησιμοποιούνται σε μεμονωμένα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2N5fDqMdKfs=', 3161, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρησιμοποιούνται είτε σε μεμονωμένα είτε σε ομάδες επιπέδων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('U0Tf9C2IjZo=', 3163, -1, 1);
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
    var weight = DecodeNumber('RTmhFzeMgSI=', 3165, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RTmhFzeMgSI=', 3165, -1000, 1000),DecodeDecimal('a4EZWN6ifRQ=', 3165, -1000, 1000),DecodeDecimal('a4EZWN6ifRQ=', 3165, -1000, 1000));
    question.answers.length = 0;
    question.num = 271;
    question.isSingleAns = false;
    question.shortTextQuestion = "271. Σημειώστε το σωστό Ένα χρώμα ως δεκαεξαδική τιμή αντιγράφεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wH68c0+1s2E=', 3167, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο πρόχειρο ως παράμετρος HTML COLOR";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wH68c0+1s2E=', 3169, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ως εικόνα JPEG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5VICQpUyXwo=', 3171, -1, 1);
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
    var weight = DecodeNumber('Eiqu+uHwFhg=', 3175, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Eiqu+uHwFhg=', 3175, -1000, 1000),DecodeDecimal('KnQXFmonpXg=', 3175, -1000, 1000),DecodeDecimal('KnQXFmonpXg=', 3175, -1000, 1000));
    question.answers.length = 0;
    question.num = 272;
    question.isSingleAns = false;
    question.shortTextQuestion = "272. Σημειώστε το σωστό Το Zoomify παρέχει τη δυνατότητα να   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oHbMPbPTDJw=', 3177, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εξάγει αρχεία υψηλής ανάλυσης που μπορούν να ανεβούν σε διακομιστή και οι χρήστες να επιλέγουν ένα συγκεκριμένο σημείο και να κάνουν ζουμ για να δουν περισσότερες λεπτομέρειες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oHbMPbPTDJw=', 3179, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εισάγει αρχεία υψηλής ανάλυσης που μπορούν να ανεβούν σε διακομιστή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ITbYrI1b9U4=', 3181, -1, 1);
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
    var weight = DecodeNumber('8ZB3yIiPkOc=', 3185, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8ZB3yIiPkOc=', 3185, -1000, 1000),DecodeDecimal('Ii4JNs4af0U=', 3185, -1000, 1000),DecodeDecimal('Ii4JNs4af0U=', 3185, -1000, 1000));
    question.answers.length = 0;
    question.num = 273;
    question.isSingleAns = false;
    question.shortTextQuestion = "273. Σημειώστε το σωστό Στοιχείο κατάδειξης είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8ZB3yIiPkOc=', 3187, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ένα κουμπί ή μια εικόνα στο πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rP5e+YXY3t8=', 3189, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ένα κουμπί ή μια εικόνα σε μια σελίδα web, που αλλάζει όταν τοποθετηθεί πάνω του ο δείκτης του ποντικιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rP5e+YXY3t8=', 3191, -1, 1);
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
    var weight = DecodeNumber('dKVB7y5jJ6Q=', 3195, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dKVB7y5jJ6Q=', 3195, -1000, 1000),DecodeDecimal('pmvlxHAkqpo=', 3195, -1000, 1000),DecodeDecimal('pmvlxHAkqpo=', 3195, -1000, 1000));
    question.answers.length = 0;
    question.num = 274;
    question.isSingleAns = false;
    question.shortTextQuestion = "274. Σημειώστε το σωστό To Adobe Bridge  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dKVB7y5jJ6Q=', 3197, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι ένα πρόγραμμα για συλλογές χρωμάτων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3ooBjQgLZFU=', 3199, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι πρόγραμμα για συλλογές εργαλείων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MzEC5gnGWio=', 3201, -1, 1);
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
    var weight = DecodeNumber('9MRG/G+0H30=', 3205, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9MRG/G+0H30=', 3205, -1000, 1000),DecodeDecimal('jQKx0vAheM8=', 3205, -1000, 1000),DecodeDecimal('jQKx0vAheM8=', 3205, -1000, 1000));
    question.answers.length = 0;
    question.num = 275;
    question.isSingleAns = false;
    question.shortTextQuestion = "275. Σημειώστε το σωστό Τα επίπεδα χρησιμοποιούνται για να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dWndFmhtZ0U=', 3207, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την εκτέλεση εργασιών όπως η σύνθεση πολλαπλών εικόνων, η προσθήκη κειμένου σε μια εικόνα ή η προσθήκη σχημάτων διανυσματικών γραφικών";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dWndFmhtZ0U=', 3209, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργηθεί μία εικόνα ενιαία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('G901d1XpSsg=', 3211, -1, 1);
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
    var weight = DecodeNumber('ogpgMcbJ5Lw=', 3215, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ogpgMcbJ5Lw=', 3215, -1000, 1000),DecodeDecimal('hlpJXEVDWnk=', 3215, -1000, 1000),DecodeDecimal('hlpJXEVDWnk=', 3215, -1000, 1000));
    question.answers.length = 0;
    question.num = 276;
    question.isSingleAns = false;
    question.shortTextQuestion = "276. Σημειώστε το σωστό Τα slice ανάλογα με το περιεχόμενό τους, κατηγοριοποιούνται σε  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ogpgMcbJ5Lw=', 3217, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Οργανόγραμμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GuaV4rQXA70=', 3219, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Γράφημα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uwXB04u0KCY=', 3221, -1, 1);
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
    var weight = DecodeNumber('n6ystwH8PlY=', 3225, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('n6ystwH8PlY=', 3225, -1000, 1000),DecodeDecimal('QhRACwpInKY=', 3225, -1000, 1000),DecodeDecimal('QhRACwpInKY=', 3225, -1000, 1000));
    question.answers.length = 0;
    question.num = 277;
    question.isSingleAns = false;
    question.shortTextQuestion = "277. Σημειώστε το σωστό Τα αυτόματα slice μετατρέπονται σε  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rCYXpiX+AA0=', 3227, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Slice χρήστη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rCYXpiX+AA0=', 3229, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Slice επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5o+EmZZaB0Q=', 3231, -1, 1);
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
    var weight = DecodeNumber('9te2R25ASeA=', 3235, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9te2R25ASeA=', 3235, -1000, 1000),DecodeDecimal('tUC9TZKjkK4=', 3235, -1000, 1000),DecodeDecimal('tUC9TZKjkK4=', 3235, -1000, 1000));
    question.answers.length = 0;
    question.num = 278;
    question.isSingleAns = false;
    question.shortTextQuestion = "278. Σημειώστε το σωστό (μπορεί να είναι περισσότερα από ένα) Το slice επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9te2R25ASeA=', 3237, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να διαιρεθεί";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gI2IZSz+X7c=', 3239, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να διαιρεθεί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gI2IZSz+X7c=', 3241, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαιρείται μόνο καθέτως";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1GuealCBCsw=', 3243, -1, 1);
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
    var weight = DecodeNumber('far3Rsdi0bA=', 3245, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('far3Rsdi0bA=', 3245, -1000, 1000),DecodeDecimal('maaiVg/xzgw=', 3245, -1000, 1000),DecodeDecimal('maaiVg/xzgw=', 3245, -1000, 1000));
    question.answers.length = 0;
    question.num = 279;
    question.isSingleAns = false;
    question.shortTextQuestion = "279. Σημειώστε το σωστό (μπορεί να είναι περισσότερα από ένα) Η εμφάνιση των αριθμών slice  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/VgVCA0rSIY=', 3247, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Γίνεται μέσα από το μενού Προτιμήσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/VgVCA0rSIY=', 3249, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Γίνεται μέσα από το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/BAAo/9EEiA=', 3251, -1, 1);
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
    var weight = DecodeNumber('02LKkqjh4/w=', 3255, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('02LKkqjh4/w=', 3255, -1000, 1000),DecodeDecimal('e/lBObSxPpY=', 3255, -1000, 1000),DecodeDecimal('e/lBObSxPpY=', 3255, -1000, 1000));
    question.answers.length = 0;
    question.num = 280;
    question.isSingleAns = false;
    question.shortTextQuestion = "280. Σημειώστε το σωστό Ένα από τα σήματα slice σημαίνει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Um8lRBep6zU=', 3257, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περιέχει εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Um8lRBep6zU=', 3259, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. περιέχει επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J0FkHwWL8Os=', 3261, -1, 1);
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
    var weight = DecodeNumber('r/YB5Nkn2FI=', 3265, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r/YB5Nkn2FI=', 3265, -1000, 1000),DecodeDecimal('h7ynIt0/7h0=', 3265, -1000, 1000),DecodeDecimal('h7ynIt0/7h0=', 3265, -1000, 1000));
    question.answers.length = 0;
    question.num = 281;
    question.isSingleAns = false;
    question.shortTextQuestion = "281. Σημειώστε το σωστό Με την επιλογή τύπου slice «Καμία Εικόνα»  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GdpvPu/usWw=', 3267, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να εισαχθεί κείμενο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GdpvPu/usWw=', 3269, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να εισαχθεί με τα τυπικά tag HTML";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/ynyomW/QfA=', 3271, -1, 1);
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
    var weight = DecodeNumber('/9blrdZHfsw=', 3275, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/9blrdZHfsw=', 3275, -1000, 1000),DecodeDecimal('eV0J+IQgh8Q=', 3275, -1000, 1000),DecodeDecimal('eV0J+IQgh8Q=', 3275, -1000, 1000));
    question.answers.length = 0;
    question.num = 282;
    question.isSingleAns = false;
    question.shortTextQuestion = "282. Σημειώστε το σωστό Μπορούμε να ορίσουμε μηνύματα προγραμμάτων περιήγησης μέσα από  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sT6K+8CdOmM=', 3277, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το μενού Επιλογές slice";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sT6K+8CdOmM=', 3279, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BcKaJi9e7Jo=', 3281, -1, 1);
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
    var weight = DecodeNumber('uwUHtFNH9DU=', 3285, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uwUHtFNH9DU=', 3285, -1000, 1000),DecodeDecimal('SvlxSER+E+A=', 3285, -1000, 1000),DecodeDecimal('SvlxSER+E+A=', 3285, -1000, 1000));
    question.answers.length = 0;
    question.num = 283;
    question.isSingleAns = false;
    question.shortTextQuestion = "283. Σημειώστε το σωστό Η σειρά στοίβαξης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TxFI65C/zZw=', 3287, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να αλλάξει";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TxFI65C/zZw=', 3289, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να αλλάξει";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QsHcX2blOkk=', 3291, -1, 1);
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
    var weight = DecodeNumber('FdIkcKVAwTw=', 3295, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FdIkcKVAwTw=', 3295, -1000, 1000),DecodeDecimal('mC81/flW2s0=', 3295, -1000, 1000),DecodeDecimal('mC81/flW2s0=', 3295, -1000, 1000));
    question.answers.length = 0;
    question.num = 284;
    question.isSingleAns = false;
    question.shortTextQuestion = "284. Σημειώστε το σωστό Ο συνδυασμός slice γίνεται μόνο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FdIkcKVAwTw=', 3297, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε slice χρήστη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NllYZ9UO7dM=', 3299, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε slice επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zBEOab4cP1I=', 3301, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε slice αυτόματο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NRn6nc4aTSs=', 3303, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('NRn6nc4aTSs=', 3305, -1, 1);
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
    var weight = DecodeNumber('G3fJzRtnjlw=', 3305, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('G3fJzRtnjlw=', 3305, -1000, 1000),DecodeDecimal('txwGZjWVVr4=', 3305, -1000, 1000),DecodeDecimal('txwGZjWVVr4=', 3305, -1000, 1000));
    question.answers.length = 0;
    question.num = 285;
    question.isSingleAns = false;
    question.shortTextQuestion = "285. Σημειώστε το σωστό Το κλείδωμα όλων των slice γίνεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6IYiEsMZmcg=', 3307, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από την επιλογή Προβολή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6IYiEsMZmcg=', 3309, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. μέσα από το πλαίσιο διαλόγου Αποθήκευση για web & συσκευές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mLkNzumOGVM=', 3311, -1, 1);
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
    this[0] = unescape(DecodeString("e6V238TDEOHm9tMYx0ezaitvzNj3lacELWIxYL69pMOMNaP0HExoKkbFPSsyU9iaZOkQJktuXnYDIoYl"));
    this[1] = unescape(DecodeString("lXe6wlY2wrR5clbnYyWijGf0lhNgc9+QztYnJV2LYoUtKize/zJWKfUKPpHESav9y6PLnRP0XA4amh/7"));
    this[2] = unescape(DecodeString("NON5vLFrOe5GGTN6gUGnovxyJ7acpLt5/45Pqgrk3pLMejne3cdfNHgfvU1kru5vcQB7uQ=="));

}

/* Code generated function */
function CreateListRight15()
{
    this.length = 3;
    this[0] = unescape(DecodeString("8Q8M2cJKdi2nipvm8ayNARx8A+8Zi4yM3Yw9YQSnrLmXgIVc79Ai9hyvSROzjYhr"));
    this[1] = unescape(DecodeString("BI8M4aKi6TDpfe/rEKX1f1jdxKPV6Pk20liB/4QuEnC3ylPoiao2H+RnS7sz7rQzX/UYh2FK8RspNW3Uza0xKVK/k1QPPefkqJMkgw=="));
    this[2] = unescape(DecodeString("HM1r/QqLEMM03QU11txjCE4WYAUBs9VvKX9XZyZ+Egh42HJlsEigL3NqMWA0T9wcW/5dnz1sCqdI58+TFYsLH3M+Zv6JXB6YGomvCXAs5MvA1qQeYrjSXwY94jwKfi+kdAPsRuWizfzsErsknBno/uVgxJwsTLDLj2RJBw=="));

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
    this[0] = unescape(DecodeString("tDk/he6m/qo="));
    this[1] = unescape(DecodeString("sz4vX2XMY/k="));
    this[2] = unescape(DecodeString("e7F5m7w+CRg="));
    this[3] = unescape(DecodeString("0GLC1CUgfXg="));
    this[4] = unescape(DecodeString("f3Fg8rb4pJs="));

}

/* Code generated function */
function CreateListRight33()
{
    this.length = 5;
    this[0] = unescape(DecodeString("pToVQkV2jKAXpdHw/TSEgzRBoAnauOH11j8OaQ=="));
    this[1] = unescape(DecodeString("Vorc5ro4BaLwmxqSwgn4BGFo7lX8xSid"));
    this[2] = unescape(DecodeString("Vorc5ro4BaLwmxqSwgn4BGFo7lX8xSid"));
    this[3] = unescape(DecodeString("pToVQkV2jKAXpdHw/TSEgzRBoAnauOH11j8OaQ=="));
    this[4] = unescape(DecodeString("Vorc5ro4BaLwmxqSwgn4BGFo7lX8xSid"));

}

/* Code generated function */
function CreateListLeftHtml33()
{
    this.length = 5;

}





