precision highp float;

in vec3 v_color;

void main()
{
    outputFragmentColor = vec4(v_color, 1.0);
}
