function findLargestPalindrome(words) {
    /*const result = words.filter((word) => {
        let reverseWord = word.toLowerCase().split("").reverse().join("");
        console.log(reverseWord === word.toLowerCase() ? 'palindromo' : 'no palindromo');
        return reverseWord === word.toLowerCase() ? 'palindromo' : 'no palindromo'
    })
    console.log('result:', result)
    Tu código aquí 👈
    return result;*/
    const palindromos = words.filter((word) => word.toLowerCase() === word.toLowerCase().split("").reverse().join(""))
    const result = palindromos.reverse().reduce((acc, val) => acc.length > val.length ? acc : val, '');
    return result === '' ? null : result;
  }

  console.log(
  findLargestPalindrome(["madam", "civic", "html", "css"])
  )