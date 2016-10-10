<airport-query>
  <block title="Query" anchor="doc_airport_query">
    <yield to="left">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent neque lectus, aliquet ut ex ut, blandit consequat justo.
        Morbi blandit, dui id rutrum tincidunt, nisi nunc iaculis lacus, a porta augue dui a nibh. In sollicitudin ante vitae
        metus convallis ornare. Cras dolor est, auctor
      </p>
      <table class="u-full-width">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dave Gamache</td>
            <td>26</td>
            <td>Male</td>
            <td>San Francisco</td>
          </tr>
          <tr>
            <td>Dwayne Johnson</td>
            <td>42</td>
            <td>Male</td>
            <td>Hayward</td>
          </tr>
        </tbody>
      </table>
    </yield>
    <yield to="right">
      <h5>{opts.title}</h5>
      <pre class="prettyprint lang-js">
var destination = sdk.destination;
sdk.destination.query(\{
  name_prefix: "spa", 
  limit: 10 \
});
      </pre>
    </yield>
  </block>
</airport-query>