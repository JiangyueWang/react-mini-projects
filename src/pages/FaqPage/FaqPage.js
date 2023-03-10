import FaqOne from "../../components/FaqOne/FaqOne"; 
import FaqTwo from "../../components/FaqTwo/FaqTwo"; 
import "../FaqPage/FaqPage.css"
const FaqPage = () => {
    const questions = [
        {
          id: 1,
          title: "Is this a good product?",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
          id: 2,
          title: "How much does it cost?",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
          id: 3,
          title: "When can I get it?",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        }
      ];
      
    return (
        <div>
            <h2>FAQ</h2>
            <FaqOne questions={questions} />
            <FaqTwo questions={questions} />
        </div>
    );
}
 
export default FaqPage;