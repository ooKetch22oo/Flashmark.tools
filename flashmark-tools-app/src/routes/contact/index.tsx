import { component$, useStyles$ } from "@builder.io/qwik";
import ContactStyles from './contact.css?inline';

export default component$(() => {
    useStyles$(ContactStyles)

    return (
        <>
        <article>
          <h2>Contact Us</h2>
            <p>We're here to help you with any questions or support you may need. Reach out to us through the following contact options:</p>
            <section>
                <h3>Email</h3>
                <p>For general inquiries, please email us at: <a href="mailto:support@flashmark.tools">support@flashmark.tools</a></p>
            </section>
        </article>
        </>
    )
})