#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 color = vec3(texture(image, texcoord));
    vec3 final_color;
    final_color.x = round(4.0 * color.x) / 4.0;
    final_color.y = round(4.0 * color.y) / 4.0;
    final_color.z = round(4.0 * color.z) / 4.0;
    FragColor = vec4(final_color, 1.0);
}
