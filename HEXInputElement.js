class HEXInputElement {
    constructor(query_key) {
        this.div = document.querySelector(query_key);
        this.hexinput = document.querySelector(query_key).querySelector('input');

        this.hex_array = [];

        this.hexinput.addEventListener('input', (e) => {
            this.hex_array = [];
            let message = e.target.value;
            let commands = message.split(/[\s,]+/);
            if (commands[(commands.length - 1)] == '') {
                commands.pop();
            }
            let key = e.data;

            for (let command of commands) {
                this.hex_array.push(parseInt(command, 16));
            }


            this.createHEXTableElement();
        })
    };
    getHEXArray() {
        console.log('return', this.hex_array);
        return this.hex_array;
    }
    createHEXTableElement() {
        let dom = document.querySelector('div#hextable');
        if (!dom) {
            dom = document.createElement('div');
            dom.classList = "col-12 mt-2";
            dom.id = 'hextable';
        }

        let str_html = '<table class="table table-sm"><thead class="table-light"><tr><th>No.</th>';
        for (let i = 0; i < this.hex_array.length; i++) {
            str_html += `<th>${i}</th>`
        }
        str_html += '</tr>'
        str_html += '<tr><th>HEX</th>'
        for (let value of this.hex_array) {
            str_html += `<td>${value.toString(16).toUpperCase()}</td>`
        }
        str_html += '</tr>'

        str_html += '</tr></thead><tbody>'
        str_html += '<tr><th>DEC</th>'
        for (let value of this.hex_array) {
            str_html += `<td>${value}</td>`
        }

        str_html += '</table>'
        dom.innerHTML = str_html;
        this.div.appendChild(dom);
        return;
    }

}

