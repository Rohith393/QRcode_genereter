import { useState } from "react";
import axios from "axios";

export const Componenetpost = () => {
    const [urldata, setUrldata] = useState(''); 
    const [qrcodeurl, setQrcodeurl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFunc = async () => {
        if (!urldata) {
            alert("Please enter a URL");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/users/getqrcode", {
                url: urldata
            });

            if (response.status === 200) {
                console.log("Successfully posted URL");
                setQrcodeurl(response.data.qrcodeurldata);
            }
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="stylecomponenet">
             <div>
            {qrcodeurl && <img className="imagestyles" src={qrcodeurl} alt="QRCODE" />}
            </div>
            <div className="inputstyles">
                <input
                    className="input"
                    name="searchbar"
                    type="search"
                    placeholder="ENTER URL..."
                    value={urldata}
                    onChange={(e) => setUrldata(e.target.value)}
                />
            </div>
            <button className="buttonstyles" onClick={handleFunc}>
                {loading ? "SUBMITTING..." : "SUBMIT"}
            </button>
        </div>
    );
};
