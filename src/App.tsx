import WaveBall from "react-wave-progress-ball-svg";
import { Button, Card, Collapse, ColorPicker, Flex, Form, Slider, Switch, Tabs, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { TabsProps } from "antd";
import { useTranslation } from 'react-i18next';
import "react-wave-progress-ball-svg/dist/style.css";
import "./App.css";

function App() {
    const { t } = useTranslation();
    const [value, setValue] = useState<number>(50);
    const [adaptive, setAdaptive] = useState<boolean>(false);
    const [size, setSize] = useState<number>(350);
    const [circleColor, setCircleColor] = useState<string>("#bdc3c7");
    const [circleLineWidth, setCircleLineWidth] = useState<number>(1);
    const [waveHeight, setWaveHeight] = useState<number>(30);
    const [isWaveGradient, setIsWaveGradient] = useState<boolean>(true);
    const [isWaveBgGradient, setIsWaveBgGradient] = useState<boolean>(true);
    const [waveColor, setWaveColor] = useState<string>("#43CF73");
    const [waveBgColor, setWaveBgColor] = useState<string>("rgba(130, 221, 95,0.5)");
    const [waveGradientColor, setWaveGradientColor] = useState<{ start: string; end: string }>({
        start: "#43CF73",
        end: "#BCEC4F",
    });
    const [waveBgGradientColor, setWaveBgGradientColor] = useState<{ start: string; end: string }>({
        start: "rgba(130, 221, 95,0.5)",
        end: "rgba(130, 221, 97,0.5)",
    });
    const [waveSpeed, setWaveSpeed] = useState<number>(3);
    const [waveBgSpeed, setWaveBgSpeed] = useState<number>(3);
    const [waveOffsetY, setWaveOffsetY] = useState<number>(0);
    const [waveBgOffsetY, setWaveBgOffsetY] = useState<number>(0);
    const [waveBgOffsetX, setWaveBgOffsetX] = useState<number>(1);
    const [showWaveBg, setShowWaveBg] = useState<boolean>(true);
    const [reverseWave, setReverseWave] = useState<boolean>(false);
    const [reverseWaveBg, setReverseWaveBg] = useState<boolean>(false);
    const setting = {
        size,
        adaptive,
        circleColor,
        circleLineWidth,
        waveHeight,
        isWaveGradient,
        isWaveBgGradient,
        waveColor,
        waveBgColor,
        waveGradientColor,
        waveBgGradientColor,
        waveSpeed,
        waveBgSpeed,
        waveOffsetY,
        waveBgOffsetY,
        waveBgOffsetX,
        showWaveBg,
        reverseWave,
        reverseWaveBg,
    };

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: t('BasicSettings.title'),
            children: (
                <>
                    <Form.Item label={t('BasicSettings.value')}>
                        <Slider key="height" defaultValue={value} onChange={setValue} min={0} max={100} step={1} />
                    </Form.Item>
                    <Form.Item label={t('BasicSettings.adapt')}>
                        <Switch
                            value={adaptive}
                            onChange={setAdaptive}
                            checkedChildren={t('BasicSettings.adaptToSize')}
                            unCheckedChildren={t('BasicSettings.fixedSize')}
                        />
                    </Form.Item>
                    {!adaptive && (
                        <Form.Item label={t('BasicSettings.size')}>
                            <Slider key="size" defaultValue={size} onChange={setSize} min={10} max={1000} step={1} />
                        </Form.Item>
                    )}
                </>
            ),
        },
        {
            key: "2",
            label: t('CircleSettings.title'),
            children: (
                <>
                    <Form.Item label={t('CircleSettings.lineWidth')}>
                        <Slider
                            key="lineWidth"
                            defaultValue={circleLineWidth}
                            onChange={setCircleLineWidth}
                            min={0}
                            max={10}
                            step={1}
                        />
                    </Form.Item>
                    <Form.Item label={t('CircleSettings.color')}>
                        <ColorPicker
                            key="circleColor"
                            value={circleColor}
                            onChange={(color) => setCircleColor(color.toRgbString())}
                            showText
                        />
                    </Form.Item>
                </>
            ),
        },
        {
            key: "3",
            label: t('WaveSettings.title'),
            children: (
                <>
                    <Form.Item label={t('WaveSettings.height')}>
                        <Slider
                            key="waveHeight"
                            defaultValue={waveHeight}
                            onChange={setWaveHeight}
                            min={0}
                            max={175}
                            step={1}
                        />
                    </Form.Item>
                    <Flex gap="middle" wrap justify="center">
                        <Card title={t('WaveSettings.foregroundWave')} type="inner">
                            <Form.Item
                                label={
                                    <>
                                        {t('WaveSettings.waveSpeed')}&nbsp;
                                        <Tooltip title={t('WaveSettings.smallFast')}>
                                            <QuestionCircleOutlined style={{ color: "gray" }} />
                                        </Tooltip>
                                    </>
                                }>
                                <Slider
                                    key="speed"
                                    defaultValue={waveSpeed}
                                    onChange={setWaveSpeed}
                                    min={0.1}
                                    max={10}
                                    step={0.1}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.waveOffsetY')}>
                                <Slider
                                    key="dy"
                                    defaultValue={waveOffsetY}
                                    onChange={setWaveOffsetY}
                                    min={-35}
                                    max={35}
                                    step={1}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.isWaveReverse')}>
                                <Switch
                                    value={reverseWave}
                                    onChange={setReverseWave}
                                    checkedChildren={t('WaveSettings.left')}
                                    unCheckedChildren={t('WaveSettings.right')}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.isWaveGradient')}>
                                <Switch
                                    value={isWaveGradient}
                                    onChange={setIsWaveGradient}
                                    checkedChildren={t('WaveSettings.gradient')}
                                    unCheckedChildren={t('WaveSettings.single')}
                                />
                            </Form.Item>
                            {isWaveGradient ? (
                                <>
                                    <Form.Item label={t('WaveSettings.Gradient-start')}>
                                        <ColorPicker
                                            key="Color-1-1"
                                            value={waveGradientColor.start}
                                            onChange={(color) =>
                                                setWaveGradientColor((value) => {
                                                    return { start: color.toRgbString(), end: value.end };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                    <Form.Item label={t('WaveSettings.Gradient-end')}>
                                        <ColorPicker
                                            key="Color-1-2"
                                            value={waveGradientColor.end}
                                            onChange={(color) =>
                                                setWaveGradientColor((value) => {
                                                    return { start: value.start, end: color.toRgbString() };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            ) : (
                                <>
                                    <Form.Item label={t('WaveSettings.color')}>
                                        <ColorPicker
                                            key="Color-1-3"
                                            value={waveColor}
                                            onChange={(color) => setWaveColor(color.toRgbString())}
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            )}
                        </Card>
                        <Card title={t('WaveSettings.backgroundWave')} type="inner">
                            <Form.Item
                                label={
                                    <>
                                        {t('WaveSettings.waveSpeed')}&nbsp;
                                        <Tooltip title={t('WaveSettings.smallFast')}>
                                            <QuestionCircleOutlined style={{ color: "gray" }} />
                                        </Tooltip>
                                    </>
                                }>
                                <Slider
                                    key="speed-2"
                                    defaultValue={waveBgSpeed}
                                    onChange={setWaveBgSpeed}
                                    min={0.1}
                                    max={10}
                                    step={0.1}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.waveOffsetX')}>
                                <Slider
                                    key="dx"
                                    defaultValue={waveBgOffsetX}
                                    onChange={setWaveBgOffsetX}
                                    min={0}
                                    max={2}
                                    step={0.1}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.waveOffsetY')}>
                                <Slider
                                    key="dy-2"
                                    defaultValue={waveBgOffsetY}
                                    onChange={setWaveBgOffsetY}
                                    min={-35}
                                    max={35}
                                    step={1}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.bgWaveShow')}>
                                <Switch
                                    value={showWaveBg}
                                    onChange={setShowWaveBg}
                                    checkedChildren={t('WaveSettings.show')}
                                    unCheckedChildren={t('WaveSettings.hide')}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.isWaveReverse')}>
                                <Switch
                                    value={reverseWaveBg}
                                    onChange={setReverseWaveBg}
                                    checkedChildren={t('WaveSettings.left')}
                                    unCheckedChildren={t('WaveSettings.right')}
                                />
                            </Form.Item>
                            <Form.Item label={t('WaveSettings.isWaveGradient')}>
                                <Switch
                                    value={isWaveBgGradient}
                                    onChange={setIsWaveBgGradient}
                                    checkedChildren={t('WaveSettings.gradient')}
                                    unCheckedChildren={t('WaveSettings.single')}
                                />
                            </Form.Item>
                            {isWaveBgGradient ? (
                                <>
                                    <Form.Item label={t('WaveSettings.Gradient-start')}>
                                        <ColorPicker
                                            key="Color-2-1"
                                            value={waveBgGradientColor.start}
                                            onChange={(color) =>
                                                setWaveBgGradientColor((value) => {
                                                    return { start: color.toRgbString(), end: value.end };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                    <Form.Item label={t('WaveSettings.Gradient-end')}>
                                        <ColorPicker
                                            key="Color-2-2"
                                            value={waveBgGradientColor.end}
                                            onChange={(color) =>
                                                setWaveBgGradientColor((value) => {
                                                    return { start: value.start, end: color.toRgbString() };
                                                })
                                            }
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            ) : (
                                <>
                                    <Form.Item label={t('WaveSettings.color')}>
                                        <ColorPicker
                                            key="Color-2-3"
                                            value={waveBgColor}
                                            onChange={(color) => setWaveBgColor(color.toRgbString())}
                                            showText
                                        />
                                    </Form.Item>
                                </>
                            )}
                        </Card>
                    </Flex>
                </>
            ),
        },
        {
            key: "4",
            label: t('Output.title'),
            children: (
                <>
                    <Button
                        block
                        type="primary"
                        onClick={() => navigator.clipboard.writeText(JSON.stringify(setting, null, 2))}>
                        {t('Output.copy')}
                    </Button>
                    <code className="output">{JSON.stringify(setting, null, 2)}</code>
                    <Collapse
                        items={[
                            {
                                key: "1",
                                label: t('Output.example'),
                                children: <ExampleCode {...setting} />,
                            },
                        ]}
                    />
                </>
            ),
        },
    ];

    return (
        <>
            <WaveBall value={value} {...setting} />
            <Tabs defaultActiveKey="1" items={items} />
        </>
    );
}

function ExampleCode(props: BallSetting) {
    return (
        <code
            style={{
                textAlign: "left",
                userSelect: "text",
                whiteSpace: "pre-wrap",
                display: "block",
                padding: "8px",
                borderRadius: "8px",
            }}>
            {`import WaveBall from "react-wave-progress-ball-svg";
import "react-wave-progress-ball-svg/dist/style.css";

export function ExampleBall(){
  const [value, setValue] = useState(50)
  const settings = ${JSON.stringify(props, null, 2)}
  return (
      <>
          <WaveBall value={value} {...settings} />
      </>
  )
}
`}
        </code>
    );
}

export interface BallSetting {
    /** 自{t('src.App.838473-1')} */
    adaptive: boolean;
    /** 圆环的半径 */
    size: number;
    /** 圆环的{t('src.App.838473-21')} */
    circleColor: string;
    /** 圆环线条的宽度 */
    circleLineWidth: number;
    /** 波浪的高度 */
    waveHeight: number;
    /** 是否启用波浪{t('src.App.838473-17')}效果 */
    isWaveGradient: boolean;
    /** 是否启用{t('src.App.838473-22')}{t('src.App.838473-17')}效果 */
    isWaveBgGradient: boolean;
    /** 波浪的{t('src.App.838473-21')} */
    waveColor: string;
    /** {t('src.App.838473-22')}的{t('src.App.838473-21')} */
    waveBgColor: string;
    /** 波浪{t('src.App.838473-17')}色的起始和{t('src.App.838473-20')} */
    waveGradientColor: {
        /** {t('src.App.838473-17')}的起始{t('src.App.838473-21')} */
        start: string;
        /** {t('src.App.838473-17')}的{t('src.App.838473-20')} */
        end: string;
    };
    /** {t('src.App.838473-22')}{t('src.App.838473-17')}色的起始和{t('src.App.838473-20')} */
    waveBgGradientColor: {
        /** {t('src.App.838473-22')}{t('src.App.838473-17')}的起始{t('src.App.838473-21')} */
        start: string;
        /** {t('src.App.838473-22')}{t('src.App.838473-17')}的{t('src.App.838473-20')} */
        end: string;
    };
    /** 波浪的移动速度 */
    waveSpeed: number;
    /** {t('src.App.838473-22')}的移动速度 */
    waveBgSpeed: number;
    /** 波浪的垂直偏移量 */
    waveOffsetY: number;
    /** {t('src.App.838473-22')}的垂直偏移量 */
    waveBgOffsetY: number;
    /** {t('src.App.838473-22')}的水平偏移量 */
    waveBgOffsetX: number;
    /** {t('src.App.838473-24')}{t('src.App.838473-22')} */
    showWaveBg: boolean;
    /** 是否{t('src.App.838473-13')} */
    reverseWave: boolean;
    /** 是否反转{t('src.App.838473-22')} */
    reverseWaveBg: boolean;
}

export default App;
