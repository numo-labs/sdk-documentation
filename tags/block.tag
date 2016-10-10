<block>
    <div class="row">
        <div class="six columns">
            <h5 id={opts.anchor}>{opts.title}</h5>
            <yield from="left" />
        </div> 
        <div class="six columns color-light">
            <yield from="right" />
        </div> 
    </div>
    <div class="row">
        <div class="six columns"><div class="hr-light"></div></div>
        <div class="six columns"><div class="hr-dark"></div></div>
    </div>
</block>