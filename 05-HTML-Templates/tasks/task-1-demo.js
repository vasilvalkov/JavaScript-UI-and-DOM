function solve() {
    var hbTheaderTemplate = Handlebars.compile(`{{#headers}}
                <th>{{this}}</th>
                {{/headers}}`);

    document.querySelector('.items-table thead tr').innerHTML += hbTheaderTemplate(data);

    var hbTbodyTemplate = Handlebars.compile(`{{#each items}}
            <tr>
                <td>{{@index}}</td>
                <td>{{this.col1}}</td>
                <td>{{this.col2}}</td>
                <td>{{this.col3}}</td>
            </tr>
            {{/each}}`);

    document.querySelector('.items-table tbody').innerHTML = hbTbodyTemplate(data);
}

solve();