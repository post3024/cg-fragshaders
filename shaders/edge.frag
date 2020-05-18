#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 top_left = texture(image, vec2(texcoord.x - 1.0/width, texcoord.y + 1.0/height)).rgb;
    vec3 top_center = texture(image, vec2(texcoord.x, texcoord.y + 1.0/height)).rgb;
    vec3 top_right = texture(image, vec2(texcoord.x + 1.0/width, texcoord.y + 1.0/height)).rgb;
    vec3 center_left = texture(image, vec2(texcoord.x - 1.0/width, texcoord.y)).rgb;
    vec3 center_right = texture(image, vec2(texcoord.x + 1.0/width, texcoord.y)).rgb;
    vec3 bottom_left = texture(image, vec2(texcoord.x - 1.0/width, texcoord.y - 1.0/height)).rgb;
    vec3 bottom_center = texture(image, vec2(texcoord.x, texcoord.y - 1.0/height)).rgb;
    vec3 bottom_right = texture(image, vec2(texcoord.x + 1.0/width, texcoord.y - 1.0/height)).rgb;

    vec3 sobel_h = bottom_right + (2.0 * center_right) + top_right - bottom_left - (2.0 * center_left) - top_left;
    vec3 sobel_v = bottom_left + (2.0 * bottom_center) + bottom_right - top_left - (2.0 * top_center) - top_right;
    vec3 sobel_edge = sqrt((sobel_h * sobel_h) + (sobel_v * sobel_v));

    if(length(sobel_edge) >= 0.5) {
      FragColor = vec4(0, 0, 0, 1);
    }
    else {
      FragColor = texture(image, texcoord);
    }
}
