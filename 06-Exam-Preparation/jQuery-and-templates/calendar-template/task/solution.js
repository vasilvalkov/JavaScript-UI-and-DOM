function solve() {
    return function (selector) {
        var template = [
            // put the lines of your template in this array as strings
            `<div class="events-calendar">
            <h2 class="header">
                Appointments for <span class="month">{{month}}</span> <span class="year">{{year}}</span>
            </h2>
            {{#each days}}
            <div class="col-date">
                <div class="date">{{day}}</div>
                {{#each events}}
                <div class="events">
                    {{#if title}}
                    <div class="event {{importance}}" title="{{comment}}">
                        <div class="title">{{title}}</div>
                        <span class="time">at: {{time}}</span>
                    </div>
                    {{else}}
                    <div class="event none">
                        <div class="title">Free slot</div>
                    </div>
                    {{/if}}
                </div>
                {{/each}}
            </div>
            {{/each}}
        </div>`
        ].join('');

        if(template.length) {
            document.getElementById(selector).innerHTML = template;
        }
    };
}

if (typeof module !== 'undefined') {
    module.exports = solve;
}