
//imports the function with the return html code
import Upload from './Upload.js';
import Hero from './Hero.js';
import Project from './Project.js';
import Header from './Header.js';
import Bottom from './Bottom.js';
import '.././css/general.css'



function Website() {
  

//-------------------------------------------------------------------------------------------------
// Loads the posts on page load
      // make sure posts is listening to the backend, not the front end

    
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Project></Project>
            <Upload></Upload>
            <Bottom></Bottom>
        </div>

    )
}

export default Website