import React from 'react';
import PublicTemplate from '../templates/PublicTemplate'

const Main = (props) => {
    return <PublicTemplate>
        <section className='help-invitation'>
            <h2>Do you need some help with your capsule wardrove?</h2>
            <h1>Let's begin!</h1>
        </section>

        <section className='select-neutral-tops'>
            <h2>First, choose 3 neutral tops</h2>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </section>

        <section className='select-bottoms'>
            <h2>Now the bottoms!</h2>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </section>

        <section className='select-layers'>
            <h2>Sometimes we need to be onions, choose the best layers for you!</h2>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </section>

        <section className='select-accent-piece'>
            <h2>Time to get naughty. What will accent in your looks?</h2>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </section>

        <section className='select-shoes'>
            <h2>Almost there! What shoes will take you to awesome places?</h2>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </section>

        <section className='you-tuck'>
            <h2>...And finally, an important question, do you tuck?</h2>
            <div>
                <input type='radio' id='yes' name='tuck' value='yes' checked />
                <label for='yes'>Obviously</label>
            </div>
            <div>
                <input type='radio' id='no' name='tuck' value='no' />
                <label for='no'>How dare you?</label>
            </div>
        </section>

        <section>
            <button>Now, go!</button>
        </section>

    </PublicTemplate>
}

export default Main;