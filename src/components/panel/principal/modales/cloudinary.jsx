import React, { useState } from 'react';

export default function Cloudinary() {
    const preset_name = 'modulares';
    const cloud_name = 'dr8pv3hga';

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', preset_name)

        setLoading(true)

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: data
            });
            const file = await response.json();
            setImage(file.secure_url)
            setLoading(false)
        }catch(err){
            console.error('Error subviendo imagen', err)
            setLoading(false)
        }
    }
    return (
        <div className="div">
            <h1>Uploa</h1>

            <input type="file" name="file" placeholder='subir' onChange={(e) => uploadImage(e)} />

            {
                loading ? (
                    <h1>Cargando</h1>
                ): (
                    <img src={image} alt="" />
                )
            }
        </div>
    )
}