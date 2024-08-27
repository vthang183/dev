function saveAccounts(accounts) {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

function loadAccounts() {
    const storedAccounts = localStorage.getItem('accounts');
    if (storedAccounts) {
        return JSON.parse(storedAccounts);
    }
    return [];
}
var accounts = loadAccounts();
function validateCredentials(username, password) {
    const account = accounts.find(acc => acc.username === username && acc.password === password);
    return account !== undefined;
}
