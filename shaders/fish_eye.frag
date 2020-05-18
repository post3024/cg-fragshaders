#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 final_texcoord = (2.0 * texcoord) - 1.0;
    float theta = atan(final_texcoord.y, final_texcoord.x);
    float radius = pow(length(final_texcoord), 1.5);
    final_texcoord = vec2(radius * cos(theta), radius * sin(theta));

    //scale and translate back
    final_texcoord = 0.5 * (final_texcoord + 1.0);

    FragColor = texture(image, final_texcoord);
}
