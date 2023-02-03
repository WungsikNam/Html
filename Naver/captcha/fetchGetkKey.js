const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "V3dY425uFY0UMm3FJFLc");
myHeaders.append("X-Naver-Client-Secret", "BJaKqzpSwh");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
  .then(response => response.json())
  .then(result => {
    const imsi =JSON.stringify(result) 
    console.log(result.key)
  })
  .catch(error => console.log('error', error));