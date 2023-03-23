import {useState} from 'react';

const Section = ({title , desciption , isVisible , setIsVisible})=>{

    return(
    <div className=" m-2 p-2 border border-black bg-purple-100">
        <h1 className="font-bold text-lg">{title}</h1>
        {
            isVisible ?  <button className='m-2 pl-2 pr-2 bg-sky-700 text-white' 
        onClick={()=>{
            setIsVisible(!isVisible);
            }
        }
        >Hide</button>
        :
        <button className='m-2 pl-2 pr-2 bg-sky-700 text-white' 
        onClick={()=>{
            setIsVisible(!isVisible);
            }
        }
        >Show</button>
        }
       
        { isVisible && <p>{desciption}</p>}
    </div>
    );
}

const Instamart = ()=>{

    const [visibleSection , setVisibleSection] = useState("about");

    return(
       
        <div>
            <Section isVisible = {visibleSection === "about"}
            setIsVisible = { ()=>{
                setVisibleSection("about");
            }}
            title = {"About Us"} desciption={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." }
            />

            <Section  setIsVisible = { ()=>{
                setVisibleSection("team");
            }}
            isVisible = {visibleSection === "team"}
            title = {"Team"} desciption={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." }
            />
            
            <Section isVisible = {visibleSection === "career"}
            setIsVisible = { ()=>{
                setVisibleSection("career");
            }}
            title = {"Career"} desciption={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." }
            />
            
            
            <Section isVisible = {visibleSection === "contactus"}
            setIsVisible = { ()=>{
                setVisibleSection("contactus");
            }}
             title = {"Contact Us"} desciption={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." }
             />

        </div>
    );
};

export default Instamart;