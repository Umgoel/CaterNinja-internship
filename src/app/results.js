window.addEventListener('load',  () => {
    // const params = (new URL(document.location)).searchParams;
    // const fname = params.get('fname');
    // const age = params.get('age');

    const name = localStorage.getItem('fname');
    const age = localStorage.getItem('age');

    document.getElementById('result-name').innerHTML = fname;
    document.getElementById('result-age').innerHTML = age;
})