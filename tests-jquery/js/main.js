function addNumber() {
    let text, number;
    text = $(this).text();
    number = text.length;
    $(this).text(text + " " + number);
}

$('p').each(addNumber);
