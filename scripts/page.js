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
    var weight = DecodeNumber('WwNME0zI2NU=', 960, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WwNME0zI2NU=', 960, -1000, 1000),DecodeDecimal('pckIWqjl2mg=', 960, -1000, 1000),DecodeDecimal('pckIWqjl2mg=', 960, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = " 1. Σημειώστε τα στοιχεία (2) που δεν περιλαμβάνονται στον παρακάτω ορισμό Ένα μήνυμα οπτικής επικοινωνίας περιλαμβάνει:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WwNME0zI2NU=', 962, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. σύμβολα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IvSFMYK4Pzg=', 964, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. ομιλίες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IvSFMYK4Pzg=', 966, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. γραπτά κείμενα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BSI72S6sinY=', 968, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ εικόνες";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('8WaJlwCmge4=', 970, -1, 1);
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
    var weight = DecodeNumber('8WaJlwCmge4=', 970, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8WaJlwCmge4=', 970, -1000, 1000),DecodeDecimal('53oy8iMhIfY=', 970, -1000, 1000),DecodeDecimal('53oy8iMhIfY=', 970, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = " 2. Σημειώστε το στοιχείο (1) που δεν περιλαμβάνεται στον παρακάτω ορισμό. Σύμφωνα με τον Ο Argyle(1988) υπάρχουν οι παρακάτω λειτουργίες της μη λεκτικής επικοινωνίας:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8WaJlwCmge4=', 972, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Έκφραση συναισθημάτων  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wDyRaCKcrzo=', 974, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Έκφραση στάσεων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IySX/quEBiQ=', 976, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Επεξήγηση λεκτικού μηνύματος  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IySX/quEBiQ=', 978, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ Παρουσίαση της προσωπικότητας    ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('XeO3WrBiL3I=', 980, -1, 1);
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
    var weight = DecodeNumber('x5pZEguEsFA=', 980, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x5pZEguEsFA=', 980, -1000, 1000),DecodeDecimal('jHEAT9qF6nY=', 980, -1000, 1000),DecodeDecimal('jHEAT9qF6nY=', 980, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = " 3. Σημειώστε το στοιχείο που είναι σωστό";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ppDHgCSDDbE=', 982, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. η οριζόντια γραμμή δείχνει ψυχική ηρεμία και αδράνεια  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Av58OezgAiY=', 820, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. η οριζόντια γραμμή δείχνει συναισθηματική φόρτιση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UbSwpkXet7M=', 822, -1, 1);
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
    var weight = DecodeNumber('b4HKystvIsM=', 826, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b4HKystvIsM=', 826, -1000, 1000),DecodeDecimal('lEjTy6ieVM0=', 826, -1000, 1000),DecodeDecimal('lEjTy6ieVM0=', 826, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = " 4. Σημειώστε τα στοιχεία (3) που δεν περιλαμβάνονται στον παρακάτω ορισμό. Οι βασικές φόρμες, σύμφωνα με τον Καντίνσκι (1996, σ.74) είναι:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bep7qc2swaY=', 828, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. το ισόπλευρο τρίγωνο  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bep7qc2swaY=', 830, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. το τετράγωνο  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mYGC/fCqT0o=', 832, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το ορθογώνιο παραλληλόγραμμο  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LAy6TnMzE18=', 834, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = " Δ. ο κύκλος    ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('tbBjhiEm//Y=', 836, -1, 1);
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
    var weight = DecodeNumber('tbBjhiEm//Y=', 836, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tbBjhiEm//Y=', 836, -1000, 1000),DecodeDecimal('kQRPSZWRPk4=', 836, -1000, 1000),DecodeDecimal('kQRPSZWRPk4=', 836, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = " 5. Κυκλώστε το σωστό στην παρακάτω πρόταση Η Γραφιστική σύνθεση αφορά στην τοποθέτηση οπτικών στοιχείων σε ένα κάδρο. Αυτό σημαίνει ότι ο προβληματισμός του σχεδιαστή επικεντρώνεται στην:      ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tbBjhiEm//Y=', 838, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Δημιουργία οπτικών συσχετισμών μεταξύ των οπτικών στοιχείων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vlSS70QEuhI=', 840, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Δημιουργία εννοιολογικών συσχετισμών  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ld1dw+QBpKY=', 842, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Τίποτα από τα δύο (Α και Β)";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xJnlcDki7ag=', 844, -1, 1);
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
    var weight = DecodeNumber('8q6DRumlX00=', 846, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8q6DRumlX00=', 846, -1000, 1000),DecodeDecimal('7VFKZ708R80=', 846, -1000, 1000),DecodeDecimal('7VFKZ708R80=', 846, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = " 6. Κυκλώστε την σωστή συνέχεια (1) της πρότασης παρακάτω Με τον όρο φόρμα στην γραφιστική σύνθεση ορίζουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YM8y3y+HDsU=', 848, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Μια περιοχή που οριοθετείται από μια κλειστή γραμμή και περιγράφει ένα τρισδιάστοτο αντικείμενο.  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YM8y3y+HDsU=', 850, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Μια περιοχή που περιλαμβάνει μία σειρά σημείων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MvCFvXZ9mvg=', 852, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. Μια σειρά σημείων που αν τα ενώσουμε μπορεί να ορίσουν μια ή περισσότερες γραμμές";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gwFpKlnFXOU=', 854, -1, 1);
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
    var weight = DecodeNumber('96N/QpBtyr0=', 856, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('96N/QpBtyr0=', 856, -1000, 1000),DecodeDecimal('ljpzXjKhhPA=', 856, -1000, 1000),DecodeDecimal('ljpzXjKhhPA=', 856, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = " 7. Κυκλώστε την σωστή πρόταση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('96N/QpBtyr0=', 858, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Η αντιφόρμα ορίζει μια περιοχή αντίστροφη της φόρμας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QK9To8jAELs=', 860, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Η αντιφόρμα είναι συμμετρική της φόρμας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0/jObh15J4Q=', 862, -1, 1);
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
    var weight = DecodeNumber('Az9g5ZqzL1o=', 866, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Az9g5ZqzL1o=', 866, -1000, 1000),DecodeDecimal('UfAnX1NmZEM=', 866, -1000, 1000),DecodeDecimal('UfAnX1NmZEM=', 866, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = " 8. Κυκλώστε το χαρακτηριστικό που δεν αποδίδει καθαρά την παρακάτω φράση: Το κύριο χαρακτηριστικό μίας στυλιζαρισμένης εικόνας είναι:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Az9g5ZqzL1o=', 868, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Καθαρά σχήματα  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9Dj1Ph+MFSE=', 870, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Λίγα και πλακάτα χρώματα.  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Yi3PAwQca/Q=', 872, -1, 1);
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
    var weight = DecodeNumber('CEgXtOz31Ww=', 876, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CEgXtOz31Ww=', 876, -1000, 1000),DecodeDecimal('xzdYN/FyfGM=', 876, -1000, 1000),DecodeDecimal('xzdYN/FyfGM=', 876, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = " 9. Επιλέξτε τη σωστή φράση Η επιτυχία στην απλοποίηση μίας στυλιζαρισμένης εικόνας δεν εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CEgXtOz31Ww=', 878, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Από το πλήθος των σχημάτων  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('llZ5b7mDE/I=', 880, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Από το χρώμα των σχημάτων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('llZ5b7mDE/I=', 882, -1, 1);
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
    var weight = DecodeNumber('vVVIUagzcck=', 886, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vVVIUagzcck=', 886, -1000, 1000),DecodeDecimal('aLeKsUkfgeY=', 886, -1000, 1000),DecodeDecimal('aLeKsUkfgeY=', 886, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = " 10. Σημειώστε το σωστό στοιχείο :    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vVVIUagzcck=', 888, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Το σημαίνον είναι το αντικείμενο  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('293H87mPcVA=', 890, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Το σημαίνον είναι το στοιχείο μέσα στην σύνθεση  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jQ0OW2K2yjU=', 892, -1, 1);
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
    var weight = DecodeNumber('mB4YKZiJZwk=', 896, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mB4YKZiJZwk=', 896, -1000, 1000),DecodeDecimal('CpF52XdEWhw=', 896, -1000, 1000),DecodeDecimal('CpF52XdEWhw=', 896, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = " 11. Σύμφωνα με τη σημειωτική θεωρία:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('exvTa6dyvgE=', 898, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Ο θεατής είναι ασταθής αλλά ικανός να αντιδράσει στην θέα μιας εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('exvTa6dyvgE=', 900, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Συμμετέχει ενεργά στη δημιουργία μιας εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Uk8Y8Ax0aMc=', 902, -1, 1);
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
    var weight = DecodeNumber('8JaPGl6XkGA=', 906, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8JaPGl6XkGA=', 906, -1000, 1000),DecodeDecimal('xrv/bdbQXcg=', 906, -1000, 1000),DecodeDecimal('xrv/bdbQXcg=', 906, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = " 12. Σημειώστε τις σημαντικές παραμέτρους της αφήγησης:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kDLTpBPmDCo=', 908, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. μέσο μετάδοσης της πληροφορίας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LnvE1C4FKrE=', 910, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. σχέδιο-οργάνωση της πληροφορίας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LnvE1C4FKrE=', 912, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. ιστορία  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('C9ODiqSPAtU=', 914, -1, 1);
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
    var weight = DecodeNumber('OGRFdr02R/Q=', 916, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OGRFdr02R/Q=', 916, -1000, 1000),DecodeDecimal('0g1D6Vy7RHI=', 916, -1000, 1000),DecodeDecimal('0g1D6Vy7RHI=', 916, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = " 13. Σημειώστε το σωστό στοιχείο:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XCUdSENB4pg=', 918, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Ο Μετζ θεωρεί ότι ο θεατής ταυτίζεται με αυτό που βλέπει  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XCUdSENB4pg=', 920, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " B. Lacan θεωρεί ότι ο θεατής ταυτίζεται με αυτό που βλέπει  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UMUp/xUfePs=', 922, -1, 1);
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
    var weight = DecodeNumber('mEB1afpNWJE=', 926, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mEB1afpNWJE=', 926, -1000, 1000),DecodeDecimal('YgWyDHOtO1o=', 926, -1000, 1000),DecodeDecimal('YgWyDHOtO1o=', 926, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = " 14. Όσο μεγαλύτερο είναι το βάθος χρώματος,    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uSXQ5AVS3Jw=', 928, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Τόσο μεγαλύτερη είναι η χρωματική πληροφορία μιας εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uSXQ5AVS3Jw=', 930, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Τόσο καλύτερη είναι η ευκρίνεια μιας εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+Ru91klviho=', 932, -1, 1);
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
    var weight = DecodeNumber('/EgvS902RZc=', 936, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/EgvS902RZc=', 936, -1000, 1000),DecodeDecimal('hBZXR5QDSV0=', 936, -1000, 1000),DecodeDecimal('hBZXR5QDSV0=', 936, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = " 15. Κυκλώστε την επιλογή που δεν ανταποκρίνεται απόλυτα στην παρακάτω παραδοχή: Η επιλογή του βάθους χρώματος εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/EgvS902RZc=', 938, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. τη συσκευή προβολής  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IqT1w6jpsdI=', 940, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. το μέσο προβολής  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('McdXzjU0odM=', 942, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το επιθυμητό κοντράστ και την ευκρίνεια της εικόνας  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('McdXzjU0odM=', 944, -1, 1);
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
    var weight = DecodeNumber('cuxFd5isWCQ=', 946, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cuxFd5isWCQ=', 946, -1000, 1000),DecodeDecimal('+aJ0XbQjYjw=', 946, -1000, 1000),DecodeDecimal('+aJ0XbQjYjw=', 946, -1000, 1000));
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
    var weight = DecodeNumber('yuhLpovh3Po=', 956, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yuhLpovh3Po=', 956, -1000, 1000),DecodeDecimal('bUkYNukIuwk=', 956, -1000, 1000),DecodeDecimal('bUkYNukIuwk=', 956, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = " 17. Κυκλώστε το σωστό Ο κορεσμός ενός χρώματος αναφέρεται    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NwAaqI9UlXg=', 958, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. στην \"καθαρότητα\" του χρώματος σε σχέση με το απλό, που καθορίζει την απόχρωσή του  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NwAaqI9UlXg=', 960, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. στον συνδυασμό των καθαρών χρωμάτων  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WwNME0zI2NU=', 962, -1, 1);
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
    var weight = DecodeNumber('BSI72S6sinY=', 966, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BSI72S6sinY=', 966, -1000, 1000),DecodeDecimal('hf0HVmAaA6I=', 966, -1000, 1000),DecodeDecimal('hf0HVmAaA6I=', 966, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = " 18. Κυκλώστε το σωστό Η Χροιά προσδιορίζει    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BSI72S6sinY=', 968, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Εκείνο από τα απλά χρώματα, που \"συνεισφέρουν\" σε μεγαλύτερο ποσοστό στη δημιουργία ενός σύνθετου χρώματος  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KaeKXByRSV0=', 970, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Τις τονικές διαβαθμισεις του χρώματος  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wDyRaCKcrzo=', 972, -1, 1);
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
    var weight = DecodeNumber('IySX/quEBiQ=', 976, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IySX/quEBiQ=', 976, -1000, 1000),DecodeDecimal('enkG9hMuNi0=', 976, -1000, 1000),DecodeDecimal('enkG9hMuNi0=', 976, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = " 19. Κυκλώστε το σωστό στην παρακάτω πρόταση 24 bit βάθος χρώματος αντιστοιχούν σε:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IySX/quEBiQ=', 978, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. 256 χρώματα  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XeO3WrBiL3I=', 980, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. 256 Χ 24 = 6.144 χρώματα  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ppDHgCSDDbE=', 982, -1, 1);
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
    var weight = DecodeNumber('Nz7OIdk35hs=', 986, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Nz7OIdk35hs=', 986, -1000, 1000),DecodeDecimal('ltLAgWftcIo=', 986, -1000, 1000),DecodeDecimal('ltLAgWftcIo=', 986, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = " 20. Κυκλώστε το σωστό στην παρακάτω πρόταση Τα χρώματα στις ηλεκτρονικές συσκευές δημιουργούνται με συνδυασμό των ακτινοβολιών    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Nz7OIdk35hs=', 988, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. κόκκινης της μπλε και της κίτρινης  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('q4jV7c0uM1E=', 990, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. κόκκινης της πράσινης και της μπλε  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q4jV7c0uM1E=', 992, -1, 1);
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
    var weight = DecodeNumber('GO1jaTu9mxs=', 996, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GO1jaTu9mxs=', 996, -1000, 1000),DecodeDecimal('Z+pKooAPkHs=', 996, -1000, 1000),DecodeDecimal('Z+pKooAPkHs=', 996, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = " 21. Ποια από τις παρακάτω εκδοχές ισχύει: Η ψηφιοποίηση (digitization) εικόνων από αναλογική σε ψηφιακή μορφή είναι    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kWkXJzzcHCA=', 998, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Η μετατροπή των αναλογικών εικόνων σε ψηφιακή μορφή  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kWkXJzzcHCA=', 1000, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Η διαδικασία επεξεργασίας αφού μεταφερθούν σε ψηφιακά μέσα  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Pcewtjnr3FM=', 1002, -1, 1);
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
    var weight = DecodeNumber('Q8TcOmEJbZU=', 1006, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q8TcOmEJbZU=', 1006, -1000, 1000),DecodeDecimal('gEmcgwoE1nw=', 1006, -1000, 1000),DecodeDecimal('gEmcgwoE1nw=', 1006, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = " 22. Κυκλώστε το λάθος Η ψηφιοποίηση εικόνων από αναλογική μορφή γίνεται    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q8TcOmEJbZU=', 1008, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. με τη βοήθεια σαρωτών  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hlLQak0THIA=', 1010, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. απευθείας με τη χρήση ψηφιακών φωτογραφικών μηχανών.  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bgRFoFQksXA=', 1012, -1, 1);
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
    var weight = DecodeNumber('EZ0w1clSf0w=', 1016, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('EZ0w1clSf0w=', 1016, -1000, 1000),DecodeDecimal('3tzllHL+c+4=', 1016, -1000, 1000),DecodeDecimal('3tzllHL+c+4=', 1016, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = " 23. Κυκλώστε το σωστό. Κατά τη διαδικασία ψηφιοποίησης η εικόνα μετατρέπεται σε ακολουθίες δυαδικών ψηφίων. που συμβολίζουν    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9MvmPllRPXQ=', 1018, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Την τιμή χρώματος κάθε pixel σε κάθε σημείο της εικόνας  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9MvmPllRPXQ=', 1020, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Το μέγεθος ενός pixel σε ένα σημείο της εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lDO0UUfYh6U=', 1022, -1, 1);
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
    var weight = DecodeNumber('/f9PgWQAUDo=', 1026, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/f9PgWQAUDo=', 1026, -1000, 1000),DecodeDecimal('hV+hewsE4CM=', 1026, -1000, 1000),DecodeDecimal('hV+hewsE4CM=', 1026, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = " 24. Κυκλώστε το λάθος. Ο αποθηκευτικός χώρος που απαιτείται για μια εικόνα, εξαρτάται από:    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/f9PgWQAUDo=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. τη μορφή αποθήκευσης των δεδομένων,  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('heiXM054O+w=', 1030, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. την ύπαρξη ή όχι χρώματος  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PzZjhTr7AKQ=', 1032, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = " Γ. το περιεχόμενο της εικόνας  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PzZjhTr7AKQ=', 1034, -1, 1);
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
    var weight = DecodeNumber('aWydtAcVgaw=', 1036, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aWydtAcVgaw=', 1036, -1000, 1000),DecodeDecimal('rIG59Vmg+x4=', 1036, -1000, 1000),DecodeDecimal('rIG59Vmg+x4=', 1036, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "25. Κύκλωσε την λανθασμένη παραδοχή.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aWydtAcVgaw=', 1038, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = " Α. Όσο περισσότερα εικονοστοιχεία υπάρχουν σε μία εικόνα τόσο μεγαλύτερο είναι το μέγεθος αρχείου της εικόνας.  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pgjwZyilthY=', 1040, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = " Β. Ο αριθμός των εικονοστοιχείων στη μονάδα του μήκους αναφέρεται ως ανάλυση (resolution) της εικόνας  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('laI1Psbv+Io=', 1042, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "   Γ. Ο αριθμός των εικονοστοιχείων στη μονάδα του μήκους εκφράζεται σε εικονοστοιχεία ανά ίντσα (ppi  pixels per inch).  ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HyYKsgmfDig=', 1044, -1, 1);
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
    var weight = DecodeNumber('9Pmt13bq/E8=', 405, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9Pmt13bq/E8=', 405, -1000, 1000),DecodeDecimal('Ak5rjZcp3KI=', 405, -1000, 1000),DecodeDecimal('Ak5rjZcp3KI=', 405, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "26. Τα αρχεία BMP αφορούν:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8FiH7EF2tBw=', 407, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αρχείο Εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8FiH7EF2tBw=', 409, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αρχείο Κείμενου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ux0pBrrWkgk=', 411, -1, 1);
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
    var weight = DecodeNumber('0B9c9ZJBY5c=', 415, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0B9c9ZJBY5c=', 415, -1000, 1000),DecodeDecimal('jE6aNP8QcoU=', 415, -1000, 1000),DecodeDecimal('jE6aNP8QcoU=', 415, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "27. Ποιος από τους παρακάτω τύπους αποθήκευσης εικόνας υποστηρίζει τη διαφάνεια:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0B9c9ZJBY5c=', 417, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xh1R9D7tHyY=', 419, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xh1R9D7tHyY=', 421, -1, 1);
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
    var weight = DecodeNumber('1Ja1GwQVwRk=', 425, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1Ja1GwQVwRk=', 425, -1000, 1000),DecodeDecimal('UeggWqGIy0E=', 425, -1000, 1000),DecodeDecimal('UeggWqGIy0E=', 425, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "28. Ποιος από τους παρακάτω τύπους αποθήκευσης εικόνας δίνει αίσθηση κίνησης:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1Ja1GwQVwRk=', 427, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4Xyp1wI6BEE=', 429, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. PNG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cvXj/L7+1S8=', 431, -1, 1);
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
    var weight = DecodeNumber('ggwv9G7AgVU=', 435, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ggwv9G7AgVU=', 435, -1000, 1000),DecodeDecimal('90ewJySRFWU=', 435, -1000, 1000),DecodeDecimal('90ewJySRFWU=', 435, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "29. Κυκλώστε το σωστό Αν τα βάζαμε σε μία «ζυγαριά», το πιο σημαντικό πλεονέκτημα του photoshop σε σχέση με ερασιτεχνικά προγράμματα, όπως το αντίστοιχο του office των windows είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ggwv9G7AgVU=', 437, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η δυνατότητα διαμόρφωσης της επιφάνειας εργασίας κατά το δοκούν";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zqiZ52ir6N4=', 439, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η μεγάλη γκάμα στην επιλογή των πινέλων ζωγραφικής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Yr7bRgG9IPw=', 441, -1, 1);
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
    var weight = DecodeNumber('bO1rimDH+zA=', 445, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bO1rimDH+zA=', 445, -1000, 1000),DecodeDecimal('LtZ6ZwCe6J4=', 445, -1000, 1000),DecodeDecimal('LtZ6ZwCe6J4=', 445, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "30. Κυκλώστε το σωστό Τις παλέτες μπορούμε να τις κρύβουμε και να τις εμφανίζουμε από το μενού:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bO1rimDH+zA=', 447, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Edit";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jC9y/b6NzwU=', 449, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Window.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jC9y/b6NzwU=', 451, -1, 1);
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
    var weight = DecodeNumber('Qgwo99Kbe/c=', 455, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Qgwo99Kbe/c=', 455, -1000, 1000),DecodeDecimal('nylXiiC9Lp8=', 455, -1000, 1000),DecodeDecimal('nylXiiC9Lp8=', 455, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "31. Σημειώστε το σωστό στοιχείο : Ο σαρωτής έχει την δυνατότητα να:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OUGOWCB2MO0=', 457, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να διορθώνει χρωματικά τις εικόνες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OUGOWCB2MO0=', 459, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να διαχωρίζει τα στοιχεία από το φόντο της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FXyDGkKRULg=', 461, -1, 1);
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
    var weight = DecodeNumber('FmgGKXIUhDo=', 465, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FmgGKXIUhDo=', 465, -1000, 1000),DecodeDecimal('u3PUqKyOSQA=', 465, -1000, 1000),DecodeDecimal('u3PUqKyOSQA=', 465, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "32. Σημειώστε τα σωστά στοιχεία Η σαρωμένη εικόνα αποθηκεύεται σε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rV7rRYmkXls=', 467, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. BMP";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WB52ueOe4uA=', 469, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B.TIFF";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WB52ueOe4uA=', 471, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. PNG";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('La8pEx18JgU=', 473, -1, 1);
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
    var weight = DecodeNumber('kfu0gY/nd6w=', 475, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kfu0gY/nd6w=', 475, -1000, 1000),DecodeDecimal('AwS4M8IA2/c=', 475, -1000, 1000),DecodeDecimal('AwS4M8IA2/c=', 475, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "33. Σημειώστε το σωστό στοιχείο Η κάρτα γραφικών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gdWefHswKW4=', 477, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι υπεύθυνη για την απεικόνιση δεδομένων στην οθόνη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gdWefHswKW4=', 479, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι υπεύθυνη για την επεξεργασία εικόνων και γραφικών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fOwnvQsNoyM=', 481, -1, 1);
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
    var weight = DecodeNumber('ff9J4r/K3DM=', 485, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ff9J4r/K3DM=', 485, -1000, 1000),DecodeDecimal('r4ihyTsI73Q=', 485, -1000, 1000),DecodeDecimal('r4ihyTsI73Q=', 485, -1000, 1000));
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
    var weight = DecodeNumber('lIubbBGf91E=', 495, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lIubbBGf91E=', 495, -1000, 1000),DecodeDecimal('td8biV8FmIQ=', 495, -1000, 1000),DecodeDecimal('td8biV8FmIQ=', 495, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "35. Σημειώστε τα χαρακτηριστικά της κάρτας γραφικών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lIubbBGf91E=', 497, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να είναι συμβατή με το δίσκο του ηλεκτρονικού υπολογιστή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('n93CXay+8v4=', 499, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να έχει μεγάλη μνήμη και ανάλυση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n93CXay+8v4=', 501, -1, 1);
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
    var weight = DecodeNumber('kDLD9zNR59k=', 505, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kDLD9zNR59k=', 505, -1000, 1000),DecodeDecimal('g3oxMBohOS0=', 505, -1000, 1000),DecodeDecimal('g3oxMBohOS0=', 505, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "36. Σημειώστε το σωστό Η μηχανή λήψης μιας εικόνας μπορεί να αποθηκεύσει σε αρχεία raw, επειδή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kDLD9zNR59k=', 507, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η εικόνα μπορεί να επεξεργαστεί μόνο από το πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mEQ/Al0nneg=', 509, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. η εικόνα μπορεί να επεξεργαστεί μόνο από το πρόγραμμα Corel";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oN6jaHiRvbo=', 511, -1, 1);
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
    var weight = DecodeNumber('ixGMCMQWhI8=', 515, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ixGMCMQWhI8=', 515, -1000, 1000),DecodeDecimal('jbhAfLtjuS8=', 515, -1000, 1000),DecodeDecimal('jbhAfLtjuS8=', 515, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "37. Σημειώστε το σωστό Μια εικόνα όταν αποθηκεύεται σε μορφή TIFF και όχι σε JPEG  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J25ufbfvHrg=', 517, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. υποστηρίζει τη δυνατότητα layers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J25ufbfvHrg=', 519, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καταλαμβάνει μικρότερο χώρο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E6vDkCRptbw=', 521, -1, 1);
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
    var weight = DecodeNumber('qWlEGHJZzAM=', 525, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qWlEGHJZzAM=', 525, -1000, 1000),DecodeDecimal('+UQ9GwAtG0o=', 525, -1000, 1000),DecodeDecimal('+UQ9GwAtG0o=', 525, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "38. Σημειώστε το σωστό Οι εκτυπωτές laser  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qWlEGHJZzAM=', 527, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. είναι φθηνότεροι σε σχέση με άλλους εκτυπωτές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8QyY4NIIm5I=', 529, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι αργοί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('We/HMUMwEOo=', 531, -1, 1);
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
    var weight = DecodeNumber('S7Fce9vG0d8=', 535, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('S7Fce9vG0d8=', 535, -1000, 1000),DecodeDecimal('gSonmVxjlvA=', 535, -1000, 1000),DecodeDecimal('gSonmVxjlvA=', 535, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "39. Σημειώστε το σωστό. Η γραμμή του βασικού μενού εντολών σε όλα τα προγράμματα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VfQfaecGpMk=', 537, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται πάνω από την επιφάνεια επεξεργασίας ψηφιακής εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VfQfaecGpMk=', 539, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στο Flash η γραμμή μενού βρίσκεται αριστερά στην επιφάνεια.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('izjdE/Xlc08=', 541, -1, 1);
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
    var weight = DecodeNumber('FgHkHSH5Evk=', 545, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FgHkHSH5Evk=', 545, -1000, 1000),DecodeDecimal('xHi+HThukaA=', 545, -1000, 1000),DecodeDecimal('xHi+HThukaA=', 545, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "40. Σημειώστε το σωστό. Το μενού \"Select\":  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FgHkHSH5Evk=', 547, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται στο Flash Adobe Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vTOH8lqBWF0=', 549, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται σε όλα τα προγράμματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5zW9UHb18aQ=', 551, -1, 1);
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
    var weight = DecodeNumber('fvGvl5eDFOE=', 555, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fvGvl5eDFOE=', 555, -1000, 1000),DecodeDecimal('sfbsWgejvVA=', 555, -1000, 1000),DecodeDecimal('sfbsWgejvVA=', 555, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "41. Σημειώστε το σωστό. Οι παλέτες σε όλα τα προγράμματα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fvGvl5eDFOE=', 557, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Aφορούν μόνο στα χρώματα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZoIiOEo9rw4=', 559, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αφορούν μόνο στα χρώματα και στα στρώματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dIYNvZPusSg=', 561, -1, 1);
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
    var weight = DecodeNumber('KCIXj536UJo=', 565, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KCIXj536UJo=', 565, -1000, 1000),DecodeDecimal('rL0HDFUjGJM=', 565, -1000, 1000),DecodeDecimal('rL0HDFUjGJM=', 565, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "42. Σημειώστε το σωστό. Το αναδυόμενο παράθυρο των στρωμάτων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KCIXj536UJo=', 567, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται δεξιά στην επιφάνεια επεξεργασίας της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('b6q5dZLNNYw=', 569, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται αριστερά στην επιφάνεια επεξεργασίας της εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JLyMAwFYJig=', 571, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Βρίσκεται στη γραμμή βασικού μενού File.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MrFxJTJFUgQ=', 573, -1, 1);
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
    var weight = DecodeNumber('gcnOWjysAvk=', 575, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gcnOWjysAvk=', 575, -1000, 1000),DecodeDecimal('6Z0Uiw2ri8Y=', 575, -1000, 1000),DecodeDecimal('6Z0Uiw2ri8Y=', 575, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "43. Σημειώστε ποια είναι τα κύρια χαρακτηριστικά των στρωμάτων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('a8TaS0XEuko=', 577, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η διαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PmEm7tNF8Mc=', 579, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η απόκρυψη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PmEm7tNF8Mc=', 581, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το χρώμα.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ibThXhFHkKU=', 583, -1, 1);
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
    var weight = DecodeNumber('yjCspM9xNrE=', 585, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yjCspM9xNrE=', 585, -1000, 1000),DecodeDecimal('nzvKZySZFrs=', 585, -1000, 1000),DecodeDecimal('nzvKZySZFrs=', 585, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "44. Σημειώστε το σωστό:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yjCspM9xNrE=', 587, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το Adobe Photoshop έχει μία ομάδα εργαλείων για επεξεργασία εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qjKYBv4wxsQ=', 589, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το Adobe Photoshop έχει δύο βασικές ομάδες εργαλείων: για τη ζωγραφική και για την επεξεργασία εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7KijJnk/UHw=', 591, -1, 1);
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
    var weight = DecodeNumber('MaVrwMHs08s=', 595, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MaVrwMHs08s=', 595, -1000, 1000),DecodeDecimal('JZdxjIdtsiw=', 595, -1000, 1000),DecodeDecimal('JZdxjIdtsiw=', 595, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "45. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MaVrwMHs08s=', 597, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με το πλήκτρο SHIFT κρύβεται και εμφανίζεται η κάθε παλέτα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xBmghpnpfG0=', 599, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με το πλήκτρο TAB κρύβονται και εμφανίζονται οι παλέτες και η γραμμή επιλογών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xBmghpnpfG0=', 601, -1, 1);
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
    var weight = DecodeNumber('jZPmoFx+j0w=', 605, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jZPmoFx+j0w=', 605, -1000, 1000),DecodeDecimal('H8GibOWPgxE=', 605, -1000, 1000),DecodeDecimal('H8GibOWPgxE=', 605, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "46. Σημειώστε το σωστό. Η εμφάνιση ενός εικονιδίου τριγωνικού σχήματος με θαυμαστικό στη μέση σημαίνει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gu4GJC8fpGI=', 607, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ότι υπάρχουν λανθασμένοι παράμετροι για την εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gu4GJC8fpGI=', 609, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ότι δεν υπάρχει αντίστοιχο χρώμα στον εκτυπωτή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W4xYL0HPYhY=', 611, -1, 1);
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
    var weight = DecodeNumber('FEzfe5zA6Lw=', 615, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FEzfe5zA6Lw=', 615, -1000, 1000),DecodeDecimal('PccSod8n9EE=', 615, -1000, 1000),DecodeDecimal('PccSod8n9EE=', 615, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "47. Σημειώστε το σωστό. Σχετικά με τα χρώματα πρέπει να έχουμε υπόψη μας τα εξής:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FEzfe5zA6Lw=', 617, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Τα εργαλεία χρησιμοποιούνται μόνο το χρώμα προσκηνίου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cVLlMfLrTAE=', 619, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η γόμα χρησιμοποιείται για να φανερώσει το χρώμα παρασκηνίου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jlcD+ZNlUPY=', 621, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Στην περίπτωση της μεγέθυνσης της εικόνας το χρώμα συμπληρώνεται από το προσκήνιο.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('piCFoeOmttw=', 623, -1, 1);
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
    var weight = DecodeNumber('914JXTBtSIo=', 625, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('914JXTBtSIo=', 625, -1000, 1000),DecodeDecimal('eeHH33Rs9Cw=', 625, -1000, 1000),DecodeDecimal('eeHH33Rs9Cw=', 625, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "48. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rYQxcTy7SxY=', 627, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το εργαλείο του σταγονόμετρου βρίσκεται στην τελευταία θέση που βρισκόταν πριν το κλείσιμο του προγράμματος.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rYQxcTy7SxY=', 629, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το εργαλείο του σταγονόμετρου βρίσκεται στην εργαλειοθήκη δεξιά της οθόνης επεξεργασίας μιας εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Wd0l/qBSPsk=', 631, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Το εργαλείο του σταγονόμετρου βρίσκεται στην μπάρα πάνω από την οθόνη επεξεργασίας μιας εικόνας.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BpuzW6s2nsw=', 633, -1, 1);
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
    var weight = DecodeNumber('KwXTKZhpnZI=', 635, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KwXTKZhpnZI=', 635, -1000, 1000),DecodeDecimal('qdAk1zH9Fyo=', 635, -1000, 1000),DecodeDecimal('qdAk1zH9Fyo=', 635, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "49. Σημειώστε το σωστό. Η μεγέθυνση του παραθύρου της εικόνας ταυτόχρονα με τη μεγέθυνση της εικόνας γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KwXTKZhpnZI=', 637, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αυτόματα με τη μεγέθυνση της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XOxI5eg44Pc=', 639, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αυτόματα με τη μεγέθυνση του παραθύρου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9whMOJwS3bY=', 641, -1, 1);
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
    var weight = DecodeNumber('GHz+pVqqS04=', 645, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GHz+pVqqS04=', 645, -1000, 1000),DecodeDecimal('+fokIAINpj4=', 645, -1000, 1000),DecodeDecimal('+fokIAINpj4=', 645, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "50. Σημειώστε το σωστό. Κάνουμε zoom για μεγέθυνση με τα πλήκτρα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Yq5bTFu4D/s=', 647, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Control + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Yq5bTFu4D/s=', 649, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Control + Alt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vF+sF1D61f8=', 651, -1, 1);
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
    var weight = DecodeNumber('1iFT6ENWLZs=', 655, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1iFT6ENWLZs=', 655, -1000, 1000),DecodeDecimal('nrocXnL5mQ4=', 655, -1000, 1000),DecodeDecimal('nrocXnL5mQ4=', 655, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = false;
    question.shortTextQuestion = "51. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yuOLwnXfsZY=', 657, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Zoom Out = Alt + Spacebar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yuOLwnXfsZY=', 659, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Zoom Out = Alt + Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BWvCNxTCp5A=', 661, -1, 1);
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
    var weight = DecodeNumber('oJ4oxWUFJ90=', 665, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oJ4oxWUFJ90=', 665, -1000, 1000),DecodeDecimal('LRc1fVwxeOA=', 665, -1000, 1000),DecodeDecimal('LRc1fVwxeOA=', 665, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = false;
    question.shortTextQuestion = "52. Σημειώστε το σωστό. Η διαφορά που έχει η επιλογή από το μενού view με την αντίστοιχη επιλογή από το zoom από την εργαλειοθήκη:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EEuoZ/Vko5k=', 667, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Έχουμε καθορισμένο το κέντρο της νέας προβολής.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EEuoZ/Vko5k=', 669, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δεν μπορεί να επιλεχθεί άλλο παράθυρο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E5JB1J6N5fY=', 671, -1, 1);
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
    var weight = DecodeNumber('cDFzXiPeo6o=', 675, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cDFzXiPeo6o=', 675, -1000, 1000),DecodeDecimal('6YmENlcg2Qk=', 675, -1000, 1000),DecodeDecimal('6YmENlcg2Qk=', 675, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = false;
    question.shortTextQuestion = "53. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cDFzXiPeo6o=', 677, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να αλλάξουμε τη μονάδα μέτρησης των χαράκων μπαίνουμε στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('o04GhJ0wH7U=', 679, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Για να αλλάξουμε τη μονάδα μέτρησης των χαράκων μπαίνουμε στο μενού File Preferences ή από την παλέτα Info (Πληροφορίες).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o04GhJ0wH7U=', 681, -1, 1);
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
    var weight = DecodeNumber('ibWtIGESYsk=', 685, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ibWtIGESYsk=', 685, -1000, 1000),DecodeDecimal('Jfc7DyFY57o=', 685, -1000, 1000),DecodeDecimal('Jfc7DyFY57o=', 685, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = false;
    question.shortTextQuestion = "54. Σημειώστε το σωστό. Για να δημιουργηθεί μία γραμμή - οδηγός πρέπει να:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ibWtIGESYsk=', 687, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλεχθεί πρώτα η εντολή εισαγωγής χαράκων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('d45XCcKDiec=', 689, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλεχθεί πρώτα η εντολή θέασης χαράκων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yR/Byz25R9M=', 691, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Επιλεχθεί πρώτα η απόσταση που θέλουμε να έχουν οι γραμμές του πλέγματος μεταξύ τους.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('D0OYaj2tdIQ=', 693, -1, 1);
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
    var weight = DecodeNumber('QwxcZ1VDPK0=', 695, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QwxcZ1VDPK0=', 695, -1000, 1000),DecodeDecimal('vWUfZLyeUEc=', 695, -1000, 1000),DecodeDecimal('vWUfZLyeUEc=', 695, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = false;
    question.shortTextQuestion = "55. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i2MG6WM9KKA=', 697, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή εμφάνισης χαράκων βρίσκεται στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i2MG6WM9KKA=', 699, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή εμφάνισης χαράκων βρίσκεται στο μενού File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1wcSdBJePCo=', 701, -1, 1);
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
    var weight = DecodeNumber('Cqk2TZGzCvk=', 705, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Cqk2TZGzCvk=', 705, -1000, 1000),DecodeDecimal('Wnk+czNcS2M=', 705, -1000, 1000),DecodeDecimal('Wnk+czNcS2M=', 705, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "56. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FyPmhiepics=', 707, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή κλειδώματος και ξεκλειδώματος οδηγών βρίσκεται στο μενού view.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FyPmhiepics=', 709, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή κλειδώματος και ξεκλειδώματος οδηγών βρίσκεται στο μενού file.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2SmRkVWHn2M=', 711, -1, 1);
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
    var weight = DecodeNumber('ZIXoNyvZpFY=', 715, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZIXoNyvZpFY=', 715, -1000, 1000),DecodeDecimal('ciirN5tYYgc=', 715, -1000, 1000),DecodeDecimal('ciirN5tYYgc=', 715, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = false;
    question.shortTextQuestion = "57. Σημειώστε τις σωστές απαντήσεις:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZIXoNyvZpFY=', 717, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Στην ομάδα επιλογών πλέγματος υπάρχουν οι επιλογές: color style-gridline every-lock/unlock.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0sRV0U1JhvM=', 719, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στην ομάδα επιλογών πλέγματος υπάρχουν οι επιλογές: color style-gridline every-snap to.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RDEsSi2cYyk=', 721, -1, 1);
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
    var weight = DecodeNumber('MdBoP7WePAo=', 725, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MdBoP7WePAo=', 725, -1000, 1000),DecodeDecimal('9xflDeKRURc=', 725, -1000, 1000),DecodeDecimal('9xflDeKRURc=', 725, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = false;
    question.shortTextQuestion = "58. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MdBoP7WePAo=', 727, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή floating selection έχει ιδιότητες παρόμοιες με αυτές των στρωμάτων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3kkQOMbB3vA=', 729, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή floating selection έχει ιδιότητες ίδιες με αυτές των στρωμάτων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fgdVsPv4rGs=', 731, -1, 1);
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
    var weight = DecodeNumber('O3bKDqliRSM=', 735, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O3bKDqliRSM=', 735, -1000, 1000),DecodeDecimal('XO2wM/6ZzWA=', 735, -1000, 1000),DecodeDecimal('XO2wM/6ZzWA=', 735, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = false;
    question.shortTextQuestion = "59. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SuEJTUtIBlI=', 737, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το Constrain Proportions αλλάζει μόνο όταν είναι ενεργό το Resample image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SuEJTUtIBlI=', 739, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το Constrain Proportions αλλάζει μόνο όταν είναι ανενεργό το Resample image.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zz7P5WvvTG4=', 741, -1, 1);
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
    var weight = DecodeNumber('jAMtMe/o6JM=', 745, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jAMtMe/o6JM=', 745, -1000, 1000),DecodeDecimal('VSyxpNg5BYI=', 745, -1000, 1000),DecodeDecimal('VSyxpNg5BYI=', 745, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = false;
    question.shortTextQuestion = "60. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jAMtMe/o6JM=', 747, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η αλλαγή διαστάσεων μιας εικόνας γίνεται μπαίνοντας στο μενού Image.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4pId5pm71ig=', 749, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η αλλαγή διαστάσεων μιας εικόνας που βρίσκεται σε επίπεδο (layer) γίνεται μπαίνοντας στο υπομενού Transform > Scale μέσα από το μενού Edit.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4pId5pm71ig=', 751, -1, 1);
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
    var weight = DecodeNumber('LTJ9sXk/CgE=', 755, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LTJ9sXk/CgE=', 755, -1000, 1000),DecodeDecimal('Z5JRPwVQLeM=', 755, -1000, 1000),DecodeDecimal('Z5JRPwVQLeM=', 755, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = false;
    question.shortTextQuestion = "61. Σημειώστε το σωστό. Βλέπουμε με χρώμα τα κανάλια μιας έγχρωμης φωτογραφίας με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2r637VuUeZg=', 757, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή Interface από το υπομενού Preferences.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2r637VuUeZg=', 759, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. πάτημα πλήκτρων Control + 1.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nHQLDjFVP/I=', 761, -1, 1);
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
    var weight = DecodeNumber('O18c0fxwaeY=', 765, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O18c0fxwaeY=', 765, -1000, 1000),DecodeDecimal('A46pboI8DlA=', 765, -1000, 1000),DecodeDecimal('A46pboI8DlA=', 765, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = false;
    question.shortTextQuestion = "62. Σημειώστε το σωστό. Για να δούμε το κόκκινο κανάλι μιας έγχρωμης RGB φωτογραφίας πατάμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O18c0fxwaeY=', 767, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Control + 3";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8EhVrrli1/0=', 769, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Control + 2";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yfHmnanjFgY=', 771, -1, 1);
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
    var weight = DecodeNumber('kUV1SGozv2o=', 775, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kUV1SGozv2o=', 775, -1000, 1000),DecodeDecimal('6b5WziRjtvI=', 775, -1000, 1000),DecodeDecimal('6b5WziRjtvI=', 775, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = false;
    question.shortTextQuestion = "63. Σημειώστε το σωστό ή τα σωστά. Εργαλεία επιλογής είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U/h09Z8fr8o=', 777, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Λάσο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LWHL29/Jt6M=', 779, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μαγικό ραβδάκι.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+mLq6L5iFiE=', 781, -1, 1);
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
    var weight = DecodeNumber('j1TPOplGsuI=', 785, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('j1TPOplGsuI=', 785, -1000, 1000),DecodeDecimal('MbiJqPv4554=', 785, -1000, 1000),DecodeDecimal('MbiJqPv4554=', 785, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = false;
    question.shortTextQuestion = "64. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j1TPOplGsuI=', 787, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το πλαίσιο ελέγχου anti aliased χρησιμοποιείται για την αποεπιλογή.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qXkEjUPb+MU=', 789, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή Deselect από το μενού Select χρησιμοποιείται για την αποεπιλογή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qXkEjUPb+MU=', 791, -1, 1);
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
    var weight = DecodeNumber('O2M0g1h2QHQ=', 795, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O2M0g1h2QHQ=', 795, -1000, 1000),DecodeDecimal('VnFM7G6iqS4=', 795, -1000, 1000),DecodeDecimal('VnFM7G6iqS4=', 795, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = false;
    question.shortTextQuestion = "65. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DFCQ3jK8tgI=', 797, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ανάμειξη pixels με τιμή λαμπρότητας 255 και από τα τρία κανάλια δίνει λευκό χρώμα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DFCQ3jK8tgI=', 799, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ανάμειξη pixels με τιμή λαμπρότητας 0 και από τα τρία κανάλια δίνει λευκό χρώμα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HeqYf4n43+s=', 801, -1, 1);
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
    var weight = DecodeNumber('RN2Z8hij0h0=', 805, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RN2Z8hij0h0=', 805, -1000, 1000),DecodeDecimal('CIrzrlN1QUE=', 805, -1000, 1000),DecodeDecimal('CIrzrlN1QUE=', 805, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = false;
    question.shortTextQuestion = "66. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RN2Z8hij0h0=', 807, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Pixels με τιμή λαμπρότητας 0 στο κόκκινο κανάλι, 126 στο μπλε και 250 στο πράσινο, σχηματίζουν το χρώμα ματζέντα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fE1/igSZcSk=', 809, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Pixels με τιμή λαμπρότητας 0 στο κόκκινο κανάλι, 250 στο μπλε και 0 στο πράσινο, σχηματίζουν το χρώμα ματζέντα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('T5AbNrgshSY=', 811, -1, 1);
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
    var weight = DecodeNumber('j4F+OOcNXyU=', 815, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('j4F+OOcNXyU=', 815, -1000, 1000),DecodeDecimal('DbkZzwGSEDI=', 815, -1000, 1000),DecodeDecimal('DbkZzwGSEDI=', 815, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = false;
    question.shortTextQuestion = "67. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j4F+OOcNXyU=', 817, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με το μαγικό ραβδάκι επιλέγουμε μια περιοχή της εικόνας με διαφορετικά χρώματα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f9Mo2RDxwTE=', 819, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με το μαγικό ραβδάκι επιλέγουμε μια περιοχή συγγενών χρωμάτων της εικόνας αυτόματα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f9Mo2RDxwTE=', 821, -1, 1);
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
    var weight = DecodeNumber('lEjTy6ieVM0=', 825, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lEjTy6ieVM0=', 825, -1000, 1000),DecodeDecimal('UsyESyyWTXU=', 825, -1000, 1000),DecodeDecimal('UsyESyyWTXU=', 825, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = false;
    question.shortTextQuestion = "68. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lEjTy6ieVM0=', 827, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Τα επίπεδα είναι απαραίτητα σε μια εργασία επεξεργασίας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pJepD12VPvs=', 829, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Τα επίπεδα είναι απαραίτητα μόνο σε μια εργασία επεξεργασίας πολλών ταυτόχρονων εικόνων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q77Cktnn/jk=', 831, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Τα επίπεδα είναι απαραίτητα για την εισαγωγή βίντεο σε επίπεδο επεξεργασίας εικόνας.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Z3fGdlwaywc=', 833, -1, 1);
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
    var weight = DecodeNumber('kQRPSZWRPk4=', 835, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kQRPSZWRPk4=', 835, -1000, 1000),DecodeDecimal('LAy6TnMzE18=', 835, -1000, 1000),DecodeDecimal('LAy6TnMzE18=', 835, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = false;
    question.shortTextQuestion = "69. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kQRPSZWRPk4=', 837, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η διαφάνεια ενός επιπέδου δε μπορεί να αλλάξει.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jTuSkbBVEgc=', 839, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η αδιαφάνεια ενός επιπέδου δεν μπορεί να αλλάξει.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O49RqfIsLis=', 841, -1, 1);
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
    var weight = DecodeNumber('7VFKZ708R80=', 845, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7VFKZ708R80=', 845, -1000, 1000),DecodeDecimal('xJnlcDki7ag=', 845, -1000, 1000),DecodeDecimal('xJnlcDki7ag=', 845, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = false;
    question.shortTextQuestion = "70. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pTkgYveq+Kw=', 847, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Στο έξυπνο αντικείμενο μπορούμε να εφαρμόσουμε εφέ φίλτρων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pTkgYveq+Kw=', 849, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το έξυπνο αντικείμενο έχει ένα επίπεδο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rMscMzTmYPo=', 851, -1, 1);
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
    var weight = DecodeNumber('ljpzXjKhhPA=', 855, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ljpzXjKhhPA=', 855, -1000, 1000),DecodeDecimal('dMXZsXIbgmI=', 855, -1000, 1000),DecodeDecimal('dMXZsXIbgmI=', 855, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = false;
    question.shortTextQuestion = "71. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ljpzXjKhhPA=', 857, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ο πίνακας \"επίπεδα\" έχει εμφάνιση/απόκρυψη επιπέδων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qeSHuz4me7c=', 859, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ο πίνακας \"επίπεδα\" έχει εφέ, μικρογραφίες, ανάπτυξη και σύμπτυξη ομάδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YdFnTXx+jSw=', 861, -1, 1);
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
    var weight = DecodeNumber('UfAnX1NmZEM=', 865, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UfAnX1NmZEM=', 865, -1000, 1000),DecodeDecimal('mwQyi59wIFI=', 865, -1000, 1000),DecodeDecimal('mwQyi59wIFI=', 865, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = false;
    question.shortTextQuestion = "72. Σημειώστε το σωστό. Για να ανοίξει ή να κρυφτεί ένα επίπεδο ή ομάδα επιπέδων κλικάρουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('g9Pg9Lm21rE=', 867, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το μάτι αριστερά από το εικονίδιο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g9Pg9Lm21rE=', 869, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Στο πάνω αριστερά εικονίδιο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WbzaV83PW3o=', 871, -1, 1);
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
    var weight = DecodeNumber('xzdYN/FyfGM=', 875, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xzdYN/FyfGM=', 875, -1000, 1000),DecodeDecimal('YvDlj0PcNVc=', 875, -1000, 1000),DecodeDecimal('YvDlj0PcNVc=', 875, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = false;
    question.shortTextQuestion = "73. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fACfOCpvdcE=', 877, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στο μάτι αριστερά κάθε εικονιδίου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fACfOCpvdcE=', 879, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στις επιλογές του πίνακα Επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RoItzXY3hcs=', 881, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Εμφανίζουμε και κρύβουμε τα επίπεδα με κλικ στις εντολές του μενού Επιπέδων.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('obwp84sU/jY=', 883, -1, 1);
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
    var weight = DecodeNumber('aLeKsUkfgeY=', 885, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aLeKsUkfgeY=', 885, -1000, 1000),DecodeDecimal('ZMOEGoohUiE=', 885, -1000, 1000),DecodeDecimal('ZMOEGoohUiE=', 885, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = false;
    question.shortTextQuestion = "74. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('f/BjSDHFdPQ=', 887, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η λειτουργία ανάμειξης ορίζει έναν τρόπο ανάμειξης για το επίπεδο ή την ομάδα σε σχέση με τα άλλα επίπεδα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f/BjSDHFdPQ=', 889, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η λειτουργία ορίζει έναν τρόπο εκτύπωσης μόνο των ορατών επιπέδων ή ομάδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lfF2XtbKCJc=', 891, -1, 1);
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
    var weight = DecodeNumber('CpF52XdEWhw=', 895, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CpF52XdEWhw=', 895, -1000, 1000),DecodeDecimal('rhPKy2F2SEU=', 895, -1000, 1000),DecodeDecimal('rhPKy2F2SEU=', 895, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = false;
    question.shortTextQuestion = "75. Σημειώστε το σωστό. Δημιουργία εγγράφου από επίπεδο σε ομάδα γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CpF52XdEWhw=', 897, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Την εντολή \"διπλασιασμός\", μέσα από το μενού αρχείο.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cLeaNxPQJrQ=', 899, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Την εντολή \"διπλασιασμός\", μέσα από τον πίνακα επιπέδων.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cLeaNxPQJrQ=', 901, -1, 1);
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
    var weight = DecodeNumber('xrv/bdbQXcg=', 905, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xrv/bdbQXcg=', 905, -1000, 1000),DecodeDecimal('6KZiz9SNaRU=', 905, -1000, 1000),DecodeDecimal('6KZiz9SNaRU=', 905, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = false;
    question.shortTextQuestion = "76. Σημειώστε το σωστό. Επαναφέρουμε τις προηγούμενες ρυθμίσεις ορατότητας των επιπέδων με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('u4Wl85erE5k=', 907, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Πατημένο Alt/Option + κλικ στο εικονίδιο του ματιού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('u4Wl85erE5k=', 909, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Πατημένο Control + κλικ στο εικονίδιο του ματιού.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kYglXchEbts=', 911, -1, 1);
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
    var weight = DecodeNumber('0g1D6Vy7RHI=', 915, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0g1D6Vy7RHI=', 915, -1000, 1000),DecodeDecimal('+hMuiiov3y4=', 915, -1000, 1000),DecodeDecimal('+hMuiiov3y4=', 915, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = false;
    question.shortTextQuestion = "77. Σημειώστε το σωστό. Για να ανοίξουμε μια ομάδα επιπέδων κάνουμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0g1D6Vy7RHI=', 917, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Με πατημένο το Alt κάνουμε κλικ στο τρίγωνο αριστερά του εικονιδίου του φακέλου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XnTETSTObho=', 919, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κλικ στο τρίγωνο αριστερά του εικονιδίου του φακέλου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XnTETSTObho=', 921, -1, 1);
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
    var weight = DecodeNumber('YgWyDHOtO1o=', 925, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YgWyDHOtO1o=', 925, -1000, 1000),DecodeDecimal('TFhaQ6b6BOQ=', 925, -1000, 1000),DecodeDecimal('TFhaQ6b6BOQ=', 925, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = false;
    question.shortTextQuestion = "78. Σημειώστε το σωστό. Η δειγματοληψία χρώματος γίνεται με τα εργαλεία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YgWyDHOtO1o=', 927, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μαγικό ραβδάκι.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+ZzdQaHRP1M=', 929, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Σφραγίδα αντιγραφής και πινέλου διόρθωσης.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0/4kENunyrE=', 931, -1, 1);
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
    var weight = DecodeNumber('hBZXR5QDSV0=', 935, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hBZXR5QDSV0=', 935, -1000, 1000),DecodeDecimal('y6d1u05RT9k=', 935, -1000, 1000),DecodeDecimal('y6d1u05RT9k=', 935, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = false;
    question.shortTextQuestion = "79. Σημειώστε το σωστό. Εάν δεν εφαρμόζεται μία εντολή φταίει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iG7NlNZr8/c=', 937, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το επίπεδο στο οποίο εργαζόμαστε δεν είναι ενεργό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iG7NlNZr8/c=', 939, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το επίπεδο στο οποίο εργαζόμαστε είναι συνδεδεμένο με άλλο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('clMHKoBNbyo=', 941, -1, 1);
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
    var weight = DecodeNumber('+aJ0XbQjYjw=', 945, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+aJ0XbQjYjw=', 945, -1000, 1000),DecodeDecimal('Jjk9Z7nB9RY=', 945, -1000, 1000),DecodeDecimal('Jjk9Z7nB9RY=', 945, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = false;
    question.shortTextQuestion = "80. Σημειώστε το σωστό. Για να αποεπιλέξουμε ένα επίπεδο:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UG5ArDJiwG4=', 947, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Κρατάμε πατημένο το πλήκτρο Control + κλικ στην περιοχή έξω από το εικονίδιο του επιπέδου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UG5ArDJiwG4=', 949, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κρατάμε πατημένο το πλήκτρο Alt + κλικ στην περιοχή έξω από το εικονίδιο επιπέδου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6MxOW3cuOHM=', 951, -1, 1);
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
    var weight = DecodeNumber('bUkYNukIuwk=', 955, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bUkYNukIuwk=', 955, -1000, 1000),DecodeDecimal('HWjJX1W9pkM=', 955, -1000, 1000),DecodeDecimal('HWjJX1W9pkM=', 955, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = false;
    question.shortTextQuestion = "81. Σημειώστε το σωστό. Η αυτόματη επιλογή επιπέδων εμφανίζεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I1S7FL9heyQ=', 957, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αφού πατήσουμε το εργαλείο μετακίνησης.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I1S7FL9heyQ=', 959, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αφού πατήσουμε το εργαλείο της επιλογής.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pckIWqjl2mg=', 961, -1, 1);
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
    var weight = DecodeNumber('hf0HVmAaA6I=', 965, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hf0HVmAaA6I=', 965, -1000, 1000),DecodeDecimal('IvSFMYK4Pzg=', 965, -1000, 1000),DecodeDecimal('IvSFMYK4Pzg=', 965, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = false;
    question.shortTextQuestion = "82. Σημειώστε το σωστό. Η δημιουργία ομάδας από ένα επίπεδο γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VQCHiTRWaV8=', 967, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Σέρνουμε το επίπεδο προς το εικονίδιο φακέλου στο κάτω μέρος του πίνακα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VQCHiTRWaV8=', 969, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Κρατώντας πατημένο το Control σύρουμε το επίπεδο προς το εικονίδιο φακέλου στο κάτω μέρος του πίνακα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('53oy8iMhIfY=', 971, -1, 1);
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
    var weight = DecodeNumber('enkG9hMuNi0=', 975, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('enkG9hMuNi0=', 975, -1000, 1000),DecodeDecimal('e4U150lkmpI=', 975, -1000, 1000),DecodeDecimal('e4U150lkmpI=', 975, -1000, 1000));
    question.answers.length = 0;
    question.num = 83;
    question.isSingleAns = false;
    question.shortTextQuestion = "83. Σημειώστε το σωστό. Η παλέτα των καναλιών μιας εικόνας έχει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('enkG9hMuNi0=', 977, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ακριβώς τις ίδιες λειτουργίες με την παλέτα των Επιπέδων εκτός από την εντολή της ορατότητας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yce52h7Vi60=', 979, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Έχει ακριβώς τις ίδιες λειτουργίες με την παλέτα των Επιπέδων εκτός από το εικονίδιο της σύνδεσης.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2IokrN2RE6w=', 981, -1, 1);
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
    var weight = DecodeNumber('ltLAgWftcIo=', 985, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ltLAgWftcIo=', 985, -1000, 1000),DecodeDecimal('kEm21W8Itfw=', 985, -1000, 1000),DecodeDecimal('kEm21W8Itfw=', 985, -1000, 1000));
    question.answers.length = 0;
    question.num = 84;
    question.isSingleAns = false;
    question.shortTextQuestion = "84. Σημειώστε το σωστό. Η παλέτα καναλιών μιας εικόνας είναι χρήσιμη:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ltLAgWftcIo=', 987, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να διορθωθούν τα χρώματα μιας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PyWV+0D9jts=', 989, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Για να αλλάξουν εντελώς τα χρώματα μιας εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uAecyHjcEVg=', 991, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Για να οργανωθούν όλα τα χρώματα μιας εικόνας σε μία σειρά.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sySDG9zwhv8=', 993, -1, 1);
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
    var weight = DecodeNumber('Z+pKooAPkHs=', 995, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Z+pKooAPkHs=', 995, -1000, 1000),DecodeDecimal('eY/PmgeH+1c=', 995, -1000, 1000),DecodeDecimal('eY/PmgeH+1c=', 995, -1000, 1000));
    question.answers.length = 0;
    question.num = 85;
    question.isSingleAns = false;
    question.shortTextQuestion = "85. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Z+pKooAPkHs=', 997, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το κανάλι ’λφα δίνει τη δυνατότητα για μερική διαφάνεια του χρώματος που καλύπτει το μεγαλύτερο μέρος της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2nVbAktFP2A=', 999, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το κανάλι ’λφα δίνει τη δυνατότητα για μερική διαφάνεια μόνο ενός χρώματος της εικόνας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D7sdZezBVVg=', 1001, -1, 1);
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
    var weight = DecodeNumber('gEmcgwoE1nw=', 1005, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gEmcgwoE1nw=', 1005, -1000, 1000),DecodeDecimal('nTgNztCU6H0=', 1005, -1000, 1000),DecodeDecimal('nTgNztCU6H0=', 1005, -1000, 1000));
    question.answers.length = 0;
    question.num = 86;
    question.isSingleAns = false;
    question.shortTextQuestion = "86. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hzAI77iFOMQ=', 1007, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το κανάλι ’λφα χρησιμοποιείται για μερική ή ολική αδιαφάνεια ενός μέρους της εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hzAI77iFOMQ=', 1009, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το κανάλι ’λφα χρησιμοποιείται για σύνδεση εικόνων με διακριτά όρια.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('suBSb8Py2W8=', 1011, -1, 1);
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
    var weight = DecodeNumber('3tzllHL+c+4=', 1015, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3tzllHL+c+4=', 1015, -1000, 1000),DecodeDecimal('jxNGYLHTIFY=', 1015, -1000, 1000),DecodeDecimal('jxNGYLHTIFY=', 1015, -1000, 1000));
    question.answers.length = 0;
    question.num = 87;
    question.isSingleAns = false;
    question.shortTextQuestion = "87. Σημειώστε το σωστό. Το ιστόγραμμα μιας εικόνας εμφανίζεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('S68M9oAeGjM=', 1017, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Όταν κλικάρουμε στην εντολή από το μενού Window.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('S68M9oAeGjM=', 1019, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Όταν κλικάρουμε στην εντολή από το μενού File.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9pO9QyScSYQ=', 1021, -1, 1);
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
    var weight = DecodeNumber('hV+hewsE4CM=', 1025, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hV+hewsE4CM=', 1025, -1000, 1000),DecodeDecimal('Cyta+J6zOjQ=', 1025, -1000, 1000),DecodeDecimal('Cyta+J6zOjQ=', 1025, -1000, 1000));
    question.answers.length = 0;
    question.num = 88;
    question.isSingleAns = false;
    question.shortTextQuestion = "88. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('njc/hiBqGvo=', 1027, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η ενέργεια «Αναίρεση» γίνεται μπαίνοντας στο μενού επεξεργασίας (Edit).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('njc/hiBqGvo=', 1029, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η ενέργεια «Αναίρεση» γίνεται μπαίνοντας στο μενού Αρχείου (File).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3z0OFnywfgk=', 1031, -1, 1);
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
    var weight = DecodeNumber('rIG59Vmg+x4=', 1035, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rIG59Vmg+x4=', 1035, -1000, 1000),DecodeDecimal('GrVOzQ734bY=', 1035, -1000, 1000),DecodeDecimal('GrVOzQ734bY=', 1035, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = false;
    question.shortTextQuestion = "89. Σημειώστε το σωστό.  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('f/mVihVar48=', 1037, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. H ενέργεια «επαναφορά» γίνεται με επιλογή του εργαλείου πινέλου ιστορικού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('f/mVihVar48=', 1039, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η ενέργεια «επαναφορά» γίνεται με επιλογή εργαλείου γόμας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rx85BZU11XI=', 1041, -1, 1);
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
    var weight = DecodeNumber('9aTYg117Xvk=', 1045, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9aTYg117Xvk=', 1045, -1000, 1000),DecodeDecimal('HyYKsgmfDig=', 1045, -1000, 1000),DecodeDecimal('HyYKsgmfDig=', 1045, -1000, 1000));
    question.answers.length = 0;
    question.num = 90;
    question.isSingleAns = false;
    question.shortTextQuestion = "90. Σημειώστε το σωστό. Για να ενεργοποιηθεί η εντολή «αυτόματη λήψη πρώτου στιγμιότυπου»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dmr0g36JeoI=', 1047, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιούμε την εντολή «Επιλογές Ιστορικού».";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dmr0g36JeoI=', 1049, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρησιμοποιούμε την εντολή γεμίσματος από το μενού Αρχείου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ValWjTKYk5A=', 1051, -1, 1);
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
    var weight = DecodeNumber('JiYCRI91jbc=', 1055, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JiYCRI91jbc=', 1055, -1000, 1000),DecodeDecimal('zoTr0r/6wxA=', 1055, -1000, 1000),DecodeDecimal('zoTr0r/6wxA=', 1055, -1000, 1000));
    question.answers.length = 0;
    question.num = 91;
    question.isSingleAns = false;
    question.shortTextQuestion = "91. Σημειώστε το σωστό. Για να εμφανίσουμε μία ηχητική ειδοποίηση για ολοκλήρωση μιας λειτουργίας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('s41+0pUnmls=', 1057, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνουμε στο μενού Επεξεργασία, επιλέγουμε τις προτιμήσεις και μετά ηχητική ειδοποίηση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s41+0pUnmls=', 1059, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνουμε στο μενού Επεξεργασίας, επιλέγουμε προτιμήσεις.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f2uTstN0+A8=', 1061, -1, 1);
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
    var weight = DecodeNumber('ZcAbD6f9/As=', 1065, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZcAbD6f9/As=', 1065, -1000, 1000),DecodeDecimal('OHc6PExOhso=', 1065, -1000, 1000),DecodeDecimal('OHc6PExOhso=', 1065, -1000, 1000));
    question.answers.length = 0;
    question.num = 92;
    question.isSingleAns = false;
    question.shortTextQuestion = "92. Σημειώστε το σωστό. Ο πίνακας «Ιστορικό» ορίζει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZcAbD6f9/As=', 1067, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μόνο την προέλευση του πινέλου ιστορικού.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rkaz8rz+6Qw=', 1069, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο την κατάσταση ιστορικού.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mwBITHNSRwc=', 1071, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μόνο μικρογραφία στιγμιότυπου.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aIlYQc414rQ=', 1073, -1, 1);
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
    var weight = DecodeNumber('iZMcrlEy10A=', 1075, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iZMcrlEy10A=', 1075, -1000, 1000),DecodeDecimal('SUX67KnrhHs=', 1075, -1000, 1000),DecodeDecimal('SUX67KnrhHs=', 1075, -1000, 1000));
    question.answers.length = 0;
    question.num = 93;
    question.isSingleAns = false;
    question.shortTextQuestion = "93. Σημειώστε το σωστό. Η ενέργεια «διπλασιασμός κατάστασης»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YqnN3CeyokQ=', 1077, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Χρησιμοποιείται για μελλοντική χρήση μιας συγκεκριμένης επεξεργασίας μιας εικόνας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YqnN3CeyokQ=', 1079, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Χρησιμοποιείται για να υπάρχει πρόσβαση στο αρχικό στιγμιότυπο κάθε αρχείου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qawJZag996M=', 1081, -1, 1);
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
    var weight = DecodeNumber('iDjlkVvQwy8=', 1085, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iDjlkVvQwy8=', 1085, -1000, 1000),DecodeDecimal('zP/uqP4xvks=', 1085, -1000, 1000),DecodeDecimal('zP/uqP4xvks=', 1085, -1000, 1000));
    question.answers.length = 0;
    question.num = 94;
    question.isSingleAns = false;
    question.shortTextQuestion = "94. Σημειώστε το σωστό. Η ενέργεια «δημιουργία νέου εγγράφου από συγκεκριμένη κατάσταση» γίνεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iDjlkVvQwy8=', 1087, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αφού συρθεί η συγκεκριμένη κατάσταση στο εικονίδιο δημιουργία νέου εγγράφου από την τρέχουσα κατάσταση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/Yf2ax9JRq8=', 1089, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με κλικάρισμα στο εικονίδιο δημιουργία νέου εγγράφου από την τρέχουσα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Bx+0L5uN1PY=', 1091, -1, 1);
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
    var weight = DecodeNumber('6TaX5anQ3jk=', 1095, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6TaX5anQ3jk=', 1095, -1000, 1000),DecodeDecimal('qO41loxEqRc=', 1095, -1000, 1000),DecodeDecimal('qO41loxEqRc=', 1095, -1000, 1000));
    question.answers.length = 0;
    question.num = 95;
    question.isSingleAns = false;
    question.shortTextQuestion = "95. Σημειώστε το σωστό. Η ενέργεια «διαγραφή ιστορικού»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('a/0HSbHHeyc=', 1097, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαγράφει όλα τα βήματα επεξεργασίας μετά το τελευταίο άνοιγμα του αρχείου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a/0HSbHHeyc=', 1099, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαγράφει μόνο τις ακόλουθες ενέργειες.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('04+Qxn1Vq8c=', 1101, -1, 1);
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
    var weight = DecodeNumber('YgrrE+ltLi8=', 1105, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YgrrE+ltLi8=', 1105, -1000, 1000),DecodeDecimal('DFQ5SHRjup8=', 1105, -1000, 1000),DecodeDecimal('DFQ5SHRjup8=', 1105, -1000, 1000));
    question.answers.length = 0;
    question.num = 96;
    question.isSingleAns = false;
    question.shortTextQuestion = "96. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UnNurM/uzdA=', 1107, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επαναφορά σε μία προηγούμενη κατάσταση γίνεται μέσω μενού Επεξεργασία, πατώντας βήμα πίσω.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UnNurM/uzdA=', 1109, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η επαναφορά σε μία προηγούμενη κατάσταση γίνεται μέσω μενού Επεξεργασία, πατώντας αναίρεση.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hwORssO6QXQ=', 1111, -1, 1);
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
    var weight = DecodeNumber('Npre7DvPALQ=', 1115, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Npre7DvPALQ=', 1115, -1000, 1000),DecodeDecimal('N/lO2DJl2xg=', 1115, -1000, 1000),DecodeDecimal('N/lO2DJl2xg=', 1115, -1000, 1000));
    question.answers.length = 0;
    question.num = 97;
    question.isSingleAns = false;
    question.shortTextQuestion = "97. Σημειώστε το σωστό. Η μνήμη του προγράμματος:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G2stOO7BqYw=', 1117, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Απελευθερώνεται περισσότερη μνήμη αφού διαγραφεί το ιστορικό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G2stOO7BqYw=', 1119, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Απελευθερώνεται όλη η μνήμη αφού διαγραφεί το ιστορικό.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5Ro8tE/9Mhw=', 1121, -1, 1);
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
    var weight = DecodeNumber('AuL3gJBxZBE=', 1125, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AuL3gJBxZBE=', 1125, -1000, 1000),DecodeDecimal('vY3VGFfp6As=', 1125, -1000, 1000),DecodeDecimal('vY3VGFfp6As=', 1125, -1000, 1000));
    question.answers.length = 0;
    question.num = 98;
    question.isSingleAns = false;
    question.shortTextQuestion = "98. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3SGZEXBLtR4=', 1127, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Η επιλογή «προτιμήσεων ιστορικού» βρίσκεται μέσα στο μενού επεξεργασίας (edit) > Προτιμήσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3SGZEXBLtR4=', 1129, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Η επιλογή «καταγραφή ιστορικού» βρίσκεται μέσα στο μενού αρχείο (file).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j6O4Ci68J2w=', 1131, -1, 1);
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
    var weight = DecodeNumber('2eczY2I3xcU=', 1135, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2eczY2I3xcU=', 1135, -1000, 1000),DecodeDecimal('2B76VKu0TQM=', 1135, -1000, 1000),DecodeDecimal('2B76VKu0TQM=', 1135, -1000, 1000));
    question.answers.length = 0;
    question.num = 99;
    question.isSingleAns = false;
    question.shortTextQuestion = "99. Σημειώστε το σωστό. Η θέση αποθήκευσης των μεταδεδομένων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2eczY2I3xcU=', 1137, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχει επιλεχθεί αυτόματα από το πρόγραμμα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rRsvtWSCP2U=', 1139, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορεί να οριστεί από τον χρήστη/δημιουργό.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gfq038/HmdI=', 1141, -1, 1);
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
    var weight = DecodeNumber('kWXAIQ0L3AA=', 1145, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kWXAIQ0L3AA=', 1145, -1000, 1000),DecodeDecimal('HxFryjKZNUI=', 1145, -1000, 1000),DecodeDecimal('HxFryjKZNUI=', 1145, -1000, 1000));
    question.answers.length = 0;
    question.num = 100;
    question.isSingleAns = false;
    question.shortTextQuestion = "100. Σημειώστε το σωστό. Στις «επιλογές ιστορικού»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kWXAIQ0L3AA=', 1147, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. υπάρχει η επιλογή δημιουργία/αντικατάσταση στιγμιότυπου.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9YirINPbMrc=', 1149, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν υπάρχει η επιλογή αυτόματη δημιουργία νέου στιγμιότυπου όταν σώζεται.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ckh79bSq0Fw=', 1151, -1, 1);
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
    var weight = DecodeNumber('64OqvlCaFKo=', 1155, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('64OqvlCaFKo=', 1155, -1000, 1000),DecodeDecimal('ktXnKWE+oGc=', 1155, -1000, 1000),DecodeDecimal('ktXnKWE+oGc=', 1155, -1000, 1000));
    question.answers.length = 0;
    question.num = 101;
    question.isSingleAns = false;
    question.shortTextQuestion = "101. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('64OqvlCaFKo=', 1157, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Οι ενέργειες αποθηκεύονται για μια ολόκληρη χρονική περίοδο των λειτουργιών, ενώ τα στιγμιότυπα όχι.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dFJ7nWtNaQ4=', 1159, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το στιγμιότυπο μπορεί να μετονομαστεί ενώ η ενέργεια όχι.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dFJ7nWtNaQ4=', 1161, -1, 1);
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
    var weight = DecodeNumber('cYPysur6l+Q=', 1165, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cYPysur6l+Q=', 1165, -1000, 1000),DecodeDecimal('LmKBe3xHPz0=', 1165, -1000, 1000),DecodeDecimal('LmKBe3xHPz0=', 1165, -1000, 1000));
    question.answers.length = 0;
    question.num = 102;
    question.isSingleAns = false;
    question.shortTextQuestion = "102. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5xyaNFbv75g=', 1167, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Το στιγμιότυπο μπορεί να επεξεργαστεί.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5xyaNFbv75g=', 1169, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Το στιγμιότυπο είναι αντίγραφο και δεν μπορεί να επεξεργαστεί.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rsGCHoOqBc4=', 1171, -1, 1);
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
    var weight = DecodeNumber('CwG/UbKPhJ8=', 1175, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CwG/UbKPhJ8=', 1175, -1000, 1000),DecodeDecimal('QqNyGUpZRto=', 1175, -1000, 1000),DecodeDecimal('QqNyGUpZRto=', 1175, -1000, 1000));
    question.answers.length = 0;
    question.num = 103;
    question.isSingleAns = false;
    question.shortTextQuestion = "103. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CwG/UbKPhJ8=', 1177, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ο διαχειριστής προκαθορισμένων ρυθμίσεων χρησιμοποιείται για να δημιουργηθούν νέες ενέργειες.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iQIq9nSSGfE=', 1179, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ο διαχειριστής προκαθορισμένων ρυθμίσεων χρησιμοποιείται για να αλλάξει ο αριθμός των ενεργειών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aPtP+czEkjU=', 1181, -1, 1);
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
    var weight = DecodeNumber('fmacbJNOTLY=', 1185, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fmacbJNOTLY=', 1185, -1000, 1000),DecodeDecimal('m/kZcWicSTI=', 1185, -1000, 1000),DecodeDecimal('m/kZcWicSTI=', 1185, -1000, 1000));
    question.answers.length = 0;
    question.num = 104;
    question.isSingleAns = false;
    question.shortTextQuestion = "104. Σημειώστε το σωστό. Ο διαχειριστής προκαθορισμένων ρυθμίσεων ανοίγει :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ui6TkzlAJGc=', 1187, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από το μενού Επεξεργασίας.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ui6TkzlAJGc=', 1189, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μέσα από το μενού του πίνακα των βιβλιοθηκών.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j4oGqjmF/h8=', 1191, -1, 1);
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
    var weight = DecodeNumber('CfY//SCxyC4=', 1195, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CfY//SCxyC4=', 1195, -1000, 1000),DecodeDecimal('R2Dd11KNlbw=', 1195, -1000, 1000),DecodeDecimal('R2Dd11KNlbw=', 1195, -1000, 1000));
    question.answers.length = 0;
    question.num = 105;
    question.isSingleAns = false;
    question.shortTextQuestion = "105. Σημειώστε το σωστό. Για να φορτωθεί μια βιβλιοθήκη στον πίνακα βιβλιοθηκών στο διαχειριστή προκαθορισμένων ρυθμίσεων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('V3g3VRdggPA=', 1197, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνετε στον πίνακα της βιβλιοθήκης.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('V3g3VRdggPA=', 1199, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνετε στο μενού της Επεξεργασίας.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TAc5C+2NDGU=', 1201, -1, 1);
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
    var weight = DecodeNumber('bguHWcXHWzU=', 1205, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bguHWcXHWzU=', 1205, -1000, 1000),DecodeDecimal('BtCKHm06+fo=', 1205, -1000, 1000),DecodeDecimal('BtCKHm06+fo=', 1205, -1000, 1000));
    question.answers.length = 0;
    question.num = 106;
    question.isSingleAns = false;
    question.shortTextQuestion = "106. Σημειώστε το σωστό. Για να αλλάξει ονομασία ένα προκαθορισμένο στοιχείο μιας βιβλιοθήκης στο διαχειριστή προκαθορισμένων ρυθμίσεων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bguHWcXHWzU=', 1207, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. απλό κλικ στο στοιχείο και αλλαγή ονόματος και ΟΚ (όχι διπλό).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qVwbMuBHM7E=', 1209, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στο στοιχείο και αλλαγή ονόματος και enter.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qVwbMuBHM7E=', 1211, -1, 1);
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
    var weight = DecodeNumber('vZTR860iIlY=', 1215, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vZTR860iIlY=', 1215, -1000, 1000),DecodeDecimal('3fHHP5qLmv8=', 1215, -1000, 1000),DecodeDecimal('3fHHP5qLmv8=', 1215, -1000, 1000));
    question.answers.length = 0;
    question.num = 107;
    question.isSingleAns = false;
    question.shortTextQuestion = "107. Σημειώστε το σωστό. Για να διαγραφεί ένα προκαθορισμένο στοιχείο:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rZYLcb42wrI=', 1217, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το επιλέγουμε και κάνουμε κλικ στο εικονίδιο διαγραφής.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rZYLcb42wrI=', 1219, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κάνουμε διπλό κλικ πάνω του.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('stjJctyEw40=', 1221, -1, 1);
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
    var weight = DecodeNumber('M90bF1kpX7U=', 1225, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('M90bF1kpX7U=', 1225, -1000, 1000),DecodeDecimal('+29LEhCZLl8=', 1225, -1000, 1000),DecodeDecimal('+29LEhCZLl8=', 1225, -1000, 1000));
    question.answers.length = 0;
    question.num = 108;
    question.isSingleAns = false;
    question.shortTextQuestion = "108. Σημειώστε το σωστό:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('M90bF1kpX7U=', 1227, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A. Οι επεκτάσεις είναι προγράμματα διαφορετικών εκδόσεων Photoshop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1sqWbqDi5Lo=', 1229, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Οι επεκτάσεις είναι προγράμματα από την Adobe Systems.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jv/+V1hy2sc=', 1231, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Οι επεκτάσεις είναι προγράμματα από την Mac OS.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Nsi371zU028=', 1233, -1, 1);
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
    var weight = DecodeNumber('NSyZyjuvm4c=', 1235, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NSyZyjuvm4c=', 1235, -1000, 1000),DecodeDecimal('kHIf0kVsKsU=', 1235, -1000, 1000),DecodeDecimal('kHIf0kVsKsU=', 1235, -1000, 1000));
    question.answers.length = 0;
    question.num = 109;
    question.isSingleAns = false;
    question.shortTextQuestion = "109. Σημειώστε το σωστό. Οι νέες επεκτάσεις που εγκαθίστανται εμφανίζονται :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NSyZyjuvm4c=', 1237, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο υπομενού φίλτρα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aFQufqP8mAY=', 1239, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο υπομενού Εισαγωγή.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zHmuAUFSdus=', 1241, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στο υπομενού Εξαγωγή.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PNezmHwX3u4=', 1243, -1, 1);
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
    var weight = DecodeNumber('mwV7tYhaUeQ=', 1245, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mwV7tYhaUeQ=', 1245, -1000, 1000),DecodeDecimal('vC3ahCAvjX8=', 1245, -1000, 1000),DecodeDecimal('vC3ahCAvjX8=', 1245, -1000, 1000));
    question.answers.length = 0;
    question.num = 110;
    question.isSingleAns = false;
    question.shortTextQuestion = "110. Σημειώστε το σωστό. Τα προειδοποιητικά μηνύματα επαναφέρονται σε λειτουργεία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mwV7tYhaUeQ=', 1247, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέγοντας «να μην εμφανιστεί ξανά».";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Tn4w7tjTqGU=', 1249, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέγοντας Επαναφορά από το υπομενού γενικές μέσα στις προτιμήσεις.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Tn4w7tjTqGU=', 1251, -1, 1);
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
    var weight = DecodeNumber('xRyZ2J2eUqI=', 1255, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xRyZ2J2eUqI=', 1255, -1000, 1000),DecodeDecimal('kDSHlVPCEi4=', 1255, -1000, 1000),DecodeDecimal('kDSHlVPCEi4=', 1255, -1000, 1000));
    question.answers.length = 0;
    question.num = 111;
    question.isSingleAns = false;
    question.shortTextQuestion = "111. Σημειώστε το σωστό. Γίνεται επαναφορά των προτιμήσεων του Photoshop στις προεπιλεγμένες ρυθμίσεις με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xRyZ2J2eUqI=', 1257, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Kαθώς ανοίγετε το Photoshop πατήστε και καρατήστε πατημένα τα πλήκτρα Alt + Control + Shift.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gCK+b3vb+1o=', 1259, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Με πάτημα των πλήκτρων Control + Shift + Backspace.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gCK+b3vb+1o=', 1261, -1, 1);
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
    var weight = DecodeNumber('ThX75+7FamY=', 1265, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ThX75+7FamY=', 1265, -1000, 1000),DecodeDecimal('z1XI5KauJYc=', 1265, -1000, 1000),DecodeDecimal('z1XI5KauJYc=', 1265, -1000, 1000));
    question.answers.length = 0;
    question.num = 112;
    question.isSingleAns = false;
    question.shortTextQuestion = "112. Σημειώστε το σωστό. Η «Επαναφορά» εμφάνισης πίνακα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VY2EkDBA9Lk=', 1267, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται στο μενού πίνακα.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VY2EkDBA9Lk=', 1269, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται στο μενού Αρχείο.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kkikAGDfDdo=', 1271, -1, 1);
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
    var weight = DecodeNumber('xTnZYlzxQN0=', 1275, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xTnZYlzxQN0=', 1275, -1000, 1000),DecodeDecimal('wRhFqnQ1XjY=', 1275, -1000, 1000),DecodeDecimal('wRhFqnQ1XjY=', 1275, -1000, 1000));
    question.answers.length = 0;
    question.num = 113;
    question.isSingleAns = false;
    question.shortTextQuestion = "113. Σημειώστε το σωστό. Για να αποθηκευτεί η αναζήτηση ενός θέματος:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2TACsuctVIQ=', 1277, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέξτε Custom και αναζήτηση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2TACsuctVIQ=', 1279, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέξτε View on line.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xnmCw0KJh3A=', 1281, -1, 1);
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
    var weight = DecodeNumber('m+elgY7s5Wc=', 1285, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('m+elgY7s5Wc=', 1285, -1000, 1000),DecodeDecimal('DTRr6FoZ11E=', 1285, -1000, 1000),DecodeDecimal('DTRr6FoZ11E=', 1285, -1000, 1000));
    question.answers.length = 0;
    question.num = 114;
    question.isSingleAns = false;
    question.shortTextQuestion = "114. Σημειώστε το σωστό. Ο πίνακας Kuler είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('m+elgY7s5Wc=', 1287, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ένα πρόγραμμα λογισμικού για χρωματισμό.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Alvn/fsjKYI=', 1289, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. παρέχει πρόσβαση σε ομάδες χρωμάτων ή θεμάτων που έχουν δημιουργηθεί από μια online κοινότητα σχεδιαστών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Alvn/fsjKYI=', 1291, -1, 1);
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
    var weight = DecodeNumber('7gxU/xVZ0WM=', 1295, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7gxU/xVZ0WM=', 1295, -1000, 1000),DecodeDecimal('ycoXt8h3XR8=', 1295, -1000, 1000),DecodeDecimal('ycoXt8h3XR8=', 1295, -1000, 1000));
    question.answers.length = 0;
    question.num = 115;
    question.isSingleAns = false;
    question.shortTextQuestion = "115. Σημειώστε το σωστό. Όταν θέλετε πληροφορίες για τις εγκατεστημένες επεκτάσεις:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7gxU/xVZ0WM=', 1297, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνετε μέσα στο μενού βοήθεια.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nSN7SZYeSXc=', 1299, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνετε μέσα στο μενού του παραθύρου.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nSN7SZYeSXc=', 1301, -1, 1);
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
    var weight = DecodeNumber('oquc7nedVW0=', 1305, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oquc7nedVW0=', 1305, -1000, 1000),DecodeDecimal('yaGealZFnVM=', 1305, -1000, 1000),DecodeDecimal('yaGealZFnVM=', 1305, -1000, 1000));
    question.answers.length = 0;
    question.num = 116;
    question.isSingleAns = false;
    question.shortTextQuestion = "116. Σημειώστε το σωστό. Αν δεν μπορείτε να εκτελέσετε μία επέκταση παρόχου, ενδεχομένως:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oquc7nedVW0=', 1307, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Να χρειάζεται κωδικός για την επέκταση.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wf+fnCrZWgY=', 1309, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Να χρειάζεται σειριακός αριθμός παλαιότερης έκδοσης του Photoshop.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('43dPiOr12GY=', 1311, -1, 1);
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
    var weight = DecodeNumber('lkacJBBj9oA=', 1315, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lkacJBBj9oA=', 1315, -1000, 1000),DecodeDecimal('49A+BtWvPa4=', 1315, -1000, 1000),DecodeDecimal('49A+BtWvPa4=', 1315, -1000, 1000));
    question.answers.length = 0;
    question.num = 117;
    question.isSingleAns = false;
    question.shortTextQuestion = "117. Σημειώστε το σωστό. Ο πίνακας Κuler χρησιμοποιείται για:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lkacJBBj9oA=', 1317, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την αναζήτηση χιλιάδων θεμάτων.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/+Ti/bVkh0Y=', 1319, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. την λήψη, επεξεργασία και ενσωμάτωση θεμάτων σε μια εικόνα.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iX2VFyEU4I4=', 1321, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. για αποθήκευση και διανομή θεμάτων.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gHbS8N7KJSc=', 1323, -1, 1);
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
    var weight = DecodeNumber('jtvhXOM7CmU=', 1325, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jtvhXOM7CmU=', 1325, -1000, 1000),DecodeDecimal('F0iAeQb1M/M=', 1325, -1000, 1000),DecodeDecimal('F0iAeQb1M/M=', 1325, -1000, 1000));
    question.answers.length = 0;
    question.num = 118;
    question.isSingleAns = false;
    question.shortTextQuestion = "118. Σημειώστε το σωστό: Για εισαγωγή εικόνων από φωτογραφική μηχανή για Mac OS, χρησιμοποιείται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jtvhXOM7CmU=', 1327, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. WIA";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QPIjnnf1vdU=', 1329, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Image Capture";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QPIjnnf1vdU=', 1331, -1, 1);
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
    var weight = DecodeNumber('Yb/I/Q/9Bd8=', 1335, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Yb/I/Q/9Bd8=', 1335, -1000, 1000),DecodeDecimal('0eSJeAWvVR0=', 1335, -1000, 1000),DecodeDecimal('0eSJeAWvVR0=', 1335, -1000, 1000));
    question.answers.length = 0;
    question.num = 119;
    question.isSingleAns = false;
    question.shortTextQuestion = "119. Σημειώστε το σωστό: Εισαγωγή εικόνας από σαρωτή με συμβατή επέκταση:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I68dhafIRPc=', 1337, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσω File στο import και μετά κλικ στο σαρωτή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I68dhafIRPc=', 1339, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μέσω Edit και μετά κλικ import";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nUOVj1/rEEk=', 1341, -1, 1);
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
    var weight = DecodeNumber('Nw7O4E8Vxcs=', 1345, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Nw7O4E8Vxcs=', 1345, -1000, 1000),DecodeDecimal('IUFErCO5MpE=', 1345, -1000, 1000),DecodeDecimal('IUFErCO5MpE=', 1345, -1000, 1000));
    question.answers.length = 0;
    question.num = 120;
    question.isSingleAns = false;
    question.shortTextQuestion = "120. Σημειώστε το σωστό: Για να αλλάξουν οι διαστάσεις εκτύπωσης και ανάλυσης χωρίς να αλλάξει ο αριθμός εικονοστοιχείων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Nw7O4E8Vxcs=', 1347, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. πρέπει να ενεργοποιηθεί η εντολή «Αναδειγματοληψία εικόνας»";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K88T08PC8xk=', 1349, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. πρέπει να απενεργοποιηθεί η εντολή «Αναδειγματοληψία εικόνας»";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K88T08PC8xk=', 1351, -1, 1);
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
    var weight = DecodeNumber('hmSLzEGePk0=', 1355, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hmSLzEGePk0=', 1355, -1000, 1000),DecodeDecimal('w9ZDafdTCYQ=', 1355, -1000, 1000),DecodeDecimal('w9ZDafdTCYQ=', 1355, -1000, 1000));
    question.answers.length = 0;
    question.num = 121;
    question.isSingleAns = false;
    question.shortTextQuestion = "121. Σημειώστε το σωστό: Πως μπορούμε να δούμε στην οθόνη τις πραγματικές της διαστάσεις εκτύπωσης μιας εικόνας;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zrEa54Sjqg0=', 1357, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπαίνοντας στο μενού Προβολή και μετά επιλογή εντολής «Μέγεθος εκτύπωσης»";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zrEa54Sjqg0=', 1359, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπαίνοντας στο μενού Εικόνα και μετά επιλογή εντολής «Μέγεθος εκτύπωσης»";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fKjinsPGVOE=', 1361, -1, 1);
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
    var weight = DecodeNumber('y99WeuduY0A=', 1365, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('y99WeuduY0A=', 1365, -1000, 1000),DecodeDecimal('1GuUdOiLXtc=', 1365, -1000, 1000),DecodeDecimal('1GuUdOiLXtc=', 1365, -1000, 1000));
    question.answers.length = 0;
    question.num = 122;
    question.isSingleAns = false;
    question.shortTextQuestion = "122. Σημειώστε το σωστό: Η επιλογή «Χρώμα επέκτασης καμβά»:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('y99WeuduY0A=', 1367, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρωματίζει τα κενά της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VfNiXT3TRdA=', 1369, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διατίθεται μόνο σε μια σύνθετη και πολυεπίπεδη εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LPxjxe7LYJU=', 1371, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διατίθεται μόνο σε μια μονοεπίπεδη εικόνα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Hj8+S0ho3f8=', 1373, -1, 1);
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
    var weight = DecodeNumber('av23blxpnLM=', 1375, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('av23blxpnLM=', 1375, -1000, 1000),DecodeDecimal('dc6h2B13oWY=', 1375, -1000, 1000),DecodeDecimal('dc6h2B13oWY=', 1375, -1000, 1000));
    question.answers.length = 0;
    question.num = 123;
    question.isSingleAns = false;
    question.shortTextQuestion = "123. Σημειώστε το σωστό Η επιλογή χρωματική ισορροπία:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OFOA5s6C0FU=', 1377, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν έχει την ευελιξία της επιλογής Curves";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OFOA5s6C0FU=', 1379, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Έχει τη δυνατότητα να εστιάσει σε πολλές τονικότητες χρωμάτων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XJOuusVgotA=', 1381, -1, 1);
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
    var weight = DecodeNumber('Q/6kDlIKb0c=', 1385, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q/6kDlIKb0c=', 1385, -1000, 1000),DecodeDecimal('MSx1ZEqqDvE=', 1385, -1000, 1000),DecodeDecimal('MSx1ZEqqDvE=', 1385, -1000, 1000));
    question.answers.length = 0;
    question.num = 124;
    question.isSingleAns = false;
    question.shortTextQuestion = "124. Σημειώστε το σωστό Η Επιλογή Curves βρίσκεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q/6kDlIKb0c=', 1387, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε επίπεδο ρύθμισης (Adjustment layer)";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GO0kHvpGPu8=', 1389, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Ως αυτόνομη επιλογή στο πρόγραμμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RG0zPW0r+Js=', 1391, -1, 1);
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
    var weight = DecodeNumber('i6nahoJ6vZ4=', 2232, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i6nahoJ6vZ4=', 2232, -1000, 1000),DecodeDecimal('LYFuOR8yXAU=', 2232, -1000, 1000),DecodeDecimal('LYFuOR8yXAU=', 2232, -1000, 1000));
    question.answers.length = 0;
    question.num = 125;
    question.isSingleAns = false;
    question.shortTextQuestion = "125. Σημειώστε το σωστό Στο εργαλείο Levels  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i6nahoJ6vZ4=', 2234, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. όσα χρώματα είναι ουδέτερα παραμένουν ίδια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gk6FpDJ18Ag=', 2236, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο το κόκκινο παραμένει το ίδιο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('95me4K29fRs=', 2238, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μόνο το πράσινο παραμένει το ίδιο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('bivybbi+IPU=', 2240, -1, 1);
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
    var weight = DecodeNumber('4BNxpHcbPZw=', 2242, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4BNxpHcbPZw=', 2242, -1000, 1000),DecodeDecimal('ss5Cm9JQiyY=', 2242, -1000, 1000),DecodeDecimal('ss5Cm9JQiyY=', 2242, -1000, 1000));
    question.answers.length = 0;
    question.num = 126;
    question.isSingleAns = false;
    question.shortTextQuestion = "126. Σημειώστε το σωστό Με το εργαλείο Levels:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4BNxpHcbPZw=', 2244, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επηρεάζονται τα φωτεινά χρώματα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('u1+FPhCyD48=', 2246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β επηρεάζονται τα σκοτεινά χρώματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oEOJBFyYRlg=', 2248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επηρεάζονται περισσότερο τα φωτεινά και λιγότερο τα σκούρα χρώματα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sWSh7DtTdwk=', 2250, -1, 1);
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
    var weight = DecodeNumber('HJXxArDRS1k=', 2252, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HJXxArDRS1k=', 2252, -1000, 1000),DecodeDecimal('i/4CnORXy3Y=', 2252, -1000, 1000),DecodeDecimal('i/4CnORXy3Y=', 2252, -1000, 1000));
    question.answers.length = 0;
    question.num = 127;
    question.isSingleAns = false;
    question.shortTextQuestion = "127. Σημειώστε το σωστό Η εντολή anti-aliased :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TKIk/TXqVjo=', 2254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εξομαλύνει τα άκρα μιας περιοχής της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TKIk/TXqVjo=', 2256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σκληραίνει τα άκρα μιας περιοχής της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('X3cHprcvTok=', 2258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. στρογγυλεύει τα άκρα μιας περιοχής της εικόνας";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('70EPtY/ltjc=', 2260, -1, 1);
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
    var weight = DecodeNumber('qxBBL4L9BOA=', 2262, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qxBBL4L9BOA=', 2262, -1000, 1000),DecodeDecimal('0GHyTBAc0Ek=', 2262, -1000, 1000),DecodeDecimal('0GHyTBAc0Ek=', 2262, -1000, 1000));
    question.answers.length = 0;
    question.num = 128;
    question.isSingleAns = false;
    question.shortTextQuestion = "128. Σημειώστε το σωστό Στο εργαλείο ντεγκραντέ υπάρχουν οι λειτουργίες:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qxBBL4L9BOA=', 2264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Linear, Radial";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P0Bv3VdVY+Q=', 2266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Angle.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LnsKQvV7gfM=', 2268, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Diamond, Reflected, Linear, Radial";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3+YlYZANzI8=', 2270, -1, 1);
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
    var weight = DecodeNumber('7N5ooCUg3Jw=', 2272, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7N5ooCUg3Jw=', 2272, -1000, 1000),DecodeDecimal('CIN6097SuqE=', 2272, -1000, 1000),DecodeDecimal('CIN6097SuqE=', 2272, -1000, 1000));
    question.answers.length = 0;
    question.num = 129;
    question.isSingleAns = false;
    question.shortTextQuestion = "129. Σημειώστε το σωστό Το εργαλείο linear :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SaDw82xZMJg=', 2274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργεί ντεγκραντέ κατά μήκος μιας ευθείας γραμμής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SaDw82xZMJg=', 2276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργεί ντεγκραντέ κατά μήκος μιας τεθλασμένης γραμμής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/DZndwFrNnY=', 2278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. δημιουργεί ντεγκραντέ σε κυκλική διάταξη";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SEkevNEL/ME=', 2280, -1, 1);
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
    var weight = DecodeNumber('tbi+hz6Ojes=', 2282, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tbi+hz6Ojes=', 2282, -1000, 1000),DecodeDecimal('IM3i4W4IDfY=', 2282, -1000, 1000),DecodeDecimal('IM3i4W4IDfY=', 2282, -1000, 1000));
    question.answers.length = 0;
    question.num = 130;
    question.isSingleAns = false;
    question.shortTextQuestion = "130. Σημειώστε το σωστό: Με τα εργαλεία σχεδιασμού:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tbi+hz6Ojes=', 2284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργούμε Κουμπιά, γραμμές και στοιχεία χρήσιμα για ιστοσελίδες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WfzgB55Zbe4=', 2286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επεξεργαζόμαστε και βελτιώνουμε την εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LnHFMkn6erg=', 2288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Κάνουμε διάφορα εφέ στην εικόνα";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RiZ9ruerWCA=', 2290, -1, 1);
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
    var weight = DecodeNumber('/9H44HZ0ZbA=', 2292, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/9H44HZ0ZbA=', 2292, -1000, 1000),DecodeDecimal('oLoDW/lbVFk=', 2292, -1000, 1000),DecodeDecimal('oLoDW/lbVFk=', 2292, -1000, 1000));
    question.answers.length = 0;
    question.num = 131;
    question.isSingleAns = false;
    question.shortTextQuestion = "131. Σημειώστε το σωστό: Για να γεμίσει μη επιλεγμένο κείμενο στο επίπεδό του, με χρώμα φόντου πατάμε:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/9H44HZ0ZbA=', 2294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Shift+ Alt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s93QnseKLDs=', 2296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Shift+ Control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VUYvmKULVRQ=', 2298, -1, 1);
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
    var weight = DecodeNumber('eVy72d1giQE=', 2302, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eVy72d1giQE=', 2302, -1000, 1000),DecodeDecimal('hRgvyfrIIQA=', 2302, -1000, 1000),DecodeDecimal('hRgvyfrIIQA=', 2302, -1000, 1000));
    question.answers.length = 0;
    question.num = 132;
    question.isSingleAns = false;
    question.shortTextQuestion = "132. Σημειώστε το σωστό: Ένα εργαλείο σχήματος ή πένας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KHPyPzTgL/s=', 2304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιλέγεται πριν την εντολή Επίπεδο σχήματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KHPyPzTgL/s=', 2306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιλέγεται και χρησιμοποιείται πάνω στην αρχική εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DvawNSaYWRY=', 2308, -1, 1);
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
    var weight = DecodeNumber('2yurtzG8lLw=', 2312, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2yurtzG8lLw=', 2312, -1000, 1000),DecodeDecimal('mrAiYSd/zX8=', 2312, -1000, 1000),DecodeDecimal('mrAiYSd/zX8=', 2312, -1000, 1000));
    question.answers.length = 0;
    question.num = 133;
    question.isSingleAns = false;
    question.shortTextQuestion = "133. Σημειώστε το σωστό: Ένα διανυσματικό σχήμα αποτελείται από:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2yurtzG8lLw=', 2314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γραμμές και καμπύλες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('N3aLQZSEAKk=', 2316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κύκλους και γραμμές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GGzT85gHKXE=', 2318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. γραμμές και ορθογώνια";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('B9LOu/3VBAQ=', 2320, -1, 1);
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
    var weight = DecodeNumber('I/vOrpD4Ih8=', 2322, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I/vOrpD4Ih8=', 2322, -1000, 1000),DecodeDecimal('DKP/hakLiw4=', 2322, -1000, 1000),DecodeDecimal('DKP/hakLiw4=', 2322, -1000, 1000));
    question.answers.length = 0;
    question.num = 134;
    question.isSingleAns = false;
    question.shortTextQuestion = "134. Σημειώστε το σωστό: Η διαδρομή που κάνει ένα οποιοδήποτε εργαλείο σχεδίασης λέγεται:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I/vOrpD4Ih8=', 2324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περίγραμμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MpFHjxjBkI0=', 2326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στύλ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KhpYSyB3gZk=', 2328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρώμα γεμίσματος";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lRyAJBKubHI=', 2330, -1, 1);
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
    var weight = DecodeNumber('gBRx3FeZE54=', 2332, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gBRx3FeZE54=', 2332, -1000, 1000),DecodeDecimal('EV7qrEZhJMM=', 2332, -1000, 1000),DecodeDecimal('EV7qrEZhJMM=', 2332, -1000, 1000));
    question.answers.length = 0;
    question.num = 135;
    question.isSingleAns = false;
    question.shortTextQuestion = "135. Σημειώστε το σωστό: Μια διαδρομή δεν μπορεί:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gBRx3FeZE54=', 2334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να αλλάξει σχήμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PF5G8aHWyvE=', 2336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να αλλάξει μέγεθος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XHK70tsKNFo=', 2338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να μετατραπεί σε επιλογή";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('n8STE8Xo0/c=', 2340, -1, 1);
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
    var weight = DecodeNumber('jGPNuHkKAxc=', 2342, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jGPNuHkKAxc=', 2342, -1000, 1000),DecodeDecimal('Boe8Omo7Ndc=', 2342, -1000, 1000),DecodeDecimal('Boe8Omo7Ndc=', 2342, -1000, 1000));
    question.answers.length = 0;
    question.num = 136;
    question.isSingleAns = false;
    question.shortTextQuestion = "136. Σημειώστε το σωστό: Μια διαδρομή όταν αποθηκεύεται είναι:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jGPNuHkKAxc=', 2344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαδρομή σχήματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kGjfVwmayyc=', 2346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαδρομή χρώματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RnEgWiJ4ccs=', 2348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαδρομή αποκοπής για να γίνει διαφανές μέρος της εικόνας για επεξεργασία";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nEG8UFhWnDA=', 2350, -1, 1);
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
    var weight = DecodeNumber('P3qiFFir+Pk=', 2352, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('P3qiFFir+Pk=', 2352, -1000, 1000),DecodeDecimal('nZd7Wc0qvMA=', 2352, -1000, 1000),DecodeDecimal('nZd7Wc0qvMA=', 2352, -1000, 1000));
    question.answers.length = 0;
    question.num = 137;
    question.isSingleAns = false;
    question.shortTextQuestion = "137. Σημειώστε το σωστό Το σχήμα τροχού γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1ChUSkBAR2U=', 2354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή του σχήματος της έλλειψης με πατημένο το Shift";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1ChUSkBAR2U=', 2356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή του σχήματος της έλλειψης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lLV1abNG/Nk=', 2358, -1, 1);
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
    var weight = DecodeNumber('jOq39xwN2is=', 2362, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jOq39xwN2is=', 2362, -1000, 1000),DecodeDecimal('b1C2HKxZZcU=', 2362, -1000, 1000),DecodeDecimal('b1C2HKxZZcU=', 2362, -1000, 1000));
    question.answers.length = 0;
    question.num = 138;
    question.isSingleAns = false;
    question.shortTextQuestion = "138. Σημειώστε το σωστό Ένα ραστεροποιημένο σχήμα:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jOq39xwN2is=', 2364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να υποστεί επεξεργασία ως διανυσματικό σχήμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hlXtiGfSJIY=', 2366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να υποστεί επεξεργασία ως διανυσματικό σχήμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hlXtiGfSJIY=', 2368, -1, 1);
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
    var weight = DecodeNumber('aIXbp+h/8Kk=', 2372, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aIXbp+h/8Kk=', 2372, -1000, 1000),DecodeDecimal('HJl6cLmLUzk=', 2372, -1000, 1000),DecodeDecimal('HJl6cLmLUzk=', 2372, -1000, 1000));
    question.answers.length = 0;
    question.num = 139;
    question.isSingleAns = false;
    question.shortTextQuestion = "139. Σημειώστε το σωστό Η εντολή αδιαφάνεια ορίζει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aIXbp+h/8Kk=', 2374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την διαφάνεια του σχήματος με τιμές περίπου στο 100%";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mGretazsM30=', 2376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. την αδιαφάνεια του σχήματος με τιμές περίπου στο 1%";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VfAJIRqSDTU=', 2378, -1, 1);
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
    var weight = DecodeNumber('Y5weKGm8Ze0=', 2382, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Y5weKGm8Ze0=', 2382, -1000, 1000),DecodeDecimal('JEX+5I61p+s=', 2382, -1000, 1000),DecodeDecimal('JEX+5I61p+s=', 2382, -1000, 1000));
    question.answers.length = 0;
    question.num = 140;
    question.isSingleAns = false;
    question.shortTextQuestion = "140. Σημειώστε το σωστό Για την τροποποίηση ενός σχήματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('At+5tplNoHI=', 2384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κλικ στην μικρογραφία της διανυσματικής μάσκας στον πίνακα Επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('At+5tplNoHI=', 2386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στην μικρογραφία της διανυσματικής μάσκας στον πίνακα Διαδρομές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YqSUTqFXdPo=', 2388, -1, 1);
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
    var weight = DecodeNumber('FCYrrB1sGsA=', 2392, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FCYrrB1sGsA=', 2392, -1000, 1000),DecodeDecimal('nBb6bODYg6o=', 2392, -1000, 1000),DecodeDecimal('nBb6bODYg6o=', 2392, -1000, 1000));
    question.answers.length = 0;
    question.num = 141;
    question.isSingleAns = false;
    question.shortTextQuestion = "141. Σημειώστε το σωστό Η πρόσβαση στις επιλογές εργαλείου σχημάτων γίνεται με  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FCYrrB1sGsA=', 2394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κλικ στην μικρογραφία του επιπέδου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VM2/kVrERP0=', 2396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κλικ στο ανεστραμμένο βέλος δίπλα στο κουμπί σχήματος στη γραμμή επιλογών";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VM2/kVrERP0=', 2398, -1, 1);
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
    var weight = DecodeNumber('U4Ok6aF7DU0=', 2402, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('U4Ok6aF7DU0=', 2402, -1000, 1000),DecodeDecimal('abF/Z6FIEWI=', 2402, -1000, 1000),DecodeDecimal('abF/Z6FIEWI=', 2402, -1000, 1000));
    question.answers.length = 0;
    question.num = 142;
    question.isSingleAns = false;
    question.shortTextQuestion = "142. Σημειώστε το σωστό Η επιλογή Προσκόλληση στα pixel στις επιλογές εργαλείου ορθογωνίου ή στρογγυλεμένου ορθογωνίου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U4Ok6aF7DU0=', 2404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσκολλά το σχήμα στα εικονοστοιχεία της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XNTOlCDJxI8=', 2406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσκολλά τα διάφανα μέρη της εικόνας στα σχήματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ckGQJ/4dF5M=', 2408, -1, 1);
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
    var weight = DecodeNumber('DWfjKs8+OAU=', 2412, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DWfjKs8+OAU=', 2412, -1000, 1000),DecodeDecimal('ObzwBeMP8cc=', 2412, -1000, 1000),DecodeDecimal('ObzwBeMP8cc=', 2412, -1000, 1000));
    question.answers.length = 0;
    question.num = 143;
    question.isSingleAns = false;
    question.shortTextQuestion = "143. Σημειώστε το σωστό Το εργαλείο της πένας στη γραμμή επιλογών παρέχει τις εξής λειτουργίες:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DWfjKs8+OAU=', 2414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αυτόματη προσθήκη κόμβου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KpAfPWuHcqM=', 2416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αυτόματη διαγραφή κόμβου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7ZZs/pjIg14=', 2418, -1, 1);
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
    var weight = DecodeNumber('F5WJN058om0=', 2422, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('F5WJN058om0=', 2422, -1000, 1000),DecodeDecimal('Z4PobXYGsAE=', 2422, -1000, 1000),DecodeDecimal('Z4PobXYGsAE=', 2422, -1000, 1000));
    question.answers.length = 0;
    question.num = 144;
    question.isSingleAns = false;
    question.shortTextQuestion = "144. Σημειώστε το σωστό Η επιλογή ελαστική γραμμή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('F5WJN058om0=', 2424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. παρέχει την ευελιξία τροποποίησης της γραμμής που δημιουργείται";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7zGBrxbf43g=', 2426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διευκολύνει τη δημιουργία πολύπλοκου σχήματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7Av0HpFd2Gc=', 2428, -1, 1);
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
    var weight = DecodeNumber('N23w3wH+qUo=', 2432, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('N23w3wH+qUo=', 2432, -1000, 1000),DecodeDecimal('sOJbX+c31CU=', 2432, -1000, 1000),DecodeDecimal('sOJbX+c31CU=', 2432, -1000, 1000));
    question.answers.length = 0;
    question.num = 145;
    question.isSingleAns = false;
    question.shortTextQuestion = "145. Σημειώστε το σωστό Μια διαδρομή για να παραμείνει ανοικτή πρέπει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('N23w3wH+qUo=', 2434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να πατηθεί Control+ κλικ μακριά από όλα τα αντικείμενα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('E+tNk6Go0QA=', 2436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να επιλεχθεί μία διαφορετική διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Rmm/3H1C8eU=', 2438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να επιλεχθεί ένα διαφορετικό εργαλείο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EtQS5SnnSjo=', 2440, -1, 1);
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
    var weight = DecodeNumber('kWa7tqfDiT0=', 2442, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kWa7tqfDiT0=', 2442, -1000, 1000),DecodeDecimal('DTLSd9jR/VI=', 2442, -1000, 1000),DecodeDecimal('DTLSd9jR/VI=', 2442, -1000, 1000));
    question.answers.length = 0;
    question.num = 146;
    question.isSingleAns = false;
    question.shortTextQuestion = "146. Σημειώστε το σωστό Μία καμπύλη γραμμή με πολλούς κόμβους:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kWa7tqfDiT0=', 2444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επεξεργάζεται ευκολότερα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5SbtmadUidY=', 2446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι περισσότερο ευέλικτη στις αλλαγές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Y49zMErPorU=', 2448, -1, 1);
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
    var weight = DecodeNumber('vdDjMf0M7BY=', 2452, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vdDjMf0M7BY=', 2452, -1000, 1000),DecodeDecimal('mGsRBE728zk=', 2452, -1000, 1000),DecodeDecimal('mGsRBE728zk=', 2452, -1000, 1000));
    question.answers.length = 0;
    question.num = 147;
    question.isSingleAns = false;
    question.shortTextQuestion = "147. Σημειώστε το σωστό Για την μετάβαση από ευθεία σε καμπύλη γραμμή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+GK4eHFAp7w=', 2454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. τοποθετείται το εργαλείο πένας στο επόμενο σημείο και στη συνέχεια κάνετε κλικ συνεχόμενο και τραβάτε προς μία κατεύθυνση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+GK4eHFAp7w=', 2456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται διπλό κλικ στο τελικό σημείο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VpAwkLY6pBo=', 2458, -1, 1);
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
    var weight = DecodeNumber('w5eTuQji9Ns=', 2462, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('w5eTuQji9Ns=', 2462, -1000, 1000),DecodeDecimal('fkngEyXkoVY=', 2462, -1000, 1000),DecodeDecimal('fkngEyXkoVY=', 2462, -1000, 1000));
    question.answers.length = 0;
    question.num = 148;
    question.isSingleAns = false;
    question.shortTextQuestion = "148. Σημειώστε το σωστό Ο έλεγχος της ευαισθησίας της τελικής διαδρομής στην κίνηση του ποντικιού ή της γραφίδας στο εργαλείο πένας ελεύθερης σχεδίασης γίνεται με:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w5eTuQji9Ns=', 2464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. με επιλογή εργαλείου πένας ελεύθερης σχεδίασης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('snxNrPMNCC8=', 2466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με κλικ στο αντεστραμμένο βέλος δίπλα στα κουμπιά σχήματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('snxNrPMNCC8=', 2468, -1, 1);
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
    var weight = DecodeNumber('83U6MXRzRIE=', 2472, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('83U6MXRzRIE=', 2472, -1000, 1000),DecodeDecimal('PvJKElUo/Tw=', 2472, -1000, 1000),DecodeDecimal('PvJKElUo/Tw=', 2472, -1000, 1000));
    question.answers.length = 0;
    question.num = 149;
    question.isSingleAns = false;
    question.shortTextQuestion = "149. Σημειώστε το σωστό Για να κλείσουμε μια διαδρομή :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('83U6MXRzRIE=', 2474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. κάνουμε διπλό κλικ στο τέλος της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dq3sABZ+I3A=', 2476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε τη γραμμή στο αρχικό σημείο της";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Dq3sABZ+I3A=', 2478, -1, 1);
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
    var weight = DecodeNumber('96XCwPPr9e0=', 2482, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('96XCwPPr9e0=', 2482, -1000, 1000),DecodeDecimal('ZGzm/dW8rqs=', 2482, -1000, 1000),DecodeDecimal('ZGzm/dW8rqs=', 2482, -1000, 1000));
    question.answers.length = 0;
    question.num = 150;
    question.isSingleAns = false;
    question.shortTextQuestion = "150. Σημειώστε το σωστό Το εργαλείο μαγνητικής πένας:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ne/mXKrUmCA=', 2484, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχει ορισμένες ίδιες επιλογές με το μαγνητικό λάσο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ne/mXKrUmCA=', 2486, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει διαφορετικές επιλογές από τις επιλογές με το μαγνητικό λάσο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bjb1P/J+TW0=', 2488, -1, 1);
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
    var weight = DecodeNumber('SpTg0SMoneY=', 2492, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SpTg0SMoneY=', 2492, -1000, 1000),DecodeDecimal('6kkUVl5UU3E=', 2492, -1000, 1000),DecodeDecimal('6kkUVl5UU3E=', 2492, -1000, 1000));
    question.answers.length = 0;
    question.num = 151;
    question.isSingleAns = false;
    question.shortTextQuestion = "151. Σημειώστε το σωστό Η επιλογή «Συχνότητα» :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SpTg0SMoneY=', 2494, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καθορίζει τη συχνότητα με την οποία η μαγνητική πένα εφαρμόζει τις επιλογές της";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WaTmGPbjkWw=', 2496, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθορίζει τη συχνότητα αυτόματης εισαγωγής κόμβων στη διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WaTmGPbjkWw=', 2498, -1, 1);
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
    var weight = DecodeNumber('TBgzFQtepJQ=', 2502, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TBgzFQtepJQ=', 2502, -1000, 1000),DecodeDecimal('rSbQyDIg6uU=', 2502, -1000, 1000),DecodeDecimal('rSbQyDIg6uU=', 2502, -1000, 1000));
    question.answers.length = 0;
    question.num = 152;
    question.isSingleAns = false;
    question.shortTextQuestion = "152. Σημειώστε το σωστό Για να εμφανιστεί μια διαδρομή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yHR0RxdfLT0=', 2504, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλέγεται ο πίνακας διαδρομές και μετά κλικ στο όνομα της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yHR0RxdfLT0=', 2506, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. απενεργοποιούνται όλες οι μικρογραφίες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5COAYDKWPBc=', 2508, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('M8ytFjmuTaQ=', 2510, -1, 1);
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
    var weight = DecodeNumber('0gZmApgA+x4=', 2512, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0gZmApgA+x4=', 2512, -1000, 1000),DecodeDecimal('U1bW/RhpQX4=', 2512, -1000, 1000),DecodeDecimal('U1bW/RhpQX4=', 2512, -1000, 1000));
    question.answers.length = 0;
    question.num = 153;
    question.isSingleAns = false;
    question.shortTextQuestion = "153. Σημειώστε το σωστό Για να αλλάξει το μέγεθος των μικρογραφιών διαδρομής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bs5+PWGl83s=', 2514, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από τον πίνακα διαδρομές επιλέγεται η εντολή Επιλογές και μετά μέγεθος ή χωρίς";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bs5+PWGl83s=', 2516, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεξί κλικ στον πίνακα διαδρομές για να αναδυθεί η εντολή μέγεθος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('huXKI8CRpmk=', 2518, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5Kie1yr1J5A=', 2520, -1, 1);
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
    var weight = DecodeNumber('Q0lByYB6YBI=', 2522, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q0lByYB6YBI=', 2522, -1000, 1000),DecodeDecimal('IPaI0TtSXvs=', 2522, -1000, 1000),DecodeDecimal('IPaI0TtSXvs=', 2522, -1000, 1000));
    question.answers.length = 0;
    question.num = 154;
    question.isSingleAns = false;
    question.shortTextQuestion = "154. Σημειώστε το σωστό Η σειρά των διαδρομών εργασίας στον πίνακα διαδρομές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q0lByYB6YBI=', 2524, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αλλάζει με σύρσιμο της διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/4VM3HdjK+8=', 2526, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλάζει με Control + C και μετά με control +V";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7Whm8IggH1U=', 2528, -1, 1);
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
    var weight = DecodeNumber('gAKo5q7lGjo=', 2532, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gAKo5q7lGjo=', 2532, -1000, 1000),DecodeDecimal('Awte40pwtyE=', 2532, -1000, 1000),DecodeDecimal('Awte40pwtyE=', 2532, -1000, 1000));
    question.answers.length = 0;
    question.num = 155;
    question.isSingleAns = false;
    question.shortTextQuestion = "155. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gAKo5q7lGjo=', 2534, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργείται μία νέα διαδρομή με κλικ στο αντίστοιχο εικονίδιο στον πίνακα Διαδρομές/paths";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('R1qN/XmNZ7A=', 2536, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δημιουργείται μια νέα διαδρομή με επιλογή μιας διαδρομής εργασίας και δεξί κλικ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wklmiZVgpYc=', 2538, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Δημιουργείται μια νέα διαδρομή με alt + κλικ και απόδοση ονόματος διαδρομής";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('T296a24zEUY=', 2540, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. Είτε το Α είτε το Γ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('T296a24zEUY=', 2542, -1, 1);
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
    var weight = DecodeNumber('wYLOtRpQwOI=', 2542, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wYLOtRpQwOI=', 2542, -1000, 1000),DecodeDecimal('5aw2COGC/R0=', 2542, -1000, 1000),DecodeDecimal('5aw2COGC/R0=', 2542, -1000, 1000));
    question.answers.length = 0;
    question.num = 156;
    question.isSingleAns = false;
    question.shortTextQuestion = "156. Σημειώστε το σωστό Οι αποθηκευμένες διαδρομές εμφανίζονται στα Windows και Mac με μορφή αρχείων:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wYLOtRpQwOI=', 2544, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. JPEG";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fvHPePWR7Qo=', 2546, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. JPEG2000";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sH4YvEnPym4=', 2548, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. PDF";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Vo6TprBuXu4=', 2550, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. TIFF";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('NwKxXcAJAzg=', 2552, -1, 1);
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
    var weight = DecodeNumber('NwKxXcAJAzg=', 2552, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NwKxXcAJAzg=', 2552, -1000, 1000),DecodeDecimal('WQPyzHvofJQ=', 2552, -1000, 1000),DecodeDecimal('WQPyzHvofJQ=', 2552, -1000, 1000));
    question.answers.length = 0;
    question.num = 157;
    question.isSingleAns = false;
    question.shortTextQuestion = "157. Σημειώστε το σωστό: Για να γίνει επιλογή μια διαδρομή:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T/BCHUSmMd4=', 2554, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή συγκεκριμένης διαδρομής και κλικ στο φόρτωση διαδρομής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T/BCHUSmMd4=', 2556, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή συγκεκριμένης διαδρομής και διπλό κλικ στη διαδρομή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BmlDr9bpj5E=', 2558, -1, 1);
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
    var weight = DecodeNumber('axEqZCYmhQ8=', 2562, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('axEqZCYmhQ8=', 2562, -1000, 1000),DecodeDecimal('dUuetb3BkDo=', 2562, -1000, 1000),DecodeDecimal('dUuetb3BkDo=', 2562, -1000, 1000));
    question.answers.length = 0;
    question.num = 158;
    question.isSingleAns = false;
    question.shortTextQuestion = "158. Σημειώστε το σωστό: Η εντολή ομαλοποίηση (feathering) κάνει:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BqmFpFwKIos=', 2564, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ομαλότερη τη μετάβαση από τα επιλεγμένα εικονοστοιχεία στα εικονοστοιχεία της γύρω περιοχής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BqmFpFwKIos=', 2566, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ομαλότερη την μετάβαση των εικονοστοιχείων των αντικειμένων με το φόντο μιας εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3tHMPcIn9K4=', 2568, -1, 1);
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
    var weight = DecodeNumber('UreCzB48qoo=', 2572, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UreCzB48qoo=', 2572, -1000, 1000),DecodeDecimal('OoUnNepgSFs=', 2572, -1000, 1000),DecodeDecimal('OoUnNepgSFs=', 2572, -1000, 1000));
    question.answers.length = 0;
    question.num = 159;
    question.isSingleAns = false;
    question.shortTextQuestion = "159. Σημειώστε το σωστό: Η εντολή Διατήρηση διαφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qlhrpimVkLY=', 2574, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περιορίζει το γέμισμα μόνο στις περιοχές του επιπέδου που περιλαμβάνουν pixel";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qlhrpimVkLY=', 2576, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διατηρεί τη διαφάνεια σε όλα τα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Rq5jqqmIofk=', 2578, -1, 1);
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
    var weight = DecodeNumber('s4G2YjjVD+Q=', 2582, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('s4G2YjjVD+Q=', 2582, -1000, 1000),DecodeDecimal('C6EqR+VV2lI=', 2582, -1000, 1000),DecodeDecimal('C6EqR+VV2lI=', 2582, -1000, 1000));
    question.answers.length = 0;
    question.num = 160;
    question.isSingleAns = false;
    question.shortTextQuestion = "160. Σημειώστε το σωστό Το γέμισμα διαδρομής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('s4G2YjjVD+Q=', 2584, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από το μενού του πίνακα διαδρομές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Yczk7hTeJlQ=', 2586, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. με πατημένο Alt και κλικ στο εικονίδιο στο κάτω μέρος του πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Yczk7hTeJlQ=', 2588, -1, 1);
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
    var weight = DecodeNumber('a7yphgRl3zE=', 2592, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('a7yphgRl3zE=', 2592, -1000, 1000),DecodeDecimal('PEJibg/IiqY=', 2592, -1000, 1000),DecodeDecimal('PEJibg/IiqY=', 2592, -1000, 1000));
    question.answers.length = 0;
    question.num = 161;
    question.isSingleAns = false;
    question.shortTextQuestion = "161. Σημειώστε το σωστό Διαγραφή τμήματος διαδρομής με :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('a7yphgRl3zE=', 2594, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή εργαλείου επιλογής και μετά επιλογή τμήματος για διαγραφή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fj74j2sBJYw=', 2596, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιλογή τμήματος της διαδρομής και μετά πάτημα Backspace ή Delete";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BqP72xsBrSI=', 2598, -1, 1);
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
    var weight = DecodeNumber('4ccSvUpzaqE=', 2602, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4ccSvUpzaqE=', 2602, -1000, 1000),DecodeDecimal('lZ5pKo/Kg70=', 2602, -1000, 1000),DecodeDecimal('lZ5pKo/Kg70=', 2602, -1000, 1000));
    question.answers.length = 0;
    question.num = 162;
    question.isSingleAns = false;
    question.shortTextQuestion = "162. Σημειώστε το σωστό Η συλλογή φίλτρων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WX/4mv9Va6A=', 2604, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εμφανίζεται μέσα από την επιλογή φίλτρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WX/4mv9Va6A=', 2606, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εμφανίζεται μέσα από το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8LnB35GE1iE=', 2608, -1, 1);
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
    var weight = DecodeNumber('3Ql/dLqMxiY=', 2612, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3Ql/dLqMxiY=', 2612, -1000, 1000),DecodeDecimal('1ShpiNa63KQ=', 2612, -1000, 1000),DecodeDecimal('1ShpiNa63KQ=', 2612, -1000, 1000));
    question.answers.length = 0;
    question.num = 163;
    question.isSingleAns = false;
    question.shortTextQuestion = "163. Σημειώστε το σωστό Στην επισκόπηση συλλογής φίλτρων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3Ql/dLqMxiY=', 2614, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορούν να εφαρμοστούν πολλά φίλτρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WoPAlj9AIpc=', 2616, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορούν να ενεργοποιηθούν/απενεργοποιηθούν τα αποτελέσματα ενός φίλτρου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('46wVVf82eW8=', 2618, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. να αλλάξει η σειρά εφαρμογής φίλτρων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mcWL+K8eiJg=', 2620, -1, 1);
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
    var weight = DecodeNumber('sp2XDC6ZlNE=', 2622, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sp2XDC6ZlNE=', 2622, -1000, 1000),DecodeDecimal('zSUrevs3fuk=', 2622, -1000, 1000),DecodeDecimal('zSUrevs3fuk=', 2622, -1000, 1000));
    question.answers.length = 0;
    question.num = 164;
    question.isSingleAns = false;
    question.shortTextQuestion = "164. Σημειώστε το σωστό Για την εφαρμογή φίλτρων σε μεγάλες εικόνες  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('n/jiU4J5b1Q=', 2624, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καθυστερεί η εφαρμογή φίλτρων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('n/jiU4J5b1Q=', 2626, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν γίνεται προεπισκόπηση αποτελεσμάτων ενός φίλτρου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TPhfyg5lLHg=', 2628, -1, 1);
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
    var weight = DecodeNumber('Wc0MIn8yBsI=', 2632, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Wc0MIn8yBsI=', 2632, -1000, 1000),DecodeDecimal('Ogw5zKufApE=', 2632, -1000, 1000),DecodeDecimal('Ogw5zKufApE=', 2632, -1000, 1000));
    question.answers.length = 0;
    question.num = 165;
    question.isSingleAns = false;
    question.shortTextQuestion = "165. Σημειώστε το σωστό Η εφαρμογή φίλτρου υλοποιείται με  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/K1rUEWOxZo=', 2634, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή επιπέδου πρώτα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/K1rUEWOxZo=', 2636, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποίηση εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v65DDJ8lVPQ=', 2638, -1, 1);
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
    var weight = DecodeNumber('GCx61umapi8=', 2642, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GCx61umapi8=', 2642, -1000, 1000),DecodeDecimal('u5sYz488GQs=', 2642, -1000, 1000),DecodeDecimal('u5sYz488GQs=', 2642, -1000, 1000));
    question.answers.length = 0;
    question.num = 166;
    question.isSingleAns = false;
    question.shortTextQuestion = "166. Σημειώστε το σωστό Ένα φίλτρο εφαρμόζεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xBVWpCBW6E8=', 2644, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε μεμονωμένα επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xBVWpCBW6E8=', 2646, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε πολλά επίπεδα μαζί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HzCg5hv9ICA=', 2648, -1, 1);
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
    var weight = DecodeNumber('K1bvpUv5xck=', 2652, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K1bvpUv5xck=', 2652, -1000, 1000),DecodeDecimal('3suIwuBt5bU=', 2652, -1000, 1000),DecodeDecimal('3suIwuBt5bU=', 2652, -1000, 1000));
    question.answers.length = 0;
    question.num = 167;
    question.isSingleAns = false;
    question.shortTextQuestion = "167. Σημειώστε το σωστό Με τη χρήση μασκών :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K1bvpUv5xck=', 2654, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δίνεται μεγαλύτερη ελευθερία όσον αφορά στην σχεδίαση σχημάτων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7Us8Vw83A0E=', 2656, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ελέγχεται περισσότερο η μετάβαση από το ένα εφέ στο άλλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cEBuGC2KLQs=', 2658, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. η εικόνα αλλάζει και δεν μπορεί να υποστεί μεταβολές";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qNW0K0uyU0Y=', 2660, -1, 1);
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
    var weight = DecodeNumber('YHhxM8yv9gs=', 2662, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YHhxM8yv9gs=', 2662, -1000, 1000),DecodeDecimal('WStRyHJ5ra0=', 2662, -1000, 1000),DecodeDecimal('WStRyHJ5ra0=', 2662, -1000, 1000));
    question.answers.length = 0;
    question.num = 168;
    question.isSingleAns = false;
    question.shortTextQuestion = "168. Σημειώστε το σωστό Ένα φίλτρο μπορεί να εφαρμοστεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YHhxM8yv9gs=', 2664, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε πολλά επίπεδα κάθε φορά";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZZEYyjvejBk=', 2666, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε μεμονωμένα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pGx72yHXGmc=', 2668, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε ξεχωριστό κανάλι χρώματος";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jylRKXnAujg=', 2670, -1, 1);
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
    var weight = DecodeNumber('IZAqfnNJwVo=', 2672, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IZAqfnNJwVo=', 2672, -1000, 1000),DecodeDecimal('3mEwGbO6aUk=', 2672, -1000, 1000),DecodeDecimal('3mEwGbO6aUk=', 2672, -1000, 1000));
    question.answers.length = 0;
    question.num = 169;
    question.isSingleAns = false;
    question.shortTextQuestion = "169. Σημειώστε το σωστό Το εφέ άκρου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IZAqfnNJwVo=', 2674, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Είναι ένα από τα ειδικά εφέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JFwcUHWXYJg=', 2676, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Είναι μια τεχνική που εφαρμόζεται στα άκρα μιας εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yvPKLe5Qllc=', 2678, -1, 1);
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
    var weight = DecodeNumber('4dJ9aIBbph8=', 2682, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4dJ9aIBbph8=', 2682, -1000, 1000),DecodeDecimal('1ekDuWYRC1I=', 2682, -1000, 1000),DecodeDecimal('1ekDuWYRC1I=', 2682, -1000, 1000));
    question.answers.length = 0;
    question.num = 170;
    question.isSingleAns = false;
    question.shortTextQuestion = "170. Σημειώστε το σωστό Σε μια εικόνα Lab:  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HKeGqXEYOSo=', 2684, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δεν μπορούν να εφαρμοστούν οι λειτουργίες ανάμειξης της επιλογής εξασθένισης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HKeGqXEYOSo=', 2686, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μπορούν να εφαρμοστούν οι λειτουργίες χρωματισμού και φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UXiFlS5q1wU=', 2688, -1, 1);
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
    var weight = DecodeNumber('CYtiScPWQwU=', 2692, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CYtiScPWQwU=', 2692, -1000, 1000),DecodeDecimal('YRy/GPeXRNY=', 2692, -1000, 1000),DecodeDecimal('YRy/GPeXRNY=', 2692, -1000, 1000));
    question.answers.length = 0;
    question.num = 171;
    question.isSingleAns = false;
    question.shortTextQuestion = "171. Σημειώστε το σωστό Η εντολή εξασθένιση βρίσκεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CYtiScPWQwU=', 2694, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο μενού της εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JLAPdsYo/hI=', 2696, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο μενού της επεξεργασίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JLAPdsYo/hI=', 2698, -1, 1);
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
    var weight = DecodeNumber('ioe7fgu/e9w=', 2702, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ioe7fgu/e9w=', 2702, -1000, 1000),DecodeDecimal('0Y763livicc=', 2702, -1000, 1000),DecodeDecimal('0Y763livicc=', 2702, -1000, 1000));
    question.answers.length = 0;
    question.num = 172;
    question.isSingleAns = false;
    question.shortTextQuestion = "172. Σημειώστε το σωστό Μερικά από τα καλλιτεχνικά εφέ είναι :  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O4IqLMEUSdw=', 2704, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έγχρωμο μολύβι-cutout-περγαμηνή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O4IqLMEUSdw=', 2706, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κοκκώδες φιλμ - διαδρομές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H5z0272DTi4=', 2708, -1, 1);
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
    var weight = DecodeNumber('Hcfy69Ujr1A=', 2712, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Hcfy69Ujr1A=', 2712, -1000, 1000),DecodeDecimal('DmMvcTr7ilU=', 2712, -1000, 1000),DecodeDecimal('DmMvcTr7ilU=', 2712, -1000, 1000));
    question.answers.length = 0;
    question.num = 173;
    question.isSingleAns = false;
    question.shortTextQuestion = "173. Σημειώστε το σωστό Το φίλτρο θολώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('89l1PtgGK/4=', 2714, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι κατάλληλο για ρετους και εφέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('89l1PtgGK/4=', 2716, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εφαρμόζεται όταν η εντολή κλείδωμα διαφανών εικονοστοιχείων είναι ενεργοποιημένη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f9tZBmo5mfE=', 2718, -1, 1);
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
    var weight = DecodeNumber('EzjnkuFE46A=', 2722, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('EzjnkuFE46A=', 2722, -1000, 1000),DecodeDecimal('ERHISIBQc64=', 2722, -1000, 1000),DecodeDecimal('ERHISIBQc64=', 2722, -1000, 1000));
    question.answers.length = 0;
    question.num = 174;
    question.isSingleAns = false;
    question.shortTextQuestion = "174. Σημειώστε το σωστό Θόλωμα επιφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EzjnkuFE46A=', 2724, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. θολώνει τα άκρα μιας εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lxA+LfKSG1M=', 2726, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. θολώνει μια εικόνα διατηρώντας τα άκρα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lxA+LfKSG1M=', 2728, -1, 1);
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
    var weight = DecodeNumber('hLgLSjYy9+8=', 2732, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hLgLSjYy9+8=', 2732, -1000, 1000),DecodeDecimal('rdXnaWjsLGw=', 2732, -1000, 1000),DecodeDecimal('rdXnaWjsLGw=', 2732, -1000, 1000));
    question.answers.length = 0;
    question.num = 175;
    question.isSingleAns = false;
    question.shortTextQuestion = "175. Σημειώστε το σωστό Η πινελιά Sumi-e  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hLgLSjYy9+8=', 2734, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δημιουργεί θολή εικόνα και διατηρεί τα άκρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OE8rzV0cZ7M=', 2736, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Δημιουργεί θολά άκρα με πλούσιο μαύρο μελάνι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OE8rzV0cZ7M=', 2738, -1, 1);
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
    var weight = DecodeNumber('dZoThuw8iAw=', 2742, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dZoThuw8iAw=', 2742, -1000, 1000),DecodeDecimal('/CdSqtUxpdc=', 2742, -1000, 1000),DecodeDecimal('/CdSqtUxpdc=', 2742, -1000, 1000));
    question.answers.length = 0;
    question.num = 176;
    question.isSingleAns = false;
    question.shortTextQuestion = "176. Σημειώστε το σωστό Το εφέ zigzag  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3V79pxwNgX4=', 2744, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. παραμορφώνει βαθμιαία μια επιλογή, ανάλογα με την ακτίνα των pixel στην επιλογή σας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3V79pxwNgX4=', 2746, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. θολώνει μια περιοχή σε σχήμα zigzag";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AiSQYhcAd2s=', 2748, -1, 1);
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
    var weight = DecodeNumber('41pkqI2mUQ4=', 2752, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('41pkqI2mUQ4=', 2752, -1000, 1000),DecodeDecimal('mfd7mzf+QUg=', 2752, -1000, 1000),DecodeDecimal('mfd7mzf+QUg=', 2752, -1000, 1000));
    question.answers.length = 0;
    question.num = 177;
    question.isSingleAns = false;
    question.shortTextQuestion = "177. Σημειώστε το σωστό Τα φίλτρα κουκκιδοποίησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('41pkqI2mUQ4=', 2754, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσθέτουν κουκκίδες στην εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wWl1wiSlqzw=', 2756, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αφαιρούν κουκκίδες από την εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Io4Zvbcnxrw=', 2758, -1, 1);
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
    var weight = DecodeNumber('pyPR5tTnSoY=', 2762, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pyPR5tTnSoY=', 2762, -1000, 1000),DecodeDecimal('eYPXtUhb310=', 2762, -1000, 1000),DecodeDecimal('eYPXtUhb310=', 2762, -1000, 1000));
    question.answers.length = 0;
    question.num = 178;
    question.isSingleAns = false;
    question.shortTextQuestion = "178. Σημειώστε το σωστό Το φίλτρο απόχρωση Μezzo  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EjwFvTspfSA=', 2764, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετατρέπει μια εικόνα σε τυχαίο μοτίβο ασπρόμαυρων περιοχών ή πλήρως κορεσμένων χρωμάτωνσε μια έγχρωμη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EjwFvTspfSA=', 2766, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετατρέπει την εικόνα σε απόχρωση του μπλέ καναλιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Hc6slY11c/Y=', 2768, -1, 1);
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
    var weight = DecodeNumber('O8Gqen312oI=', 2772, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('O8Gqen312oI=', 2772, -1000, 1000),DecodeDecimal('KEFNrgJpE7M=', 2772, -1000, 1000),DecodeDecimal('KEFNrgJpE7M=', 2772, -1000, 1000));
    question.answers.length = 0;
    question.num = 179;
    question.isSingleAns = false;
    question.shortTextQuestion = "179. Σημειώστε το σωστό Η έξυπνη όξυνση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ihaezfNS3GU=', 2774, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιτρέπει τον έλεγχο της ποσότητας όξυνσης που υπάρχει στους ανοικτούς τόνους και στις σκιές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ihaezfNS3GU=', 2776, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Επιτρέπει τον έλεγχο της ποσότητας όξυνσης που υπάρχει στους ανοικτούς τόνους";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2b+Orashpsw=', 2778, -1, 1);
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
    var weight = DecodeNumber('Qi4EKLf0vUU=', 2782, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Qi4EKLf0vUU=', 2782, -1000, 1000),DecodeDecimal('SPIWVpxn6bc=', 2782, -1000, 1000),DecodeDecimal('SPIWVpxn6bc=', 2782, -1000, 1000));
    question.answers.length = 0;
    question.num = 180;
    question.isSingleAns = false;
    question.shortTextQuestion = "180. Σημειώστε το σωστό Το χαρτί με υδάτινες γραμμές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eWHiPRb2llc=', 2784, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Επιτρέπει στα χρώματα να κυλίσουν και να αναμιχθούν σαν να έχουν ζωγραφιστεί σε ινώδες βρεγμένο χαρτί";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eWHiPRb2llc=', 2786, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Τα χρώματα έχουν απόχρωση στους τόνους του μπλέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CyVVW/5lADo=', 2788, -1, 1);
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
    var weight = DecodeNumber('muklVeKYcy4=', 2792, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('muklVeKYcy4=', 2792, -1000, 1000),DecodeDecimal('fb0rIc86v40=', 2792, -1000, 1000),DecodeDecimal('fb0rIc86v40=', 2792, -1000, 1000));
    question.answers.length = 0;
    question.num = 181;
    question.isSingleAns = false;
    question.shortTextQuestion = "181. Σημειώστε το σωστό Το φίλτρο της σφραγίδας χρησιμοποιείται καλύτερα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('muklVeKYcy4=', 2794, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε έγχρωμη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tcbhSMJ2ghQ=', 2796, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε ασπρόμαυρη εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tcbhSMJ2ghQ=', 2798, -1, 1);
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
    var weight = DecodeNumber('iWqylH207eE=', 2802, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iWqylH207eE=', 2802, -1000, 1000),DecodeDecimal('l22dOYazG2U=', 2802, -1000, 1000),DecodeDecimal('l22dOYazG2U=', 2802, -1000, 1000));
    question.answers.length = 0;
    question.num = 182;
    question.isSingleAns = false;
    question.shortTextQuestion = "182. Σημειώστε το σωστό Μερικά από τα φίλτρα υφής είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MSWOG6meRyQ=', 2804, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Craquelure-κόκκος-μωσαϊκό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MSWOG6meRyQ=', 2806, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ’νεμος-ιχνογράφηση-patchwork";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('00hvmi4EplI=', 2808, -1, 1);
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
    var weight = DecodeNumber('4vnKxUaSelI=', 2812, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4vnKxUaSelI=', 2812, -1000, 1000),DecodeDecimal('Xsw/eOw3wNA=', 2812, -1000, 1000),DecodeDecimal('Xsw/eOw3wNA=', 2812, -1000, 1000));
    question.answers.length = 0;
    question.num = 183;
    question.isSingleAns = false;
    question.shortTextQuestion = "183. Σημειώστε το σωστό Το φίλτρο βίντεο δεν είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4vnKxUaSelI=', 2814, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποσυνένωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PQVtffMRWWI=', 2816, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρώματα NTSC";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('w/bxMkDnqBY=', 2818, -1, 1);
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
    var weight = DecodeNumber('PXpYFBi5/7c=', 2822, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PXpYFBi5/7c=', 2822, -1000, 1000),DecodeDecimal('zKT1jEuqMXQ=', 2822, -1000, 1000),DecodeDecimal('zKT1jEuqMXQ=', 2822, -1000, 1000));
    question.answers.length = 0;
    question.num = 184;
    question.isSingleAns = false;
    question.shortTextQuestion = "184. Σημειώστε το σωστό Τα φίλτρα digimarc  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PXpYFBi5/7c=', 2824, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενσωματώνουν εικονοστοιχεία απαραίτητα στην εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H82Wie48q58=', 2826, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενσωματώνουν υδατογράφημα για να διασφαλίσουν τα πνευματικά δικαιώματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H82Wie48q58=', 2828, -1, 1);
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
    var weight = DecodeNumber('/KJBxm5mTd8=', 2832, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/KJBxm5mTd8=', 2832, -1000, 1000),DecodeDecimal('D57nJ0Duq3s=', 2832, -1000, 1000),DecodeDecimal('D57nJ0Duq3s=', 2832, -1000, 1000));
    question.answers.length = 0;
    question.num = 185;
    question.isSingleAns = false;
    question.shortTextQuestion = "185. Σημειώστε το σωστό Στην ρύθμιση στοιχείων ελέγχου υφής και γυάλινης επιφάνειας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('koTpUUFcsqs=', 2834, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επιλογή αντιστροφή αντιστρέφει τις σκιές και τους ανοικτούς τόνους";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('koTpUUFcsqs=', 2836, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η επιλογή αντιστροφή αντιστρέφει τα χρώματα των αντικειμένων μέσα στην εικόνα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BvbEyR2owt4=', 2838, -1, 1);
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
    var weight = DecodeNumber('XkLmXgsshJ0=', 2842, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XkLmXgsshJ0=', 2842, -1000, 1000),DecodeDecimal('nuLdZDDgk/8=', 2842, -1000, 1000),DecodeDecimal('nuLdZDDgk/8=', 2842, -1000, 1000));
    question.answers.length = 0;
    question.num = 186;
    question.isSingleAns = false;
    question.shortTextQuestion = "186. Σημειώστε το σωστό Ποια φίλτρα εφαρμόζονται σε περιοχές που δεν έχουν προσδιοριστεί και δεν έχουν υποστεί παραμόρφωση;  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XkLmXgsshJ0=', 2844, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετατόπιση-καμπή-σκόνη και αμυχές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/Zm+Vxst+jM=', 2846, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετατόπιση-καμπή  κύμα-μετακίνηση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/Zm+Vxst+jM=', 2848, -1, 1);
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
    var weight = DecodeNumber('oCRxBAMBzlY=', 2852, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oCRxBAMBzlY=', 2852, -1000, 1000),DecodeDecimal('tBHaX/TLf4c=', 2852, -1000, 1000),DecodeDecimal('tBHaX/TLf4c=', 2852, -1000, 1000));
    question.answers.length = 0;
    question.num = 187;
    question.isSingleAns = false;
    question.shortTextQuestion = "187. Σημειώστε το σωστό Το φίλτρο μετατόπισης βρίσκεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9j1cwr80uzE=', 2854, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο μενού παραμόρφωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9j1cwr80uzE=', 2856, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. στο μενού βίντεο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eYenEDwezmk=', 2858, -1, 1);
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
    var weight = DecodeNumber('xQdf0eVharA=', 2862, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xQdf0eVharA=', 2862, -1000, 1000),DecodeDecimal('Qdn5PiDSCkE=', 2862, -1000, 1000),DecodeDecimal('Qdn5PiDSCkE=', 2862, -1000, 1000));
    question.answers.length = 0;
    question.num = 188;
    question.isSingleAns = false;
    question.shortTextQuestion = "188. Σημειώστε το σωστό Η επιλογή αναδίπλωση γύρω   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kV8COLjZTkw=', 2864, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζει τον τρόπο αντιμετώπισης των περιοχών εικόνας που δεν θα υποστούν παραμόρφωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kV8COLjZTkw=', 2866, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλώνει την εικόνα στη μέση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pSoYbEe9nkY=', 2868, -1, 1);
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
    var weight = DecodeNumber('lMdy11na6k8=', 2872, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lMdy11na6k8=', 2872, -1000, 1000),DecodeDecimal('VRp1yiCdPZY=', 2872, -1000, 1000),DecodeDecimal('VRp1yiCdPZY=', 2872, -1000, 1000));
    question.answers.length = 0;
    question.num = 189;
    question.isSingleAns = false;
    question.shortTextQuestion = "189. Σημειώστε το σωστό Το φίλτρο εφέ φωτισμού λειτουργεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hY1D7w1IZFY=', 2874, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μόνο με εικόνες RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hY1D7w1IZFY=', 2876, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο με εικόνες CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gf/Fg/jdXUA=', 2878, -1, 1);
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
    var weight = DecodeNumber('VCVTv0uUhOY=', 2882, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VCVTv0uUhOY=', 2882, -1000, 1000),DecodeDecimal('vHULXNlxTkU=', 2882, -1000, 1000),DecodeDecimal('vHULXNlxTkU=', 2882, -1000, 1000));
    question.answers.length = 0;
    question.num = 190;
    question.isSingleAns = false;
    question.shortTextQuestion = "190. Σημειώστε το σωστό Το κατευθυντικό φως  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('b69p7mtNq9o=', 2884, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. φωτίζει από μακριά όπως το φως του ήλιου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('b69p7mtNq9o=', 2886, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. φωτίζει σε μια ελλειπτική ακτίνα φωτός";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xq2bln9xDZw=', 2888, -1, 1);
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
    var weight = DecodeNumber('x8e8xr8CCr8=', 2892, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x8e8xr8CCr8=', 2892, -1000, 1000),DecodeDecimal('IOyjBxq4L/o=', 2892, -1000, 1000),DecodeDecimal('IOyjBxq4L/o=', 2892, -1000, 1000));
    question.answers.length = 0;
    question.num = 191;
    question.isSingleAns = false;
    question.shortTextQuestion = "191. Σημειώστε το σωστό Η χρήση της επιλογής Υφή καναλιού στο εφέ φωτισμού  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9X/37EZpSZs=', 2894, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει τον έλεγχο των εφέ φωτισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9X/37EZpSZs=', 2896, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την εφαρμογή υφής σε ένα χρώμα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('681ejbDKaOw=', 2898, -1, 1);
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
    var weight = DecodeNumber('VU7IT/fyUuM=', 2902, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VU7IT/fyUuM=', 2902, -1000, 1000),DecodeDecimal('KzNHJFzDNUo=', 2902, -1000, 1000),DecodeDecimal('KzNHJFzDNUo=', 2902, -1000, 1000));
    question.answers.length = 0;
    question.num = 192;
    question.isSingleAns = false;
    question.shortTextQuestion = "192. Σημειώστε το σωστό Η μάσκα επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZTnfpgRo0Ek=', 2904, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιείται για την απόκρυψη τμημάτων ενός επιπέδου και την αποκάλυψη τμημάτων των επιπέδων που βρίσκονται κάτω από αυτό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZTnfpgRo0Ek=', 2906, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει λευκό χρώμα που αντιστοιχεί 100% σε διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nz4nYoNTHXI=', 2908, -1, 1);
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
    var weight = DecodeNumber('yPvBisAPEow=', 2912, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yPvBisAPEow=', 2912, -1000, 1000),DecodeDecimal('RIZu/RtaVJg=', 2912, -1000, 1000),DecodeDecimal('RIZu/RtaVJg=', 2912, -1000, 1000));
    question.answers.length = 0;
    question.num = 193;
    question.isSingleAns = false;
    question.shortTextQuestion = "193. Σημειώστε το σωστό Στο επίπεδο βάσης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yPvBisAPEow=', 2914, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορούμε να αλλάξουμε τη διαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ypJkR76pPsY=', 2916, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορούμε να αλλάξουμε τη διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ypJkR76pPsY=', 2918, -1, 1);
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
    var weight = DecodeNumber('bQbVnhKmKEw=', 2922, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bQbVnhKmKEw=', 2922, -1000, 1000),DecodeDecimal('TeFTXzkbrAI=', 2922, -1000, 1000),DecodeDecimal('TeFTXzkbrAI=', 2922, -1000, 1000));
    question.answers.length = 0;
    question.num = 194;
    question.isSingleAns = false;
    question.shortTextQuestion = "194. Σημειώστε το σωστό Η δημιουργία νέου επιπέδου/νέας στρώσης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YlBrM5kHrLk=', 2924, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργείται με κλικ στο εικονίδιο στο κάτω μέρος του πάνελ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YlBrM5kHrLk=', 2926, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργείται με κλικ στο μενού του πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('he3rwtTe3eE=', 2928, -1, 1);
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
    var weight = DecodeNumber('tg0jkMBtFO4=', 2932, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tg0jkMBtFO4=', 2932, -1000, 1000),DecodeDecimal('YVRWKlx95/M=', 2932, -1000, 1000),DecodeDecimal('YVRWKlx95/M=', 2932, -1000, 1000));
    question.answers.length = 0;
    question.num = 195;
    question.isSingleAns = false;
    question.shortTextQuestion = "195. Σημειώστε το σωστό Η ενεργοποίηση ενός layer mask (μιας μάσκας επιπέδου)   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KKDxfhRRlSY=', 2934, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιείτε για την απόκρυψη τμημάτων ενός επιπέδου και την αποκάλυψη τμημάτων των επιπέδων που βρίσκονται κάτω από αυτό";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KKDxfhRRlSY=', 2936, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχει λευκό χρώμα που αντιστοιχεί 100% σε διαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xPYsBzNhO5Q=', 2938, -1, 1);
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
    var weight = DecodeNumber('8uVvWPG/1RE=', 2942, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8uVvWPG/1RE=', 2942, -1000, 1000),DecodeDecimal('SiI4e9vekMg=', 2942, -1000, 1000),DecodeDecimal('SiI4e9vekMg=', 2942, -1000, 1000));
    question.answers.length = 0;
    question.num = 196;
    question.isSingleAns = false;
    question.shortTextQuestion = "196. Σημειώστε το σωστό Το μενού layer Options  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8uVvWPG/1RE=', 2944, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει αλλαγές στο όνομα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZF0xf6J8T8A=', 2946, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει αλλαγές στην αδιαφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4dSuf5/zu5k=', 2948, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει αλλαγές στην ανάμειξη χρωμάτων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('W92/854KqwE=', 2950, -1, 1);
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
    var weight = DecodeNumber('ZbyxA61LVGs=', 2952, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZbyxA61LVGs=', 2952, -1000, 1000),DecodeDecimal('dytTYmGarhI=', 2952, -1000, 1000),DecodeDecimal('dytTYmGarhI=', 2952, -1000, 1000));
    question.answers.length = 0;
    question.num = 197;
    question.isSingleAns = false;
    question.shortTextQuestion = "197. Σημειώστε το σωστό Τα αρχεία 3D δεν έχουν  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZbyxA61LVGs=', 2954, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δικτυώματα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+ybB62ESccw=', 2956, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6BJSPzM6iVA=', 2958, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χάρτες";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6BJSPzM6iVA=', 2960, -1, 1);
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
    var weight = DecodeNumber('7aKjwkQ6jFs=', 2962, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7aKjwkQ6jFs=', 2962, -1000, 1000),DecodeDecimal('ebMyw4QrJWs=', 2962, -1000, 1000),DecodeDecimal('ebMyw4QrJWs=', 2962, -1000, 1000));
    question.answers.length = 0;
    question.num = 198;
    question.isSingleAns = false;
    question.shortTextQuestion = "198. Σημειώστε το σωστό Οι τύποι του φωτισμού στην τρισδιάστατη επεξεργασία έχει επιλογές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7aKjwkQ6jFs=', 2964, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. άπειρο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EY5s7mRnghI=', 2966, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προβολέας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/M37ENOwQe8=', 2968, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σημείο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QNRQHEsuvjs=', 2970, -1, 1);
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
    var weight = DecodeNumber('8rrdMNjp4/E=', 2972, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8rrdMNjp4/E=', 2972, -1000, 1000),DecodeDecimal('v9DPv0H4r90=', 2972, -1000, 1000),DecodeDecimal('v9DPv0H4r90=', 2972, -1000, 1000));
    question.answers.length = 0;
    question.num = 199;
    question.isSingleAns = false;
    question.shortTextQuestion = "199. Σημειώστε το σωστό Οι υφές εμφανίζονται ως  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qnYGF/PF2gg=', 2974, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καταχωρίσεις κάτω από ένα επίπεδο 3D στον πίνακα \"Επίπεδα\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qnYGF/PF2gg=', 2976, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o26QdhjW0PI=', 2978, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αντικείμενα με ειδικό φωτισμό";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SwgM9Iyb3Zw=', 2980, -1, 1);
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
    var weight = DecodeNumber('v6gmmggL1ko=', 2982, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('v6gmmggL1ko=', 2982, -1000, 1000),DecodeDecimal('Jc3TZejMqqk=', 2982, -1000, 1000),DecodeDecimal('Jc3TZejMqqk=', 2982, -1000, 1000));
    question.answers.length = 0;
    question.num = 200;
    question.isSingleAns = false;
    question.shortTextQuestion = "200. Σημειώστε το σωστό Ένα μοντέλο με τα εργαλεία 3D μπορεί να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('v6gmmggL1ko=', 2984, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αλλάξει μέγεθος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J9xR5DJNcSs=', 2986, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετακινηθεί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wLVk+Z/qHUs=', 2988, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. περιστραφεί";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SaZruwTQMD4=', 2990, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. όλα τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('SaZruwTQMD4=', 2992, -1, 1);
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
    var weight = DecodeNumber('2/kGX9cHpkw=', 2992, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2/kGX9cHpkw=', 2992, -1000, 1000),DecodeDecimal('K9eNPA/5vPQ=', 2992, -1000, 1000),DecodeDecimal('K9eNPA/5vPQ=', 2992, -1000, 1000));
    question.answers.length = 0;
    question.num = 201;
    question.isSingleAns = false;
    question.shortTextQuestion = "201. Σημειώστε το σωστό Με τη χρήση των εργαλείων της κάμερας 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uSH2QBt0/O4=', 2994, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μετακινείται η προβολή της κάμερας χωρίς να μετακινηθεί η θέση του αντικειμένου 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uSH2QBt0/O4=', 2996, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μετακινείται το αντικείμενο πάνω στο οποίο προβάλλεται το φως";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n71jw6CSYzM=', 2998, -1, 1);
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
    var weight = DecodeNumber('/2vyvIftUvc=', 3002, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/2vyvIftUvc=', 3002, -1000, 1000),DecodeDecimal('Elqhal6ORV4=', 3002, -1000, 1000),DecodeDecimal('Elqhal6ORV4=', 3002, -1000, 1000));
    question.answers.length = 0;
    question.num = 202;
    question.isSingleAns = false;
    question.shortTextQuestion = "202. Σημειώστε το σωστό: Για να επιστρέψουμε στην προεπιλεγμένη προβολή της κάμερας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AD8O8c2Z8RE=', 3004, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιλογή του εργαλείου κάμερας και κλικ στην επιστροφή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AD8O8c2Z8RE=', 3006, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλό κλικ στο εργαλείο κάμερας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PFqzjeBqxBs=', 3008, -1, 1);
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
    var weight = DecodeNumber('m6byE5n9w4g=', 3012, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('m6byE5n9w4g=', 3012, -1000, 1000),DecodeDecimal('RpSMxRI3rkg=', 3012, -1000, 1000),DecodeDecimal('RpSMxRI3rkg=', 3012, -1000, 1000));
    question.answers.length = 0;
    question.num = 203;
    question.isSingleAns = false;
    question.shortTextQuestion = "203. Σημειώστε το σωστό: Για να μετακινηθεί ένα μοντέλο σε άξονα 3D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HysGoEmFg3A=', 3014, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επισημάνουμε το άκρο οποιουδήποτε άξονα και σύρουμε";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HysGoEmFg3A=', 3016, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε τον κέρσορα του ποντικιού μόνο σε άξονα y";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nftZOSsptp4=', 3018, -1, 1);
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
    var weight = DecodeNumber('t82G7ICQrIA=', 3022, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t82G7ICQrIA=', 3022, -1000, 1000),DecodeDecimal('9ATYKXib3R4=', 3022, -1000, 1000),DecodeDecimal('9ATYKXib3R4=', 3022, -1000, 1000));
    question.answers.length = 0;
    question.num = 204;
    question.isSingleAns = false;
    question.shortTextQuestion = "204. Σημειώστε το σωστό: Για να συμπιέσουμε το μοντέλο κατά μήκος του άξονα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mxwE4MQAlas=', 3024, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σύρουμε έναν από τους χρωματιστούς κύβους τροποποίησης προς το κέντρο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mxwE4MQAlas=', 3026, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σύρουμε έναν από τους χρωματιστούς κύβους τροποποίησης προς τα άκρα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Sqtn8cUbUtM=', 3028, -1, 1);
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
    var weight = DecodeNumber('g5Lh6v/e7mo=', 3032, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('g5Lh6v/e7mo=', 3032, -1000, 1000),DecodeDecimal('cki0i3LpVGw=', 3032, -1000, 1000),DecodeDecimal('cki0i3LpVGw=', 3032, -1000, 1000));
    question.answers.length = 0;
    question.num = 205;
    question.isSingleAns = false;
    question.shortTextQuestion = "205. Σημειώστε το σωστό: Στην εφαρμογή φίλτρου εμφανίζονται οι επιλογές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('g5Lh6v/e7mo=', 3034, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σκηνικού - δικτυώματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TRwf9O3nFaw=', 3036, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. υλικού-φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H14yc46MgSE=', 3038, -1, 1);
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
    var weight = DecodeNumber('T+9gjioCnRQ=', 3042, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T+9gjioCnRQ=', 3042, -1000, 1000),DecodeDecimal('Ri1txeRgY6g=', 3042, -1000, 1000),DecodeDecimal('Ri1txeRgY6g=', 3042, -1000, 1000));
    question.answers.length = 0;
    question.num = 206;
    question.isSingleAns = false;
    question.shortTextQuestion = "206. Οι ρυθμίσεις επιλογών προβολής δικτυώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('41t7iBpQNCo=', 3044, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. έχουν απόδοση σκιών";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('41t7iBpQNCo=', 3046, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. έχουν επιλογές δέσμης φωτός";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ew0m6JgWLoE=', 3048, -1, 1);
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
    var weight = DecodeNumber('IcUSl1B0ne8=', 3052, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IcUSl1B0ne8=', 3052, -1000, 1000),DecodeDecimal('iCTG8dMzxJw=', 3052, -1000, 1000),DecodeDecimal('iCTG8dMzxJw=', 3052, -1000, 1000));
    question.answers.length = 0;
    question.num = 207;
    question.isSingleAns = false;
    question.shortTextQuestion = "207. Σημειώστε το σωστό Η εντολή περιβάλλον  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IcUSl1B0ne8=', 3054, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ρυθμίζει τη φωτεινότητα του περιβάλλοντος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4b6k00/U0As=', 3056, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζει το χρώμα του φωτισμού στο περιβάλλον";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4b6k00/U0As=', 3058, -1, 1);
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
    var weight = DecodeNumber('3IhvA3JpkZE=', 3062, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3IhvA3JpkZE=', 3062, -1000, 1000),DecodeDecimal('sAh8c66cYyE=', 3062, -1000, 1000),DecodeDecimal('sAh8c66cYyE=', 3062, -1000, 1000));
    question.answers.length = 0;
    question.num = 208;
    question.isSingleAns = false;
    question.shortTextQuestion = "208. Σημειώστε το σωστό Η εντολή Διάχυση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3IhvA3JpkZE=', 3064, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαχέει έντονο φως";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('L+O2jC+oiAA=', 3066, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαχέει το χρώμα του υλικού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('L+O2jC+oiAA=', 3068, -1, 1);
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
    var weight = DecodeNumber('yFRxM6OInkY=', 3072, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yFRxM6OInkY=', 3072, -1000, 1000),DecodeDecimal('R/6i7riA5p4=', 3072, -1000, 1000),DecodeDecimal('R/6i7riA5p4=', 3072, -1000, 1000));
    question.answers.length = 0;
    question.num = 209;
    question.isSingleAns = false;
    question.shortTextQuestion = " 209. Σημειώστε το σωστό Η εφαρμογή της ανακλαστικότητας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mFjXe+/oR3Q=', 3074, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αυξάνει την ανακλαστικότητα άλλων αντικειμένων στο σκηνικό 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mFjXe+/oR3Q=', 3076, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μειώνει την ανακλαστικότητα άλλων αντικειμένων στο σκηνικό 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eMxCzOWVHbI=', 3078, -1, 1);
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
    var weight = DecodeNumber('kEc5SK/K+Pc=', 3082, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kEc5SK/K+Pc=', 3082, -1000, 1000),DecodeDecimal('CBheGJB8qdw=', 3082, -1000, 1000),DecodeDecimal('CBheGJB8qdw=', 3082, -1000, 1000));
    question.answers.length = 0;
    question.num = 210;
    question.isSingleAns = false;
    question.shortTextQuestion = "210. Σημειώστε το σωστό Ο κανονικός χάρτης σε σχέση με χάρτη ανάγλυφου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kEc5SK/K+Pc=', 3084, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μειώνει τις λεπτομέρειες της επιφάνειας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('at3uS145Tl4=', 3086, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αυξάνει τις λεπτομέρειες της επιφάνειας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('at3uS145Tl4=', 3088, -1, 1);
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
    var weight = DecodeNumber('YPASHl8ZbLs=', 3092, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YPASHl8ZbLs=', 3092, -1000, 1000),DecodeDecimal('lLqujmGPRsw=', 3092, -1000, 1000),DecodeDecimal('lLqujmGPRsw=', 3092, -1000, 1000));
    question.answers.length = 0;
    question.num = 211;
    question.isSingleAns = false;
    question.shortTextQuestion = "211. Σημειώστε το σωστό Ο χάρτης υφής ανοίγει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YPASHl8ZbLs=', 3094, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα στο παράθυρο εγγράφου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Dl2RavhYjbQ=', 3096, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε ξεχωριστό παράθυρο εγγράφου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Dl2RavhYjbQ=', 3098, -1, 1);
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
    var weight = DecodeNumber('I+ydLNTlCvI=', 3102, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I+ydLNTlCvI=', 3102, -1000, 1000),DecodeDecimal('Wd51JrYRbig=', 3102, -1000, 1000),DecodeDecimal('Wd51JrYRbig=', 3102, -1000, 1000));
    question.answers.length = 0;
    question.num = 212;
    question.isSingleAns = false;
    question.shortTextQuestion = "212. Σημειώστε το σωστό  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I+ydLNTlCvI=', 3104, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Για να βελτιωθεί η απεικόνιση της υφής στο μοντέλο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zSrBefEkFFE=', 3106, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζουμε την κλίμακα UV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KOibp/rNa5g=', 3108, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ρυθμίζουμε την μετατόπιση";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4H85W67cCM0=', 3110, -1, 1);
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
    var weight = DecodeNumber('Bz4Kib0mZrc=', 3112, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Bz4Kib0mZrc=', 3112, -1000, 1000),DecodeDecimal('OqZ5Qy3WWd0=', 3112, -1000, 1000),DecodeDecimal('OqZ5Qy3WWd0=', 3112, -1000, 1000));
    question.answers.length = 0;
    question.num = 213;
    question.isSingleAns = false;
    question.shortTextQuestion = "213. Σημειώστε το σωστό 2. Το πρόγραμμα Photoshop Extended διαθέτει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HuMjeuoOF/4=', 3114, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. 3 τύπους φωτισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HuMjeuoOF/4=', 3116, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. 6 τύπους φωτισμού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z9OzFsBLT80=', 3118, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. 16 τύπους φωτισμού";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gKhR8q/KUqc=', 3120, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('vXkqurCo1RI=', 3122, -1, 1);
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
    var weight = DecodeNumber('uTw8ABKLz/w=', 3122, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uTw8ABKLz/w=', 3122, -1000, 1000),DecodeDecimal('PtX0zdJM4GE=', 3122, -1000, 1000),DecodeDecimal('PtX0zdJM4GE=', 3122, -1000, 1000));
    question.answers.length = 0;
    question.num = 214;
    question.isSingleAns = false;
    question.shortTextQuestion = "214. Σημειώστε το σωστό 3. Το σημειακό φως ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vPHyRPuBvmM=', 3124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διαχέεται προς όλες τις κατευθύνσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vPHyRPuBvmM=', 3126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διαχέεται προς μια κατεύθυνση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OiOlRpTQspM=', 3128, -1, 1);
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
    var weight = DecodeNumber('9j+2AAW28yY=', 3132, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9j+2AAW28yY=', 3132, -1000, 1000),DecodeDecimal('jIu7avz8a9s=', 3132, -1000, 1000),DecodeDecimal('jIu7avz8a9s=', 3132, -1000, 1000));
    question.answers.length = 0;
    question.num = 215;
    question.isSingleAns = false;
    question.shortTextQuestion = "215. Σημειώστε το σωστό Οι οδηγοί φώτων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aRqMlg1vaOI=', 3134, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αντανακλούν τη γωνία, την εξασθένιση και τον τύπο του φωτός";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aRqMlg1vaOI=', 3136, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθοδηγούν τον χρήστη/δημιουργό για να επεξεργαστεί τα χρώματα της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MtxxHlLCr7k=', 3138, -1, 1);
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
    var weight = DecodeNumber('guZWAdcz5zw=', 3142, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('guZWAdcz5zw=', 3142, -1000, 1000),DecodeDecimal('kFGTMmcTeEU=', 3142, -1000, 1000),DecodeDecimal('kFGTMmcTeEU=', 3142, -1000, 1000));
    question.answers.length = 0;
    question.num = 216;
    question.isSingleAns = false;
    question.shortTextQuestion = "216. Σημειώστε το σωστό Οι ομάδες φώτων μπορούν να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('guZWAdcz5zw=', 3144, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποθηκευτούν ως ομάδες προκαθορισμένης ρύθμισης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xYz4NUc1gcA=', 3146, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αντικατασταθούν";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MjkbJcz0D+I=', 3148, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. εμπλουτιστούν με προσθήκη φώτων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('U2PPiTqgAvE=', 3150, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('zhacqr8zC+M=', 3152, -1, 1);
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
    var weight = DecodeNumber('zhacqr8zC+M=', 3152, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zhacqr8zC+M=', 3152, -1000, 1000),DecodeDecimal('ijRC+MVXB70=', 3152, -1000, 1000),DecodeDecimal('ijRC+MVXB70=', 3152, -1000, 1000));
    question.answers.length = 0;
    question.num = 217;
    question.isSingleAns = false;
    question.shortTextQuestion = "217. Σημειώστε το σωστό Με την εντολή Εκ νέου ορισμός παραμέτρων για χάρτη υφής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GP4TYTERwX4=', 3154, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διορθώνονται οι παραμορφώσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GP4TYTERwX4=', 3156, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλάζει η υφή του σκηνικού εντελώς";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HJEJyAZIDdc=', 3158, -1, 1);
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
    var weight = DecodeNumber('VTBXrvgI0MM=', 3162, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VTBXrvgI0MM=', 3162, -1000, 1000),DecodeDecimal('1mSHP1y8lGA=', 3162, -1000, 1000),DecodeDecimal('1mSHP1y8lGA=', 3162, -1000, 1000));
    question.answers.length = 0;
    question.num = 218;
    question.isSingleAns = false;
    question.shortTextQuestion = "218. Σημειώστε το σωστό Η επιλογή Λιγότερες ραφές  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VTBXrvgI0MM=', 3164, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. διορθώνεται η παραμορφωμένη υφή του μοντέλου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JUWPiZ5IJSY=', 3166, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αλλοιώνεται η υφή ανάλογα με το μοντέλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JUWPiZ5IJSY=', 3168, -1, 1);
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
    var weight = DecodeNumber('UkuASGw8Esg=', 3172, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UkuASGw8Esg=', 3172, -1000, 1000),DecodeDecimal('Ktw993H8wTE=', 3172, -1000, 1000),DecodeDecimal('Ktw993H8wTE=', 3172, -1000, 1000));
    question.answers.length = 0;
    question.num = 219;
    question.isSingleAns = false;
    question.shortTextQuestion = "219. Σημειώστε το σωστό Οι υφές εμφανίζονται στον πίνακα Επίπεδα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UkuASGw8Esg=', 3174, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ως ένθετα στοιχεία";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FedEDWS0ukY=', 3176, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ως καταχωρίσεις";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FedEDWS0ukY=', 3178, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. ως ομάδες τύπου χάρτη";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TdBs2kadAP0=', 3180, -1, 1);
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
    var weight = DecodeNumber('YDU6iC5wvJ8=', 3182, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YDU6iC5wvJ8=', 3182, -1000, 1000),DecodeDecimal('iLM7GTL2aww=', 3182, -1000, 1000),DecodeDecimal('iLM7GTL2aww=', 3182, -1000, 1000));
    question.answers.length = 0;
    question.num = 220;
    question.isSingleAns = false;
    question.shortTextQuestion = "220. Σημειώστε το σωστό Η απεικόνιση UV  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7w+iek1xtRs=', 3184, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει στην υφή 2D να χρωματιστεί σωστά στο μοντέλο 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7w+iek1xtRs=', 3186, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. επιτρέπει στην υφή 2D να χρωματιστεί σωστά στο μοντέλο 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('egZcMAk0J4o=', 3188, -1, 1);
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
    var weight = DecodeNumber('2taCILvZJp4=', 3192, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2taCILvZJp4=', 3192, -1000, 1000),DecodeDecimal('O/M+JjhQPQc=', 3192, -1000, 1000),DecodeDecimal('O/M+JjhQPQc=', 3192, -1000, 1000));
    question.answers.length = 0;
    question.num = 221;
    question.isSingleAns = false;
    question.shortTextQuestion = "221. Οι υφές 3D στο Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2taCILvZJp4=', 3194, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ανοίγουν ως έξυπνα αντικείμενα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('metMpd1yn2c=', 3196, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ανοίγουν ως αρχεία 2D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RI3CsPSeEtM=', 3198, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RI3CsPSeEtM=', 3200, -1, 1);
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
    var weight = DecodeNumber('aiPYvJfezDc=', 3202, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aiPYvJfezDc=', 3202, -1000, 1000),DecodeDecimal('TW0ECNfKF3Q=', 3202, -1000, 1000),DecodeDecimal('TW0ECNfKF3Q=', 3202, -1000, 1000));
    question.answers.length = 0;
    question.num = 222;
    question.isSingleAns = false;
    question.shortTextQuestion = "222. Σημειώστε το σωστό Η επαναλαμβανόμενη υφή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Zoab822YTNc=', 3204, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. καλύπτει ρεαλιστικά την επιφάνεια του μοντέλου";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Zoab822YTNc=', 3206, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν βελτιώνει τη λειτουργία απόδοσης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3PmUg/xR2xM=', 3208, -1, 1);
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
    var weight = DecodeNumber('q3Y8GdMqam8=', 3212, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('q3Y8GdMqam8=', 3212, -1000, 1000),DecodeDecimal('y++tdgwQmyY=', 3212, -1000, 1000),DecodeDecimal('y++tdgwQmyY=', 3212, -1000, 1000));
    question.answers.length = 0;
    question.num = 223;
    question.isSingleAns = false;
    question.shortTextQuestion = "223. Σημειώστε το σωστό Το πρόγραμμα Photoshop αυτόματα μπορεί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jx0eo1Y0vWI=', 3214, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να εντοπίσει συγκεκριμένες περιοχές του μοντέλου κατάλληλες για χρώμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jx0eo1Y0vWI=', 3216, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να χρωματίσει το μοντέλο χωρίς χάρτη υφής";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pz2nyYwzAno=', 3218, -1, 1);
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
    var weight = DecodeNumber('H2pmzEBysss=', 3222, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H2pmzEBysss=', 3222, -1000, 1000),DecodeDecimal('C7mTbZvh58U=', 3222, -1000, 1000),DecodeDecimal('C7mTbZvh58U=', 3222, -1000, 1000));
    question.answers.length = 0;
    question.num = 224;
    question.isSingleAns = false;
    question.shortTextQuestion = "224. Σημειώστε το σωστό Ο χάρτης υφής επιτρέπει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IjstyytSrQI=', 3224, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. να είναι ορατά τα αποτελέσματα του χρωματισμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IjstyytSrQI=', 3226, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. να χρωματίζεται το επίπεδο χωρίς να είναι ορατές οι ενέργειες";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dLKDYDniH6M=', 3228, -1, 1);
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
    var weight = DecodeNumber('omhzfrC48WM=', 3232, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('omhzfrC48WM=', 3232, -1000, 1000),DecodeDecimal('528WxWWrLtc=', 3232, -1000, 1000),DecodeDecimal('528WxWWrLtc=', 3232, -1000, 1000));
    question.answers.length = 0;
    question.num = 225;
    question.isSingleAns = false;
    question.shortTextQuestion = "225. Σημειώστε το σωστό Η γωνία σταδιακής μείωσης του χρωματισμού  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oYt7AF2rDf0=', 3234, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ελέγχει την ποσότητα του χρώματος που εφαρμόζεται σε επιφάνειες που σχηματίζουν γωνίες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oYt7AF2rDf0=', 3236, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ελέγχει τη γωνία μετάβασης από τα φωτεινά στα σκοτεινά εικονοστοιχεία πάνω στην επιφάνεια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Opr0pt9rBVU=', 3238, -1, 1);
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
    var weight = DecodeNumber('2KePenk4s94=', 3242, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2KePenk4s94=', 3242, -1000, 1000),DecodeDecimal('7J0Zl1Yu/VM=', 3242, -1000, 1000),DecodeDecimal('7J0Zl1Yu/VM=', 3242, -1000, 1000));
    question.answers.length = 0;
    question.num = 226;
    question.isSingleAns = false;
    question.shortTextQuestion = "226. Σημειώστε το σωστό Τα αντικείμενα με ένα μόνο δικτύωμα είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Eg+XUyh9HAg=', 3244, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το καπέλο  η σφαίρα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Eg+XUyh9HAg=', 3246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. κώνος κύλινδρος-μπουκάλι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D1M23xQyGDk=', 3248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. κανένα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+foDwpjGpns=', 3250, -1, 1);
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
    var weight = DecodeNumber('XRAuCdgvUrs=', 3252, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XRAuCdgvUrs=', 3252, -1000, 1000),DecodeDecimal('G6KnBnt8ZGU=', 3252, -1000, 1000),DecodeDecimal('G6KnBnt8ZGU=', 3252, -1000, 1000));
    question.answers.length = 0;
    question.num = 227;
    question.isSingleAns = false;
    question.shortTextQuestion = "227. Σημειώστε το σωστό Η συγχώνευση επιπέδων 3D επιτρέπει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/2KpY8Mc3Ww=', 3254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε ένα σκηνικό να συνδυάζονται πολλαπλά μοντέλα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/2KpY8Mc3Ww=', 3256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε πολλά σκηνικά να συνδυάζεται ένα μοντέλο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JOI+ONfUo3g=', 3258, -1, 1);
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
    var weight = DecodeNumber('apheEfa3UKY=', 3262, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('apheEfa3UKY=', 3262, -1000, 1000),DecodeDecimal('eAm1k0KcWyM=', 3262, -1000, 1000),DecodeDecimal('eAm1k0KcWyM=', 3262, -1000, 1000));
    question.answers.length = 0;
    question.num = 228;
    question.isSingleAns = false;
    question.shortTextQuestion = "228. Σημειώστε το σωστό Μετά τη συγχώνευση  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LwdzIpEA1pg=', 3264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. όλα τα υλικά και δικτυώματα εμφανίζονται στον πίνακα 3D";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LwdzIpEA1pg=', 3266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μόνο τα υλικά και δικτυώματα του μεγαλύτερου αρχείου εμφανίζονται στον πίνακα 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RU5IINDKQng=', 3268, -1, 1);
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
    var weight = DecodeNumber('jrPe8DVtRjA=', 3272, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jrPe8DVtRjA=', 3272, -1000, 1000),DecodeDecimal('U834eLnwj0w=', 3272, -1000, 1000),DecodeDecimal('U834eLnwj0w=', 3272, -1000, 1000));
    question.answers.length = 0;
    question.num = 229;
    question.isSingleAns = false;
    question.shortTextQuestion = "229. Σημειώστε το σωστό Για κινούμενες εικόνες υψηλής ποιότητας  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('R5xZZ6fmWlw=', 3274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ρυθμίζεται η απόδοση «Απόδοση για τελική έξοδο» ανά καρέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('R5xZZ6fmWlw=', 3276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ρυθμίζεται η εγκάρσια τομή ανάμεσα στα καρέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+adfzE9YB7s=', 3278, -1, 1);
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
    var weight = DecodeNumber('+WxDr3mUfQU=', 3282, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+WxDr3mUfQU=', 3282, -1000, 1000),DecodeDecimal('sQQfPdAAZKk=', 3282, -1000, 1000),DecodeDecimal('sQQfPdAAZKk=', 3282, -1000, 1000));
    question.answers.length = 0;
    question.num = 230;
    question.isSingleAns = false;
    question.shortTextQuestion = "230. Σημειώστε το σωστό Με τη μετατροπή ενός επιπέδου 3D σε 2D  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hrR5jPUp9v4=', 3284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ραστεροποιείται το περιεχόμενο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hrR5jPUp9v4=', 3286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μπορεί να υποστεί επεξεργασία το μοντέλο 3D";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yz5DtrbVr3Y=', 3288, -1, 1);
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
    var weight = DecodeNumber('J6wif9RZ/js=', 3292, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J6wif9RZ/js=', 3292, -1000, 1000),DecodeDecimal('bC3/cxbGAgQ=', 3292, -1000, 1000),DecodeDecimal('bC3/cxbGAgQ=', 3292, -1000, 1000));
    question.answers.length = 0;
    question.num = 231;
    question.isSingleAns = false;
    question.shortTextQuestion = "231. Σημειώστε το σωστό Η απόκρυψη πολλών επιπέδων ενός εγγράφου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J+ZgVGDi8ZE=', 3294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται για ταχύτερη απόδοση της εικόνας στην οθόνη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J+ZgVGDi8ZE=', 3296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται για την καλύτερη απόδοση των εργαλείων χρωματισμού στο ενεργό επίπεδο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Dn7XEmDSSNo=', 3298, -1, 1);
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
    var weight = DecodeNumber('dLkbybmUyMY=', 3302, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dLkbybmUyMY=', 3302, -1000, 1000),DecodeDecimal('qezccKVBJiM=', 3302, -1000, 1000),DecodeDecimal('qezccKVBJiM=', 3302, -1000, 1000));
    question.answers.length = 0;
    question.num = 232;
    question.isSingleAns = false;
    question.shortTextQuestion = "232. Σημειώστε το σωστό Η δημιουργία κίνησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JbgnaBDMz3g=', 3304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από τον πίνακα Κινούμενη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JbgnaBDMz3g=', 3306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται από τον πίνακα επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dK6dOVn5zvs=', 3308, -1, 1);
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
    var weight = DecodeNumber('oz9Ih0rf+PI=', 3312, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oz9Ih0rf+PI=', 3312, -1000, 1000),DecodeDecimal('WrhL5P5XUlY=', 3312, -1000, 1000),DecodeDecimal('WrhL5P5XUlY=', 3312, -1000, 1000));
    question.answers.length = 0;
    question.num = 233;
    question.isSingleAns = false;
    question.shortTextQuestion = "233. Σημειώστε το σωστό Η κινούμενη εικόνα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hCgE5t8k7F8=', 3314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι πολλά καρέ με διαφορετική διαμόρφωση επιπέδων μιας εικόνας σε κάθε ένα από αυτά";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hCgE5t8k7F8=', 3316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι ένας καθορισμένος αριθμός καρέ με διαφορετικές εικόνες σε κάθε ένα από αυτά";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BNdkpxCfM38=', 3318, -1, 1);
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
    var weight = DecodeNumber('5s4tPaDoV14=', 3322, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5s4tPaDoV14=', 3322, -1000, 1000),DecodeDecimal('WZgvD+LBWYA=', 3322, -1000, 1000),DecodeDecimal('WZgvD+LBWYA=', 3322, -1000, 1000));
    question.answers.length = 0;
    question.num = 234;
    question.isSingleAns = false;
    question.shortTextQuestion = "234. Σημειώστε το σωστό Σε ένα επίπεδο φόντου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5s4tPaDoV14=', 3324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δημιουργείται κίνηση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VYz6Pqq8Yek=', 3326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν δημιουργείται κίνηση (είναι και αυτό σωστό)";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W+FMhO81+Jo=', 3328, -1, 1);
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
    var weight = DecodeNumber('Y+I2iSLVarI=', 3332, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Y+I2iSLVarI=', 3332, -1000, 1000),DecodeDecimal('gAjG2ZwSFZ8=', 3332, -1000, 1000),DecodeDecimal('gAjG2ZwSFZ8=', 3332, -1000, 1000));
    question.answers.length = 0;
    question.num = 235;
    question.isSingleAns = false;
    question.shortTextQuestion = "235. Σημειώστε το σωστό Η προεπισκόπηση της κινούμενης εικόνα (και αυτό σωστό )  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Y+I2iSLVarI=', 3334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται από τον πίνακα κινούμενη εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wwzE95CkQ94=', 3336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται από τον πίνακα επιπέδων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('taK83YXW+l8=', 3338, -1, 1);
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
    var weight = DecodeNumber('mP71vf9VAow=', 3342, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mP71vf9VAow=', 3342, -1000, 1000),DecodeDecimal('iqfbI8DyBcs=', 3342, -1000, 1000),DecodeDecimal('iqfbI8DyBcs=', 3342, -1000, 1000));
    question.answers.length = 0;
    question.num = 236;
    question.isSingleAns = false;
    question.shortTextQuestion = "236. Σημειώστε το σωστό Η αποθήκευση της κινούμενης εικόνας δεν  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mP71vf9VAow=', 3344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. γίνεται ως αρχείο gif με την εντολή αποθήκευση για web & συσκευές";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zsnP34GB1UQ=', 3346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. γίνεται ως μορφή PSD";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u5aqlz3ynp8=', 3348, -1, 1);
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
    var weight = DecodeNumber('cJ/SU3OGnr0=', 3352, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cJ/SU3OGnr0=', 3352, -1000, 1000),DecodeDecimal('8Ogkp427N6g=', 3352, -1000, 1000),DecodeDecimal('8Ogkp427N6g=', 3352, -1000, 1000));
    question.answers.length = 0;
    question.num = 237;
    question.isSingleAns = false;
    question.shortTextQuestion = "237. Σημειώστε το σωστό Το κουμπί Ενοποίηση στυλ επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bOxCsjXNWXo=', 3354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενεργοποιείται για να εφαρμοστεί ένα στυλ σε όλα τα άλλα καρέ στο ενεργό επίπεδο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bOxCsjXNWXo=', 3356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποιείται για να εφαρμοστεί ένα στυλ στο ενεργοποιημένο καρέ στο ενεργό επίπεδο";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dIVImXFDhF8=', 3358, -1, 1);
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
    var weight = DecodeNumber('Q5iqZM5bMk0=', 3362, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q5iqZM5bMk0=', 3362, -1000, 1000),DecodeDecimal('OS9myI8ewxg=', 3362, -1000, 1000),DecodeDecimal('OS9myI8ewxg=', 3362, -1000, 1000));
    question.answers.length = 0;
    question.num = 238;
    question.isSingleAns = false;
    question.shortTextQuestion = "238. Σημειώστε το σωστό Η αντιγραφή καρέ είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q5iqZM5bMk0=', 3364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η αντιγραφή μιας εικόνας με όλα τα επίπεδά της";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1TPa+xEB+I0=', 3366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. η αντιγραφή μιας διπλότυπης εκδοχής μιας εικόνας με συγκεκριμένη διαμόρφωση επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1TPa+xEB+I0=', 3368, -1, 1);
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
    var weight = DecodeNumber('6UYXPy8Hto8=', 3372, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6UYXPy8Hto8=', 3372, -1000, 1000),DecodeDecimal('963AJVcHv4U=', 3372, -1000, 1000),DecodeDecimal('963AJVcHv4U=', 3372, -1000, 1000));
    question.answers.length = 0;
    question.num = 239;
    question.isSingleAns = false;
    question.shortTextQuestion = "239. Σημειώστε το σωστό Η εντολή Επικόλληση πάνω στην επιλογή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6UYXPy8Hto8=', 3374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αντικαθιστούνται τα επίπεδα της εικόνας με τα νέα επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KgS532npzOs=', 3376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. διπλασιάζεται ο αριθμός των επιπέδων της εικόνας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KgS532npzOs=', 3378, -1, 1);
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
    var weight = DecodeNumber('QPZDFh2ScOw=', 3382, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QPZDFh2ScOw=', 3382, -1000, 1000),DecodeDecimal('kFZcdGxa/Cw=', 3382, -1000, 1000),DecodeDecimal('kFZcdGxa/Cw=', 3382, -1000, 1000));
    question.answers.length = 0;
    question.num = 240;
    question.isSingleAns = false;
    question.shortTextQuestion = "240. Σημειώστε το σωστό Η εντολή Σύνδεση προστιθέμενων επιπέδων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CiQWIIr+Fls=', 3384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ενεργοποιείται μόνο όταν επικολλούνται καρέ σε διαφορετικά έγγραφα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CiQWIIr+Fls=', 3386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ενεργοποιείται μόνο για να συνδεθούν τα επίπεδα που έχουν επικολληθεί στον πίνακα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2OliEarLuyM=', 3388, -1, 1);
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
    var weight = DecodeNumber('9lxHq40z3lQ=', 3392, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9lxHq40z3lQ=', 3392, -1000, 1000),DecodeDecimal('aZ+0EzX2FbA=', 3392, -1000, 1000),DecodeDecimal('aZ+0EzX2FbA=', 3392, -1000, 1000));
    question.answers.length = 0;
    question.num = 241;
    question.isSingleAns = false;
    question.shortTextQuestion = "241. Σημειώστε το σωστό Η μέθοδος εισαγωγής ενδιάμεσων εικόνων  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9lxHq40z3lQ=', 3394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μειώνει το χρόνο που απαιτείται για τη δημιουργία εφε κίνησης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t13Et37CtBk=', 3396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την αυτόνομη επεξεργασία των καρέ που δημιουργούνται";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('T+7up2ceHck=', 3398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. επιτρέπει την αυτόματη τροποποίηση πολλών καρέ ανάμεσα σε δύο υπάρχοντα καρέ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6HRFX2kVGkE=', 3400, -1, 1);
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
    var weight = DecodeNumber('pV+ln3rruZc=', 3402, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pV+ln3rruZc=', 3402, -1000, 1000),DecodeDecimal('zZPHaZ5zS7s=', 3402, -1000, 1000),DecodeDecimal('zZPHaZ5zS7s=', 3402, -1000, 1000));
    question.answers.length = 0;
    question.num = 242;
    question.isSingleAns = false;
    question.shortTextQuestion = "242. Σημειώστε το σωστό Συγκριτικά με τα άλλα προγράμματα η εγγενής φύση του Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lf4CLqv9dRM=', 3404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποθηκεύει τις στρώσεις μιας εικόνας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lf4CLqv9dRM=', 3406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αποθηκεύει την εικόνα χωρίς γραμμές οδηγούς";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j7tAw3/dSd8=', 3408, -1, 1);
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
    var weight = DecodeNumber('ogYL+5Z4UWU=', 3412, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ogYL+5Z4UWU=', 3412, -1000, 1000),DecodeDecimal('OikaqUkFRFM=', 3412, -1000, 1000),DecodeDecimal('OikaqUkFRFM=', 3412, -1000, 1000));
    question.answers.length = 0;
    question.num = 243;
    question.isSingleAns = false;
    question.shortTextQuestion = "243. Σημειώστε το σωστό Το πρόγραμμα Photoshop  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p6YiJ1TXdBY=', 3414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ανοίγει και εικόνες με επίπεδα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p6YiJ1TXdBY=', 3416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ανοίγει τις εικόνες όπως τα άλλα προγράμματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J1Rd3RN0DMo=', 3418, -1, 1);
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
    var weight = DecodeNumber('cmfUsdM+f6w=', 3422, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cmfUsdM+f6w=', 3422, -1000, 1000),DecodeDecimal('kVoWw+AvnIw=', 3422, -1000, 1000),DecodeDecimal('kVoWw+AvnIw=', 3422, -1000, 1000));
    question.answers.length = 0;
    question.num = 244;
    question.isSingleAns = false;
    question.shortTextQuestion = "244. Σημειώστε το σωστό η μέθοδος απόρριψης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cmfUsdM+f6w=', 3424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζει την απόρριψη ή την μη απόρριψη του επόμενου καρέ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JzJ0UPv6T0k=', 3426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσδιορίζει την απόρριψη ή την μη απόρριψη του προηγούμενου καρέ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('001KoCOpxac=', 3428, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. αφορά τις κινούμενες εικόνες που περιλαμβάνουν διαφάνεια φόντου";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('001KoCOpxac=', 3430, -1, 1);
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
    var weight = DecodeNumber('zFth51ZOubQ=', 3432, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zFth51ZOubQ=', 3432, -1000, 1000),DecodeDecimal('gV1gSlTEFLM=', 3432, -1000, 1000),DecodeDecimal('gV1gSlTEFLM=', 3432, -1000, 1000));
    question.answers.length = 0;
    question.num = 245;
    question.isSingleAns = false;
    question.shortTextQuestion = "245. Σημειώστε το σωστό Στη λίστα Save as.. η επιλογή Save Thumbnail  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t2iajsN9icM=', 3434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Αποθηκεύει μικρογραφία εικόνας ως προεπισκόπηση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t2iajsN9icM=', 3436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Αποθηκεύει την εικόνα με αλλαγμένες διαστάσεις";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Hruvtzx2gUE=', 3438, -1, 1);
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
    var weight = DecodeNumber('ANfw3RCOa5c=', 3442, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ANfw3RCOa5c=', 3442, -1000, 1000),DecodeDecimal('h4twtfWg2Jc=', 3442, -1000, 1000),DecodeDecimal('h4twtfWg2Jc=', 3442, -1000, 1000));
    question.answers.length = 0;
    question.num = 246;
    question.isSingleAns = false;
    question.shortTextQuestion = "246. Σημειώστε το σωστό Στη χρονογραμμή animation  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7bh6oSFw4Vc=', 3444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. η επιλογή επανάληψης καθορίζει τις φορές αναπαραγωγής";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7bh6oSFw4Vc=', 3446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. καθορίζει αν γίνει η αναπαραγωγή ή όχι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NI75wgJkADY=', 3448, -1, 1);
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
    var weight = DecodeNumber('7JXm47xQ8VQ=', 3452, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7JXm47xQ8VQ=', 3452, -1000, 1000),DecodeDecimal('R8QLIfehb80=', 3452, -1000, 1000),DecodeDecimal('R8QLIfehb80=', 3452, -1000, 1000));
    question.answers.length = 0;
    question.num = 247;
    question.isSingleAns = false;
    question.shortTextQuestion = "247. Σημειώστε το σωστό Στο πλαίσιο διαλόγου Εκτύπωση, η εκτυπώσιμη περιοχή είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JlgJfJMWl5I=', 3454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. λευκή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JlgJfJMWl5I=', 3456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μαύρη";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ehhIeqFt9fw=', 3458, -1, 1);
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
    var weight = DecodeNumber('vETwumJtggQ=', 3462, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vETwumJtggQ=', 3462, -1000, 1000),DecodeDecimal('EiuaNNi45fs=', 3462, -1000, 1000),DecodeDecimal('EiuaNNi45fs=', 3462, -1000, 1000));
    question.answers.length = 0;
    question.num = 248;
    question.isSingleAns = false;
    question.shortTextQuestion = "248. Σημειώστε το σωστό Η αλλαγή θέσης μιας εικόνας στο χαρτί γίνεται μέσα από το πλαίσιο διαλόγου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7gyfkYWKjKc=', 3464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7gyfkYWKjKc=', 3466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('s6Ku3/QXyds=', 3468, -1, 1);
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
    var weight = DecodeNumber('zTeeSqqeLVU=', 3472, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zTeeSqqeLVU=', 3472, -1000, 1000),DecodeDecimal('EF6ErEJeot4=', 3472, -1000, 1000),DecodeDecimal('EF6ErEJeot4=', 3472, -1000, 1000));
    question.answers.length = 0;
    question.num = 249;
    question.isSingleAns = false;
    question.shortTextQuestion = "249. Σημειώστε το σωστό Το πλαίσιο διαλόγου Εκτύπωση περιλαμβάνει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8Fm2GOkbokI=', 3474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Ορισμό επιλογών εξόδου προεκτύπωσης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8Fm2GOkbokI=', 3476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Ορισμό ρύθμισης διαχωρισμού τετραχρωμίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('koTpUUFcsqs=', 2836, -1, 1);
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
    var weight = DecodeNumber('Ganq4K7H9uo=', 2840, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ganq4K7H9uo=', 2840, -1000, 1000),DecodeDecimal('/q+5AmvAydY=', 2840, -1000, 1000),DecodeDecimal('/q+5AmvAydY=', 2840, -1000, 1000));
    question.answers.length = 0;
    question.num = 250;
    question.isSingleAns = false;
    question.shortTextQuestion = "250. Σημειώστε το σωστό Όταν το μέγεθος εικόνας είναι μεγαλύτερο από την εκτυπώσιμη επιφάνεια  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XkLmXgsshJ0=', 2842, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μέσα από το μενού Εκτύπωση επιλέγεται το Προσαρμογή στο μέσο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XkLmXgsshJ0=', 2844, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Μέσα από το μενού Εκτύπωση ρυθμίζεται το μέγεθος της εκτυπώσιμης επιφάνειας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vt8HbyjWiGg=', 2846, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/Zm+Vxst+jM=', 2848, -1, 1);
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
    var weight = DecodeNumber('/rnc9Ur3vqs=', 2850, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/rnc9Ur3vqs=', 2850, -1000, 1000),DecodeDecimal('wp8la352l1A=', 2850, -1000, 1000),DecodeDecimal('wp8la352l1A=', 2850, -1000, 1000));
    question.answers.length = 0;
    question.num = 251;
    question.isSingleAns = false;
    question.shortTextQuestion = "251. Σημειώστε το σωστό Η κλιμάκωση της εκτυπωμένης εικόνας γίνεται μέσα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oCRxBAMBzlY=', 2852, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Από το πλαίσιο διαλόγου Εκτύπωση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oCRxBAMBzlY=', 2854, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Από το πλαίσιο διαλόγου Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9j1cwr80uzE=', 2856, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. Όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eYenEDwezmk=', 2858, -1, 1);
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
    var weight = DecodeNumber('7L72mHS8zsc=', 2860, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7L72mHS8zsc=', 2860, -1000, 1000),DecodeDecimal('gK/ZhIEBAA4=', 2860, -1000, 1000),DecodeDecimal('gK/ZhIEBAA4=', 2860, -1000, 1000));
    question.answers.length = 0;
    question.num = 252;
    question.isSingleAns = false;
    question.shortTextQuestion = "252. Σημειώστε το σωστό Η διαχείριση χρωμάτων εκτύπωσης γίνεται καλύτερα μέσα από  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xQdf0eVharA=', 2862, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xQdf0eVharA=', 2864, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Τους οδηγούς του εκτυπωτή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kV8COLjZTkw=', 2866, -1, 1);
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
    var weight = DecodeNumber('kUrmC8tPB38=', 2870, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kUrmC8tPB38=', 2870, -1000, 1000),DecodeDecimal('EWj4ldi3CxA=', 2870, -1000, 1000),DecodeDecimal('EWj4ldi3CxA=', 2870, -1000, 1000));
    question.answers.length = 0;
    question.num = 253;
    question.isSingleAns = false;
    question.shortTextQuestion = "253. Σημειώστε το σωστό Η επιλογή Αντιστάθμιση μαύρου σημείου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kUrmC8tPB38=', 2872, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Δεν διατηρεί τις λεπτομέρειες των σκούρων τόνων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hY1D7w1IZFY=', 2874, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Διατηρεί τις λεπτομέρειες των σκούρων τόνων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hY1D7w1IZFY=', 2876, -1, 1);
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
    var weight = DecodeNumber('r/4I0n7PZ90=', 2880, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r/4I0n7PZ90=', 2880, -1000, 1000),DecodeDecimal('ls4RRHNFCU0=', 2880, -1000, 1000),DecodeDecimal('ls4RRHNFCU0=', 2880, -1000, 1000));
    question.answers.length = 0;
    question.num = 254;
    question.isSingleAns = false;
    question.shortTextQuestion = "254. Σημειώστε το σωστό Η επιλογή Προσαρμογή στο μέσο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VCVTv0uUhOY=', 2882, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσαρμόζει το μέγεθος της εικόνας με το μέγεθος της εκτυπώσιμης επιφάνειας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VCVTv0uUhOY=', 2884, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσαρμόζει το μέγεθος της εκτυπώσιμης επιφάνειας με το μέγεθος του χαρτιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('b69p7mtNq9o=', 2886, -1, 1);
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
    var weight = DecodeNumber('1Xd9SO7jt5M=', 2890, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1Xd9SO7jt5M=', 2890, -1000, 1000),DecodeDecimal('YvJB0Jb0UMM=', 2890, -1000, 1000),DecodeDecimal('YvJB0Jb0UMM=', 2890, -1000, 1000));
    question.answers.length = 0;
    question.num = 255;
    question.isSingleAns = false;
    question.shortTextQuestion = "255. Σημειώστε το σωστό Για τον προσδιορισμό των χρωμάτων εκτύπωσης από τον εκτυπωτή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x8e8xr8CCr8=', 2892, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Μέσα από το μενού Εκτύπωση γίνεται κλικ στη χρωματική διαχείριση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x8e8xr8CCr8=', 2894, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Μέσα από το μενού Ρύθμιση σελίδας γίνεται κλικ στην χρωματική διαχείριση";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9X/37EZpSZs=', 2896, -1, 1);
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
    var weight = DecodeNumber('Bb0hIZJS38o=', 2900, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Bb0hIZJS38o=', 2900, -1000, 1000),DecodeDecimal('okuPKOqo4ZQ=', 2900, -1000, 1000),DecodeDecimal('okuPKOqo4ZQ=', 2900, -1000, 1000));
    question.answers.length = 0;
    question.num = 256;
    question.isSingleAns = false;
    question.shortTextQuestion = "256. Σημειώστε το σωστό Η επιλογή Δοκίμιο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VU7IT/fyUuM=', 2902, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Βρίσκεται μέσα στο αναδυόμενο μενού της επιλογής Χρωματική διαχείριση";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VU7IT/fyUuM=', 2904, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Βρίσκεται μέσα στο πλαίσιο διαλόγου Ρύθμιση σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZTnfpgRo0Ek=', 2906, -1, 1);
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
    var weight = DecodeNumber('YembO6Wcjj8=', 2910, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YembO6Wcjj8=', 2910, -1000, 1000),DecodeDecimal('pyczmTgU1yo=', 2910, -1000, 1000),DecodeDecimal('pyczmTgU1yo=', 2910, -1000, 1000));
    question.answers.length = 0;
    question.num = 257;
    question.isSingleAns = false;
    question.shortTextQuestion = "257. Σημειώστε το σωστό Η επιλογή Γραμμές βαθμονόμησης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yPvBisAPEow=', 2912, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εκτυπώνει μια κλίμακα του γκρι 11 σταδίων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yPvBisAPEow=', 2914, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εκτυπώνει όλα τα χρώματα της εικόνας σε 11 στάδια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ze2dHEWWu+4=', 2916, -1, 1);
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
    var weight = DecodeNumber('P3m+NUJTN5I=', 2920, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('P3m+NUJTN5I=', 2920, -1000, 1000),DecodeDecimal('9beDHVDaepw=', 2920, -1000, 1000),DecodeDecimal('9beDHVDaepw=', 2920, -1000, 1000));
    question.answers.length = 0;
    question.num = 258;
    question.isSingleAns = false;
    question.shortTextQuestion = "258. Σημειώστε το σωστό Τα ημιτονικά ράστερ  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bQbVnhKmKEw=', 2922, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. αποτελούνται από κουκκίδες που ελέγχουν την ποσότητα μελανιού που τοποθετείται σε ένα σημείο συγκεκριμένο στο πιεστήριο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bQbVnhKmKEw=', 2924, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι σημεία πάνω στην εκτυπωμένη σελίδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YlBrM5kHrLk=', 2926, -1, 1);
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
    var weight = DecodeNumber('Zyg5U12x+/8=', 2930, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Zyg5U12x+/8=', 2930, -1000, 1000),DecodeDecimal('Sm6LBQlGFGg=', 2930, -1000, 1000),DecodeDecimal('Sm6LBQlGFGg=', 2930, -1000, 1000));
    question.answers.length = 0;
    question.num = 259;
    question.isSingleAns = false;
    question.shortTextQuestion = "259. Σημειώστε το σωστό Ένας επιτραπέζιος εκτυπωτής  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Zyg5U12x+/8=', 2932, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν αναπαράγει πιστά τα αποτελέσματα της προεπισκόπησης";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tg0jkMBtFO4=', 2934, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. αναπαράγει πιστά τα αποτελέσματα της προεπισκόπησης";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xPYsBzNhO5Q=', 2936, -1, 1);
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
    var weight = DecodeNumber('E4gOfKQuawo=', 2940, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E4gOfKQuawo=', 2940, -1000, 1000),DecodeDecimal('wKhq36RhKZ8=', 2940, -1000, 1000),DecodeDecimal('wKhq36RhKZ8=', 2940, -1000, 1000));
    question.answers.length = 0;
    question.num = 260;
    question.isSingleAns = false;
    question.shortTextQuestion = "260. Σημειώστε το σωστό Με την εντολή Προσαρμογή από το μενού Σχήμα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8uVvWPG/1RE=', 2942, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ορίζονται νέα σχήματα κουκκίδας";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8uVvWPG/1RE=', 2944, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσαρμόζονται τα σχήματα στο μέγεθος της εκτυπώσιμης σελίδας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZF0xf6J8T8A=', 2946, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. όλα τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4dSuf5/zu5k=', 2948, -1, 1);
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
    var weight = DecodeNumber('W92/854KqwE=', 2950, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('W92/854KqwE=', 2950, -1000, 1000),DecodeDecimal('ZhSl/2zWjGU=', 2950, -1000, 1000),DecodeDecimal('ZhSl/2zWjGU=', 2950, -1000, 1000));
    question.answers.length = 0;
    question.num = 261;
    question.isSingleAns = false;
    question.shortTextQuestion = "261. Σημειώστε το σωστό Η εντολή Διαχωρισμοί  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZbyxA61LVGs=', 2952, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. επιτρέπει την εκτύπωση καναλιών χρωμάτων σε διαφορετικές σελίδες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZbyxA61LVGs=', 2954, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. επιτρέπει την εκτύπωση καναλιών χρωμάτων σε μία σελίδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+ybB62ESccw=', 2956, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. τίποτα από τα παραπάνω";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6TRA4RGfmvw=', 2958, -1, 1);
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
    var weight = DecodeNumber('i3KgfvbiaFk=', 2960, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i3KgfvbiaFk=', 2960, -1000, 1000),DecodeDecimal('C1XLGH25dJE=', 2960, -1000, 1000),DecodeDecimal('C1XLGH25dJE=', 2960, -1000, 1000));
    question.answers.length = 0;
    question.num = 262;
    question.isSingleAns = false;
    question.shortTextQuestion = "262. Σημειώστε το σωστό Η εντολή Χρώματα επιτύπωσης αφορά  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('i3KgfvbiaFk=', 2962, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. τρία μη ραστεροποιημένα μελάνια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7aKjwkQ6jFs=', 2964, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. τέσσερα μη ραστεροποιημένα μελάνια";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/M37ENOwQe8=', 2966, -1, 1);
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
    var weight = DecodeNumber('QNRQHEsuvjs=', 2970, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QNRQHEsuvjs=', 2970, -1000, 1000),DecodeDecimal('0BIZfm1C3ho=', 2970, -1000, 1000),DecodeDecimal('0BIZfm1C3ho=', 2970, -1000, 1000));
    question.answers.length = 0;
    question.num = 263;
    question.isSingleAns = false;
    question.shortTextQuestion = "263. Σημειώστε το σωστό Μονοτονικές εικόνες είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QNRQHEsuvjs=', 2972, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εικόνες που εκτυπώνονται με μαύρο μελάνι";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8rrdMNjp4/E=', 2974, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εικόνες που εκτυπώνονται με ένα μπλέ μελάνι";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o26QdhjW0PI=', 2976, -1, 1);
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
    var weight = DecodeNumber('3RIvDBQxp5M=', 2980, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3RIvDBQxp5M=', 2980, -1000, 1000),DecodeDecimal('+KJ2QJ4NDKI=', 2980, -1000, 1000),DecodeDecimal('+KJ2QJ4NDKI=', 2980, -1000, 1000));
    question.answers.length = 0;
    question.num = 264;
    question.isSingleAns = false;
    question.shortTextQuestion = "264. Σημειώστε το σωστό Για την σωστή εκτύπωση των διαχωρισμών  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3RIvDBQxp5M=', 2982, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Χρειάζεται η μετατροπή της εικόνας σε RGB";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J9xR5DJNcSs=', 2984, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Χρειάζεται η μετατροπή της εικόνας σε CMYK";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J9xR5DJNcSs=', 2986, -1, 1);
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
    var weight = DecodeNumber('SaZruwTQMD4=', 2990, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SaZruwTQMD4=', 2990, -1000, 1000),DecodeDecimal('4ASrIxBXlz0=', 2990, -1000, 1000),DecodeDecimal('4ASrIxBXlz0=', 2990, -1000, 1000));
    question.answers.length = 0;
    question.num = 265;
    question.isSingleAns = false;
    question.shortTextQuestion = "265. Σημειώστε το σωστό Η προεπισκόπηση σε πολυκάναλη λειτουργία χρώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2/kGX9cHpkw=', 2992, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. δεν είναι τόσο ακριβής όσο εκείνη στη λειτουργία διτονικού χρώματος";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2/kGX9cHpkw=', 2994, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι τόσο ακριβής όσο εκείνη στη λειτουργία διτονικού χρώματος";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uSH2QBt0/O4=', 2996, -1, 1);
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
    var weight = DecodeNumber('1X9Qb66cmFw=', 3000, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1X9Qb66cmFw=', 3000, -1000, 1000),DecodeDecimal('Ym1K9C2jpTI=', 3000, -1000, 1000),DecodeDecimal('Ym1K9C2jpTI=', 3000, -1000, 1000));
    question.answers.length = 0;
    question.num = 266;
    question.isSingleAns = false;
    question.shortTextQuestion = "266. Σημειώστε το σωστό Η πραγματική πυκνότητα του μελανιού στον εκτυπωτή  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/2vyvIftUvc=', 3002, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προσδιορίζεται με την επιλογή Αδιαφάνεια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/2vyvIftUvc=', 3004, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. προσδιορίζεται με την εντολή Πυκνότητα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AD8O8c2Z8RE=', 3006, -1, 1);
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
    var weight = DecodeNumber('L1sNJGycZ88=', 3010, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L1sNJGycZ88=', 3010, -1000, 1000),DecodeDecimal('iTq+Q8pRGb8=', 3010, -1000, 1000),DecodeDecimal('iTq+Q8pRGb8=', 3010, -1000, 1000));
    question.answers.length = 0;
    question.num = 267;
    question.isSingleAns = false;
    question.shortTextQuestion = "267. Σημειώστε το σωστό Το ΡΑΝΤΟΝΕ ή το ΤΟΥΟ είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L1sNJGycZ88=', 3012, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. πίνακες εργαλείων σχεδιασμού";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HysGoEmFg3A=', 3014, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. χρωματικά σύστηματα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HysGoEmFg3A=', 3016, -1, 1);
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
    var weight = DecodeNumber('Phvocmz9JUI=', 3020, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Phvocmz9JUI=', 3020, -1000, 1000),DecodeDecimal('WGnOW6bmxyA=', 3020, -1000, 1000),DecodeDecimal('WGnOW6bmxyA=', 3020, -1000, 1000));
    question.answers.length = 0;
    question.num = 268;
    question.isSingleAns = false;
    question.shortTextQuestion = "268. Σημειώστε το σωστό Σε περίπτωση απώθησης υποκείμενου χρώματος  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t82G7ICQrIA=', 3022, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να δημιουργηθεί μία συναρμογή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t82G7ICQrIA=', 3024, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να δημιουργηθεί μια συναρμογή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mxwE4MQAlas=', 3026, -1, 1);
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
    var weight = DecodeNumber('tX3ojHRWf3w=', 3030, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tX3ojHRWf3w=', 3030, -1000, 1000),DecodeDecimal('MIfOmn0xMso=', 3030, -1000, 1000),DecodeDecimal('MIfOmn0xMso=', 3030, -1000, 1000));
    question.answers.length = 0;
    question.num = 269;
    question.isSingleAns = false;
    question.shortTextQuestion = "269. Σημειώστε το σωστό Τα πλακάτα χρώματα είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('g5Lh6v/e7mo=', 3032, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. προαναμεμειγμένα μελάνια";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g5Lh6v/e7mo=', 3034, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. μελάνια του μοντέλου τετραχρωμίας";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TRwf9O3nFaw=', 3036, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. μελάνια του μοντέλου τριχρωμίας";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dv839fDIhbk=', 3038, -1, 1);
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
    var weight = DecodeNumber('xNIxtVoYDuU=', 3040, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xNIxtVoYDuU=', 3040, -1000, 1000),DecodeDecimal('yR3VMsiNPNY=', 3040, -1000, 1000),DecodeDecimal('yR3VMsiNPNY=', 3040, -1000, 1000));
    question.answers.length = 0;
    question.num = 270;
    question.isSingleAns = false;
    question.shortTextQuestion = "270. Σημειώστε το σωστό Τα πλακάτα χρώματα  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xNIxtVoYDuU=', 3042, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. χρησιμοποιούνται σε ομάδες επιπέδων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T+9gjioCnRQ=', 3044, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Χρησιμοποιούνται σε μεμονωμένα επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('41t7iBpQNCo=', 3046, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. χρησιμοποιούνται είτε σε μεμονωμένα είτε σε ομάδες επιπέδων";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/QI5r2GprD8=', 3048, -1, 1);
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
    var weight = DecodeNumber('ZG1HxDxLOhE=', 3050, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZG1HxDxLOhE=', 3050, -1000, 1000),DecodeDecimal('GtWsKYKdkpk=', 3050, -1000, 1000),DecodeDecimal('GtWsKYKdkpk=', 3050, -1000, 1000));
    question.answers.length = 0;
    question.num = 271;
    question.isSingleAns = false;
    question.shortTextQuestion = "271. Σημειώστε το σωστό Ένα χρώμα ως δεκαεξαδική τιμή αντιγράφεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IcUSl1B0ne8=', 3052, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. στο πρόχειρο ως παράμετρος HTML COLOR";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IcUSl1B0ne8=', 3054, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. ως εικόνα JPEG";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GJfFrjtVlHs=', 3056, -1, 1);
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
    var weight = DecodeNumber('jCCrIBOGcIc=', 3060, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jCCrIBOGcIc=', 3060, -1000, 1000),DecodeDecimal('tp2D4yusS+Q=', 3060, -1000, 1000),DecodeDecimal('tp2D4yusS+Q=', 3060, -1000, 1000));
    question.answers.length = 0;
    question.num = 272;
    question.isSingleAns = false;
    question.shortTextQuestion = "272. Σημειώστε το σωστό Το Zoomify παρέχει τη δυνατότητα να   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3IhvA3JpkZE=', 3062, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. εξάγει αρχεία υψηλής ανάλυσης που μπορούν να ανεβούν σε διακομιστή και οι χρήστες να επιλέγουν ένα συγκεκριμένο σημείο και να κάνουν ζουμ για να δουν περισσότερες λεπτομέρειες";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3IhvA3JpkZE=', 3064, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. εισάγει αρχεία υψηλής ανάλυσης που μπορούν να ανεβούν σε διακομιστή";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7AB1L+DcuE4=', 3066, -1, 1);
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
    var weight = DecodeNumber('mZTEUp/BsTI=', 3070, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mZTEUp/BsTI=', 3070, -1000, 1000),DecodeDecimal('R2uneBbzapE=', 3070, -1000, 1000),DecodeDecimal('R2uneBbzapE=', 3070, -1000, 1000));
    question.answers.length = 0;
    question.num = 273;
    question.isSingleAns = false;
    question.shortTextQuestion = "273. Σημειώστε το σωστό Στοιχείο κατάδειξης είναι  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mZTEUp/BsTI=', 3072, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. ένα κουμπί ή μια εικόνα στο πρόγραμμα Photoshop";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mFjXe+/oR3Q=', 3074, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. ένα κουμπί ή μια εικόνα σε μια σελίδα web, που αλλάζει όταν τοποθετηθεί πάνω του ο δείκτης του ποντικιού";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mFjXe+/oR3Q=', 3076, -1, 1);
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
    var weight = DecodeNumber('MD+mR+pn8f4=', 3080, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MD+mR+pn8f4=', 3080, -1000, 1000),DecodeDecimal('FfLB60dIt9o=', 3080, -1000, 1000),DecodeDecimal('FfLB60dIt9o=', 3080, -1000, 1000));
    question.answers.length = 0;
    question.num = 274;
    question.isSingleAns = false;
    question.shortTextQuestion = "274. Σημειώστε το σωστό To Adobe Bridge  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MD+mR+pn8f4=', 3082, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. είναι ένα πρόγραμμα για συλλογές χρωμάτων";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kEc5SK/K+Pc=', 3084, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. είναι πρόγραμμα για συλλογές εργαλείων";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('at3uS145Tl4=', 3086, -1, 1);
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
    var weight = DecodeNumber('UdXy0uc29MQ=', 3090, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UdXy0uc29MQ=', 3090, -1000, 1000),DecodeDecimal('p25OuwHb9r4=', 3090, -1000, 1000),DecodeDecimal('p25OuwHb9r4=', 3090, -1000, 1000));
    question.answers.length = 0;
    question.num = 275;
    question.isSingleAns = false;
    question.shortTextQuestion = "275. Σημειώστε το σωστό Τα επίπεδα χρησιμοποιούνται για να  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YPASHl8ZbLs=', 3092, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. την εκτέλεση εργασιών όπως η σύνθεση πολλαπλών εικόνων, η προσθήκη κειμένου σε μια εικόνα ή η προσθήκη σχημάτων διανυσματικών γραφικών";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YPASHl8ZbLs=', 3094, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δημιουργηθεί μία εικόνα ενιαία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wvsTi2uuJjQ=', 3096, -1, 1);
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
    var weight = DecodeNumber('itDieRkr9Iw=', 3100, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('itDieRkr9Iw=', 3100, -1000, 1000),DecodeDecimal('JGYifs5eaSg=', 3100, -1000, 1000),DecodeDecimal('JGYifs5eaSg=', 3100, -1000, 1000));
    question.answers.length = 0;
    question.num = 276;
    question.isSingleAns = false;
    question.shortTextQuestion = "276. Σημειώστε το σωστό Τα slice ανάλογα με το περιεχόμενό τους, κατηγοριοποιούνται σε  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('itDieRkr9Iw=', 3102, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Οργανόγραμμα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I+ydLNTlCvI=', 3104, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. Γράφημα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KOibp/rNa5g=', 3106, -1, 1);
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
    var weight = DecodeNumber('4H85W67cCM0=', 3110, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4H85W67cCM0=', 3110, -1000, 1000),DecodeDecimal('500MAckn1Tg=', 3110, -1000, 1000),DecodeDecimal('500MAckn1Tg=', 3110, -1000, 1000));
    question.answers.length = 0;
    question.num = 277;
    question.isSingleAns = false;
    question.shortTextQuestion = "277. Σημειώστε το σωστό Τα αυτόματα slice μετατρέπονται σε  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bz4Kib0mZrc=', 3112, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Slice χρήστη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bz4Kib0mZrc=', 3114, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Slice επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HuMjeuoOF/4=', 3116, -1, 1);
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
    var weight = DecodeNumber('vXkqurCo1RI=', 3120, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vXkqurCo1RI=', 3120, -1000, 1000),DecodeDecimal('6FLbQKsi3g4=', 3120, -1000, 1000),DecodeDecimal('6FLbQKsi3g4=', 3120, -1000, 1000));
    question.answers.length = 0;
    question.num = 278;
    question.isSingleAns = false;
    question.shortTextQuestion = "278. Σημειώστε το σωστό (μπορεί να είναι περισσότερα από ένα) Το slice επιπέδου  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vXkqurCo1RI=', 3122, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να διαιρεθεί";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vPHyRPuBvmM=', 3124, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να διαιρεθεί";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vPHyRPuBvmM=', 3126, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. διαιρείται μόνο καθέτως";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OiOlRpTQspM=', 3128, -1, 1);
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
    var weight = DecodeNumber('Uw8T2HCr8e0=', 3130, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Uw8T2HCr8e0=', 3130, -1000, 1000),DecodeDecimal('Ce/ROND1qZ8=', 3130, -1000, 1000),DecodeDecimal('Ce/ROND1qZ8=', 3130, -1000, 1000));
    question.answers.length = 0;
    question.num = 279;
    question.isSingleAns = false;
    question.shortTextQuestion = "279. Σημειώστε το σωστό (μπορεί να είναι περισσότερα από ένα) Η εμφάνιση των αριθμών slice  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9j+2AAW28yY=', 3132, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. Γίνεται μέσα από το μενού Προτιμήσεις";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9j+2AAW28yY=', 3134, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. Γίνεται μέσα από το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aRqMlg1vaOI=', 3136, -1, 1);
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
    var weight = DecodeNumber('K68zzBLi4Ys=', 3140, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K68zzBLi4Ys=', 3140, -1000, 1000),DecodeDecimal('e3jpQbbFc2c=', 3140, -1000, 1000),DecodeDecimal('e3jpQbbFc2c=', 3140, -1000, 1000));
    question.answers.length = 0;
    question.num = 280;
    question.isSingleAns = false;
    question.shortTextQuestion = "280. Σημειώστε το σωστό Ένα από τα σήματα slice σημαίνει  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('guZWAdcz5zw=', 3142, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. περιέχει εικόνα";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('guZWAdcz5zw=', 3144, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. περιέχει επίπεδα";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xYz4NUc1gcA=', 3146, -1, 1);
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
    var weight = DecodeNumber('uBxiDowx0C8=', 3150, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uBxiDowx0C8=', 3150, -1000, 1000),DecodeDecimal('bfi6TYk31K0=', 3150, -1000, 1000),DecodeDecimal('bfi6TYk31K0=', 3150, -1000, 1000));
    question.answers.length = 0;
    question.num = 281;
    question.isSingleAns = false;
    question.shortTextQuestion = "281. Σημειώστε το σωστό Με την επιλογή τύπου slice «Καμία Εικόνα»  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zhacqr8zC+M=', 3152, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να εισαχθεί κείμενο";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zhacqr8zC+M=', 3154, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να εισαχθεί με τα τυπικά tag HTML";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GP4TYTERwX4=', 3156, -1, 1);
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
    var weight = DecodeNumber('W0vO/gZlwyc=', 3160, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('W0vO/gZlwyc=', 3160, -1000, 1000),DecodeDecimal('RcKYIi0HBgY=', 3160, -1000, 1000),DecodeDecimal('RcKYIi0HBgY=', 3160, -1000, 1000));
    question.answers.length = 0;
    question.num = 282;
    question.isSingleAns = false;
    question.shortTextQuestion = "282. Σημειώστε το σωστό Μπορούμε να ορίσουμε μηνύματα προγραμμάτων περιήγησης μέσα από  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VTBXrvgI0MM=', 3162, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. το μενού Επιλογές slice";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VTBXrvgI0MM=', 3164, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. το μενού Επεξεργασία";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('txgmkO/d0js=', 3166, -1, 1);
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
    var weight = DecodeNumber('xQ8mag2VQD0=', 3170, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xQ8mag2VQD0=', 3170, -1000, 1000),DecodeDecimal('wW8Zucd/vRM=', 3170, -1000, 1000),DecodeDecimal('wW8Zucd/vRM=', 3170, -1000, 1000));
    question.answers.length = 0;
    question.num = 283;
    question.isSingleAns = false;
    question.shortTextQuestion = "283. Σημειώστε το σωστό Η σειρά στοίβαξης  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UkuASGw8Esg=', 3172, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μπορεί να αλλάξει";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UkuASGw8Esg=', 3174, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. δεν μπορεί να αλλάξει";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('u19dAdUQ080=', 3176, -1, 1);
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
    var weight = DecodeNumber('TdBs2kadAP0=', 3180, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TdBs2kadAP0=', 3180, -1000, 1000),DecodeDecimal('Tcc4TeM1SAk=', 3180, -1000, 1000),DecodeDecimal('Tcc4TeM1SAk=', 3180, -1000, 1000));
    question.answers.length = 0;
    question.num = 284;
    question.isSingleAns = false;
    question.shortTextQuestion = "284. Σημειώστε το σωστό Ο συνδυασμός slice γίνεται μόνο  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TdBs2kadAP0=', 3182, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. σε slice χρήστη";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YDU6iC5wvJ8=', 3184, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Β. σε slice επιπέδου";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7w+iek1xtRs=', 3186, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Γ. σε slice αυτόματο";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('u88gajUCtdI=', 3188, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Δ. τίποτα από τα παραπάνω";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('u88gajUCtdI=', 3190, -1, 1);
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
    var weight = DecodeNumber('DXDZXROt0aM=', 3190, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DXDZXROt0aM=', 3190, -1000, 1000),DecodeDecimal('zoHakwJNu8A=', 3190, -1000, 1000),DecodeDecimal('zoHakwJNu8A=', 3190, -1000, 1000));
    question.answers.length = 0;
    question.num = 285;
    question.isSingleAns = false;
    question.shortTextQuestion = "285. Σημειώστε το σωστό Το κλείδωμα όλων των slice γίνεται  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2taCILvZJp4=', 3192, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Α. μέσα από την επιλογή Προβολή";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2taCILvZJp4=', 3194, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "B. μέσα από το πλαίσιο διαλόγου Αποθήκευση για web & συσκευές";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('metMpd1yn2c=', 3196, -1, 1);
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
    this[0] = unescape(DecodeString("XLayYOCRHAAo2UAMA9nr3DN1WHnCjQ/QEfKpvjKkOZeVvSLKPIPQnIEKHbnHY6qJPqi6LegLrNS5G3PB"));
    this[1] = unescape(DecodeString("s9BmJ18lQAr8ozzHYm/i8UVqgg3/QBrXhO5phgyXNmypwVNaY1pRdI/b7LtiUVKoNk0K//Tv18ErFNa1"));
    this[2] = unescape(DecodeString("br16zs67Vvp8LFEm5smPnbW6xzamvnYNsE5pVW19OnBUd4PpD4fCuGac15g1wKVTvo+YJw=="));

}

/* Code generated function */
function CreateListRight15()
{
    this.length = 3;
    this[0] = unescape(DecodeString("k35yW0oSEFDBSP74hTN7Q99fkcxRU/QbcV+qxTre+OuuLP34y4m9Xecl3sVc9GZ1"));
    this[1] = unescape(DecodeString("JCenXMPKnHCqYkwAPfkSJ8ZhHzrhoy2cPqiqQr5jyXank7LWi+eTZp0zMdfOBOnv8YJ/vzXB8LK4v/I6+DVfdSCUAXXFXqppEyy7dQ=="));
    this[2] = unescape(DecodeString("LRSCxOsBnpSwd7P5JO7AwWPaFp/nPpynZiZ1c7vxyIWQ4xAqI3hvdohnqc8Bd2EOLN32pBUNYaic49IKVpyQ8KIatbM5y0ee4znN2phtABeJtVSNQ+zNSzi/WOKcdaNlCWPiWqQgFF1I9pa0jBI4j76qxKh65KEL+DIM2w=="));

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
    this[0] = unescape(DecodeString("vJxfTMg+ooA="));
    this[1] = unescape(DecodeString("l03/L97lL60="));
    this[2] = unescape(DecodeString("Nlz7Ybi4/PY="));
    this[3] = unescape(DecodeString("rVQspSwkobg="));
    this[4] = unescape(DecodeString("HLmQVTYUI54="));

}

/* Code generated function */
function CreateListRight33()
{
    this.length = 5;
    this[0] = unescape(DecodeString("BgfnE8EBZ39ynTaU/cXA58ygCju1dSxZbVaBDw=="));
    this[1] = unescape(DecodeString("IV0/on70vINaz+yaNLgTyns/5i//fiCr"));
    this[2] = unescape(DecodeString("IV0/on70vINaz+yaNLgTyns/5i//fiCr"));
    this[3] = unescape(DecodeString("BgfnE8EBZ39ynTaU/cXA58ygCju1dSxZbVaBDw=="));
    this[4] = unescape(DecodeString("IV0/on70vINaz+yaNLgTyns/5i//fiCr"));

}

/* Code generated function */
function CreateListLeftHtml33()
{
    this.length = 5;

}





