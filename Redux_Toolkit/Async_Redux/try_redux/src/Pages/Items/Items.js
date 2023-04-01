
import './Items.css' 

import React from 'react'

export default function Items() {
  return (
    
//  <!-- All items and their prices -->
 <section>

    <div class="create_search">
                    <form action="">
                    <input class="input_search" type="text" placeholder="   Search items..." /> 
                    <input class="submit_search" type="submit" value=" &#128269;"/>
                </form>
  
    </div>
    <div class="item_parent">

             
                <div class="item">
                    <div><img src="logo192.png" alt=""/>
                     </div>
                     <div class="item_properties">
                         <div>Paris</div>
                         <div>200$</div>
                         <div><span class="update_remove"><div >update</div> </span> <span>|</span> <span  class="update_remove"><a >remove</a></span></div>                     </div>
                 </div>

                 <div class="item">
                    <div><img src="logo192.png" alt=""/>
                     </div>
                     <div class="item_properties">
                         <div>Paris</div>
                         <div>200$</div>
                         <div><span class="update_remove"><div >update</div> </span> <span>|</span> <span  class="update_remove"><a >remove</a></span></div>                     </div>
                 </div>

                 <div class="item">
                    <div><img src="logo192.png" alt=""/>
                     </div>
                     <div class="item_properties">
                         <div>Paris</div>
                         <div>200$</div>
                         <div><span class="update_remove"><div >update</div> </span> <span>|</span> <span  class="update_remove"><a >remove</a></span></div>                     </div>
                 </div>


                 <div class="item">
                    <div><img src="logo192.png" alt=""/>
                     </div>
                     <div class="item_properties">
                         <div>Paris</div>
                         <div>200$</div>
                         <div><span class="update_remove"><div >update</div> </span> <span>|</span> <span  class="update_remove"><a >remove</a></span></div>                     </div>
                 </div>


                 <div class="item">
                    <div><img src="logo192.png" alt=""/>
                     </div>
                     <div class="item_properties">
                         <div>Paris</div>
                         <div>200$</div>
                         <div><span class="update_remove"><a >update</a> </span> <span>|</span> <span  class="update_remove"><a >remove</a></span></div>                     </div>
                 </div>
                       
    </div>
            <div class="add_item"><div >&plus;</div> </div>
            
</section>
  )
}
