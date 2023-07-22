function handleSubmit () {
    const fname = document.getElementById('fname').value;
    const age = document.getElementById('age').value;

    localStorage.setItem("NAME", fname);
    localStorage.setItem("AGE ",age);

    return;
}