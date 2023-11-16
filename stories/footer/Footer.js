import './footer.css';

export const createFooter = ({
        primary = false,
        size = 'full',
        backgroundColor,
    }) => {
    const footer = document.createElement('footer');
    const mode = primary ? 'storybook-footer--primary' : 'storybook-footer--secondary';
    footer.className = ['storybook-footer', `storybook-footer--${size}`, mode].join(' ');

    const section = `
    <section class="storybook-footer_inner">
        Footer HTML
    </section>
    `;

    footer.insertAdjacentHTML('beforeend', section);

    footer.style.backgroundColor = backgroundColor;

    return footer;
};
