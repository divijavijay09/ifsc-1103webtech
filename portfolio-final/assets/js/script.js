// Function to initialize the Wufoo form
const loadWufooForm = () => {
  const scriptElement = document.createElement('script');
  const firstScript = document.getElementsByTagName('script')[0];

  const options = {
    'userName': 'djvj',
    'formHash': 'z23ydg61dl89gt',
    'autoResize': true,
    'height': '398',
    'async': true,
    'host': 'wufoo.com',
    'header': 'show',
    'ssl': true
  };

  scriptElement.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'secure.wufoo.com/scripts/embed/form.js';
  
  scriptElement.onload = scriptElement.onreadystatechange = function() {
    const rs = this.readyState;
    if (rs && rs != 'complete' && rs != 'loaded') return;
    
    try {
      const z23ydg61dl89gt = new WufooForm();
      z23ydg61dl89gt.initialize(options);
      z23ydg61dl89gt.display();
    } catch (e) {
      console.error("Wufoo form failed to load:", e);
    }
  };

  firstScript.parentNode.insertBefore(scriptElement, firstScript);
};

// Run the function
loadWufooForm();