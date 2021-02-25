const generate = () => {

        const quotes = [
        '"Erma Bombeck", -"Never have more children than you have car windows."',
        '"Doug Larson", -"Never doubt the courage of the French. They were the ones who discovered that snails are edible."',
        '"Billy Sunday", -"Going to church doesn’t make you a Christian any more than going to a garage makes you an automobile."',
        '"Gertrude Stein", -"The digital camera is a great invention because it allows us to reminisce. Instantly."',
        '"George Bernard Shaw", -"Patriotism is your conviction that this country is superior to all others because you were born in it."',
    ];


  const randomName = quotes[Math.floor(Math.random() * quotes.length)];


  document.getElementById("quote").innerHTML = randomName;

};
