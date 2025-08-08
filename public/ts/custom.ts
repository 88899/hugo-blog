const highlights = document.querySelectorAll('.article-content div.highlight');
        const copyText = `📄拷贝`,
            copiedText = `已拷贝!`;

        highlights.forEach(highlight => {
            const copyButton = document.createElement('button');
            copyButton.innerHTML = copyText;
            copyButton.classList.add('copyCodeButton');
            highlight.appendChild(copyButton);

            const codeBlock = highlight.querySelector('code[data-lang]');
            // 获取语言
            const lang = codeBlock.getAttribute('data-lang');
            if (!codeBlock) return;

            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(codeBlock.textContent)
                    .then(() => {
                        copyButton.textContent = copiedText;

                        setTimeout(() => {
                            copyButton.textContent = copyText;
                        }, 1000);
                    })
                    .catch(err => {
                        alert(err)
                        console.log('Something went wrong', err);
                    });
            });

            // Add language code button
            const languageButton = document.createElement('button');
            languageButton.innerHTML = lang.toUpperCase()+'&nbsp;&nbsp;';
            languageButton.classList.add('languageCodeButton');

            highlight.appendChild(languageButton);
        });

        new StackColorScheme(document.getElementById('dark-mode-toggle'));