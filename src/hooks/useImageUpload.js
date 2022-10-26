import   { useEffect, useState } from 'react';

const useImageUpload = imageUrl => {
    const [image, setImage] = useState('');
    
    const imagestorageKey = '3582de6481b734f98ff58713b1465520';

    useEffect(()=>{
        const formData = new FormData();
        formData.append('image', imageUrl);
        const url = `https://api.imgbb.com/1/upload?key=${imagestorageKey}`;
        if(imageUrl){

            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    const img = result.data.url
                    setImage(img)
                }
                console.log(result);
            })
            
        }
    },[imageUrl]);

    return [image];
};

export default useImageUpload;