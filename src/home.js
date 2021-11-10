import React from 'react';
import './home.css';

export default function Home() {
    return (
        <>
            <header><h2>HEADER - Sample FlexBox Example</h2></header>
            <div class="mainContainer">
                <section class="mainContentItem">
                    <article>
                        <h2>First article</h2>
                        <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.
                            It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
                    </article>
                    <article>
                        <h2>Second article</h2>
                        <p>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.
                            HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p>
                    </article>
                    <article>
                        <h2>Third article</h2>
                        <p>HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.
                            HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items.</p>
                        <p>HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.
                            Inclusion of CSS defines the look and layout of content.</p>
                    </article>
                </section>
                <nav class="sideBarItem">Nav</nav>
                <aside class="sideBarItem">Aside</aside>
            </div>
            <footer><h3>Footer</h3></footer>
        </>
    );
}
