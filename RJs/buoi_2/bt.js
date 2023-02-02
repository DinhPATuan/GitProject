function vaEmail(mail) {
    mailFormat = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/; 
    if (mail.match(mailFormat)){
        console.log('mail true');
    }else{
        console.log('mail false');}
    }

vaEmail('anhtuan@gmail.com');
vaEmail('anhtuangmail.com');

function vaAcc(acc) {
    accFormat = /^[_a-z0-9]{6,}$/; 
    if (acc.match(accFormat)){
        console.log('acc true');
    }else{
        console.log('acc false');}
    }

vaAcc('acbdefg');
vaAcc('acbd@efg');