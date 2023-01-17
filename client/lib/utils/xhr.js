

/* readyState
0 : uninitalized // 초기화
1 : loading // 로딩
2 : loaded // 로딩이 완료된
3 : interactive // 인터렉티브
4 : complete // 완료
 */



export const xhrData = ({
    url='',
    method='GET',
    onSuccess= null,
    onFail=null,
    body=null,
    headers={
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin':'*'
    },
}={}) =>{

    const xhr = new XMLHttpRequest();
    
    // 비동기 통신 오픈
    xhr.open(method,url)

    // Object.entries(headers).forEach(([key,value])=>{
    //     console.log(xhr.setRequestHeader(key,value))
    // })
    
    xhr.addEventListener('readystatechange',()=>{
        // 객체 구조 분해 할당
        const {status,readyState,response} = xhr;
        if(status >= 200 && status < 400){
            if(readyState === 4){
                console.log('통신 성공')
                onSuccess(JSON.parse(response))
            }
        }else{
            onFail('통신실패')
        }
    })
    
    // 서버에 요청
    xhr.send(JSON.stringify(body))
}

xhrData({
    url:'https://jsonplaceholder.typicode.com/user/1',
    onSuccess: (result)=>{
        console.log(result)
    },
    onFail:(err)=>{
        console.error(err)
    }
})

// get 메서드
xhrData.get = (url,onSuccess,onFail) =>{
    xhrData({
        url,
        onSuccess,
        onFail
    })
}

// post 메서드
xhrData.post = (url,body,onSuccess, onFail) =>{
    xhrData({
        method:'POST',
        body,
        url,
        onSuccess,
        onFail
    })
}
// put 메서드
xhrData.put = (url,body,onSuccess, onFail) =>{
    xhrData({
        method:'PUT',
        body,
        url,
        onSuccess,
        onFail
    })
}
// delete 메서드
xhrData.delete = (url,onSuccess,onFail) =>{
    xhrData({
        method:'DELETE',
        url,
        onSuccess,
        onFail
    })
}

xhrData.post(
    'https://jsonplaceholder.typicode.com/users',
    (result)=>{
        console.log(result)
    },
    (err)=>{
        console.log(err)
    }
)